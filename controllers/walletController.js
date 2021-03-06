var Wallet = require('../models/wallet'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Asset = require('../models/asset');

// Display list of all Wallets
exports.wallet_list = function (req, res) {
    Wallet.find().exec(function (err, wallets) {
        if (err) throw err;
        res.render('wallets/list', { wallets: wallets });
    });
};

// Display detail page for a specific Wallet
exports.wallet_detail = function (req, res) {
    Asset.find({ wallet: req.params.id }).populate('coin').exec().then(function (assets) {
        console.log(assets);
        res.render('wallets/show', { assets: assets });
    });
};

// Display Wallet create form on GET
exports.wallet_create_get = function (req, res) {
    res.render('wallets/create');
};

// Handle Wallet create on POST
exports.wallet_create_post = function (req, res) {
    var name = req.body.name;

    mongoose.model('Wallet').create({
        name: name,
    }, function (err, Wallet) {
        console.log(err, Wallet);
    });

    res.render('wallets/store');
};

// Display Wallet delete form on GET
exports.wallet_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Wallet delete GET');
};

// Handle Wallet delete on POST
exports.wallet_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Wallet delete POST');
};

// Display Wallet update form on GET
exports.wallet_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Wallet update GET');
};

// Handle Wallet update on POST
exports.wallet_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Wallet update POST');
};