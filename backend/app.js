import express from "express";
import cors from "cors";
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './route/reservationRoute.js';

const app = express();
// https://chatgpt.com/c/c7686b53-1b38-4436-b334-8e1856dfc795
// // dotenv.config({path: "./config/config.env"});

const FRONTEND_URI="http://localhost:5174"

app.use(cors({
    origin:[FRONTEND_URI],
    methods: ["POST"],
    credentials:true
})
);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/reservation',reservationRouter);
dbConnection();
app.use(errorMiddleware);


export default app;