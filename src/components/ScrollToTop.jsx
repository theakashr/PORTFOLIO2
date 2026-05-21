import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.7)',
            borderColor: 'rgba(0, 240, 255, 0.8)' 
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3.5 bg-cyber-bg/85 backdrop-blur-md border border-cyber-accent/30 text-cyber-accent rounded-full shadow-glow-cyan transition-colors"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} className="animate-pulse" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
