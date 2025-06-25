import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import restrauntRoutes from './routes/Restraunts.routes.js'

const app = express()

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log("MONGO DB CONNECTED");
})
.catch((err)=> console.log(err))
    

app.get("/",(req,res)=>{
    res.send("Hello World")
})

restrauntRoutes(app);


app.listen(process.env.PORT || 5600,()=>{
    console.log(`Server connected to ${process.env.PORT}`);  
})