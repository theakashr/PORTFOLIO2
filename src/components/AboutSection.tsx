import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Terminal,
  Code2,
  Rocket,
  Copy,
  Check,
  Bot,
  FileCode2,
} from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const AboutSection: React.FC = () => {
  const { isLight } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopyConfig = async () => {
    soundFx.playClick();
    const configData = {
      developer: 'Akash R',
      role: 'Software & AI Engineer',
      institution: 'BIET Davanagere',
      course: 'B.E. Computer Science (2024–2028)',
      academic_status: '2nd Year Undergraduate',
      core_languages: ['Python', 'C', 'JavaScript', 'SQL'],
      frameworks_and_tools: ['React', 'TailwindCSS', 'Node.js', 'Firebase', 'Git', 'Vercel'],
      engineering_focus: 'Building Real-World Web Apps & AI Tools',
      flagship_products: [
        'Rescue AI (Disaster Medical Logistics)',
        'ResumeAI (ATS Analyzer & Optimizer)',
        'AI Health Predictor (Predictive Health Risk)',
        'EduPilot AI (Curriculum & Study Engine)',
        '11Shots (Tournament Cricket Platform)',
      ],
      location: 'Davanagere, Karnataka, India',
      status: 'Ready to Build & Ship',
    };

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(JSON.stringify(configData, null, 2));
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch (err) {
      console.error('Failed to copy config:', err);
    }
  };

  const codeLines = [
    {
      num: '01',
      content: <span className={isLight ? 'text-amber-700 font-bold' : 'text-amber-400 font-bold'}>{'{'}</span>,
    },
    {
      num: '02',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"developer"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Akash R"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '03',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"role"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Software &amp; AI Engineer"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '04',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"institution"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"BIET Davanagere"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '05',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"degree"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"B.E. CSE (2024–2028)"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '06',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"languages"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-amber-700 font-bold' : 'text-amber-400 font-bold'}>[</span>
        </span>
      ),
    },
    {
      num: '07',
      content: (
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Python"</span><span className="text-zinc-500">, </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"C"</span><span className="text-zinc-500">, </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"JavaScript"</span><span className="text-zinc-500">, </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"SQL"</span>
        </span>
      ),
    },
    {
      num: '08',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-amber-700 font-bold' : 'text-amber-400 font-bold'}>]</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '09',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"focus"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Real-World Web Apps &amp; AI Tools"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '10',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"location"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Davanagere, Karnataka, IN"</span>
          <span className="text-zinc-500">,</span>
        </span>
      ),
    },
    {
      num: '11',
      content: (
        <span>
          &nbsp;&nbsp;<span className={isLight ? 'text-red-700 font-semibold' : 'text-red-400 font-semibold'}>"shipping_status"</span>
          <span className="text-zinc-500">: </span>
          <span className={isLight ? 'text-emerald-700 font-medium' : 'text-emerald-400'}>"Active &amp; Ready to Ship"</span>
        </span>
      ),
    },
    {
      num: '12',
      content: <span className={isLight ? 'text-amber-700 font-bold' : 'text-amber-400 font-bold'}>{'}'}</span>,
    },
    {
      num: '13',
      content: (
        <span className="inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 font-mono text-[11px] pt-1">
          <span className="text-emerald-500 font-bold">❯</span>
          <span className={isLight ? 'text-zinc-600' : 'text-zinc-400'}>build --release verified (0 errors)</span>
          <span className="inline-block w-1.5 h-3.5 bg-red-500 animate-pulse ml-0.5" />
        </span>
      ),
    },
  ];

  const principles = [
    {
      icon: Terminal,
      title: 'Programming & Logic',
      desc: 'Solid foundation in Python and C, data structures, algorithms, and practical problem solving.',
    },
    {
      icon: Sparkles,
      title: 'Practical AI Tools',
      desc: 'Building smart web applications using modern AI models (like Gemini API) to solve everyday tasks.',
    },
    {
      icon: Code2,
      title: 'Web Development',
      desc: 'Building responsive, fast, and easy-to-use web applications with React, JavaScript, and Tailwind CSS.',
    },
    {
      icon: Rocket,
      title: 'Built & Deployed',
      desc: 'Taking projects from code to live production with Git, Vercel, and Firebase so people can actually use them.',
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
          
          {/* LEFT: Modern Engineer Terminal / Config Factsheet Card */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="w-full relative group"
            >
              {/* Backlight Ambient Glow */}
              <div
                className={`absolute -inset-1 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-700 ${
                  isLight
                    ? 'bg-gradient-to-r from-red-200/50 via-amber-200/30 to-red-200/50 opacity-60'
                    : 'bg-gradient-to-r from-red-600/25 via-amber-600/15 to-red-600/25 opacity-70 group-hover:opacity-100'
                }`}
              />

              {/* Terminal Window Container */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden border-2 shadow-2xl transition-all ${
                  isLight
                    ? 'bg-white/95 border-red-200/80 shadow-zinc-200/80 text-zinc-900'
                    : 'bg-[#0a0303]/95 border-red-600/35 shadow-red-950/70 text-white'
                }`}
              >
                {/* Terminal Header Bar */}
                <div
                  className={`px-4 py-3 flex items-center justify-between border-b transition-colors ${
                    isLight ? 'bg-zinc-100/90 border-zinc-200' : 'bg-[#150707]/90 border-white/10'
                  }`}
                >
                  {/* Left: Window Controls + Active File Tab */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        title="Terminal Control (Red)"
                        onClick={() => soundFx.playClick()}
                        className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer inline-block"
                      />
                      <span
                        title="Terminal Control (Yellow)"
                        onClick={() => soundFx.playClick()}
                        className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer inline-block"
                      />
                      <span
                        title="Terminal Control (Green)"
                        onClick={() => soundFx.playChime()}
                        className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-400 transition-colors cursor-pointer inline-block"
                      />
                    </div>

                    <div
                      className={`ml-2 px-2.5 py-1 rounded-md text-xs font-mono-tech flex items-center gap-1.5 border ${
                        isLight
                          ? 'bg-white border-zinc-200 text-zinc-800 shadow-xs'
                          : 'bg-[#0c0505] border-white/10 text-zinc-200'
                      }`}
                    >
                      <FileCode2 className="w-3.5 h-3.5 text-red-500" />
                      <span className="font-semibold tracking-wide">akash.config.json</span>
                    </div>
                  </div>

                  {/* Right: Copy Config Button */}
                  <button
                    type="button"
                    onClick={handleCopyConfig}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono-tech transition-all border cursor-pointer ${
                      copied
                        ? 'bg-emerald-500/20 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-bold'
                        : isLight
                          ? 'bg-white hover:bg-zinc-50 border-zinc-200 text-zinc-700 hover:border-red-300'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300 hover:border-red-500/40'
                    }`}
                    title="Copy full developer manifest JSON"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY JSON</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Code Body */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto scrollbar-thin">
                  <div className="space-y-1">
                    {codeLines.map((line) => (
                      <div key={line.num} className="flex items-start">
                        <span
                          className={`w-6 sm:w-7 shrink-0 select-none font-mono text-right pr-2.5 sm:pr-3 text-[10px] sm:text-[11px] ${
                            isLight ? 'text-zinc-400' : 'text-zinc-600'
                          }`}
                        >
                          {line.num}
                        </span>
                        <div className="font-mono whitespace-nowrap">{line.content}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quick-Access Stack Chips */}
                  <div
                    className={`mt-4 pt-3 border-t flex flex-wrap items-center gap-1.5 ${
                      isLight ? 'border-zinc-200' : 'border-white/10'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-mono-tech uppercase tracking-wider mr-1 ${
                        isLight ? 'text-zinc-500' : 'text-zinc-400'
                      }`}
                    >
                      CORE ARSENAL:
                    </span>
                    {['Python', 'C', 'JavaScript', 'SQL', 'React', 'Firebase', 'AI Tools'].map(
                      (tag) => (
                        <span
                          key={tag}
                          onMouseEnter={() => soundFx.playHover()}
                          className={`text-[10px] font-mono-tech px-2 py-0.5 rounded-md border transition-all cursor-default ${
                            isLight
                              ? 'bg-zinc-100/90 hover:bg-red-50 hover:border-red-300 text-zinc-700'
                              : 'bg-white/5 hover:bg-red-950/40 hover:border-red-500/40 text-zinc-300 hover:text-white'
                          }`}
                        >
                          {tag}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Terminal Bottom Telemetry & AI Trigger Bar */}
                <div
                  className={`px-4 py-2.5 flex items-center justify-between text-[11px] font-mono-tech border-t transition-colors ${
                    isLight
                      ? 'bg-zinc-50/90 border-zinc-200 text-zinc-600'
                      : 'bg-[#120606] border-white/10 text-zinc-400'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      ACTIVE &bull; 0 ERRORS
                    </span>
                    <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">
                      &bull; UTF-8 &bull; LF
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      window.dispatchEvent(new CustomEvent('open-ask-akash-ai'));
                    }}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase transition-all shadow-sm cursor-pointer ${
                      isLight
                        ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-200'
                        : 'bg-red-600 hover:bg-red-500 text-white shadow-red-950'
                    }`}
                  >
                    <Bot className="w-3 h-3" />
                    <span>QUERY AI</span>
                  </button>
                </div>
              </div>
            </motion.div>
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
                BUILDING REAL-WORLD SOFTWARE &amp; AI
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-zinc-600' : 'text-zinc-300'
              }`}>
                I am a 2nd-year Computer Science student with a strong passion for building software that helps people solve real problems. My journey started with core programming in <span className={isLight ? 'text-zinc-900 font-bold' : 'text-white font-semibold'}>Python and C</span>, and has grown into developing full-stack web applications and practical AI tools.
              </p>
              <p className={`text-sm sm:text-base leading-relaxed ${
                isLight ? 'text-zinc-600' : 'text-zinc-300'
              }`}>
                Instead of just writing demo code, I focus on building <span className={isLight ? 'text-red-700 font-bold' : 'text-yellow-400 font-semibold'}>complete applications that solve real-world problems</span> — whether it is coordinating emergency medical disaster relief in <span className="text-red-600 font-semibold">Rescue AI</span>, automated resume analysis in <span className="text-red-600 font-semibold">ResumeAI</span>, early disease risk screening in <span className="text-red-600 font-semibold">AI Health Predictor</span>, interactive study roadmaps in <span className="text-red-600 font-semibold">EduPilot AI</span>, or tournament cricket scoring in <span className="text-red-600 font-semibold">11Shots</span>.
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
