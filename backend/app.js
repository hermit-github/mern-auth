import express from "express";
import { notFound,errorHandler } from "./middleware/errorHandlers.js";

const app = express();

// import routes
import UserRouter from "./routes/user.route.js"

app.use("/api/user",UserRouter);

app.get("/",(req,res) => {
    res.send("Server is Running");
})

app.use(notFound);
app.use(errorHandler);

export default app;