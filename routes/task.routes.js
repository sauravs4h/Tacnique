const express=require("express");
const {Taskmodel}=require("../models/taskmodel")

const task=express.Router();

task.get("/alltask",async(req,res)=>{
    const {userid}=req.body;
    try {
        let tasks=await Taskmodel.find({userid});
        res.status(201).json({tasks:tasks,status:"success"});
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"});
        
    }
})





module.exports={task}