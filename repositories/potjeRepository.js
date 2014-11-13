var connection = require('../mysql');

function PotjeRepository(){

};


PotjeRepository.prototype.getPotjes = function(account_id, callback) {
  connection.connect();

  connection.query('SELECT * FROM potje_has_accounts WHERE account_id = ?', account_id, function(err,results,fields) {  
    var ors = "SELECT * FROM potjes WHERE id = -1";

    for (var i = 0; i < results.length; i++)
       ors += " OR id = " + results[i].potje_id;

    connection.query(ors, function(err,result,fields) {
        callback(result);
        connection.end();
    });
  });
};

PotjeRepository.prototype.createPotje = function(potje_data, members, callback) {
  connection.connect();

  connection.query('INSERT INTO potjes SET ?', potje_data, function(errors,r1,nogiets){
    pot_id = r1.insertId;

    console.log(pot_id);
    console.log(members);

    var inserts = [];

    console.log(members.length);

    for (var i = 0; i < members.length; i++)
    {
      var x = [pot_id, members[i].account_id];
      inserts.push(x);
    }

    connection.query('INSERT INTO `potje_has_accounts` (potje_id, account_id) VALUES ?', [inserts], function(errors,r2,nogiets){
      connection.end();
      callback(r2);
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