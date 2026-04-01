import Contact from '../models/Contact.js';
import { sendEmail } from '../utils/emailService.js';

/**
 * @desc    Create a new contact submission
 * @route   POST /api/contact
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const { name, phone, service, message } = req.body;

    // Basic validation
    if (!name || name.trim() === '') {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!phone || phone.trim() === '') {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }
    if (!service || service.trim() === '') {
      return res.status(400).json({ success: false, message: 'Service type is required' });
    }
    if (!message || message.trim() === '') {
      return res.status(400).json({ success: false, message: 'Message content is required' });
    }

    // Create entry in MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim(),
      message: message.trim(),
    });

    // Send email notification to admin (Abdul)
    try {
      const adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #DAA520;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service:</strong> ${service}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</div>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This is an automated notification from Diamond Construction Website.</p>
        </div>
      `;
      
      if (process.env.EMAIL_USER) {
        await sendEmail(process.env.EMAIL_USER, `New Inquiry: ${service} from ${name}`, '', adminEmailHtml);
      }
    } catch (emailError) {
      // Log email error but don't fail the request since data is saved in DB
      console.error('Email notification failed:', emailError.message);
    }

    return res.status(201).json({ 
      success: true, 
      message: 'Your message has been sent successfully!', 
      data: contact 
    });

  } catch (error) {
    console.error('Contact API Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * @desc    Get all contact submissions
 * @route   GET /api/contact
 * @access  Private/Admin
 */
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Get Contacts Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching contacts.' 
    });
  }
};

/**
 * @desc    Delete a contact submission
 * @route   DELETE /api/contact/:id
 * @access  Private/Admin
 */
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    
    if (!contact) {
      return res.status(404).json({ 
        success: false, 
        message: 'Submission not found' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Submission deleted successfully' 
    });
  } catch (error) {
    console.error('Delete Contact Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error while deleting submission.' 
    });
  }
};

