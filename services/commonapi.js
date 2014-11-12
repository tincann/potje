var http = require('http');

var host_name = 'ingcommonapi-test.apigee.net';
var bearertoken = 'Bearer eyJhbGciOiJSUzI1NiIsImN0eSI6InRleHRcL3BsYWluIn0.ZXlKaGJHY2lPaUprYVhJaUxDSjZhWEFpT2lKRVJVWWlMQ0psYm1NaU9pSkJNalUyUjBOTkluMC4uS09HMUpJdjk5UzdKYTNhMS5jVVlPVFRLbjZDMFg2NFlhcFR1VncwY2dSdlRxR1E4Mnl6S0pnOFE4dEEzWTZNVVA5UmRucEZ0SXVQVzFReFBxaFJFOWJ5ODhLNnR3SkFvYlNZOGhUeDM5UTVMYmpvYzVkd2d1c0tQOF83VEFSZWpDWUZvdEplOUlHMHA5bG11ZVBuWUNQYUFqWjZDQmtYRDhuY0d6c0tpNnUzdHE5UlRDTEpPZUtwRnhHNm9ySTR6U011NG5lRC11R0h1Y3p6Qkp6M0JBMG1kZ1lUejRheURZLjgzZUhtXzNfNUlLZkZhdlVfemI3amc.fKU7SFjlk9AFhD-rIFMUT6vHIBuBRyVBBrcUeR9bqb0dlS20C2gQFXYAujCa7zhZQZczl3MV23lczkw2mQ7sMA2Zwb6kg6_NOu852e9O8JJLRUKA_Mbu-vBVPh6eFvI8J2wZQOsB1xbW-iGEpgw-NpJkElv6x_94DRc3si3etUY';
var api_key = '1kCAB9rSJGyuLme7FYhGyq4iGdbb2n7m';

function CommonApi(){

}

CommonApi.prototype.example = function(callback)
{
	//vraag status van de server aan.
	//hele url is ingcommonapi-test.apigee.net/ommonapi/v0/es/server/status?apikey=1kCAB9rSJGyuLme7FYhGyq4iGdbb2n7m
	//maar alleen 'server/status' is variabel dus url_seg = 'server/status'.

	var url_seg = 'server/status';
	console.log(url_seg);
	//paas callback door.
	get(url_seg,callback);
}


var get = function(url_seg,callback)
{
	var options = {
		method: 'GET',
		host: host_name,
		path : '/commonapi/v0/es/'+url_seg+'?apikey='+api_key,
		port: 80,
		headers : {
			authorization: bearertoken
			}
		};

	var req = http.request(options, function(response){
		var buffer = "";
		response.on('data',function(data){
			buffer += data;
		})

		response.on('error',function(error){
			console.log('ja error: ', error.message);
		})

		response.on('end',function(){
			callback(JSON.parse(buffer));
		})
	});

	req.end();
}

var post = function(url_seg,post_ojb,callback)
{
	var options = {
		method: 'GET',
		host: host_name,
		path : '/commonapi/v0/es/'+url_seg+'?apikey='+api_key,
		port: 80,
		headers : {
			authorization: bearertoken
			}
		};

	var req = http.request(options, function(response){
		var buffer = "";
		response.on('data',function(data){
			buffer += data;
			console.log(data);
		})

		response.on('error',function(error){
			console.log('ja error: ', error.message);
		})

		response.on('end',function(){
			callback(JSON.parse(buffer));
		})
	});

	req.write(JSON.stringify(post_obj));

	req.end();
	makeRequest(options,callback);
}

module.exports = new CommonApi();

//voorbeeld gebruik api.
// var c = new CommonApi();
// 
// requests geven altijd een json object terug.
// c.example(function(data){
//     console.log(data);
// });