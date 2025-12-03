const mongoose = require('mongoose');

module.exports = async function connectDB() {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI missing');
  await mongoose.connect(uri, {
    dbName: process.env.MONGO_DBNAME || 'zenvoa'
  });
  console.log('MongoDB connected');
};
