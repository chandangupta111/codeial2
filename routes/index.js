const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/post', require('./posts'));

//for anty further routes, access from hare
//router.use('/routerName' require('./routerfile));


module.exports = router;