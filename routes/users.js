const express = require('express');
// const router = require('.');
const router = express.Router();
const usersController = require('../controllers/users controller')

router.get('/profile', usersController.profile);
router.get('/sign-up', usersController.singUp);
router.get('/sign-in', usersController.singIn);

router.post('/create',usersController.create);
router.post('/create-session',usersController.createSession);

module.exports = router;