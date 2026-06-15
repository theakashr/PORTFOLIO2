import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const logs = [
    'INITIALIZING COGNITIVE INTERFACE...',
    'ESTABLISHING CONNECTION TO BIET DAVANAGERE...',
    'UPLOADING FRONTLINE STACK PROTOCOLS...',
    'SYNCING HACKERRANK VERIFIED CREDENTIALS...',
    'ENGAGING PORTFOLIO SHIELDS...',
    'SYSTEM READY: HELLO AKASH R'
  ];

  useEffect(() => {
    // Increment progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + diff);
      });
    }, 200);

    // Progress through log text messages based on percentage
    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev < logs.length - 1 ? prev + 1 : prev));
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600); // Allow exit transition to finish
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 bg-white z-50 flex flex-col justify-center items-center p-6 select-none font-orbitron text-cyber-accent"
        >
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
          
          {/* Subtle neon pulse background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-cyber-accent glow-orb opacity-10" />

          {/* Loading Container */}
          <div className="w-full max-w-lg p-6 rounded-lg glass-card border border-cyber-accent/20 relative z-10 flex flex-col gap-6">
            
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyber-accent" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-accent" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyber-accent" />

            <div className="flex justify-between items-center text-xs tracking-widest text-cyber-accent/75">
              <span>SYSTEM BOOT STATUS</span>
              <span>{progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-cyber-darkGray border border-cyber-accent/20 rounded-full overflow-hidden p-[1px]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-cyber-accent to-cyber-neonPurple shadow-glow-cyan"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Terminal log logs */}
            <div className="h-20 flex flex-col justify-end gap-1.5 font-mono text-[10px] sm:text-xs text-left overflow-hidden border-t border-cyber-accent/10 pt-4 text-cyber-accent/80">
              {logs.slice(Math.max(0, textIndex - 2), textIndex + 1).map((log, index) => {
                const isCurrent = index === Math.min(textIndex, 2);
                return (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: isCurrent ? 1 : 0.4, x: 0 }}
                    className={`flex items-start gap-2 ${isCurrent ? 'text-cyber-accent font-semibold' : 'text-cyber-accent/60'}`}
                  >
                    <span>&gt;</span>
                    <span>{log}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
