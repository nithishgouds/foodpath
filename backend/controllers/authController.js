const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');


const signup=async(req,res)=>
{
    const { email, password } = req.body;
    try
    {
        const existingUser =await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message : "Email already in use"});
        }


        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);

        const newUser=new User({email,password:hashedPassword});
        await newUser.save();

        res.status(201).json({message:"user created successfully"});
    }
    catch(error)
    {
        res.status(500).json({message:"Error occured in creating user"});
    }
};


const login=async(req,res)=>
{
    const {email,password}=req.body;

    try
    {
        const user=await User.findOne({email});
        if(!user)
        {
            return res.status(400).json({message:"User not found"});
        }
        const found=await bcrypt.compare(password,user.password);
        if(!found)
        {
            return res.status(400).json({message:"invalid credentials"});
        }
        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.status(200).json({message:"Login successful"});
    }
    catch(error)
    {
        res.status(500).json({message:"Error in logging"});
    }
};


module.exports={signup,login};