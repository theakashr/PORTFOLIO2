import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';
import { useTheme } from '../context/ThemeContext';
import { NavbarThemeSwitcher, MobileThemeSwitcher } from './ThemeToggle';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const { isLight } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      if (mobileMenuOpen) setMobileMenuOpen(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const handleAudioToggle = () => {
    const isNowActive = soundFx.toggleMute();
    setIsAudioMuted(!isNowActive);
  };

  const navLinks = [
    { name: 'INTRO', href: '#intro' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'HACKATHONS', href: '#hackathons' },
    { name: 'CERTS', href: '#certifications' },
    { name: 'ABOUT', href: '#about' },
    { name: 'ACADEMICS', href: '#academics' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isLight
            ? 'bg-white/90 backdrop-blur-md border-b border-zinc-200/80 py-2.5 shadow-sm text-zinc-900'
            : 'bg-black/85 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl text-white'
          : 'bg-transparent py-3 sm:py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo / Monogram */}
        <a
          href="#intro"
          onClick={() => soundFx.playClick()}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-950 flex items-center justify-center border border-red-500/30 group-hover:border-red-400 transition-colors shadow-lg shadow-red-900/30">
            <span className="font-impact text-xl tracking-wider text-white">AR</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-impact tracking-wider text-xl leading-none transition-colors ${
              isLight ? 'text-zinc-900 group-hover:text-red-600' : 'text-white group-hover:text-red-400'
            }`}>
              AKASH R
            </span>
            <span className={`text-[10px] tracking-widest uppercase font-mono-tech ${
              isLight ? 'text-zinc-500' : 'text-zinc-400'
            }`}>
              ENGINEER &bull; AI
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className={`hidden md:flex items-center gap-1 backdrop-blur-md border px-3 py-1.5 rounded-full transition-colors ${
          isLight
            ? 'bg-zinc-100/90 border-zinc-200 text-zinc-700 shadow-xs'
            : 'bg-black/40 border-white/10 text-zinc-300'
        }`}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => soundFx.playHover()}
                className={`relative px-2.5 lg:px-3.5 py-1.5 text-[11px] lg:text-xs font-semibold tracking-wider rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-red-600 shadow-md shadow-red-600/30'
                    : isLight
                    ? 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
                    : 'text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Switcher Toggle (White / Black) */}
          <NavbarThemeSwitcher />

          {/* Ask Akash AI Quick Trigger */}
          <button
            onClick={() => {
              soundFx.playClick();
              window.dispatchEvent(new CustomEvent('open-ask-akash-ai'));
            }}
            aria-label="Open AI Assistant"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono-tech transition-all border cursor-pointer ${
              isLight
                ? 'bg-amber-50/80 hover:bg-amber-100 border-amber-300 text-amber-900 shadow-xs'
                : 'bg-red-950/40 hover:bg-red-900/60 border-red-500/40 text-red-200'
            }`}
            title="Chat with Akash's Portfolio AI"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="font-bold">ASK AI</span>
          </button>

          {/* Audio Experience Toggle */}
          <button
            onClick={handleAudioToggle}
            aria-label="Toggle cinematic sound"
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono-tech transition-all border ${
              !isAudioMuted
                ? 'bg-red-600/10 border-red-500/60 text-red-600 shadow-xs'
                : isLight
                ? 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900'
                : 'bg-zinc-900/70 border-white/10 text-zinc-400 hover:text-white'
            }`}
          >
            {!isAudioMuted ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-red-600 animate-pulse" />
                <span className="hidden sm:inline text-[11px] font-bold">AUDIO ON</span>
                <div className="flex items-end gap-0.5 h-3">
                  <span className="w-0.5 bg-red-600 rounded-full animate-bounce h-2" style={{ animationDelay: '0.1s' }} />
                  <span className="w-0.5 bg-red-600 rounded-full animate-bounce h-3" style={{ animationDelay: '0.3s' }} />
                  <span className="w-0.5 bg-red-600 rounded-full animate-bounce h-1.5" style={{ animationDelay: '0.2s' }} />
                </div>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px]">AUDIO OFF</span>
              </>
            )}
          </button>

          {/* Quick CTA */}
          <a
            href="#contact"
            onClick={() => soundFx.playClick()}
            className="hidden sm:flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold text-xs tracking-wider uppercase px-4 py-2 rounded-full border border-red-500/40 shadow-md shadow-red-900/30 transition-all hover:scale-105"
          >
            <span>LET'S TALK</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open navigation menu"
            className={`md:hidden p-2 rounded-lg border transition-colors ${
              isLight
                ? 'bg-zinc-100 border-zinc-300 text-zinc-800 hover:bg-zinc-200'
                : 'bg-zinc-900 border-white/10 text-white hover:bg-zinc-800'
            }`}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={`md:hidden backdrop-blur-xl border-b px-6 py-6 transition-colors ${
          isLight
            ? 'bg-white/95 border-zinc-200 text-zinc-900 shadow-xl'
            : 'bg-zinc-950/95 border-white/10 text-white'
        }`}>
          <div className="flex flex-col gap-3">
            {/* Mobile Background Theme Switcher */}
            <MobileThemeSwitcher />

            <div className="border-t border-zinc-200/50 dark:border-white/10 my-1" />

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${
                  isLight
                    ? 'text-zinc-700 hover:text-red-600 hover:bg-red-50'
                    : 'text-zinc-300 hover:text-white hover:bg-red-600/20'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent('open-ask-akash-ai'));
              }}
              className="mt-2 flex items-center justify-center gap-2 bg-amber-500/15 border border-amber-500/40 text-amber-500 text-sm font-bold tracking-wider uppercase py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>ASK AKASH AI ASSISTANT</span>
            </button>
            <a
              href="#contact"
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
              }}
              className="mt-3 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-wider uppercase py-3 rounded-xl shadow-lg shadow-red-900/50"
            >
              <span>LET'S BUILD SOMETHING GREAT</span>
              <Sparkles className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

