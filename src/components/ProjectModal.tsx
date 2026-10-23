import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Layers, Sparkles, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

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
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { isLight } = useTheme();

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

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
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
          className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl z-10 custom-scrollbar border-2 transition-colors ${
            isLight
              ? 'bg-white border-zinc-300 text-zinc-900 shadow-zinc-900/20'
              : 'bg-zinc-950 border-red-600/40 text-white shadow-red-950/60'
          }`}
        >
          {/* Top Header Bar */}
          <div className={`sticky top-0 z-20 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b ${
            isLight
              ? 'bg-white/95 border-zinc-200'
              : 'bg-zinc-950/95 border-white/10'
          }`}>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
              <span className={`text-xs font-mono-tech tracking-wider uppercase font-bold ${
                isLight ? 'text-red-600' : 'text-red-400'
              }`}>
                {project.category}
              </span>
            </div>
            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className={`p-2 rounded-full border transition-colors ${
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
          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Tagline */}
            <div>
              <h2 className={`font-impact text-3xl sm:text-5xl uppercase tracking-wider mb-2 ${
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
            <div className="space-y-4">
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
                className={`ml-auto px-5 py-3 rounded-xl text-xs font-mono-tech uppercase transition-colors ${
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
