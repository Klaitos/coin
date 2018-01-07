var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssetSchema = new Schema({
    coin: { type: Schema.ObjectId, ref: 'Coin', required: true },
    wallet: { type: Schema.ObjectId, ref: 'Wallet', required: true },
    qty: { type: Number, min: 0, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Asset', AssetSchema);;