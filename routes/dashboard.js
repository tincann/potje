var express = require('express');
var potjeRepository = require('../repositories/potjeRepository');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('wat');
  
  var meId = 1;
  potjeRepository.getPotjes(meId, function(potjes) {
  	res.render('dashboard', { potjes: potjes });
  });
});

router.get('/:id(\\d+)/', function (req, res) {
	console.log('yes', req.params.id);
	var potje = { name: "hey"};
	potjeRepository.getPotje(req.params.id, function(potje){
		console.log(potje);
		res.render('dashboard-potje', { potje: potje });
	});
})

module.exports = router;
