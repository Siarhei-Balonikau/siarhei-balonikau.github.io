const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: String,
  body: String,
  author: String,
  date: Date
});

module.exports = mongoose.model('Blog', BlogSchema);