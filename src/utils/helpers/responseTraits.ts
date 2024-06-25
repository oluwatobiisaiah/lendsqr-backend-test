import { NextFunction, Request, Response } from "express";
import Joi, { AnySchema } from "joi";

interface ResponseParam {
  statusCode: number | string;
  data: unknown;
  message: string;
}
interface ApiResponse extends ResponseParam {
  error: boolean;
}

interface ErrorResponse {
  error: {
    statusCode: number;
    message: string;
    data?: any;
  };
}

const successResponse = (params: ResponseParam): ApiResponse => {
  return {
    error: false,
    ...params,
  };
};

const errorResponse = (params: ResponseParam): ApiResponse => {
  return {
    error: true,
    ...params,
  };
};

type DtoSchema<T> = {
  [K in keyof T]: AnySchema;
};

function returnInterface<T>(schema: DtoSchema<T>): T {
  const result: Partial<T> = {};
  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema, key)) {
      const property = schema[key] as AnySchema;
      const typeString = property.describe().type;
      if (typeString) {
        const type = typeString.split(".")[1];
        result[key] = type as unknown as T[Extract<keyof T, string>];
      }
    }
  }
  return result as T;
}

function createSchemaFromDto(dto: Record<string, Joi.Schema>): Joi.Schema {
  return Joi.object(dto);
}

function joiValidator(dto: Record<string, Joi.Schema>) {
  const schema = createSchemaFromDto(dto);
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  };
}

export {
  successResponse,
  errorResponse,
  ErrorResponse,
  returnInterface,
  joiValidator,
};
