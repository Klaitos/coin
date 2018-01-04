var express = require('express');
var router = express.Router();

/* GET coins listing. */
router.get('/', function (req, res, next) {
  res.render('coins/list');
});

module.exports = router;
