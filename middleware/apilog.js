const {logger}=require("../utils/logger")


const apilog = (req, res, next) => {
    let timestamp = new Date();
    logger.info(
      `[${timestamp}] Method:${req.method} URL:${req.originalUrl} from ${req.ip}`
    );
  
    next(); 
  };


  module.exports={apilog}