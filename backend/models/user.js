const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema(
    {
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true}
    }
);

userSchema.pre('save',async function(next)
{
    if(!this.isModified('password'))
    {
        return next();
    }

    try
    {
        const salt=await bcrypt.genSalt(10);
        this.password=await bcrypt.hash(this.password,salt);
        next();
    }
    catch(error)
    {
        next(error);
    }
});


userSchema.methods.matchpassword=async function(enteredPassword)
{
    return await bcrypt.compare(enteredPassword,this.password);
};

const User=mongoose.model('User',userSchema,'Credentials');

module.exports=User;