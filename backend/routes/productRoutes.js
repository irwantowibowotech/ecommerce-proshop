import express from "express";
const router = express.Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", getProducts);
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.get("/:id", getProductById);
router.delete("/:id", protect, admin, deleteProduct);

export default router;
