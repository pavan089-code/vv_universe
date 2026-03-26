import express from "express";
import {
  getBookings,
  updateBookingStatus,
  deleteBooking,
  createBooking
} from "../controllers/bookingControllers.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/", getBookings);
router.put("/:id/status", updateBookingStatus);
router.delete("/:id", deleteBooking);

export default router;
