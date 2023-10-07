const express=require("express");
const user=express.Router();
const {Usermodel}=require("../models/usermodel");

const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// User signup
user.post("/signup",async(req,res)=>{
    try {
        let payload=req.body;
        let email=payload.email;
        let password=payload.password
        let useravailable=await Usermodel.findOne({email});

        if(useravailable){
            res.status(401).json({msg:"user is allready available",status:"failed"});
        }else{
            bcrypt.hash(password, 10,async function(err, hash) {
                payload.password=hash;
                let newuser= new Usermodel(payload);
                await newuser.save();
                res.status(201).json({msg:"signup successfull",status:"success"});
            });
        }
        
    } catch (error) {
            res.status(401).json({msg:"Something went wrong",status:"failed"});

    }
})

// User login
user.post("/login",async(req,res)=>{
    try {
        let payload=req.body;
        let email=payload.email;
        let password=payload.password

        let useravailable=await Usermodel.findOne({email});
        let userpassword=useravailable.password;
        let userid=useravailable?._id

        if(useravailable){
            bcrypt.compare(password, userpassword, function(err, result) {

                if(result){
                    var token = jwt.sign({ userid: userid}, 'hush');
                    res.status(201).json({msg:"Login Successfull ", token:token,status:"success"});

                }
                else{
                    res.status(401).json({msg:"Wrong password",status:"failed"});
                }
            
            });

        }else{
            res.status(401).json({msg:"Please Signup first",status:"failed"});

        }
        
    } catch (error) {
            res.status(401).json({msg:"Something went wrong",status:"failed"});
    }
})

module.exports={user}