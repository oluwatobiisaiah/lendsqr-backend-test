import "reflect-metadata";
import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express();
import bodyParser from "body-parser";
import helmet from "helmet";
import cors from "cors";
// import applicationRoutes from "./routes";
import xssClean from "xss-clean";
import config from "./config/config";
import { notFound } from "./middlewares/errors/notFound";
import { advancedErrorHandlerMiddleware } from "./middlewares/errors/errorHandler";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
const corsOptions = {
    origin: [config.CLIENT_URL], // add every other origin from which request will be sent from.
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(xssClean());
app.disable("x-powered-by");
app.use(notFound);
app.use(advancedErrorHandlerMiddleware);
export default app;