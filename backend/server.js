import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT||5000;

const app = express();

// import routes
import UserRouter from "./routes/user.route.js"

app.use("/api/user",UserRouter);

app.get("/",(req,res) => {
    res.send("Server is Running");
})

app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})