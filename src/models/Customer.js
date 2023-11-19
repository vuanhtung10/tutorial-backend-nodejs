const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: String,
        city: String,
        address: String,
        phone: String,
        description: String,
        image: String,
    },
    { timestamps: true },
);
const Customer = mongoose.model('user', customerSchema);

module.exports = Customer;
