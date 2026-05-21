import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Medical Shop Management System',
      description: 'A futuristic inventory and billing manager. Features secure authentication, real-time stock dashboards, automated billing invoice computation, and scalable cloud database syncing.',
      image: '/project_medical.jpg',
      tags: ['React.js', 'Firebase DB', 'Tailwind CSS', 'Auth'],
      demoUrl: 'https://new-folder-mu-flame.vercel.app',
      githubUrl: 'https://github.com/theakashr/medical-management'
    },
    {
      id: 2,
      title: 'Cinematic Personal Portfolio',
      description: 'A premium developer portfolio designed to impress recruiters. Powered by smooth scroll triggers, custom HTML5 interactive canvas particle configurations, and dark glassmorphic cards.',
      image: '/project_portfolio.jpg',
      tags: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Canvas'],
      demoUrl: '#',
      githubUrl: 'https://github.com/theakashr/futuristic-portfolio'
    },
    {
      id: 3,
      title: 'E-Commerce Website',
      description: 'A robust and scalable e-commerce platform featuring an intuitive user interface, dynamic product catalogs, and seamless shopping cart functionality.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      demoUrl: 'https://theakashr.github.io/e-commereces/',
      githubUrl: 'https://github.com/theakashr/e-commereces'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 70, damping: 14 } 
    }
  };

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden bg-cyber-darkGray/20">
      {/* Background lights */}
      <div className="absolute top-[30%] left-[-5%] w-[350px] h-[350px] rounded-full bg-cyber-neonPurple glow-orb opacity-10 -z-10" />
      <div className="absolute bottom-[20%] right-[-5%] w-[350px] h-[350px] rounded-full bg-cyber-accent glow-orb opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-white"
          >
            FEATURED <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">PROJECTS</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl border border-cyber-accent/10 flex flex-col justify-between shadow-glass relative group overflow-hidden transition-all duration-300"
            >
              {/* Corner tech ticks */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyber-accent opacity-40 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyber-accent opacity-40 group-hover:opacity-100 group-hover:w-5 group-hover:h-5 transition-all" />

              {/* Project Top Image Block */}
              <div className="relative aspect-video w-full overflow-hidden border-b border-cyber-accent/10">
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-transparent to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
                  }}
                />
                
                {/* Tech tag list overlay */}
                <div className="absolute bottom-3 left-4 right-4 z-20 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-0.5 rounded text-[9px] font-orbitron bg-cyber-bg/80 border border-cyber-accent/25 text-cyber-accent font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-3 text-left flex-grow">
                <h3 className="font-orbitron font-extrabold text-base text-white group-hover:text-cyber-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="font-inter text-xs text-gray-400 leading-relaxed flex-grow">
                  {project.description}
                </p>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 pb-6 pt-2 grid grid-cols-2 gap-4">
                {/* GitHub repository */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3 rounded-lg bg-cyber-darkGray/60 border border-cyber-accent/25 hover:border-cyber-accent hover:bg-cyber-accent/10 text-gray-300 hover:text-white font-orbitron font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <FiGithub size={12} />
                  <span>GitHub</span>
                </a>

                {/* Live Demo */}
                <a
                  href={project.demoUrl}
                  className="py-2 px-3 rounded-lg bg-gradient-to-r from-cyber-accent/90 to-cyber-neonBlue/90 hover:from-cyber-accent hover:to-cyber-neonBlue text-cyber-bg font-orbitron font-bold text-[10px] tracking-widest uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-glow-cyan/20 hover:shadow-glow-cyan/45"
                >
                  <FiExternalLink size={12} />
                  <span>Demo</span>
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
