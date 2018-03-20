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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var requestBlogs = function requestBlogs() {
  return {
    type: 'REQUEST_BLOGS'
  };
};

var receiveBlogs = function receiveBlogs(blogs) {
  return {
    type: 'RECEIVE_BLOGS',
    data: blogs
  };
};

var setFilter = exports.setFilter = function setFilter(name) {
  return {
    type: 'SET_FILTER',
    author: name
  };
};

var addBlog = exports.addBlog = function addBlog(blog) {
  return function (dispatch) {
    var jwt = localStorage.getItem('jwt');

    return fetch('http://localhost:3001/blog', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '' + jwt
      },
      method: 'post',
      body: JSON.stringify(blog)
    }).then(function () {
      return dispatch(fetchBlogs());
    }).catch(function (err) {
      console.log('Fetch Error Blogs:', err);
    });
  };
};

var fetchBlogs = exports.fetchBlogs = function fetchBlogs() {
  return function (dispatch) {
    var jwt = localStorage.getItem('jwt');
    dispatch(requestBlogs());

    return fetch('http://localhost:3001/blog', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '' + jwt
      },
      method: 'get'
    }).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    }).then(function (json) {
      return dispatch(receiveBlogs(json));
    }).catch(function (err) {
      console.log('Fetch Error Blogs:', err);
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(requestBlogs, 'requestBlogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/blogs.js');

  __REACT_HOT_LOADER__.register(receiveBlogs, 'receiveBlogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/blogs.js');

  __REACT_HOT_LOADER__.register(setFilter, 'setFilter', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/blogs.js');

  __REACT_HOT_LOADER__.register(addBlog, 'addBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/blogs.js');

  __REACT_HOT_LOADER__.register(fetchBlogs, 'fetchBlogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/blogs.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var passport = __webpack_require__(9);
//const LocalStrategy = require('passport-local').Strategy;
var userController = __webpack_require__(10);
var JwtStrategy = __webpack_require__(11).Strategy;
var ExtractJwt = __webpack_require__(11).ExtractJwt;

var opts = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: 'secret'
};

passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  userController.getUserById(jwt_payload.id, function (err, user) {
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

passport.serializeUser(function (user, callback) {
  callback(null, user.id);
});

passport.deserializeUser(function (id, callback) {
  userController.getUserById(id, function (err, user) {
    if (err) {
      return callback(err);
    }
    callback(null, user);
  });
});

module.exports = passport;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(JwtStrategy, 'JwtStrategy', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/auth.js');

  __REACT_HOT_LOADER__.register(ExtractJwt, 'ExtractJwt', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/auth.js');

  __REACT_HOT_LOADER__.register(opts, 'opts', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/auth.js');
}();

;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
var User = __webpack_require__(24);
var jwt = __webpack_require__(26);
var bcrypt = __webpack_require__(25);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("passport-jwt");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(48);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
  return _react2.default.createElement(
    'button',
    { className: 'button' },
    _react2.default.createElement(
      'span',
      { className: 'button__inner' },
      props.name
    )
  );
};

Button.propTypes = {
  name: _propTypes2.default.string
};

var _default = Button;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Button, 'Button', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Button/Button.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Button/Button.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(49);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function TextField(props) {
  return _react2.default.createElement('input', { value: props.value, className: 'text-field', type: 'text', onChange: function onChange(e) {
      return props.onChange(props.field, e.target.value);
    } });
};

TextField.propTypes = {
  onChange: _propTypes2.default.func,
  field: _propTypes2.default.string,
  value: _propTypes2.default.string
};

var _default = TextField;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TextField, 'TextField', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/TextField/TextField.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/TextField/TextField.js');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeField = exports.changeField = function changeField(field, value) {
  return {
    type: 'CHANGE_FIELD',
    field: field,
    value: value
  };
};

var clearForm = exports.clearForm = function clearForm() {
  return {
    type: 'CLEAR_FORM'
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(changeField, 'changeField', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/formAddBlog.js');

  __REACT_HOT_LOADER__.register(clearForm, 'clearForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/formAddBlog.js');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(6);

var _express2 = _interopRequireDefault(_express);

var _db = __webpack_require__(19);

var _db2 = _interopRequireDefault(_db);

var _bodyParser = __webpack_require__(20);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(21);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cookieSession = __webpack_require__(22);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _cors = __webpack_require__(23);

var _cors2 = _interopRequireDefault(_cors);

var _auth = __webpack_require__(8);

var _auth2 = _interopRequireDefault(_auth);

var _index = __webpack_require__(27);

var _index2 = _interopRequireDefault(_index);

var _user = __webpack_require__(28);

var _user2 = _interopRequireDefault(_user);

var _blog = __webpack_require__(29);

var _blog2 = _interopRequireDefault(_blog);

var _App = __webpack_require__(34);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(58);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(59);

var _store2 = _interopRequireDefault(_store);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.use((0, _cors2.default)());
app.use(_express2.default.static('public'));
app.use((0, _cookieParser2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cookieSession2.default)({ secret: 'test key' }));
app.use(_auth2.default.initialize());
app.use(_auth2.default.session());

app.use('/blog', _blog2.default);
app.use('/user', _user2.default);

function renderFullPage(html, preloadedState) {
  return '\n    <!doctype html>\n    <html>\n      <head>\n        <meta charset=utf-8>\n        <title>Test app</title>\n        <link rel="stylesheet" href="/style.css">\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          window.PRELOADED_STATE = ' + JSON.stringify(preloadedState).replace('</g/', '\\u003c') + '\n        </script>\n        <script src="/index.js"></script>\n      </body>\n    </html>\n  ';
}

app.get('*', function (req, res) {
  var context = {};
  var store = (0, _store2.default)();
  var html = _server2.default.renderToString(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.url, context: context },
      _react2.default.createElement(_App2.default, null)
    )
  ));
  var preloadedState = store.getState();

  if (context.url) {
    return res.redirect(context.url);
  }

  res.send(renderFullPage(html, preloadedState));
});

app.use('*', function (req, res, next) {
  res.status(404);
  res.render('error', { title: 'Error', message: 'Page not found' });
});

app.use(function (err, req, res, next) {
  res.status(500);
  res.render('error', { title: 'Error', message: err });
});

app.listen(3001, function () {
  return console.log('App listening on port 3001!');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/index.js');

  __REACT_HOT_LOADER__.register(renderFullPage, 'renderFullPage', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/index.js');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
mongoose.connect('mongodb://localhost/frontcamp');
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
var bcrypt = __webpack_require__(25);
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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(saltRounds, 'saltRounds', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/models/userModel.js');

  __REACT_HOT_LOADER__.register(UserSchema, 'UserSchema', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/models/userModel.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(6);
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', { title: "Home page", message: "You're welcome!" });
});

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/routes/index.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(6);
var router = express.Router();
var userControllers = __webpack_require__(10);
var passport = __webpack_require__(9);

router.get('/reg', userControllers.showRegForm);
router.post('/reg', userControllers.addUser);

router.get('/auth', userControllers.showAuthForm);
router.post('/auth', userControllers.auth);

router.get('/logout', userControllers.logout);

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/routes/user.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var express = __webpack_require__(6);
var router = express.Router();
var blogControllers = __webpack_require__(30);
var loggedIn = __webpack_require__(33).loggedIn;
var passport = __webpack_require__(8);

router.get('/', passport.authenticate('jwt', { session: false }), blogControllers.getAllBlogs);
router.post('/', passport.authenticate('jwt', { session: false }), blogControllers.addBlog);

router.get('/:id', passport.authenticate('jwt', { session: false }), blogControllers.getBlog);
router.put('/:id', passport.authenticate('jwt', { session: false }), blogControllers.changeBlog);
router.delete('/:id', passport.authenticate('jwt', { session: false }), blogControllers.deleteBlog);

module.exports = router;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(router, 'router', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/routes/blog.js');

  __REACT_HOT_LOADER__.register(loggedIn, 'loggedIn', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/routes/blog.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);
var Blog = __webpack_require__(31);
var shortid = __webpack_require__(32);

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
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(5);

var BlogSchema = mongoose.Schema({
  title: String,
  date: Date,
  text: String,
  author: String
});

module.exports = mongoose.model('Blog', BlogSchema);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BlogSchema, 'BlogSchema', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/server/models/blogModel.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.loggedIn = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.status(401);
        res.json({ 'error': 'auth error' });
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _BlogList = __webpack_require__(35);

var _BlogList2 = _interopRequireDefault(_BlogList);

var _CurrentSingleBlog = __webpack_require__(42);

var _CurrentSingleBlog2 = _interopRequireDefault(_CurrentSingleBlog);

var _AddBlog = __webpack_require__(45);

var _AddBlog2 = _interopRequireDefault(_AddBlog);

var _Login = __webpack_require__(52);

var _Login2 = _interopRequireDefault(_Login);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _blogs = __webpack_require__(7);

var _reactRouter = __webpack_require__(4);

var _PrivateRoute = __webpack_require__(56);

var _PageNotFound = __webpack_require__(65);

var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

__webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var dispatch = this.props.dispatch;

      dispatch((0, _blogs.fetchBlogs)());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_PrivateRoute.PrivateRoute, { exact: true, path: '/', component: _BlogList2.default }),
          _react2.default.createElement(_PrivateRoute.PrivateRoute, { path: '/blog/:id', component: _CurrentSingleBlog2.default }),
          _react2.default.createElement(_PrivateRoute.PrivateRoute, { path: '/add-blog/', component: _AddBlog2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/login/', component: _Login2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _PageNotFound2.default })
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component);

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)()(App));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/App/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/App/App.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Blog = __webpack_require__(36);

var _Blog2 = _interopRequireDefault(_Blog);

var _AuthorFilter = __webpack_require__(38);

var _AuthorFilter2 = _interopRequireDefault(_AuthorFilter);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(41);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterBlogs = function filterBlogs(props) {
  return props.filter !== 'None' ? props.blogs.filter(function (blog) {
    return blog.author === props.filter;
  }) : props.blogs;
};

var BlogList = function BlogList(props) {
  var filteredBlogs = filterBlogs(props);
  var blogs = filteredBlogs.map(function (blog, index) {
    return _react2.default.createElement(_Blog2.default, { key: index, blog: blog });
  });

  return _react2.default.createElement(
    'div',
    { className: 'blog-list' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'blog-list__link', to: '/add-blog' },
      'Add blog'
    ),
    _react2.default.createElement(
      'div',
      { className: 'blog-list__filter-name' },
      'Filter by author'
    ),
    _react2.default.createElement(_AuthorFilter2.default, null),
    blogs
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.blogs.items,
    filter: state.blogs.filter
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(BlogList));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(filterBlogs, 'filterBlogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/BlogList/BlogList.js');

  __REACT_HOT_LOADER__.register(BlogList, 'BlogList', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/BlogList/BlogList.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/BlogList/BlogList.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/BlogList/BlogList.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(37);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(props) {
  var _props$blog = props.blog,
      _id = _props$blog._id,
      title = _props$blog.title,
      date = _props$blog.date,
      text = _props$blog.text,
      author = _props$blog.author;


  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'blog', to: '/blog/' + _id },
    _react2.default.createElement(
      'div',
      { className: 'blog__title' },
      title
    ),
    _react2.default.createElement(
      'div',
      { className: 'blog__date' },
      date
    ),
    _react2.default.createElement(
      'div',
      { className: 'blog__description' },
      text
    ),
    _react2.default.createElement(
      'div',
      { className: 'blog__author' },
      author
    )
  );
};

Blog.propTypes = {
  blogs: _propTypes2.default.object
};

var _default = Blog;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Blog, 'Blog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Blog/Blog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Blog/Blog.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, exports) {



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _Filter = __webpack_require__(39);

var _Filter2 = _interopRequireDefault(_Filter);

var _blogs = __webpack_require__(7);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getAuthorsFromBlogs = function getAuthorsFromBlogs(blogs) {
  var authors = [];

  blogs.map(function (blog) {
    if (authors.find(function (author) {
      return author === blog.author;
    }) === undefined) {
      authors.push(blog.author);
    }
  });

  return authors;
};

var setFilterName = function setFilterName(dispatch, setFilter) {
  return function (name) {
    return dispatch(setFilter(name));
  };
};

var AuthorFilter = function AuthorFilter(props) {
  var dispatch = props.dispatch;

  var authors = getAuthorsFromBlogs(props.blogs);

  return _react2.default.createElement(
    'div',
    null,
    authors && _react2.default.createElement(_Filter2.default, { filter: props.filter, options: authors, onChange: setFilterName(dispatch, _blogs.setFilter) })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.blogs.items,
    filter: state.blogs.filter
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AuthorFilter));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getAuthorsFromBlogs, 'getAuthorsFromBlogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AuthorFilter/AuthorFilter.js');

  __REACT_HOT_LOADER__.register(setFilterName, 'setFilterName', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AuthorFilter/AuthorFilter.js');

  __REACT_HOT_LOADER__.register(AuthorFilter, 'AuthorFilter', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AuthorFilter/AuthorFilter.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AuthorFilter/AuthorFilter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AuthorFilter/AuthorFilter.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filter = function Filter(props) {
  var options = props.options.map(function (option, index) {
    return index === 0 ? _react2.default.createElement(
      _react2.default.Fragment,
      { key: index + 1 },
      _react2.default.createElement(
        'option',
        { name: 'none' },
        'None'
      ),
      _react2.default.createElement(
        'option',
        { name: option },
        option
      )
    ) : _react2.default.createElement(
      'option',
      { key: index + 1, name: option },
      option
    );
  });

  return _react2.default.createElement(
    'select',
    { value: props.filter, className: 'filter', onChange: function onChange(e) {
        return props.onChange(e.target.value);
      } },
    options
  );
};

Filter.propTypes = {
  options: _propTypes2.default.array.isRequired,
  onChange: _propTypes2.default.func,
  filter: _propTypes2.default.string
};

var _default = Filter;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Filter, 'Filter', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Filter/Filter.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Filter/Filter.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports) {



/***/ }),
/* 41 */
/***/ (function(module, exports) {



/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _SingleBlog = __webpack_require__(43);

var _SingleBlog2 = _interopRequireDefault(_SingleBlog);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBlog = function getBlog(blogs, id) {
  return blogs.find(function (blog) {
    return blog.id == id;
  }) || undefined;
};

var CurrentSingleBlog = function CurrentSingleBlog(props) {
  var blog = getBlog(props.blogs, props.match.params._id);

  return _react2.default.createElement(
    'div',
    null,
    blog && _react2.default.createElement(_SingleBlog2.default, { blog: blog })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    blogs: state.blogs.items
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(CurrentSingleBlog));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getBlog, 'getBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/CurrentSingleBlog/CurrentSingleBlog.js');

  __REACT_HOT_LOADER__.register(CurrentSingleBlog, 'CurrentSingleBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/CurrentSingleBlog/CurrentSingleBlog.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/CurrentSingleBlog/CurrentSingleBlog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/CurrentSingleBlog/CurrentSingleBlog.js');
}();

;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(44);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SingleBlog = function SingleBlog(props) {
  var blog = props.blog;


  return _react2.default.createElement(
    'div',
    { className: 'single-blog' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'single-blog__link', to: '/' },
      'Show all blogs'
    ),
    _react2.default.createElement(
      'div',
      { className: 'single-blog__title' },
      blog.title
    ),
    _react2.default.createElement(
      'div',
      { className: 'single-blog__text' },
      blog.text
    ),
    _react2.default.createElement(
      'div',
      { className: 'single-blog__author' },
      blog.author
    )
  );
};

SingleBlog.propTypes = {
  blog: _propTypes2.default.object.isRequired
};

var _default = SingleBlog;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SingleBlog, 'SingleBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/SingleBlog/SingleBlog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/SingleBlog/SingleBlog.js');
}();

;

/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _BlogForm = __webpack_require__(46);

var _BlogForm2 = _interopRequireDefault(_BlogForm);

var _blogs = __webpack_require__(7);

var _formAddBlog = __webpack_require__(15);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newForm = function newForm(dispatch, clearForm) {
  dispatch(clearForm());
};

var addNewBlog = function addNewBlog(dispatch, addBlog, form, clearForm, blogs) {
  return function (e) {
    e.preventDefault();

    var blog = Object.assign({}, form, {
      date: new Date()
    });

    dispatch(addBlog(blog));
    newForm(dispatch, clearForm);
  };
};

var changeValue = function changeValue(dispatch, changeField) {
  return function (field, value) {
    return dispatch(changeField(field, value));
  };
};

var AddBlog = function AddBlog(props) {
  var dispatch = props.dispatch,
      form = props.form,
      blogs = props.blogs;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_BlogForm2.default, { form: form, onSubmit: addNewBlog(dispatch, _blogs.addBlog, form, _formAddBlog.clearForm, blogs), onChange: changeValue(dispatch, _formAddBlog.changeField) })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.formAddBlog,
    blogs: state.blogs.items
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AddBlog));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(newForm, 'newForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');

  __REACT_HOT_LOADER__.register(addNewBlog, 'addNewBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');

  __REACT_HOT_LOADER__.register(changeValue, 'changeValue', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');

  __REACT_HOT_LOADER__.register(AddBlog, 'AddBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/AddBlog/AddBlog.js');
}();

;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(47);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(14);

var _TextField2 = _interopRequireDefault(_TextField);

var _Textarea = __webpack_require__(50);

var _Textarea2 = _interopRequireDefault(_Textarea);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogForm = function BlogForm(props) {
  return _react2.default.createElement(
    'div',
    { className: 'blog-form' },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'blog-form__link', to: '/' },
        'Show all blogs'
      )
    ),
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          return props.onSubmit(e);
        } },
      _react2.default.createElement(
        'div',
        { className: 'blog-form__field' },
        'Title',
        _react2.default.createElement('br', null),
        _react2.default.createElement(_TextField2.default, { onChange: props.onChange, field: 'title', value: props.form.title })
      ),
      _react2.default.createElement(
        'div',
        { className: 'blog-form__field' },
        'Text',
        _react2.default.createElement('br', null),
        _react2.default.createElement(_Textarea2.default, { onChange: props.onChange, field: 'text', value: props.form.text })
      ),
      _react2.default.createElement(
        'div',
        { className: 'blog-form__field' },
        'Author',
        _react2.default.createElement('br', null),
        _react2.default.createElement(_TextField2.default, { onChange: props.onChange, field: 'author', value: props.form.author })
      ),
      _react2.default.createElement(
        'div',
        { className: 'blog-form__button' },
        _react2.default.createElement(_Button2.default, { name: 'SUBMIT' })
      )
    )
  );
};

