import express from "express"
const router = express.Router();
import UserController from "../controllers/user.controller.js";

router.post("/signIn",UserController.signIn);

router.post("/signUp",UserController.signUp);

router.get("/logout",UserController.logOut);

router.route("/profile")
        .get(UserController.getUserProfile)
        .put(UserController.updateUserProfile)

export default router;