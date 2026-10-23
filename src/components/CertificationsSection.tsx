import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const CertificationsSection: React.FC = () => {
  const { isLight } = useTheme();

  const certificates = [
    {
      id: '96d7fb788ed7',
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/96d7fb788ed7',
      icon: Terminal,
      color: '#10B981',
      accentBg: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-500',
      description:
        'Certified mastery in core Python language concepts including scalar types, operators, strings, control flow, functions, collections (lists, tuples, dictionaries, sets), and object-oriented programming patterns.',
      skills: ['Python 3', 'Data Structures', 'OOP Patterns', 'List Comprehensions', 'Functions'],
    },
    {
      id: 'f2eaec45adec',
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/f2eaec45adec',
      icon: Cpu,
      color: '#3B82F6',
      accentBg: 'bg-blue-500/15 border-blue-500/40 text-blue-500',
      description:
        'Rigorous assessment of algorithmic reasoning, array manipulation, search & sorting logic, mathematical modeling, and computational complexity (Big-O time and space optimization).',
      skills: ['Algorithms', 'Data Structures', 'Time Complexity', 'Problem Decomposition', 'Logic'],
    },
    {
      id: 'bfff4fc88bf8',
      title: 'C# (Basic)',
      issuer: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/bfff4fc88bf8',
      icon: Code2,
      color: '#8B5CF6',
      accentBg: 'bg-purple-500/15 border-purple-500/40 text-purple-500',
      description:
        'Validated fundamental knowledge of C# programming, covering types, conditional execution, loops, methods, class hierarchies, interfaces, and structured software development.',
      skills: ['C# Language', '.NET Architecture', 'OOP Principles', 'Type Systems', 'Methods'],
    },
  ];

  return (
    <section
      id="certifications"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-zinc-50 text-zinc-900 border-zinc-200'
          : 'bg-[#060202] text-white border-red-950/60'
      }`}
    >
      <DiagonalStreaks density="medium" opacity={isLight ? 0.35 : 0.7} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-2 inline-block mb-1 ${
              isLight ? 'text-emerald-700' : 'text-emerald-400'
            }`}>
              Verified Technical Credentials
            </span>
            <h2
              className={`font-impact text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none transition-colors ${
                isLight ? 'text-zinc-900' : 'text-yellow-400 glow-yellow'
              }`}
              style={
                isLight
                  ? { textShadow: '0 4px 15px rgba(220, 38, 38, 0.15)' }
                  : { textShadow: '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(250, 204, 21, 0.6)' }
              }
            >
              OFFICIAL CERTIFICATIONS
            </h2>
            <p className={`font-sans text-sm sm:text-base max-w-2xl mx-auto mt-2 font-medium transition-colors ${
              isLight ? 'text-zinc-600' : 'text-zinc-300'
            }`}>
              Authentic, externally verifiable skill assessments earned on HackerRank demonstrating core programming fluency.
            </p>
          </motion.div>
        </div>

        {/* 3 Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`rounded-3xl border-[2.5px] p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.03] group ${
                  isLight
                    ? 'bg-white border-zinc-200 hover:border-red-400 shadow-zinc-200/70'
                    : 'bg-black/85 border-white/80 hover:border-red-500 shadow-2xl'
                }`}
              >
                {/* Top Section */}
                <div className="space-y-4">
                  {/* Badge & ID */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 ${cert.accentBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 font-bold uppercase">
                        <ShieldCheck className="w-3 h-3" /> VERIFIED
                      </span>
                      <span className="text-[10px] font-mono-tech text-zinc-400 mt-0.5">
                        ID: {cert.id.substring(0, 8)}...
                      </span>
                    </div>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-red-500 font-bold block">
                      HACKERRANK SKILL CERTIFICATE
                    </span>
                    <h3 className={`font-impact text-2xl sm:text-3xl uppercase tracking-wide leading-tight mt-0.5 ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}>
                      {cert.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-300'
                  }`}>
                    {cert.description}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2 py-0.5 rounded ${
                          isLight
                            ? 'bg-zinc-100 border border-zinc-200 text-zinc-700'
                            : 'bg-zinc-900 border border-white/10 text-zinc-300'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-6 mt-6 border-t border-current/10">
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 flex items-center justify-center gap-2 group-hover:shadow-red-600/50"
                  >
                    <Award className="w-4 h-4" />
                    <span>VERIFY ON HACKERRANK</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Verification Guarantee Banner */}
        <div className={`mt-12 max-w-3xl mx-auto p-4 rounded-2xl border text-center text-xs font-mono-tech flex items-center justify-center gap-2 ${
          isLight
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
            : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
        }`}>
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            Every certificate above is publicly registered on HackerRank and verifiable via its cryptographic certificate ID.
          </span>
        </div>

      </div>
    </section>
  );
};
