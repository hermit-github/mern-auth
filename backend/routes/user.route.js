import express from "express"
const router = express.Router();
import UserController from "../controllers/user.controller.js";
import validateReqBody from "../middleware/validateReqBody.js";
import { signUpSchema } from "../utils/validation/user.validation.js";

router.post("/signIn",UserController.signIn);

router.post("/signUp",validateReqBody(signUpSchema),UserController.signUp);

router.get("/logout",UserController.logOut);

router.route("/profile")
        .get(UserController.getUserProfile)
        .put(UserController.updateUserProfile)

export default router;