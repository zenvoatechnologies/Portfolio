const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// verify transporter on startup (non-blocking)
transporter.verify().then(() => {
  console.log('SMTP transporter ready');
}).catch(err => {
  console.warn('SMTP transporter not ready:', err.message);
});

exports.sendLeadEmail = async (lead) => {
  const html = `<h2>New lead from Zenvoa Technologies</h2>
    <p><strong>Name:</strong> ${lead.name || '—'}</p>
    <p><strong>Email:</strong> ${lead.email || '—'}</p>
    <p><strong>Phone:</strong> ${lead.phone || '—'}</p>
    <p><strong>Message:</strong> ${lead.message || '—'}</p>`;

  await transporter.sendMail({
    from: process.env.SMTP_FROM,
    to: process.env.NOTIFY_EMAIL,
    subject: `New lead — ${lead.name || 'No name'}`,
    html
  });
};
