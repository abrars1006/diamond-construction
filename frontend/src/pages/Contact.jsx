import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import api from '../services/api';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setStatus(null);
    try {
      const response = await api.post('/contact', data);
      toast.success(response.data.message || 'Message sent successfully!');
      setStatus('success');
      reset();
      // Reset success status after some time
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to send message. Please try again.';
      toast.error(errorMsg);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-dark pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-bold mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-light mb-8 leading-tight">Contact Us</h1>
          <p className="text-light/60 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Have a project in mind? We'd love to hear from you. Reach out to us for a free consultation and quote.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <FiPhone size={24} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-lg mb-2">Phone</h4>
                  <a href="tel:8946074703" className="text-light/60 hover:text-primary transition-colors text-base">8946074703</a>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <FiMail size={24} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-lg mb-2">Email</h4>
                  <a href="mailto:abdul@diamondconstruction.com" className="text-light/60 hover:text-primary transition-colors text-base break-all">abdul@diamondconstruction.com</a>
                </div>
              </div>
              <div className="flex items-start gap-5 group md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-lg mb-2">Location</h4>
                  <p className="text-light/60 text-base leading-relaxed">
                    Ayya Saami Street,<br />
                    Alandur, Chennai,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-5 group md:col-span-2">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <FiClock size={24} />
                </div>
                <div>
                  <h4 className="text-light font-bold text-lg mb-2">Working Hours</h4>
                  <p className="text-light/60 text-base">Mon - Sat: 08:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="w-full h-full min-h-[350px] rounded-3xl overflow-hidden grayscale contrast-125 border border-white/10 shadow-2xl relative">
              <iframe 
                src="https://www.google.com/maps?q=Ayya+Saami+Street,+Alandur,+Chennai,+Tamil+Nadu,+India&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Alandur Chennai Location"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-dark/20 rounded-3xl"></div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-card p-8 md:p-14 bg-dark-card/50 backdrop-blur-xl border border-white/10 flex flex-col justify-center"
          >
            <h3 className="text-3xl font-heading font-bold text-light mb-3">Send Us a Message</h3>
            <p className="text-light/50 mb-10 text-base">Fill out the form below and we'll get back to you within 24 hours.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="block text-primary text-xs font-bold uppercase tracking-widest pl-1">Full Name</label>
                  <input
                    id="name"
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    className={`w-full bg-dark/40 border-2 ${errors.name ? 'border-red-500/50' : 'border-white/5'} rounded-2xl px-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 text-base placeholder:text-light/20`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.name.message}</p>}
                </div>
                <div className="space-y-3">
                  <label htmlFor="phone" className="block text-primary text-xs font-bold uppercase tracking-widest pl-1">Phone Number</label>
                  <input
                    id="phone"
                    {...register("phone", { required: "Phone is required" })}
                    type="tel"
                    className={`w-full bg-dark/40 border-2 ${errors.phone ? 'border-red-500/50' : 'border-white/5'} rounded-2xl px-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 text-base placeholder:text-light/20`}
                    placeholder="Phone Number"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.phone.message}</p>}
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="service" className="block text-primary text-xs font-bold uppercase tracking-widest pl-1">Service Needed</label>
                <div className="relative">
                  <select
                    id="service"
                    {...register("service", { required: "Please select a service" })}
                    className={`w-full bg-dark/40 border-2 ${errors.service ? 'border-red-500/50' : 'border-white/5'} rounded-2xl px-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 text-base appearance-none cursor-pointer`}
                  >
                    <option value="" className="bg-dark text-light">Select a service</option>
                    <option value="Residential Construction" className="bg-dark text-light">Residential Construction</option>
                    <option value="Commercial Projects" className="bg-dark text-light">Commercial Projects</option>
                    <option value="Interior Design" className="bg-dark text-light">Interior Design</option>
                    <option value="Renovation" className="bg-dark text-light">Renovation</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-light/40">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                  </div>
                </div>
                {errors.service && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.service.message}</p>}
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="block text-primary text-xs font-bold uppercase tracking-widest pl-1">Your Message</label>
                <textarea
                  id="message"
                  {...register("message", { required: "Message cannot be empty" })}
                  rows="4"
                  className={`w-full bg-dark/40 border-2 ${errors.message ? 'border-red-500/50' : 'border-white/5'} rounded-2xl px-5 py-4 text-light focus:outline-none focus:border-primary focus:bg-dark/60 transition-all duration-300 text-base resize-none placeholder:text-light/20`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.message.message}</p>}
              </div>
              
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn-primary w-full flex items-center justify-center gap-3 py-5 text-lg font-bold shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-6 h-6 border-3 border-dark border-t-transparent rounded-full"
                  />
                ) : (
                  <>Send Message <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>

              {status === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center gap-3 text-green-500 text-sm"
                >
                  <FiCheckCircle size={20} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500 text-sm"
                >
                  <FiAlertCircle size={20} />
                  <span>Something went wrong. Please try again later.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

