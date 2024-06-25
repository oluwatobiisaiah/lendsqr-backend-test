// src/middlewares/advancedErrorHandlerMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../../utils/helpers/responseTraits";
import { httpStatusCodes } from "../../utils/helpers/httpStatusCodes";
import { CustomAPIError } from "../../utils/errors/customError";

export const advancedErrorHandlerMiddleware = async (
  err: any,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    return res
      .status(err.code)
      .json(
        errorResponse({
          message: err.message,
          statusCode: err.code,
          data: null,
        })
      );
  } else {
    return res
      .status(httpStatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        errorResponse({
          message: "Something went wrong,please try again later.",
          statusCode: 500,
          data: null,
        })
      );
  }
};
