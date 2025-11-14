export default function TextPoster() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-[#eaa509] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/10 animate-pulse"></div>
      </div>

      {/* Film Timeline Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {/* Top Film Strip */}
          <g className="animate-scroll-left">
            <rect x="0" y="20%" width="100%" height="60" fill="#000000" opacity="0.3"/>
            {[...Array(30)].map((_, i) => (
              <g key={i}>
                <rect x={i * 100 - 100} y="20%" width="80" height="60" fill="none" stroke="#000000" strokeWidth="2"/>
                <rect x={i * 100 - 94} y="calc(20% - 8)" width="8" height="8" fill="#000000"/>
                <rect x={i * 100 - 94} y="calc(20% + 60)" width="8" height="8" fill="#000000"/>
                <rect x={i * 100 - 82} y="calc(20% - 8)" width="8" height="8" fill="#000000"/>
                <rect x={i * 100 - 82} y="calc(20% + 60)" width="8" height="8" fill="#000000"/>
                <text x={i * 100 - 85} y="calc(20% + 35)" fill="#000000" fontSize="10" fontFamily="monospace">{String(i).padStart(4, '0')}</text>
              </g>
            ))}
          </g>

          {/* Middle Film Strip */}
          <g className="animate-scroll-right">
            {[...Array(30)].map((_, i) => (
              <g key={i}>
                <rect x={i * 100} y="50%" width="80" height="60" fill="none" stroke="#000000" strokeWidth="2" opacity="0.3"/>
                <rect x={i * 100 + 6} y="calc(50% - 8)" width="8" height="8" fill="#000000" opacity="0.3"/>
                <rect x={i * 100 + 6} y="calc(50% + 60)" width="8" height="8" fill="#000000" opacity="0.3"/>
              </g>
            ))}
          </g>

          {/* Bottom Film Strip */}
          <g className="animate-scroll-left-slow">
            {[...Array(30)].map((_, i) => (
              <g key={i}>
                <rect x={i * 100 - 50} y="75%" width="80" height="60" fill="none" stroke="#000000" strokeWidth="1" opacity="0.2"/>
                <rect x={i * 100 - 44} y="calc(75% - 6)" width="6" height="6" fill="#000000" opacity="0.2"/>
                <rect x={i * 100 - 44} y="calc(75% + 60)" width="6" height="6" fill="#000000" opacity="0.2"/>
              </g>
            ))}
          </g>
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl">
        <div className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] text-black/60 font-bold mb-4 sm:mb-6 md:mb-8">
          THE NUMBERS DON'T LIE
        </div>

        <h2 className="text-[18vw] sm:text-[15vw] md:text-[12vw] font-black leading-[0.9] text-black mb-6 sm:mb-8 md:mb-12">
          EVERY
          <br />
          FRAME
          <br />
          COUNTS
        </h2>

        <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-black/80 max-w-4xl mx-auto leading-relaxed px-2">
          We obsess over every pixel, every transition, every moment. Because mediocre isn't in our vocabulary.
        </p>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1b032a]"></div>
    </section>
  );
}
