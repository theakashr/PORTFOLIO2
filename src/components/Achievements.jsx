import { motion } from 'framer-motion';
import { FiAward, FiBook, FiCode, FiCpu } from 'react-icons/fi';

const Achievements = () => {
  const milestones = [
    {
      id: 1,
      year: 'MAY 2026',
      title: 'HackerRank Certifications',
      description: 'Successfully passed Basic skill evaluations on HackerRank, obtaining verified badges in Python Programming, C Language, and Problem Solving basics.',
      icon: <FiAward className="text-cyber-accent" />,
      tag: 'Credentials'
    },
    {
      id: 2,
      year: 'APR 2026',
      title: 'Medical Inventory Launch',
      description: 'Designed and implemented a cloud-synchronized Medical Shop Management System using React.js and Firebase storage to resolve real-world retail problems.',
      icon: <FiCode className="text-cyber-neonPurple" />,
      tag: 'Development'
    },
    {
      id: 3,
      year: 'FEB 2026',
      title: 'AI Engineering Exploration',
      description: 'Explored prompt orchestration, vector databases, and semantic search setups to prepare for integrating cognitive engines into standard full-stack systems.',
      icon: <FiCpu className="text-cyber-accent" />,
      tag: 'AI Journey'
    },
    {
      id: 4,
      year: 'DEC 2025',
      title: 'CSE Journey Begins at BIET',
      description: 'Enrolled in Computer Science Engineering at BIET Davanagere to build solid mathematical foundations, master low-level languages, and explore software paradigms.',
      icon: <FiBook className="text-cyber-neonPurple" />,
      tag: 'Academics'
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

  const lineVariants = {
    hidden: { height: 0 },
    visible: { 
      height: '100%', 
      transition: { duration: 1.5, ease: 'easeInOut' } 
    }
  };

  return (
    <section id="achievements" className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[-8%] w-[320px] h-[320px] rounded-full bg-cyber-accent glow-orb opacity-10 -z-10" />
      <div className="absolute bottom-[20%] right-[-8%] w-[320px] h-[320px] rounded-full bg-cyber-neonPurple glow-orb opacity-10 -z-10" />
      
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-gray-900"
          >
            MILESTONES & <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">ACHIEVEMENTS</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Center Line */}
          <motion.div 
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="absolute left-4 md:left-1/2 top-0 -translate-x-[50%] w-[2px] bg-gradient-to-b from-cyber-accent via-cyber-neonPurple to-cyber-darkGray shadow-glow-cyan"
          />

          {/* Milestone List */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-12"
          >
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={item.id}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Ring */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[50%] z-20 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.25 }}
                      className="w-9 h-9 rounded-full bg-white border border-cyber-accent flex items-center justify-center text-sm shadow-glow-cyan text-cyber-accent"
                    >
                      {item.icon}
                    </motion.div>
                  </div>

                  {/* Spacer Column (Desktop Only) */}
                  <div className="hidden md:block w-1/2" />

                  {/* Content Card Panel */}
                  <motion.div 
                    variants={{
                      hidden: { opacity: 0, x: isEven ? 50 : -50 },
                      visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 85 } }
                    }}
                    whileHover={{ 
                      scale: 1.02, 
                      borderColor: 'rgba(0, 240, 255, 0.4)',
                      boxShadow: '0 0 20px rgba(0, 240, 255, 0.2)' 
                    }}
                    className={`w-[calc(100%-40px)] md:w-[42%] ml-12 md:ml-0 p-6 glass-card rounded-xl border border-cyber-accent/10 relative text-left shadow-glass transition-all duration-300`}
                  >
                    {/* Glowing side accent line */}
                    <div className={`absolute top-0 bottom-0 w-[3px] rounded-y-xl ${
                      isEven ? 'right-0 bg-cyber-neonPurple' : 'left-0 bg-cyber-accent'
                    }`} />

                    <div className="flex justify-between items-center gap-4 mb-3">
                      <span className="font-orbitron font-extrabold text-[10px] text-cyber-accent tracking-widest">
                        {item.year}
                      </span>
                      <span className="px-2 py-0.5 rounded text-[8px] font-orbitron font-bold bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/15 tracking-wider uppercase">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-orbitron font-extrabold text-sm sm:text-base text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
