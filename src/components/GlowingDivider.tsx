import { useEffect, useRef, useState } from 'react';

export default function GlowingDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [glowProgress, setGlowProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!dividerRef.current) return;

      const rect = dividerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how centered the divider is in the viewport
      const dividerCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      
      // Distance from center (0 = perfectly centered)
      const distanceFromCenter = Math.abs(dividerCenter - viewportCenter);
      
      // Convert to progress (1 = centered, 0 = far away)
      // Start animating when within 400px of center
      const maxDistance = 400;
      const progress = Math.max(0, 1 - distanceFromCenter / maxDistance);
      
      setGlowProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      ref={dividerRef}
      className="relative h-24 sm:h-32 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Center line container */}
      <div className="relative w-full max-w-4xl px-8">
        {/* Base faint line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 -translate-y-1/2"></div>
        
        {/* Glowing gold line - expands from center */}
        <div 
          className="absolute top-1/2 left-1/2 h-[2px] -translate-y-1/2 -translate-x-1/2 transition-all duration-100"
          style={{
            width: `${glowProgress * 100}%`,
            background: `linear-gradient(90deg, transparent, #E9A820 20%, #E9A820 80%, transparent)`,
            boxShadow: glowProgress > 0.1 
              ? `0 0 ${20 * glowProgress}px ${8 * glowProgress}px rgba(233, 168, 32, ${0.5 * glowProgress}), 
                 0 0 ${40 * glowProgress}px ${15 * glowProgress}px rgba(233, 168, 32, ${0.3 * glowProgress})`
              : 'none',
            opacity: glowProgress,
          }}
        />
        
        {/* Center diamond accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rotate-45 border-2 transition-all duration-200"
          style={{
            borderColor: glowProgress > 0.3 ? '#E9A820' : 'rgba(255,255,255,0.2)',
            backgroundColor: glowProgress > 0.5 ? 'rgba(233, 168, 32, 0.3)' : 'transparent',
            boxShadow: glowProgress > 0.3 
              ? `0 0 ${15 * glowProgress}px rgba(233, 168, 32, ${0.6 * glowProgress})`
              : 'none',
          }}
        />
      </div>
    </div>
  );
}

