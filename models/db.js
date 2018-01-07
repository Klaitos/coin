var mongoose = require('mongoose');
mongoose.connect('mongodb://coin:coin@localhost/coinsdb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));