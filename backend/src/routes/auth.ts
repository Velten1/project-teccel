import express from "express";

import { getUserInfo, register } from "../controllers/auth";

const router = express.Router();

router.get('/me', getUserInfo)
router.post('/register', register)

export default router;