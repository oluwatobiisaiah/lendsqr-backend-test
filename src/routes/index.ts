import { Router } from "express";
import authRouter from "./Auth/Auth.routes";

const applicationRoutes = Router();

applicationRoutes.use("/auth", authRouter);