import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Users,
  Flame,
  CheckCircle2,
  Bot,
  Eye,
  X,
} from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const HackathonsSection: React.FC = () => {
  const { isLight } = useTheme();
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    image: string;
    externalUrl?: string;
    issuer: string;
    rankBadge?: string;
  } | null>(null);

  const otherHackathons = [
    {
      title: 'Disaster Management & AI Solution Sprint',
      institution: 'College Tech Innovation Challenge',
      location: 'BIET Davanagere',
      period: '2025',
      desc: 'Architected Rescue AI — an emergency telemetry and aerial triage system designed to automate survivor detection and route drones through catastrophic flood zones.',
      tags: ['Rescue AI', 'Emergency Telemetry', 'AI Triage Routing', 'Geospatial Maps'],
    },
    {
      title: 'Smart India Hackathon (SIH) Ideation Sprint',
      institution: 'Institutional Innovation Council',
      location: 'Karnataka',
      period: '2024 — 2025',
      desc: 'Collaborated in multidisciplinary teams to formulate public-sector software architectures, addressing real-world civic challenges through digital infrastructure.',
      tags: ['Problem Analysis', 'Systems Engineering', 'Collaborative Pitching'],
    },
  ];

  return (
    <section
      id="hackathons"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-white text-zinc-900 border-zinc-200'
          : 'bg-[#050505] text-white border-red-950/60'
      }`}
    >
      <DiagonalStreaks density="high" opacity={isLight ? 0.35 : 0.75} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={`font-script text-2xl sm:text-3xl font-bold tracking-wide -rotate-2 inline-block mb-1 ${
              isLight ? 'text-red-600' : 'text-amber-300'
            }`}>
              Rapid Engineering &amp; Sprints
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
              HACKATHONS &amp; SPRINT BUILDS
            </h2>
            <p className={`font-sans text-sm sm:text-base max-w-2xl mx-auto mt-2 font-medium transition-colors ${
              isLight ? 'text-zinc-600' : 'text-zinc-300'
            }`}>
              High-pressure collaborative hackathons turning complex problems into working code within tight deadlines.
            </p>
          </motion.div>
        </div>

        {/* Featured National & Global Hackathons Grid */}
        <div className="space-y-10 mb-12">
          
          {/* Card 1: HackerRank Orchestrate (Global AI Agent Hackathon) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`max-w-5xl mx-auto rounded-3xl border-[2.5px] p-6 sm:p-9 shadow-2xl relative overflow-hidden transition-all ${
              isLight
                ? 'bg-gradient-to-br from-white via-zinc-50 to-emerald-50/30 border-emerald-300 shadow-zinc-300/60'
                : 'bg-gradient-to-br from-black via-zinc-950 to-emerald-950/30 border-emerald-500/50 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Hackathon Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-mono-tech font-bold uppercase tracking-wider shadow-sm shadow-emerald-600/30">
                    <Flame className="w-3.5 h-3.5" /> GLOBAL AI AGENT HACKATHON
                  </span>
                  <span className="text-xs font-mono-tech text-emerald-600 dark:text-emerald-400 font-bold uppercase flex items-center gap-1 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <Trophy className="w-3.5 h-3.5 text-emerald-500" /> FINAL RANK #1391 / 4,094
                  </span>
                  <span className="text-xs font-mono-tech text-amber-500 font-bold uppercase flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> VERIFIED BY HACKERRANK
                  </span>
                </div>

                <h3 className={`font-impact text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-none ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  HACKERRANK ORCHESTRATE
                </h3>

                <div className="space-y-1">
                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${
                    isLight ? 'text-emerald-800' : 'text-emerald-300'
                  }`}>
                    <Bot className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>HackerRank Global Virtual Hackathon &bull; International Edition</span>
                  </div>
                  <div className={`flex flex-wrap items-center gap-3 text-xs font-mono-tech ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                      October 2026 Edition
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                      <Users className="w-3.5 h-3.5" />
                      4,094 Global Participants
                    </span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Participated in the October 2026 edition of <strong>HackerRank's Orchestrate</strong> by architecting, building, and deploying an autonomous AI agent. Competed against 4,094 software engineers, data scientists, and AI builders worldwide to achieve a verified final rank of <strong>#1391</strong>.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['AI Agents', 'Agentic Workflows', 'Autonomous Systems', 'Prompt Engineering', 'HackerRank Orchestrate', 'Final Rank #1391', 'Global Hackathon'].map((tag, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2.5 py-1 rounded-lg ${
                        isLight
                          ? 'bg-zinc-100 border border-zinc-200 text-zinc-800'
                          : 'bg-zinc-900 border border-white/10 text-zinc-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setPreviewCert({
                        title: "HackerRank Orchestrate Certificate of Achievement",
                        image: "/images/certificates/hackerrank-orchestrate-cert.png",
                        externalUrl: "/images/certificates/hackerrank-orchestrate-cert.png",
                        issuer: "HackerRank",
                        rankBadge: "Final Rank #1391 / 4,094 Global Participants",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-impact text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-900/40 transition-all hover:scale-105 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>VIEW ORCHESTRATE CERTIFICATE</span>
                    <Eye className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  <a
                    href="/images/certificates/hackerrank-orchestrate-cert.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-mono-tech font-bold uppercase tracking-wider border transition-colors ${
                      isLight
                        ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                  >
                    <span>FULL-RES</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Certificate Preview Card */}
              <div className="lg:col-span-5">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setPreviewCert({
                      title: "HackerRank Orchestrate Certificate of Achievement",
                      image: "/images/certificates/hackerrank-orchestrate-cert.png",
                      externalUrl: "/images/certificates/hackerrank-orchestrate-cert.png",
                      issuer: "HackerRank",
                      rankBadge: "Final Rank #1391 / 4,094 Global Participants",
                    });
                  }}
                  className={`w-full text-left block group relative rounded-2xl border-2 overflow-hidden shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${
                    isLight ? 'border-emerald-300 shadow-zinc-300' : 'border-emerald-500/40 shadow-black'
                  }`}
                  title="Click to zoom certificate"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80">
                    <img
                      src="/images/certificates/hackerrank-orchestrate-cert.png"
                      alt="HackerRank Orchestrate Certificate of Achievement - Akash R"
                      className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-[10px] font-mono-tech uppercase font-bold tracking-wider text-emerald-400 block">
                          CERTIFICATE OF ACHIEVEMENT
                        </span>
                        <span className="font-impact text-lg uppercase block leading-none">
                          HACKERRANK ORCHESTRATE &bull; RANK #1391
                        </span>
                        <span className="text-[10px] font-mono-tech text-zinc-300 underline mt-1 inline-flex items-center gap-1">
                          Click to expand certificate in high-res &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </motion.div>

          {/* Card 2: Hackering 2.0 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`max-w-5xl mx-auto rounded-3xl border-[2.5px] p-6 sm:p-9 shadow-2xl relative overflow-hidden transition-all ${
              isLight
                ? 'bg-gradient-to-br from-white via-zinc-50 to-red-50/30 border-red-200 shadow-zinc-300/60'
                : 'bg-gradient-to-br from-black via-zinc-950 to-red-950/30 border-red-600/50 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Hackathon Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-mono-tech font-bold uppercase tracking-wider shadow-sm shadow-red-600/30">
                    <Flame className="w-3.5 h-3.5" /> 36-HOUR NATIONAL HACKATHON
                  </span>
                  <span className="text-xs font-mono-tech text-amber-500 font-bold uppercase flex items-center gap-1">
                    <Trophy className="w-3.5 h-3.5" /> FINAL ROUND PARTICIPANT
                  </span>
                </div>

                <h3 className={`font-impact text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-none ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  HACKERING 2.0
                </h3>

                <div className="space-y-1">
                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${
                    isLight ? 'text-amber-800' : 'text-amber-300'
                  }`}>
                    <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                    <span>RV Institute of Technology and Management (RVITM), Bengaluru</span>
                  </div>
                  <div className={`flex flex-wrap items-center gap-3 text-xs font-mono-tech ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-red-500" />
                      Oct 8 — 10, 2026
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-bold text-red-500">
                      <Users className="w-3.5 h-3.5" />
                      Team: HACK CORE
                    </span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Represented BIET at the national-level final round of <strong>Hackering 2.0</strong>, organized by the Department of ECE &amp; Department of CSE (AI/ML). Competed in a non-stop 36-hour sprint with Team HACK CORE, conceptualizing, coding, and presenting a working software solution to an industry jury.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['36-Hour Sprint', 'Team HACK CORE', 'RVITM Bengaluru', 'AI & Embedded Systems', 'Rapid Prototyping'].map((tag, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2.5 py-1 rounded-lg ${
                        isLight
                          ? 'bg-zinc-100 border border-zinc-200 text-zinc-800'
                          : 'bg-zinc-900 border border-white/10 text-zinc-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setPreviewCert({
                        title: "Hackering 2.0 Certificate of Participation",
                        image: "/images/certificates/hackering-2.0.jpg",
                        externalUrl: "https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing",
                        issuer: "RVITM Bengaluru",
                        rankBadge: "National Final Round Participant",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-900/40 transition-all hover:scale-105 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>VIEW HACKERING 2.0 CERTIFICATE</span>
                    <Eye className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  <a
                    href="https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-mono-tech font-bold uppercase tracking-wider border transition-colors ${
                      isLight
                        ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                  >
                    <span>GOOGLE DRIVE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Certificate Preview Card */}
              <div className="lg:col-span-5">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setPreviewCert({
                      title: "Hackering 2.0 Certificate of Participation",
                      image: "/images/certificates/hackering-2.0.jpg",
                      externalUrl: "https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing",
                      issuer: "RVITM Bengaluru",
                      rankBadge: "National Final Round Participant",
                    });
                  }}
                  className={`w-full text-left block group relative rounded-2xl border-2 overflow-hidden shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${
                    isLight ? 'border-zinc-200 shadow-zinc-300' : 'border-white/20 shadow-black'
                  }`}
                  title="Click to view certificate"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                    <img
                      src="/images/certificates/hackering-2.0.jpg"
                      alt="Hackering 2.0 Certificate of Participation - Akash R"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-[10px] font-mono-tech uppercase font-bold tracking-wider text-amber-400 block">
                          CERTIFICATE OF PARTICIPATION
                        </span>
                        <span className="font-impact text-lg uppercase block leading-none">
                          HACKERING 2.0 &bull; RVITM
                        </span>
                        <span className="text-[10px] font-mono-tech text-zinc-300 underline mt-1 inline-flex items-center gap-1">
                          Click to expand certificate &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </motion.div>

          {/* Card 3: Hack Genesis 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className={`max-w-5xl mx-auto rounded-3xl border-[2.5px] p-6 sm:p-9 shadow-2xl relative overflow-hidden transition-all ${
              isLight
                ? 'bg-gradient-to-br from-white via-zinc-50 to-blue-50/30 border-blue-200 shadow-zinc-300/60'
                : 'bg-gradient-to-br from-black via-zinc-950 to-blue-950/30 border-blue-600/50 shadow-2xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Hackathon Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-mono-tech font-bold uppercase tracking-wider shadow-sm shadow-blue-600/30">
                    <Trophy className="w-3.5 h-3.5" /> IEEE NATIONAL HACKATHON
                  </span>
                  <span className="text-xs font-mono-tech text-amber-500 font-bold uppercase flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> TCS KNOWLEDGE PARTNER
                  </span>
                </div>

                <h3 className={`font-impact text-3xl sm:text-4xl lg:text-5xl uppercase tracking-wide leading-none ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  HACK GENESIS 2026
                </h3>

                <div className="space-y-1">
                  <div className={`flex items-center gap-2 text-xs sm:text-sm font-semibold ${
                    isLight ? 'text-blue-800' : 'text-blue-300'
                  }`}>
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>IEEE Student Branch of KLE Technological University, Belagavi</span>
                  </div>
                  <div className={`flex flex-wrap items-center gap-3 text-xs font-mono-tech ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-500" />
                      Aug 7 — 8, 2026
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1 font-bold text-blue-500">
                      IEEE Bangalore Section &bull; IEEE NKSS
                    </span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}>
                  Participated in <strong>Hack Genesis 2026</strong>, a national-level competitive hackathon organized by the IEEE Student Branch of KLE Technological University, Dr. M.S. Sheshgiri Campus in Belagavi [STB50295], with <strong>Tata Consultancy Services (TCS)</strong> as the official Knowledge Partner.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {['IEEE Hackathon', 'KLE Tech University', 'TCS Knowledge Partner', 'Belagavi', 'National Level'].map((tag, i) => (
                    <span
                      key={i}
                      className={`inline-flex items-center gap-1 text-[11px] font-mono-tech px-2.5 py-1 rounded-lg ${
                        isLight
                          ? 'bg-zinc-100 border border-zinc-200 text-zinc-800'
                          : 'bg-zinc-900 border border-white/10 text-zinc-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setPreviewCert({
                        title: "Hack Genesis 2026 Certificate of Participation",
                        image: "/images/certificates/hack-genesis-2026.jpg",
                        externalUrl: "https://drive.google.com/file/d/1lh-Tn3fe_PzqHunFnGU-C4WVO4wq_F-b/view?usp=sharing",
                        issuer: "IEEE KLE Tech & TCS",
                        rankBadge: "National Level Hackathon Participant",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-impact text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-blue-900/40 transition-all hover:scale-105 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>VIEW HACK GENESIS 2026 CERTIFICATE</span>
                    <Eye className="w-3.5 h-3.5 opacity-80" />
                  </button>

                  <a
                    href="https://drive.google.com/file/d/1lh-Tn3fe_PzqHunFnGU-C4WVO4wq_F-b/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className={`inline-flex items-center gap-1.5 px-4 py-3 rounded-2xl text-xs font-mono-tech font-bold uppercase tracking-wider border transition-colors ${
                      isLight
                        ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-800'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                  >
                    <span>GOOGLE DRIVE</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Column: Certificate Preview Card */}
              <div className="lg:col-span-5">
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setPreviewCert({
                      title: "Hack Genesis 2026 Certificate of Participation",
                      image: "/images/certificates/hack-genesis-2026.jpg",
                      externalUrl: "https://drive.google.com/file/d/1lh-Tn3fe_PzqHunFnGU-C4WVO4wq_F-b/view?usp=sharing",
                      issuer: "IEEE KLE Tech & TCS",
                      rankBadge: "National Level Hackathon Participant",
                    });
                  }}
                  className={`w-full text-left block group relative rounded-2xl border-2 overflow-hidden shadow-xl transition-all hover:scale-[1.02] cursor-pointer ${
                    isLight ? 'border-zinc-200 shadow-zinc-300' : 'border-white/20 shadow-black'
                  }`}
                  title="Click to view certificate"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/50">
                    <img
                      src="/images/certificates/hack-genesis-2026.jpg"
                      alt="Hack Genesis 2026 Certificate of Participation - Akash R"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <span className="text-[10px] font-mono-tech uppercase font-bold tracking-wider text-blue-400 block">
                          CERTIFICATE OF PARTICIPATION
                        </span>
                        <span className="font-impact text-lg uppercase block leading-none">
                          HACK GENESIS 2026 &bull; IEEE KLE TECH
                        </span>
                        <span className="text-[10px] font-mono-tech text-zinc-300 underline mt-1 inline-flex items-center gap-1">
                          Click to expand certificate &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Other Hackathons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {otherHackathons.map((hack, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-6 rounded-2xl border-[2px] transition-all hover:scale-[1.02] space-y-3 ${
                isLight
                  ? 'bg-zinc-50 border-zinc-200 shadow-sm hover:border-zinc-300'
                  : 'bg-black/80 border-white/10 shadow-xl hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono-tech uppercase px-2.5 py-0.5 rounded font-bold ${
                  isLight ? 'bg-zinc-200 text-zinc-800' : 'bg-zinc-800 text-zinc-200'
                }`}>
                  SPRINT
                </span>
                <span className={`text-xs font-mono-tech flex items-center gap-1 ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  <Calendar className="w-3.5 h-3.5 text-red-500" />
                  {hack.period}
                </span>
              </div>

              <h4 className={`font-impact text-xl sm:text-2xl uppercase tracking-wide leading-tight ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                {hack.title}
              </h4>

              <div className={`text-xs font-semibold ${isLight ? 'text-amber-700' : 'text-amber-300'}`}>
                {hack.institution} &bull; {hack.location}
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                {hack.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-current/10">
                {hack.tags.map((t, i) => (
                  <span
                    key={i}
                    className={`text-[10px] font-mono-tech px-2 py-0.5 rounded ${
                      isLight ? 'bg-white border border-zinc-200 text-zinc-700' : 'bg-zinc-900 border border-white/10 text-zinc-300'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* High-Resolution Certificate Zoom Lightbox Modal */}
      <AnimatePresence>
        {previewCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewCert(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative max-w-4xl w-full max-h-[92vh] rounded-3xl overflow-hidden border-2 shadow-2xl flex flex-col ${
                isLight ? 'bg-white border-zinc-200 text-zinc-900' : 'bg-zinc-950 border-white/20 text-white'
              }`}
            >
              {/* Modal Header */}
              <div
                className={`p-4 sm:p-5 flex items-center justify-between border-b ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
                }`}
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-mono-tech uppercase font-bold text-red-600 dark:text-red-400 block">
                    {previewCert.issuer} &bull; OFFICIAL HACKATHON CERTIFICATE
                  </span>
                  <h3 className="font-impact text-lg sm:text-2xl uppercase tracking-wide leading-tight mt-0.5">
                    {previewCert.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    soundFx.playClick();
                    setPreviewCert(null);
                  }}
                  className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-700'
                      : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                  }`}
                  aria-label="Close certificate preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body / Certificate Preview */}
              <div className="p-3 sm:p-6 overflow-y-auto max-h-[70vh] flex items-center justify-center bg-black/50">
                <img
                  src={previewCert.image}
                  alt={previewCert.title}
                  className="max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
                />
              </div>

              {/* Modal Footer */}
              <div
                className={`p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
                }`}
              >
                <div className="flex items-center gap-2 text-xs font-mono-tech">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className={isLight ? 'text-zinc-600 font-semibold' : 'text-zinc-300'}>
                    {previewCert.rankBadge || 'Verified Competitive Hackathon Credential'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {previewCert.externalUrl && (
                    <a
                      href={previewCert.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono-tech font-bold uppercase tracking-wider transition-all shadow-md shadow-red-600/30"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>OPEN FULL-RES / DRIVE</span>
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setPreviewCert(null);
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider border transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800'
                        : 'bg-white/10 hover:bg-white/20 border-white/20 text-white'
                    }`}
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
