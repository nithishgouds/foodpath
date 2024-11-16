const mongoose=require('mongoose');

// const envResult=dotenv.config();
// if(envResult.error)
// {
//     console.error("error in loading .env file",envResult.error);
// }
// else
// {
//     console.log(".env loaded successfully");
// }
// console.log("MONGO_URI from .env",process.env.MONGO_URI);



const connectDB=async()=>{
    try
    {
        // if(!process.env.MONGO_URI)
        // {
        //     throw new Error("Mongo_uri is not defined in the .env file");
        // }

        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology:true,
                useFindAndModify: false,
            }
        );
        console.log("database connected successfully");
    }
    catch(error)
    {
        console.error("connection error",error);
        process.exit(1);
    }
};

module.exports=connectDB;