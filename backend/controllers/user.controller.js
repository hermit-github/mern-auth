import asyncHandler from "express-async-handler";

const UserController = {
    authUser: asyncHandler( async (req,res,next) => {
        res.status(200).json({
            success:true,
            data:"User Auth"
        })
    })
}

export default UserController