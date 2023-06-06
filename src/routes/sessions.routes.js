import { Router } from "express";
import {
  login,
  signup,
  logout,
  current,
} from "../controllers/sessionsController.js";
import auth from "../middlewares/auth.js";

const router = Router();

router.get("/login", login);
router.post("/signup", signup);
router.get("/current", auth, current);
router.delete("/logout/:id", logout);

export default router;
