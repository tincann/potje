var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	res.render('create', { title: 'Potje aanmaken' });
});

router.post('/potje',function(req, res){

	var x = req.body;

	console.log(x);

	//res.write(JSON.stringify(x));
	res.render('create', {title: "Potje aanmaken"});
});

module.exports = router;
