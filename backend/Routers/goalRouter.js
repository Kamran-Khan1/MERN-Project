import { Router } from "express";
import {
  deleteGoals,
  getGoals,
  setGoals,
  updateGoals,
} from "../Controllers/goalController.js";
import { protect } from "../Middlewares/AuthHandler.js";
const router = Router();
router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

export default router;
