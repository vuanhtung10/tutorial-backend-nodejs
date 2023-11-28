const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    cuty: String,
});
const User = mongoose.model('user', kittySchema);

module.exports = User;
