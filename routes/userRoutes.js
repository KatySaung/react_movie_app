import express from "express";
const router = express.Router();
import { registerUser } from "../controllers/userControllers.js";

router.post("/", registerUser);

export default router;
