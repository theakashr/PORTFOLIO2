import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Trophy, Award, Calendar, MapPin, CheckCircle2, ExternalLink } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const JourneySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'EDUCATION' | 'HACKATHONS' | 'CERTIFICATIONS'>('ALL');
  const { isLight } = useTheme();

  const timelineItems = [
    {
      type: 'EDUCATION',
      title: 'Bachelor of Engineering — Computer Science & Engineering',
      institution: 'Bapuji Institute of Engineering and Technology (BIET)',
      location: 'Davanagere, Karnataka',
      period: '2024 — 2028 (Currently in 2nd Year)',
      desc: 'Deep focus on core computer science foundations, algorithms, data structures, discrete mathematics, and computer systems architecture.',
      icon: GraduationCap,
      color: '#3B82F6',
      tags: ['Data Structures in C', 'Algorithms', 'Object-Oriented Programming', 'Database Systems'],
    },
    {
      type: 'HACKATHONS',
      title: 'Hackering 2.0 — 36-Hour National Level Hackathon',
      institution: 'RV Institute of Technology and Management (RVITM)',
      location: 'Bengaluru, Karnataka',
      period: 'Oct 8 — 10, 2026',
      desc: 'Finalist with Team HACK CORE in an intensive 36-hour national hackathon organized by the Dept. of ECE & Dept. of CSE (AI/ML) at RVITM, building innovative tech solutions to address critical real-world challenges.',
      icon: Trophy,
      color: '#EF4444',
      tags: ['36-Hour Hackathon', 'Team HACK CORE', 'National Hackathon', 'AI & Embedded Tech'],
      certificateUrl: 'https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing',
    },
    {
      type: 'HACKATHONS',
      title: 'Disaster Management & AI Solution Sprint',
      institution: 'College Tech Innovation Challenge',
      location: 'BIET Davanagere',
      period: '2025',
      desc: 'Designed and presented Rescue AI — an emergency command system designed to automate survivor triage and optimize drone aerial rescue paths during catastrophic floods.',
      icon: Trophy,
      color: '#EF4444',
      tags: ['Emergency Telemetry', 'AI Triage Routing', 'Geospatial Visualization', 'Rapid Prototyping'],
    },
    {
      type: 'HACKATHONS',
      title: 'Smart India Hackathon (SIH) Ideation Sprint',
      institution: 'Institutional Innovation Council',
      location: 'Karnataka',
      period: '2024 — 2025',
      desc: 'Collaborated with multidisciplinary teammates to formulate digital solutions for public sector problems, refining system feasibility and presentation pitches.',
      icon: Trophy,
      color: '#F59E0B',
      tags: ['Problem Statement Analysis', 'System Architecture', 'Team Collaboration'],
    },
    {
      type: 'CERTIFICATIONS',
      title: 'Python (Basic) Skill Certification',
      institution: 'HackerRank',
      location: 'Verified Online Credential',
      period: 'Certified',
      desc: 'Officially certified by HackerRank in core Python programming fundamentals: scalar types, control flows, data structures (lists, tuples, dicts, sets), functions, error handling, and object-oriented programming.',
      icon: Award,
      color: '#10B981',
      tags: ['Python 3', 'Data Structures', 'OOP Concepts', 'HackerRank Verified'],
      certificateUrl: 'https://www.hackerrank.com/certificates/96d7fb788ed7',
    },
    {
      type: 'CERTIFICATIONS',
      title: 'Problem Solving (Basic) Skill Certification',
      institution: 'HackerRank',
      location: 'Verified Online Credential',
      period: 'Certified',
      desc: 'Officially certified by HackerRank in computational problem solving, data structure manipulations, asymptotic time/space complexity analysis, and algorithmic reasoning.',
      icon: Award,
      color: '#3B82F6',
      tags: ['Algorithms', 'Data Structures', 'Problem Solving', 'Time Complexity'],
      certificateUrl: 'https://www.hackerrank.com/certificates/f2eaec45adec',
    },
    {
      type: 'CERTIFICATIONS',
      title: 'C# (Basic) Skill Certification',
      institution: 'HackerRank',
      location: 'Verified Online Credential',
      period: 'Certified',
      desc: 'Officially certified by HackerRank in C# language fundamentals, object-oriented programming patterns, methods, classes, and structured application development.',
      icon: Award,
      color: '#8B5CF6',
      tags: ['C#', '.NET Architecture', 'OOP Principles', 'Type Systems'],
      certificateUrl: 'https://www.hackerrank.com/certificates/bfff4fc88bf8',
    },
  ];

  const filteredItems = timelineItems.filter((item) => {
    if (activeTab === 'ALL') return true;
    return item.type === activeTab;
  });

  return (
    <section
      id="journey"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-zinc-50 text-zinc-900 border-zinc-200'
          : 'bg-deep-crimson text-white border-red-500/30'
      }`}
    >
      <DiagonalStreaks density="medium" opacity={isLight ? 0.35 : 0.8} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header in Bold Typography */}
        <div className="text-center mb-14">
          <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-2 inline-block mb-1 ${
            isLight ? 'text-amber-700' : 'text-amber-300'
          }`}>
            Milestones &amp; Growth
          </span>
          <h2
            className={`font-impact text-5xl sm:text-7xl lg:text-8xl tracking-tight uppercase leading-none transition-colors ${
              isLight ? 'text-red-600' : 'text-yellow-400 glow-yellow'
            }`}
            style={
              isLight
                ? {
                    color: '#dc2626',
                    textShadow: '0 4px 15px rgba(220, 38, 38, 0.15)',
                  }
                : {
                    color: '#facc15',
                    textShadow: '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 30px rgba(250, 204, 21, 0.6)',
                  }
            }
          >
            JOURNEY &amp; MILESTONES
          </h2>
          <p className={`font-sans text-sm sm:text-base max-w-xl mx-auto mt-2 font-medium transition-colors ${
            isLight ? 'text-zinc-600' : 'text-amber-100/90'
          }`}>
            Academic progression at BIET, collaborative hackathon sprints, and authentic technical certifications.
          </p>

          {/* Tab Selector */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'ALL', label: 'ALL MILESTONES' },
              { id: 'EDUCATION', label: 'ACADEMICS' },
              { id: 'HACKATHONS', label: 'HACKATHONS' },
              { id: 'CERTIFICATIONS', label: 'CERTIFICATIONS' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.id as typeof activeTab);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 ${
                  activeTab === tab.id
                    ? isLight
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/25 scale-105'
                      : 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30 scale-105'
                    : isLight
                    ? 'bg-white text-zinc-700 hover:text-zinc-900 border border-zinc-200'
                    : 'bg-black/60 text-white/80 hover:text-white border border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Track line */}
          <div className={`absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full hidden sm:block ${
            isLight
              ? 'bg-gradient-to-b from-red-500 via-amber-400 to-transparent'
              : 'bg-gradient-to-b from-yellow-400 via-red-500 to-transparent'
          }`} />

          <div className="space-y-8 sm:space-y-12">
            {filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Dot (on desktop) */}
                  <div className={`hidden sm:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 items-center justify-center z-20 shadow-xl ${
                    isLight
                      ? 'bg-white border-red-500 text-red-600'
                      : 'bg-black border-white text-yellow-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Card Content with Crisp Border matching video */}
                  <div className={`w-full sm:w-[46%] ${isEven ? 'sm:pl-8' : 'sm:pr-8'}`}>
                    <div className={`p-6 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform space-y-3 ${
                      isLight
                        ? 'bg-white border-[2.5px] border-zinc-200 shadow-zinc-200/60'
                        : 'bg-black/90 border-[3px] border-white/90 shadow-2xl'
                    }`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-mono-tech uppercase px-2.5 py-1 rounded font-bold ${
                          isLight ? 'bg-red-600 text-white' : 'bg-yellow-400 text-black'
                        }`}>
                          {item.type}
                        </span>
                        <div className={`flex items-center gap-1.5 text-xs font-mono-tech ${
                          isLight ? 'text-zinc-500' : 'text-zinc-400'
                        }`}>
                          <Calendar className={`w-3.5 h-3.5 ${isLight ? 'text-red-500' : 'text-red-400'}`} />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      <h3 className={`font-impact text-xl sm:text-2xl uppercase tracking-wide leading-tight ${
                        isLight ? 'text-zinc-900' : 'text-white'
                      }`}>
                        {item.title}
                      </h3>

                      <div className={`flex items-center gap-2 text-xs font-semibold font-sans ${
                        isLight ? 'text-amber-700' : 'text-amber-300'
                      }`}>
                        <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        <span>{item.institution} &bull; {item.location}</span>
                      </div>

                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        isLight ? 'text-zinc-600' : 'text-zinc-300'
                      }`}>
                        {item.desc}
                      </p>

                      <div className={`flex flex-wrap gap-1.5 pt-2 border-t ${
                        isLight ? 'border-zinc-200' : 'border-white/10'
                      }`}>
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2 py-0.5 rounded ${
                              isLight
                                ? 'bg-zinc-100 border border-zinc-200 text-zinc-700'
                                : 'bg-zinc-900 border border-white/10 text-zinc-300'
                            }`}
                          >
                            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {item.certificateUrl && (
                        <div className="pt-2">
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => soundFx.playClick()}
                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 group cursor-pointer ${
                              isLight
                                ? 'bg-red-50 hover:bg-red-100/80 text-red-700 border border-red-200 hover:border-red-400 shadow-xs'
                                : 'bg-red-950/40 hover:bg-red-900/50 text-red-200 border border-red-500/40 hover:border-red-400 shadow-md shadow-red-950/40'
                            }`}
                          >
                            <Award className="w-3.5 h-3.5 text-red-500 group-hover:scale-110 transition-transform" />
                            <span>VERIFY CERTIFICATE</span>
                            <ExternalLink className="w-3 h-3 opacity-75 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
