const express = require('express');
const router = express.Router();
const userControllers = require('./../controllers/userController.js');
const passport = require('passport');

router.get('/reg', userControllers.showRegForm);
router.post('/reg', userControllers.addUser);

router.get('/auth', userControllers.showAuthForm);
router.post('/auth', userControllers.auth);

router.get('/logout', userControllers.logout);

module.exports = router;