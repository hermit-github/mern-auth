import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import config from "../config/config.js";
import User from "../models/user.model.js";

const protect = asyncHandler(async (req,res,next) => {
    const token = req.cookies.jwt || req.header("Authorization")?.replace("Bearer ", "");

    if(token){
        try {
            const decoded = jwt.verify(token,config.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select("-password");
            next();
        } catch (error) {
            res.status(401);
            throw new Error("Invalid Token");
        }
    } else {
        res.status(401);
        throw new Error("Not Authorized,No Token!");
    }
})

export {protect};