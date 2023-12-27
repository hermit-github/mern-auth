import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

const UserController = {

    /**
     * @desc Auth user/set token
     * route POST /api/user/auth
     * @access public
     */
    signIn: asyncHandler( async (req,res,next) => {
        res.status(200).json({
            success:true,
            data:"User Signin"
        })
    }),

    /**
     * @desc Register a new user
     * route POST /api/user
     * @access public
     */
    signUp: asyncHandler( async (req,res,next) => {

        const {name,email,password} = req.body;

        // check if user exits
        const user = await User.findOne({email});

        if(user){
            return res.status(409).json({
                success:false,
                data:"User Alreacdy Exists"
            })
        }

        await User.create({
            name,
            email,
            password
        })

        res.status(200).json({
            success:true,
            data:"User Signup Successfull"
        })
    }),

    /**
     * @desc Logout User
     * route GET /api/user/logout
     * @access public
     */
    logOut: asyncHandler( async (req,res,next) => {
        res.status(200).json({
            success:true,
            data:"User Logout"
        })
    }),

    /**
     * @desc Get User Profile
     * route GET /api/user/profile
     * @access private
     */
    getUserProfile: asyncHandler( async (req,res,next) => {
        res.status(200).json({
            success:true,
            data:"User Profile"
        })
    }),

    /**
     * @desc Update User Profile
     * route PUT /api/user/profile
     * @access private
     */
    updateUserProfile: asyncHandler( async (req,res,next) => {
        res.status(200).json({
            success:true,
            data:"User Profile Update"
        })
    })
}

export default UserController