const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: { type: String, default: 'user' }  // Added role
});

module.exports = mongoose.model('User', UserSchema);