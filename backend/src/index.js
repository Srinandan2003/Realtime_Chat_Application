import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import path from 'path';

import authRoute from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'

import { connectDB } from './lib/db.js';

import {app, server} from './lib/socket.js'


dotenv.config();


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials:true,
}));


const PORT = process.env.PORT || 5000
const _dirname = path.resolve();

app.use('/api/auth',authRoute);    // authentication
app.use('/api/messages',messageRoute); //messages

if(process.env.NODE_ENV == "production"){

    app.use(express.static(path.join(__dirname, "../frontend/dist")))

}

app.get("*" , (req,res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist" , "index.html"));
})



server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
    connectDB()
})
