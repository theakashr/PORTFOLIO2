import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle2, Landmark, Sparkles } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { useTheme } from '../context/ThemeContext';

export const AcademicsSection: React.FC = () => {
  const { isLight } = useTheme();

  const coursework = [
    { name: 'Data Structures in C', focus: 'Arrays, Stacks, Queues, Linked Lists, Trees' },
    { name: 'Object-Oriented Programming', focus: 'Inheritance, Polymorphism, Encapsulation & OOP Design' },
    { name: 'Design & Analysis of Algorithms', focus: 'Time/Space Complexity, Divide & Conquer, Dynamic Programming' },
    { name: 'Discrete Mathematical Structures', focus: 'Graph Theory, Set Theory, Combinatorics & Logic' },
    { name: 'Computer Organization & Architecture', focus: 'Instruction Sets, Memory Hierarchies & CPU Pipelines' },
    { name: 'Database Management Systems', focus: 'Relational Schemas, Normalization, SQL & Indexing' },
  ];

  return (
    <section
      id="academics"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-zinc-50 text-zinc-900 border-zinc-200'
          : 'bg-[#080202] text-white border-red-950/60'
      }`}
    >
      <DiagonalStreaks density="medium" opacity={isLight ? 0.35 : 0.65} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-2 inline-block mb-1 ${
              isLight ? 'text-amber-700' : 'text-amber-300'
            }`}>
              Scholastic Milestones
            </span>
            <h2
              className={`font-impact text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none transition-colors ${
                isLight ? 'text-red-600' : 'text-yellow-400 glow-yellow'
              }`}
              style={
                isLight
                  ? { color: '#dc2626', textShadow: '0 4px 15px rgba(220, 38, 38, 0.15)' }
                  : { color: '#facc15', textShadow: '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(250, 204, 21, 0.6)' }
              }
            >
              ACADEMICS &amp; EDUCATION
            </h2>
            <p className={`font-sans text-sm sm:text-base max-w-2xl mx-auto mt-2 font-medium transition-colors ${
              isLight ? 'text-zinc-600' : 'text-amber-100/90'
            }`}>
              Rigorous undergraduate engineering curriculum at Bapuji Institute of Engineering and Technology (BIET).
            </p>
          </motion.div>
        </div>

        {/* Main Degree Card */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`p-6 sm:p-8 rounded-3xl border-[2.5px] shadow-2xl relative overflow-hidden transition-all ${
              isLight
                ? 'bg-white border-zinc-200 shadow-zinc-200/80'
                : 'bg-black/90 border-white/80 shadow-2xl'
            }`}
          >
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-current/10 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center text-white border border-red-500/40 shadow-lg shadow-red-900/30 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-red-600 text-white font-bold uppercase tracking-wider">
                      UNDERGRADUATE DEGREE
                    </span>
                    <span className="text-[10px] font-mono-tech text-emerald-500 font-bold uppercase flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> CURRENTLY PURSUING
                    </span>
                  </div>
                  <h3 className={`font-impact text-2xl sm:text-3xl uppercase tracking-wide leading-tight ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    Bachelor of Engineering — Computer Science &amp; Engineering
                  </h3>
                  <div className={`flex items-center gap-2 text-xs font-semibold font-sans mt-1 ${
                    isLight ? 'text-amber-700' : 'text-amber-300'
                  }`}>
                    <Landmark className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Bapuji Institute of Engineering and Technology (BIET)</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1 shrink-0">
                <div className={`flex items-center gap-1.5 text-xs font-mono-tech font-bold ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  <Calendar className="w-4 h-4 text-red-500" />
                  <span>2024 — 2028</span>
                </div>
                <div className={`flex items-center gap-1.5 text-xs font-mono-tech ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  <span>Davanagere, Karnataka</span>
                </div>
                <span className="text-[10px] font-mono-tech text-red-500 font-bold uppercase mt-1">
                  2ND YEAR &bull; 4TH SEMESTER
                </span>
              </div>
            </div>

            {/* Description */}
            <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
              isLight ? 'text-zinc-700' : 'text-zinc-300'
            }`}>
              Immersed in deep theoretical and practical engineering foundations. Curriculum focuses on low-level system design in C, object-oriented architectural patterns, asymptotic algorithm analysis, and database management systems. Actively engaging in departmental technology initiatives, hackathon teams, and hands-on coding labs.
            </p>

            {/* Core Coursework Grid */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-red-500" />
                <h4 className={`text-xs font-mono-tech uppercase font-bold tracking-wider ${
                  isLight ? 'text-zinc-800' : 'text-zinc-200'
                }`}>
                  Key Coursework &amp; Academic Focus:
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isLight
                        ? 'bg-zinc-50 border-zinc-200 hover:border-zinc-300'
                        : 'bg-black/60 border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className={`text-xs font-bold font-mono-tech block ${
                          isLight ? 'text-zinc-900' : 'text-white'
                        }`}>
                          {course.name}
                        </span>
                        <span className={`text-[11px] block mt-0.5 leading-tight ${
                          isLight ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          {course.focus}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};
