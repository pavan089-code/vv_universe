import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: String,
  message: String,
  rating: Number,
  approved: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("Review", reviewSchema);