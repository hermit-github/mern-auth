import express from "express";
import { notFound,errorHandler } from "./middleware/errorHandlers.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

// create app instance
const app = express();

// regular middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(morgan('tiny'));
app.use(helmet());

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