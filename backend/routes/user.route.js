import express from "express"
const router = express.Router();
import UserController from "../controllers/user.controller.js";

router.post("/auth",UserController.authUser)

export default router;