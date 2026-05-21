import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBookOpen, FiCode, FiCpu, FiTrendingUp } from 'react-icons/fi';

const CountUp = ({ to, suffix = "", duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to, 10);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);
    
    let timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={elementRef}>{count}{suffix}</span>;
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } }
  };

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-[30%] right-[-5%] w-[300px] h-[300px] rounded-full bg-cyber-neonPurple glow-orb -z-10 opacity-15" />
      <div className="absolute bottom-[10%] left-[-5%] w-[300px] h-[300px] rounded-full bg-cyber-accent glow-orb -z-10 opacity-15" />

      <div className="max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-white"
          >
            ABOUT <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">ME</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        {/* Content Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Main Info Card */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 glass-card rounded-2xl border border-cyber-accent/15 p-8 relative flex flex-col justify-between shadow-glass group"
          >
            {/* Corner cyber ticks */}
            <div className="absolute top-0 right-0 w-8 h-[1px] bg-cyber-accent/40" />
            <div className="absolute top-0 right-0 w-[1px] h-8 bg-cyber-accent/40" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <FiBookOpen className="text-cyber-accent text-2xl" />
                <h3 className="font-orbitron font-bold text-lg text-white tracking-wide uppercase">
                  Academic Profile
                </h3>
              </div>

              <div className="font-inter text-gray-400 text-base leading-relaxed flex flex-col gap-4 text-left">
                <p>
                  I am a first-year <span className="text-white font-semibold">Computer Science Engineering</span> student at <span className="text-cyber-accent font-semibold">Bapuji Institute of Engineering and Technology (BIET), Davanagere</span>. I have dedicated my early academic journey to master engineering fundamentals while aggressively diving into modern tech stacks.
                </p>
                <p>
                  With a deep curiosity for computing, I began exploring web technologies and intelligent agents early. Currently, I am learning full-stack development and training models to solve practical issues.
                </p>
                <p>
                  My engineering goals center on developing responsive frontend user interfaces, integrating backend database services, and leveraging AI tools to build high-performance, real-world tools.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-cyber-accent/10">
              <div className="flex items-start gap-3 text-left">
                <FiCpu className="text-cyber-accent text-lg mt-1 shrink-0" />
                <div>
                  <h4 className="font-orbitron text-xs font-bold text-white tracking-widest uppercase">Focus Areas</h4>
                  <p className="font-inter text-xs text-gray-400 mt-1">Web UI/UX, AI Integrations, Algorithm Optimization</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <FiCode className="text-cyber-neonPurple text-lg mt-1 shrink-0" />
                <div>
                  <h4 className="font-orbitron text-xs font-bold text-white tracking-widest uppercase">Methodology</h4>
                  <p className="font-inter text-xs text-gray-400 mt-1">Modular components, SEO compliance, dry coding principles</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Stats & Core Values */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Counts Matrix */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {/* Stat 1 */}
              <div className="glass-card rounded-xl border border-cyber-accent/15 p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:border-cyber-accent/40 transition-colors duration-300">
                <h4 className="font-orbitron text-gray-400 text-[10px] tracking-widest uppercase font-semibold">EDUCATION</h4>
                <div className="font-orbitron font-extrabold text-3xl text-white mt-1 text-glow-cyan">
                  <CountUp to="1" suffix="st Year" />
                </div>
                <p className="font-inter text-[10px] text-gray-500 mt-1 uppercase">CSE at BIET</p>
              </div>

              {/* Stat 2 */}
              <div className="glass-card rounded-xl border border-cyber-accent/15 p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:border-cyber-accent/40 transition-colors duration-300">
                <h4 className="font-orbitron text-gray-400 text-[10px] tracking-widest uppercase font-semibold">LANGUAGES</h4>
                <div className="font-orbitron font-extrabold text-3xl text-white mt-1 text-glow-purple">
                  <CountUp to="3" suffix="+" />
                </div>
                <p className="font-inter text-[10px] text-gray-500 mt-1 uppercase">Python, C, HTML and CSS</p>
              </div>

              {/* Stat 3 */}
              <div className="glass-card rounded-xl border border-cyber-accent/15 p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:border-cyber-accent/40 transition-colors duration-300">
                <h4 className="font-orbitron text-gray-400 text-[10px] tracking-widest uppercase font-semibold">HACKERRANK</h4>
                <div className="font-orbitron font-extrabold text-3xl text-white mt-1 text-glow-cyan">
                  <CountUp to="30" suffix="+" />
                </div>
                <p className="font-inter text-[10px] text-gray-500 mt-1 uppercase">Problems Solved</p>
              </div>

              {/* Stat 4 */}
              <div className="glass-card rounded-xl border border-cyber-accent/15 p-5 text-center flex flex-col items-center justify-center min-h-[120px] hover:border-cyber-accent/40 transition-colors duration-300">
                <h4 className="font-orbitron text-gray-400 text-[10px] tracking-widest uppercase font-semibold">PROJECTS</h4>
                <div className="font-orbitron font-extrabold text-3xl text-white mt-1 text-glow-purple">
                  <CountUp to="8" suffix="+" />
                </div>
                <p className="font-inter text-[10px] text-gray-500 mt-1 uppercase">Built & Deployed</p>
              </div>
            </motion.div>

            {/* Mindset Card */}
            <motion.div 
              variants={itemVariants}
              className="glass-card rounded-2xl border border-cyber-neonPurple/15 p-6 flex-1 flex flex-col justify-center text-left relative hover:border-cyber-neonPurple/30 transition-all duration-300 shadow-glass"
            >
              {/* Corner ticks */}
              <div className="absolute bottom-0 left-0 w-8 h-[1px] bg-cyber-neonPurple/40" />
              <div className="absolute bottom-0 left-0 w-[1px] h-8 bg-cyber-neonPurple/40" />

              <div className="flex items-center gap-3 mb-4">
                <FiTrendingUp className="text-cyber-neonPurple text-xl" />
                <h3 className="font-orbitron font-bold text-sm text-white tracking-widest uppercase">
                  Growth & Mindset
                </h3>
              </div>
              <ul className="space-y-3 font-inter text-xs text-gray-400">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent mt-1.5 shrink-0" />
                  <span><strong>Technology Enthusiast:</strong> Constantly keeping pace with AI engineering breakthroughs and frontend layout patterns.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent mt-1.5 shrink-0" />
                  <span><strong>Strong Problem-Solving:</strong> Trained in logic building, data structure paradigms, and computational thinking.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent mt-1.5 shrink-0" />
                  <span><strong>Practical Focus:</strong> Striving to build tools with clean architectures and interactive experiences rather than abstract theory alone.</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
