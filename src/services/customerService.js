const Customer = require('../models/Customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image,
        });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const createArrayCustomerService = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};
const getAllCustomerService = async (arr) => {
    try {
        let result = await Customer.find({});
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const putUpdateCustomers = async (id, name, email, address) => {
    try {
        let result = await Customer.updateOne(
            {
                _id: id,
            },
            { name, email, address },
        );
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

module.exports = { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomers };
