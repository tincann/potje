var connection = require('../mysql');

function PotjeRepository(){

}

PotjeRepository.prototype.addUser = function(potjeId, userId, callback) {
  connection.connect();

  connection.query('INSERT INTO potje_has_accounts SET potjeId = ?, account_id = ?',[potjeId, userId],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

PotjeRepository.prototype.removeUser = function(potjeId, userId, callback) {
  connection.connect();

  connection.query('DELETE FROM potje_has_accounts WHERE potjeId = ? AND account_id = ?',[potjeId, userId],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

module.exports = new PotjeRepository();
