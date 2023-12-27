import asyncHandler from "express-async-handler";

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
        res.status(200).json({
            success:true,
            data:"User Signup"
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