import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Cpu, ChevronRight, Flame, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { DiagonalStreaks } from './DiagonalStreaks';
import { MarqueeTicker } from './MarqueeTicker';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { isLight } = useTheme();

  // Kinetic Role Cycler inspired by reference video (00:10)
  const roles = [
    { label: 'CREATIVE TECHNOLOGIST', icon: Sparkles, color: 'text-amber-400' },
    { label: 'FULL-STACK DEVELOPER', icon: Code2, color: 'text-red-500' },
    { label: 'AI & COGNITIVE ENGINEER', icon: Cpu, color: 'text-cyan-400' },
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <section
      id="intro"
      className={`relative min-h-screen w-full flex flex-col justify-between pt-14 sm:pt-16 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden select-none transition-colors duration-300 ${
        isLight ? 'bg-white text-zinc-900' : 'bg-[#050505] text-white'
      }`}
    >
      {/* Background Radial Glow */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity ${
        isLight
          ? 'bg-radial-[at_50%_35%] from-red-100/50 via-white to-white'
          : 'bg-radial-[at_50%_35%] from-red-950/30 via-black to-black'
      }`} />
      
      {/* 45-degree diagonal floating red/pink streaks */}
      <DiagonalStreaks density="high" opacity={isLight ? 0.45 : 0.7} />

      {/* Top Meta Badges (Reference Video 00:05) */}
      <div className={`relative z-20 max-w-7xl mx-auto w-full flex items-center justify-between pt-1 pb-1.5 border-b transition-colors ${
        isLight ? 'border-zinc-200' : 'border-white/5'
      }`}>
        {/* Top Left Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col"
        >
          <span className={`font-impact tracking-wider text-sm sm:text-base uppercase flex items-center gap-1.5 ${
            isLight ? 'text-zinc-900' : 'text-white'
          }`}>
            <Code2 className="w-4 h-4 text-red-600" />
            FULL-STACK DEVELOPER
          </span>
          <span className={`text-[10px] sm:text-xs font-mono-tech tracking-widest uppercase ${
            isLight ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            AI &bull; SOFTWARE ENGINEER
          </span>
        </motion.div>

        {/* Top Right Live Badge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`flex items-center gap-2 px-3.5 py-1 rounded-full backdrop-blur-sm border transition-colors ${
            isLight
              ? 'bg-red-50 border-red-200 text-red-800'
              : 'bg-red-950/50 border-red-500/30 text-red-200'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-[10px] sm:text-xs font-mono-tech tracking-wider font-semibold uppercase">
            AVAILABLE FOR FREELANCE &amp; ROLES
          </span>
        </motion.div>
      </div>

      {/* Hero Visual Stage: Centered Wordmark + Majestic Big Portrait + Flanking Wings */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-center lg:items-end min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] xl:min-h-[720px] mt-1 sm:mt-2 mb-auto py-1">
        
        {/* THE GIANT CONDENSED "PORTFOLIO" BACKDROP LETTERING (Framing Head & Shoulders) */}
        <div className="absolute inset-0 flex items-center justify-center -translate-y-6 sm:-translate-y-10 lg:-translate-y-14 select-none pointer-events-none z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, letterSpacing: '0.05em' }}
            animate={{ opacity: 1, scale: 1, letterSpacing: '0.02em' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full text-center relative overflow-hidden py-4"
          >
            <h1
              className="font-impact text-[20vw] sm:text-[19vw] md:text-[18vw] lg:text-[17vw] xl:text-[18vw] leading-[0.8] font-black uppercase tracking-tight text-center light-sweep-effect select-none"
              style={{
                background: isLight
                  ? 'linear-gradient(180deg, #ef4444 0%, #dc2626 40%, #991b1b 75%, #7f1d1d 100%)'
                  : 'linear-gradient(180deg, #ff3b3b 0%, #dc2626 40%, #881337 75%, #300813 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: isLight
                  ? '0 10px 30px rgba(220, 38, 38, 0.2)'
                  : '0 0 60px rgba(220, 38, 38, 0.45)',
              }}
            >
              PORTFOLIO
            </h1>

            {/* Neon Vertical Beam line slicing across */}
            <motion.div
              animate={{
                left: ['-20%', '120%'],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1.5,
              }}
              className="absolute top-0 bottom-0 w-8 bg-gradient-to-r from-transparent via-white/80 to-transparent blur-sm pointer-events-none"
            />
          </motion.div>
        </div>

        {/* Left Flank Card: Identity & CTAs (Floating on left) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
          className={`w-full max-w-sm xl:max-w-md lg:absolute lg:left-0 lg:bottom-4 xl:bottom-8 z-20 flex flex-col items-start p-5 sm:p-6 rounded-3xl backdrop-blur-xl border shadow-xl transition-all pointer-events-auto ${
            isLight
              ? 'bg-white/85 border-zinc-200/90 shadow-zinc-200/60 text-zinc-900'
              : 'bg-black/75 border-white/10 shadow-black/90 text-white'
          }`}
        >
            {/* Script "Hello, I'm" */}
            <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-3 mb-0.5 ${
              isLight ? 'text-amber-600' : 'text-amber-300'
            }`}>
              Hello, I'm
            </span>

            {/* Big Name */}
            <h2 className={`font-impact text-4xl sm:text-5xl lg:text-5xl tracking-wide uppercase font-black leading-none mb-2 ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              AKASH R
            </h2>

            {/* Dynamic Kinetic Role Switcher Badge (Reference Video 00:10) */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 border shadow-xs transition-all ${
                isLight
                  ? 'bg-red-50/90 border-red-300 text-red-700'
                  : 'bg-black/80 border-red-500/60 text-white'
              }`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={roles[currentRoleIndex].label}
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="flex items-center gap-2"
                >
                  {React.createElement(roles[currentRoleIndex].icon, {
                    className: `w-3.5 h-3.5 ${roles[currentRoleIndex].color}`,
                  })}
                  <span className="font-impact tracking-wider text-xs uppercase">
                    {roles[currentRoleIndex].label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bio Paragraph */}
            <p className={`text-xs leading-relaxed max-w-sm font-sans mb-4 ${
              isLight ? 'text-zinc-600' : 'text-zinc-300'
            }`}>
              I build meaningful digital experiences through software engineering, AI, and creative problem-solving. Currently 2nd year CSE at <span className={isLight ? 'text-zinc-900 font-bold' : 'text-white font-semibold'}>BIET Davanagere</span>, Karnataka.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 w-full">
              <a
                href="#projects"
                onClick={() => soundFx.playClick()}
                className="group relative flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border border-red-400/50 shadow-lg shadow-red-600/30 transition-all hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000" />
                <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>EXPLORE MY PORTFOLIO</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Akash_R_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`flex items-center justify-center gap-1.5 font-mono-tech font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border-white/15'
                }`}
              >
                <span>CV</span>
              </a>

              <a
                href="#about"
                onClick={() => soundFx.playClick()}
                className={`flex items-center justify-center gap-1.5 font-mono-tech font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border transition-all ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white border-white/15'
                }`}
              >
                <span>ABOUT</span>
              </a>
            </div>

            {/* Quick Links: GitHub, LinkedIn & Direct Email */}
            <div className={`flex flex-wrap items-center gap-2 pt-3 mt-3 border-t w-full transition-colors ${
              isLight ? 'border-zinc-200' : 'border-white/10'
            }`}>
              <a
                href="https://github.com/theakashr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                title="GitHub: @theakashr"
                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all hover:scale-110 ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border-zinc-300'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border-white/15 hover:border-red-500/50'
                }`}
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/theakashr/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                title="LinkedIn: in/theakashr"
                className={`flex items-center justify-center w-8 h-8 rounded-full border transition-all hover:scale-110 ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-blue-600 border-zinc-300'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-blue-400 hover:text-white border-white/15 hover:border-red-500/50'
                }`}
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="mailto:akashakashr505@gmail.com"
                onClick={() => soundFx.playClick()}
                title="Email: akashakashr505@gmail.com"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono-tech transition-all hover:scale-105 ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border-white/15 hover:border-red-500/50'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-red-500" />
                <span className="truncate max-w-[190px]">akashakashr505@gmail.com</span>
              </a>
            </div>
          </motion.div>

        {/* Center: MASSIVE STATUESQUE PORTRAIT (Commanding Center of Page 1) */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center justify-end h-[500px] sm:h-[600px] md:h-[680px] lg:h-[740px] xl:h-[800px] w-full max-w-[460px] sm:max-w-[580px] md:max-w-[680px] lg:max-w-[760px] xl:max-w-[840px] pointer-events-none mx-auto -mt-6 sm:-mt-8 lg:-mt-10 mb-0"
        >
          {/* Cinematic Ambient Glow behind portrait */}
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-4/5 max-w-[540px] h-3/5 rounded-full blur-3xl -z-10 pointer-events-none ${
            isLight ? 'bg-red-400/25' : 'bg-red-600/35'
          }`} />

          <img
            src="/images/akash-portrait-cutout.png"
            alt="Akash R - Creative Developer and AI Enthusiast"
            className="w-full h-full object-contain object-bottom portrait-glow transition-transform duration-700 hover:scale-[1.02] [mask-image:linear-gradient(to_bottom,black_75%,transparent_98%)] drop-shadow-none pointer-events-auto"
            loading="eager"
          />
        </motion.div>

        {/* Right Flank Card: Glass Card with Metrics & Vision (Floating on right) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className={`w-full max-w-xs sm:max-w-sm lg:absolute lg:right-0 lg:bottom-4 xl:bottom-8 z-20 flex flex-col md:items-end text-left md:text-right p-5 sm:p-6 rounded-3xl backdrop-blur-xl border shadow-xl transition-all pointer-events-auto ${
            isLight
              ? 'bg-white/85 border-zinc-200/90 shadow-zinc-200/60 text-zinc-900'
              : 'bg-black/75 border-white/10 shadow-black/90 text-white'
          }`}
        >
          {/* Tagline / Vision */}
          <div className={`flex items-center md:justify-end gap-2 text-xs font-semibold tracking-wide uppercase mb-4 ${
            isLight ? 'text-zinc-700' : 'text-zinc-300'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Turning ideas into digital experiences</span>
          </div>

          {/* Editorial Stats Counter Cards */}
          <div className="flex flex-wrap md:justify-end gap-4 sm:gap-5 w-full mb-4">
            <div className="flex flex-col items-start md:items-end border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-3 md:pl-0 md:pr-3">
              <span className={`font-impact text-3xl font-black leading-none ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                1+
              </span>
              <span className={`text-[10px] font-mono-tech tracking-wider uppercase ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                YEARS CODING
              </span>
            </div>

            <div className="flex flex-col items-start md:items-end border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-3 md:pl-0 md:pr-3">
              <span className={`font-impact text-3xl font-black leading-none ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                6+
              </span>
              <span className={`text-[10px] font-mono-tech tracking-wider uppercase ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                PROJECTS BUILT
              </span>
            </div>

            <div className="flex flex-col items-start md:items-end border-l-2 md:border-l-0 md:border-r-2 border-red-600 pl-3 md:pl-0 md:pr-3">
              <span className={`font-impact text-3xl font-black leading-none ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                2+
              </span>
              <span className={`text-[10px] font-mono-tech tracking-wider uppercase ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                HACKATHONS
              </span>
            </div>
          </div>

          {/* Education Subtext */}
          <div className={`inline-block px-3 py-1.5 rounded-xl border text-[11px] font-mono-tech ${
            isLight
              ? 'bg-zinc-100 border-zinc-200 text-zinc-700'
              : 'bg-zinc-900/80 border-white/10 text-zinc-300'
          }`}>
            📍 B.E. Computer Science &bull; BIET Davanagere
          </div>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator & Infinite Ticker (Reference Video Marquee) */}
      <div className="relative z-20 w-full flex flex-col items-center pt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <a
            href="#projects"
            onClick={() => soundFx.playClick()}
            className={`flex flex-col items-center gap-1.5 transition-colors group ${
              isLight ? 'text-zinc-500 hover:text-zinc-900' : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span className="text-[10px] font-mono-tech tracking-widest uppercase font-semibold">
              SCROLL TO EXPLORE WORKS
            </span>
            <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
              isLight
                ? 'border-zinc-300 group-hover:border-red-500 group-hover:bg-red-50'
                : 'border-white/20 group-hover:border-red-500 group-hover:bg-red-600/20'
            }`}>
              <ArrowDown className="w-3.5 h-3.5 text-red-600 animate-bounce" />
            </div>
          </a>
        </motion.div>

        {/* High impact "I hate boring Portfolio Websites" Marquee */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8 w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)]">
          <MarqueeTicker />
        </div>
      </div>
    </section>
  );
};
