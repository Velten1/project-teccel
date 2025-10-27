import express from "express";
import authMiddleware from "../middleware/auth";

import { getUserInfo, register, login, logout } from "../controllers/auth";

const router = express.Router();

router.get('/me', authMiddleware, getUserInfo)
router.post('/login', login)
router.post('/register', register)
router.post('/logout', authMiddleware, logout)

export default router;