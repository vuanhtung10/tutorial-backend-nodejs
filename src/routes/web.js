const express = require('express');
const {
    getHomePage,
    getABC,
    getHoidanit,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);
router.get('/create', getCreatePage);
router.get('/update', getUpdatePage);
router.post('/create-user', postCreateUser);

module.exports = router;
