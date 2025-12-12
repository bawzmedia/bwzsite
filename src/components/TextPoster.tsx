import { useState, useEffect } from 'react';

export default function TextPoster() {
  const [activeSquares, setActiveSquares] = useState<Set<number>>(new Set());
  const gridSize = 20; // 20x20 grid
  const totalSquares = gridSize * gridSize;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSquares(prev => {
        const newSet = new Set(prev);
        
        // Randomly add 2-4 new squares
        const numToAdd = Math.floor(Math.random() * 3) + 2;
        for (let i = 0; i < numToAdd; i++) {
          const randomSquare = Math.floor(Math.random() * totalSquares);
          newSet.add(randomSquare);
        }
        
        // Randomly remove 2-4 squares
        const numToRemove = Math.floor(Math.random() * 3) + 2;
        const activeArray = Array.from(newSet);
        for (let i = 0; i < numToRemove && activeArray.length > 0; i++) {
          const randomIndex = Math.floor(Math.random() * activeArray.length);
          newSet.delete(activeArray[randomIndex]);
          activeArray.splice(randomIndex, 1);
        }
        
        return newSet;
      });
    }, 300); // Update every 300ms

    return () => clearInterval(interval);
  }, [totalSquares]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-[#E9A820] overflow-hidden py-12 sm:py-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 grid" style={{ 
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}>
        {Array.from({ length: totalSquares }).map((_, index) => (
          <div
            key={index}
            className="transition-all duration-700 ease-in-out"
            style={{
              backgroundColor: activeSquares.has(index) ? '#1a0832' : 'transparent',
              opacity: activeSquares.has(index) ? 0.3 : 0,
            }}
          />
        ))}
      </div>

      {/* Static grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* Film Strip Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[20%] left-0 right-0 h-12 sm:h-16 bg-black/20 animate-scroll-left"></div>
        <div className="absolute top-[50%] left-0 right-0 h-8 sm:h-12 bg-black/10 animate-scroll-right"></div>
        <div className="absolute top-[75%] left-0 right-0 h-6 sm:h-10 bg-black/15 animate-scroll-left-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <h2 className="text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[10vw] font-black leading-[0.85] text-black mb-4 sm:mb-6">
          EVERY
          <br />
          FRAME
          <br />
          COUNTS
        </h2>

        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-black/70 max-w-2xl mx-auto leading-relaxed px-2">
          We obsess over every pixel, every transition, every moment. 
          <span className="text-black"> Because mediocre isn't in our vocabulary.</span>
        </p>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 sm:h-2 bg-[#1a0832]"></div>
    </section>
  );
}
