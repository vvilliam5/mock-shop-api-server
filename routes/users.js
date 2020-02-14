var express = require('express');
var router = express.Router();
const db = require('../models/users');
const cartDB = require('../models/cart');
const auth = require('../controller/index');

//view all users
router.get('/', db.viewAll)
//sign up
router.post('/signup', db.signUp)
//login
router.post('/login', db.login) 
//view all products in cart
router.get('/:id/cart', auth.verifyBoth, cartDB.viewCart)
//add product to cart
router.post('/:id/cart', auth.verifyBoth, cartDB.addToCart)
//delete product from cart
router.delete('/:id/cart/:pID', auth.verifyBoth, cartDB.deleteProductFromCart)
module.exports = router;
