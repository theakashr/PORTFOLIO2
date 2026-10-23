import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Sparkles, Terminal, Code2, Rocket, Award } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { isLight } = useTheme();

  const principles = [
    {
      icon: Terminal,
      title: 'Systems & Logic',
      desc: 'Grounding development in C, algorithms, memory awareness, and structured computational problem solving.',
    },
    {
      icon: Sparkles,
      title: 'AI & Cognitive Tools',
      desc: 'Integrating Large Language Models, embeddings, and intelligent agents into practical everyday tools.',
    },
    {
      icon: Code2,
      title: 'Modern Frontend Craft',
      desc: 'Constructing reactive, accessible, high-framerate interfaces with TypeScript, React, and tailored CSS.',
    },
    {
      icon: Rocket,
      title: 'Zero to Deployment',
      desc: 'Shipping real applications to production with Git, Vercel, Firebase, and continuous refinement.',
    },
  ];

  return (
    <section
      id="about"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-white text-zinc-900 border-zinc-200'
          : 'bg-[#080202] text-white border-red-950/60'
      }`}
    >
      {/* Background radial atmosphere */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity ${
        isLight
          ? 'bg-radial-[at_20%_40%] from-red-100/30 via-transparent to-transparent'
          : 'bg-radial-[at_20%_40%] from-red-950/25 via-transparent to-transparent'
      }`} />
      <DiagonalStreaks density="medium" opacity={isLight ? 0.4 : 0.6} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header with Reference Video Editorial Accent */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-mono-tech uppercase font-bold tracking-widest border ${
              isLight
                ? 'bg-red-50 border-red-200 text-red-700'
                : 'bg-red-950/40 border-red-500/40 text-red-300'
            }`}>
              • IDENTITY &amp; PHILOSOPHY
            </span>
          </div>
          <div className="flex flex-wrap items-baseline gap-4">
            <h2 className={`font-impact text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}>
              ABOUT <span className="text-red-600 glow-red">ME</span>
            </h2>
          </div>
          <p className={`font-mono-tech text-xs sm:text-sm tracking-wider uppercase mt-2 ${
            isLight ? 'text-zinc-500' : 'text-zinc-400'
          }`}>
            CREATIVE TECHNOLOGIST &bull; 2ND YEAR CSE STUDENT AT BIET DAVANAGERE &bull; FULL-STACK &amp; AI
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Layered Dual Cutout Portraits (Profile & Full-Body) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Frame Background */}
            <div className={`relative w-full max-w-[420px] aspect-[4/5] rounded-3xl p-3 shadow-2xl flex items-end justify-center overflow-hidden group border-2 transition-colors ${
              isLight
                ? 'bg-gradient-to-b from-red-50 to-zinc-50 border-red-200 shadow-zinc-200'
                : 'bg-gradient-to-b from-red-950/40 to-black border-red-600/40 shadow-red-950/60'
            }`}>
              
              {/* Backlight Glow */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-3/4 h-3/4 rounded-full blur-3xl pointer-events-none ${
                isLight ? 'bg-red-400/20' : 'bg-red-600/30'
              }`} />

              {/* Side-Profile Cutout (Primary Focus in About) */}
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                src="/images/akash-profile-cutout.png"
                alt="Akash R Side Profile"
                className="relative z-10 w-full h-[95%] object-contain object-bottom portrait-glow transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Floating Badge Overlay */}
              <div className={`absolute top-4 left-4 z-20 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border ${
                isLight
                  ? 'bg-white/90 border-zinc-200 text-zinc-900'
                  : 'bg-black/80 border-white/15 text-white'
              }`}>
                <span className="text-[11px] font-mono-tech text-red-600 font-bold uppercase flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  BIET CSE &bull; 2024-2028
                </span>
              </div>

              {/* Bottom Tagline */}
              <div className={`absolute bottom-4 left-4 right-4 z-20 backdrop-blur-md p-3 rounded-2xl flex items-center justify-between border ${
                isLight
                  ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-sm'
                  : 'bg-black/85 border-white/10 text-white'
              }`}>
                <div>
                  <span className={`font-impact text-base uppercase block leading-none ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    ENGINEERING &amp; AI
                  </span>
                  <span className={`text-[10px] font-mono-tech uppercase ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Davanagere, Karnataka
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
            </div>


          </div>

          {/* RIGHT: Biography & Engineering Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* College & Academic Identity */}
            <div className={`p-6 rounded-2xl shadow-xl space-y-3 border transition-colors ${
              isLight
                ? 'bg-zinc-50 border-red-200 text-zinc-800 shadow-zinc-100'
                : 'bg-zinc-950/70 border-red-600/30 text-zinc-300'
            }`}>
              <div className="flex items-center gap-3 text-red-600">
                <GraduationCap className="w-6 h-6 text-amber-500" />
                <span className={`font-impact text-xl sm:text-2xl uppercase tracking-wide ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  ACADEMIC FOUNDATION
                </span>
              </div>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-zinc-700' : 'text-zinc-300'
              }`}>
                Currently pursuing a Bachelor of Engineering (B.E.) in <span className={isLight ? 'text-zinc-900 font-bold' : 'text-white font-semibold'}>Computer Science &amp; Engineering (2nd Year)</span> at the renowned <span className={isLight ? 'text-red-700 font-bold' : 'text-amber-300 font-semibold'}>Bapuji Institute of Engineering and Technology (BIET)</span> in Davanagere, Karnataka.
              </p>
              <div className={`flex items-center gap-2 text-xs font-mono-tech pt-1 ${
                isLight ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Davanagere, Karnataka, India</span>
              </div>
            </div>

            {/* Core Passion & Drive */}
            <div className="space-y-4">
              <h3 className={`font-impact text-2xl sm:text-3xl uppercase tracking-wide ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                PURPOSE-DRIVEN SOFTWARE CRAFTSMANSHIP
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-zinc-600' : 'text-zinc-300'
              }`}>
                My journey began with a curiosity for how code transforms into software people rely on. From mastering core programming fundamentals in <span className={isLight ? 'text-zinc-900 font-semibold' : 'text-white font-semibold'}>C and Python</span> to orchestrating scalable systems, I view coding as both rigorous engineering and expressive design.
              </p>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-zinc-600' : 'text-zinc-300'
              }`}>
                I am deeply focused on developing <span className={isLight ? 'text-red-700 font-bold' : 'text-yellow-400 font-semibold'}>useful products that solve genuine real-world problems</span> — whether it is coordinating emergency medical disaster logistics through <span className="text-red-600 font-semibold">Rescue AI</span>, forecasting personal health risks through <span className="text-red-600 font-semibold">AI Health Predictor</span>, transforming adaptive education with <span className="text-red-600 font-semibold">EduPilot AI</span>, or powering grassroots tournament cricket in <span className="text-red-600 font-semibold">11Shots</span>.
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border space-y-1.5 transition-colors ${
                      isLight
                        ? 'bg-zinc-50/80 border-zinc-200 hover:border-red-400 text-zinc-800'
                        : 'bg-black/40 border-white/10 hover:border-red-500/40 text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-red-600" />
                      <span className={`font-impact text-sm sm:text-base uppercase tracking-wider ${
                        isLight ? 'text-zinc-900' : 'text-white'
                      }`}>
                        {item.title}
                      </span>
                    </div>
                    <p className={`text-xs leading-relaxed ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href="#skills"
                onClick={() => soundFx.playClick()}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-105"
              >
                <span>EXPLORE TECHNICAL SKILLS</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
