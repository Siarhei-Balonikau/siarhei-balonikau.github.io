import express from 'express';
/*import db from './db.js';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import passport from './auth.js';

import indexRouter from './routes/index.js';
import blogRouter from './routes/blog.js';
import userRouter from './routes/user.js';*/

import App from './../src/components/App/App.js';
import React from 'react';
import ReactDOMServer from "react-dom/server";
import { Provider } from "react-redux";
import configureStore from './../src/store.js';
import { StaticRouter } from 'react-router-dom';

const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));
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
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>Test app</title>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace('</g/', '\\u003c')}
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
  `;
}

app.get('*', (req, res) => {
  const context = {};
  const store = configureStore();
  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const preloadedState = store.getState();
  
  if (context.url) {
    return res.redirect(context.url);
  }
  
  res.send(renderFullPage(html, preloadedState));
});

app.use('*', function(req, res, next) {
  res.status(404); 
  res.render('error', { title: 'Error', message: 'Page not found' });
});

app.use(function(err, req, res, next) {
  res.status(500); 
  res.render('error', { title: 'Error', message: err });
});

app.listen(3000, () => console.log('App listening on port 3000!'));