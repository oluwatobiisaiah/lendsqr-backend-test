import { RequestHandler } from "express";
import { httpStatusCodes } from "../../utils/helpers/httpStatusCodes";

export const notFound: RequestHandler = (req, res) => {
  return res.status(httpStatusCodes.NOT_FOUND).json({
    statusCode: 404,
    message: "This path exists somewhere in space time but not here",
    data: null,
  });
};
