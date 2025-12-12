export default function TextPoster() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center bg-[#E9A820] overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Film Strip Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-[20%] left-0 right-0 h-16 bg-black/20 animate-scroll-left"></div>
        <div className="absolute top-[50%] left-0 right-0 h-12 bg-black/10 animate-scroll-right"></div>
        <div className="absolute top-[75%] left-0 right-0 h-10 bg-black/15 animate-scroll-left-slow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] text-black/50 font-bold mb-4 sm:mb-6">
          THE NUMBERS DON'T LIE
        </div>

        <h2 className="text-[15vw] sm:text-[12vw] md:text-[10vw] font-black leading-[0.9] text-black mb-6 sm:mb-8">
          EVERY
          <br />
          FRAME
          <br />
          COUNTS
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black/70 max-w-3xl mx-auto leading-relaxed">
          We obsess over every pixel, every transition, every moment. 
          <span className="text-black"> Because mediocre isn't in our vocabulary.</span>
        </p>
      </div>

      {/* Bottom stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[#1b032a]"></div>
    </section>
  );
}
