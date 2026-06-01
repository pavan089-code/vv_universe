require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Admin = require("./models/Admin");

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    email: "admin@vvproductions.com",
    password: hashedPassword,
  });

  await admin.save();

  console.log("Admin created");

  process.exit();
};

createAdmin();