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
    const q = query.toLowerCase();

    // 1. Projects
    if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('portfolio')) {
      if (q.includes('rescue') || q.includes('disaster') || q.includes('emergency')) {
        return {
          text: '🚨 **Rescue AI** is a mission-critical disaster response matrix built for real-world catastrophe response. It simulates autonomous drone survey paths, analyzes survivor SOS telemetry with severity scoring, and plans evacuation routes around hazard corridors to minimize latency during the critical golden hour.',
          action: { label: 'Explore Rescue AI Demo', href: 'https://rescueai-ai.vercel.app/' },
        };
      }
      if (q.includes('11shots') || q.includes('cricket') || q.includes('sports')) {
        return {
          text: '🏏 **11Shots** is a full-stack, real-time cricket scoring engine and tournament match hub designed for local and grassroots leagues. Featuring live ball-by-ball updates, automatic striker rotation, Lineguru-inspired match telemetry, and instant player career stats powered by Firebase Firestore.',
          action: { label: 'Launch 11Shots Live App', href: 'https://gully-cricket-app-kappa.vercel.app/' },
        };
      }
      if (q.includes('edupilot') || q.includes('education') || q.includes('learning')) {
        return {
          text: '🎓 **EduPilot AI** is an adaptive learning operating system & teacher co-pilot. It integrates MediaPipe computer vision for engagement telemetry, parses uploaded PDFs to auto-generate diagnostic quizzes, and builds personalized remediation paths using Next.js 16 and Supabase.',
          action: { label: 'Explore EduPilot AI', href: 'https://edupilot-ai-brown.vercel.app/' },
        };
      }
      if (q.includes('resume') || q.includes('career') || q.includes('interview')) {
        return {
          text: '📄 **ResumeAI** is an ATS resume optimizer and mock interview simulator. It leverages Google Gemini AI to analyze job description keyword compatibility, enhances bullet points into quantified achievements, and runs interactive voice/text interview simulations.',
          action: { label: 'Launch ResumeAI', href: 'https://resume-app-ten-nu.vercel.app/' },
        };
      }
      if (q.includes('health') || q.includes('medical') || q.includes('doctor')) {
        return {
          text: '🩺 **AI Health Predictor** is a preventative health risk monitor that evaluates patient vitals, metabolic indicators, and lifestyle metrics to forecast health risks before they develop, generating clinical-grade PDF reports.',
          action: { label: 'View Health Predictor', href: 'https://ai-health-predictor-theta.vercel.app/' },
        };
      }
      return {
        text: 'Akash has architected 6+ major production software applications:\n\n• **Rescue AI**: Disaster coordination & drone routing matrix\n• **11Shots**: Real-time live ball-by-ball cricket scoring hub\n• **EduPilot AI**: Adaptive learning OS with MediaPipe vision\n• **ResumeAI**: ATS scanner & Gemini AI mock interview suite\n• **AI Health Predictor**: Biometric health risk forecasting\n• **MEDINEX**: Pharmacy management & barcode inventory desktop suite',
        action: { label: 'View All Projects in Showcase', href: '#projects' },
      };
    }

    // 2. Hackathons
    if (q.includes('hackathon') || q.includes('hack') || q.includes('competition') || q.includes('award')) {
      return {
        text: '🏆 Akash is an active competitive hackathon engineer:\n\n1. **Hackering 2.0 (36-Hour National Hackathon)**: Held at RVITM, Bengaluru. Akash competed in Team **HACK CORE**, building high-speed resilient software through a grueling 36-hour sprint.\n2. **Hack Genesis 2026 (National Hackathon)**: Organized by IEEE KLE Technological University with TCS as knowledge partner, creating innovative engineering solutions.\n\nHe has official verified certificates of participation and achievement for both!',
        action: { label: 'View Hackathons Section', href: '#hackathons' },
      };
    }

    // 3. Technical Skills
    if (q.includes('skill') || q.includes('stack') || q.includes('tech') || q.includes('language') || q.includes('python') || q.includes('react')) {
      return {
        text: '⚡ Akash\'s core technical arsenal includes:\n\n• **Core Languages**: Python, JavaScript, C, C#, SQL\n• **Frontend Engineering**: React 19, Next.js 16, Vite, Tailwind CSS v4, Framer Motion, HTML5 Canvas\n• **Backend & Cloud**: Node.js, Express, Firebase Firestore, Supabase, SQLite, REST APIs, WebSockets\n• **AI & Cognitive Tools**: Google Gemini API, MediaPipe Vision, NLP, Prompt Engineering, Agentic Workflows, NotebookLM\n• **DevOps & Architecture**: Git, GitHub, Vercel, Docker, Clean Architecture',
        action: { label: 'Inspect Interactive Skills', href: '#skills' },
      };
    }

    // 4. Certifications
    if (q.includes('cert') || q.includes('credly') || q.includes('credential') || q.includes('badge') || q.includes('ibm') || q.includes('infosys')) {
      return {
        text: '📜 Akash holds multiple authentic, externally verifiable credentials:\n\n• **IBM SkillsBuild (Credly)**: *AI Fundamentals: Language and Vision in AI* & *AI Fundamentals: Foundations for Understanding AI*\n• **Google Cloud (Credly)**: *Create Your First Gemini Enterprise Application*\n• **IBM (Credly)**: *Python for Data Science*\n• **Infosys Springboard**: *AI Foundation Certification* & *Introduction to Artificial Intelligence*\n• **HackerRank Certified**: *Python (Basic)*, *Problem Solving (Basic)*, and *C# (Basic)*',
        action: { label: 'View Verified Badges', href: '#certifications' },
      };
    }

    // 5. Academics & Education
    if (q.includes('study') || q.includes('college') || q.includes('school') || q.includes('university') || q.includes('biet') || q.includes('education') || q.includes('degree')) {
      return {
        text: '🎓 Akash is pursuing a **Bachelor of Engineering (B.E.) in Computer Science & Engineering (2nd Year)** at the prestigious **Bapuji Institute of Engineering and Technology (BIET)** located in Davanagere, Karnataka, India.\n\nHis coursework emphasizes Data Structures, Analysis of Algorithms, Object-Oriented System Design, Computer Architecture, and Discrete Mathematics.',
        action: { label: 'View Academics Section', href: '#academics' },
      };
    }

    // 6. Contact & Hiring
    if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('job') || q.includes('intern') || q.includes('reach')) {
      return {
        text: '📬 You can connect directly with Akash:\n\n• **Direct Email**: [akashakashr505@gmail.com](mailto:akashakashr505@gmail.com)\n• **LinkedIn**: [linkedin.com/in/theakashr](https://www.linkedin.com/in/theakashr/)\n• **GitHub**: [github.com/theakashr](https://github.com/theakashr)\n• **Location**: Davanagere / Bangalore, Karnataka, India (Open to Remote)\n\nHe responds to emails typically within 24 hours!',
        action: { label: 'Open Direct Message Form', href: '#contact' },
      };
    }

    // Default Fallback
    return {
      text: `Thanks for asking! Akash is a software engineer and AI enthusiast specializing in modern full-stack web applications (React 19, JavaScript, Next.js) and applied AI solutions (Gemini API, Computer Vision, Agentic Workflows).\n\nFeel free to ask me about his **projects** (Rescue AI, 11Shots, EduPilot), **hackathons**, **skills**, or **how to hire him**!`,
      action: { label: 'Explore Akash\'s Story', href: '#about' },
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
        className="fixed bottom-20 right-5 z-40 print:hidden select-none"
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
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-end sm:justify-end p-2 sm:p-6 pointer-events-none">
            {/* Backdrop click on mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs sm:hidden pointer-events-auto"
            />

            {/* Chat Box */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`pointer-events-auto w-full sm:w-[420px] h-[580px] max-h-[85vh] flex flex-col rounded-3xl border-2 shadow-2xl overflow-hidden ${
                isLight
                  ? 'bg-white border-red-200 text-zinc-900 shadow-zinc-400/50'
                  : 'bg-[#0a0a0f] border-red-900/80 text-white shadow-black'
              }`}
            >
              {/* Header */}
              <div className={`px-5 py-4 border-b flex items-center justify-between ${
                isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
              }`}>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shadow-md">
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

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleClearChat}
                    className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
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
                    className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
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
              <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs font-sans">
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
              <div className={`px-3 py-2 border-t overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none ${
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
                className={`p-3 border-t flex items-center gap-2 ${
                  isLight ? 'bg-white border-zinc-200' : 'bg-zinc-950 border-white/10'
                }`}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about projects, hackathons, skills..."
                  className={`flex-1 px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none transition-colors ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                      : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                  }`}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="p-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-md shadow-red-900/30"
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