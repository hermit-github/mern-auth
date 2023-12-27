import express from "express";
import { notFound,errorHandler } from "./middleware/errorHandlers.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";


// create app instance
const app = express();

// regular middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('tiny'));

// import routes
import UserRouter from "./routes/user.route.js"

app.use("/api/user",UserRouter);

app.get("/",(req,res) => {
    res.status(200).json({
        success:true,
        message:"Welcome to Mern Auth"
    });
})

app.use(notFound);
app.use(errorHandler);

export default app;