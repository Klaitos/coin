var express = require('express'),
  router = express.Router(),
  coin_controller = require('../controllers/coinController')
  wallet_controller = require('../controllers/walletController')
  asset_controller = require('../controllers/assetController');


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});  

/* COINS */
router.get('/coins', coin_controller.coin_list);
router.get('/coin/create', coin_controller.coin_create_get);
router.post('/coin/create', coin_controller.coin_create_post);

/* WALLETS */
router.get('/wallets', wallet_controller.wallet_list);
router.get('/wallet/create', wallet_controller.wallet_create_get);
router.post('/wallet/create', wallet_controller.wallet_create_post);
router.get('/wallet/:id', wallet_controller.wallet_detail);


/* ASSETS */
router.get('/assets', asset_controller.asset_list);
router.get('/asset/create', asset_controller.asset_create_get);
router.post('/asset/create', asset_controller.asset_create_post);



module.exports = router;
