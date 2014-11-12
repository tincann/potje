var express = require('express');
var router = express.Router();

/* GET user page */
router.get('/', function(req, res) {
  res.render('user', { title: 'user' });
});

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