BlogForm.propTypes = {
  onSubmit: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  form: _propTypes2.default.object
};

var _default = BlogForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(BlogForm, 'BlogForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/BlogForm/BlogForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/BlogForm/BlogForm.js');
}();

;

/***/ }),
/* 47 */
/***/ (function(module, exports) {



/***/ }),
/* 48 */
/***/ (function(module, exports) {



/***/ }),
/* 49 */
/***/ (function(module, exports) {



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(props) {
  return _react2.default.createElement('textarea', { value: props.value, className: 'textarea', onChange: function onChange(e) {
      return props.onChange(props.field, e.target.value);
    } });
};

Textarea.propTypes = {
  onChange: _propTypes2.default.func,
  field: _propTypes2.default.string,
  value: _propTypes2.default.string
};

var _default = Textarea;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Textarea, 'Textarea', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Textarea/Textarea.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/Textarea/Textarea.js');
}();

;

/***/ }),
/* 51 */
/***/ (function(module, exports) {



/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _reactRouter = __webpack_require__(4);

var _AuthForm = __webpack_require__(53);

var _AuthForm2 = _interopRequireDefault(_AuthForm);

var _formAuth = __webpack_require__(55);

var _formAddBlog = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newForm = function newForm(dispatch, clearForm) {
  dispatch(clearForm());
};

var addNewBlog = function addNewBlog(dispatch, userAuth, form, clearForm) {
  return function (e) {
    e.preventDefault();

    dispatch(userAuth(form));
    newForm(dispatch, clearForm);
  };
};

var changeValue = function changeValue(dispatch, changeField) {
  return function (field, value) {
    return dispatch(changeField(field, value));
  };
};

var Login = function Login(props) {
  if (localStorage.getItem('jwt')) {
    props.history.push("/");
  }

  var dispatch = props.dispatch,
      form = props.form;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AuthForm2.default, { form: form, onSubmit: addNewBlog(dispatch, _formAuth.userAuth, form, _formAddBlog.clearForm), onChange: changeValue(dispatch, _formAddBlog.changeField) })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.formAuth
  };
};

