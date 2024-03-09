import dotenv from 'dotenv';
dotenv.config({path : "./config/config.env"});
import express from 'express';
import { dbConnection } from './database/dbConnection.js';
import cors from 'cors';
import messageRouter from './router/messageRouter.js';

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods : ['POST'],
    credentials : true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.json({
        success : true,
        message : "Hello"
    })
})
app.use("/api/v1/message", messageRouter);

dbConnection();

export default app;