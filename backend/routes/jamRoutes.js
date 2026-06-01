import express from "express";

import {
  registerJam,
  getRegistrations,
  updateRegistrationStatus,
} from "../controllers/jamController.js";

import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/register",
  upload.single("screenshot"),
  registerJam
);

router.get(
  "/registrations",
  getRegistrations
);

router.put(
  "/registrations/:id/status",
  updateRegistrationStatus
);

export default router;