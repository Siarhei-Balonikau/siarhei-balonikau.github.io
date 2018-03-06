const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
  title: String,
  date: Date,
  text: String,
  author: String
});

module.exports = mongoose.model('Blog', BlogSchema);