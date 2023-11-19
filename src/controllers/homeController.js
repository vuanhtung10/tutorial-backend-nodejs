const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('home.ejs', { listUsers: results });
};
const getABC = (req, res) => {
    res.send('check abc !');
};
const getHoidanit = (req, res) => {
    res.render('sample.ejs');
};
const postCreateUser = (req, res) => {
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    // let {email, name,city} = req.body

    // connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('create user success');
    //     },
    // );

    // let [results, fields] = await connection.query(
    //     `INSERT INTO Users (email, name, city)
    //     VALUES (?, ?, ?)`,
    //     [email, name, city],
    // );
    // console.log('results', results);
    // res.send('create user success');
    connection.query('select * from Users u ', function (err, results, fields) {
        console.log('results', results); // results contains rows returned by server
    });

    // const [results, fields] = await connection.query('select * from Users u');
    // console.log('results', results);
};

const getCreatePage = (req, res) => {
    res.render('create.ejs');
};

const getUpdatePage = (req, res) => {
    res.render('edit.ejs');
};

module.exports = {
    getHomePage,
    getABC,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
};
