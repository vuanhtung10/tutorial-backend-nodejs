const express = require('express');
const { getHomePage, getABC, getHoidanit } = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomePage);
router.get('/abc', getABC);
router.get('/hoidanit', getHoidanit);

module.exports = router;
