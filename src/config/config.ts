import dotenv from "dotenv";
dotenv.config();

interface Config {
  JWT_SECRET?: string;
  DATABASE_HOST?: string;
  DATABASE_PORT?: string;
  DATABASE_USERNAME?: string;
  DATABASE_PASSWORD?: string;
  DATABASE_NAME?: string;
  DATABASE_URL?: string;
  NODE_ENV: string;
  APP_PORT: string | number;
  LIMIT_REQUEST_PER_MINUTE: string;
  OTP_DURATION: number | string;
  CLIENT_URL: string;
}

const config: Config = {
  DATABASE_HOST: process.env.DATABASE_HOST || "localhost",
  DATABASE_PORT: process.env.DATABASE_PORT,
  DATABASE_USERNAME: process.env.DATABASE_USERNAME||"root",
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME ,
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_PORT: process.env.APP_PORT || 4000,
  LIMIT_REQUEST_PER_MINUTE: process.env.LIMIT_REQUEST_PER_MINUTE || "20",
  OTP_DURATION: process.env.OTP_DURATION || 10,
  JWT_SECRET:process.env.JWT_SECRET,
  CLIENT_URL: process.env.CLIENT_URL || "http://localhost:4000",
};

export default config;
