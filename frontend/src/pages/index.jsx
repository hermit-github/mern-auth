import {createBrowserRouter} from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Register from "./Register";

const routes = [
    {
        path:"/",
        element:<HomePage/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
]


const router = createBrowserRouter(routes);

export default router