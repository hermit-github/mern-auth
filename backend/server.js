import app from "./app.js";
import config from "./config/config.js";
import connectDB from "./config/db.js";
const port = config.PORT;

// Connect Database
connectDB();



app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})