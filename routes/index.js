var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* GET about page */
router.get('/about', function(req, res) {
  res.render('about', { title: 'about' });
});

/* GET contact page */
router.get('/contact', function(req, res) {
  res.render('contact', { title: 'contact' });
});

/* GET user page */
router.get('/user', function(req, res) {
  res.render('user', { title: 'user' });
});

/* GET login page */
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
