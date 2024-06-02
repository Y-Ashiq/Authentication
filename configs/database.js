import mongoose from "mongoose";
import "dotenv/config";

const uri = process.env.DATABASE_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    
    console.log("database connected ");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
