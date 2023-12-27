import app from "./app.js";
import config from "./config/config.js";
const port = config.PORT;


app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})