import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FiX, FiCalendar, FiClock, FiUser, FiPhone, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import api from '../../services/api';
import { format, addDays, isPast, startOfDay } from 'date-fns';

const BookingModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const minDate = format(new Date(), 'yyyy-MM-dd');
  const maxDate = format(addDays(new Date(), 30), 'yyyy-MM-dd');

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await api.post('/meeting', data);
      toast.success(response.data.message || 'Meeting booked successfully!');
      setStatus('success');
      setTimeout(() => {
        reset();
        onClose();
        setStatus(null);
      }, 2000);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to book meeting. Please try another slot.';
      toast.error(errorMsg);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[110]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden z-[120] shadow-2xl"
          >
            <div className="p-8 md:p-12 relative">
              <button 
                onClick={onClose}
                className="absolute top-8 right-8 text-light/40 hover:text-primary transition-all duration-300 hover:rotate-90"
              >
                <FiX size={28} />
              </button>

              <div className="mb-10 text-center">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-3 block">Reservation</span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-light mb-4">Book a Consultation</h3>
                <p className="text-light/50 text-base leading-relaxed max-w-sm mx-auto">Schedule a one-on-one meeting with Abdul to discuss your project requirements.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-primary text-[10px] font-bold uppercase tracking-widest pl-1">Full Name</label>
                    <div className="relative group">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-light/20 group-focus-within:text-primary transition-colors" />
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={`w-full bg-dark/40 border-2 ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-2xl pl-12 pr-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300`}
                        placeholder="Your Name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-[10px] px-1 flex items-center gap-1 mt-1"><FiAlertCircle /> {errors.name.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-primary text-[10px] font-bold uppercase tracking-widest pl-1">Phone Number</label>
                    <div className="relative group">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-light/20 group-focus-within:text-primary transition-colors" />
                      <input
                        {...register("phone", { required: "Phone is required" })}
                        className={`w-full bg-dark/40 border-2 ${errors.phone ? 'border-red-500/50' : 'border-white/5'} rounded-2xl pl-12 pr-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300`}
                        placeholder="Phone Number"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-[10px] px-1 flex items-center gap-1 mt-1"><FiAlertCircle /> {errors.phone.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-primary text-[10px] font-bold uppercase tracking-widest pl-1">Select Date</label>
                    <div className="relative group">
                      <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-light/20 group-focus-within:text-primary transition-colors" />
                      <input
                        {...register("date", { required: "Date is required" })}
                        type="date"
                        min={minDate}
                        max={maxDate}
                        className={`w-full bg-dark/40 border-2 ${errors.date ? 'border-red-500/50' : 'border-white/5'} rounded-2xl pl-12 pr-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 [color-scheme:dark]`}
                      />
                    </div>
                    {errors.date && <p className="text-red-500 text-[10px] px-1 flex items-center gap-1 mt-1"><FiAlertCircle /> {errors.date.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-primary text-[10px] font-bold uppercase tracking-widest pl-1">Time Slot</label>
                    <div className="relative group">
                      <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-light/20 group-focus-within:text-primary transition-colors" />
                      <select
                        {...register("time", { required: "Time is required" })}
                        className={`w-full bg-dark/40 border-2 ${errors.time ? 'border-red-500/50' : 'border-white/5'} rounded-2xl pl-12 pr-10 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 appearance-none`}
                      >
                        <option value="">Choose Time</option>
                        {timeSlots.map(slot => (
                          <option key={slot} value={slot} className="bg-dark text-light">{slot}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-light/20">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                      </div>
                    </div>
                    {errors.time && <p className="text-red-500 text-[10px] px-1 flex items-center gap-1 mt-1"><FiAlertCircle /> {errors.time.message}</p>}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={isSubmitting}
                    type="submit"
                    className="btn-primary w-full py-5 rounded-2xl text-lg font-bold shadow-2xl flex items-center justify-center gap-3 group"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-3 border-dark border-t-transparent rounded-full"
                      />
                    ) : (
                      <>Confirm Your Meeting <FiCalendar className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                  </button>
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500 text-sm">
                    <FiCheckCircle size={20} />
                    <span>Success! Your meeting has been scheduled.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm">
                    <FiAlertCircle size={20} />
                    <span>Slot unavailable. Please pick a different time.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

