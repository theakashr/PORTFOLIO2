import React from 'react';
import { Sun, Moon, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { soundFx } from '../utils/audio';

/**
 * Segmented Navbar Switcher: [ ☀️ WHITE | 🌙 BLACK ]
 */
export const NavbarThemeSwitcher: React.FC = () => {
  const { isLight, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Background Color Selector"
      className={`inline-flex items-center p-1 rounded-full border transition-all duration-300 ${
        isLight
          ? 'bg-zinc-100/90 border-zinc-300 shadow-inner'
          : 'bg-zinc-900/90 border-zinc-700/80 shadow-inner'
      }`}
    >
      {/* White / Light Option */}
      <button
        type="button"
        onClick={() => {
          if (!isLight) {
            soundFx.playClick();
            setTheme('light');
          }
        }}
        aria-pressed={isLight}
        title="Switch to White Background"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono-tech font-bold transition-all duration-200 cursor-pointer ${
          isLight
            ? 'bg-white text-zinc-900 shadow-sm border border-zinc-200/80 scale-[1.02]'
            : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
        }`}
      >
        <Sun className={`w-3.5 h-3.5 ${isLight ? 'text-amber-500' : 'text-zinc-400'}`} />
        <span className="text-[11px] tracking-wider uppercase">WHITE</span>
      </button>

      {/* Black / Dark Option */}
      <button
        type="button"
        onClick={() => {
          if (isLight) {
            soundFx.playClick();
            setTheme('dark');
          }
        }}
        aria-pressed={!isLight}
        title="Switch to Black Background"
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono-tech font-bold transition-all duration-200 cursor-pointer ${
          !isLight
            ? 'bg-black text-white shadow-sm border border-zinc-700 scale-[1.02]'
            : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-200/60'
        }`}
      >
        <Moon className={`w-3.5 h-3.5 ${!isLight ? 'text-blue-400' : 'text-zinc-500'}`} />
        <span className="text-[11px] tracking-wider uppercase">BLACK</span>
      </button>
    </div>
  );
};

/**
 * Floating Theme Switcher Dock:
 * Stays visible at the bottom of the viewport so visitors can switch between White & Black at any point!
 */
export const FloatingThemeSwitcher: React.FC = () => {
  const { isLight, setTheme } = useTheme();

  return (
    <aside
      aria-label="Background Color Controls"
      className="fixed bottom-5 right-5 z-40 print:hidden select-none"
    >
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-2xl backdrop-blur-xl border shadow-2xl transition-all duration-300 ${
          isLight
            ? 'bg-white/95 border-zinc-300 text-zinc-900 shadow-zinc-400/30'
            : 'bg-zinc-950/95 border-zinc-800 text-white shadow-black/80'
        }`}
      >
        <div className="flex items-center gap-1.5 pl-1 pr-1 border-r border-current/20">
          <span className="text-[10px] font-mono-tech tracking-wider font-extrabold uppercase opacity-70">
            BG
          </span>
        </div>

        {/* Dual button selector */}
        <div className="flex items-center gap-1">
          {/* White option */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setTheme('light');
            }}
            aria-pressed={isLight}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all duration-200 cursor-pointer ${
              isLight
                ? 'bg-zinc-900 text-white shadow-md'
                : 'bg-zinc-800/60 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-white/5'
            }`}
          >
            <Sun className={`w-3.5 h-3.5 ${isLight ? 'text-amber-400' : 'text-zinc-400'}`} />
            <span className="text-[11px] tracking-wider">WHITE</span>
            {isLight && <Check className="w-3 h-3 text-emerald-400" />}
          </button>

          {/* Black option */}
          <button
            type="button"
            onClick={() => {
              soundFx.playClick();
              setTheme('dark');
            }}
            aria-pressed={!isLight}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono-tech font-bold transition-all duration-200 cursor-pointer ${
              !isLight
                ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200 hover:text-zinc-900 border border-zinc-200'
            }`}
          >
            <Moon className={`w-3.5 h-3.5 ${!isLight ? 'text-blue-300' : 'text-zinc-600'}`} />
            <span className="text-[11px] tracking-wider">BLACK</span>
            {!isLight && <Check className="w-3 h-3 text-white" />}
          </button>
        </div>
      </div>
    </aside>
  );
};

/**
 * Mobile Drawer Theme Switcher:
 * Large, easy-to-tap selector in the mobile drawer.
 */
export const MobileThemeSwitcher: React.FC = () => {
  const { isLight, setTheme } = useTheme();

  return (
    <div className="flex flex-col gap-2 pt-2 pb-2">
      <span className={`text-[11px] font-mono-tech tracking-wider uppercase font-semibold ${
        isLight ? 'text-zinc-500' : 'text-zinc-400'
      }`}>
        BACKGROUND THEME
      </span>
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => {
            soundFx.playClick();
            setTheme('light');
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-mono-tech font-bold tracking-wider uppercase transition-all ${
            isLight
              ? 'bg-white border-zinc-900 text-zinc-900 shadow-md ring-2 ring-zinc-900/10'
              : 'bg-zinc-900 border-zinc-700 text-zinc-300 hover:bg-zinc-800'
          }`}
        >
          <Sun className="w-3.5 h-3.5 text-amber-500" />
          <span>WHITE BG</span>
          {isLight && <Check className="w-3.5 h-3.5 text-zinc-900" />}
        </button>

        <button
          type="button"
          onClick={() => {
            soundFx.playClick();
            setTheme('dark');
          }}
          className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border text-xs font-mono-tech font-bold tracking-wider uppercase transition-all ${
            !isLight
              ? 'bg-black border-red-500 text-white shadow-md shadow-red-950/50 ring-2 ring-red-500/20'
              : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200'
          }`}
        >
          <Moon className="w-3.5 h-3.5 text-blue-400" />
          <span>BLACK BG</span>
          {!isLight && <Check className="w-3.5 h-3.5 text-red-500" />}
        </button>
      </div>
    </div>
  );
};
