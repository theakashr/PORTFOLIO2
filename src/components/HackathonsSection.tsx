import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, ExternalLink, Award, Users, Flame, CheckCircle2 } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const HackathonsSection: React.FC = () => {
  const { isLight } = useTheme();

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

        {/* Featured Card: Hackering 2.0 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`max-w-5xl mx-auto rounded-3xl border-[2.5px] p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-10 transition-all ${
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
              <div className="flex flex-wrap gap-2 pt-2">
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
              <div className="pt-3">
                <a
                  href="https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-red-900/40 transition-all hover:scale-105"
                >
                  <Award className="w-4 h-4" />
                  <span>VIEW OFFICIAL HACKERING 2.0 CERTIFICATE</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                </a>
              </div>
            </div>

            {/* Right Column: Certificate Preview Card */}
            <div className="lg:col-span-5">
              <a
                href="https://drive.google.com/file/d/16lsvFiNwuyKM6luev1DgETdYcQCmRNXt/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`block group relative rounded-2xl border-2 overflow-hidden shadow-xl transition-all hover:scale-[1.02] ${
                  isLight ? 'border-zinc-200 shadow-zinc-300' : 'border-white/20 shadow-black'
                }`}
                title="Click to view full certificate on Google Drive"
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
                        Open high-res PDF on Google Drive &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

          </div>
        </motion.div>

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
    </section>
  );
};
