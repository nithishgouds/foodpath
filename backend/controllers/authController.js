const bcrypt=require('bcryptjs');
const jwt = require('jsonwebtoken');
const User=require('../models/user')

const signup=async(req,res)=>
{
    const { email, password } = req.body;
    console.log('Request body:', req.body);

    try
    {
        const existingUser =await User.findOne({email});
        if(existingUser)
        {
            return res.status(400).json({message : "Email already in use"});
        }


        const salt= await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);


        console.log('Email:', email);
        console.log('Hashed Password:', hashedPassword);



        const newUser=new User({email,password:hashedPassword});
        console.log("attempting to create new user");
        await newUser.save();
        console.log("newuser created",newUser);

        res.status(201).json({message:"user created successfully"});
    }
    catch(error)
    {
        res.status(500).json({message:"Error occured in creating user"});
    }
};


const login = async (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;  // Change from username to email
  
    try {
      console.log("In try")
      const user = await User.findOne({ email });  // Find by email instead of username
      if (!user) {
        console.log("if")
        return res.status(400).json({ message: 'User not found' });
      }
  
      const found = await bcrypt.compare(password, user.password);
      if (!found) {
        console.log("if")
        return res.status(400).json({ message: 'Invalid credentials' });
      }
      console.log("Befor Token")
      const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
      console.log("Token found")
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error("Backend error")
      console.error('Error in login:', error);
      res.status(500).json({ message: 'Error in logging in', error: error.message });
    }
  };
  
  


module.exports={signup,login};