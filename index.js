const express=require("express");
var bodyParser = require('body-parser');
var cors = require('cors')
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

//cors
app.use(cors())

app.get("/",(req,res)=>{
    res.status(201).json({msg:"base api",status:"success"});
})

// Database connection
const {connection}=require("./config/db")

// User route
const {user}=require("./routes/user.routes");
app.use("/user",user);

// authentication middleware
const {authentication}=require("./middleware/authentication");

// Task route (authenticated route)
const {task}=require("./routes/task.routes");
app.use("/task",authentication,task);


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log("Error while connecting DB")
        console.log(error)
    }
    console.log("Running on 8080")

})