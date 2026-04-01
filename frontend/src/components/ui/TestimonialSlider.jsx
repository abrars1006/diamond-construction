import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Homeowner',
    content: 'Diamond Construction transformed our outdated house into a modern dream home. Their attention to detail and precision is unmatched.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'CEO, Horizon Ventures',
    content: 'We hired Diamond Construction for our new office complex. They delivered ahead of schedule and the architecture is simply breathtaking. Abdul and his team are true professionals.',
    rating: 5
  },
  {
    id: 3,
    name: 'Elena Rodriguez',
    role: 'Interior Designer',
    content: 'I have collaborated with them on numerous projects. The structural integrity and aesthetic finishing Diamond Construction provides makes my job so much easier.',
    rating: 5
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden w-full max-w-4xl mx-auto min-h-[250px] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center px-4 md:px-12"
        >
          <div className="flex justify-center mb-6">
             {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-primary mx-1" size={24} />
             ))}
          </div>
          <p className="text-xl md:text-3xl font-heading text-light leading-relaxed mb-8 italic">
            "{testimonials[currentIndex].content}"
          </p>
          <div>
            <h4 className="font-bold text-light text-lg">{testimonials[currentIndex].name}</h4>
            <span className="text-light/50 text-sm">{testimonials[currentIndex].role}</span>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-3">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full transition-colors ${idx === currentIndex ? 'bg-primary' : 'bg-white/20'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
