const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: "Home page", message: "You're welcome!" });
});

module.exports = router;