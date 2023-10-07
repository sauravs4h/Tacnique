const mongoose=require("mongoose");

const taskSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    creation_date:{
        type:Date,
        require:true
    },
    status:{
        type:String,
        enum:["pending","completed"],
        default:"pending",  
    },
    userid:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    }
})

const Taskmodel=mongoose.model("task",taskSchema);

module.exports={Taskmodel}