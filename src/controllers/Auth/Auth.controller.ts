import { autoInjectable, inject } from "tsyringe";
import { NextFunction, Request, Response } from "express";
import { successResponse } from "../../utils/helpers/responseTraits";
import container from "../../utils/helpers/ioc.config"
import AuthService from "../../services/Auth/auth.service";
import { httpStatusCodes } from "../../utils/helpers/httpStatusCodes";
import { createCustomError } from "../../utils/errors/customError";
import { decodeJWT } from "../../utils/helpers/token";
@autoInjectable()
export default class AuthController {
  // private _authService:AuthService;
  // constructor(@inject(AuthService) authService:AuthService){
  //   this._authService = authService
  // }

  async createAccount(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { email, firstName, lastName, referralCode, salesFunnel } = req.body;
      const user = await authService.registerUser({ email, firstName, lastName, referralCode, salesFunnel });
      res.status(httpStatusCodes.CREATED).json(
        successResponse({
          data: user,
          message: "User created successfully",
          statusCode: httpStatusCodes.CREATED,
        })
      );
    } catch (error: any) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { otp } = req.body;
      const { verify: { payload } } = decodeJWT(req.headers.authorization?.split(" ")[1]);
      const user = await authService.verifyOtp(otp, payload.id, payload.type, { nextStep: payload.nextStep, servedAtStep: payload.servedAtStep, type: payload.type });
      res.status(httpStatusCodes.OK).json(
        successResponse({
          data: user,
          message: "User verified successfully",
          statusCode: httpStatusCodes.OK,
        })
      );
    } catch (error: any) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async submitPhoneNumber(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { phone } = req.body;
      const { verify: { payload } } = decodeJWT(req.headers.authorization?.split(" ")[1]);
      const submit = await authService.submitUserPhoneNumber({ phone, id: payload.id });
      res.status(httpStatusCodes.CREATED).json(
        successResponse({
          data: submit,
          message: "User phone updated, an OTP has been sent to the phone",
          statusCode: httpStatusCodes.OK,
        })
      );

    } catch (error) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async createPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { password } = req.body;
      const { verify: { payload } } = decodeJWT(req.headers.authorization?.split(" ")[1]);
      const createPassword = await authService.createPassword(password, payload.id);
      res.status(httpStatusCodes.CREATED).json(
        successResponse({
          data: null,
          message: "User password created, account creation completed",
          statusCode: httpStatusCodes.OK,
        })
      );
    } catch (error) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { email, password, deviceToken } = req.body;
      const login = await authService.login(email, password, deviceToken);
      res.status(httpStatusCodes.OK).json(
        successResponse({
          data: login,
          message: "User logged in successfully",
          statusCode: httpStatusCodes.OK,
        })
      );
    } catch (error) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async initializeForgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const authService = container.resolve(AuthService);
      const { email } = req.body
      const initialize = await authService.initializeForgotPassword(email);
      res.status(httpStatusCodes.OK).json(
        successResponse({
          data: initialize,
          message: "User passwor recovery process initiated, kindly check your mail for the OTP",
          statusCode: httpStatusCodes.OK,
        })
      );
    } catch (error) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }

  async updatePasswordFromForgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      // TODO: Check the token being passed to be the token for this usecase
      const authService = container.resolve(AuthService);
      const { password } = req.body;
      const { verify: { payload } } = decodeJWT(req.headers.authorization?.split(" ")[1]);
      const passwordUpdate = await authService.updateUserPasswordViaForgotPassword(password, payload.id);
      res.status(httpStatusCodes.OK).json(
        successResponse({
          data: passwordUpdate,
          message: "Your password been updated successfully",
          statusCode: httpStatusCodes.OK,
        })
      );
    } catch (error) {
      next(
        createCustomError(
          error.message,
          error.statusCode ?? httpStatusCodes.INTERNAL_SERVER_ERROR
        )
      );
    }
  }
}