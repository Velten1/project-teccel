import express from "express";
import authMiddleware from "../middleware/auth";
import { adminMiddleware } from "../middleware/admin";
import { createProduct, deleteProduct, getProduct, archiveProduct, restoreProduct, listProducts } from "../controllers/product";

const router = express.Router();

router.get('/', listProducts);
router.post('/', authMiddleware, adminMiddleware, createProduct);
router.get('/:id', getProduct);
router.delete('/:id', authMiddleware, adminMiddleware, deleteProduct);
router.post('/:id/archive', authMiddleware, adminMiddleware, archiveProduct);
router.post('/:id/restore', authMiddleware, adminMiddleware, restoreProduct);

export default router;