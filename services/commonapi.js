var http = require('http');

function CommonApi(){

}


CommonApi.prototype.getClients = function() {
	var options = {
		method: 'POST',
		
	};

	http.request(options, function(response){

	});
};

module.exports = new CommonApi();