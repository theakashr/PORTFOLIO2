import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiGithub, FiLinkedin, FiInstagram, FiMail, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate terminal encrypting transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  const socials = [
    {
      name: 'GitHub',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/theakashr',
      color: 'hover:text-cyber-accent hover:border-cyber-accent shadow-glow-cyan/20'
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/akashr2401200',
      color: 'hover:text-[#0077B5] hover:border-[#0077B5] shadow-glow-blue/20'
    },
    {
      name: 'Instagram',
      icon: <FiInstagram size={20} />,
      url: 'https://instagram.com/akash',
      color: 'hover:text-cyber-neonPurple hover:border-cyber-neonPurple shadow-glow-purple/20'
    },
    {
      name: 'Email',
      icon: <FiMail size={20} />,
      url: 'mailto:akash.r.biet@gmail.com',
      color: 'hover:text-cyber-accent hover:border-cyber-accent shadow-glow-cyan/20'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-gray-50">
      {/* Decorative Orbs */}
      <div className="absolute top-[40%] right-[-10%] w-[320px] h-[320px] rounded-full bg-cyber-accent glow-orb opacity-10 -z-10" />
      <div className="absolute bottom-[10%] left-[-10%] w-[320px] h-[320px] rounded-full bg-cyber-neonPurple glow-orb opacity-10 -z-10" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-orbitron font-black text-3xl sm:text-4xl tracking-wider text-gray-900"
          >
            TRANSMIT <span className="bg-gradient-to-r from-cyber-accent to-cyber-neonPurple bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(0,240,255,0.3)]">MESSAGE</span>
          </motion.h2>
          <div className="w-20 h-[3px] bg-gradient-to-r from-cyber-accent to-cyber-neonPurple rounded-full mt-3 shadow-glow-cyan" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info & Socials Sidebar */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left gap-8">
            <div className="flex flex-col gap-6">
              <h3 className="font-orbitron font-extrabold text-xl text-gray-900 tracking-widest uppercase">
                GET IN TOUCH
              </h3>
              <p className="font-inter text-sm sm:text-base text-gray-600 leading-relaxed">
                Whether you have a project idea, academic inquiry, internship opportunities, or just want to talk tech—transmit a message or connect through my social nodes.
              </p>

              <div className="flex flex-col gap-4 mt-4 font-orbitron text-xs tracking-wider">
                <div className="flex items-center gap-3">
                  <FiMail className="text-cyber-accent text-lg" />
                  <span className="text-gray-600 hover:text-gray-900 transition-colors">akash.r.biet@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-accent" />
                  <span className="text-gray-600 uppercase">BIET DAVANAGERE, KARNATAKA, INDIA</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="flex flex-col gap-4">
              <h4 className="font-orbitron text-xs font-bold text-gray-600 tracking-widest uppercase text-left">
                Network Links
              </h4>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 rounded-xl bg-white border border-cyber-accent/15 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 relative">
            <div className="glass-card rounded-2xl border border-cyber-accent/15 p-8 shadow-glass relative h-full flex flex-col justify-center">
              
              {/* Corner ticks */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyber-accent/30" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyber-accent/30" />

              {/* Success screen overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-2xl bg-white/95 z-20 flex flex-col items-center justify-center p-6 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0.7 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="text-cyber-accent flex flex-col items-center gap-4"
                    >
                      <FiCheckCircle size={56} className="animate-pulse shadow-glow-cyan" />
                      <h4 className="font-orbitron font-extrabold text-lg tracking-wider text-gray-900">
                        TRANSMISSION SECURED
                      </h4>
                      <p className="font-mono text-xs text-gray-600 max-w-sm">
                        &gt; Message packet encrypted.<br />
                        &gt; Decrypted & routed successfully.<br />
                        &gt; Expected reply: within 48 cycles.
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form markup */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10 text-left">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-orbitron text-[10px] tracking-widest text-gray-600 uppercase font-bold">
                    Identifier (Name)
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    disabled={isSubmitting}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 bg-white border border-cyber-accent/15 rounded-lg text-gray-900 font-inter text-sm focus:outline-none focus:border-cyber-accent focus:shadow-glow-cyan transition-all"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-orbitron text-[10px] tracking-widest text-gray-600 uppercase font-bold">
                    Return Address (Email)
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={isSubmitting}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. john@example.com"
                    className="w-full px-4 py-3 bg-white border border-cyber-accent/15 rounded-lg text-gray-900 font-inter text-sm focus:outline-none focus:border-cyber-accent focus:shadow-glow-cyan transition-all"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-orbitron text-[10px] tracking-widest text-gray-600 uppercase font-bold">
                    Payload (Message)
                  </label>
                  <textarea
                    id="message"
                    required
                    disabled={isSubmitting}
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write details of the transmission..."
                    className="w-full px-4 py-3 bg-white border border-cyber-accent/15 rounded-lg text-gray-900 font-inter text-sm focus:outline-none focus:border-cyber-accent focus:shadow-glow-cyan transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 mt-2 bg-gradient-to-r from-cyber-accent to-cyber-neonBlue text-cyber-bg font-orbitron font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2.5 transition-all duration-300 shadow-glow-cyan/50 hover:shadow-glow-cyan/80 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cyber-bg border-t-transparent rounded-full animate-spin" />
                      <span>ENCRYPTING...</span>
                    </>
                  ) : (
                    <>
                      <span>TRANSMIT PACKET</span>
                      <FiSend size={13} className="animate-pulse" />
                    </>
                  )}
                </motion.button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