var _default = (0, _reactRouter.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Login));

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(newForm, 'newForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');

  __REACT_HOT_LOADER__.register(addNewBlog, 'addNewBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');

  __REACT_HOT_LOADER__.register(changeValue, 'changeValue', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');

  __REACT_HOT_LOADER__.register(Login, 'Login', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/Login/Login.js');
}();

;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextField = __webpack_require__(14);

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = __webpack_require__(13);

var _Button2 = _interopRequireDefault(_Button);

__webpack_require__(54);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthForm = function AuthForm(props) {
  return _react2.default.createElement(
    'form',
    { className: 'auth-form', onSubmit: function onSubmit(e) {
        return props.onSubmit(e);
      } },
    _react2.default.createElement(
      'div',
      { className: 'auth-form__field' },
      'Login',
      _react2.default.createElement('br', null),
      _react2.default.createElement(_TextField2.default, { onChange: props.onChange, field: 'login', value: props.form.login })
    ),
    _react2.default.createElement(
      'div',
      { className: 'auth-form__field' },
      'Password',
      _react2.default.createElement('br', null),
      _react2.default.createElement(_TextField2.default, { onChange: props.onChange, field: 'pass', value: props.form.pass })
    ),
    _react2.default.createElement(
      'div',
      { className: 'auth-form__button' },
      _react2.default.createElement(_Button2.default, { name: 'SUBMIT' })
    )
  );
};

AuthForm.propTypes = {
  onSubmit: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  form: _propTypes2.default.object
};

var _default = AuthForm;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AuthForm, 'AuthForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/AuthForm/AuthForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/AuthForm/AuthForm.js');
}();

