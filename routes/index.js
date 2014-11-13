var express = require('express');
var router = express.Router();
//var userRepository = require('../repositories/userRepository');

/* GET home page. */
router.get('/', function(req, res) {
	//voorbeeld, dit werkt nog niet
	userRepository.getUser(1, function(error, user){
	  res.render('index', { title: 'Express', user: user });
	});
});
/* GET index page */
router.get('/index', function(req, res) {
  res.render('index', { title: 'index' });
});

module.exports = router;
