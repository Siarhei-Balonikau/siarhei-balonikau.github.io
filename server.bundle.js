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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
  return {
    type: 'ADD_BLOG',
    blog: blog
  };
};

var fetchBlogs = exports.fetchBlogs = function fetchBlogs() {
  return function (dispatch) {
    dispatch(requestBlogs());

    return fetch('/blogs.json').then(function (response) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(32);

var _server2 = _interopRequireDefault(_server);

var _reactRedux = __webpack_require__(3);

var _store = __webpack_require__(33);

var _store2 = _interopRequireDefault(_store);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import db from './db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import passport from './auth.js';

import indexRouter from './routes/index.js';
import blogRouter from './routes/blog.js';
import userRouter from './routes/user.js';*/

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.use(_express2.default.static('public'));
/*app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ secret: 'test key' }));
app.use(passport.initialize());
app.use(passport.session());*/

/*app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/', indexRouter);*/

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

app.listen(3000, function () {
  return console.log('App listening on port 3000!');
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
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
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

var _BlogList = __webpack_require__(10);

var _BlogList2 = _interopRequireDefault(_BlogList);

var _CurrentSingleBlog = __webpack_require__(18);

var _CurrentSingleBlog2 = _interopRequireDefault(_CurrentSingleBlog);

var _AddBlog = __webpack_require__(21);

var _AddBlog2 = _interopRequireDefault(_AddBlog);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(3);

var _blogs = __webpack_require__(5);

__webpack_require__(31);

var _reactRouter = __webpack_require__(4);

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
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _BlogList2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/blog/:id', component: _CurrentSingleBlog2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/add-blog/', component: _AddBlog2.default })
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

  __REACT_HOT_LOADER__.register(App, 'App', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/App/App.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/components/App/App.js');
}();

;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Blog = __webpack_require__(11);

var _Blog2 = _interopRequireDefault(_Blog);

var _AuthorFilter = __webpack_require__(13);

var _AuthorFilter2 = _interopRequireDefault(_AuthorFilter);

var _reactRedux = __webpack_require__(3);

var _reactRouterDom = __webpack_require__(2);

__webpack_require__(17);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(12);

var _reactRouterDom = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(props) {
  var _props$blog = props.blog,
      id = _props$blog.id,
      title = _props$blog.title,
      date = _props$blog.date,
      text = _props$blog.text,
      author = _props$blog.author;


  return _react2.default.createElement(
    _reactRouterDom.Link,
    { className: 'blog', to: '/blog/' + id },
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
/* 12 */
/***/ (function(module, exports) {



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _Filter = __webpack_require__(14);

var _Filter2 = _interopRequireDefault(_Filter);

var _blogs = __webpack_require__(5);

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

__webpack_require__(15);

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
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _SingleBlog = __webpack_require__(19);

var _SingleBlog2 = _interopRequireDefault(_SingleBlog);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBlog = function getBlog(blogs, id) {
  return blogs.find(function (blog) {
    return blog.id == id;
  }) || undefined;
};

var CurrentSingleBlog = function CurrentSingleBlog(props) {
  var blog = getBlog(props.blogs, props.match.params.id);

  return _react2.default.createElement(
    'div',
    null,
    blog && _react2.default.createElement(_SingleBlog2.default, { blog: blog })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
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
/* 19 */
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

__webpack_require__(20);

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
/* 20 */
/***/ (function(module, exports) {



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _BlogForm = __webpack_require__(22);

var _BlogForm2 = _interopRequireDefault(_BlogForm);

var _blogs = __webpack_require__(5);

var _form = __webpack_require__(30);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var newForm = function newForm(dispatch, clearForm) {
  dispatch(clearForm());
};

var addNewBlog = function addNewBlog(dispatch, addBlog, form, clearForm, blogs) {
  return function (e) {
    e.preventDefault();

    var now = new Date();
    var lastBlog = blogs.reduce(function (accumulator, currentBlog) {
      return accumulator.id < currentBlog.id ? currentBlog : accumulator;
    });
    var blog = Object.assign({}, form, {
      id: lastBlog.id + 1,
      date: now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear()
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
    _react2.default.createElement(_BlogForm2.default, { form: form, onSubmit: addNewBlog(dispatch, _blogs.addBlog, form, _form.clearForm, blogs), onChange: changeValue(dispatch, _form.changeField) })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    form: state.form,
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(23);

var _Button = __webpack_require__(24);

var _Button2 = _interopRequireDefault(_Button);

var _TextField = __webpack_require__(26);

var _TextField2 = _interopRequireDefault(_TextField);

var _Textarea = __webpack_require__(28);

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
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(25);

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
/* 25 */
/***/ (function(module, exports) {



/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(27);

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
/* 27 */
/***/ (function(module, exports) {



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(29);

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
/* 29 */
/***/ (function(module, exports) {



/***/ }),
/* 30 */
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

  __REACT_HOT_LOADER__.register(changeField, 'changeField', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/form.js');

  __REACT_HOT_LOADER__.register(clearForm, 'clearForm', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/actions/form.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports) {



/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(34);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(35);

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
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _blogs = __webpack_require__(36);

var _blogs2 = _interopRequireDefault(_blogs);

var _form = __webpack_require__(37);

var _form2 = _interopRequireDefault(_form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
  blogs: _blogs2.default,
  form: _form2.default
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
/* 36 */
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
        items: state.items.concat(action.data.blogs)
      });
    case 'SET_FILTER':
      return Object.assign({}, state, {
        filter: action.author
      });
    case 'ADD_BLOG':
      console.log(action.blog);
      return Object.assign({}, state, {
        items: state.items.concat(action.blog)
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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blogs = function blogs() {
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

var _default = blogs;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(blogs, 'blogs', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/form.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'D:/homework/frontcamp/Siarhei-Balonikau.github.io/src/reducers/form.js');
}();

;

/***/ })
/******/ ]);