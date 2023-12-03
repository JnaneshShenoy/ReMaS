const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000; // Replace 3000 with your preferred port number


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const shopkeeperRoutes = require('./routes/shopkeeperRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/users', userRoutes);
app.use('/shopkeepers', shopkeeperRoutes);
app.use('/products', productRoutes);

// Error handling middleware (example)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});