const express=require("express");
const {Taskmodel}=require("../models/taskmodel")

const task=express.Router();

// Route for all task 
task.get("/tasks",async(req,res)=>{
    const {userid}=req.body;
    try {
        let tasks=await Taskmodel.find({userid});
        res.status(201).json({tasks:tasks,status:"success"});
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"});
        
    }
})

// Route for one specific task
task.get("/tasks/:id",async(req,res)=>{
    const {userid}=req.body;
    const taskid=req.params.id
    try {
        let task=await Taskmodel.findOne({_id:taskid});
        res.status(201).json({tasks:task,status:"success"});
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"});
        
    }
});


// Route for add new task
task.post("/tasks",async(req,res)=>{
    const payload=req.body;
    try {
        let newtask=new Taskmodel(payload);
        await newtask.save();
        res.status(201).json({msg:"task add successfully added",status:"success"});
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"});
        
    }
})

// Update a specific task
task.put("/tasks/:id",async(req,res)=>{
    const payload=req.body;
    const taskid=req.params.id;
    try {
        let task=await Taskmodel.findOne({_id:taskid});
        if(task){
            await Taskmodel.findByIdAndUpdate({_id:taskid},payload);
            res.status(201).json({msg:"Task update successfully",status:"success"});
        }else{
            res.status(401).json({mag:"Task is not available",status:"failed"});
        } 
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"}); 
    }
})

// Delete one specific task
task.delete("/tasks/:id",async(req,res)=>{
    const taskid=req.params.id;
    try {
        let task=await Taskmodel.findOne({_id:taskid});
        if(task){
            await Taskmodel.findByIdAndDelete({_id:taskid});
            res.status(201).json({msg:"task delete successfully",status:"success"});
        }else{
            res.status(401).json({mag:"Task is not available",status:"failed"});
        } 
    } catch (error) {
        res.status(401).json({mag:"something went wrong",status:"failed"}); 
    }
})


module.exports={task}