import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user_routes.js'
import authRoutes from './routes/auth_routes.js'
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing_routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database")
}).catch((e)=>{
    console.log(e);
});
const app=express();
app.use(express.json()); 
app.use(cookieParser());

app.listen(3000,()=>{
    console.log("server is running");
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
app.use('/api/listing', listingRouter);



// app.use((err, req, res, next) => {
//     const statusCode = err.statusCode || 500;
//     const message = err.message || 'Internal Server Error';
//     return res.status(statusCode).json({
//       success: false,
//       statusCode,
//       message,
//     });
//   });