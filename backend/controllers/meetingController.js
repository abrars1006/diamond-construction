import Meeting from '../models/Meeting.js';
import { sendEmail } from '../utils/emailService.js';
import { startOfDay, endOfDay } from 'date-fns';

/**
 * @desc    Book a new meeting
 * @route   POST /api/meeting
 * @access  Public
 */
export const bookMeeting = async (req, res) => {
  try {
    const { name, phone, date, time } = req.body;

    // Validation
    if (!name || name.trim() === '') {
      return res.status(400).json({ success: false, message: 'Name is required' });
    }
    if (!phone || phone.trim() === '') {
      return res.status(400).json({ success: false, message: 'Phone number is required' });
    }
    if (!date) {
      return res.status(400).json({ success: false, message: 'Meeting date is required' });
    }
    if (!time) {
      return res.status(400).json({ success: false, message: 'Meeting time slot is required' });
    }

    const meetingDate = new Date(date);
    
    // Check if the date is in the past
    if (startOfDay(meetingDate) < startOfDay(new Date())) {
      return res.status(400).json({ success: false, message: 'Cannot book meetings in the past' });
    }

    // Check for existing meeting at the given date and time
    // We use startOfDay to ensure we're comparing the correct calendar day
    const existingMeeting = await Meeting.findOne({ 
      date: {
        $gte: startOfDay(meetingDate),
        $lte: endOfDay(meetingDate)
      }, 
      time 
    });

    if (existingMeeting) {
      return res.status(409).json({ 
        success: false, 
        message: 'This time slot is already booked for the selected date. Please choose another time.' 
      });
    }

    const meeting = await Meeting.create({
      name: name.trim(),
      phone: phone.trim(),
      date: startOfDay(meetingDate), // Store only the date part
      time,
    });

    // Notification to Admin (Abdul)
    try {
      const dateString = meetingDate.toLocaleDateString('en-IN', { 
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
      });
      
      const adminEmailHtml = `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #DAA520;">New Meeting Booked</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Date:</strong> ${dateString}</p>
          <p><strong>Time Slot:</strong> ${time}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #888;">This is an automated notification from Diamond Construction Website.</p>
        </div>
      `;
      
      if (process.env.EMAIL_USER) {
        await sendEmail(process.env.EMAIL_USER, `New Meeting: ${dateString} at ${time}`, '', adminEmailHtml);
      }
    } catch (emailError) {
      console.error('Email notification failed:', emailError.message);
    }

    return res.status(201).json({ 
      success: true, 
      message: 'Meeting booked successfully! We will contact you soon.', 
      data: meeting 
    });

  } catch (error) {
    console.error('Meeting booking error:', error);
    
    // Handle mongoose duplicate key error (if race condition occurs)
    if (error.code === 11000) {
      return res.status(409).json({ 
        success: false, 
        message: 'This time slot was just booked by someone else. Please try another slot.' 
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: 'Failed to book meeting. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * @desc    Get all meetings
 * @route   GET /api/meeting
 * @access  Private/Admin
 */
export const getMeetings = async (req, res) => {
  try {
    const meetings = await Meeting.find().sort({ date: 1, time: 1 });
    return res.status(200).json({
      success: true,
      count: meetings.length,
      data: meetings
    });
  } catch (error) {
    console.error('Get Meetings Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching meetings.' 
    });
  }
};

/**
 * @desc    Delete a meeting
 * @route   DELETE /api/meeting/:id
 * @access  Private/Admin
 */
export const deleteMeeting = async (req, res) => {
  try {
    const meeting = await Meeting.findByIdAndDelete(req.params.id);
    
    if (!meeting) {
      return res.status(404).json({ 
        success: false, 
        message: 'Meeting not found' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Meeting deleted successfully' 
    });
  } catch (error) {
    console.error('Delete Meeting Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Server error while deleting meeting.' 
    });
  }
};

