import express from "express";

import { getUserInfo } from "../controllers/auth";

const router = express.Router();

router.get('/me', getUserInfo)