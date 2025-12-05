require('dotenv').config();
const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;
console.log('Testing connection to:', uri ? 'URI Provided' : 'URI Missing');

if (!uri) {
    console.error('ERROR: MONGO_URI is missing from .env');
    process.exit(1);
}

mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 })
    .then(() => {
        console.log('SUCCESS: Connected to MongoDB!');
        process.exit(0);
    })
    .catch(err => {
        console.error('ERROR: Connection failed');
        console.error(err);
        process.exit(1);
    });
