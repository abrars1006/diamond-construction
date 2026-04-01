import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiArrowRight, FiFilter } from 'react-icons/fi';
import ProjectCard from '../components/ui/ProjectCard';

const projectsList = [
  { id: 1, title: 'Diamond Heights', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2062&auto=format&fit=crop', description: 'A state-of-the-art skyscraper reshaping the city skyline with sustainable architecture.' },
  { id: 2, title: 'Lakeside Villa', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop', description: 'A massive 6-bedroom lakefront property with smart home integration.' },
  { id: 3, title: 'Aura Boutique Hotel', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop', description: 'A luxury boutique hotel with premium interior design and ambient lighting.' },
  { id: 4, title: 'Modern Minimalist Barn', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop', description: 'Rustic appeal meets modern functionality in this newly renovated barn house.' },
  { id: 5, title: 'Neo Plaza Mall', category: 'Commercial', imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2070&auto=format&fit=crop', description: 'A massive retail development project featuring open-air corridors and glass domes.' },
  { id: 6, title: 'Zen Heights Apartment', category: 'Residential', imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop', description: 'Sustainable high-density living with rooftop garden and community solar power.' },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial'];

  const filteredProjects = filter === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === filter);

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
          alt="Projects Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm tracking-[0.4em] uppercase font-bold mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-heading font-bold text-light"
          >
            Our Masterpieces
          </motion.h1>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 border-b border-white/5 relative z-30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3 text-light/40 group">
              <FiFilter className="text-primary group-hover:rotate-180 transition-all duration-500" />
              <span className="text-xs uppercase tracking-widest font-bold">Filter by Category</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 bg-dark-card/50 p-2 rounded-2xl border border-white/5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-10 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-500 ${filter === cat 
                    ? 'bg-primary text-dark shadow-2xl shadow-primary/30 transform scale-105' 
                    : 'text-light/40 hover:text-light hover:bg-white/5'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 relative">
        <div className="absolute top-1/2 left-0 w-1/4 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-card/30 backdrop-blur-xl border-t border-white/5" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-light mb-10 leading-tight">Inspired by our work?</h2>
          <p className="text-light/50 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">Let's transform your vision into an architectural reality. Our team is ready to discuss your next big project.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn-primary px-12 py-5 rounded-2xl flex items-center justify-center gap-3 font-bold group shadow-2xl shadow-primary/20">
              Start Your Journey <FiPlus className="group-hover:rotate-90 transition-transform" />
            </button>
            <button className="btn-outline px-12 py-5 rounded-2xl border-white/10 flex items-center justify-center gap-3 font-bold group hover:border-primary transition-all">
              View Our Process <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;

