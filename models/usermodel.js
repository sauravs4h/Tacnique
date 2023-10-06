const mongoose=require("mongoose");

const useSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const Usermodel=mongoose.Model("user",useSchema);

module.exports={Usermodel}