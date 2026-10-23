import React from 'react';

interface DiagonalStreaksProps {
  density?: 'low' | 'medium' | 'high';
  opacity?: number;
}

export const DiagonalStreaks: React.FC<DiagonalStreaksProps> = ({
  density = 'medium',
  opacity = 0.85
}) => {
  // Pre-configured positions & colors matching the reference video:
  // 45-degree diagonal streaks with red, bright pink, coral, and white neon highlights
  const streaks = [
    { top: '8%', left: '12%', width: '130px', height: '4px', color: '#ff1744', delay: '0s', dur: '5s' },
    { top: '15%', left: '42%', width: '180px', height: '5px', color: '#f43f5e', delay: '1.2s', dur: '6s' },
    { top: '22%', left: '78%', width: '90px', height: '3px', color: '#fda4af', delay: '0.5s', dur: '4.5s' },
    { top: '35%', left: '5%', width: '150px', height: '4px', color: '#dc2626', delay: '2s', dur: '5.5s' },
    { top: '48%', left: '30%', width: '110px', height: '3px', color: '#ff2a5f', delay: '0.8s', dur: '4s' },
    { top: '55%', left: '65%', width: '210px', height: '5px', color: '#f43f5e', delay: '2.5s', dur: '6.5s' },
    { top: '68%', left: '18%', width: '140px', height: '4px', color: '#ff4d6d', delay: '1.7s', dur: '5.2s' },
    { top: '75%', left: '82%', width: '120px', height: '4px', color: '#fda4af', delay: '3.1s', dur: '4.8s' },
    { top: '85%', left: '48%', width: '160px', height: '4px', color: '#ef4444', delay: '1.1s', dur: '5.8s' },
    { top: '92%', left: '88%', width: '100px', height: '3px', color: '#ffffff', delay: '2.8s', dur: '4.2s' },
    // Extra streaks for high density
    { top: '28%', left: '88%', width: '140px', height: '4px', color: '#ff1744', delay: '3.5s', dur: '6.2s' },
    { top: '62%', left: '8%', width: '170px', height: '4px', color: '#f43f5e', delay: '1.9s', dur: '5.1s' },
  ];

  const visibleStreaks = density === 'low' 
    ? streaks.slice(0, 6) 
    : density === 'medium' 
    ? streaks.slice(0, 9) 
    : streaks;

  return (
    <div 
      className="pointer-events-none absolute inset-0 overflow-hidden z-0 select-none"
      style={{ opacity }}
    >
      {visibleStreaks.map((streak, i) => (
        <div
          key={i}
          className="absolute rounded-full shadow-lg"
          style={{
            top: streak.top,
            left: streak.left,
            width: streak.width,
            height: streak.height,
            backgroundColor: streak.color,
            boxShadow: `0 0 12px ${streak.color}`,
            transform: 'rotate(-45deg)',
            animation: `streakFloat ${streak.dur} ease-in-out infinite alternate`,
            animationDelay: streak.delay,
            filter: 'blur(0.4px)',
          }}
        />
      ))}
      <style>{`
        @keyframes streakFloat {
          0% {
            transform: rotate(-45deg) translate(-15px, -15px);
            opacity: 0.65;
          }
          50% {
            transform: rotate(-45deg) translate(0px, 0px);
            opacity: 1;
          }
          100% {
            transform: rotate(-45deg) translate(20px, 20px);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};
