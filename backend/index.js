const app = require('./src/app');
const mongoose = require('mongoose');

// Vercel Serverless Function entry point
module.exports = async (req, res) => {
  // 1. Connect to MongoDB if not already connected
  if (mongoose.connection.readyState === 0) {
    try {
      const uri = process.env.MONGO_URI;
      if (!uri) throw new Error('MONGO_URI missing in environment variables');
      
      await mongoose.connect(uri, {
        dbName: process.env.MONGO_DBNAME || 'zenvoa'
      });
      console.log('MongoDB connected (Vercel)');
    } catch (error) {
      console.error('MongoDB Connection Error:', error);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }

  // 2. Pass the request to the Express app
  return app(req, res);
};