var express = require('express');
var potjeRepository = require('../repositories/potjeRepository');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('create', { title: 'Potje aanmaken' });
});

router.post('/potje',function(req, res){
	var x = req.body;

	potjeRepository.createPotje({name : x.accountName, amount : x.initialAmount}, x.accountHolders, function() {
		res.redirect('create');
	});
});

module.exports = router;
