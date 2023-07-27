import express from "express";
const router = express.Router();

// Import the controller functions from the appropriate file
import { register, login, currentUser } from "../controllers/auth.js";

// Define your routes
router.post("/register", register);
router.post("/login", login);
router.get("/current-user", currentUser);

export default router;
