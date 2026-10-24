import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  Sparkles,
  MapPin,
  Clock,
  ArrowRight,
  Loader2,
  Star,
  Lock,
  Briefcase,
  Trophy,
  Handshake,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [noteType, setNoteType] = useState('Internship / Role');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { isLight } = useTheme();

  const emailAddress = 'akashakashr505@gmail.com';

  const noteTypes = [
    { id: 'Internship / Role', label: '💼 Internship / Role' },
    { id: 'Hackathon / Collab', label: '🏆 Hackathon / Collab' },
    { id: 'Quick Hello', label: '👋 Quick Hello' },
  ];

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) return;

    soundFx.playClick();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          topic: noteType,
          message: formData.message.trim(),
          _subject: `📬 Portfolio Finale Note: [${noteType}] from ${formData.name.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === 'true' || data.success === true)) {
        soundFx.playChime();
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#facc15', '#ffffff', '#10b981'],
        });
        setFormSubmitted(true);
      } else {
        throw new Error('Form service error');
      }
    } catch (err) {
      console.warn('Direct delivery fallback to mailto:', err);
      const subject = encodeURIComponent(`Portfolio Note: ${noteType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Hi Akash,\n\nTopic: ${noteType}\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
      );
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
      soundFx.playChime();
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t flex flex-col justify-between transition-colors duration-300 ${
        isLight
          ? 'bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900 border-zinc-200'
          : 'bg-gradient-to-b from-[#050505] via-[#080202] to-[#050505] text-white border-red-950/80'
      }`}
    >
      {/* Top Letterbox Bar */}
      <div
        className={`absolute top-0 left-0 right-0 h-8 sm:h-11 z-30 pointer-events-none flex items-center justify-between px-6 border-b transition-colors ${
          isLight
            ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
            : 'bg-black border-white/10 text-zinc-500'
        }`}
      >
        <span className="text-[10px] font-mono-tech tracking-widest uppercase">
          ASPECT RATIO 2.39:1 &bull; PORTFOLIO CONCLUSION
        </span>
        <span className="text-[10px] font-mono-tech tracking-widest text-red-500 font-bold uppercase">
          AKASH R &bull; CSE BIET
        </span>
      </div>

      {/* Atmospheric Background */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ${
          isLight
            ? 'bg-radial-[at_50%_40%] from-red-100/40 via-transparent to-transparent'
            : 'bg-radial-[at_50%_40%] from-red-950/30 via-transparent to-transparent'
        }`}
      />
      <DiagonalStreaks density="medium" opacity={isLight ? 0.35 : 0.6} />

      <div className="relative z-10 max-w-6xl mx-auto w-full pt-14 pb-12 flex-1 flex flex-col justify-center">
        {/* Outro Headlines */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full backdrop-blur-md border ${
              isLight
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-red-950/60 border-red-500/40 text-red-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-xs font-mono-tech tracking-widest uppercase font-bold">
              • PORTFOLIO FINALE &bull; CONCLUSION •
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`font-impact text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}
          >
            BUILDING TODAY. <br />
            <span className="text-red-600 glow-red">READY FOR WHAT'S NEXT.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-mono-tech text-xs sm:text-sm tracking-wider uppercase max-w-2xl mx-auto ${
              isLight ? 'text-zinc-600' : 'text-zinc-400'
            }`}
          >
            2ND YEAR CSE AT BIET DAVANAGERE &bull; OPEN TO SOFTWARE INTERNSHIPS, HACKATHON TEAMS &amp;
            HIGH-IMPACT ROLES
          </motion.p>
        </div>

        {/* Conclusion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column: Personal Conclusion & Career Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-5"
          >
            {/* The Personal Conclusion Card */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border-2 shadow-xl space-y-4 transition-all ${
                isLight
                  ? 'bg-white border-red-200/80 shadow-zinc-200'
                  : 'bg-zinc-950/90 border-red-600/35 shadow-red-950/50'
              }`}
            >
              <div className="flex items-center gap-2 text-red-600">
                <CheckCircle2 className="w-5 h-5 text-amber-500" />
                <span
                  className={`font-impact text-lg sm:text-xl uppercase tracking-wider ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}
                >
                  THE CONCLUSION &amp; LOOKING AHEAD
                </span>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}
              >
                Thank you for taking the time to explore my work. I believe code is most valuable when it
                solves real human problems — whether that is coordinating emergency disaster medical relief in{' '}
                <strong className="text-red-600">Rescue AI</strong>, automating resume analysis in{' '}
                <strong className="text-red-600">ResumeAI</strong>, or predicting personal health risks in{' '}
                <strong className="text-red-600">AI Health Predictor</strong>.
              </p>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isLight ? 'text-zinc-700' : 'text-zinc-300'
                }`}
              >
                As a 2nd-year Computer Science student at BIET Davanagere, I don't wait for graduation to
                build and ship. I am constantly strengthening core programming in{' '}
                <strong className={isLight ? 'text-zinc-900' : 'text-white'}>Python and C</strong>,
                crafting responsive web applications with React, and leveraging modern AI models to build
                software people can actually rely on.
              </p>
            </div>

            {/* What I'm Actively Seeking Cards */}
            <div className="space-y-2.5">
              <span
                className={`text-[11px] font-mono-tech uppercase font-bold tracking-wider block ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}
              >
                CURRENTLY AVAILABLE &bull; SEEKING:
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-200 hover:border-red-300'
                      : 'bg-black/50 border-white/10 hover:border-red-500/40'
                  }`}
                >
                  <Briefcase className="w-4 h-4 text-red-500 mb-2" />
                  <h4
                    className={`font-impact text-xs uppercase tracking-wide mb-1 ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    SDE Internships
                  </h4>
                  <p className={`text-[11px] leading-tight ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Open for 2025/2026 roles in full-stack &amp; AI (Bangalore / Remote).
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-200 hover:border-red-300'
                      : 'bg-black/50 border-white/10 hover:border-red-500/40'
                  }`}
                >
                  <Trophy className="w-4 h-4 text-amber-500 mb-2" />
                  <h4
                    className={`font-impact text-xs uppercase tracking-wide mb-1 ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    Hackathon Teams
                  </h4>
                  <p className={`text-[11px] leading-tight ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Ready to team up as a core builder who ships high-velocity prototypes.
                  </p>
                </div>

                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    isLight
                      ? 'bg-zinc-50 border-zinc-200 hover:border-red-300'
                      : 'bg-black/50 border-white/10 hover:border-red-500/40'
                  }`}
                >
                  <Handshake className="w-4 h-4 text-emerald-500 mb-2" />
                  <h4
                    className={`font-impact text-xs uppercase tracking-wide mb-1 ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    Tech Talks &amp; Network
                  </h4>
                  <p className={`text-[11px] leading-tight ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
                    Always excited to connect with mentors, engineers, and creators.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Channels & Geo Meta */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href="https://github.com/theakashr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-all ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-white border-zinc-200 hover:border-red-400 shadow-xs'
                    : 'bg-black/60 border-white/10 hover:border-red-500/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isLight ? 'bg-zinc-200/80 text-zinc-900' : 'bg-zinc-900 text-white'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className={`font-impact text-xs uppercase block leading-none ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    GITHUB
                  </span>
                  <span
                    className={`text-[10px] font-mono-tech ${
                      isLight ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    @theakashr
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/theakashr/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`p-3.5 rounded-xl border flex items-center gap-3 group transition-all ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-white border-zinc-200 hover:border-red-400 shadow-xs'
                    : 'bg-black/60 border-white/10 hover:border-red-500/50'
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                    isLight ? 'bg-blue-50 text-blue-600' : 'bg-zinc-900 text-blue-400'
                  }`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span
                    className={`font-impact text-xs uppercase block leading-none ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    LINKEDIN
                  </span>
                  <span
                    className={`text-[10px] font-mono-tech ${
                      isLight ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    in/theakashr
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div
              className={`p-3.5 rounded-xl border flex items-center justify-between text-xs font-mono-tech transition-colors ${
                isLight
                  ? 'bg-zinc-50 border-zinc-200 text-zinc-600'
                  : 'bg-black/40 border-white/10 text-zinc-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>BIET, Davanagere, Karnataka</span>
              </div>
              <div
                className={`flex items-center gap-1.5 ${
                  isLight ? 'text-zinc-800 font-semibold' : 'text-zinc-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Reach-Out Hub & Quick Note Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Direct Email Banner Card */}
            <div
              className={`p-6 rounded-3xl border-2 shadow-xl space-y-4 transition-colors ${
                isLight
                  ? 'bg-white border-red-200/80 shadow-zinc-200'
                  : 'bg-zinc-950/90 border-red-600/35 shadow-red-950/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-mono-tech uppercase font-bold tracking-wider ${
                    isLight ? 'text-zinc-600' : 'text-zinc-400'
                  }`}
                >
                  DIRECT EMAIL REACH-OUT
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono-tech text-emerald-500 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  INBOX ACTIVE
                </span>
              </div>

              <div>
                <span
                  className={`text-base sm:text-lg font-mono-tech font-bold block truncate ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}
                >
                  {emailAddress}
                </span>
                <span className={`text-xs ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Delivered directly to Akash's personal inbox &bull; Typically responds within 24 hours.
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL ADDRESS'}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=Connecting%20from%20Portfolio`}
                  onClick={() => soundFx.playClick()}
                  className={`px-4 py-2.5 rounded-xl font-impact text-xs uppercase tracking-wider border transition-colors ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-300'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white border-white/20'
                  }`}
                  title="Launch Mail Client"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Note Form Card */}
            <div
              className={`p-6 sm:p-7 rounded-3xl border-2 shadow-2xl relative overflow-hidden transition-colors ${
                isLight
                  ? 'bg-white border-red-200/80 shadow-zinc-200'
                  : 'bg-zinc-950/90 border-red-600/35 shadow-red-950/60'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3
                    className={`font-impact text-xl sm:text-2xl uppercase tracking-wider ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    SEND A DIRECT NOTE
                  </h3>
                  <p
                    className={`text-xs font-mono-tech uppercase ${
                      isLight ? 'text-zinc-500' : 'text-zinc-400'
                    }`}
                  >
                    Fast reach-out &bull; Lands directly in Akash's inbox
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center">
                  <Send className="w-4 h-4 text-red-600" />
                </div>
              </div>

              {/* Private Feedback Banner */}
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  window.dispatchEvent(new CustomEvent('open-portfolio-feedback'));
                }}
                className={`w-full mb-5 p-2.5 rounded-xl border flex items-center justify-between group transition-all text-xs font-mono-tech cursor-pointer ${
                  isLight
                    ? 'bg-amber-50/70 hover:bg-amber-100/60 border-amber-200 text-amber-900'
                    : 'bg-red-950/30 hover:bg-red-950/60 border-red-900/60 text-red-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 group-hover:scale-110 transition-transform" />
                  <span className="font-bold tracking-tight">HAVE 30 SECONDS? LEAVE PORTFOLIO FEEDBACK</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 group-hover:underline">
                  RATE &rarr;
                </span>
              </button>

              {formSubmitted ? (
                <div
                  className={`p-6 rounded-2xl text-center space-y-3 border transition-colors ${
                    isLight
                      ? 'bg-emerald-50 border-emerald-300'
                      : 'bg-emerald-950/40 border-emerald-500/50'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4
                    className={`font-impact text-xl uppercase ${
                      isLight ? 'text-zinc-900' : 'text-white'
                    }`}
                  >
                    NOTE DELIVERED!
                  </h4>
                  <p
                    className={`text-xs leading-relaxed ${
                      isLight ? 'text-zinc-600' : 'text-zinc-300'
                    }`}
                  >
                    Thank you, <span className="font-bold">{formData.name || 'friend'}</span>! Your note
                    has been delivered straight to Akash's inbox ({emailAddress}). Expect a reply within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono-tech uppercase font-bold tracking-wider transition-all"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Topic Pill Selector */}
                  <div className="space-y-1.5">
                    <label
                      className={`block text-[11px] font-mono-tech uppercase ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      Reason for Reaching Out
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      {noteTypes.map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => {
                            soundFx.playHover();
                            setNoteType(t.id);
                          }}
                          className={`text-xs font-mono-tech px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                            noteType === t.id
                              ? 'bg-red-600 text-white border-red-500 font-bold shadow-xs'
                              : isLight
                                ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700'
                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label
                        className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                          isLight ? 'text-zinc-600' : 'text-zinc-400'
                        }`}
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                            : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                        }`}
                      />
                    </div>

                    <div>
                      <label
                        className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                          isLight ? 'text-zinc-600' : 'text-zinc-400'
                        }`}
                      >
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. sarah@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                            : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      Message / Note *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share an opportunity, inquire about full-stack/AI roles, or say hello..."
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none transition-colors resize-none ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-lg shadow-red-600/30 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>DELIVERING...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND DIRECT NOTE</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Letterbox Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-8 sm:h-11 z-30 flex items-center justify-between px-6 border-t transition-colors ${
          isLight
            ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
            : 'bg-black border-white/10 text-zinc-500'
        }`}
      >
        <span className="text-[10px] font-mono-tech tracking-widest uppercase">
          &copy; {new Date().getFullYear()} AKASH R &bull; 2ND YEAR CSE AT BIET &bull; ALL RIGHTS RESERVED
        </span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono-tech tracking-widest uppercase">
            BIET DAVANAGERE &bull; KARNATAKA, INDIA
          </span>
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              window.dispatchEvent(new CustomEvent('open-admin-feedback'));
            }}
            title="Owner Feedback Vault (PIN: 8660 or Ctrl+Shift+F)"
            className="p-1 rounded text-zinc-500 hover:text-red-500 transition-colors opacity-60 hover:opacity-100 cursor-pointer"
            aria-label="Admin feedback vault"
          >
            <Lock className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
