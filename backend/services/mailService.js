import transporter from '../config/mailConfig.js';
import dotenv from 'dotenv';

dotenv.config();


export const sendContactEmails = async ({ name, email, subject, message }) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>This message was sent from your website contact form.</em></p>
    `
  };



  // 2-3 number bdha dijiyega , 2 type ka email lga diye hain = reply + sent , admin to user and user to admin 

  

  const mailOptions2 = {
    from: process.env.EMAIL_USER,
    to: email, 
    subject: `Contact Form: REPLY TO YOUR QUERY - ${subject}`,
    html: `
      <h2>Reply To Your Submission</h2>
      <p>Thank you for contacting us. We will get back to you shortly.</p>
      <hr>
      <p><em>This message was sent from the website you visited.</em></p>
    `
  };

  
  await transporter.sendMail(mailOptions);
  await transporter.sendMail(mailOptions2);
};
