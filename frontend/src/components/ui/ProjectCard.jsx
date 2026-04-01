import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] md:aspect-square cursor-pointer bg-dark-card border border-white/5 hover:border-primary/20 transition-all duration-700"
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-700 flex flex-col justify-end p-8 md:p-10">
        <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
          <div className="flex justify-between items-end mb-4">
            <span className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">
              {project.category}
            </span>
            <div className="w-12 h-12 bg-primary/10 backdrop-blur-md rounded-full flex items-center justify-center text-primary border border-white/10 opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 duration-700">
               <FiArrowUpRight size={20} />
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 leading-tight">{project.title}</h3>
          <p className="text-light/50 text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-all delay-100 duration-700 transform translate-y-4 group-hover:translate-y-0">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

