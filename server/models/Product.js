// Product.js - Model for Product schema

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true },
  shopkeeper: { type: mongoose.Schema.Types.ObjectId, ref: 'Shopkeeper', required: true },
  // Define other necessary fields
});

module.exports = mongoose.model('Product', productSchema);
