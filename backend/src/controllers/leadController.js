const Lead = require('../models/Lead');
const { sendLeadEmail } = require('../utils/email');

exports.createLead = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (process.env.MOCK_MODE === 'true') {
    console.log('MOCK LEAD RECEIVED:', { name, email, phone, message });

    // Attempt to send real email even in mock mode
    try {
      await sendLeadEmail({ name, email, phone, message });
      console.log('Email sent successfully (Mock Mode)');
    } catch (err) {
      console.error('Email send failed in Mock Mode:', err.message);
    }

    return res.status(201).json({ message: 'Lead saved (Mock)', lead: { name, email } });
  }

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
