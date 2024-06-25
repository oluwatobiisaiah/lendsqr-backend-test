import { Request, Response, NextFunction } from "express";
import config from "../../config/config";
import jwt, {Secret } from "jsonwebtoken";
import { errorResponse } from "./responseTraits";
import { httpStatusCodes } from "./httpStatusCodes";
import userDTO from "../../dto/user.dto";

export const generateJWT = (payload: Partial<userDTO> & { nextStep?: number, type: string, servedAtStep?: number }, expiry: string) => {
  return { verify: jwt.sign({ payload }, config.JWT_SECRET as Secret, { expiresIn: expiry }) };
};

export const decodeJWT = (token: any): any /*Partial<userDTO> & { nextStep: number, type: string, servedAtStep: number }|JwtPayload |string */ => {
  try {
    return {verify: jwt.verify(token, config.JWT_SECRET as Secret)};
  } catch (error: any) {
    return {
      verify: false,
      message: error.message,
    };
  }
};

export const validateToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (
      !req.headers.authorization ||
      !req.headers.authorization.startsWith("Bearer ")
    ) {
      res.status(httpStatusCodes.UNAUTHORIZED).json(errorResponse({
        statusCode: httpStatusCodes.UNAUTHORIZED,
        message: "User unauthorized to access this route...",
        data: null,
      }));
      return;
    }

    const authData = decodeJWT(req.headers.authorization.split(" ")[1]);
    if (authData.verify) {
      next();
    } else {
      res.status(httpStatusCodes.UNAUTHORIZED).json(errorResponse({ statusCode: httpStatusCodes.UNAUTHORIZED, message: req.url == "/verify-otp" ? "Token expired, kindly request for another OTP" : "User unauthorized", data: null }));
    }
  } catch (error: any) {
    res.status(httpStatusCodes.UNAUTHORIZED).json(errorResponse({
      statusCode: httpStatusCodes.UNAUTHORIZED,
      message: error.message,
      data: null
    }));
  }
}