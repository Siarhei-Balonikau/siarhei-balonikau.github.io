const express = require('express');
const router = express.Router();
const blogControllers = require('./../controllers/blogController.js');

router.get('/', blogControllers.getAllBlogs);
router.post('/', blogControllers.addBlog)

router.get('/:id', blogControllers.getBlog);
router.put('/:id', blogControllers.changeBlog);
router.delete('/:id', blogControllers.deleteBlog);

module.exports = router;