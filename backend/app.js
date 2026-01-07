import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js'; //importing connection file to connect to database
import { errorMiddleWare } from './error/error.js'; //importing error middleware to handle errors
import reservationRouter from './routes/reservationRoute.js'

const app = express();
dotenv.config({ path: './config/config.env' });  //path where env variables are stored.

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
})); // to allow cross-origin requests

//using app.use beacuse it use as middleware to parse incoming requests with JSON payloads

app.use(express.json());  //express.json-to convert string to json format
app.use(express.urlencoded({ extended: true })); //express.urlencoded-to parse incoming requests with urlencoded payloads
app.use('/api/v1/reservation', reservationRouter); //using reservation router to handle reservation requests

dbConnection();

app.use(errorMiddleWare); //using error middleware to handle errors
export default app;