var express = require('express');
var potjeRepository = require('../repositories/potjeRepository');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('wat');
  
  var meId = 1;
  potjeRepository.getPotjes(meId, function(potjes) {
  	res.render('dashboard', { title:'dashboard',potjes: potjes });
  });
});

router.get('/view/:id(\\d+)/', function (req, res) {
	console.log('yo', req.params);

	potjeRepository.getPotje(req.params.id, function(potje){
		console.log(potje);
		res.render('dashboard-potje', { potje: potje });
	});
})

module.exports = router;
