const jwt= require("jsonwebtoken")


// Authetication Middleware

exports.requireLogin=(req,res,next)=>{
    try{

    if(req.headers.authorization){
        const token =req.headers.authorization.split("")[1]
        // verify token
        const decode = jwt.verify(token,process,env.JWT_SECRET)
        // attach token
        req.user =decode
        next();
    }else{
        return res.status(400).json({messgae:"unauthorized token"})
    }
    }catch(err){
     console.log("something Went wrong");
    }
}