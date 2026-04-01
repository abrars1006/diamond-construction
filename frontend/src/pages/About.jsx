import React from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAward, FiUsers, FiClock, FiShield, FiZap, FiTarget } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: FiAward, label: 'Projects Completed', value: '500+' },
    { icon: FiUsers, label: 'Happy Clients', value: '450+' },
    { icon: FiClock, label: 'Years Experience', value: '15+' },
    { icon: FiShield, label: 'Expert Workers', value: '120+' },
  ];

  const values = [
    { icon: FiShield, title: 'Integrity', description: 'We believe in honest communication and transparent processes in every single project.' },
    { icon: FiZap, title: 'Innovation', description: 'Utilizing modern construction technology and sustainable practices for better results.' },
    { icon: FiTarget, title: 'Precision', description: 'Attention to the smallest details is what sets our craftsmanship apart from the rest.' },
  ];

  return (
    <div className="bg-dark min-h-screen">
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="About Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block"
          >
            Since 2009
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-light"
          >
            Our Story
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary text-sm tracking-widest uppercase font-bold mb-4 block">Our Journey</span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-10 leading-tight">Building Excellence through Dedication</h2>
              <div className="space-y-8 text-light/70 text-lg leading-relaxed">
                <p>
                  Diamond Construction was founded by Abdul with a clear mission: to bring world-class engineering and architectural precision to every project, regardless of scale.
                </p>
                <p>
                  What started as a small team of passionate builders has grown into one of the region's most trusted construction firms. Our reputation is built on a foundation of integrity, quality, and an unwavering commitment to our clients' visions.
                </p>
                <p>
                  We believe that every building tells a story. At Diamond Construction, we ensure that story is one of strength, beauty, and lasting value.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop" 
                  alt="Construction Work" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary p-12 rounded-3xl shadow-2xl hidden md:block z-20">
                <p className="text-dark font-bold text-3xl mb-1">15+</p>
                <p className="text-dark/80 text-xs font-bold uppercase tracking-widest leading-none">Years of Trust</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-primary/20 blur-[100px] -z-10 rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-widest uppercase font-bold mb-4 block">Core Principles</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-light">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="premium-card p-10 text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8 group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <val.icon size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-light mb-4">{val.title}</h3>
                <p className="text-light/50 leading-relaxed">{val.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-primary/40 text-4xl mx-auto mb-6" />
                <h3 className="text-5xl font-heading font-bold text-primary mb-3">{stat.value}</h3>
                <p className="text-light/40 text-xs uppercase tracking-[0.2em] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <div className="mb-12 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1587&auto=format&fit=crop" 
                alt="Abdul" 
                className="w-40 h-40 rounded-full object-cover border-8 border-white/5 p-2"
              />
              <div className="absolute bottom-2 right-2 w-8 h-8 bg-primary rounded-full border-4 border-dark" />
            </motion.div>
          </div>
          <p className="text-2xl md:text-4xl font-heading text-light italic leading-relaxed mb-12">
            "My goal has always been simple: to build things that last. At Diamond Construction, we don't just follow blueprints; we create landmarks that stand the test of time."
          </p>
          <div>
            <h4 className="text-2xl font-bold text-primary mb-1">Abdul</h4>
            <p className="text-light/50 text-xs uppercase tracking-[0.3em] font-bold">Founder & Managing Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

