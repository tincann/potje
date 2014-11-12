//this file should be replaced by the ING's common API

var connection = require('../mysql');

function AccountRepository(){

}

AccountRepository.prototype.getAccount = function(iban, callback) {
  connection.connect();

  connection.query('SELECT * FROM accounts WHERE iban = ?',[iban],function(err,result,fields) {
    console.log(err);
    callback(result);
  });

  connection.end();
};

module.exports = new AccountRepository();
