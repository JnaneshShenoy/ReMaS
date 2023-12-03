// dbConfig.js - Configuration for PostgreSQL database connection

const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database_name',
  password: 'your_password',
  port: 5432, // Change the port if needed
});

module.exports = pool;
