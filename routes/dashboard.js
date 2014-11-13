var express = require('express');
var potjeRepository = require('../repositories/potjeRepository');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  
  var meId = 1;

  potjeRepository.getPotjes(meId, function(data) {
  	res.render('dashboard', data);
  });
});

module.exports = router;
