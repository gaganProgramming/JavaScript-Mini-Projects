const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users (Admin Only)
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

module.exports = router;