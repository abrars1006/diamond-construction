import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiPlay } from 'react-icons/fi';
import { FaHardHat, FaCity, FaCouch, FaHammer } from 'react-icons/fa';

import ServiceCard from '../components/ui/ServiceCard';
import ProjectCard from '../components/ui/ProjectCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';

const heroBgUrl = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop";
const founderImageUrl = "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1587&auto=format&fit=crop";

const servicesData = [
  { icon: FaHardHat, title: 'Residential Construction', description: 'Custom home building from the ground up, tailored to your lifestyle and aesthetic preferences.' },
  { icon: FaCity, title: 'Commercial Projects', description: 'Functional and visually striking commercial spaces designed for productivity and growth.' },
  { icon: FaCouch, title: 'Interior Design', description: 'Transforming interiors into luxurious, functional spaces with premium materials and finishes.' },
  { icon: FaHammer, title: 'Renovation', description: 'Breathing new life into existing structures with modern upgrades and careful restoration.' },
];

const projectsData = [
  { title: 'Diamond Heights', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop', description: 'A state-of-the-art skyscraper reshaping the city skyline with sustainable architecture.' },
  { title: 'Lakeside Villa', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop', description: 'A massive 6-bedroom lakefront property with smart home integration.' },
  { title: 'Aura Boutique Hotel', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', description: 'A luxury boutique hotel with premium interior design and ambient lighting.' },
  { title: 'Modern Minimalist Barn', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', description: 'Rustic appeal meets modern functionality in this newly renovated barn house.' },
];

const Home = ({ openBookingModal }) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="w-full bg-dark">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">
        {/* Background Parallax & Zoom */}
        <motion.div 
          style={{ y }}
          className="absolute inset-0 z-0"
        >
          {/* Exact multi-step gradient for perfect visibility */}
          <div 
            className="absolute inset-0 z-10" 
            style={{ 
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.8))' 
            }} 
          />
          <motion.img 
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "linear" 
            }}
            src={heroBgUrl} 
            alt="Construction Excellence" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl md:text-left text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-primary text-sm md:text-base font-bold uppercase tracking-[0.5em] mb-8 block drop-shadow-lg"
              >
                Excellence in Construction
              </motion.span>
              <h1 
                className="text-5xl md:text-8xl lg:text-9xl font-heading font-bold text-white mb-8 tracking-tighter leading-none"
                style={{ textShadow: '0px 2px 8px rgba(0,0,0,0.6)' }}
              >
                Build Your <span className="text-primary italic">Legacy</span>
              </h1>
              <p 
                className="text-lg md:text-2xl text-[#d1d5db] max-w-2xl md:mx-0 mx-auto mb-12 leading-relaxed font-light"
                style={{ textShadow: '0px 2px 8px rgba(0,0,0,0.6)' }}
              >
                Diamond Construction elevates the standard of building. We bring your most ambitious architectural visions to life with unmatched precision and transparency.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-6">
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold flex items-center justify-center gap-3 group transition-all duration-300 shadow-2xl"
                  style={{ backgroundColor: '#DAA520', color: '#0a0a0a' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#DAA520'}
                >
                  Start Your Project <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={openBookingModal}
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl text-lg font-bold text-white border-2 border-white/20 hover:bg-white hover:text-dark backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <FiPlay className="text-primary group-hover:scale-125 transition-transform" /> Our Process
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0], opacity: [0.3, 1, 0.3] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-8 h-14 rounded-full border-2 border-white/20 flex justify-center p-2 backdrop-blur-md">
            <motion.div 
              animate={{ height: ['20%', '60%', '20%'] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-primary rounded-full" 
            />
          </div>
        </motion.div>
      </section>


      {/* Quick Stats */}
      <section className="bg-[#080808] border-y border-white/5 py-20 relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
             {[
               { title: '15+', subtitle: 'Years Experience' },
               { title: '500+', subtitle: 'Projects Done' },
               { title: '100%', subtitle: 'Client Satisfaction' },
               { title: '12+', subtitle: 'Industry Awards' },
             ].map((stat, idx) => (
               <motion.div 
                 key={idx}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: idx * 0.1, duration: 0.6 }}
                 className="text-center group"
               >
                 <h3 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-500">{stat.title}</h3>
                 <p className="text-light/40 uppercase tracking-[0.3em] text-[10px] font-bold">{stat.subtitle}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-dark relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-1/3 h-full bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block">Expertise</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-light">Our Specialized Services</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="text-light/60 hover:text-primary transition-all flex items-center gap-3 font-bold uppercase tracking-widest text-xs group">
                View All Services <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About / Founder Section */}
      <section className="py-32 bg-[#090909] border-y border-white/5 relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full bg-grid-white/[0.02] -z-10" />
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img src={founderImageUrl} alt="Abdul - Founder" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
              </div>
              <div className="absolute -bottom-12 -right-12 bg-dark-card border border-white/10 p-12 rounded-[2rem] shadow-2xl hidden md:block backdrop-blur-xl">
                <div className="text-center">
                  <h4 className="text-5xl font-heading font-bold text-primary mb-2">15+</h4>
                  <p className="text-light/40 text-[10px] uppercase tracking-[0.3em] font-bold">Years of Trust</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block">Founders Vision</span>
              <h2 className="text-5xl md:text-7xl font-heading font-bold text-light mb-10 leading-tight">Driven by Quality,<br/>Defined by Results</h2>
              <div className="space-y-8 text-light/50 text-lg leading-relaxed mb-12">
                <p>
                  Diamond Construction was founded by Abdul with a simple but powerful intention: to move beyond blueprints and build landmarks that stand as a legacy.
                </p>
                <p>
                  Every brick we lay and every structure we design is a commitment to the highest standards of safety, aesthetics, and lasting durability. We don't just build homes; we build the future.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                <div className="flex items-center gap-4 bg-dark-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                    <FiCheckCircle />
                  </div>
                  <span className="font-heading font-bold text-light">Unmatched Quality</span>
                </div>
                <div className="flex items-center gap-4 bg-dark-card/50 p-6 rounded-2xl border border-white/5 backdrop-blur-sm group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all">
                    <FiCheckCircle />
                  </div>
                  <span className="font-heading font-bold text-light">On-Time Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <h4 className="text-3xl font-heading font-bold text-light mb-1">Abdul</h4>
                  <p className="text-primary text-xs uppercase tracking-[0.3em] font-bold">Founder & CEO</p>
                </div>
                <div className="h-16 w-px bg-white/10"></div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_of_John_Hancock.svg" alt="Signature" className="h-16 opacity-30 filter invert group-hover:opacity-60 transition-opacity" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
               <span className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block">Portfolio</span>
               <h2 className="text-5xl md:text-7xl font-heading font-bold text-light">Latest Masterpieces</h2>
             </div>
             <Link to="/projects" className="btn-outline px-8 py-4 rounded-xl border-white/10 hover:border-primary transition-all text-sm font-bold uppercase tracking-widest text-light">
               Explore Gallery
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#080808] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[150px] pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="text-center mb-20">
             <span className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block">Testimonials</span>
             <h2 className="text-5xl md:text-7xl font-heading font-bold text-light leading-tight">Voices of Excellence</h2>
           </div>
           
           <TestimonialSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent z-10 opacity-30" />
        
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="premium-card p-16 md:p-24 rounded-[4rem] border-white/10 bg-dark-card/30 backdrop-blur-xl group overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px] rounded-full group-hover:bg-primary/20 transition-all duration-1000" />
            
            <h2 className="text-5xl md:text-7xl font-heading font-bold text-light mb-10 leading-tight">Ready to start your<br/><span className="text-primary">next masterpiece?</span></h2>
            <p className="text-light/50 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light">Join the ranks of visionaries who chose Diamond Construction for their most ambitious projects.</p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-12 py-6 bg-primary text-dark font-black rounded-3xl hover:scale-105 transition-all shadow-2xl shadow-primary/30 text-lg uppercase tracking-wider">
                Get a Free Consultation
              </Link>
              <button 
                onClick={openBookingModal}
                className="px-12 py-6 bg-dark border border-white/10 text-light font-bold rounded-3xl hover:bg-dark-card hover:border-primary transition-all text-lg uppercase tracking-wider"
              >
                Schedule A Meeting
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

