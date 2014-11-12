var connection = require('../mysql');

function UserRepository(){

}


UserRepository.prototype.getUser = function(userId, callback) {
  connection.connect();

  connection.query('SELECT * FROM potje_has_accounts WHERE account_id = ?',[userId],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

module.exports = new UserRepository();
