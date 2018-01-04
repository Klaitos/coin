var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'); //parses information from POST;
router.use(bodyParser.urlencoded({ extended: true }))
/* GET coins listing. */
router.get('/', function (req, res, next) {
  res.render('coins/list');
});

router.get('/create', function (req, res, next) {
  res.render('coins/create');
});

router.post('/store', function (req, res, next) {
  var name = req.body.name;
  
  //call the create function for our database
  console.log('Store');
  mongoose.model('Coin').create({
    name: name,
  }, function (err, blob) {
    console.log(err, blob);
    console.log("Go")
  });

  res.render('coins/store');
});


module.exports = router;
