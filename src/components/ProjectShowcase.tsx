import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Sparkles, ArrowUpRight } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { ProjectModal, type ProjectData } from './ProjectModal';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const ProjectShowcase: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'AI' | 'FULLSTACK' | 'SPORTS_DESKTOP'>('ALL');
  const { isLight } = useTheme();

  const projects: ProjectData[] = [
    {
      id: 'ai-health-predictor',
      title: 'AI Health Predictor',
      subtitle: 'Predictive Health Risk Monitor & Analytics',
      category: 'AI & HealthTech',
      tagline: 'Vitals analysis, risk forecasting, and personalized preventive healthcare.',
      description: 'An advanced predictive healthcare platform powered by AI that analyzes patient vitals, lifestyle indicators, and biomarkers to forecast future health risks before they develop.',
      longDescription: 'AI Health Predictor transforms preventative medicine by shifting healthcare from reactive treatment to proactive risk forecasting. Built with Next.js and Firebase, it evaluates biometric parameters, metabolic vitals, and lifestyle metrics through predictive modeling to deliver dynamic risk scores, comprehensive PDF medical reports, and personalized lifestyle intervention roadmaps.',
      features: [
        'Multi-factor AI health risk calculator analyzing vitals, lifestyle, and biometric factors',
        'Dynamic risk projection charts and health trend forecasting using Recharts',
        'Automated clinical-grade PDF health summary report generation (@react-pdf)',
        'Secure patient assessment telemetry & historical tracking backed by Firebase'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Recharts', 'Framer Motion'],
      previewImage: '/images/projects/ai-health-predictor.svg',
      liveUrl: 'https://ai-health-predictor-theta.vercel.app/',
      githubUrl: 'https://github.com/theakashr/ai-health-predictor',
      highlights: [
        { label: 'Risk Model', value: 'AI Predictive' },
        { label: 'Telemetry', value: 'Firebase Sync' },
        { label: 'Reports', value: 'Instant PDF' },
        { label: 'Architecture', value: 'Next.js App' },
      ],
    },
    {
      id: 'rescue-ai',
      title: 'Rescue AI',
      subtitle: 'Disaster Response & Triage Command Matrix',
      category: 'AI & Emergency Systems',
      tagline: 'Survivor geolocation, drone route planning, and emergency resource dispatch.',
      description: 'A mission-critical disaster response coordination system utilizing AI to analyze survivor SOS telemetry, prioritize medical triage, and orchestrate rescue assets.',
      longDescription: 'Engineered for real-world catastrophe response, Rescue AI aggregates flood, earthquake, and urban hazard sensor streams. It simulates drone aerial survey trajectories, auto-generates safe evacuation routes around hazard corridors, and coordinates emergency vehicles in real-time, reducing response latency during the critical golden hour.',
      features: [
        'Geospatial SOS heatmap with automated medical triage severity scoring',
        'Autonomous drone telemetry & aerial obstacle mapping simulation',
        'Multi-agency dispatch ledger (Ambulances, Boats, Aerial units)',
        'Offline-first mesh network syncing for low-connectivity zones'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Leaflet', 'Google Maps API', 'WebSockets', 'Tailwind CSS'],
      previewImage: '/images/projects/rescue-ai.svg',
      liveUrl: 'https://rescueai-ai.vercel.app/',
      githubUrl: 'https://github.com/FuGen-India-Private-Ltd/rescue-ai',
      highlights: [
        { label: 'Dispatch Speed', value: '3.4x Faster' },
        { label: 'Map Engine', value: 'Geospatial' },
        { label: 'Telemetry', value: 'Real-time' },
        { label: 'Hackathon', value: 'Top Finalist' },
      ],
    },
    {
      id: 'medinex',
      title: 'MEDINEX',
      subtitle: 'Pharmacy Management & Inventory Desktop Suite',
      category: 'Desktop & Enterprise',
      tagline: 'Batch tracking, expiry alerts, and automated prescription billing.',
      description: 'A comprehensive pharmacy management application engineered for retail and hospital dispensaries, featuring automated stock forecasting and barcode processing.',
      longDescription: 'MEDINEX streamlines daily pharmacy operations by eradicating expired stock loss and dispensing delays. Built with a fast local-first architecture, it handles rapid barcode scanning, multi-tier tax computations, batch expiry alerts 30 days prior to invalidation, and automated supplier replenishment logs.',
      features: [
        'Real-time barcode inventory scanner with sub-50ms lookup',
        'Early expiry warning matrix with automatic batch deprecation',
        'GST-compliant billing terminal with instant receipt generation',
        'Comprehensive profit/loss and supplier ledger reporting'
      ],
      techStack: ['Python', 'SQLite', 'Electron', 'React', 'Tailwind CSS', 'Chart.js'],
      previewImage: '/images/projects/medinex.svg',
      liveUrl: 'https://medinex-suite.vercel.app',
      githubUrl: 'https://github.com/theakashr/medinex-suite',
      highlights: [
        { label: 'Inventory Capacity', value: '50k+ SKUs' },
        { label: 'Search Latency', value: '<15ms' },
        { label: 'Database', value: 'SQLite Encrypted' },
        { label: 'Platform', value: 'Cross-Platform' },
      ],
    },
    {
      id: '11shots',
      title: '11Shots',
      subtitle: 'Real-Time Gully Cricket Scoring & Match Hub',
      category: 'Sports Tech & Real-Time Web',
      tagline: 'Live ball-by-ball scoring, dynamic player stats, and instant match sharing.',
      description: 'A modern, full-stack cricket scoring and tournament match management application designed for street and local cricket leagues with real-time Firebase syncing.',
      longDescription: '11Shots revolutionizes grassroots cricket by replacing manual scoring disputes with a streamlined digital scoreboard. Featuring an intuitive ball-by-ball live tracker, automatic striker rotation, over-completion workflows, Lineguru-inspired match dashboards, and live player career statistics, it gives local tournaments an international broadcast feel.',
      features: [
        'Live ball-by-ball scoring engine with real-time Firestore synchronization',
        'Automatic striker/non-striker rotation and extras/over calculations',
        'Lineguru-style live match statistics, run-rate tracker, and team scorecards',
        'Instant social sharing and match summary export for players and teams'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase Firestore', 'Vercel'],
      previewImage: '/images/projects/11shots.svg',
      liveUrl: 'https://gully-cricket-app-kappa.vercel.app/',
      githubUrl: 'https://github.com/theakashr/gully-cricket-app',
      highlights: [
        { label: 'Scoring Engine', value: 'Ball-by-Ball' },
        { label: 'Sync Latency', value: 'Real-Time' },
        { label: 'Platform', value: 'Web / Mobile' },
        { label: 'Deployments', value: '80+ Builds' },
      ],
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI') return p.category.includes('AI');
    if (activeFilter === 'FULLSTACK') return p.techStack.includes('React') || p.techStack.includes('Next.js');
    if (activeFilter === 'SPORTS_DESKTOP') return p.category.includes('Sports') || p.category.includes('Desktop');
    return true;
  });

  return (
    <section
      id="projects"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-white text-zinc-900 border-zinc-200'
          : 'bg-deep-crimson text-white border-red-500/30'
      }`}
    >
      {/* 45-degree diagonal red and pink streaks from reference video */}
      <DiagonalStreaks density="high" opacity={isLight ? 0.35 : 0.9} />

      {/* Decorative Aperture Gradient Wipe at top */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[220px] pointer-events-none rounded-full transition-opacity ${
          isLight ? 'bg-red-500/10 blur-3xl' : 'bg-red-500/20 blur-3xl'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* SECTION HEADER: Giant Bold Typography */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 backdrop-blur-md transition-colors ${
              isLight
                ? 'bg-red-50 border border-red-200 text-red-700'
                : 'bg-black/40 border border-white/20 text-white'
            }`}
          >
            <Sparkles className={`w-4 h-4 animate-spin ${isLight ? 'text-red-500' : 'text-amber-300'}`} style={{ animationDuration: '6s' }} />
            <span className="text-xs font-mono-tech tracking-widest uppercase font-bold">
              FEATURED PROJECTS • WORKS '26
            </span>
          </motion.div>

          {/* THE GIANT CONDENSED HEADING */}
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                    textShadow: '0 4px 15px rgba(0, 0, 0, 0.9), 0 0 35px rgba(250, 204, 21, 0.65)',
                  }
            }
          >
            FEATURED WORKS
          </motion.h2>

          <p className={`text-sm sm:text-base font-sans max-w-2xl mx-auto mt-3 font-medium transition-colors ${
            isLight ? 'text-zinc-600' : 'text-amber-100/90'
          }`}>
            High-performance web apps, AI systems, and digital craftsmanship engineered by Akash R.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'ALL', label: 'ALL WORKS' },
              { id: 'AI', label: 'AI & INTELLIGENCE' },
              { id: 'FULLSTACK', label: 'FULL-STACK APPS' },
              { id: 'SPORTS_DESKTOP', label: 'SPORTS & ENTERPRISE' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveFilter(tab.id as typeof activeFilter);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-mono-tech uppercase font-bold tracking-wider transition-all duration-200 ${
                  activeFilter === tab.id
                    ? isLight
                      ? 'bg-red-600 text-white shadow-lg shadow-red-500/25 scale-105'
                      : 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/30 scale-105'
                    : isLight
                    ? 'bg-zinc-100 text-zinc-700 hover:text-zinc-900 hover:bg-zinc-200 border border-zinc-200'
                    : 'bg-black/50 text-white/80 hover:text-white hover:bg-black/80 border border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS SHOWCASE GRID: Tilted Cards with Crisp Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, idx) => {
            const tiltAngle = idx % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className={`group relative rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.02] ${tiltAngle} overflow-hidden ${
                  isLight
                    ? 'bg-white border-[3px] border-zinc-200 hover:border-red-500 shadow-zinc-200/60'
                    : 'bg-black border-[3.5px] border-white/95'
                }`}
              >
                {/* Realistic macOS/Browser Window Mockup Chrome (Reference Video 00:18) */}
                <div className={`w-full px-4 py-2.5 flex items-center justify-between border-b text-[10px] font-mono-tech transition-colors ${
                  isLight
                    ? 'bg-zinc-100/90 border-zinc-200 text-zinc-500'
                    : 'bg-[#150404] border-white/10 text-zinc-400'
                }`}>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shadow-xs" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block shadow-xs" />
                  </div>
                  <div className={`px-3 py-0.5 rounded-md border truncate max-w-[180px] sm:max-w-[220px] ${
                    isLight
                      ? 'bg-white border-zinc-200 text-zinc-600'
                      : 'bg-black/60 border-white/10 text-zinc-400'
                  }`}>
                    https://akash-r.dev/{project.id}
                  </div>
                  <span className="text-[9px] uppercase font-bold text-red-500/80">
                    WORKS '26
                  </span>
                </div>

                {/* Top Media Container */}
                <div className={`relative aspect-[16/10] w-full overflow-hidden ${isLight ? 'bg-zinc-100' : 'bg-zinc-950'}`}>
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md backdrop-blur-md text-xs font-mono-tech font-bold uppercase shadow-md ${
                      isLight
                        ? 'bg-white/90 text-red-700 border border-red-200'
                        : 'bg-black/80 text-amber-300 border border-amber-400/30'
                    }`}>
                      <Sparkles className={`w-3 h-3 ${isLight ? 'text-red-600' : 'text-amber-400'}`} />
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Quick Actions Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-xs">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(project);
                      }}
                      className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2.5 rounded-xl font-impact tracking-wider text-sm uppercase shadow-xl transition-transform hover:scale-110"
                    >
                      <Eye className="w-4 h-4" />
                      <span>INSPECT DETAILS</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          soundFx.playClick();
                        }}
                        className="p-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black shadow-xl transition-transform hover:scale-110"
                        title="Open Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Details Body */}
                <div className={`p-6 border-t-2 space-y-4 transition-colors ${
                  isLight
                    ? 'bg-zinc-50 border-zinc-200'
                    : 'bg-gradient-to-b from-[#180505] to-[#0c0202] border-white/10'
                }`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className={`font-impact text-2xl sm:text-3xl uppercase tracking-wide transition-colors ${
                        isLight ? 'text-zinc-900 group-hover:text-red-600' : 'text-white group-hover:text-yellow-400'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs font-mono-tech tracking-wider uppercase ${
                        isLight ? 'text-zinc-500' : 'text-zinc-400'
                      }`}>
                        {project.subtitle}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(project);
                      }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all shrink-0 ${
                        isLight
                          ? 'bg-white hover:bg-red-600 hover:text-white text-zinc-700 border border-zinc-200 shadow-sm'
                          : 'bg-white/10 hover:bg-yellow-400 hover:text-black text-white border border-white/20'
                      }`}
                      title="View Project Architecture"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>

                  <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-300'
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono-tech font-medium ${
                          isLight
                            ? 'bg-white border border-zinc-200 text-zinc-700 shadow-xs'
                            : 'bg-black/60 border border-white/15 text-zinc-300'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className={`px-2 py-1 rounded text-[10px] font-mono-tech ${
                        isLight
                          ? 'bg-red-100/70 border border-red-200 text-red-700 font-semibold'
                          : 'bg-red-950/40 border border-red-500/30 text-red-300'
                      }`}>
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Bottom Action Footer */}
                  <div className={`pt-3 border-t flex items-center justify-between text-xs ${
                    isLight ? 'border-zinc-200' : 'border-white/10'
                  }`}>
                    <span className={`font-mono-tech text-[11px] font-semibold ${
                      isLight ? 'text-red-700' : 'text-amber-300/90'
                    }`}>
                      {project.highlights[0].label}: {project.highlights[0].value}
                    </span>

                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(project);
                      }}
                      className={`font-bold font-mono-tech uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
                        isLight ? 'text-zinc-900 hover:text-red-600' : 'text-white hover:text-yellow-400'
                      }`}
                    >
                      <span>EXPLORE SPECS</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:px-8 sm:py-4 rounded-2xl backdrop-blur-md transition-colors ${
            isLight
              ? 'bg-zinc-100 border-2 border-zinc-300 text-zinc-800'
              : 'bg-black/60 border-2 border-white/20 text-zinc-300'
          }`}>
            <span className="text-xs sm:text-sm font-mono-tech uppercase">
              Need to inspect more repositories or view live architectures?
            </span>
            <a
              href="https://github.com/theakashr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFx.playClick()}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl font-impact tracking-wider text-xs uppercase shadow-lg transition-all hover:scale-105 ${
                isLight
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-red-500/20'
                  : 'bg-yellow-400 hover:bg-yellow-300 text-black shadow-yellow-400/20'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>EXPLORE ALL ON GITHUB</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
