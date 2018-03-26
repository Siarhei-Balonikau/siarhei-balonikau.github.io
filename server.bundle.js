/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

var _bodyParser = __webpack_require__(6);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(7);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cookieSession = __webpack_require__(8);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _cors = __webpack_require__(9);

var _cors2 = _interopRequireDefault(_cors);

var _index = __webpack_require__(10);

var _index2 = _interopRequireDefault(_index);

var _user = __webpack_require__(11);

var _user2 = _interopRequireDefault(_user);

var _blog = __webpack_require__(15);

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieSession2.default)({ secret: 'test key' }));

app.use('/user', _user2.default);
app.use('/blog', _blog2.default);
app.use('/', _index2.default);

app.use('*', function (req, res, next) {
  res.status(404);
  res.render('error', { title: 'Error', message: 'Page not found' });
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.render('error', { title: 'Error', message: err });
});

app.listen(3000, function () {
  return console.log('App listening on port 3000!');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
mongoose.connect('mongodb://localhost/frontcamp');

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: "Home page", message: "You're welcome!" });
});

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var router = express.Router();
var userControllers = __webpack_require__(12);

router.get('/reg', userControllers.showRegForm);
router.post('/reg', userControllers.addUser);

router.get('/auth', userControllers.showAuthForm);
router.post('/auth', userControllers.auth);

router.get('/logout', userControllers.logout);

module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var User = __webpack_require__(13);
var jwt = __webpack_require__(14);
var bcrypt = __webpack_require__(2);

exports.addUser = function (req, res, next) {
  User.create(req.body, function (err, user) {
    if (err) {
      return next(err);
    }

    res.render('index', { title: 'User added', message: 'User successfully added!' });
  });
};

exports.getUser = function (req, res, next) {
  res.render('index');
};

exports.getUserByName = function (name, callback) {
  User.findOne({ name: name }, '', callback);
};

exports.getUserById = function (id, callback) {
  User.findOne({ _id: id }, '', callback);
};

exports.showRegForm = function (req, res) {
  res.render('registration', { title: "Create new user" });
};

exports.showAuthForm = function (req, res) {
  res.render('auth', { title: "Authenticate form" });
};

exports.logout = function (req, res) {
  req.logout();
  res.redirect('/');
};

exports.auth = function (req, respond) {
  User.findOne({ name: req.body.login }, '', function (err, user) {
    if (!user) {
      User.create({ name: req.body.login, pass: req.body.pass }, function (err, user) {
        if (err) {
          return next(err);
        }

        respond.json({ mes: "user added" });
      });
      return;
    }

    bcrypt.compare(req.body.pass, user.pass, function (err, res) {
      if (res) {
        var payload = { id: user._id };
        var token = jwt.sign(payload, 'secret');
        respond.json({ token: token });
      } else {
        respond.status(401).json({ err: "passwords did not match" });
      }
    });
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var bcrypt = __webpack_require__(2);
var saltRounds = 10;

var UserSchema = new mongoose.Schema({
  name: String,
  pass: String
});

UserSchema.pre('save', function save(next) {
  var user = this;
  if (!user.isModified('pass')) {
    return next();
  }
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(user.pass, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.pass = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(1);
var router = express.Router();
var blogControllers = __webpack_require__(16);

router.get('/', blogControllers.getAllBlogs);
router.post('/', blogControllers.addBlog);

router.get('/:id', blogControllers.getBlog);
router.put('/:id', blogControllers.changeBlog);
router.delete('/:id', blogControllers.deleteBlog);

module.exports = router;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);
var Blog = __webpack_require__(17);
var shortid = __webpack_require__(18);

exports.getAllBlogs = function (req, res, next) {
  Blog.find({}, '', function (err, blogs) {
    if (err) {
      res.status(500);
      res.json({ 'error': err });
    }

    res.json(blogs);
  });
};

exports.addBlog = function (req, res, next) {
  var data = {
    title: req.body.title,
    date: req.body.date,
    text: req.body.text,
    author: req.body.author
  };

  Blog.create(data, function (err, user) {
    if (err) {
      res.status(500);
      res.json({ 'error': err });
    }

    res.send('Blog successfuly added');
  });
};

exports.getBlog = function (req, res, next) {
  Blog.find({ _id: req.params.id }, '', function (err, blog) {
    if (err) {
      res.status(500);
      res.json({ 'error': err });
    }

    res.json(blog);
  });
};

exports.changeBlog = function (req, res, next) {
  Blog.update({ _id: req.params.id }, req.body, function (err, blog) {
    if (err) {
      res.status(500);
      res.json({ 'error': err });
    }

    res.send('Blog successfuly changed');
  });
};

exports.deleteBlog = function (req, res, next) {
  Blog.remove({ _id: req.params.id }, function (err, blog) {
    if (err) {
      res.status(500);
      res.json({ 'error': err });
    }

    res.send('Blog successfuly deleted');
  });
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(0);

var BlogSchema = mongoose.Schema({
  title: String,
  date: Date,
  text: String,
  author: String
});

module.exports = mongoose.model('Blog', BlogSchema);

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })
/******/ ]);