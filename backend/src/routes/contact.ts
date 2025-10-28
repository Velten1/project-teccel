import express from "express";
import { createContact, getAllContacts } from "../controllers/contact"
import authMiddleware from "../middleware/auth";
import { adminMiddleware } from "../middleware/admin";

const router = express.Router();

router.post('/contact', createContact);
router.get('/contacts', authMiddleware, adminMiddleware, getAllContacts);

export default router;