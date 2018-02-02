const mongoose = require('mongoose');
const User = require('./../models/userModel.js');

exports.addUser = function(req, res, next) {
  User.create(req.body, function(err, user) {
    if (err) { 
      return next(err); 
    }
    
    res.render('index', { title: 'User added', message: 'User successfully added!' });
  });
}

exports.getUser = function(req, res, next) {
  res.render('index');
}

exports.getUserByName = function(name, callback) {
  User.findOne({name: name}, '', callback);
}

exports.getUserById = function(id, callback) {
  User.findOne({_id: id}, '', callback);
}

exports.showRegForm = function(req, res) {
  res.render('registration', { title: "Create new user" });
}

exports.showAuthForm = function(req, res) {
  res.render('auth', { title: "Authenticate form" });
}

exports.logout = function(req, res){
  req.logout();
  res.redirect('/');
}