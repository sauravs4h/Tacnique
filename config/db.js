const mongoose=require("mongoose");
require('dotenv').config()


const connection=mongoose.connect(process.env.MONGODBURL);

exports.module={connection}