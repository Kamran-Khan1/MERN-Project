import { Router } from "express";
import {
  getMe,
  loginUser,
  registerUser,
} from "../Controllers/userController.js";
import { protect } from "../Middlewares/AuthHandler.js";

const router = Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
