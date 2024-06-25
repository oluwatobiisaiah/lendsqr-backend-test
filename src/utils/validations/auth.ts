import Joi from "joi";
import validationHandler from "../../middlewares/validationHandler";
import { NextFunction, Request, Response } from "express";

const SALES_FUNNEL = ["whatsapp", "facebook", "instagram", "linkdeln", "others"]

export function validateUserRegistration(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        firstName: Joi.string().trim().required(),
        lastName: Joi.string().trim().required(),
        referralCode: Joi.string().trim(),
        salesFunnel: Joi.string().trim().valid(...SALES_FUNNEL).required()
    });

    validationHandler(req, res, next, schema);
}

export function validateCreatePassword(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        password: Joi
            .string()
            .trim()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                )
            )
            .required(),
    })
    validationHandler(req, res, next, schema);
}

export function validateVerifyOtp(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        otp: Joi.string().trim().length(6).required()
    })
    validationHandler(req, res, next, schema);
}

export function validateVerifyPhoneNumber(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        phone: Joi.string().trim().length(13).required()
    })
    validationHandler(req, res, next, schema)
}

export function validateSignIn(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        email: Joi.string().trim().email().required(),
        password: Joi.string().trim().required(),
        deviceToken: Joi.string().trim().required()
    });
    validationHandler(req, res, next, schema)
}

export function validateForgotPassword(req: Request, res: Response, next: NextFunction) {
    const schema = Joi.object({
        email: Joi.string().trim().email().required()
    });
    validationHandler(req, res, next, schema)
}