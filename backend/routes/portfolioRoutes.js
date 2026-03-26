import express from "express";

import {
  getPortfolio,
  createPortfolio,
  deletePortfolio
} from "../controllers/portfolioControllers.js";

const router = express.Router();

router.get("/", getPortfolio);

router.post("/", createPortfolio);

router.delete("/:id", deletePortfolio);

export default router;
