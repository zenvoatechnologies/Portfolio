const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendLeadEmail = async (lead) => {
  try {
    const data = await resend.emails.send({
      // ✅ TRICK: Use "Name <email>" format. 
      // The email MUST be 'onboarding@resend.dev' for the free tier without a domain.
      from: 'Zenvoa Technologies <zenvoatechnologies@gmail.com>',
      
      // ✅ TRICK: Set 'reply_to' to the visitor's email.
      // When you click "Reply" in your inbox, it will go to the visitor, not Resend.
      reply_to: lead.email,
      
      to: process.env.NOTIFY_EMAIL,
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