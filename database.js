import mongoose from "mongoose";
const uri = "mongodb://localhost:27017/Users";

const connectDB = async () => {
    await mongoose.connect(uri);
    console.log("database connected ");
};

export default connectDB;