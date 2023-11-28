const mongoose = require('mongoose');
var mongoose_delete = require('mongoose-delete');
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
    {
        timestamps: true,
        // statics: {
        //     findByHoidanIT(name) {
        //         return this.find({ name: new RegExp(name, 'i') });
        //     },
        // },
    },
);
// Override all methods

customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
