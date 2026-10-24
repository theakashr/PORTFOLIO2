import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Terminal, Code2, Cpu, Eye, FileText, X, Sparkles } from 'lucide-react';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export interface CredentialItem {
  id: string;
  type: 'CREDLY' | 'HACKERRANK' | 'INFOSYS';
  title: string;
  issuer: string;
  platform: 'Credly' | 'HackerRank' | 'Infosys Springboard';
  url: string;
  badgeImage?: string;
  certificateImage?: string;
  pdfUrl?: string;
  icon?: React.ElementType;
  accentColor: string;
  badgeTag: string;
  description: string;
  skills: string[];
}

export const CertificationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'INFOSYS' | 'CREDLY' | 'HACKERRANK'>('ALL');
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    image: string;
    pdfUrl?: string;
    verifyUrl: string;
    issuer: string;
  } | null>(null);
  const { isLight } = useTheme();

  const credentials: CredentialItem[] = [
    // Infosys Springboard Certifications
    {
      id: 'infosys-intro-ai',
      type: 'INFOSYS',
      title: 'Introduction to Artificial Intelligence',
      issuer: 'Infosys Springboard',
      platform: 'Infosys Springboard',
      url: 'https://verify.onwingspan.com',
      certificateImage: '/images/certificates/infosys-intro-to-ai.jpg',
      pdfUrl: '/certificates/infosys-intro-to-ai.pdf',
      accentColor: '#0070AD',
      badgeTag: 'COURSE COMPLETION CERTIFICATE',
      description:
        'Certified completion of foundational Artificial Intelligence disciplines including knowledge representation, machine learning paradigms, search algorithms, heuristic evaluation, and ethical AI deployment.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Search Algorithms', 'Neural Networks', 'Problem Solving', 'AI Ethics'],
    },
    {
      id: 'infosys-ai-foundation',
      type: 'INFOSYS',
      title: 'Artificial Intelligence Foundation Certification',
      issuer: 'Infosys Springboard',
      platform: 'Infosys Springboard',
      url: 'https://verify.onwingspan.com',
      certificateImage: '/images/certificates/infosys-ai-foundation.jpg',
      pdfUrl: '/certificates/infosys-ai-foundation.pdf',
      accentColor: '#0070AD',
      badgeTag: 'CERTIFICATE OF ACHIEVEMENT',
      description:
        'Comprehensive assessment validating deep core competency in AI architectures, supervised and unsupervised learning algorithms, model evaluation metrics, deep learning concepts, and cognitive computing systems.',
      skills: ['AI Foundations', 'Cognitive Computing', 'Supervised Learning', 'Model Evaluation', 'Deep Learning', 'Pattern Recognition'],
    },

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
      id: 'bba667df-6cdf-4a1b-b26a-1d60a51b0bf6',
      type: 'CREDLY',
      title: 'AI Fundamentals: Language and Vision in AI',
      issuer: 'IBM SkillsBuild',
      platform: 'Credly',
      url: 'https://www.credly.com/badges/bba667df-6cdf-4a1b-b26a-1d60a51b0bf6',
      badgeImage: '/images/certificates/ibm-ai-fundamentals-badge.png',
      certificateImage: '/images/certificates/ibm-ai-language-vision-cert.jpg',
      pdfUrl: '/certificates/ibm-ai-language-vision.pdf',
      accentColor: '#0F62FE',
      badgeTag: 'IBM VERIFIED CREDENTIAL',
      description:
        'Demonstrates applied knowledge of artificial intelligence in real-world contexts, including how AI processes language and images (NLP & Computer Vision), distinguishing automation from intelligent agents, and evaluating ethical AI implications.',
      skills: ['Artificial Intelligence', 'Natural Language Processing (NLP)', 'Computer Vision', 'Intelligent Agents', 'AI Ethics', 'Generative AI'],
    },
    {
      id: '8dcd5b5b-6522-47c2-b51c-570b2b4f96da',
      type: 'CREDLY',
      title: 'AI Fundamentals: Foundations for Understanding AI',
      issuer: 'IBM SkillsBuild',
      platform: 'Credly',
      url: 'https://www.credly.com/badges/8dcd5b5b-6522-47c2-b51c-570b2b4f96da',
      badgeImage: '/images/certificates/ibm-ai-foundations-badge.png',
      certificateImage: '/images/certificates/ibm-ai-foundations-cert.jpg',
      pdfUrl: '/certificates/ibm-ai-foundations.pdf',
      accentColor: '#0F62FE',
      badgeTag: 'IBM VERIFIED CREDENTIAL',
      description:
        'Validates foundational knowledge of artificial intelligence, core machine learning paradigms, deep learning, neural network functioning, AI ethics principles, and responsible generative AI tool implementation.',
      skills: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'AI Ethics', 'Cognitive Computing'],
    },
    {
      id: '99d13e72-0d63-4184-9a65-130a1e9648f2',
      type: 'CREDLY',
      title: 'Python for Data Science',
      issuer: 'IBM',
      platform: 'Credly',
      url: 'https://www.credly.com/badges/99d13e72-0d63-4184-9a65-130a1e9648f2',
      badgeImage: '/images/certificates/ibm-python-data-science-badge.png',
      certificateImage: '/images/certificates/ibm-python-data-science-cert.jpg',
      pdfUrl: '/certificates/ibm-python-data-science.pdf',
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
      certificateImage: '/images/certificates/hackerrank-python-basic-cert.jpg',
      pdfUrl: '/certificates/hackerrank-python-basic.pdf',
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
      certificateImage: '/images/certificates/hackerrank-problem-solving-basic-cert.jpg',
      pdfUrl: '/certificates/hackerrank-problem-solving-basic.pdf',
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
      certificateImage: '/images/certificates/hackerrank-c-sharp-basic-cert.jpg',
      pdfUrl: '/certificates/hackerrank-c-sharp-basic.pdf',
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

  const infosysCount = credentials.filter((c) => c.type === 'INFOSYS').length;
  const credlyCount = credentials.filter((c) => c.type === 'CREDLY').length;
  const hackerrankCount = credentials.filter((c) => c.type === 'HACKERRANK').length;

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
              Authentic, externally verifiable credentials issued by Infosys Springboard, Google Cloud, IBM, and HackerRank.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
              {[
                { id: 'ALL', label: `ALL CREDENTIALS (${credentials.length})` },
                { id: 'INFOSYS', label: `INFOSYS SPRINGBOARD (${infosysCount})` },
                { id: 'CREDLY', label: `CREDLY BADGES (${credlyCount})` },
                { id: 'HACKERRANK', label: `HACKERRANK CERTS (${hackerrankCount})` },
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
            const isInfosys = item.type === 'INFOSYS';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`rounded-3xl border-[2.5px] p-6 sm:p-7 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] group ${
                  isLight
                    ? 'bg-white border-zinc-200 hover:border-red-400 shadow-zinc-200/70'
                    : 'bg-black/85 border-white/80 hover:border-red-500 shadow-2xl'
                }`}
              >
                {/* Top Half */}
                <div className="space-y-4">
                  {/* Badge Header Row */}
                  <div className="flex items-center justify-between">
                    {/* Badge Image / Icon */}
                    {isCredly && item.badgeImage ? (
                      <div className="w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-current/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-110 shadow-md">
                        <img
                          src={item.badgeImage}
                          alt={`${item.title} Badge`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : isInfosys ? (
                      <div className="w-14 h-14 rounded-2xl border border-sky-500/40 bg-sky-500/10 flex items-center justify-center text-[#0070AD] transition-transform group-hover:scale-110 shadow-md">
                        <Sparkles className="w-7 h-7" />
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

                  {/* Certificate Image Thumbnail */}
                  {item.certificateImage && (
                    <div
                      onClick={() => {
                        soundFx.playClick();
                        setPreviewCert({
                          title: item.title,
                          image: item.certificateImage!,
                          pdfUrl: item.pdfUrl,
                          verifyUrl: item.url,
                          issuer: item.issuer,
                        });
                      }}
                      className="relative rounded-2xl overflow-hidden border border-current/10 group/img cursor-pointer aspect-[16/11] bg-black/5 dark:bg-black/40 shadow-inner"
                      title="Click to zoom certificate"
                    >
                      <img
                        src={item.certificateImage}
                        alt={`${item.title} Certificate`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/img:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 text-white p-3 text-center">
                        <Eye className="w-6 h-6 text-white" />
                        <span className="text-xs font-impact tracking-wider">CLICK TO EXPAND CERTIFICATE</span>
                      </div>
                    </div>
                  )}

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

                {/* Bottom Verification & Actions */}
                <div className="pt-6 mt-6 border-t border-current/10 space-y-2">
                  {item.certificateImage ? (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setPreviewCert({
                            title: item.title,
                            image: item.certificateImage!,
                            pdfUrl: item.pdfUrl,
                            verifyUrl: item.url,
                            issuer: item.issuer,
                          });
                        }}
                        className="py-2.5 px-3 rounded-xl font-impact text-xs uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>PREVIEW</span>
                      </button>
                      <a
                        href={item.pdfUrl || item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        className={`py-2.5 px-3 rounded-xl font-impact text-xs uppercase tracking-wider text-white flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md ${
                          isCredly
                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/30'
                            : isInfosys
                            ? 'bg-[#0070AD] hover:bg-[#005a8c] shadow-sky-900/20'
                            : item.type === 'HACKERRANK'
                            ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30'
                            : 'bg-red-600 hover:bg-red-500 shadow-red-600/30'
                        }`}
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>{isCredly ? 'VERIFY' : 'VIEW PDF'}</span>
                        <ExternalLink className="w-3 h-3 opacity-80" />
                      </a>
                    </div>
                  ) : (
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
                  )}
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
            All badges &amp; certificates are registered to <strong>Akash R</strong> with authentic verification via Infosys Springboard, Credly, and HackerRank.
          </span>
        </div>

      </div>

      {/* Interactive Certificate Modal Preview */}
      <AnimatePresence>
        {previewCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setPreviewCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className={`relative z-10 max-w-4xl w-full max-h-[92vh] max-h-[92dvh] overflow-y-auto rounded-3xl border-[2.5px] p-4 sm:p-6 shadow-2xl flex flex-col ${
                isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-[#0a0a0f] border-white/20 text-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-4 border-b border-current/10">
                <div>
                  <span className="text-[11px] font-mono-tech uppercase tracking-wider text-red-500 font-bold block">
                    {previewCert.issuer} &bull; OFFICIAL CERTIFICATE
                  </span>
                  <h3 className="font-impact text-xl sm:text-2xl uppercase tracking-wide mt-0.5">
                    {previewCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setPreviewCert(null);
                  }}
                  className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image Viewer */}
              <div className="my-4 overflow-auto rounded-2xl border border-current/10 bg-black/5 dark:bg-black/50 flex items-center justify-center p-2">
                <img
                  src={previewCert.image}
                  alt={previewCert.title}
                  className="w-full h-auto max-h-[62vh] object-contain rounded-xl shadow-lg"
                />
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>
                    {previewCert.verifyUrl.includes('wingspan')
                      ? 'Scan QR on certificate or verify at verify.onwingspan.com'
                      : previewCert.verifyUrl.includes('hackerrank')
                      ? 'Official skill certificate verified on HackerRank'
                      : 'Authentic digital credential verified on Credly platform'}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {previewCert.pdfUrl && (
                    <a
                      href={previewCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="px-4 py-2.5 rounded-xl text-xs font-impact uppercase tracking-wider bg-zinc-800 hover:bg-zinc-700 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>OPEN FULL PDF</span>
                    </a>
                  )}
                  <a
                    href={previewCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    className={`px-4 py-2.5 rounded-xl text-xs font-impact uppercase tracking-wider text-white flex items-center gap-1.5 transition-colors cursor-pointer shadow-lg ${
                      previewCert.verifyUrl.includes('credly')
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-blue-600/30'
                        : previewCert.verifyUrl.includes('hackerrank')
                        ? 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30'
                        : 'bg-[#0070AD] hover:bg-[#005a8c] shadow-sky-900/30'
                    }`}
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>
                      VERIFY ON{' '}
                      {previewCert.verifyUrl.includes('credly')
                        ? 'CREDLY'
                        : previewCert.verifyUrl.includes('hackerrank')
                        ? 'HACKERRANK'
                        : 'WINGSPAN'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
