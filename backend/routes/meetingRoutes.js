import express from 'express';
import { bookMeeting, getMeetings, deleteMeeting } from '../controllers/meetingController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const meetingLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Limit each IP to 3 meeting requests per windowMs
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});

router.post('/', meetingLimiter, bookMeeting);
router.get('/', getMeetings);
router.delete('/:id', deleteMeeting);

export default router;
