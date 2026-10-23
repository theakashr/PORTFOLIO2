import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Info } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface SkillItem {
  name: string;
  category: 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS';
  role: string;
  appliedIn: string;
  highlights: string[];
  color: string;
}

export const SkillsSection: React.FC = () => {
  const { isLight } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'CORE' | 'FRONTEND' | 'BACKEND' | 'TOOLS'>('ALL');
  const [activeSkill, setActiveSkill] = useState<SkillItem | null>(null);

  const skills: SkillItem[] = [
    // Core Languages
    {
      name: 'C',
      category: 'CORE',
      role: 'Foundational Systems & Memory Management',
      appliedIn: 'Data structures, algorithm complexity & low-level memory handling at BIET',
      highlights: ['Pointers & Dynamic Memory Allocation', 'Algorithms & Time Complexity', 'Structured Modular Programming'],
      color: '#3B82F6',
    },
    {
      name: 'Python',
      category: 'CORE',
      role: 'Scripting, AI Integration & Backend Services',
      appliedIn: 'AI logic processing in AI Health Predictor & desktop data handling in MEDINEX',
      highlights: ['Data Processing & Automation Scripts', 'FastAPI REST Endpoints', 'LLM Prompt Engineering & APIs'],
      color: '#EAB308',
    },

    // Backend & Cloud
    {
      name: 'Firebase',
      category: 'BACKEND',
      role: 'Serverless Infrastructure & App Services',
      appliedIn: 'Hosting, security rules, and cloud infrastructure for web applications',
      highlights: ['Authentication Flows', 'Real-Time Sync Pipelines', 'Security Rules Architecture'],
      color: '#F59E0B',
    },
    {
      name: 'Cloud Firestore',
      category: 'BACKEND',
      role: 'NoSQL Document Store & Real-Time Collections',
      appliedIn: 'Dynamic storage for user assessments in AI Health Predictor & 11Shots live match scoring',
      highlights: ['Document/Collection Modeling', 'Real-Time Snapshot Listeners', 'Compound Indexing & Queries'],
      color: '#EF4444',
    },

    // Tools & DevOps
    {
      name: 'Git',
      category: 'TOOLS',
      role: 'Distributed Version Control & Branch Management',
      appliedIn: 'Atomic commits, branch merging, and code version control',
      highlights: ['Branching Strategies & Rebase', 'Conflict Resolution', 'Commit Hygiene'],
      color: '#F43F5E',
    },
    {
      name: 'GitHub',
      category: 'TOOLS',
      role: 'Code Collaboration & Repository Management',
      appliedIn: 'Open-source code hosting, issue tracking, and automated releases',
      highlights: ['Pull Requests & Code Reviews', 'GitHub Pages & Webhooks', 'Repository Organization'],
      color: '#A855F7',
    },
    {
      name: 'Vercel',
      category: 'TOOLS',
      role: 'Edge Deployment, Continuous Integration & CDN',
      appliedIn: 'Automated CI/CD deployment pipelines for production web builds',
      highlights: ['Instant Edge Deployments', 'Custom Domain & SSL Setup', 'Preview Environments'],
      color: '#000000',
    },
  ];

  const filteredSkills = skills.filter((s) => {
    if (selectedCategory === 'ALL') return true;
    return s.category === selectedCategory;
  });

  return (
    <section
      id="skills"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-white text-zinc-900 border-zinc-200'
          : 'bg-[#050505] text-white border-red-950/70'
      }`}
    >
      <div className={`absolute inset-0 pointer-events-none transition-opacity ${
        isLight
          ? 'bg-radial-[at_70%_20%] from-red-100/30 via-transparent to-transparent'
          : 'bg-radial-[at_70%_20%] from-red-950/20 via-transparent to-transparent'
      }`} />
      <DiagonalStreaks density="medium" opacity={isLight ? 0.4 : 0.65} />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-14">
          <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-2 inline-block mb-1 ${
            isLight ? 'text-amber-600' : 'text-amber-300'
          }`}>
            Technical repertoire
          </span>
          <h2
            className={`font-impact text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none ${
              isLight ? 'text-zinc-900' : 'text-yellow-400 glow-yellow'
            }`}
            style={{
              textShadow: isLight
                ? '0 4px 15px rgba(220, 38, 38, 0.2)'
                : '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(250, 204, 21, 0.5)',
            }}
          >
            SKILLS &amp; ARSENAL
          </h2>
          <p className={`font-sans text-sm sm:text-base max-w-xl mx-auto mt-2 font-medium ${
            isLight ? 'text-zinc-600' : 'text-zinc-300'
          }`}>
            Genuine verified capabilities deployed in real software, production builds, and college engineering coursework.
          </p>

          {/* Interactive Category Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'ALL', label: 'ALL TECHNOLOGIES' },
              { id: 'CORE', label: 'CORE LANGUAGES' },
              { id: 'BACKEND', label: 'BACKEND & CLOUD' },
              { id: 'TOOLS', label: 'WORKFLOW & TOOLS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedCategory(tab.id as typeof selectedCategory);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 ${
                  selectedCategory === tab.id
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/30 scale-105'
                    : isLight
                    ? 'bg-zinc-100 text-zinc-600 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-200/60'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skill Constellation / Orbiting Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSkills.map((skill, idx) => {
            const isSelected = activeSkill?.name === skill.name;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => {
                  soundFx.playClick();
                  setActiveSkill(isSelected ? null : skill);
                }}
                className={`group relative p-5 rounded-2xl cursor-pointer transition-all duration-300 border backdrop-blur-md overflow-hidden ${
                  isSelected
                    ? isLight
                      ? 'bg-red-50/90 border-red-500 shadow-xl shadow-red-200 scale-[1.03]'
                      : 'bg-gradient-to-b from-red-950/80 to-black border-red-500 shadow-2xl shadow-red-600/30 scale-[1.03]'
                    : isLight
                    ? 'bg-zinc-50/90 hover:bg-white border-zinc-200 hover:border-red-400 hover:shadow-lg text-zinc-900'
                    : 'bg-zinc-950/80 hover:bg-zinc-900/90 border-white/10 hover:border-red-500/50 hover:shadow-lg hover:shadow-red-950/50 text-white'
                }`}
              >
                {/* Glow Accent Dot */}
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-2xl opacity-20 group-hover:opacity-60 transition-opacity"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center font-impact text-lg group-hover:scale-110 transition-transform ${
                    isLight
                      ? 'bg-white border-zinc-200 text-zinc-900 shadow-xs'
                      : 'bg-black/60 border-white/10 text-white'
                  }`}>
                    {skill.name.slice(0, 2)}
                  </div>
                  <span className={`text-[10px] font-mono-tech uppercase px-2 py-0.5 rounded border ${
                    isLight
                      ? 'bg-zinc-100 border-zinc-200 text-zinc-600'
                      : 'bg-white/5 border-white/10 text-zinc-400'
                  }`}>
                    {skill.category}
                  </span>
                </div>

                <h3 className={`font-impact text-xl sm:text-2xl uppercase tracking-wider mb-1 transition-colors ${
                  isLight
                    ? 'text-zinc-900 group-hover:text-red-600'
                    : 'text-white group-hover:text-yellow-400'
                }`}>
                  {skill.name}
                </h3>
                <p className={`text-xs line-clamp-1 mb-3 ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {skill.role}
                </p>

                {/* Live Inspection Hint */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-200/60 dark:border-white/5 text-[11px] font-mono-tech text-red-600 font-semibold transition-colors">
                  <span>{isSelected ? 'ACTIVE VIEW' : 'INSPECT'}</span>
                  <span>{isSelected ? '▲' : '▼'}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Skill Deep Dive Banner (Expands smoothly on click) */}
        <AnimatePresence>
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`mt-10 p-6 sm:p-8 rounded-3xl border-2 shadow-2xl relative overflow-hidden transition-colors ${
                isLight
                  ? 'bg-red-50/70 border-red-300 text-zinc-900 shadow-red-100'
                  : 'bg-gradient-to-r from-red-950/70 via-black to-zinc-950 border-red-500/50 text-white'
              }`}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-tech font-bold uppercase mb-2 border ${
                    isLight
                      ? 'bg-red-100 border-red-300 text-red-800'
                      : 'bg-red-600/30 border-red-500/50 text-red-300'
                  }`}>
                    <Info className="w-3.5 h-3.5" />
                    PRACTICAL IMPLEMENTATION INSIGHT
                  </div>
                  <h3 className={`font-impact text-3xl sm:text-4xl uppercase tracking-wide ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    {activeSkill.name} &bull; <span className="text-red-600">{activeSkill.role}</span>
                  </h3>
                  <p className={`text-sm mt-2 max-w-2xl leading-relaxed ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    <strong className={isLight ? 'text-zinc-900' : 'text-white'}>Applied in:</strong> {activeSkill.appliedIn}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {activeSkill.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono-tech border ${
                          isLight
                            ? 'bg-white border-zinc-200 text-zinc-700 shadow-xs'
                            : 'bg-black/60 border-white/10 text-zinc-300'
                        }`}
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setActiveSkill(null)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase shrink-0 transition-colors ${
                    isLight
                      ? 'bg-zinc-200 hover:bg-zinc-300 text-zinc-800'
                      : 'bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white'
                  }`}
                >
                  Close Insight
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
