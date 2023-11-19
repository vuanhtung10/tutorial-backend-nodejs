const connection = require('../config/database');

const getAllUsers = () => {
    connection.query('select * from Users u ', function (err, results, fields) {
        return results;
    });
    // let [results, fields] = await connection.query('select * from Users');
    // return results;
};

module.exports = {
    getAllUsers,
};
