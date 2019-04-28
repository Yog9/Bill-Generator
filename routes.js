const express = require('express');
const router = express.Router();
const signUpController = require('./controllers/signUp');
const signInController = require('./controllers/signIn');
const signOutController = require('./controllers/signOut');
router.post('/signup', signUpController);
router.post('/signin', signInController);
router.get('/logout', signOutController);
module.exports = router;