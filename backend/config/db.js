import mongoose from "mongoose";
import config from "./config.js";

const connectDB = () => {
    return mongoose.connect(config.MONGO_URI)
            .then((conn) => {
                console.log("Connected to MongoDB");
                if(config.NODE_ENV !== 'production'){
                    console.log(`Host : ${conn.connection.host}`);
                }
            })
            .catch(error => {
                console.error(`DB connection issues`);
                console.error(error);
                process.exit(1)
            })
}

export default connectDB;