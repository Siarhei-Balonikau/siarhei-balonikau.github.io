const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const userController = require('./controllers/userController.js');

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'pass'
  },
  function(username, password, callback) {
    userController.getUserByName(username, function(err, user) {
      if (err) { return callback(err); }
      if (!user) { return callback(null, false); }
      if (user.pass != password) { return callback(null, false); }
      return callback(null, user);
    });
  }
));

passport.serializeUser(function(user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function(id, callback) {
  userController.getUserById(id, function (err, user) {
    if (err) { return callback(err); }
    callback(null, user);
  });
});

module.exports = passport;