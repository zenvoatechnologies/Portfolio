const Lead = require('../models/Lead');
const { sendLeadEmail } = require('../utils/email');

exports.createLead = async (req, res) => {
  const { name, email, phone, message } = req.body;

  // 1. Handle Mock Mode (occurs if DB connection failed)
  if (process.env.MOCK_MODE === 'true') {
    console.log('MOCK LEAD RECEIVED:', { name, email, phone, message });

    // FIX: Removed 'await'. Now sending happens in the background.
    sendLeadEmail({ name, email, phone, message })
      .then(() => console.log('Email sent successfully (Mock Mode)'))
      .catch(err => console.error('Email send failed in Mock Mode:', err.message));

    return res.status(201).json({ message: 'Lead saved (Mock)', lead: { name, email } });
  }

  // 2. Handle Production Mode (Normal DB Save)
  try {
    const lead = new Lead({ name, email, phone, message });
    await lead.save(); // We only wait for DB save, not email.

    // Fire and forget email (Background process)
    sendLeadEmail(lead).catch(err => console.error('Email send failed:', err));

    res.status(201).json({ message: 'Lead saved', lead });
  } catch (err) {
    console.error('Lead Save Error:', err);
    res.status(400).json({ error: err.message });
  }
};