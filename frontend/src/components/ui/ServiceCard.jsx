import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

const ServiceCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="premium-card p-10 group flex flex-col items-start text-left cursor-pointer bg-dark-card/30 backdrop-blur-sm border border-white/5 hover:border-primary/20 transition-all duration-500 rounded-3xl"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-primary group-hover:scale-110 shadow-lg shadow-primary/5">
        <Icon size={28} className="text-primary transition-colors duration-500 group-hover:text-dark" />
      </div>
      <h3 className="text-2xl font-heading font-bold mb-4 text-light group-hover:text-primary transition-colors duration-300">{title}</h3>
      <p className="text-light/50 text-sm leading-relaxed mb-10 flex-grow leading-relaxed">{description}</p>
      
      <div className="flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
        <span>Learn More</span>
        <FiArrowRight className="text-base" />
      </div>
    </motion.div>
  );
};

export default ServiceCard;

