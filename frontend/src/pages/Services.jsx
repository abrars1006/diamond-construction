import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiShield, FiTrendingUp, FiClock } from 'react-icons/fi';
import { FaHardHat, FaCity, FaCouch, FaHammer, FaDraftingCompass, FaTools } from 'react-icons/fa';

const servicesData = [
  { 
    icon: FaHardHat, 
    title: 'Residential Construction', 
    description: 'We specialize in custom home building, from single-family houses to luxury villas. Our process ensures every detail aligns with your dream lifestyle.',
    features: ['Custom Floor Plans', 'Foundations & Structural', 'Electrical & Plumbing', 'Smart Home Integration']
  },
  { 
    icon: FaCity, 
    title: 'Commercial Projects', 
    description: 'Developing professional grade office buildings, retail spaces, and industrial units designed for long-term operational success.',
    features: ['High-rise Construction', 'Retail Fit-outs', 'Warehouse Development', 'Sustainable Architecture']
  },
  { 
    icon: FaCouch, 
    title: 'Interior Design', 
    description: 'Our design experts transform interiors into functional works of art using premium materials and cutting-edge design philosophies.',
    features: ['3D Visualizations', 'Space Planning', 'Material Selection', 'Lighting Design']
  },
  { 
    icon: FaHammer, 
    title: 'Renovation', 
    description: 'We breathe new life into outdated or damaged structures, providing modern upgrades while maintaining structural integrity.',
    features: ['Kitchen & Bath Remodels', 'Historic Restoration', 'Structural Repair', 'Energy Efficiency']
  },
  { 
    icon: FaDraftingCompass, 
    title: 'Planning & Architecture', 
    description: 'Expert architectural services to ensure your project is compliant, beautiful, and structurally sound from the very first sketch.',
    features: ['Zoning & Permits', 'Feasibility Studies', 'Landscape Design', 'Structural Engineering']
  },
  { 
    icon: FaTools, 
    title: 'Maintenance', 
    description: 'Professional maintenance services to keep your property in peak condition, covering everything from HVAC to structural health.',
    features: ['Routine Inspections', 'HVAC Maintenance', 'Roof Repair', 'Emergency Services']
  }
];

const Services = () => {
  return (
    <div className="bg-dark min-h-screen">
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Services Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block"
          >
            What We Do
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-light"
          >
            Our Expertise
          </motion.h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesData.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="premium-card p-10 flex flex-col h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 hover:border-primary/30 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-300">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-light mb-4">{service.title}</h3>
                <p className="text-light/50 text-base leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-light/70">
                      <FiCheckCircle className="text-primary flex-shrink-0" /> {feature}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-3 text-primary font-bold hover:gap-5 transition-all w-fit group">
                  Learn More <FiArrowRight className="transition-all" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-[#090909] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl text-center relative z-10">
          <span className="text-primary text-sm tracking-widest uppercase font-bold mb-4 block">The Diamond Advantage</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-light mb-20">Why Clients Trust Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-dark-card border border-white/10 rounded-3xl hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <FiShield size={24} />
              </div>
              <h4 className="text-light font-bold text-xl mb-4">Precision Engineering</h4>
              <p className="text-light/50 text-sm leading-relaxed">Every millimeter matters. We use advanced laser-guided tools and software to ensure absolute structural perfection in every build.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-10 bg-dark-card border border-white/10 rounded-3xl hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <FiTrendingUp size={24} />
              </div>
              <h4 className="text-light font-bold text-xl mb-4">Full Transparency</h4>
              <p className="text-light/50 text-sm leading-relaxed">Real-time project tracking and clear budget breakdowns. You know exactly where your investment is going at every single stage.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-dark-card border border-white/10 rounded-3xl hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <FiClock size={24} />
              </div>
              <h4 className="text-light font-bold text-xl mb-4">On-Time Delivery</h4>
              <p className="text-light/50 text-sm leading-relaxed">Our rigorous project management system ensures we meet deadlines without compromising on construction quality or safety.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-dark">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-light mb-10 leading-tight">Need a customized solution for your project?</h2>
          <button className="btn-primary px-12 py-5 text-lg font-bold rounded-2xl shadow-2xl shadow-primary/20">
            Consult With Our Experts
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;

