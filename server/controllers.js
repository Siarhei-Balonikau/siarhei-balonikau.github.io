const logging = require('./logging.js');

exports.getAllBlogs = function(req, res) {
  res.send('getAllBlogs');
  logging.log('info', 'Get all blogs');
};

exports.addBlog = function(req, res) {
  res.send('addBlog');
  logging.log('info', 'Add blog');
};

exports.getBlog = function(req, res) {
  res.send('getBlog ' + req.params.id);
  logging.log('info', 'Get blog');
};

exports.changeBlog = function(req, res) {
  res.send('changeBlog ' + req.params.id);
  logging.log('info', 'Change blog');
};

exports.deleteBlog = function(req, res) {
  res.send('deleteBlog ' + req.params.id);
  logging.log('info', 'Delete blog');
};