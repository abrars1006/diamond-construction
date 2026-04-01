import mongoose from 'mongoose';

const meetingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
    },
    date: {
      type: Date,
      required: [true, 'Meeting date is required'],
    },
    time: {
      type: String,
      required: [true, 'Meeting time is required'],
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate bookings for the same time slot on the same date
meetingSchema.index({ date: 1, time: 1 }, { unique: true });

const Meeting = mongoose.model('Meeting', meetingSchema);

export default Meeting;
