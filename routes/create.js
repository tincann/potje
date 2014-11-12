var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('create', {
  	title: 'Potje aanmaken',
  	next: 'Bla'
  });
});

module.exports = router;
