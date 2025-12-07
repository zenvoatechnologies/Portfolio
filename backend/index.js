const app = require('./src/app');
const mongoose = require('mongoose');

// Vercel Serverless Function entry point
module.exports = async (req, res) => {
  // Check if MongoDB connection is ready (0 = disconnected, 1 = connected)
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
      // NOTE: You must also fix the IP Whitelisting (See Step 3)
      return res.status(500).json({ error: 'Database connection failed. Check Atlas IP whitelist.' });
    }
  }

  // Pass the request to the Express app
  return app(req, res);
};