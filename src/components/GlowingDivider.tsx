import { useEffect, useRef, useState } from 'react';

export default function GlowingDivider() {
  const dividerRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered || !dividerRef.current) return;

      const rect = dividerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Trigger when the divider enters the bottom 60% of the viewport
      const triggerPoint = windowHeight * 0.6;
      
      if (rect.top < triggerPoint) {
        setHasTriggered(true);
        setIsAnimating(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered]);

  return (
    <div 
      ref={dividerRef}
      className="relative h-24 sm:h-32 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Full width line container */}
      <div className="relative w-full">
        {/* Base faint line */}
        <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 -translate-y-1/2"></div>
        
        {/* Glowing gold line - expands from center to full width */}
        <div 
          className="absolute top-1/2 left-1/2 h-[2px] -translate-y-1/2 -translate-x-1/2"
          style={{
            width: isAnimating ? '100%' : '0%',
            background: '#E9A820',
            boxShadow: isAnimating 
              ? `0 0 20px 8px rgba(233, 168, 32, 0.5), 
                 0 0 40px 15px rgba(233, 168, 32, 0.3),
                 0 0 60px 25px rgba(233, 168, 32, 0.15)`
              : 'none',
            transition: 'width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease-out',
          }}
        />
        
        {/* Center square accent */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 border-2 transition-all duration-300 z-10"
          style={{
            borderColor: isAnimating ? '#E9A820' : 'rgba(255,255,255,0.2)',
            backgroundColor: isAnimating ? '#E9A820' : 'transparent',
            boxShadow: isAnimating 
              ? '0 0 15px rgba(233, 168, 32, 0.8), 0 0 30px rgba(233, 168, 32, 0.4)'
              : 'none',
            transitionDelay: '0.2s',
          }}
        />
      </div>
    </div>
  );
}
