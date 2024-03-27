import express from "express";
const router = express.Router();
import {
  registerUser,
  login,
  logout,
  updateUser,
  deleteUser,
} from "../controllers/userControllers.js";

router.post("/", registerUser);
router.post("/auth", login);
router.post("/logout", logout);
router.put("/profile", updateUser);
router.delete("/profile", deleteUser);

export default router;
