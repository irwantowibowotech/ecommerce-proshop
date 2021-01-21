import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/", protect, addOrderItems);
router.get("/myorders", protect, getMyOrders); // saya kurang paham di sini, ketika route ini diletakkan di bawah route yang memiliki id maka akan error, solusinya adalah diletakkan di atas route yang memakai id (saya dapat dari stackoverflow "https://stackoverflow.com/questions/14940660/whats-mongoose-error-cast-to-objectid-failed-for-value-xxx-at-path-id")
router.get("/:id", protect, getOrderById);
router.put("/:id/pay", protect, updateOrderToPaid);

export default router;
