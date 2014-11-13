var connection = require('../mysql');

function transactieRepository(){

}

transactieRepository.prototype.addTransaction = function(eigenaar_id, bedrag, callback) {
  connection.query('INSERT INTO transacties SET eigenaar_id = ?, bedrag = ?',[eigenaar_id, bedrag],function(err,result,fields) {
    console.log(err);
    callback(result);
  });
};

module.exports = new transactieRepository();
