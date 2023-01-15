import express, { application } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors());
const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser :true, useUnifiedTopology :true})
.then(() => app.listen(PORT, ()=> console.log('mongoose connected')))
.catch((error) => console.log(error.message));