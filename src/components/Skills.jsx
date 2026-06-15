import { motion } from 'framer-motion';
import { 
  SiPython, SiC, SiJavascript, 
  SiReact, SiTailwindcss, SiFirebase, SiGithub, SiVercel 
} from 'react-icons/si';
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

const Skills = () => {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <FiCode className="text-cyber-accent" />,
      skills: [
        { name: 'Python', level: 85, icon: <SiPython className="text-[#3776AB]" /> },
        { name: 'C Language', level: 80, icon: <SiC className="text-[#A8B9CC]" /> },
        { name: 'HTML5', level: 90, icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', level: 85, icon: <FaCss3Alt className="text-[#1572B6]" /> },
      ]
    },
    {
      title: 'Technologies & Frameworks',
      icon: <FiLayers className="text-cyber-neonPurple" />,
      skills: [
        { name: 'Firebase', level: 75, icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: 'GitHub', level: 85, icon: <SiGithub className="text-gray-900" /> },
        { name: 'Vercel', level: 80, icon: <SiVercel className="text-gray-900" /> },
      ]
    },
    {
      title: 'Developer Core Strengths',
      icon: <FiCpu className="text-cyber-accent" />,
      skills: [
        { name: 'Problem Solving', level: 85, badge: 'Logic' },
        { name: 'UI/UX Design', level: 75, badge: 'Figma' },
        { name: 'Responsive Layouts', level: 90, badge: 'Mobile-first' },
        { name: 'AI Engineering Tools', level: 80, badge: 'LLMs' },
      ]
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-gray-50">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[40%] left-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-accent glow-orb opacity-10 -z-10" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-cyber-neonPurple glow-orb opacity-10 -z-10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-gray-900"
          >
            TECHNICAL <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">CAPABILITIES</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        {/* Grid Category Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                borderColor: catIdx === 1 ? 'rgba(188, 52, 250, 0.4)' : 'rgba(0, 240, 255, 0.4)',
                boxShadow: catIdx === 1 ? '0 10px 30px -10px rgba(188, 52, 250, 0.15)' : '0 10px 30px -10px rgba(0, 240, 255, 0.15)'
              }}
              className="glass-card rounded-2xl border border-cyber-accent/10 p-6 flex flex-col gap-6 shadow-glass relative group transition-all duration-300"
            >
              {/* Card headers */}
              <div className="flex items-center gap-3 border-b border-cyber-accent/10 pb-4">
                <span className="text-xl">{category.icon}</span>
                <h3 className="font-orbitron font-bold text-sm tracking-widest text-gray-900 uppercase">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-col gap-4 flex-grow">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 text-left">
                    <div className="flex justify-between items-center text-xs">
                      <div className="flex items-center gap-2 text-gray-600 group-hover:text-gray-900 transition-colors">
                        {skill.icon && <span className="text-base shrink-0">{skill.icon}</span>}
                        <span className="font-inter font-medium">{skill.name}</span>
                      </div>
                      
                      {skill.badge ? (
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-orbitron bg-cyber-accent/10 text-cyber-accent border border-cyber-accent/20 tracking-wider">
                          {skill.badge}
                        </span>
                      ) : (
                        <span className="font-mono text-gray-600">{skill.level}%</span>
                      )}
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-cyber-darkGray rounded-full border border-cyber-accent/5 p-[0.5px] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${
                          catIdx === 1 
                            ? 'from-cyber-neonPurple to-cyber-neonBlue shadow-glow-purple/50' 
                            : 'from-cyber-accent to-cyber-neonBlue shadow-glow-cyan/50'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
