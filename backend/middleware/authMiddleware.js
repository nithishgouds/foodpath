const jwt=require('jsonwebtoken');


const authMiddleware = (req,res,next) =>
{
    const token=req.headers['authorization'];

    if(!token)
    {
        return res.status(403).json({error:'Access denied'});
    }

    try
    {
        const decoded=jwt.verify(token,'8Fp@qzVJ!f#bRw2nXT&Z5k9$Mm%L3Y*D');
        req.email=decoded.email;

        next();
    }
    catch(error)
    {
        return res.status.json({error:'Invalid token'});
    }
};

module.exports=authMiddleware;