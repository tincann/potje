var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
/* GET index page */
router.get('/index', function(req, res) {
  res.render('index', { title: 'index' });
});

module.exports = router;
