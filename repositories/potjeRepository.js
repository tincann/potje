var connection = require('../mysql');

function PotjeRepository(){

};


PotjeRepository.prototype.getPotje = function(potjeId, callback) {
  connection.query('SELECT * FROM potjes WHERE id = ?', [potjeId], function(error, potje){
    potje = potje[0];
    connection.query('SELECT * FROM potje_has_accounts as k, accounts as a WHERE potje_id = ? AND k.account_id = a.id', [potjeId], function(error, members){
      connection.query('SELECT * FROM transacties WHERE potje_id = ?', [potjeId], function(error, tx){
        potje.members = members;
        potje.transactions = tx;
        callback(potje);
      });
    });
  });
};

PotjeRepository.prototype.getPotjes = function(account_id, callback) {
  connection.query('SELECT * FROM potje_has_accounts WHERE account_id = ?', account_id, function(err,results,fields) {  
    console.log(err);
    var ors = "SELECT * FROM potjes WHERE 1 = 1";

    for (var i = 0; i < results.length; i++){
      ors += " OR id = " + results[i].potje_id;
    }

    connection.query(ors, function(err,result,fields) {
      callback(result);
    });
  });
};

PotjeRepository.prototype.createPotje = function(potje_data, members, callback) {
  console.log('createPotje::');
  console.log('createPotje::data', potje_data);
  console.log('createPotje::members', members);

  var participants = members.map(function(i){ return i});

  connection.query('INSERT INTO potjes SET ?', potje_data, function(errors,r1){
    console.log('createPotje::members', participants);
    if(errors){
      callback('error', errors);
      return;
    }

    var pot_id = r1.insertId;

    console.log(participants);

    var inserts = [];
 
    for (var i = 0; i < participants.length; i++)
    {
      var x = [pot_id, participants[i].account_id];
      inserts.push(x);
    }
    connection.query('INSERT INTO `potje_has_accounts` (potje_id, account_id) VALUES ?', [inserts], function(errors,r2){
      callback(null, r2);
    });
  });
};

module.exports = new PotjeRepository();

/*
var c = new PotjeRepository();

c.createPotje({name:"lekkerpotjehoor"},[{account_id:2},{account_id:3},{account_id:4}],function(data){
  console.log(data);
});

*/