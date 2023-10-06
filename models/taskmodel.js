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
        type:String,
        require:true
    },
    status:{
        type:Boolean,
        require:true
    }
})

const Taskmodel=mongoose.model("task",taskSchema);

module.exports={Taskmodel}