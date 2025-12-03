const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  phone: { type: String },
  message: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', LeadSchema);
