import rateLimiter from "express-rate-limit";
import { httpStatusCodes } from "../utils/helpers/httpStatusCodes";
import config from "../config/config";
import { errorResponse } from "../utils/helpers/responseTraits";
const apiLimiter = rateLimiter({
    windowMs: 1 * 60 * 1000,
    max:parseInt(config.LIMIT_REQUEST_PER_MINUTE!),
    statusCode: httpStatusCodes.TOO_MANY_REQUESTS,
    message: () => {
      return errorResponse({  
        data:null,
        message: "You are performing too many request on this route,please try again later",
        statusCode: httpStatusCodes.TOO_MANY_REQUESTS
    });
    },
  });

  export default apiLimiter;