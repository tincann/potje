var mysql = require('mysql');

var connection = mysql.createConnection({
        host: '192.168.200.99',
        user: 'potje',
        password : 'lekkerpotje',
        port : 3306, //port mysql
        database:'potje'
});


module.exports = connection;