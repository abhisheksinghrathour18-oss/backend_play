import mongoose from "mongoose";
import {DB_NAME} from "../constant.js";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Connected to MongoDB successfully ");
        return connection;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process with an error code many code of exit ..learn the codes of exit in node js
    }
};

export default connectDB;