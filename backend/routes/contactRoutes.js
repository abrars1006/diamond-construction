import express from 'express';
import { createContact, getContacts, deleteContact } from '../controllers/contactController.js';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting to prevent spam
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 contact requests per windowMs
  message: { message: 'Too many requests from this IP, please try again after 15 minutes' }
});

router.post('/', contactLimiter, createContact);
router.get('/', getContacts);
router.delete('/:id', deleteContact);

export default router;
