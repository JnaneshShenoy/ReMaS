// productRoutes.js - Define routes for product operations

const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/getByCategory/:category', ProductController.getProductByCategory);
router.get('/getByShop/:shopId', ProductController.getProductByShop);
// Define other product-related routes

module.exports = router;
