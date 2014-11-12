//var connection  = require('express-myconnection'); 
var mysql = require('mysql');

var connection = mysql.createConnection({
        host: '192.168.200.99',
        user: 'potje',
        password : 'lekkerpotje',
        port : 3306, //port mysql
        database:'potje'
});


function Potje_has_accountsRepository(){

}


UserRepository.prototype.getUser = function(userId, callback) {
  connection.connect();

  connection.query('SELECT * FROM potje_has_accounts WHERE id = ?',[account_id],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

module.exports = new Potje_has_accountsRepository();

var a = new Potje_has_accountsRepository();

a.getUser(1, function(user) {
  console.log(user);
});