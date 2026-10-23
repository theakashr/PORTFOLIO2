import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, Sparkles, MapPin, Clock, ArrowRight, Loader2, Star, Lock } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { DiagonalStreaks } from './DiagonalStreaks';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const { isLight } = useTheme();

  const emailAddress = 'akashakashr505@gmail.com';

  const handleCopyEmail = () => {
    soundFx.playClick();
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Direct email delivery straight to akashakashr505@gmail.com via FormSubmit AJAX API
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data && (data.success === 'true' || data.success === true)) {
        soundFx.playChime();
        confetti({
          particleCount: 120,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#ef4444', '#facc15', '#ffffff', '#dc2626'],
        });
        setFormSubmitted(true);
      } else {
        throw new Error('Form service error');
      }
    } catch (err) {
      console.warn('Direct delivery encountered an issue; launching mail client fallback:', err);
      // Fallback: If network / adblock blocks the AJAX endpoint, launch prefilled email
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
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
          ? 'bg-white text-zinc-900 border-zinc-200'
          : 'bg-[#050505] text-white border-red-950/80'
      }`}
    >
      {/* Top Letterbox Bar (Reference Video 00:40 - 00:47 Cinematic Letterboxing) */}
      <div className={`absolute top-0 left-0 right-0 h-8 sm:h-12 z-30 pointer-events-none flex items-center justify-between px-6 border-b transition-colors ${
        isLight
          ? 'bg-zinc-900 border-zinc-800 text-zinc-300'
          : 'bg-black border-white/10 text-zinc-500'
      }`}>
        <span className="text-[10px] font-mono-tech tracking-widest uppercase">
          ASPECT RATIO 2.39:1 &bull; CINEMATIC FINALE
        </span>
        <span className="text-[10px] font-mono-tech tracking-widest text-red-500 font-bold uppercase">
          AKASH R &bull; DEV
        </span>
      </div>

      <div className={`absolute inset-0 pointer-events-none transition-opacity ${
        isLight
          ? 'bg-radial-[at_50%_50%] from-red-100/40 via-white to-white'
          : 'bg-radial-[at_50%_50%] from-red-950/30 via-black to-black'
      }`} />
      <DiagonalStreaks density="high" opacity={isLight ? 0.45 : 0.75} />

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-12 pb-12 flex-1 flex flex-col justify-center">
        
        {/* Outro Headlines inspired by Reference Video (00:27 - 00:28 "LET'S TALK") */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-3 backdrop-blur-md border ${
              isLight
                ? 'bg-red-50 border-red-200 text-red-800'
                : 'bg-red-950/60 border-red-500/40 text-red-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-mono-tech tracking-widest uppercase font-bold">
              • AVAILABLE FOR HIGH-IMPACT PROJECTS
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-impact text-xl sm:text-3xl lg:text-4xl uppercase tracking-widest mb-2 ${
              isLight ? 'text-zinc-700' : 'text-zinc-200'
            }`}
          >
            HAVE A PROJECT OR AN EXCITING VISION IN MIND?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className={`font-impact text-5xl sm:text-7xl lg:text-9xl tracking-tight uppercase leading-none ${
              isLight ? 'text-zinc-900' : 'text-yellow-400 glow-yellow'
            }`}
            style={{
              textShadow: isLight
                ? '0 6px 20px rgba(220, 38, 38, 0.25)'
                : '0 4px 20px rgba(0, 0, 0, 0.9), 0 0 40px rgba(250, 204, 21, 0.7)',
            }}
          >
            LET'S TALK.
          </motion.h2>
        </div>

        {/* Contact Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto w-full">
          
          {/* Left Column: Direct Links & Status */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Quick Email Copy Card */}
            <div className={`p-6 rounded-2xl shadow-2xl space-y-4 border-2 transition-colors ${
              isLight
                ? 'bg-white border-zinc-200 shadow-zinc-200'
                : 'bg-zinc-950/90 border-white/90 shadow-2xl'
            }`}>
              <div className="flex items-center justify-between">
                <span className={`text-xs font-mono-tech uppercase ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  DIRECT EMAIL INBOX
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              <div>
                <span className={`text-sm sm:text-base font-mono-tech font-bold block truncate ${
                  isLight ? 'text-zinc-900' : 'text-white'
                }`}>
                  {emailAddress}
                </span>
                <span className={`text-xs ${
                  isLight ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  Open for opportunities, internships, and freelance projects.
                </span>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30"
                >
                  {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD!' : 'COPY EMAIL'}</span>
                </button>

                <a
                  href={`mailto:${emailAddress}?subject=Project%20Opportunity`}
                  onClick={() => soundFx.playClick()}
                  className={`px-4 py-2.5 rounded-xl font-impact text-xs uppercase tracking-wider border transition-colors ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border-zinc-300'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white border-white/20'
                  }`}
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://github.com/theakashr"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`p-4 rounded-xl border flex items-center gap-3 group transition-all ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-white border-zinc-200 hover:border-red-400 shadow-xs'
                    : 'bg-black/60 border-white/10 hover:border-red-500/50'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                  isLight ? 'bg-zinc-200 text-zinc-900' : 'bg-zinc-900 text-white'
                }`}>
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`font-impact text-sm uppercase block leading-none ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    GITHUB
                  </span>
                  <span className={`text-[10px] font-mono-tech ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    @theakashr
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/theakashr/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className={`p-4 rounded-xl border flex items-center gap-3 group transition-all ${
                  isLight
                    ? 'bg-zinc-50 hover:bg-white border-zinc-200 hover:border-red-400 shadow-xs'
                    : 'bg-black/60 border-white/10 hover:border-red-500/50'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform ${
                  isLight ? 'bg-blue-50 text-blue-600' : 'bg-zinc-900 text-blue-400'
                }`}>
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className={`font-impact text-sm uppercase block leading-none ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    LINKEDIN
                  </span>
                  <span className={`text-[10px] font-mono-tech ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    in/theakashr
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Timezone Card */}
            <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono-tech transition-colors ${
              isLight
                ? 'bg-zinc-50 border-zinc-200 text-zinc-600'
                : 'bg-black/40 border-white/10 text-zinc-400'
            }`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>BIET, Davanagere, Karnataka</span>
              </div>
              <div className={`flex items-center gap-1.5 ${
                isLight ? 'text-zinc-800 font-semibold' : 'text-zinc-300'
              }`}>
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Direct Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className={`p-6 sm:p-8 rounded-3xl border-2 shadow-2xl relative overflow-hidden transition-colors ${
              isLight
                ? 'bg-white border-red-200 shadow-zinc-200'
                : 'bg-zinc-950/90 border-red-600/40'
            }`}>
              
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className={`font-impact text-2xl uppercase tracking-wider ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    SEND A DIRECT MESSAGE
                  </h3>
                  <p className={`text-xs font-mono-tech uppercase ${
                    isLight ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Arrives directly in Akash's email inbox &bull; 24h response
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-500/30 flex items-center justify-center">
                  <Send className="w-4 h-4 text-red-600" />
                </div>
              </div>

              {/* Quick Feedback Prompt Banner */}
              <button
                type="button"
                onClick={() => {
                  soundFx.playClick();
                  window.dispatchEvent(new CustomEvent('open-portfolio-feedback'));
                }}
                className={`w-full mb-6 p-3 rounded-2xl border flex items-center justify-between group transition-all text-xs font-mono-tech cursor-pointer ${
                  isLight
                    ? 'bg-amber-50/70 hover:bg-amber-100/60 border-amber-200 text-amber-900'
                    : 'bg-red-950/30 hover:bg-red-950/60 border-red-900/60 text-red-200'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  </div>
                  <span className="font-bold tracking-tight">HAVE 30 SECONDS? LEAVE PRIVATE PORTFOLIO FEEDBACK</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 group-hover:underline">
                  RATE NOW &rarr;
                </span>
              </button>

              {formSubmitted ? (
                <div className={`p-8 rounded-2xl text-center space-y-3 border transition-colors ${
                  isLight
                    ? 'bg-emerald-50 border-emerald-300'
                    : 'bg-emerald-950/40 border-emerald-500/50'
                }`}>
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className={`font-impact text-2xl uppercase ${
                    isLight ? 'text-zinc-900' : 'text-white'
                  }`}>
                    MESSAGE DELIVERED!
                  </h4>
                  <p className={`text-xs sm:text-sm leading-relaxed ${
                    isLight ? 'text-zinc-600' : 'text-zinc-300'
                  }`}>
                    Thank you, <span className="font-bold">{formData.name || 'friend'}</span>! Your message has been sent directly to Akash's email inbox (<span className="font-mono text-red-500 font-semibold">{emailAddress}</span>). Expect a reply within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-3 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-mono-tech uppercase font-bold tracking-wider transition-all shadow-md shadow-red-600/30"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-sans transition-colors ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. sarah@company.com"
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-sans transition-colors ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[11px] font-mono-tech uppercase mb-1 ${
                      isLight ? 'text-zinc-600' : 'text-zinc-400'
                    }`}>
                      Project Details / Inquiry
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the product, role, or collaboration..."
                      className={`w-full px-4 py-3 rounded-xl border focus:outline-none text-sm font-sans resize-none transition-colors ${
                        isLight
                          ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                          : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact tracking-wider text-sm uppercase shadow-lg shadow-red-900/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                        <span>SENDING DIRECTLY TO INBOX...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND DIRECT MESSAGE</span>
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

      {/* Bottom Letterbox Bar (Reference Video Closing Letterboxing) */}
      <div className={`absolute bottom-0 left-0 right-0 h-8 sm:h-12 z-30 flex items-center justify-between px-6 border-t transition-colors ${
        isLight
          ? 'bg-zinc-900 border-zinc-800 text-zinc-400'
          : 'bg-black border-white/10 text-zinc-500'
      }`}>
        <span className="text-[10px] font-mono-tech tracking-widest uppercase">
          &copy; {new Date().getFullYear()} AKASH R &bull; ALL RIGHTS RESERVED
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
