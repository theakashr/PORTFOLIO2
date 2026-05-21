import { motion } from 'framer-motion';
import { SiHackerrank } from 'react-icons/si';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  const certs = [
    {
      title: 'Python (Basic) Certificate',
      issuer: 'HackerRank',
      issueDate: 'May 2026',
      verifyUrl: 'https://www.hackerrank.com/certificates/iframe/bfff4fc88bf8',
      color: 'from-cyber-accent via-cyber-neonBlue to-transparent',
      glow: 'shadow-glow-cyan/20',
      skills: ['Python Coding', 'Syntax & Basic Logic', 'Data Structures']
    },
    {
      title: 'C (Basic) Certificate',
      issuer: 'HackerRank',
      issueDate: 'May 2026',
      verifyUrl: 'https://www.hackerrank.com/certificates/iframe/96d7fb788ed7',
      color: 'from-cyber-neonPurple via-cyber-neonBlue to-transparent',
      glow: 'shadow-glow-purple/20',
      skills: ['C Language', 'Pointers & Memory', 'Algorithms']
    },
    {
      title: 'Problem Solving (Basic) Certificate',
      issuer: 'HackerRank',
      issueDate: 'May 2026',
      verifyUrl: 'https://www.hackerrank.com/certificates/iframe/f2eaec45adec',
      color: 'from-cyber-accent via-cyber-neonPurple to-transparent',
      glow: 'shadow-glow-cyan/20',
      skills: ['Data Structures', 'Algorithms', 'Logic Thinking']
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section id="certifications" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-accent glow-orb opacity-10 -z-10" />
      <div className="absolute bottom-[20%] left-[-10%] w-[300px] h-[300px] rounded-full bg-cyber-neonPurple glow-orb opacity-10 -z-10" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-white"
          >
            VERIFIED <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">CERTIFICATIONS</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        {/* Certifications Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certs.map((cert) => (
            <motion.div
              key={cert.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                borderColor: 'rgba(0, 240, 255, 0.45)',
                boxShadow: '0 15px 35px -10px rgba(0, 240, 255, 0.25)' 
              }}
              className="glass-card rounded-2xl border border-cyber-accent/10 p-6 flex flex-col justify-between shadow-glass relative group overflow-hidden transition-all duration-300"
            >
              {/* Card top gradient ribbon */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyber-accent via-cyber-neonPurple to-cyber-neonBlue" />
              
              {/* Inner content */}
              <div className="flex flex-col gap-6 text-left">
                {/* Header Icon Row */}
                <div className="flex justify-between items-start">
                  <div className="p-3 rounded-lg bg-cyber-accent/5 border border-cyber-accent/15 text-cyber-accent group-hover:bg-cyber-accent/10 transition-colors">
                    <FiAward size={22} className="animate-pulse" />
                  </div>
                  <div className="flex items-center gap-1 text-[#2EC866] font-orbitron text-[10px] tracking-widest font-bold bg-[#2EC866]/10 px-2.5 py-1 rounded border border-[#2EC866]/20">
                    <SiHackerrank size={12} />
                    <span>VERIFIED</span>
                  </div>
                </div>

                {/* Info block */}
                <div className="flex flex-col gap-2">
                  <span className="font-orbitron text-[10px] text-gray-500 tracking-wider uppercase font-semibold">
                    {cert.issuer} Certification
                  </span>
                  <h3 className="font-orbitron font-extrabold text-base text-white group-hover:text-cyber-accent transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <span className="font-inter text-xs text-gray-400">
                    Issued: {cert.issueDate}
                  </span>
                </div>

                {/* Subskills listed on certificate */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cert.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-2 py-1 rounded-md text-[10px] font-inter bg-cyber-darkGray text-gray-400 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4 border-t border-cyber-accent/10">
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-cyber-darkGray border border-cyber-accent/20 hover:bg-cyber-accent hover:text-cyber-bg hover:border-cyber-accent font-orbitron font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 text-cyber-accent"
                >
                  <span>Verify Credential</span>
                  <FiExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Certifications;
