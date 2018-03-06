const mongoose = require('mongoose');
const Blog = require('./../models/blogModel.js');
const shortid = require('shortid');

exports.getAllBlogs = function(req, res, next) {
  Blog.find({}, '', function(err, blogs) {
    if (err) { 
      res.status(500); 
      res.json({'error': err});
    }

    res.json(blogs);
  });
};

exports.addBlog = function(req, res, next) {
  const data = {
    title: req.body.title,
    date: req.body.date,
    text: req.body.text,
    author: req.body.author
  }
  
  Blog.create(data, function(err, user) {
    if (err) { 
      res.status(500); 
      res.json({'error': err});
    }
    
    res.send('Blog successfuly added');
  });
};

exports.getBlog = function(req, res, next) {
  Blog.find({_id: req.params.id}, '', function(err, blog) {
    if (err) { 
      res.status(500); 
      res.json({'error': err});
    }
    
    res.json(blog);
  });
};

exports.changeBlog = function(req, res, next) {
  Blog.update({_id: req.params.id}, req.body, function(err, blog) {
    if (err) { 
      res.status(500); 
      res.json({'error': err});
    }
    
    res.send('Blog successfuly changed');
  });
};

exports.deleteBlog = function(req, res, next) {
  Blog.remove({_id: req.params.id}, function(err, blog) {
    if (err) { 
      res.status(500); 
      res.json({'error': err});
    }
    
    res.send('Blog successfuly deleted');
  });
};