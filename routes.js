const express = require('express');
const homeController = require('./controllers/Home');
const getCheckoutController = require('./controllers/Getcheckout');
const submitMenuController = require('./controllers/Submitmenu');
//const createmenuController = require('./controllers/Createmenu');
const router = express.Router();

/* GET home page. */
router.get('/', homeController);
/* Uncomment this to create a menu 
router.post('/', createmenuController); */
router.post('/', submitMenuController)
router.get('/order', getCheckoutController);
module.exports = router;

