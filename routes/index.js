var express = require('express'),
  router = express.Router(),
  coin_controller = require('../controllers/coinController')
  wallet_controller = require('../controllers/walletController');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});  

/* COIN */
router.get('/coins', coin_controller.coin_list);
router.get('/coin/create', coin_controller.coin_create_get);
router.post('/coin/create', coin_controller.coin_create_post);

/* WALLET */
router.get('/wallets', wallet_controller.wallet_list);
router.get('/wallet/create', wallet_controller.wallet_create_get);
router.post('/wallet/create', wallet_controller.wallet_create_post);

module.exports = router;
