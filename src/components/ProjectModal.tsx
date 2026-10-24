import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Database, 
  Network, 
  Monitor, 
  ArrowRight,
  Workflow,
  Clock,
  ArrowDownRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export interface ArchitectureNode {
  id: string;
  title: string;
  layer: 'CLIENT' | 'GATEWAY' | 'AI_ENGINE' | 'DATASTORE';
  tech: string;
  role: string;
  input: string;
  output: string;
  latency?: string;
}

export interface ProjectArchitecture {
  summary: string;
  flowDirection: string;
  nodes: ArchitectureNode[];
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  previewImage: string;
  liveUrl?: string;
  githubUrl?: string;
  highlights: { label: string; value: string }[];
  architecture?: ProjectArchitecture;
}

const getDefaultArchitecture = (project: ProjectData): ProjectArchitecture => {
  if (project.architecture) return project.architecture;

  if (project.id === 'ai-health-predictor') {
    return {
      summary: 'High-throughput preventative healthcare pipeline processing patient vitals and biomarker time-series into predictive risk projections and automated clinical PDF summaries.',
      flowDirection: 'Client Sensors & Form ➔ Next.js API Routes ➔ Predictive Risk Inference ➔ Firebase Document & Telemetry Sync',
      nodes: [
        {
          id: 'client',
          title: 'Client UI & Vitals Input',
          layer: 'CLIENT',
          tech: 'Next.js 16, React 19, Recharts, Tailwind CSS',
          role: 'Interactive patient vitals telemetry collector, responsive symptom questionnaire, and real-time biometric risk visualization dashboard.',
          input: 'User inputs & biometric indicators (Blood Pressure, Heart Rate, BMI, Glucose, Lifestyle metrics)',
          output: 'Validated JSON payload with client-side sanity bounds',
          latency: '< 16ms render (60fps)',
        },
        {
          id: 'gateway',
          title: 'Next.js Server Actions & API',
          layer: 'GATEWAY',
          tech: 'Next.js Server Actions, Edge Runtime, Zod',
          role: 'Performs schema validation, normalizes biomarker distributions, and secures session tokens against tampering.',
          input: 'POST /api/predict/health { vitals, history, factors }',
          output: 'Sanitized biometric vectors ready for model inference',
          latency: '< 45ms',
        },
        {
          id: 'ai_engine',
          title: 'Predictive Health Risk Engine',
          layer: 'AI_ENGINE',
          tech: 'Statistical ML Classification, Multi-Factor Scoring',
          role: 'Evaluates biomarker correlations against clinical epidemiological thresholds to compute cardiac, metabolic, and lifestyle risk indexes.',
          input: 'Normalized biometric parameter vector',
          output: 'Compound Risk Score (0-100), alert thresholds, preventive care recommendations',
          latency: '< 110ms',
        },
        {
          id: 'datastore',
          title: 'Firebase Telemetry & PDF Gen',
          layer: 'DATASTORE',
          tech: 'Firebase Firestore, @react-pdf/renderer',
          role: 'Persists patient health history snapshots over time and generates clinical-grade downloadable PDF risk summaries.',
          input: 'Complete risk assessment & patient telemetry',
          output: 'Encrypted Firestore record & compiled PDF report',
          latency: '< 180ms document compile',
        },
      ],
    };
  }

  if (project.id === 'edupilot-ai') {
    return {
      summary: 'Edge-to-cloud adaptive learning pipeline utilizing MediaPipe vision telemetry for student attention tracking and PDF parsing for AI-generated diagnostic quizzes.',
      flowDirection: 'Webcam Attention Stream ➔ Next.js API & PDF Engine ➔ Gemini Concept Analysis ➔ Dual Firebase & Supabase Sync',
      nodes: [
        {
          id: 'client',
          title: 'MediaPipe Vision & Student Hub',
          layer: 'CLIENT',
          tech: 'React 19, MediaPipe Face & Pose Vision, Tailwind CSS',
          role: 'Edge-computed attentiveness telemetry running real-time facial landmark detection directly in-browser to respect privacy.',
          input: 'Live webcam video feed (processed client-side, never transmitted over wire)',
          output: 'Focus vectors: attentiveness score (0-1), eye-gaze tracking, blink rate',
          latency: '< 30ms on-device inference',
        },
        {
          id: 'gateway',
          title: 'Next.js 16 Gateway & PDF Parser',
          layer: 'GATEWAY',
          tech: 'Next.js 16 App Router, Unpdf Server Engine',
          role: 'Extracts structured textbook content, chapter headings, and learning objectives from uploaded teacher PDFs.',
          input: 'Multipart PDF document upload',
          output: 'Structured markdown tokens & curriculum hierarchy',
          latency: '< 250ms parse',
        },
        {
          id: 'ai_engine',
          title: 'Teacher Co-Pilot & Quiz AI',
          layer: 'AI_ENGINE',
          tech: 'Gemini 1.5/2.0 API, Prompt Engineering',
          role: 'Synthesizes targeted diagnostic quizzes, identifies student concept gaps, and auto-generates personalized review worksheets.',
          input: 'Chapter text + student mastery history',
          output: 'Adaptive MCQ quiz arrays, difficulty tiers, concept explanation cards',
          latency: '< 450ms streaming response',
        },
        {
          id: 'datastore',
          title: 'Supabase & Firebase Sync',
          layer: 'DATASTORE',
          tech: 'Supabase PostgreSQL & Firebase Cloud Store',
          role: 'Dual-cloud persistence keeping student progress records, classroom attendance rosters, and teacher analytics dashboards synchronized in real time.',
          input: 'Quiz performance vectors & engagement logs',
          output: 'Instant classroom leaderboard and progress report sync',
          latency: '< 60ms realtime sync',
        },
      ],
    };
  }

  if (project.id === 'ai-resume-builder') {
    return {
      summary: 'Dual-model career pipeline performing ATS keyword vector comparison and real-time Gemini AI mock interview generation.',
      flowDirection: 'Candidate Dashboard ➔ Edge Server Processing ➔ Gemini AI Matcher & Interviewer ➔ Supabase Cloud Profile Sync',
      nodes: [
        {
          id: 'client',
          title: 'Resume Builder & Voice Canvas',
          layer: 'CLIENT',
          tech: 'Next.js 16, React, Web Speech API, Tailwind CSS',
          role: 'Multi-step resume builder, instant preview canvas, and interactive microphone-driven mock interview simulator.',
          input: 'Candidate experience, resume bullet points, job description text, speech input',
          output: 'Formatted resume state tree & transcribed interview responses',
          latency: '< 16ms interactive UI',
        },
        {
          id: 'gateway',
          title: 'Next.js Edge API & Validator',
          layer: 'GATEWAY',
          tech: 'Next.js API Routes, Zod Schema Validation',
          role: 'Validates resume schema structures, filters invalid job keywords, and enforces token bounds before LLM inference.',
          input: 'POST /api/ats/analyze { resumeText, jobDescription }',
          output: 'Sanitized semantic token arrays',
          latency: '< 35ms',
        },
        {
          id: 'ai_engine',
          title: 'Gemini AI ATS & Interview Model',
          layer: 'AI_ENGINE',
          tech: 'Google Gemini Pro / Flash API, Vector Analysis',
          role: 'Compares semantic resume embeddings against target job requisitions, optimizes bullet points into quantified impact metrics, and generates dynamic behavioral interview questions.',
          input: 'Job description requirements + candidate bullet points',
          output: 'ATS Match Score (0-100%), missing keywords list, tailored mock interview rubrics',
          latency: '< 350ms streaming tokens',
        },
        {
          id: 'datastore',
          title: 'Supabase & PDF Generation',
          layer: 'DATASTORE',
          tech: 'Supabase PostgreSQL, jsPDF / Serverless Canvas',
          role: 'Stores versioned resume templates, interview scorecards, and compiles downloadable ATS-compliant PDFs.',
          input: 'Compiled resume data structure',
          output: 'Instant ATS PDF download & saved profile version',
          latency: '< 150ms export',
        },
      ],
    };
  }

  if (project.id === 'rescue-ai') {
    return {
      summary: 'Mission-critical disaster response matrix synchronizing survivor SOS geotags, drone aerial survey telemetry, and hospital triage routing.',
      flowDirection: 'Survivor SOS Beacon ➔ WebSocket Routing Gateway ➔ Geospatial Triage & Drone Optimizer ➔ Distributed Emergency Ledger',
      nodes: [
        {
          id: 'client',
          title: 'Survivor SOS & Tactical Map',
          layer: 'CLIENT',
          tech: 'React 19, Leaflet, Google Maps API, WebSockets',
          role: 'Real-time tactical geospatial map displaying survivor heatmaps, drone telemetry paths, and hospital bed capacities.',
          input: 'GPS coordinates, battery status, survivor emergency status code',
          output: 'P2P beacon signals & interactive map interactions',
          latency: '< 20ms rendering',
        },
        {
          id: 'gateway',
          title: 'WebSocket Realtime Gateway',
          layer: 'GATEWAY',
          tech: 'Node.js, Express, WebSocket Server, Socket.io',
          role: 'Bi-directional low-latency pub/sub message broker distributing emergency coordinates across first-responder mobile units.',
          input: 'High-frequency telemetry packets from drones and rescue crews',
          output: 'Broadcast events to emergency dispatch consoles',
          latency: '< 15ms broadcast latency',
        },
        {
          id: 'ai_engine',
          title: 'Triage Severity & Flight Path AI',
          layer: 'AI_ENGINE',
          tech: 'Dijkstra / A* Geospatial Pathfinding, Triage ML',
          role: 'Prioritizes survivor medical triage urgency, computes obstacle-free drone flight paths around flood/rubble zones, and dispatches the closest suitable vehicle.',
          input: 'Geospatial hazard corridor coordinates + survivor vital state',
          output: 'Optimal evacuation routes & drone waypoint sequences',
          latency: '< 60ms route optimization',
        },
        {
          id: 'datastore',
          title: 'Distributed Emergency Ledger',
          layer: 'DATASTORE',
          tech: 'IndexedDB Offline Cache & Cloud Database',
          role: 'Ensures zero data loss during network blackouts via local-first mesh persistence with automatic cloud reconciliation once connectivity is restored.',
          input: 'Disaster event logs & survivor triage status changes',
          output: 'Immutable audit trail for emergency authorities',
          latency: '< 10ms local persistence',
        },
      ],
    };
  }

  if (project.id === '11shots') {
    return {
      summary: 'High-throughput live scoring architecture with ball-by-ball Firestore atomic transaction writes and reactive viewer scoreboards.',
      flowDirection: 'Scorer Mobile Interface ➔ Scoring Rules & State Machine ➔ Firestore Atomic Writes ➔ Instant Broadcast Match Feed',
      nodes: [
        {
          id: 'client',
          title: 'Live Scorer UI & Spectator View',
          layer: 'CLIENT',
          tech: 'Next.js, React, Tailwind CSS, Web Audio Synthesizer',
          role: 'Optimized touch-first scoring pad for umpires with rapid button actions (runs, boundaries, extras, wickets) and spectator scoreboard.',
          input: 'Umpire touch inputs & match events',
          output: 'Atomic ball event (runCount, batsmanId, bowlerId, extraType)',
          latency: '< 10ms tap response',
        },
        {
          id: 'gateway',
          title: 'Cricket Match State Machine',
          layer: 'GATEWAY',
          tech: 'JavaScript In-Memory State Machine, Validation Logic',
          role: 'Enforces cricket laws: automatic striker rotation on odd runs, over-end strike change, bowler max-over limits, and run-rate computation.',
          input: 'Current match state + new ball action',
          output: 'Deterministic updated innings score, run-rate, and player stats',
          latency: '< 5ms rule execution',
        },
        {
          id: 'ai_engine',
          title: 'Analytics & Win Predictor',
          layer: 'AI_ENGINE',
          tech: 'Dynamic Run-Rate Engine, Historical Match Analytics',
          role: 'Calculates live required run rate, projected scores, boundary percentage distributions, and dynamic match momentum indicators.',
          input: 'Target score, current over, wickets remaining, pitch trend',
          output: 'Live win probability %, projected totals, wagon wheel telemetry',
          latency: '< 25ms',
        },
        {
          id: 'datastore',
          title: 'Firebase Firestore Realtime DB',
          layer: 'DATASTORE',
          tech: 'Firebase Firestore Atomic Transactions',
          role: 'Guarantees sequential match updates with zero race conditions and pushes sub-second scoreboard updates to hundreds of spectators simultaneously.',
          input: 'Atomic transaction payload for innings score',
          output: 'Realtime WebSocket push to all connected viewers',
          latency: '< 40ms cloud broadcast',
        },
      ],
    };
  }

  // Fallback for medinex and others
  return {
    summary: `${project.title} is built on a modular architecture featuring decoupled presentation, strict business rule verification, and durable storage.`,
    flowDirection: 'Client Terminal / Web UI ➔ Processing Controller ➔ Business Logic & State Evaluation ➔ Encrypted Storage Engine',
    nodes: [
      {
        id: 'client',
        title: 'Client Interface Layer',
        layer: 'CLIENT',
        tech: project.techStack.slice(0, 2).join(', '),
        role: 'Responsive user interface handling real-time user inputs, state transitions, and presentation rendering.',
        input: 'User interactions & events',
        output: 'Validated client-side requests',
        latency: '< 16ms 60fps',
      },
      {
        id: 'gateway',
        title: 'API & Routing Gateway',
        layer: 'GATEWAY',
        tech: 'REST / Server Actions, Route Handlers',
        role: 'Handles request routing, payload schema validation, authorization, and rate limiting.',
        input: 'Client HTTP/WebSocket request',
        output: 'Sanitized parameters for core business logic',
        latency: '< 40ms',
      },
      {
        id: 'ai_engine',
        title: 'Core Processing / Logic Engine',
        layer: 'AI_ENGINE',
        tech: project.techStack.includes('Python') ? 'Python Engine' : 'JavaScript Business Logic',
        role: 'Executes primary algorithms, data transformations, and state evaluations.',
        input: 'Structured task parameters',
        output: 'Processed result models',
        latency: '< 120ms',
      },
      {
        id: 'datastore',
        title: 'Persistence & Cloud Store',
        layer: 'DATASTORE',
        tech: project.techStack.find((t) => ['Firebase', 'Supabase', 'SQLite'].includes(t)) || 'Cloud Database',
        role: 'Persists application state, user sessions, and operational logs with atomic guarantees.',
        input: 'Normalized data records',
        output: 'Persistent indexed document/row',
        latency: '< 60ms',
      },
    ],
  };
};

