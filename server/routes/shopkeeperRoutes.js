// shopkeeperRoutes.js - Define routes for shopkeeper operations

const express = require('express');
const router = express.Router();
const ShopkeeperController = require('../controllers/ShopkeeperController');

router.post('/addProduct', ShopkeeperController.addProduct);
router.put('/updateQuantity/:productId', ShopkeeperController.updateQuantity);
router.put('/updateProduct/:productId', ShopkeeperController.updateProduct);
// Define other shopkeeper-related routes

module.exports = router;
