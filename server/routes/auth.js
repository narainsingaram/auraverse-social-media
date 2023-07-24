const express = require('express');

const router = express.Router();

//controllers
import { register, login, currentUser } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/current-user", currentUser);

module.exports = router;
