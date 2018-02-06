const express = require('express');
const app = express();
const db = require('./db.js');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const passport = require('./auth.js');

const indexRouter = require('./routes/index.js');
const blogRouter = require('./routes/blog.js');
const userRouter = require('./routes/user.js');

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ secret: 'test key' }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRouter);
app.use('/blog', blogRouter);
app.use('/', indexRouter);

app.use('*', function(req, res, next) {
  res.status(404); 
  res.render('error', { title: 'Error', message: 'Page not found' });
});

app.use(function(err, req, res, next) {
  res.status(500); 
  res.render('error', { title: 'Error', message: err });
});

app.listen(3000, () => console.log('App listening on port 3000!'));