;

/***/ }),
/* 54 */
/***/ (function(module, exports) {



/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(fetch) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var changeField = exports.changeField = function changeField(field, value) {
  return {
    type: 'CHANGE_FIELD',
    field: field,
    value: value
  };
};

var clearForm = exports.clearForm = function clearForm() {
  return {
    type: 'CLEAR_FORM'
  };
};

var userAuth = exports.userAuth = function userAuth(user) {
  return function (dispatch) {
    return fetch('http://localhost:3001/user/auth', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify(user)
    }).then(function (response) {
      return response.json();
    }).then(function (json) {
      if (json.token) {
        localStorage.setItem('jwt', json.token);
      }
    }).catch(function (err) {
      console.log('Fetch Error Blogs:', err);
    });
  };
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(changeField, 'changeField', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/formAuth.js');

  __REACT_HOT_LOADER__.register(clearForm, 'clearForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/formAuth.js');

  __REACT_HOT_LOADER__.register(userAuth, 'userAuth', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/formAuth.js');
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrivateRoute = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PrivateRoute = function PrivateRoute(_ref) {
  var Component = _ref.component,
      rest = _objectWithoutProperties(_ref, ["component"]);

  return _react2.default.createElement(_reactRouterDom.Route, _extends({}, rest, {
    render: function render(props) {
      return localStorage.getItem('jwt') ? _react2.default.createElement(Component, props) : _react2.default.createElement(_reactRouterDom.Redirect, {
        to: {
          pathname: "/login",
          state: { from: props.location }
        }
      });
    }
  }));
};
exports.PrivateRoute = PrivateRoute;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PrivateRoute, "PrivateRoute", "D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/containers/PrivateRoute/PrivateRoute.js");
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports) {



/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _reduxThunk = __webpack_require__(60);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(61);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(initialState) {
  var store = (0, _redux.createStore)(_index2.default, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  return store;
};

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/store.js');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(16);

var _blogs = __webpack_require__(62);

var _blogs2 = _interopRequireDefault(_blogs);

var _formAddBlog = __webpack_require__(63);

var _formAddBlog2 = _interopRequireDefault(_formAddBlog);

var _formAuth = __webpack_require__(64);

var _formAuth2 = _interopRequireDefault(_formAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  blogs: _blogs2.default,
  formAddBlog: _formAddBlog2.default,
  formAuth: _formAuth2.default
});

var _default = reducers;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(reducers, 'reducers', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/index.js');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var blogs = function blogs() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    filter: 'None',
    items: []
  };
  var action = arguments[1];

  switch (action.type) {
    case 'REQUEST_BLOGS':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_BLOGS':
      return Object.assign({}, state, {
        isFetching: false,
        items: action.data
      });
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filter: action.author
      });
    default:
      return state;
  }
};

var _default = blogs;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(blogs, 'blogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/blogs.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/blogs.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formAddBlog = function formAddBlog() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    title: '',
    text: '',
    date: '',
    author: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_FIELD':
      return Object.assign({}, state, _defineProperty({}, action.field, action.value));
    case 'CLEAR_FORM':
      return {
        title: '',
        text: '',
        date: '',
        author: ''
      };
    default:
      return state;
  }
};

var _default = formAddBlog;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(formAddBlog, 'formAddBlog', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/formAddBlog.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/formAddBlog.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formAuth = function formAuth() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    login: '',
    pass: ''
  };
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE_FIELD':
      return Object.assign({}, state, _defineProperty({}, action.field, action.value));
    case 'CLEAR_FORM':
      return {
        login: '',
        pass: ''
      };
    default:
      return state;
  }
};

var _default = formAuth;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(formAuth, 'formAuth', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/formAuth.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/formAuth.js');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageNotFound = function PageNotFound(props) {
  return _react2.default.createElement(
    'div',
    null,
    'Page not found'
  );
};

var _default = PageNotFound;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageNotFound, 'PageNotFound', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/PageNotFound/PageNotFound.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/PageNotFound/PageNotFound.js');
}();

;

/***/ })
/******/ ]);