//this file should be replaced by the ING's common API

var connection = require('../mysql');

function AccountRepository(){

}

AccountRepository.prototype.getAccount = function(iban, callback) {
	connection.query('SELECT * FROM accounts WHERE iban = ?',[iban],function(err,result,fields) {
		console.log(err);
		callback(result);
	});
};

AccountRepository.prototype.getAllAccounts = function(callback){
	connection.query("SELECT * FROM accounts",function(errors,res,fields){
		if(errors){
			console.log(errors);
		}
		console.log(res);
		callback(res);
	});
	console.log('end');
};

module.exports = new AccountRepository();
