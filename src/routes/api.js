const express = require('express');
const routerAPI = express.Router();
const {
    getUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFileApi,
    postUploadMultipleFilesAPI,
} = require('../controllers/apiController');

const {
    postCreateCustomer,
    postCreateArrayCustomer,
    putUpdateCustomers,
    getAllCustomers,
    deleteACustomer,
    deleteArrayCustomer,
} = require('../controllers/customerController');

routerAPI.get('/users', getUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/users', putUpdateUserAPI);
routerAPI.delete('/users', deleteUserAPI);

routerAPI.post('/file', postUploadSingleFileApi);
routerAPI.post('/files', postUploadMultipleFilesAPI);

routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customers', putUpdateCustomers);
routerAPI.delete('/customers', deleteACustomer);
routerAPI.delete('/customers', deleteArrayCustomer);

routerAPI.get('/info', (req, res) => {
    return res.status(200).json({
        data: req.query,
    });
});
routerAPI.get('/info/:name/:address', (req, res) => {
    return res.status(200).json({
        data: req.params,
    });
});
module.exports = routerAPI;
