import express from 'express';
import { sendContactEmails } from '../services/mailService.js';
import Contact from '../models/contact.js';


const router = express.Router();

router.post('/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    const newContact = await Contact.create({ name, email, subject, message });

    await sendContactEmails({ name, email, subject, message });

    res.json({
      success: true,
      message: 'Message sent successfully!',
      data: newContact
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

export default router;
