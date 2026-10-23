import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, Cpu } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export interface CredentialItem {
  id: string;
  type: 'CREDLY' | 'HACKERRANK';
  title: string;
  issuer: string;
  platform: 'Credly' | 'HackerRank';
  url: string;
  badgeImage?: string;
  icon?: React.ElementType;
  accentColor: string;
  badgeTag: string;
  description: string;
  skills: string[];
}

export const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'CREDLY' | 'HACKERRANK'>('ALL');
  const { isLight } = useTheme();

  const credentials: CredentialItem[] = [
    // Credly Badges
    {
      id: '9a396e5e-8651-4646-bb34-4acae26a3930',
      type: 'CREDLY',
      title: 'Create Your First Gemini Enterprise Application',
      issuer: 'Google Cloud',
      platform: 'Credly',
      url: 'https://www.credly.com/badges/9a396e5e-8651-4646-bb34-4acae26a3930',
      badgeImage: '/images/certificates/gemini-enterprise-badge.png',
      accentColor: '#4285F4',
      badgeTag: 'GOOGLE CLOUD SKILL BADGE',
      description:
        'Demonstrates verified enterprise proficiency in architecting deep research agents, multi-agent ideation workflows, and deploying NotebookLM for targeted enterprise analysis.',
      skills: ['Google Cloud', 'Gemini API', 'AI Agents', 'Multi-Agent Ideation', 'NotebookLM', 'Prompt Engineering'],
    },
    {
      id: '99d13e72-0d63-4184-9a65-130a1e9648f2',
      type: 'CREDLY',
      title: 'Python for Data Science',
      issuer: 'IBM',
      platform: 'Credly',
      url: 'https://www.credly.com/badges/99d13e72-0d63-4184-9a65-130a1e9648f2',
      badgeImage: '/images/certificates/ibm-python-data-science-badge.png',
      accentColor: '#054ADA',
      badgeTag: 'IBM VERIFIED CREDENTIAL',
      description:
        'Validates hands-on capability to engineer Python scripts, perform exploratory data analysis, and execute data manipulation workflows within IBM Jupyter-based lab environments.',
      skills: ['Python', 'Data Science', 'Jupyter Labs', 'Data Analysis', 'Data Structures', 'Data Cleansing'],
    },
    // HackerRank Certificates
    {
      id: '96d7fb788ed7',
      type: 'HACKERRANK',
      title: 'Python (Basic) Certification',
      issuer: 'HackerRank',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/96d7fb788ed7',
      icon: Terminal,
      accentColor: '#10B981',
      badgeTag: 'HACKERRANK SKILL CERTIFICATE',
      description:
        'Certified mastery in core Python language concepts including scalar types, operators, strings, control flows, collections (lists, tuples, dicts, sets), functions, and object-oriented patterns.',
      skills: ['Python 3', 'Data Structures', 'OOP Patterns', 'List Comprehensions', 'Functions'],
    },
    {
      id: 'f2eaec45adec',
      type: 'HACKERRANK',
      title: 'Problem Solving (Basic) Certification',
      issuer: 'HackerRank',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/f2eaec45adec',
      icon: Cpu,
      accentColor: '#3B82F6',
      badgeTag: 'HACKERRANK SKILL CERTIFICATE',
      description:
        'Rigorous assessment of algorithmic reasoning, array manipulation, search & sorting logic, mathematical modeling, and computational complexity (Big-O asymptotic runtime & memory optimization).',
      skills: ['Algorithms', 'Data Structures', 'Time Complexity', 'Problem Decomposition', 'Logic'],
    },
    {
      id: 'bfff4fc88bf8',
      type: 'HACKERRANK',
      title: 'C# (Basic) Certification',
      issuer: 'HackerRank',
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/certificates/bfff4fc88bf8',
      icon: Code2,
      accentColor: '#8B5CF6',
      badgeTag: 'HACKERRANK SKILL CERTIFICATE',
      description:
        'Validated fundamental knowledge of C# programming, covering strong typing, control flow structures, class hierarchies, interfaces, methods, and structured application development.',
      skills: ['C# Language', '.NET Architecture', 'OOP Principles', 'Type Systems', 'Methods'],
    },
  ];

  const filteredCredentials = credentials.filter((item) => {
    if (filter === 'ALL') return true;
    return item.type === filter;
  });

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
        <div className="text-center mb-12">
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
              CERTIFICATIONS &amp; BADGES
            </h2>
            <p className={`font-sans text-sm sm:text-base max-w-2xl mx-auto mt-2 font-medium transition-colors ${
              isLight ? 'text-zinc-600' : 'text-zinc-300'
            }`}>
              Authentic, externally verifiable credentials issued by Google Cloud, IBM, and HackerRank.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'ALL', label: `ALL CREDENTIALS (${credentials.length})` },
                { id: 'CREDLY', label: 'CREDLY BADGES (2)' },
                { id: 'HACKERRANK', label: 'HACKERRANK CERTS (3)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundFx.playClick();
                    setFilter(tab.id as typeof filter);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 cursor-pointer ${
                    filter === tab.id
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/30 scale-105'
                      : isLight
                      ? 'bg-white text-zinc-700 hover:text-zinc-900 border border-zinc-200 hover:bg-zinc-100'
                      : 'bg-black/60 text-white/80 hover:text-white border border-white/20 hover:bg-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
          {filteredCredentials.map((item, idx) => {
            const Icon = item.icon || Award;
            const isCredly = item.type === 'CREDLY';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl border-[2.5px] p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.03] group ${
                  isLight
                    ? 'bg-white border-zinc-200 hover:border-red-400 shadow-zinc-200/70'
                    : 'bg-black/85 border-white/80 hover:border-red-500 shadow-2xl'
                }`}
              >
                {/* Top Half */}
                <div className="space-y-4">
                  {/* Badge Header Row */}
                  <div className="flex items-center justify-between">
                    {/* Badge Image or Icon */}
                    {isCredly && item.badgeImage ? (
                      <div className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-current/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-110 shadow-md">
                        <img
                          src={item.badgeImage}
                          alt={`${item.title} Badge`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                        style={{
                          backgroundColor: `${item.accentColor}18`,
                          borderColor: `${item.accentColor}50`,
                          color: item.accentColor,
                        }}
                      >
                        <Icon className="w-7 h-7" />
                      </div>
                    )}

                    {/* Verification Status */}
                    <div className="flex flex-col items-end">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono-tech px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 border border-emerald-500/30 font-bold uppercase">
                        <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED
                      </span>
                      <span className="text-[10px] font-mono-tech text-zinc-400 mt-1 font-semibold uppercase">
                        via {item.platform}
                      </span>
                    </div>
                  </div>

                  {/* Issuer & Title */}
                  <div>
                    <span className="text-[11px] font-mono-tech uppercase tracking-wider text-red-500 font-bold block">
                      {item.badgeTag} &bull; {item.issuer}
                    </span>
                    <h3 className={`font-impact text-2xl uppercase tracking-wide leading-tight mt-1 ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-300'
                  }`}>
                    {item.description}
                  </p>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.skills.map((s, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-mono-tech px-2 py-0.5 rounded ${
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

                {/* Bottom Verification Button */}
                <div className="pt-6 mt-6 border-t border-current/10">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className={`w-full py-3 px-4 rounded-xl font-impact text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 group-hover:shadow-lg cursor-pointer ${
                      isCredly
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-blue-600/30'
                        : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/30'
                    }`}
                  >
                    <Award className="w-4 h-4" />
                    <span>VERIFY ON {item.platform.toUpperCase()}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Verification Guarantee Banner */}
        <div className={`mt-14 max-w-3xl mx-auto p-4 rounded-2xl border text-center text-xs font-mono-tech flex items-center justify-center gap-2 ${
          isLight
            ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
            : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-300'
        }`}>
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>
            All badges &amp; certificates are registered to <strong>Akash R</strong> with cryptographic proof verifiable on Credly and HackerRank.
          </span>
        </div>

      </div>
    </section>
  );
};
