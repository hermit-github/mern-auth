import config from "../config/config.js"
import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {

    const token = jwt.sign({userId},config.JWT_SECRET,{
        expiresIn: "1d",
    });

    res.cookie('jwt',token,{
        httpOnly:true,
        secure: config.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 24*60*60*1000
    });

}

export default generateToken;