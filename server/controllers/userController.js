const mongoose = require('mongoose');
const User = require('./../models/userModel.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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

exports.auth = function(req, respond) {
  User.findOne({name: req.body.login}, '', function (err, user) {
    if (!user) {
      User.create({name: req.body.login, pass: req.body.pass}, function(err, user) {
        if (err) { 
          return next(err); 
        }
        
        respond.json({mes: "user added"});
      });
      return;
    }
    
    bcrypt.compare(req.body.pass, user.pass, function(err, res) {
      if (res) {
        const payload = {id: user._id};
        const token = jwt.sign(payload, 'secret');
        respond.json({token: token});
      } else {
        respond.status(401).json({err: "passwords did not match"});
      }
    });
  });
}