import express from "express";
import authMiddleware from "../middleware/auth";

import { getUserInfo, register, login } from "../controllers/auth";

const router = express.Router();

router.get('/me', authMiddleware, getUserInfo)
router.post('/login', login)
router.post('/register', register)

export default router;