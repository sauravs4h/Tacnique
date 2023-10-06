const express=require("express");
var bodyParser = require('body-parser')
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.status(201).json({msg:"base api",status:"success"});
})


app.listen(8080,()=>{
    try {
        console.log("Running on 8080")
    } catch (error) {
        console.log("Error while running")
        console.log(error)
    }
})