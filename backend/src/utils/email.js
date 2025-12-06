const { Resend } = require('resend');

// Initialize Resend with API Key
const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendLeadEmail = async (lead) => {
  try {
    const data = await resend.emails.send({
      // Use the default testing domain if you haven't verified yours yet
      from: 'onboarding@resend.dev', 
      to: process.env.NOTIFY_EMAIL, // Make sure this is correct!
      subject: `New Lead: ${lead.name || 'Visitor'}`,
      html: `
        <h2>New Contact from Portfolio</h2>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone || 'N/A'}</p>
        <p><strong>Message:</strong><br/>${lead.message}</p>
      `
    });
    console.log('Email sent successfully:', data);
  } catch (error) {
    console.error('Resend Error:', error);
  }
};