import express from "express"
const router = express.Router();
import UserController from "../controllers/user.controller.js";
import validateReqBody from "../middleware/validateReqBody.js";
import { signInSchema, signUpSchema } from "../utils/validation/user.validation.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/signIn",validateReqBody(signInSchema),UserController.signIn);

router.post("/signUp",validateReqBody(signUpSchema),UserController.signUp);

router.get("/logout",UserController.logOut);

router.route("/profile")
        .get(protect,UserController.getUserProfile)
        .put(protect,UserController.updateUserProfile)

export default router;