const LAYER_CONFIG = {
  CLIENT: {
    label: 'LAYER 1: CLIENT & UI',
    icon: Monitor,
    borderClass: 'border-blue-500/40 bg-blue-500/10 text-blue-500',
  },
  GATEWAY: {
    label: 'LAYER 2: API & GATEWAY',
    icon: Network,
    borderClass: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-500',
  },
  AI_ENGINE: {
    label: 'LAYER 3: AI & COMPUTE',
    icon: Cpu,
    borderClass: 'border-amber-500/40 bg-amber-500/10 text-amber-500',
  },
  DATASTORE: {
    label: 'LAYER 4: CLOUD & PERSISTENCE',
    icon: Database,
    borderClass: 'border-red-500/40 bg-red-500/10 text-red-500',
  },
};

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
  initialTab?: 'overview' | 'architecture';
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, initialTab = 'overview' }) => {
  const { isLight } = useTheme();
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture'>(initialTab);
  const [selectedNodeId, setSelectedNodeId] = useState<string>('client');

  useEffect(() => {
    if (project) {
      setActiveTab(initialTab);
      setSelectedNodeId('client');
    }
  }, [project, initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const architecture = getDefaultArchitecture(project);
  const selectedNode = architecture.nodes.find((n) => n.id === selectedNodeId) || architecture.nodes[0];
  const LayerIcon = LAYER_CONFIG[selectedNode.layer].icon;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundFx.playClick();
            onClose();
          }}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className={`relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl shadow-2xl z-10 custom-scrollbar border-2 transition-colors ${
            isLight
              ? 'bg-white border-zinc-300 text-zinc-900 shadow-zinc-900/20'
              : 'bg-[#08080c] border-red-600/40 text-white shadow-red-950/60'
          }`}
        >
          {/* Top Header Bar */}
          <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b ${
            isLight
              ? 'bg-white/95 border-zinc-200'
              : 'bg-[#08080c]/95 border-white/10'
          }`}>
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className={`text-xs font-mono-tech tracking-wider uppercase font-bold ${
                isLight ? 'text-red-600' : 'text-red-400'
              }`}>
                {project.category}
              </span>
            </div>

            {/* View Mode Segmented Switcher */}
            <div className={`inline-flex items-center p-1 rounded-full border text-xs font-mono-tech ${
              isLight ? 'bg-zinc-100 border-zinc-300' : 'bg-black/80 border-white/15'
            }`}>
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab('overview');
                }}
                className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'overview'
                    ? 'bg-red-600 text-white shadow-sm'
                    : isLight
                    ? 'text-zinc-600 hover:text-zinc-900'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                OVERVIEW
              </button>
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab('architecture');
                }}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'bg-red-600 text-white shadow-sm'
                    : isLight
                    ? 'text-zinc-600 hover:text-zinc-900'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Workflow className="w-3.5 h-3.5" />
                <span>ARCHITECTURE</span>
              </button>
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className={`p-2 rounded-full border transition-colors cursor-pointer ${
                isLight
                  ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-900 border-zinc-200'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border-white/10'
              }`}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Title & Tagline */}
            <div>
              <h2 className={`font-impact text-3xl sm:text-5xl uppercase tracking-wider mb-1.5 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}>
                {project.title}
              </h2>
              <p className={`font-sans text-sm sm:text-base font-semibold ${
                isLight ? 'text-amber-700' : 'text-amber-300'
              }`}>
                {project.tagline}
              </p>
            </div>

            {/* TAB 1: OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="space-y-7">
                {/* Project Image Preview */}
                <div className={`relative rounded-2xl overflow-hidden shadow-2xl border-[3px] ${
                  isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-black border-white/90'
                }`}>
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="w-full h-auto object-cover max-h-[420px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-xs font-mono-tech bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 text-zinc-300">
                      {project.subtitle}
                    </span>
                    <button
                      type="button"
                      onClick={() => {
                        soundFx.playClick();
                        setActiveTab('architecture');
                      }}
                      className="pointer-events-auto px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5 cursor-pointer"
                    >
                      <Workflow className="w-3.5 h-3.5" />
                      <span>INSPECT ARCHITECTURE &rarr;</span>
                    </button>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.highlights.map((h, i) => (
                    <div
                      key={i}
                      className={`p-3.5 rounded-xl border ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-200'
                          : 'bg-zinc-900/60 border-white/10'
                      }`}
                    >
                      <span className={`text-[10px] font-mono-tech uppercase block mb-1 ${
                        isLight ? 'text-zinc-500' : 'text-zinc-400'
                      }`}>
                        {h.label}
                      </span>
                      <span className={`font-impact text-lg sm:text-xl block ${
                        isLight ? 'text-zinc-900' : 'text-white'
                      }`}>
                        {h.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Deep Description */}
                <div className="space-y-3">
                  <h3 className={`font-impact text-xl tracking-wide uppercase flex items-center gap-2 ${
                    isLight ? 'text-red-600' : 'text-red-400'
                  }`}>
                    <Terminal className="w-5 h-5 text-red-500" />
                    SYSTEM ARCHITECTURE &amp; PURPOSE
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    isLight ? 'text-zinc-700' : 'text-zinc-300'
                  }`}>
                    {project.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h3 className={`font-impact text-xl tracking-wide uppercase flex items-center gap-2 ${
                    isLight ? 'text-red-600' : 'text-red-400'
                  }`}>
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    CORE CAPABILITIES
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-200'
                            : 'bg-zinc-900/40 border-white/5'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className={`text-xs sm:text-sm ${
                          isLight ? 'text-zinc-700' : 'text-zinc-300'
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="space-y-3">
                  <h3 className={`font-impact text-xl tracking-wide uppercase flex items-center gap-2 ${
                    isLight ? 'text-red-600' : 'text-red-400'
                  }`}>
                    <Layers className="w-5 h-5 text-blue-500" />
                    TECH STACK
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech ${
                          isLight
                            ? 'bg-red-50 border border-red-200 text-red-700 font-semibold'
                            : 'bg-red-950/40 border border-red-500/30 text-red-200'
                        }`}
                      >
                        #{tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SYSTEM ARCHITECTURE & FLOW (FEATURE 5) */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                {/* Architecture Summary Banner */}
                <div className={`p-5 rounded-2xl border ${
                  isLight
                    ? 'bg-red-50/70 border-red-200 text-zinc-800'
                    : 'bg-red-950/30 border-red-900/60 text-zinc-200'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Workflow className="w-4 h-4 text-red-500" />
                    <span className="text-[11px] font-mono-tech uppercase font-bold tracking-wider text-red-500">
                      PIPELINE SPECIFICATION &bull; HIGH LEVEL TOPOLOGY
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {architecture.summary}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-current/15 text-[11px] font-mono-tech text-zinc-500 dark:text-zinc-400">
                    <strong>Flow Direction:</strong> {architecture.flowDirection}
                  </div>
                </div>

                {/* Interactive Multi-Node Pipeline */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono-tech uppercase font-bold tracking-wider text-zinc-400">
                      CLICK A NODE TO INSPECT TELEMETRY &amp; SCHEMAS:
                    </span>
                    <span className="text-[10px] font-mono-tech text-red-500 font-bold uppercase">
                      4-LAYER DISTRIBUTED MODEL
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {architecture.nodes.map((node, i) => {
                      const isSelected = node.id === selectedNode.id;
                      const config = LAYER_CONFIG[node.layer];
                      const NodeIcon = config.icon;

                      return (
                        <div
                          key={node.id}
                          onClick={() => {
                            soundFx.playClick();
                            setSelectedNodeId(node.id);
                          }}
                          className={`p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer relative flex flex-col justify-between ${
                            isSelected
                              ? 'border-red-500 shadow-lg shadow-red-500/20 scale-[1.03]'
                              : isLight
                              ? 'bg-zinc-50 border-zinc-200 hover:border-zinc-400'
                              : 'bg-zinc-950 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${config.borderClass}`}>
                                <NodeIcon className="w-4 h-4" />
                              </div>
                              <span className="text-[10px] font-mono-tech text-zinc-400 font-bold">
                                0{i + 1}
                              </span>
                            </div>

                            <span className="text-[9px] font-mono-tech uppercase text-zinc-400 font-semibold block">
                              {config.label}
                            </span>
                            <h4 className={`font-impact text-base uppercase tracking-wide mt-0.5 leading-snug ${
                              isSelected ? 'text-red-500' : isLight ? 'text-zinc-900' : 'text-white'
                            }`}>
                              {node.title}
                            </h4>
                          </div>

                          <div className="mt-4 pt-2 border-t border-current/10 flex items-center justify-between text-[10px] font-mono-tech text-zinc-500">
                            <span className="truncate mr-1 font-semibold">{node.tech}</span>
                            {isSelected ? (
                              <ArrowDownRight className="w-3.5 h-3.5 text-red-500 shrink-0" />
                            ) : (
                              <ArrowRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Selected Node Deep-Dive Inspection Card */}
                <div className={`p-6 rounded-2xl border-2 space-y-4 shadow-xl transition-all ${
                  isLight
                    ? 'bg-white border-red-300 shadow-zinc-200'
                    : 'bg-[#100707] border-red-600/50 shadow-black'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-current/10">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${LAYER_CONFIG[selectedNode.layer].borderClass}`}>
                        <LayerIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono-tech uppercase text-red-500 font-bold block">
                          NODE TELEMETRY &bull; {LAYER_CONFIG[selectedNode.layer].label}
                        </span>
                        <h3 className="font-impact text-2xl uppercase tracking-wide">
                          {selectedNode.title}
                        </h3>
                      </div>
                    </div>

                    {selectedNode.latency && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-tech border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 font-bold uppercase w-fit">
                        <Clock className="w-3.5 h-3.5" />
                        <span>Latency SLA: {selectedNode.latency}</span>
                      </div>
                    )}
                  </div>

                  {/* Primary Responsibility */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono-tech uppercase text-zinc-400 font-bold block">
                      ARCHITECTURAL RESPONSIBILITY:
                    </span>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                      {selectedNode.role}
                    </p>
                  </div>

                  {/* Input & Output Schemas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div className={`p-3.5 rounded-xl border text-xs font-mono-tech space-y-1 ${
                      isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
                    }`}>
                      <div className="flex items-center gap-1 text-blue-500 font-bold uppercase text-[10px]">
                        <span>INPUT DATA SIGNATURE &bull; PAYLOAD</span>
                      </div>
                      <p className={`text-[11px] leading-relaxed break-words ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                        {selectedNode.input}
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-xl border text-xs font-mono-tech space-y-1 ${
                      isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
                    }`}>
                      <div className="flex items-center gap-1 text-emerald-500 font-bold uppercase text-[10px]">
                        <span>OUTPUT DATA FORMAT &bull; RESPONSE</span>
                      </div>
                      <p className={`text-[11px] leading-relaxed break-words ${isLight ? 'text-zinc-700' : 'text-zinc-300'}`}>
                        {selectedNode.output}
                      </p>
                    </div>
                  </div>

                  {/* Stack specification */}
                  <div className="pt-2 text-[11px] font-mono-tech flex items-center gap-2">
                    <span className="text-zinc-400 uppercase font-semibold">Technologies Utilized:</span>
                    <span className={`font-bold ${isLight ? 'text-zinc-900' : 'text-white'}`}>
                      {selectedNode.tech}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Action Links */}
            <div className={`pt-4 border-t flex flex-wrap items-center gap-4 ${
              isLight ? 'border-zinc-200' : 'border-white/10'
            }`}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-105"
                >
                  <span>LAUNCH LIVE DEMO</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-900'
                      : 'bg-zinc-900 hover:bg-zinc-800 border-white/10 text-white'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onClose();
                }}
                className={`ml-auto px-5 py-3 rounded-xl text-xs font-mono-tech uppercase transition-colors cursor-pointer ${
                  isLight
                    ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
                    : 'bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                Close Preview
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};