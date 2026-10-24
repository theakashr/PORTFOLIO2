import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Rocket,
  Users,
  Code2,
  Send,
  Check,
  ShieldCheck,
  Clock,
  Loader2,
  Layers,
  Bot,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const CollaborationSection: React.FC = () => {
  const { isLight } = useTheme();

  // Selected idea type
  const [selectedCategory, setSelectedCategory] = useState<string>('AI & Smart Tools');
  // Selected help area
  const [selectedHelp, setSelectedHelp] = useState<string>('Full End-to-End Build');

  // Form states
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [ideaText, setIdeaText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const emailAddress = 'akashakashr505@gmail.com';

  const categories = [
    { id: 'AI & Smart Tools', label: 'AI & Smart Tools', icon: Bot },
    { id: 'Full-Stack Web App', label: 'Full-Stack Web App', icon: Layers },
    { id: 'Hackathon Project', label: 'Hackathon Project', icon: Rocket },
    { id: 'Campus / Student Tool', label: 'Campus / Student Tool', icon: Users },
    { id: 'Early Startup / MVP', label: 'Early Startup / MVP', icon: Lightbulb },
  ];

  const helpAreas = [
    'Frontend & UI (React)',
    'Core Logic (Python & C)',
    'AI / Gemini Integration',
    'Full End-to-End Build',
    'Getting Unstuck & Debugging',
  ];

  const handleSelectCategory = (cat: string) => {
    soundFx.playHover();
    setSelectedCategory(cat);
  };

  const handleSelectHelp = (help: string) => {
    soundFx.playHover();
    setSelectedHelp(help);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ideaText.trim() || !contactInfo.trim()) return;

    soundFx.playClick();
    setIsSubmitting(true);

    const payload = {
      name: name.trim() || 'Fellow Creator',
      contact: contactInfo.trim(),
      category: selectedCategory,
      help_needed: selectedHelp,
      idea_description: ideaText.trim(),
      _subject: `🚀 Idea Collab Pitch: [${selectedCategory}] from ${name.trim() || 'Anonymous'}`,
      _template: 'table',
      _captcha: 'false',
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === 'true' || data.success === true)) {
        soundFx.playChime();
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#facc15', '#10b981', '#3b82f6', '#ffffff'],
        });
        setIsSubmitted(true);
      } else {
        throw new Error('Submission service error');
      }
    } catch (err) {
      console.warn('Direct delivery fallback to mailto:', err);
      const subject = encodeURIComponent(`Idea Collaboration Pitch: ${selectedCategory}`);
      const body = encodeURIComponent(
        `Hi Akash,\n\nI have an idea I'd love to collaborate on:\n\nName: ${name}\nContact: ${contactInfo}\nCategory: ${selectedCategory}\nHelp Needed: ${selectedHelp}\n\nIdea Details:\n${ideaText}\n`
      );
      window.open(`mailto:${emailAddress}?subject=${subject}&body=${body}`, '_blank');
      soundFx.playChime();
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="collab"
      className={`relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t transition-colors duration-300 ${
        isLight
          ? 'bg-gradient-to-b from-white via-zinc-50 to-white text-zinc-900 border-zinc-200'
          : 'bg-gradient-to-b from-[#060202] via-[#0a0303] to-[#060202] text-white border-red-950/70'
      }`}
    >
      {/* Background Radial Glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ${
          isLight
            ? 'bg-radial-[at_50%_30%] from-red-100/40 via-transparent to-transparent'
            : 'bg-radial-[at_50%_30%] from-red-950/30 via-transparent to-transparent'
        }`}
      />
      <DiagonalStreaks density="medium" opacity={isLight ? 0.35 : 0.55} />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2"
          >
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-mono-tech uppercase font-bold tracking-widest border inline-flex items-center gap-1.5 ${
                isLight
                  ? 'bg-red-50 border-red-200 text-red-700 shadow-xs'
                  : 'bg-red-950/50 border-red-500/40 text-red-300'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              • IDEA COLLABORATION LAB •
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`font-impact text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase leading-none ${
              isLight ? 'text-zinc-900' : 'text-white'
            }`}
          >
            HAVE AN IDEA? <br />
            <span className="text-red-600 glow-red">STUCK BUILDING IT?</span> <br />
            LET'S COLLABORATE.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-sm sm:text-base leading-relaxed ${
              isLight ? 'text-zinc-600' : 'text-zinc-300'
            }`}
          >
            Got an ambitious web app, AI concept, or hackathon idea, but don't know where to start or
            struggling with the code? Tell me what you want to build. I love teaming up with students,
            creators, and founders to turn ideas into working software.
          </motion.p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`p-5 rounded-2xl border transition-all ${
              isLight
                ? 'bg-white/80 border-zinc-200 shadow-sm hover:border-red-300'
                : 'bg-black/40 border-white/10 hover:border-red-500/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 mb-3">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3
              className={`font-impact text-lg uppercase tracking-wide mb-1 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}
            >
              1. You Bring The Idea
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              Whether it is a rough sketch, a college problem, or an exciting hackathon vision, every great
              project starts with a question worth solving.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`p-5 rounded-2xl border transition-all ${
              isLight
                ? 'bg-white/80 border-zinc-200 shadow-sm hover:border-red-300'
                : 'bg-black/40 border-white/10 hover:border-red-500/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 mb-3">
              <Code2 className="w-5 h-5" />
            </div>
            <h3
              className={`font-impact text-lg uppercase tracking-wide mb-1 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}
            >
              2. I Help Build The Tech
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              I bring solid programming in <strong>Python &amp; C</strong>, full-stack <strong>React</strong>,
              database wiring, and modern <strong>AI APIs (Gemini)</strong> to build the engine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`p-5 rounded-2xl border transition-all ${
              isLight
                ? 'bg-white/80 border-zinc-200 shadow-sm hover:border-red-300'
                : 'bg-black/40 border-white/10 hover:border-red-500/40'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 mb-3">
              <Rocket className="w-5 h-5" />
            </div>
            <h3
              className={`font-impact text-lg uppercase tracking-wide mb-1 ${
                isLight ? 'text-zinc-900' : 'text-white'
              }`}
            >
              3. We Ship Together
            </h3>
            <p className={`text-xs leading-relaxed ${isLight ? 'text-zinc-600' : 'text-zinc-400'}`}>
              We don't stop at unfinished prototypes. We deploy live on the web via Vercel &amp; Firebase so
              users, mentors, or judges can test and use it.
            </p>
          </motion.div>
        </div>

        {/* Interactive Idea Pitch Studio Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative group"
        >
          {/* Ambient Glow */}
          <div
            className={`absolute -inset-1 rounded-3xl blur-2xl pointer-events-none transition-opacity duration-700 ${
              isLight
                ? 'bg-gradient-to-r from-red-200/50 via-amber-200/30 to-red-200/50 opacity-60'
                : 'bg-gradient-to-r from-red-600/25 via-amber-600/15 to-red-600/25 opacity-70 group-hover:opacity-100'
            }`}
          />

          <div
            className={`relative rounded-3xl p-6 sm:p-10 border-2 shadow-2xl transition-all ${
              isLight
                ? 'bg-white/95 border-red-200 shadow-zinc-200/80'
                : 'bg-[#0e0404]/95 border-red-600/35 shadow-red-950/70'
            }`}
          >
            {isSubmitted ? (
              <div className="py-12 text-center max-w-lg mx-auto space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                  <Check className="w-8 h-8" />
                </div>
                <h3
                  className={`font-impact text-3xl uppercase tracking-wide ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}
                >
                  IDEA PITCH RECEIVED!
                </h3>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-300'
                  }`}
                >
                  Thank you, <span className="font-bold text-red-600">{name || 'Creator'}</span>! Your
                  collaboration pitch has landed directly in Akash's inbox. He will review your concept and
                  reply within 24 hours to discuss how to build it together.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      setIsSubmitted(false);
                      setIdeaText('');
                    }}
                    className="px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30"
                  >
                    Pitch Another Idea
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Step 1: Project Category */}
                <div className="space-y-3">
                  <label
                    className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                      isLight ? 'text-zinc-800' : 'text-zinc-200'
                    }`}
                  >
                    Step 1 &bull; What type of project is it?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {categories.map((cat) => {
                      const Icon = cat.icon;
                      const isSelected = selectedCategory === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono-tech transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-red-600 text-white border-red-500 shadow-md shadow-red-600/30 scale-105'
                              : isLight
                                ? 'bg-zinc-100/80 hover:bg-zinc-200/80 border-zinc-200 text-zinc-700'
                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300 hover:text-white'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                          <span>{cat.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Where are you struggling / need help? */}
                <div className="space-y-3">
                  <label
                    className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                      isLight ? 'text-zinc-800' : 'text-zinc-200'
                    }`}
                  >
                    Step 2 &bull; What part do you need help with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {helpAreas.map((area) => {
                      const isSelected = selectedHelp === area;
                      return (
                        <button
                          key={area}
                          type="button"
                          onClick={() => handleSelectHelp(area)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono-tech transition-all cursor-pointer border ${
                            isSelected
                              ? 'bg-amber-500 text-black font-bold border-amber-400 shadow-sm shadow-amber-500/30 scale-105'
                              : isLight
                                ? 'bg-zinc-100/70 hover:bg-zinc-200/60 border-zinc-200 text-zinc-700'
                                : 'bg-white/5 hover:bg-white/10 border-white/10 text-zinc-300 hover:text-white'
                          }`}
                        >
                          {area}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Tell me about the idea */}
                <div className="space-y-2">
                  <label
                    className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                      isLight ? 'text-zinc-800' : 'text-zinc-200'
                    }`}
                  >
                    Step 3 &bull; Describe your idea &amp; where you're stuck
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={ideaText}
                    onChange={(e) => setIdeaText(e.target.value)}
                    placeholder="e.g. I want to build a tool that helps college students automatically organize notes using AI, but I'm struggling with connecting the AI API and building the interactive frontend. Looking to collaborate on making this an MVP..."
                    className={`w-full p-4 rounded-2xl border text-sm font-sans focus:outline-none transition-colors resize-y leading-relaxed ${
                      isLight
                        ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                        : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                    }`}
                  />
                </div>

                {/* Step 4: Contact details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      className={`block text-xs font-mono-tech uppercase ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      className={`block text-xs font-mono-tech uppercase ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      Email or WhatsApp / LinkedIn
                    </label>
                    <input
                      type="text"
                      required
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      placeholder="e.g. rahul@gmail.com or +91 98765..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm font-sans focus:outline-none transition-colors ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Trust & Submit Row */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-200/80 dark:border-white/10">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono-tech">
                    <div
                      className={`flex items-center gap-1.5 ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                      <span>100% Confidential &bull; Your Idea Stays Yours</span>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 ${
                        isLight ? 'text-zinc-600' : 'text-zinc-400'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>Quick 24h Response</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact text-sm uppercase tracking-wider shadow-lg shadow-red-900/30 transition-all hover:scale-105 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING PITCH...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>LET'S BUILD THIS TOGETHER &rarr;</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
