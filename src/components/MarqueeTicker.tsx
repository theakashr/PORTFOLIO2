import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sparkles, Terminal, Flame, Zap } from 'lucide-react';

interface MarqueeTickerProps {
  className?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ className = '' }) => {
  const { isLight } = useTheme();

  const items = [
    { text: 'I HATE BORING PORTFOLIO WEBSITES', icon: Flame, highlight: true },
    { text: 'AKASH R • FULL-STACK & AI ENGINEER', icon: Terminal, highlight: false },
    { text: 'BIET DAVANAGERE • CSE', icon: Zap, highlight: false },
    { text: 'TURNING IDEAS INTO IMPACTFUL REALITIES', icon: Sparkles, highlight: true },
    { text: 'AVAILABLE FOR FREELANCE & PRODUCT ROLES', icon: Terminal, highlight: false },
    { text: 'EXPLORE WORKS \'26', icon: Flame, highlight: true },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden py-2.5 border-y select-none transition-colors duration-300 ${
        isLight
          ? 'bg-zinc-100 border-zinc-300 text-zinc-900'
          : 'bg-[#0a0202] border-red-900/40 text-white'
      } ${className}`}
    >
      {/* Edge gradient fades for seamless infinite scroll effect */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors ${
          isLight
            ? 'bg-gradient-to-r from-zinc-100 to-transparent'
            : 'bg-gradient-to-r from-[#0a0202] to-transparent'
        }`}
      />
      <div
        className={`absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-10 pointer-events-none transition-colors ${
          isLight
            ? 'bg-gradient-to-l from-zinc-100 to-transparent'
            : 'bg-gradient-to-l from-[#0a0202] to-transparent'
        }`}
      />

      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {/* Doubled list for smooth continuous looping marquee */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3">
              <span
                className={`flex items-center gap-2 text-xs sm:text-sm font-mono-tech uppercase font-bold tracking-wider ${
                  item.highlight
                    ? isLight
                      ? 'text-red-700 bg-red-100/80 px-2.5 py-0.5 rounded-full border border-red-300'
                      : 'text-yellow-400 bg-yellow-400/10 px-2.5 py-0.5 rounded-full border border-yellow-400/30'
                    : isLight
                    ? 'text-zinc-700'
                    : 'text-zinc-300'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${item.highlight ? (isLight ? 'text-red-600' : 'text-yellow-400') : 'text-red-500'}`} />
                {item.text}
              </span>
              <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-zinc-400' : 'bg-red-600/60'}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
