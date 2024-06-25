import { Router } from "express";
import { validateCreatePassword, validateForgotPassword, validateSignIn, validateUserRegistration, validateVerifyOtp, validateVerifyPhoneNumber } from "../../utils/validations/auth";
// import container from "../../utils/helpers/ioc.config"
import { validateToken } from "../../utils/helpers/token";
import apiLimiter from "../../middlewares/rateLimiter";
import asyncWrapper from "../../middlewares/asyncwrapper";
const authRouter = Router();
// const authController = container.resolve(AuthController);


authRouter.use(apiLimiter)
authRouter.post("/register", validateUserRegistration, asyncWrapper);
authRouter.post("/verify-otp", validateToken, validateVerifyOtp, asyncWrapper);
authRouter.post("/submit-phone", validateToken, validateVerifyPhoneNumber, asyncWrapper);
authRouter.post("/create-password", validateToken, validateCreatePassword, asyncWrapper)
authRouter.post("/signin", validateSignIn, asyncWrapper);
authRouter.post("/forgot-password/init", validateForgotPassword, asyncWrapper)
authRouter.post("/forgot-password/change", validateToken, validateCreatePassword, asyncWrapper)
export default authRouter;
