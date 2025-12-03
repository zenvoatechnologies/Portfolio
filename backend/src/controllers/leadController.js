const Lead = require('../models/Lead');
const { sendLeadEmail } = require('../utils/email');

exports.createLead = async (req, res) => {
  const { name, email, phone, message } = req.body;
  try {
    const lead = new Lead({ name, email, phone, message });
    await lead.save();

    // send email asynchronously (fire and forget)
    sendLeadEmail(lead).catch(err => console.error('Email send failed:', err));

    res.status(201).json({ message: 'Lead saved', lead });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
