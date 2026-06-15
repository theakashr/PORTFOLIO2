import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = [
    'Computer Science Student',
    'Frontend Developer',
    'AI Enthusiast',
    'Problem Solver'
  ];

  useEffect(() => {
    const handleType = () => {
      const currentWordIndex = loopNum % words.length;
      const fullWord = words[currentWordIndex];

      if (isDeleting) {
        setTypedText(fullWord.substring(0, typedText.length - 1));
        setTypingSpeed(40); // Faster deleting
      } else {
        setTypedText(fullWord.substring(0, typedText.length + 1));
        setTypingSpeed(100); // Standard typing
      }

      if (!isDeleting && typedText === fullWord) {
        // Hold full word
        setTypingSpeed(1500);
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); // Wait before next word
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Decorative Neon Blurs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full bg-cyber-accent glow-orb -z-10" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-cyber-neonPurple glow-orb -z-10" />

      {/* Futuristic Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Text Content Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
          
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 border border-cyber-accent/20 px-3.5 py-1.5 rounded-full bg-cyber-accent/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyber-accent animate-ping" />
            <span className="font-orbitron text-[10px] sm:text-xs tracking-widest text-cyber-accent uppercase font-medium">
              PORTFOLIO PROTOCOL v1.0.4
            </span>
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-inter text-gray-600 font-medium tracking-wide text-lg sm:text-xl"
            >
              GREETINGS, I AM
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
              className="font-orbitron font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-wide leading-none"
            >
              <span className="text-gray-900">AKASH </span>
              <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-sm">
                R
              </span>
            </motion.h1>
          </div>

          {/* Typing Animation Subtitle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-10 sm:h-12 flex items-center font-orbitron text-xl sm:text-2xl text-cyber-accent/90"
          >
            <span>{typedText}</span>
            <span className="w-[3px] h-6 sm:h-7 bg-cyber-accent ml-1.5 animate-pulse" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-inter text-gray-600 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
          >
            Passionate about building modern web applications, AI-powered solutions, and solving real-world problems through technology.
          </motion.p>

          {/* Glowing CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto"
          >
            {/* View Projects */}
            <a 
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="relative px-6 py-3.5 bg-gradient-to-r from-cyber-accent to-cyber-neonBlue hover:from-cyber-accent hover:to-cyber-accent text-cyber-bg font-orbitron font-bold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 group transition-all duration-300 shadow-glow-cyan"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1.5 transition-transform text-sm" />
            </a>

            {/* Contact Me */}
            <a 
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="px-6 py-3.5 border border-cyber-accent/30 hover:border-cyber-accent hover:bg-cyber-accent/10 text-cyber-accent font-orbitron font-bold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Me
              <FiMail className="text-sm" />
            </a>

            {/* Resume Button */}
            <a 
              href="/resume.pdf"
              download
              className="px-6 py-3.5 border border-cyber-neonPurple/30 hover:border-cyber-neonPurple hover:bg-cyber-neonPurple/10 text-cyber-neonPurple font-orbitron font-bold text-xs uppercase tracking-widest rounded-lg flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
            >
              Resume
              <FiDownload className="text-sm animate-bounce" />
            </a>
          </motion.div>
        </div>

        {/* Profile Picture Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Animated Tech Rings */}
          <div className="absolute w-[290px] h-[290px] sm:w-[350px] sm:h-[350px] rounded-full border border-dashed border-cyber-accent/25 animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[305px] h-[305px] sm:w-[365px] sm:h-[365px] rounded-full border border-cyber-neonPurple/20 animate-[spin_20s_linear_infinite_reverse]" />
          
          {/* Main Avatar Container */}
          <div className="w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] rounded-full p-2 bg-gradient-to-tr from-cyber-accent via-cyber-neonPurple to-transparent shadow-glow-cyan/25 flex items-center justify-center relative">
            
            {/* Hexagon overlay grid for tech detailing */}
            <div className="absolute inset-0 rounded-full bg-cover opacity-10 mix-blend-color-dodge cyber-grid pointer-events-none" />

            {/* Hologram glitch lines (subtle border glows) */}
            <div className="absolute -inset-1 rounded-full bg-cyber-accent/20 filter blur-sm -z-10 animate-pulse-slow" />

            {/* Profile Image */}
            <img 
              src="/profile.png"
              alt="Akash R profile portrait"
              className="w-full h-full object-cover object-top rounded-full border-2 border-cyber-bg z-10"
              onError={(e) => {
                e.target.onerror = null;
                // fallback if copy failed
                e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop";
              }}
            />
          </div>

          {/* Futuristic stats badge overlapping photo */}
          <div className="absolute bottom-1 right-[10%] sm:right-[15%] z-20 glass-card border border-cyber-accent/30 py-2 px-3 rounded-lg flex items-center gap-2.5 shadow-glow-cyan animate-float">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-orbitron text-[10px] font-bold tracking-widest text-gray-900">ONLINE</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
