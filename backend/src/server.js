const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectDB();
    const server = http.createServer(app);
    server.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
  } catch (err) {
    console.warn('MongoDB connection failed. Starting in MOCK MODE.');
    console.error(err.message);
    process.env.MOCK_MODE = 'true';
    const server = http.createServer(app);
    server.listen(PORT, () => console.log(`Backend running in MOCK MODE on port ${PORT}`));
  }
})();
