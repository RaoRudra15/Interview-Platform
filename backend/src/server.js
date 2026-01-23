import express from 'express';
import {ENV} from './lib/env.js'

const app=express();

app.get('/home',(req,res)=>{
    res.status(200).json({msg:"succcess from nigga"});
});

app.listen(ENV.PORT,()=>{
    console.log("Server is running on: ",ENV.PORT);
});