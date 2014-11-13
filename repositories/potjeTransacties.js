var connection = require('../mysql');

function PotjeTransactiesRepository(){

}

PotjeTransactiesRepository.prototype.getTransactionsForPotje = function(potje_id,callback){
  connection.query("SELECT * FROM transacties t LEFT JOIN potje_has_transacties p ON t.id = p.transactie_id WHERE p.potje_id = "+potje_id,function(errors,res,fields){
    callback(res);
  }   
}

PotjeTransactiesRepository.prototype.getPotjeForTransaction = function(trans_id, callback){
  connection.query("SELECT * FROM potjes p LEFT JOIN potje_has_transacties t ON p.id = t.potje_id WHERE t.trans_id = "+trans_id,function(errors,res,fields){
    callback(res);
  }
}

module.exports = new PotjeTransactiesRepository();
