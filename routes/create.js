var express = require('express');
var api = require('../services/commonapi');
var potjeRepository = require('../repositories/potjeRepository');
var accountRepository = require('../repositories/accountRepository');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) { 

	var papua;

	/*api.example(function(data){
		console.log(data);
		papua = data;
	});

	console.log(papua);*/

	res.render('create', { title: 'Potje aanmaken' , papu : papua});
});

router.get('/get_users',function(req,res){
	accountRepository.getAllAccounts(function(data){
		res.write(JSON.stringify(data));
		res.end();
	});
})

router.post('/potje',function(req, res){
	var x = req.body;

	potjeRepository.createPotje({name : x.accountName, amount : x.initialAmount}, x.accountHolders, function() {
		res.redirect('create');
	});
});

module.exports = router;
