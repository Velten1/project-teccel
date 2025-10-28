import express from "express";
import { createContact, getAllContacts } from "../controllers/contact";

const router = express.Router();

router.post('/contact', createContact);
router.get('/contacts', getAllContacts);

export default router;