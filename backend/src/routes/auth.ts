import express from "express";
import authMiddleware from "../middleware/auth";

import { getUserInfo, register, login, logout, resetPassword} from "../controllers/auth";

const router = express.Router();

router.get('/me', authMiddleware, getUserInfo)
router.post('/login', login)
router.post('/register', register)
router.post('/logout', authMiddleware, logout)
router.post('/reset-password', authMiddleware, resetPassword)

export default router;