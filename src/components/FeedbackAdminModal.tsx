import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Lock, 
  X, 
  Trash2, 
  Download, 
  Star, 
  Key, 
  LogOut, 
  Calendar, 
  User, 
  Mail, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import type { FeedbackSubmission } from '../types/feedback';
import { 
  getStoredFeedbacks, 
  deleteFeedbackFromStorage, 
  clearAllFeedbacksFromStorage,
  verifyAdminPin, 
  setAdminPin,
  exportFeedbacksToCSV,
  getGoogleSheetWebhookUrl,
  setGoogleSheetWebhookUrl,
  RECIPIENT_EMAIL
} from '../utils/feedbackStorage';

export const FeedbackAdminModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>(() => getStoredFeedbacks());
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [showPinChange, setShowPinChange] = useState(false);
  const [newPin, setNewPin] = useState('');
  const [pinChangeMsg, setPinChangeMsg] = useState('');
  const [showSheetConfig, setShowSheetConfig] = useState(false);
  const [sheetWebhookInput, setSheetWebhookInput] = useState(() => getGoogleSheetWebhookUrl());
  const [sheetSavedMsg, setSheetSavedMsg] = useState('');
  const { isLight } = useTheme();

  // Listen for Ctrl+Shift+F hotkey or custom event
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + F or Cmd + Shift + F
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'F' || e.key === 'f')) {
        e.preventDefault();
        soundFx.playClick();
        setFeedbacks(getStoredFeedbacks());
        setIsOpen((prev) => !prev);
      }
    };

    const handleOpenEvent = () => {
      soundFx.playClick();
      setFeedbacks(getStoredFeedbacks());
      setIsOpen(true);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('open-admin-feedback', handleOpenEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('open-admin-feedback', handleOpenEvent);
    };
  }, []);

  const handleVerifyPin = (e: React.FormEvent) => {
    e.preventDefault();
    if (verifyAdminPin(pinInput)) {
      soundFx.playChime();
      setIsAuthenticated(true);
      setPinError(false);
      setPinInput('');
      setFeedbacks(getStoredFeedbacks());
    } else {
      soundFx.playHover();
      setPinError(true);
      setPinInput('');
    }
  };

  const handleLogout = () => {
    soundFx.playClick();
    setIsAuthenticated(false);
    setShowPinChange(false);
  };

  const handleDeleteItem = (id: string) => {
    if (window.confirm('Delete this feedback entry?')) {
      soundFx.playClick();
      const updated = deleteFeedbackFromStorage(id);
      setFeedbacks(updated);
    }
  };

  const handleClearAll = () => {
    if (window.confirm('Are you sure you want to delete ALL stored feedback? This cannot be undone.')) {
      soundFx.playClick();
      clearAllFeedbacksFromStorage();
      setFeedbacks([]);
    }
  };

  const handleChangePin = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPin.trim().length >= 4) {
      if (setAdminPin(newPin)) {
        soundFx.playChime();
        setPinChangeMsg('PIN updated successfully!');
        setNewPin('');
        setTimeout(() => {
          setPinChangeMsg('');
          setShowPinChange(false);
        }, 1800);
      }
    } else {
      setPinChangeMsg('PIN must be at least 4 digits');
    }
  };

  const handleSaveSheetWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    setGoogleSheetWebhookUrl(sheetWebhookInput);
    soundFx.playChime();
    setSheetSavedMsg('Google Sheet Webhook saved!');
    setTimeout(() => setSheetSavedMsg(''), 3000);
  };

  const filteredFeedbacks = feedbacks.filter((item) => {
    if (filterRating === 'all') return true;
    return item.rating === filterRating;
  });

  const averageRating = feedbacks.length
    ? (feedbacks.reduce((acc, curr) => acc + curr.rating, 0) / feedbacks.length).toFixed(1)
    : '0.0';

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
      />

      {/* Modal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl border-2 shadow-2xl overflow-hidden my-auto ${
          isLight
            ? 'bg-white border-zinc-200 text-zinc-900 shadow-zinc-400/50'
            : 'bg-zinc-950 border-red-900/60 text-white shadow-black'
        }`}
      >
        {/* Header Bar */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          isLight ? 'bg-zinc-100 border-zinc-200' : 'bg-black/70 border-white/10'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-tech tracking-widest text-red-500 font-bold uppercase">
                  OWNER ADMIN VAULT
                </span>
                <span className="text-[9px] font-mono-tech px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-500 font-bold uppercase">
                  PRIVATE TO AKASH
                </span>
              </div>
              <h3 className="font-impact text-xl sm:text-2xl uppercase tracking-wider">
                RECEIVED FEEDBACK RECORDS
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                title="Lock vault"
                className={`p-2 rounded-xl border text-xs font-mono-tech flex items-center gap-1 transition-colors ${
                  isLight
                    ? 'bg-zinc-200 hover:bg-zinc-300 border-zinc-300 text-zinc-700'
                    : 'bg-zinc-900 hover:bg-zinc-800 border-white/15 text-zinc-300'
                }`}
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">LOCK</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`p-2 rounded-xl border transition-colors ${
                isLight
                  ? 'bg-zinc-200 hover:bg-zinc-300 border-zinc-300 text-zinc-700'
                  : 'bg-zinc-900 hover:bg-zinc-800 border-white/15 text-zinc-300'
              }`}
              aria-label="Close admin vault"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isAuthenticated ? (
            /* PIN Protection Screen */
            <div className="py-12 max-w-sm mx-auto text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-red-600/15 border-2 border-red-500/40 flex items-center justify-center mx-auto text-red-500 shadow-lg shadow-red-900/20">
                <Key className="w-8 h-8" />
              </div>

              <div>
                <h4 className="font-impact text-2xl uppercase tracking-wider">
                  ENTER ADMIN PASSCODE
                </h4>
                <p className={`text-xs font-mono-tech mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  Enter your private PIN to access and review submitted feedback.
                  <br />
                  <span className="text-[10px] text-zinc-400 italic">(Default PIN: 8660)</span>
                </p>
              </div>

              <form onSubmit={handleVerifyPin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    autoFocus
                    maxLength={10}
                    value={pinInput}
                    onChange={(e) => {
                      setPinInput(e.target.value);
                      if (pinError) setPinError(false);
                    }}
                    placeholder="Enter PIN (e.g. 8660)"
                    className={`w-full text-center tracking-widest text-xl font-mono-tech px-4 py-3 rounded-2xl border focus:outline-none transition-colors ${
                      pinError
                        ? 'border-red-500 bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-200'
                        : isLight
                        ? 'bg-zinc-50 border-zinc-300 text-zinc-900 focus:border-red-600'
                        : 'bg-black/60 border-white/20 text-white focus:border-red-500'
                    }`}
                  />
                  {pinError && (
                    <p className="text-xs font-mono-tech text-red-500 mt-2 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Incorrect PIN. Please try again.
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-impact tracking-wider text-xs uppercase shadow-md shadow-red-900/40 transition-all cursor-pointer"
                >
                  UNLOCK FEEDBACK VAULT
                </button>
              </form>
            </div>
          ) : (
            /* Authenticated Admin Dashboard */
            <div className="space-y-6">
              
              {/* Summary Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/50 border-white/10'
                }`}>
                  <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
                    TOTAL FEEDBACK
                  </span>
                  <span className="font-impact text-3xl text-red-500">
                    {feedbacks.length}
                  </span>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/50 border-white/10'
                }`}>
                  <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
                    AVG RATING
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-impact text-3xl text-amber-500">{averageRating}</span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/50 border-white/10'
                }`}>
                  <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
                    5-STAR REVIEWS
                  </span>
                  <span className="font-impact text-3xl text-emerald-500">
                    {feedbacks.filter((f) => f.rating === 5).length}
                  </span>
                </div>

                <div className={`p-4 rounded-2xl border flex flex-col justify-between ${
                  isLight ? 'bg-zinc-50 border-zinc-200' : 'bg-black/50 border-white/10'
                }`}>
                  <span className="text-[10px] font-mono-tech uppercase text-zinc-400 block">
                    CHANNELS &amp; SYNC
                  </span>
                  <div className="flex flex-col gap-1">
                    <button
                      type="button"
                      onClick={() => setShowPinChange(!showPinChange)}
                      className="text-xs font-mono-tech text-red-500 hover:underline text-left cursor-pointer font-bold"
                    >
                      {showPinChange ? 'Hide PIN Settings' : 'Vault PIN ⚙️'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSheetConfig(!showSheetConfig)}
                      className="text-xs font-mono-tech text-emerald-500 hover:underline text-left cursor-pointer font-bold"
                    >
                      {showSheetConfig ? 'Hide Sheet Sync' : 'Google Sheet Sync 📊'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Change PIN Panel (Toggleable) */}
              {showPinChange && (
                <form
                  onSubmit={handleChangePin}
                  className={`p-4 rounded-2xl border space-y-3 ${
                    isLight ? 'bg-red-50/50 border-red-200' : 'bg-red-950/20 border-red-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h5 className="font-impact text-sm uppercase tracking-wider text-red-500">
                      UPDATE VAULT PIN
                    </h5>
                    {pinChangeMsg && (
                      <span className="text-xs font-mono-tech text-emerald-500 font-bold">
                        {pinChangeMsg}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      value={newPin}
                      onChange={(e) => setNewPin(e.target.value)}
                      placeholder="Enter new 4+ digit PIN"
                      className={`flex-1 px-3 py-2 rounded-xl border text-xs font-mono-tech focus:outline-none ${
                        isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-black/70 border-white/20 text-white'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-mono-tech uppercase font-bold cursor-pointer"
                    >
                      SAVE PIN
                    </button>
                  </div>
                </form>
              )}

              {/* Google Sheets Sync Panel (Toggleable) */}
              {showSheetConfig && (
                <form
                  onSubmit={handleSaveSheetWebhook}
                  className={`p-4 rounded-2xl border space-y-3 ${
                    isLight ? 'bg-emerald-50/50 border-emerald-200' : 'bg-emerald-950/20 border-emerald-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-impact text-sm uppercase tracking-wider text-emerald-500">
                        GOOGLE SHEETS WEBHOOK (OPTION B)
                      </h5>
                      <p className="text-[11px] font-mono-tech text-zinc-400 mt-0.5">
                        Feedback is automatically emailed to <strong>{RECIPIENT_EMAIL}</strong>. Paste a Google Apps Script Webhook URL below to also append rows automatically to a private Google Sheet.
                      </p>
                    </div>
                    {sheetSavedMsg && (
                      <span className="text-xs font-mono-tech text-emerald-500 font-bold shrink-0">
                        {sheetSavedMsg}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={sheetWebhookInput}
                      onChange={(e) => setSheetWebhookInput(e.target.value)}
                      placeholder="https://script.google.com/macros/s/.../exec"
                      className={`flex-1 px-3 py-2 rounded-xl border text-xs font-mono-tech focus:outline-none ${
                        isLight ? 'bg-white border-zinc-300 text-zinc-900' : 'bg-black/70 border-white/20 text-white'
                      }`}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-mono-tech uppercase font-bold cursor-pointer"
                    >
                      SAVE WEBHOOK
                    </button>
                  </div>
                </form>
              )}

              {/* Action Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                {/* Rating filter tabs */}
                <div className="flex items-center gap-1 overflow-x-auto pb-1">
                  <span className="text-xs font-mono-tech text-zinc-400 uppercase mr-1">
                    Filter:
                  </span>
                  {(['all', 5, 4, 3, 2, 1] as const).map((starVal) => {
                    const isSelected = filterRating === starVal;
                    return (
                      <button
                        key={starVal}
                        type="button"
                        onClick={() => {
                          soundFx.playClick();
                          setFilterRating(starVal);
                        }}
                        className={`px-2.5 py-1 rounded-lg text-xs font-mono-tech border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-red-600 text-white border-red-500 font-bold'
                            : isLight
                            ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-200 text-zinc-700'
                            : 'bg-zinc-900 hover:bg-zinc-800 border-white/10 text-zinc-400'
                        }`}
                      >
                        {starVal === 'all' ? 'All' : `${starVal} ★`}
                      </button>
                    );
                  })}
                </div>

                {/* CSV export & Clear buttons */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      soundFx.playClick();
                      exportFeedbacksToCSV(feedbacks);
                    }}
                    disabled={feedbacks.length === 0}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono-tech uppercase font-bold transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                      isLight
                        ? 'bg-zinc-100 hover:bg-zinc-200 border-zinc-300 text-zinc-800'
                        : 'bg-zinc-900 hover:bg-zinc-800 border-white/15 text-white'
                    }`}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>EXPORT CSV</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleClearAll}
                    disabled={feedbacks.length === 0}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-red-500/30 text-red-500 hover:bg-red-500/10 text-xs font-mono-tech uppercase font-bold transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">CLEAR ALL</span>
                  </button>
                </div>
              </div>

              {/* Feedbacks List */}
              <div className="space-y-3">
                {filteredFeedbacks.length === 0 ? (
                  <div className={`py-12 text-center rounded-2xl border border-dashed ${
                    isLight ? 'border-zinc-300 bg-zinc-50' : 'border-zinc-800 bg-black/40'
                  }`}>
                    <Sparkles className="w-8 h-8 mx-auto text-zinc-400 mb-2 opacity-50" />
                    <p className="font-impact text-lg uppercase tracking-wider text-zinc-400">
                      NO FEEDBACK FOUND
                    </p>
                    <p className={`text-xs font-mono-tech mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-500'}`}>
                      {feedbacks.length === 0
                        ? 'No submissions received yet. When visitors submit feedback, it will appear here.'
                        : 'No submissions match the selected star rating filter.'}
                    </p>
                  </div>
                ) : (
                  filteredFeedbacks.map((item) => (
                    <div
                      key={item.id}
                      className={`p-5 rounded-2xl border space-y-3 transition-colors ${
                        isLight
                          ? 'bg-zinc-50/80 border-zinc-200 hover:border-zinc-300'
                          : 'bg-black/60 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Item Top Bar */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-current/10 pb-3">
                        <div className="flex items-center gap-2">
                          {/* Stars */}
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[1, 2, 3, 4, 5].map((s) => (
                              <Star
                                key={s}
                                className={`w-4 h-4 ${
                                  s <= item.rating
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-zinc-300 dark:text-zinc-700'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-mono-tech font-bold text-amber-500">
                            {item.rating}/5
                          </span>
                          <span className="text-xs font-mono-tech px-2 py-0.5 rounded-full bg-red-600/10 text-red-500 border border-red-500/20 font-bold uppercase">
                            {item.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono-tech text-zinc-400 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(item.createdAt).toLocaleString()}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleDeleteItem(item.id)}
                            className="text-zinc-400 hover:text-red-500 p-1 transition-colors"
                            title="Delete entry"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Comment */}
                      <p className={`text-sm leading-relaxed font-sans whitespace-pre-wrap ${
                        isLight ? 'text-zinc-800' : 'text-zinc-200'
                      }`}>
                        "{item.feedback}"
                      </p>

                      {/* Reviewer Meta Details */}
                      <div className="flex flex-wrap items-center gap-3 text-xs font-mono-tech text-zinc-500 pt-1 border-t border-current/5">
                        <span className="flex items-center gap-1 font-semibold text-red-500">
                          <User className="w-3 h-3" />
                          Role: {item.reviewerRole}
                        </span>

                        <span>&bull;</span>

                        <span>
                          From: {item.isAnonymous ? 'Anonymous' : item.name || 'Anonymous'}
                        </span>

                        {item.email && !item.isAnonymous && (
                          <>
                            <span>&bull;</span>
                            <a
                              href={`mailto:${item.email}?subject=Thank%20you%20for%20your%20portfolio%20feedback!`}
                              className="text-blue-500 hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              {item.email}
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>

            </div>
          )}
        </div>

        {/* Footer info */}
        <div className={`px-6 py-2.5 border-t text-[10px] font-mono-tech flex items-center justify-between ${
          isLight ? 'bg-zinc-100 border-zinc-200 text-zinc-500' : 'bg-black/90 border-white/10 text-zinc-500'
        }`}>
          <span>SHORTCUT: PRESS CTRL + SHIFT + F TO TOGGLE</span>
          <span className="uppercase">ENCRYPTED LOCAL AUDIT LOG</span>
        </div>

      </motion.div>
    </div>
  );
};
