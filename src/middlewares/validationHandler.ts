import { httpStatusCodes } from "../utils/helpers/httpStatusCodes";
import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";
import { errorResponse } from "../utils/helpers/responseTraits";
const validationHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
  schema: Schema
) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(httpStatusCodes.BAD_REQUEST).json(
      errorResponse({
        statusCode: 400,
        data: null,
        message:
          error.details[0].type == "string.pattern.base"
            ? "Password must be have minimum of 8 characters,a lowecase,an uppercase,a number and a special character"
            : error.message,
      })
    );

    return;
  }
  next();
};

export default validationHandler;
