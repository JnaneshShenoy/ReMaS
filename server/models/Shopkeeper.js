// Shopkeeper.js - Model for Shopkeeper schema

const mongoose = require('mongoose');

const shopkeeperSchema = new mongoose.Schema({
  shop_name: { type: String, required: true },
  owner_name: { type: String, required: true },
  location: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  // Define other necessary fields
});

module.exports = mongoose.model('Shopkeeper', shopkeeperSchema);
