var Coin = require('../models/coin'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'), //parses information from POST;
    Coin = require('../models/coin');

// Display list of all Coins
exports.coin_list = function (req, res) {
    Coin.find().exec(function (err, coins) {
        if (err) throw err;
        res.render('coins/list', { coins: coins });
    });
};

// Display detail page for a specific Coin
exports.coin_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin detail: ' + req.params.id);
};

// Display Coin create form on GET
exports.coin_create_get = function (req, res) {
    res.render('coins/create');
};

// Handle Coin create on POST
exports.coin_create_post = function (req, res) {
    var name = req.body.name,
        id = req.body.id;

    mongoose.model('Coin').create({
        _id: id,
        name: name,
    }, function (err, Coin) {
        console.log(err, Coin);
    });

    res.render('coins/store');
};

// Display Coin delete form on GET
exports.coin_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin delete GET');
};

// Handle Coin delete on POST
exports.coin_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin delete POST');
};

// Display Coin update form on GET
exports.coin_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin update GET');
};

// Handle Coin update on POST
exports.coin_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Coin update POST');
};