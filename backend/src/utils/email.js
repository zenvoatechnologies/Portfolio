const nodemailer = require('nodemailer');

// 1. Create the Transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  // Use port 587 for TLS (STARTTLS) or 465 for SSL.
  // We use process.env.SMTP_PORT to dynamically set the secure option below.
  port: process.env.SMTP_PORT || 587,
  secure: process.env.SMTP_PORT === '465', // true if port is 465, false otherwise
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Optional: Verify connection status on startup
transporter.verify().then(() => {
  console.log('SMTP transporter ready');
}).catch(err => {
  console.warn('SMTP transporter not ready:', err.message);
});

// 2. Export the main function to send the lead email
exports.sendLeadEmail = async (lead) => {
  const html = `<h2>New Client Inquiry - Zenvoa Technologies</h2>
    <p><strong>Name:</strong> ${lead.name || '—'}</p>
    <p><strong>Email:</strong> ${lead.email || '—'}</p>
    <p><strong>Phone:</strong> ${lead.phone || '—'}</p>
    <p><strong>Message:</strong> ${lead.message || '—'}</p>`;

  await transporter.sendMail({
    // Use the "Friendly Name <sender@domain.com>" format from the environment variable directly
    from: process.env.SMTP_FROM,
    to: process.env.NOTIFY_EMAIL, // The address that receives the leads
    subject: `New Client — ${lead.name || 'No Name'}`,
    replyTo: lead.email, // Allows you to reply directly to the client
    html
  });
};