const {logger}=require("../utils/logger")


const apilog = (req, res, next) => {
    let timestamp = new Date();
    const logData = {
      method: req.method,          
      url: req.originalUrl,        
      ip: req.ip,                  
      timestamp,                   
    }; 

    logger.info(
      `[${logData.timestamp}] Method:${logData.method} URL:${logData.url} from ${logData.ip}`
    );
  
    next(); 
  };


  module.exports={apilog}