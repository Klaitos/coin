var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WalletSchema = new Schema({
    name: { type: String, max: 50, required: true },
    created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Wallet', WalletSchema);;