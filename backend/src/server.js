import express from 'express';
import path from 'path';
import {ENV} from './lib/env.js'

const app=express();

const __dirname=path.resolve()

app.get('/home',(req,res)=>{
    res.status(200).json({msg:"succcess from nigga home"});
});

app.get('/about',(req,res)=>{
    res.status(200).json({msg:"succcess from nigga about "});
});

if(ENV.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))
    app.get("/{*any}",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    });
}

app.listen(ENV.PORT,()=>{
    console.log("Server is running on: ",ENV.PORT);
});