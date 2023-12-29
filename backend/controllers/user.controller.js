import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

const UserController = {

    /**
     * @desc Auth user/set token
     * route POST /api/user/signIn
     * @access public
     */
    signIn: asyncHandler( async (req,res,next) => {
        const {email,password} = req.body;

        // check if user exits
        let user = await User.findOne({email});

        if(user && (await user.matchPassword(password))){
            generateToken(res,user._id)
            res.status(200).json({
                success:true,
                data:"User Signin Successfull"
            })
        } else {
            res.status(401);
            throw new Error("User Doesn't Exist");
        }
    }),

    /**
     * @desc Register a new user
     * route POST /api/user
     * @access public
     */
    signUp: asyncHandler( async (req,res,next) => {

        const {name,email,password} = req.body;

        // check if user exits
        let user = await User.findOne({email});

        if(user){
            return res.status(409).json({
                success:false,
                data:"User Alreacdy Exists"
            })
        }

        user = await User.create({
            name,
            email,
            password
        })

        if(user){
            generateToken(res,user._id)
            res.status(201).json({
                success:true,
                data:"User Signup Successfull"
            })
        } else {
            res.status(409);
            throw new Error("Invalid User Data");
        }
    }),

    /**
     * @desc Logout User
     * route GET /api/user/logout
     * @access public
     */
    logOut: asyncHandler( async (req,res,next) => {

        res.cookie('jwt',null,{
            expires: new Date(Date.now()),
            httpOnly:true
        })

        res.status(200).json({
            success:true,
            data:"User Logged Out"
        })
    }),

    /**
     * @desc Get User Profile
     * route GET /api/user/profile
     * @access private
     */
    getUserProfile: asyncHandler( async (req,res,next) => {
        const user = {
            id:req.user._id,
            name:req.user.name,
            email:req.user.email
        }
        res.status(200).json({
            success:true,
            data:user
        })
    }),

    /**
     * @desc Update User Profile
     * route PUT /api/user/profile
     * @access private
     */
    updateUserProfile: asyncHandler( async (req,res,next) => {
        const user = await User.findById(req.user._id);

        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            const updatedUser = await user.save();
            updatedUser.password = undefined;

            return res.status(201).json({
                success:true,
                data:{
                    name:updatedUser.name,
                    email:updatedUser.email
                }
            })
        } else {
            res.status(404).json({
                success:false,
                message:"User Not Found"
            })
        }
    })
}

export default UserController