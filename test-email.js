import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'nagulavamshi1453@gmail.com',
  from: 'nagulavamshi1453@gmail.com',
  subject: 'Test SendGrid - Vamshi Portfolio',
  text: 'If you see this, SendGrid is working!',
};

sgMail.send(msg)
  .then(() => console.log('Email sent successfully'))
  .catch((error) => console.error('Error:', error.response?.body || error.message));
