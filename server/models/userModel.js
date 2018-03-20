const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  name: String,
  pass: String
});

UserSchema.pre('save', function save(next) {
  const user = this;
  if (!user.isModified('pass')) { return next(); }
  bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(user.pass, salt, function(err, hash) {
      if (err) { return next(err); }
      user.pass = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);