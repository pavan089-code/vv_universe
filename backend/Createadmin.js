import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Admin from "./models/admin.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const hashedPassword = await bcrypt.hash("admin123", 10);

const admin = new Admin({
  email: "admin@vvproductions.com",
  password: hashedPassword,
});

await admin.save();

console.log("Admin created successfully");

process.exit(0);