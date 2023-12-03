import express,{ urlencoded, json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true })); // CORS ORIGIN ACCESS

app.use(json({ limit: "16kb" })); // JSON

app.use(urlencoded({ extended: true, limit: "16kb" })); // FOR URL ENCODE

app.use(express.static('public')) // FOR CREATE FOLDER TO STORE FILE: PDF IMG

app.use(cookieParser()); // COOKIES SETTINGS TO SET & READ COOKIES FROM CLIENT

// ALL ROUTES
import userRouter from "./routes/user.routes.js";

app.use('/api/users',userRouter);

export default app;
