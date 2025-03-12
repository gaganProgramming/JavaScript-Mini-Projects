const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Registration Route
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).send("User already exists");

  const user = new User({ name, email, password });
  await user.save();
  res.send("User Registered Successfully");
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password)
    return res.status(400).send("Invalid Credentials");

  res.send({ message: "Login Successful", role: user.role });
});

module.exports = router;
