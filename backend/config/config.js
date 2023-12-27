import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT:process.env.PORT || 8080,
    NODE_ENV:process.env.NODE_ENV || 'production',
    MONGO_URI:process.env.MONGO_URI
}

export default config