import express from "express";

import { getUserInfo, register, login } from "../controllers/auth";

const router = express.Router();

router.get('/me', getUserInfo)
router.post('/login', login)
router.post('/register', register)

export default router;