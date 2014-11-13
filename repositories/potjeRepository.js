var connection = require('../mysql');

function PotjeRepository(){

};


PotjeRepository.prototype.getPotjes = function(potje_id, callback) {
  connection.connect();

  connection.query('SELECT * FROM',function(err,result,fields) {
    console.log(err);
    callback(result);
  });

  connection.end();
};


PotjeRepository.prototype.createPotje = function(potje_data, members, callback) {
  connection.connect();

  var insert = {
    name : potje_data.name
  }

  connection.query('INSERT INTO potjes SET ?', insert, function(errors,r1,nogiets){
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
      callback(r);
      connection.end();
    });
  })
};

module.exports = new PotjeRepository();

/*
var c = new PotjeRepository();

c.createPotje({name:"lekkerpotjehoor"},[{account_id:2},{account_id:3},{account_id:4}],function(data){
  console.log(data);
});

*/