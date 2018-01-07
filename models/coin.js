var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CoinSchema = new Schema({
  _id: String,
  name: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

CoinSchema.virtual('url')
  .get(function () {
    return '/coins/' + this._id;
  });

module.exports = mongoose.model('Coin', CoinSchema);;