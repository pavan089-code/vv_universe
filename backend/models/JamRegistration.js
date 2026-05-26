import mongoose from "mongoose";

const jamRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    instagram: String,

    utr: {
      type: String,
      required: true,
      unique: true,
    },

    screenshot: {
      type: String,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },

    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model(
  "JamRegistration",
  jamRegistrationSchema
);
