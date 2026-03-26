import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: ["Wedding", "PreWedding", "Events"],
      default: "Wedding",
    },
  },
  { timestamps: true }
);

const Portfolio = mongoose.model("Portfolio", portfolioSchema);

export default Portfolio;
