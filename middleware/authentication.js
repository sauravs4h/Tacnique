var jwt = require('jsonwebtoken');

const authentication=(req,res,next)=>{

    const payload=req.body;

    let token=req.headers.authorization?.split(" ")[1];

    if(token){
        jwt.verify(token, 'hush', function(err, decoded) {
            
            if(err){
                res.status(401).json({msg:"Please login first",status:"failed"});
            }

            // saving userid to req.body object
            const userid=decoded.userid
            payload.userid=userid;
            next()
          });
          

    }else{
        res.status(401).json({msg:"Please login first",status:"failed"});
    }
}


module.exports={authentication}