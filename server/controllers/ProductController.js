// ProductController.js - Controller handling product-related operations
const Product = require('../models/Product'); // Assuming you have a Product model/schema

const ProductController = {
  async getProductByCategory(req, res) {
    const { category } = req.params;

    try {
      const products = await Product.find({ category });
      res.status(200).json({ products });
    } catch (error) {
      console.error('Error fetching products by category:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async getProductByShop(req, res) {
    const { shopId } = req.params;

    try {
      const products = await Product.find({ shopId });
      res.status(200).json({ products });
    } catch (error) {
      console.error('Error fetching products by shop:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  },

  async addProduct(req, res) {
    const { name, category, price } = req.body;

    try {
      const newProduct = await Product.create({ name, category, price });
      res.status(201).json({ message: 'Product added successfully', product: newProduct });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
  },

  async updateProduct(req, res) {
    const { productId } = req.params;
    const { name, category, price } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, category, price },
        { new: true }
      );
      res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ message: 'Failed to update product', error: error.message });
    }
  },

  async deleteProduct(req, res) {
    const { productId } = req.params;

    try {
      await Product.findByIdAndDelete(productId);
      res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
  },

  // Add other product-related functions as needed
};

module.exports = ProductController;
