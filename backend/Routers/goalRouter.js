import { Router } from "express";
import {
  deleteGoals,
  getGoals,
  setGoals,
  updateGoals,
} from "../Controllers/goalController.js";
const router = Router();

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoals).delete(deleteGoals);

export default router;
