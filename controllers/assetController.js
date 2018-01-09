var Asset = require('../models/asset'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Wallet = require('../models/wallet'),
    Coin = require('../models/coin');

// Display list of all Assets
exports.asset_list = function (req, res) {
    Asset.find().exec(function (err, assets) {
        if (err) throw err;
        res.render('assets/list', { assets: assets });
    });
};

// Display detail page for a specific Asset
exports.asset_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Asset detail: ' + req.params.id);
};

// Display Asset create form on GET
exports.asset_create_get = function (req, res) {
    Wallet.find().exec().then(function (wallets) {
        Coin.find().exec().then(function (coins) {
            res.render('assets/create', { coins: coins, wallets: wallets });
        }).catch(function (error) {
            console.log(error);
        });
    });
};

// Handle Asset create on POST
exports.asset_create_post = function (req, res) {
    var coin = req.body.coin,
        wallet = req.body.wallet,
        qty = req.body.qty;

    mongoose.model('Asset').create({
        wallet: wallet,
        qty: qty,
        coin: coin,
    }, function (err, Asset) {
        console.log(err, Asset);
    });

    res.render('assets/store');
};

// Display Asset delete form on GET
exports.asset_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Asset delete GET');
};

// Handle Asset delete on POST
exports.asset_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Asset delete POST');
};

// Display Asset update form on GET
exports.asset_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Asset update GET');
};

// Handle Asset update on POST
exports.asset_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Asset update POST');
};