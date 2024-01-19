const express = require('express');
const {PORT} = require("./Constants/ServerConfig.Constants");
const {WorkModel} = require("./Models/WorkModel");


const expressHttpServer = express();


async function createNewWorkController(req,res){
    const req_body = req.body;
    const new_work_body = {
        title: req_body.title,
        description: req_body.description
    }
    try{
        const created_work = await (new WorkModel(new_work_body)).save();
        res.status(201).json({
            success: true,
            data: created_work
        });
    }
    catch (error){
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
}



expressHttpServer.post("/work", createNewWorkController);


expressHttpServer.listen(PORT, function (){
    console.log("Server is running on port: " + PORT)
})