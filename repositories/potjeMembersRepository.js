var connection = require('../mysql');

function PotjeMembersRepository(){

}

PotjeMembersRepository.prototype.addUser = function(potjeId, userId, callback) {
  connection.connect();

  connection.query('INSERT INTO potje_has_accounts SET potjeId = ?, account_id = ?',[potjeId, userId],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

PotjeMembersRepository.prototype.removeUser = function(potjeId, userId, callback) {
  connection.connect();

  connection.query('DELETE FROM potje_has_accounts WHERE potjeId = ? AND account_id = ?',[potjeId, userId],function(err,result,fields) {
    console.log(err);
    connection.end();
    callback(result);                   
  });


};

PotjeMembersRepository.prototype.getMembersForPotje = function(potje_id,callback){
  connection.connect();

  connection.query("SELECT * FROM accounts a LEFT JOIN potje_has_members p ON a.id = p.account_id WHERE p.potje_id = "+potje_id,function(errors,res,fields){
    connection.end();   
    callback(res);

  }
}

PotjeMembersRepository.prototype.getPotjesForMember = function(account_id,callback){
  connection.connect();

  connection.query("SELECT * FROM potjes p1 LEFT JOIN potje_has_members p2 ON p1.id = p.potje_id WHERE p2.account_id = "+account_id,function(errors,res,fields){
    connection.end();
    callback(res);
  }
}

module.exports = new PotjeMembersRepository();
