var mongoose = require('mongoose');  
var Schema = mongoose.Schema;

var coinSchema = new Schema({  
  name: String,
  created_at: { type: Date, default: Date.now },
});
var Coin = mongoose.model('Coin', coinSchema);

module.exports = Coin;