import { Request, Response, NextFunction, RequestHandler } from "express";
const asyncWrapper = (cb: RequestHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    cb(req, res, next);
  } catch (error) {
    next(error);
  }
};

export default asyncWrapper;