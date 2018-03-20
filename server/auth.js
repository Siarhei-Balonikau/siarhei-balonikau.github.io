const passport = require('passport');
//const LocalStrategy = require('passport-local').Strategy;
const userController = require('./controllers/userController.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'secret'
}

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
  userController.getUserById(jwt_payload.id, function(err, user) {
    if (err) {
      return done(err, false);
    }
    
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  });
}));

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