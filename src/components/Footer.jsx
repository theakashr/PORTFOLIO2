import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="py-12 px-6 border-t border-cyber-accent/10 relative overflow-hidden bg-cyber-darkGray/40">
      {/* Neon divider glow */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-accent/40 to-transparent shadow-glow-cyan" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 z-10 relative text-left">
        
        {/* Left Col: Brand / Copyright */}
        <div className="flex flex-col gap-2 text-center md:text-left">
          <a
            href="#home"
            onClick={handleScrollToTop}
            className="font-orbitron font-extrabold text-lg tracking-wider bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(0,240,255,0.2)]"
          >
            AKASH<span className="text-white text-xs">.R</span>
          </a>
          <p className="font-inter text-[11px] text-gray-500 tracking-wider">
            &copy; {currentYear} AKASH R. ALL RIGHTS RESERVED. SECURED VIA CORE PROTOCOL.
          </p>
        </div>

        {/* Center Credits */}
        <div className="font-orbitron text-xs tracking-widest text-gray-400 text-center uppercase">
          DESIGNED &amp; DEVELOPED BY{' '}
          <span className="text-cyber-accent hover:text-cyber-neonPurple transition-colors duration-300 font-bold">
            AKASH R
          </span>
        </div>

        {/* Right Col: Social shortcuts */}
        <div className="flex gap-4">
          <a
            href="https://github.com/theakashr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyber-accent transition-colors"
            title="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/akashr2401200"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyber-accent transition-colors"
            title="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
          <a
            href="https://instagram.com/akash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-cyber-accent transition-colors"
            title="Instagram"
          >
            <FiInstagram size={16} />
          </a>
          <a
            href="mailto:akash.r.biet@gmail.com"
            className="text-gray-500 hover:text-cyber-accent transition-colors"
            title="Email"
          >
            <FiMail size={16} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
