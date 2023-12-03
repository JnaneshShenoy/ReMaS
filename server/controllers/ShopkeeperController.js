const Shopkeeper = require('../models/Shopkeeper'); // Assuming you have a Shopkeeper model/schema

const ShopkeeperController = {

  // Get all products
  async getAllProducts(req, res) {
    const { shopkeeperId } = req.params;

    Shopkeeper.findById(shopkeeperId)
      .then((shopkeeper) => {
        if (!shopkeeper) {
          return res.status(404).json({ message: 'Shopkeeper not found' });
        }
        res.status(200).json({ products: shopkeeper.products });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Internal server error', error: err.message });
      });
  },

  // Add new product
  async addProduct(req, res) {
    const { shopkeeperId } = req.params;
    const { productName, quantity, price } = req.body;

    Shopkeeper.findById(shopkeeperId)
      .then((shopkeeper) => {
        if (!shopkeeper) {
          return res.status(404).json({ message: 'Shopkeeper not found' });
        }

        const newProduct = {
          productName,
          quantity,
          price,
        };

        shopkeeper.products.push(newProduct);

        return shopkeeper.save();
      })
      .then((updatedShopkeeper) => {
        res.status(200).json({ message: 'Product added successfully', shopkeeper: updatedShopkeeper });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Failed to add product', error: err.message });
      });
  },

  // Update product
  async updateProduct(req, res) {
    const { shopkeeperId, productId } = req.params;
    const { productName, quantity, price } = req.body;

    Shopkeeper.findById(shopkeeperId)
      .then((shopkeeper) => {
        if (!shopkeeper) {
          return res.status(404).json({ message: 'Shopkeeper not found' });
        }

        const productToUpdate = shopkeeper.products.id(productId);
        if (!productToUpdate) {
          return res.status(404).json({ message: 'Product not found' });
        }

        // Update product details
        productToUpdate.productName = productName;
        productToUpdate.quantity = quantity;
        productToUpdate.price = price;

        return shopkeeper.save();
      })
      .then((updatedShopkeeper) => {
        res.status(200).json({ message: 'Product updated successfully', shopkeeper: updatedShopkeeper });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Failed to update product', error: err.message });
      });
  },

  // Delete product
  async deleteProduct(req, res) {
    const { shopkeeperId, productId } = req.params;

    Shopkeeper.findById(shopkeeperId)
      .then((shopkeeper) => {
        if (!shopkeeper) {
          return res.status(404).json({ message: 'Shopkeeper not found' });
        }

        shopkeeper.products.pull(productId);

        return shopkeeper.save();
      })
      .then((updatedShopkeeper) => {
        res.status(200).json({ message: 'Product deleted successfully', shopkeeper: updatedShopkeeper });
      })
      .catch((err) => {
        res.status(500).json({ message: 'Failed to delete product', error: err.message });
      });
  },
};

module.exports = ShopkeeperController;