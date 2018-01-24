const express = require('express');
const app = express();
const controllers = require('./controllers.js');
const logging = require('./logging.js');

app.set('view engine', 'pug')

app.route('/blogs')
  .get(controllers.getAllBlogs)
  .post(controllers.addBlog);
   
app.route('/blogs/:id')
  .get(controllers.getBlog)
  .put(controllers.changeBlog)
  .delete(controllers.deleteBlog);
  
app.use('/', function(req, res) {
  res.render('index', { title: "Home page", message: "You're welcome!" });
  logging.log('info', 'Home page');
});

app.listen(3000, () => console.log('App listening on port 3000!'));