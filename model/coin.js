var mongoose = require('mongoose');  
var coinSchema = new mongoose.Schema({  
  name: String,
  created_at: { type: Date, default: Date.now },
});
mongoose.model('Coin', coinSchema);