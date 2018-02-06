const mongoose = require('mongoose');
const Blog = require('./../models/blogModel.js');

exports.getAllBlogs = function(req, res, next) {
  Blog.find({}, '', function(err, blogs) {
    if (err) { 
      res.status(500); 
      res.render('error', { title: 'Error', message: 'Can not get all blogs' });
    }
    
    res.render('blogs', { title: 'All blogs', message: 'All blogs', blogs: blogs });
  });
};

exports.addBlog = function(req, res, next) {
  const data = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    date: new Date()
  }
  
  Blog.create(data, function(err, user) {
    if (err) { 
      res.status(500); 
      res.render('error', { title: 'Error', message: 'Can not create new blog' });
    }
    
    res.render('index', { title: 'Blog added', message: 'Blog successfully added!' });
  });
};

exports.getBlog = function(req, res, next) {
  Blog.find({_id: req.params.id}, '', function(err, blog) {
    if (err) { 
      res.status(500); 
      res.render('error', { title: 'Error', message: 'Can not get blog by ID' });
    }
    
    res.render('blog', { title: 'Single blog', message: 'Single blog', blog: blog });
  });
};

exports.changeBlog = function(req, res, next) {
  Blog.update({_id: req.params.id}, req.body, function(err, blog) {
    if (err) { 
      res.status(500); 
      res.render('error', { title: 'Error', message: 'Can not change blog' });
    }
    
    res.render('index', { title: 'Update blog', message: 'Update blog' });
  });
};

exports.deleteBlog = function(req, res, next) {
  Blog.remove({_id: req.params.id}, function(err, blog) {
    if (err) { 
      res.status(500); 
      res.render('error', { title: 'Error', message: 'Can not delete blog' });
    }
    
    res.render('index', { title: 'Delete blog', message: 'Delete blog' });
  });
};