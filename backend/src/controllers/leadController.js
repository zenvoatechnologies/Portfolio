const Lead = require('../models/Lead');
const { sendLeadEmail } = require('../utils/email');

exports.createLead = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (process.env.MOCK_MODE === 'true') {
    console.log('MOCK LEAD RECEIVED:', { name, email, phone, message });

    // Fire and forget email (non-blocking)
    sendLeadEmail({ name, email, phone, message })
      .catch(err => console.error('Email failed (Mock Mode):', err.message));

    return res.status(201).json({ message: 'Lead saved (Mock)', lead: { name, email } });
  }

  // Production Mode
  try {
    const lead = new Lead({ name, email, phone, message });
    await lead.save();

    // Vercel Serverless Fix: We MUST await the email
    // In serverless, "background" tasks are killed immediately after the response is sent.
    try {
      await sendLeadEmail(lead);
      console.log('Email sent successfully');
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
      // We still return success to the user because the lead was saved to DB
    }

    res.status(201).json({ message: 'Lead saved', lead });
  } catch (err) {
    console.error('Lead Save Error:', err);
    res.status(400).json({ error: err.message });
  }
};