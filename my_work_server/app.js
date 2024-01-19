const express = require('express');
const {PORT} = require("./Constants/ServerConfig.Constants");


const expressHttpServer = express();




expressHttpServer.listen(PORT, function (){
    console.log("Server is running on port: " + PORT)
})