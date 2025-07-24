import express from "express";
import {
  createDelivery,
  getDeliveries,
  updateDeliveryStatus,
   deleteDelivery
} from "../controllers/delivery.controller.js";

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", createDelivery);
router.put("/:id", updateDeliveryStatus);
router.delete("/:id", deleteDelivery);

export default router;
