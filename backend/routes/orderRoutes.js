import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  updateOrderToPaid,
  updateOrderTodelivered,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);
router.get("/", protect, admin, getOrders);
router.get("/myorders", protect, getMyOrders); // saya kurang paham di sini, ketika route ini diletakkan di bawah route yang memiliki id maka akan error, solusinya adalah diletakkan di atas route yang memakai id (saya dapat dari stackoverflow "https://stackoverflow.com/questions/14940660/whats-mongoose-error-cast-to-objectid-failed-for-value-xxx-at-path-id")
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);
router.put("/:id/deliver", protect, admin, updateOrderTodelivered);

export default router;
