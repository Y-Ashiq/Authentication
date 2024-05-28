import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/Users";

const connectDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("database connected ");
        
    } catch (error) {
        console.log(error);
        
    }
   
};

export default connectDB;