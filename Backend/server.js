
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const userModel = require('./models/userModel')
const imageModel = require('./models/imageModel')
const app = express();
require("dotenv").config();
app.use(cors()); // Adjust frontend URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// MongoDB Connection
mongoose.connect("mongodb+srv://mayanksaini91:mayank91@cluster0.ntvgg.mongodb.net//Myfirstproject", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));



// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// 🔹 Register User
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "✅ Registered Successfully" });
  } catch (error) {
    console.error("Register Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 🔹 Login User
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.status(401).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign({ userId: user._id }, "mayanksaini", { expiresIn: "24h" });
    res.status(200).json({ message: "✅ Login successful", token });
  } catch (error) {
    console.error("Login Error:", error);
   res.status(500).json({ message: "Something went wrong" });
  }
});

// 🔹 Middleware to Protect Routes
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Handle Bearer token format
  if (!token) return res.status(403).json({ message: "Access Denied. No Token Provided." });

  try {
    const decoded = jwt.verify(token, "mayanksaini");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid Token" });
  }
};

// 🔹 Upload Image (Admin Panel) - Protected Route
app.post("/api/upload", authenticate, upload.single("image"), async (req, res) => {
  try {
    const { title, color,rating, imageUrl } = req.body;

    let finalImageUrl = imageUrl;
    if (req.file) {
      finalImageUrl = `/uploads/${req.file.filename}`; // Store uploaded file path
    }

    

    if (!finalImageUrl) {
      return res.status(400).json({ message: "Please provide an image file or URL" });
    }

    const newImage = new imageModel({ title, color,rating, imageUrl: finalImageUrl });
    await newImage.save();


    res.status(201).json({ message: "✅ Image Uploaded Successfully", imageUrl: finalImageUrl });
  } catch (error) {
    console.error("Image Upload Error:", error);
    res.status(500).json({ message: "Error Uploading Image" });
  }
});

// 🔹 Get Images for Home Page
app.get("/api/images", async (req, res) => {
  try {
    const images = await imageModel.find();
    res.json(images);
  } catch (error) {
    console.error("Fetch Images Error:", error);
    res.status(500).json({ message: "Error Fetching Images" });
  }
});

// 🔹 Start Server
const PORT = process.env.port || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
