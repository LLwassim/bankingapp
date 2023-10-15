// routes/users.js
const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Import the User model

// Create a new user
router.post("/signup", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Add more routes for CRUD operations
// ...

module.exports = router;
