const express = require('express');
const homeController = require('./controllers/Home');
const getCheckoutController = require('./controllers/Getcheckout');
const submitMenuController = require('./controllers/Submitmenu');
const router = express.Router();

/* GET home page. */
router.get('/', homeController);
router.post('/', submitMenuController);
router.get('/order', getCheckoutController);
module.exports = router;

