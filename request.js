var http = require('http');

var apikey = '1kCAB9rSJGyuLme7FYhGyq4iGdbb2n7m',
	token = 'eyJhbGciOiJSUzI1NiIsImN0eSI6InRleHRcL3BsYWluIn0.ZXlKaGJHY2lPaUprYVhJaUxDSjZhWEFpT2lKRVJVWWlMQ0psYm1NaU9pSkJNalUyUjBOTkluMC4uS09HMUpJdjk5UzdKYTNhMS5jVVlPVFRLbjZDMFg2NFlhcFR1VncwY2dSdlRxR1E4Mnl6S0pnOFE4dEEzWTZNVVA5UmRucEZ0SXVQVzFReFBxaFJFOWJ5ODhLNnR3SkFvYlNZOGhUeDM5UTVMYmpvYzVkd2d1c0tQOF83VEFSZWpDWUZvdEplOUlHMHA5bG11ZVBuWUNQYUFqWjZDQmtYRDhuY0d6c0tpNnUzdHE5UlRDTEpPZUtwRnhHNm9ySTR6U011NG5lRC11R0h1Y3p6Qkp6M0JBMG1kZ1lUejRheURZLjgzZUhtXzNfNUlLZkZhdlVfemI3amc.fKU7SFjlk9AFhD-rIFMUT6vHIBuBRyVBBrcUeR9bqb0dlS20C2gQFXYAujCa7zhZQZczl3MV23lczkw2mQ7sMA2Zwb6kg6_NOu852e9O8JJLRUKA_Mbu-vBVPh6eFvI8J2wZQOsB1xbW-iGEpgw-NpJkElv6x_94DRc3si3etUY';


var options = {
	hostname: 'ingcommonapi-test.apigee.net',
	path: '/commonapi/v0/es/server/status?apikey=' + apikey,
	port: ;;80,
	headers: {
		authorization: 'Bearer ' + token
	}
};


var req = http.request(options, function(response){
	var buffer = '';
	response.on('data', function(data){
		buffer += data;
	});
	response.on('end', function(){
		console.log(buffer);
	});
});

req.end();
