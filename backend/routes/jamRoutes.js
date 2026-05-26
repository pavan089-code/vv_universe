import express from "express";

import {
  registerJam,
  getRegistrations,
  updateRegistrationStatus,
} from "../controllers/jamController.js";

const router = express.Router();

router.post("/register", registerJam);

router.get("/registrations", getRegistrations);

router.put("/registrations/:id/status", updateRegistrationStatus);

export default router;
