const express = require('express'); // common js
require('dotenv').config();
const app = express(); //app express
const port = process.env.PORT || 8082;
const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine');

// const mongoose = require('mongoose');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');
// const Kitten = require('./models/Kitten.js');
const connection = require('./config/database');

// default options
app.use(fileUpload());
//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
//confix template engines //config static files
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);
app.use('/v1/api', apiRoutes);
// const cat = new Kitten({ name: 'hoi dan it model' });
// cat.save();

(async () => {
    //test connection
    try {
        await connection();

        app.listen(port, hostname, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (error) {
        console.log('error connection DB ', error);
    }
})();
