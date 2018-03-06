const express = require('express');
const router = express.Router();
const blogControllers = require('./../controllers/blogController.js');
const loggedIn = require('./../utils.js').loggedIn;
const passport = require('./../auth.js'); 

router.get('/', passport.authenticate('jwt', { session: false }), blogControllers.getAllBlogs);
router.post('/', passport.authenticate('jwt', { session: false }), blogControllers.addBlog)

router.get('/:id', passport.authenticate('jwt', { session: false }), blogControllers.getBlog);
router.put('/:id', passport.authenticate('jwt', { session: false }), blogControllers.changeBlog);
router.delete('/:id', passport.authenticate('jwt', { session: false }), blogControllers.deleteBlog);

module.exports = router;