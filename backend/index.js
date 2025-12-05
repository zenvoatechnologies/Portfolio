const app = require('./src/app');
const connectDB = require('./src/config/db');

// Initialize database connection
connectDB();

// Export the app for Vercel serverless function
module.exports = app;
