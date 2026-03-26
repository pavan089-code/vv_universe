import express from "express";
import Review from "../models/Review.js";

const router = express.Router();


// Get approved reviews for frontend
router.get("/", async (req, res) => {
  const reviews = await Review.find({ approved: true });
  res.json(reviews);
});


// Get all reviews for admin
router.get("/all", async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});


// Add review
router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
});


// Approve review
router.patch("/:id", async (req, res) => {
  await Review.findByIdAndUpdate(req.params.id, {
    approved: true,
  });
  res.json({ message: "Review approved" });
});


// Delete review
router.delete("/:id", async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
});

export default router;