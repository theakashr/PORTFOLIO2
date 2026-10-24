import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Copy, 
  Check, 
  ArrowUpRight,
  ExternalLink
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    label: string;
    href: string;
  };
}

const SUGGESTED_PROMPTS = [
  '🚀 What are Akash\'s top featured projects?',
  '🏆 Tell me about his hackathon achievements',
  '⚡ What is his full technical stack?',
  '📜 What verified certifications does he hold?',
  '🎓 Where does Akash study?',
  '📬 How can I contact or hire Akash?',
];

export const AskAkashAIModal: React.FC = () => {
  const { isLight } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome_1',
      sender: 'assistant',
      text: 'Hello! I am Akash\'s Portfolio AI Assistant. Ask me anything about his full-stack & AI projects, hackathon prototypes, verified certifications, or technical background.',
      timestamp: 'Just now',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    const handleOpen = () => {
      soundFx.playClick();
      setIsOpen(true);
    };
    window.addEventListener('open-ask-akash-ai', handleOpen);
    return () => window.removeEventListener('open-ask-akash-ai', handleOpen);
  }, []);

  const generateAnswer = (query: string): { text: string; action?: { label: string; href: string } } => {
    const q = query.toLowerCase().trim();

    // 0. Greetings & Friendly Welcome
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q === 'namaste' ||
      q.startsWith('hi ') ||
      q.startsWith('hello ') ||
      q.startsWith('hey ') ||
      q.includes('good morning') ||
      q.includes('good evening') ||
      q.includes('good afternoon')
    ) {
      return {
        text: '👋 Hello! I am Akash\'s Portfolio AI Assistant.\n\nI can provide verified insights into Akash\'s software engineering projects, technical stack, hackathon awards, verified certifications, or help you connect with him directly.\n\nWhat would you like to know about Akash?',
        action: { label: 'Explore Featured Projects', href: '#projects' },
      };
    }

    // 1. Identity & Who is Akash / Bio
    if (
      q.includes('who is akash') ||
      q.includes('who are you') ||
      q.includes('tell me about yourself') ||
      q.includes('tell me about akash') ||
      q.includes('about him') ||
      q.includes('bio') ||
      q.includes('background') ||
      q.includes('introduce')
    ) {
      return {
        text: '👨‍💻 **Akash R** is a passionate software engineer and 2nd-year Computer Science & Engineering student at **Bapuji Institute of Engineering and Technology (BIET), Davanagere**.\n\nHe specializes in:\n• **Modern Full-Stack Engineering**: React 19, JavaScript, Next.js, Tailwind CSS, Vite\n• **Applied AI & Cognitive Systems**: Google Gemini API, MediaPipe Vision, intelligent agents\n• **Core Systems & Algorithms**: Python, C, C#, Data Structures, Object-Oriented Design\n• **Competitive Prototyping**: Active national hackathon competitor (Hackering 2.0 at RVITM & Hack Genesis)\n\nHe has shipped 6+ complete production web/desktop applications and holds credentials from Google Cloud, IBM, and HackerRank.',
        action: { label: 'Explore Akash\'s Story', href: '#about' },
      };
    }

    // 2. Specific Projects & Architecture
    if (q.includes('rescue') || (q.includes('disaster') && (q.includes('project') || q.includes('app')))) {
      return {
        text: '🚨 **Rescue AI** is a mission-critical disaster response matrix built for real-world catastrophe response. It simulates autonomous drone survey paths, analyzes survivor SOS telemetry with severity scoring, and plans evacuation routes around hazard corridors to minimize latency during the critical golden hour.',
        action: { label: 'Explore Rescue AI Demo', href: 'https://rescueai-ai.vercel.app/' },
      };
    }
    if (q.includes('11shots') || (q.includes('cricket') && (q.includes('project') || q.includes('app') || q.includes('score')))) {
      return {
        text: '🏏 **11Shots** is a full-stack, real-time cricket scoring engine and tournament match hub designed for local and grassroots leagues. Featuring live ball-by-ball updates, automatic striker rotation, Lineguru-inspired match telemetry, and instant player career stats powered by Firebase Firestore.',
        action: { label: 'Launch 11Shots Live App', href: 'https://gully-cricket-app-kappa.vercel.app/' },
      };
    }
    if (q.includes('edupilot') || (q.includes('learning') && q.includes('copilot'))) {
      return {
        text: '🎓 **EduPilot AI** is an adaptive learning operating system & teacher co-pilot. It integrates MediaPipe computer vision for engagement telemetry, parses uploaded PDFs to auto-generate diagnostic quizzes, and builds personalized remediation paths using Next.js 16 and Supabase.',
        action: { label: 'Explore EduPilot AI', href: 'https://edupilot-ai-brown.vercel.app/' },
      };
    }
    if (q.includes('resume') && (q.includes('ai') || q.includes('ats') || q.includes('builder') || q.includes('interview'))) {
      return {
        text: '📄 **ResumeAI** is an ATS resume optimizer and mock interview simulator. It leverages Google Gemini AI to analyze job description keyword compatibility, enhances bullet points into quantified achievements, and runs interactive voice/text interview simulations.',
        action: { label: 'Launch ResumeAI', href: 'https://resume-app-ten-nu.vercel.app/' },
      };
    }
    if (q.includes('health') || (q.includes('medical') && q.includes('predictor'))) {
      return {
        text: '🩺 **AI Health Predictor** is a preventative health risk monitor that evaluates patient vitals, metabolic indicators, and lifestyle metrics to forecast health risks before they develop, generating clinical-grade PDF reports.',
        action: { label: 'View Health Predictor', href: 'https://ai-health-predictor-theta.vercel.app/' },
      };
    }
    if (q.includes('medinex') || q.includes('pharmacy')) {
      return {
        text: '💊 **MEDINEX** is an enterprise desktop pharmacy inventory suite built with Python, SQLite, Electron, and React. It features real-time barcode inventory scanning (<15ms), 30-day early batch expiry alerts, GST billing receipt generation, and financial ledgers.',
        action: { label: 'Inspect MEDINEX in Showcase', href: '#projects' },
      };
    }

    // General Projects
    if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('portfolio') || q.includes('showcase') || q.includes('apps')) {
      return {
        text: '🚀 Akash has architected 6+ major production software applications:\n\n• **Rescue AI**: Disaster coordination & drone routing matrix\n• **11Shots**: Real-time live ball-by-ball cricket scoring hub\n• **EduPilot AI**: Adaptive learning OS with MediaPipe vision\n• **ResumeAI**: ATS scanner & Gemini AI mock interview suite\n• **AI Health Predictor**: Biometric health risk forecasting\n• **MEDINEX**: Pharmacy management & barcode inventory desktop suite\n\nEach project features interactive system architecture diagrams and live demo links!',
        action: { label: 'View All Projects in Showcase', href: '#projects' },
      };
    }

    // 3. Hackathons & Competitions
    if (q.includes('hackathon') || q.includes('hack') || q.includes('competition') || q.includes('award') || q.includes('hackering') || q.includes('rvitm') || q.includes('genesis')) {
      return {
        text: '🏆 Akash is an active competitive hackathon engineer:\n\n1. **Hackering 2.0 (36-Hour National Hackathon)**: Held at RVITM, Bengaluru. Akash competed in Team **HACK CORE**, building high-speed resilient software through a grueling 36-hour sprint.\n2. **Hack Genesis 2026 (National Hackathon)**: Organized by IEEE KLE Technological University with TCS as knowledge partner, creating innovative engineering solutions.\n\nHe holds official verified certificates of participation and achievement for both!',
        action: { label: 'View Hackathons Section', href: '#hackathons' },
      };
    }

    // 4. Technical Skills & Languages
    if (
      q.includes('skill') ||
      q.includes('stack') ||
      q.includes('tech') ||
      q.includes('language') ||
      q.includes('python') ||
      q.includes('react') ||
      q.includes('javascript') ||
      q.includes('c language') ||
      q.includes('c#') ||
      q.includes('sql') ||
      q.includes('firebase') ||
      q.includes('backend') ||
      q.includes('frontend')
    ) {
      return {
        text: '⚡ Akash\'s core technical arsenal includes:\n\n• **Core Languages**: Python, JavaScript, C, C#, SQL\n• **Frontend Engineering**: React 19, Next.js 16, Vite, Tailwind CSS v4, Framer Motion, HTML5 Canvas\n• **Backend & Cloud**: Node.js, Express, Firebase Firestore, Supabase, SQLite, REST APIs, WebSockets\n• **AI & Cognitive Tools**: Google Gemini API, MediaPipe Vision, NLP, Prompt Engineering, Agentic Workflows, NotebookLM\n• **DevOps & Architecture**: Git, GitHub, Vercel, Docker, Clean Architecture',
        action: { label: 'Inspect Interactive Skills', href: '#skills' },
      };
    }

    // 5. Certifications & Badges
    if (
      q.includes('cert') ||
      q.includes('credly') ||
      q.includes('credential') ||
      q.includes('badge') ||
      q.includes('ibm') ||
      q.includes('infosys') ||
      q.includes('hackerrank')
    ) {
      return {
        text: '📜 Akash holds multiple authentic, externally verifiable credentials with high-res certificates:\n\n• **Google Cloud (Credly)**: *Create Your First Gemini Enterprise Application*\n• **IBM SkillsBuild (Credly)**: *AI Fundamentals: Language and Vision in AI* & *AI Fundamentals: Foundations for Understanding AI*\n• **IBM (Credly)**: *Python for Data Science*\n• **Infosys Springboard**: *AI Foundation Certification* & *Introduction to Artificial Intelligence*\n• **HackerRank Certified**: *Python (Basic)*, *Problem Solving (Basic)*, and *C# (Basic)*',
        action: { label: 'View Verified Badges & Certs', href: '#certifications' },
      };
    }

    // 6. Academics & Education
    if (
      q.includes('study') ||
      q.includes('college') ||
      q.includes('school') ||
      q.includes('university') ||
      q.includes('biet') ||
      q.includes('education') ||
      q.includes('degree') ||
      q.includes('academics') ||
      q.includes('cgpa') ||
      q.includes('davanagere')
    ) {
      return {
        text: '🎓 Akash is pursuing a **Bachelor of Engineering (B.E.) in Computer Science & Engineering (2nd Year)** at the prestigious **Bapuji Institute of Engineering and Technology (BIET)** located in Davanagere, Karnataka, India.\n\nHis coursework emphasizes Data Structures, Analysis of Algorithms, Object-Oriented System Design, Computer Architecture, and Discrete Mathematics.',
        action: { label: 'View Academics Section', href: '#academics' },
      };
    }

    // 7. Contact, Hiring & Resume
    if (
      q.includes('contact') ||
      q.includes('hire') ||
      q.includes('email') ||
      q.includes('job') ||
      q.includes('intern') ||
      q.includes('reach') ||
      q.includes('linkedin') ||
      q.includes('github') ||
      q.includes('phone') ||
      q.includes('connect')
    ) {
      return {
        text: '📬 You can connect directly with Akash:\n\n• **Direct Email**: [akashakashr505@gmail.com](mailto:akashakashr505@gmail.com)\n• **LinkedIn**: [linkedin.com/in/theakashr](https://www.linkedin.com/in/theakashr/)\n• **GitHub**: [github.com/theakashr](https://github.com/theakashr)\n• **Location**: Davanagere / Bangalore, Karnataka, India (Open to Remote)\n\nHe responds to emails typically within 24 hours!',
        action: { label: 'Open Direct Message Form', href: '#contact' },
      };
    }

    // 8. GitHub Activity & Contributions
    if (q.includes('contribution') || q.includes('commit') || q.includes('streak') || q.includes('pulse')) {
      return {
        text: '📊 Akash maintains an active shipping velocity on GitHub with **210+ verified contributions** over the past year, an active commit streak, and 14+ public repositories.\n\nYou can inspect his live 52-week contribution heatmap in the Developer Pulse section!',
        action: { label: 'Inspect GitHub Pulse', href: '#github-pulse' },
      };
    }

    // 9. Feedback Form
    if (q.includes('feedback') || q.includes('review') || q.includes('rate')) {
      return {
        text: '⭐ Visitors can share ratings and constructive reviews through the floating **Private Feedback** button on the bottom left. Submissions are dispatched directly to Akash\'s email with a secret owner vault for admin review.',
        action: { label: 'Rate Portfolio', href: '#feedback' },
      };
    }

    // 10. STRICT OUT-OF-SCOPE FALLBACK (Politely declines non-portfolio questions)
    return {
      text: '🚫 **Topic Outside Portfolio Scope**\n\nI am Akash R\'s specialized portfolio AI assistant. I am strictly programmed to answer questions about Akash\'s software engineering projects, technical stack, verified credentials, hackathons, and hiring inquiries.\n\nI cannot assist with general knowledge, unrelated trivia, or off-topic questions.\n\n**Here are topics you can explore about Akash:**\n• 🚀 **Featured Projects** (Rescue AI, 11Shots, EduPilot, ResumeAI)\n• ⚡ **Technical Arsenal** (Python, JavaScript, React, C, C#, SQL)\n• 📜 **Verified Credentials** (Google Cloud, IBM, HackerRank, Infosys)\n• 🏆 **Hackathon Prototyping** (Hackering 2.0 & Hack Genesis)\n• 📬 **Hiring & Direct Contact** (Open for full-stack & AI roles)',
      action: { label: 'Explore Featured Projects', href: '#projects' },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    soundFx.playClick();
    const userMsg: ChatMessage = {
      id: `u_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Realistic typing latency
    setTimeout(() => {
      const response = generateAnswer(query);
      const aiMsg: ChatMessage = {
        id: `a_${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: response.action,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
      soundFx.playChime();
    }, 450);
  };

  const handleCopy = (id: string, text: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearChat = () => {
    soundFx.playClick();
    setMessages([
      {
        id: 'welcome_reset',
        sender: 'assistant',
        text: 'Chat history cleared. What would you like to know about Akash\'s work?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Assistant Launcher Pill (Bottom-Right, stacked neatly above theme dock) */}
      <aside
        aria-label="Ask Akash AI Launcher"
        className={`fixed bottom-20 right-5 z-40 print:hidden select-none transition-all duration-300 ${
          isOpen ? 'opacity-0 pointer-events-none sm:opacity-100 sm:pointer-events-auto' : 'opacity-100'
        }`}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            soundFx.playClick();
            setIsOpen((prev) => !prev);
          }}
          className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 group cursor-pointer ${
            isOpen
              ? 'bg-red-600 text-white border-red-500 shadow-red-600/40'
              : isLight
              ? 'bg-white/95 border-red-200 text-zinc-900 shadow-red-500/10 hover:border-red-400'
              : 'bg-zinc-950/95 border-red-900/60 text-white shadow-red-950/50 hover:border-red-500/80'
          }`}
          title="Chat with Akash's AI Portfolio Assistant"
        >
          <div className="relative">
            <Bot className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-red-500 group-hover:scale-110 transition-transform'}`} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <span className="font-impact text-xs uppercase tracking-wider hidden sm:inline">
            {isOpen ? 'CLOSE AI' : 'ASK AKASH AI'}
          </span>
          <Sparkles className={`w-3.5 h-3.5 ${isOpen ? 'text-white' : 'text-amber-500'}`} />
        </motion.button>
      </aside>

      {/* Expandable Chat Drawer / Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-end justify-center sm:justify-end p-0 sm:p-6 pointer-events-none">
            {/* Backdrop click on mobile & desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                soundFx.playClick();
                setIsOpen(false);
              }}
              className="fixed inset-0 bg-black/70 sm:bg-black/40 backdrop-blur-sm pointer-events-auto z-10"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ type: 'spring', damping: 28, stiffness: 350 }}
              className={`relative z-20 pointer-events-auto w-full sm:w-[420px] flex flex-col rounded-t-[28px] sm:rounded-3xl border-t-2 sm:border-2 shadow-2xl overflow-hidden ${
                isLight
                  ? 'bg-white border-zinc-200 text-zinc-900 shadow-2xl'
                  : 'bg-[#0a0a0f] border-red-900/80 text-white shadow-2xl shadow-black'
              }`}
              style={{
                height: 'min(86dvh, 580px)',
                maxHeight: 'min(90dvh, 600px)',
              }}
            >
              {/* Native mobile drag handle */}
              <div className="w-12 h-1 bg-zinc-300 dark:bg-zinc-700 rounded-full mx-auto mt-2.5 sm:hidden shrink-0" />

              {/* Header */}
              <div className={`px-5 py-3.5 sm:py-4 border-b flex items-center justify-between shrink-0 ${
                isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-md shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-impact text-base uppercase tracking-wider">
                        AKASH AI ASSISTANT
                      </h4>
                      <span className="inline-flex items-center gap-1 text-[9px] font-mono-tech px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-500 font-bold uppercase">
                        ONLINE
                      </span>
                    </div>
                    <p className={`text-[10px] font-mono-tech uppercase ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Grounded on Portfolio &amp; Engineering Skills
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handleClearChat}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-white/10 text-zinc-400'
                    }`}
                    title="Clear Chat"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setIsOpen(false);
                    }}
                    className={`p-2 rounded-xl border transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-white/10 text-zinc-400'
                    }`}
                    title="Close Assistant"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Chat Message List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans overscroll-contain">
                {messages.map((m) => {
                  const isUser = m.sender === 'user';
                  return (
                    <div
                      key={m.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl p-3.5 space-y-2 leading-relaxed ${
                          isUser
                            ? 'bg-red-600 text-white rounded-tr-xs shadow-md'
                            : isLight
                            ? 'bg-zinc-100 border border-zinc-200 text-zinc-800 rounded-tl-xs shadow-xs'
                            : 'bg-zinc-900/90 border border-white/10 text-zinc-200 rounded-tl-xs'
                        }`}
                      >
                        <div className="whitespace-pre-wrap">{m.text}</div>

                        {/* Action Link if provided */}
                        {m.suggestedAction && (
                          <div className="pt-2 border-t border-current/15">
                            <a
                              href={m.suggestedAction.href}
                              onClick={() => {
                                soundFx.playClick();
                                if (m.suggestedAction?.href.startsWith('#')) {
                                  setIsOpen(false);
                                }
                              }}
                              className={`inline-flex items-center gap-1.5 font-impact text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                                isUser
                                  ? 'bg-white text-red-600'
                                  : isLight
                                  ? 'bg-red-600 text-white hover:bg-red-500'
                                  : 'bg-red-600 text-white hover:bg-red-500'
                              }`}
                            >
                              <span>{m.suggestedAction.label}</span>
                              {m.suggestedAction.href.startsWith('#') ? (
                                <ArrowUpRight className="w-3.5 h-3.5" />
                              ) : (
                                <ExternalLink className="w-3.5 h-3.5" />
                              )}
                            </a>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] font-mono-tech text-zinc-400">
                        <span>{m.timestamp}</span>
                        {!isUser && (
                          <button
                            type="button"
                            onClick={() => handleCopy(m.id, m.text)}
                            className="hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors cursor-pointer"
                            title="Copy response"
                          >
                            {copiedId === m.id ? (
                              <Check className="w-3 h-3 text-emerald-500" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}

                {isTyping && (
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono-tech p-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                    <span className="text-[11px] ml-1">Akash AI is typing...</span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Prompts Carousel */}
              <div className={`px-3 py-2 border-t overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none overscroll-contain shrink-0 ${
                isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/40 border-white/5'
              }`}>
                {SUGGESTED_PROMPTS.map((prompt, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSendMessage(prompt)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono-tech uppercase font-semibold border shrink-0 transition-colors cursor-pointer ${
                      isLight
                        ? 'bg-white hover:bg-zinc-100 border-zinc-300 text-zinc-700'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-white/15 text-zinc-300 hover:text-white'
                    }`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>

              {/* Message Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className={`p-3 border-t flex items-center gap-2 shrink-0 ${
                  isLight ? 'bg-white border-zinc-200' : 'bg-zinc-950 border-white/10'
                }`}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, hackathons, skills..."
                  className={`flex-1 px-3.5 py-2.5 rounded-xl border text-base sm:text-xs focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                      : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                  }`}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-red-900/30 flex items-center justify-center shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};