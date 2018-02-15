const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

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

UserSchema.methods.comparePassword = function comparePassword(candidatePassword, callback) {
  const user = this;
  bcrypt.compare(candidatePassword, user.pass, function(err, res) {
    if (res) {
      return callback(null, user);
    } else {
      return callback(null, false);
    }
  });
};

module.exports = mongoose.model('User', UserSchema);