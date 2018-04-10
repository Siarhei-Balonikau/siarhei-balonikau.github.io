import express from 'express';
import db from './db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import blogRouter from './routes/blog.js';

const app = express();

app.set('view engine', 'pug');
app.use(cors());
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieSession({ secret: 'test key' }));

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