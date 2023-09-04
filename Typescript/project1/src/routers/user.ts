import express = require("express");
import { registerUser, updateUser } from "../controllers/user";

const router = express.Router();
router.post("/register", registerUser);
router.post("/update", updateUser);

export default router;
