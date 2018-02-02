const express = require('express');
const router = express.Router();
const blogControllers = require('./../controllers/blogController.js');
const loggedIn = require('./../utils.js').loggedIn;

router.get('/', loggedIn, blogControllers.getAllBlogs);
router.post('/', loggedIn, blogControllers.addBlog)

router.get('/:id', loggedIn, blogControllers.getBlog);
router.put('/:id', loggedIn, blogControllers.changeBlog);
router.delete('/:id', loggedIn, blogControllers.deleteBlog);

module.exports = router;