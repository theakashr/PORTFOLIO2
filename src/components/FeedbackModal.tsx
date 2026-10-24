import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  X, 
  Send, 
  Check, 
  ShieldCheck, 
  Loader2, 
  EyeOff
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import type { FeedbackCategory, ReviewerRole } from '../types/feedback';
import { dispatchFeedbackToChannels, RECIPIENT_EMAIL } from '../utils/feedbackStorage';

interface FeedbackModalProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
}

const CATEGORIES: FeedbackCategory[] = [
  'Design & Visuals',
  'Projects & Code',
  'Performance & UX',
  'Hireability & Resume',
  'Bug / Improvement',
  'General Thoughts',
];

const ROLES: ReviewerRole[] = [
  'Recruiter',
  'Hiring Manager',
  'Tech Lead / Senior Dev',
  'Peer Developer',
  'Designer',
  'Visitor / Other',
];

const RATING_LABELS: Record<number, string> = {
  1: '⚠️ Needs significant rework',
  2: '🛠️ Needs refinement & improvements',
  3: '👍 Good! Solid portfolio foundation',
  4: '✨ Really impressive! Great work',
  5: '🔥 Exceptional! Outstanding presentation',
};

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpenExternal,
  onCloseExternal,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = typeof isOpenExternal === 'boolean' ? isOpenExternal : internalOpen;

  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [category, setCategory] = useState<FeedbackCategory>('Design & Visuals');
  const [reviewerRole, setReviewerRole] = useState<ReviewerRole>('Recruiter');
  const [feedback, setFeedback] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { isLight } = useTheme();

  useEffect(() => {
    const handleOpen = () => setInternalOpen(true);
    window.addEventListener('open-portfolio-feedback', handleOpen);
    return () => window.removeEventListener('open-portfolio-feedback', handleOpen);
  }, []);

  const handleClose = () => {
    soundFx.playClick();
    setInternalOpen(false);
    if (onCloseExternal) onCloseExternal();
    // Reset after delay
    if (submitted) {
      setTimeout(() => {
        setSubmitted(false);
        setFeedback('');
        setName('');
        setEmail('');
        setRating(5);
      }, 300);
    }
  };

  const [deliveryStatus, setDeliveryStatus] = useState<{ email: boolean; sheet: boolean }>({ email: true, sheet: false });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    setIsSubmitting(true);
    soundFx.playClick();

    // Dispatches via unified workflow:
    // 1. Saves locally to storage for Admin Vault
    // 2. Transmits directly to akashakashr505@gmail.com via FormSubmit AJAX table
    // 3. Transmits to Google Sheets Webhook (if configured)
    try {
      const result = await dispatchFeedbackToChannels({
        rating,
        category,
        feedback: feedback.trim(),
        reviewerRole,
        name: isAnonymous ? 'Anonymous' : name.trim() || undefined,
        email: isAnonymous ? undefined : email.trim() || undefined,
        isAnonymous,
      });

      setDeliveryStatus({
        email: result.emailDelivered,
        sheet: result.sheetDelivered,
      });
    } catch (err) {
      console.warn('Feedback dispatch pipeline notice:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      soundFx.playChime();
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6'],
      });
    }
  };

  return (
    <>
      {/* Floating Action Pill Button (Bottom-Left) */}
      <aside
        aria-label="Feedback Quick Button"
        className="fixed bottom-5 left-5 z-40 print:hidden select-none"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            soundFx.playClick();
            setInternalOpen(true);
          }}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 group cursor-pointer ${
            isLight
              ? 'bg-white/95 border-red-200 text-zinc-900 shadow-red-500/10 hover:border-red-400'
              : 'bg-zinc-950/95 border-red-900/60 text-white shadow-red-950/50 hover:border-red-500/80'
          }`}
          title="Share constructive feedback or rate this portfolio"
        >
          <div className="relative flex items-center justify-center">
            <div className="w-7 h-7 rounded-lg bg-red-600/15 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
            </div>
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-ping" />
          </div>

          <div className="flex flex-col text-left">
            <span className="text-[11px] font-impact uppercase tracking-wider leading-tight flex items-center gap-1">
              <span>FEEDBACK</span>
              <span className="text-[9px] font-mono-tech px-1.5 py-0.2 rounded-full bg-red-600/20 text-red-500 font-bold">
                PRIVATE
              </span>
            </span>
            <span className={`text-[9px] font-mono-tech uppercase ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Rate Portfolio
            </span>
          </div>
        </motion.button>
      </aside>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
              className={`relative z-10 w-full max-w-xl max-h-[90vh] flex flex-col rounded-3xl border-2 shadow-2xl overflow-hidden my-auto ${
                isLight
                  ? 'bg-white border-zinc-200 text-zinc-900 shadow-zinc-300/50'
                  : 'bg-zinc-950 border-red-900/60 text-white shadow-black'
              }`}
            >
              {/* Header */}
              <div className={`px-6 py-4.5 border-b flex items-center justify-between ${
                isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/60 border-white/10'
              }`}>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono-tech tracking-widest text-red-500 font-bold uppercase">
                      PORTFOLIO CRITIQUE
                    </span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span className="text-[10px] font-mono-tech text-emerald-500 font-bold uppercase flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Visible only to Akash
                    </span>
                  </div>
                  <h3 className="font-impact text-2xl uppercase tracking-wide">
                    LEAVE YOUR FEEDBACK
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className={`p-2 rounded-xl border transition-colors ${
                    isLight
                      ? 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border-zinc-300'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-white/10'
                  }`}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Form Content */}
              <div className="p-6 overflow-y-auto space-y-5 flex-1">
                {submitted ? (
                  /* Success Confirmation Screen */
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-500">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-impact text-3xl uppercase tracking-wider">
                        FEEDBACK RECEIVED!
                      </h4>
                      <p className={`text-sm max-w-md mx-auto ${isLight ? 'text-zinc-600' : 'text-zinc-300'}`}>
                        Thank you for sharing your perspective! Your review has been recorded in the feedback system and dispatched directly to Akash's inbox.
                      </p>
                    </div>

                    <div className={`p-4 rounded-2xl border max-w-md mx-auto text-left text-xs font-mono-tech space-y-2 ${
                      isLight ? 'bg-zinc-50 border-zinc-200 text-zinc-700' : 'bg-black/60 border-white/10 text-zinc-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 uppercase">Rating:</span>
                        <span className="font-bold text-amber-500 flex items-center gap-1">
                          {'★'.repeat(rating)} ({rating}/5)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 uppercase">Focus:</span>
                        <span className="font-bold">{category}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 uppercase">Email Dispatch:</span>
                        <span className="font-bold text-emerald-500 flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> {RECIPIENT_EMAIL} {deliveryStatus.sheet ? '(+ Sheet)' : ''}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zinc-400 uppercase">Vault Record:</span>
                        <span className="font-bold text-emerald-500">Stored &amp; Protected</span>
                      </div>
                    </div>

                    <div className="pt-3 flex justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleClose}
                        className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact text-xs uppercase tracking-wider transition-all shadow-md shadow-red-600/30"
                      >
                        CLOSE WINDOW
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Main Feedback Form */
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* 1. Star Rating */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className={`text-xs font-mono-tech uppercase font-bold tracking-wider ${
                          isLight ? 'text-zinc-700' : 'text-zinc-300'
                        }`}>
                          Overall Portfolio Rating <span className="text-red-500">*</span>
                        </label>
                        <span className="text-[11px] font-mono-tech font-bold text-amber-500">
                          {RATING_LABELS[hoverRating || rating]}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((starVal) => {
                          const isFilled = (hoverRating || rating) >= starVal;
                          return (
                            <button
                              key={starVal}
                              type="button"
                              onClick={() => {
                                soundFx.playClick();
                                setRating(starVal);
                              }}
                              onMouseEnter={() => {
                                soundFx.playHover();
                                setHoverRating(starVal);
                              }}
                              onMouseLeave={() => setHoverRating(0)}
                              className="p-1.5 rounded-lg transition-transform hover:scale-125 focus:outline-none cursor-pointer"
                              aria-label={`${starVal} star rating`}
                            >
                              <Star
                                className={`w-8 h-8 transition-colors ${
                                  isFilled
                                    ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]'
                                    : isLight
                                    ? 'text-zinc-300 hover:text-amber-300'
                                    : 'text-zinc-700 hover:text-amber-400'
                                }`}
                              />
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 2. Reviewer Role */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                        isLight ? 'text-zinc-700' : 'text-zinc-300'
                      }`}>
                        I am reviewing as a:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {ROLES.map((r) => {
                          const isSelected = reviewerRole === r;
                          return (
                            <button
                              key={r}
                              type="button"
                              onClick={() => {
                                soundFx.playClick();
                                setReviewerRole(r);
                              }}
                              className={`px-3 py-2 rounded-xl text-xs font-mono-tech text-left border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-red-600 text-white border-red-500 font-bold shadow-sm shadow-red-600/30'
                                  : isLight
                                  ? 'bg-zinc-50 hover:bg-zinc-100 border-zinc-200 text-zinc-700'
                                  : 'bg-black/50 hover:bg-white/5 border-white/10 text-zinc-300'
                              }`}
                            >
                              {r}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 3. Feedback Category */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                        isLight ? 'text-zinc-700' : 'text-zinc-300'
                      }`}>
                        Primary Area of Feedback:
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((cat) => {
                          const isSelected = category === cat;
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => {
                                soundFx.playClick();
                                setCategory(cat);
                              }}
                              className={`px-3 py-1.5 rounded-full text-xs font-mono-tech border transition-all cursor-pointer ${
                                isSelected
                                  ? 'bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-zinc-900 font-bold shadow-sm'
                                  : isLight
                                  ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-600'
                                  : 'bg-zinc-900/80 hover:bg-zinc-800 border-white/10 text-zinc-400'
                              }`}
                            >
                              {cat}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* 4. Feedback Text Area */}
                    <div className="space-y-1.5">
                      <label className={`block text-xs font-mono-tech uppercase font-bold tracking-wider ${
                        isLight ? 'text-zinc-700' : 'text-zinc-300'
                      }`}>
                        Your Thoughts, Suggestions, or Critique <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="What did you like? What could be improved regarding projects, code, UX, typography, or content?"
                        className={`w-full px-4 py-3 rounded-2xl border text-sm font-sans focus:outline-none transition-colors resize-none ${
                          isLight
                            ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600 focus:bg-white'
                            : 'bg-black/60 border-white/15 text-white focus:border-red-500'
                        }`}
                      />
                    </div>

                    {/* 5. Identity / Anonymous Options */}
                    <div className={`p-4 rounded-2xl border space-y-3 ${
                      isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/40 border-white/10'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <EyeOff className={`w-4 h-4 ${isAnonymous ? 'text-red-500' : 'text-zinc-400'}`} />
                          <span className="text-xs font-mono-tech uppercase font-bold">
                            Submit Anonymously
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            soundFx.playClick();
                            setIsAnonymous(!isAnonymous);
                          }}
                          className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors cursor-pointer ${
                            isAnonymous ? 'bg-red-600' : isLight ? 'bg-zinc-300' : 'bg-zinc-700'
                          }`}
                        >
                          <div
                            className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                              isAnonymous ? 'translate-x-5' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>

                      {!isAnonymous && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                          <div>
                            <label className={`block text-[10px] font-mono-tech uppercase mb-1 ${
                              isLight ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              Your Name (Optional)
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              placeholder="e.g. Alex Rivera"
                              className={`w-full px-3 py-2 rounded-xl border text-xs font-sans focus:outline-none transition-colors ${
                                isLight
                                  ? 'bg-white border-zinc-300 text-zinc-900 focus:border-red-600'
                                  : 'bg-zinc-900 border-white/15 text-white focus:border-red-500'
                              }`}
                            />
                          </div>

                          <div>
                            <label className={`block text-[10px] font-mono-tech uppercase mb-1 ${
                              isLight ? 'text-zinc-500' : 'text-zinc-400'
                            }`}>
                              Your Email (Optional)
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="e.g. alex@company.com"
                              className={`w-full px-3 py-2 rounded-xl border text-xs font-sans focus:outline-none transition-colors ${
                                isLight
                                  ? 'bg-white border-zinc-300 text-zinc-900 focus:border-red-600'
                                  : 'bg-zinc-900 border-white/15 text-white focus:border-red-500'
                              }`}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Privacy notice banner */}
                    <div className="flex items-center gap-2 text-[11px] font-mono-tech text-zinc-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span>
                        Feedback is sent directly to Akash's private inbox. It will not be published publicly.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting || !feedback.trim()}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-impact tracking-wider text-sm uppercase shadow-lg shadow-red-900/30 transition-all hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>SENDING TO INBOX...</span>
                        </>
                      ) : (
                        <>
                          <span>SUBMIT PRIVATE FEEDBACK</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                  </form>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
