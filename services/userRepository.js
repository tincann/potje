//var connection  = require('express-myconnection'); 
var mysql = require('mysql');

var connection = mysql.createConnection({
        host: '192.168.200.99',
        user: 'potje',
        password : 'lekkerpotje',
        port : 3306, //port mysql
        database:'potje'
});


function UserRepository(){

}


UserRepository.prototype.getUser = function(userId, callback) {
  connection.connect();

  connection.query('SELECT * FROM users WHERE id = ?',[userId],function(err,result,fields) {
    console.log(err);
    callback(result);                   
  });

  connection.end();
};

module.exports = new UserRepository();

var a = new UserRepository();

a.getUser(1, function(user) {
  console.log(user);
});