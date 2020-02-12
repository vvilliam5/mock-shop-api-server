const express = require('express');
const router = express.Router();
const db = require('../models/products');
const auth = require('../controller/index');

//view all products
router.get('/', auth.verifyBoth, db.viewAll)
//view product by id
router.get('/:id', auth.verifyBoth, db.viewProductByID)
//create new product
router.post('/', auth.verifyAdmin, db.createNew)
//delete a product
router.delete('/:id', auth.verifyAdmin, db.deleteProduct)
//update a product
router.put('/:id', auth.verifyAdmin, db.updateProduct)
module.exports = router;