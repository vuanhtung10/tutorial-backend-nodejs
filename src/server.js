const express = require('express'); // common js

require('dotenv').config();
const app = express(); //app express
const port = process.env.PORT || 8082;
const hostname = process.env.HOST_NAME;

const configViewEngine = require('./config/viewEngine');

const webRoutes = require('./routes/web');

//confix template engines //config static files
configViewEngine(app);

//khai báo route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`);
});
