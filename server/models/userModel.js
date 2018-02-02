const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: String,
  pass: String,
  role: String
});

module.exports = mongoose.model('User', UserSchema);