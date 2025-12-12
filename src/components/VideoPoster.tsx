import { ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function VideoPoster() {
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleMute = () => {
    if (iframeRef.current) {
      const message = isMuted 
        ? '{"method":"setVolume","value":1}' 
        : '{"method":"setVolume","value":0}';
      iframeRef.current.contentWindow?.postMessage(message, '*');
      setIsMuted(!isMuted);
    }
  };

  // Initialize Vimeo player when iframe loads
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Handle Vimeo player events if needed
      if (event.origin.includes('vimeo.com')) {
        try {
          const data = JSON.parse(event.data);
          if (data.event === 'ready') {
            // Player is ready
          }
        } catch {
          // Not a JSON message, ignore
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center bg-black overflow-hidden">
      {/* Faint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Golden glow from right side */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#E9A820]/20 via-[#E9A820]/05 to-transparent"></div>
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[#E9A820] rounded-full blur-[200px] opacity-25"></div>
      <div className="absolute bottom-1/3 right-0 w-[300px] h-[300px] bg-[#E9A820] rounded-full blur-[150px] opacity-15"></div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh]">
          {/* Content Side */}
          <div className="flex items-center justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E9A820]/10 border border-[#E9A820]/30 px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-[#E9A820]" />
                <span className="text-[#E9A820] text-sm font-medium tracking-wider uppercase">Limitless Vision</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                CREATIVITY
                <span className="block text-[#E9A820]">WITHOUT LIMITS</span>
              </h2>

              {/* Description */}
              <p className="text-white/70 text-base sm:text-lg mb-6 leading-relaxed">
                Every idea can become a reality. Every story deserves to be told in a way that's never been done before. 
                We don't believe in templates or formulas—we believe in bringing your unique vision to life with 
                cinematic precision and creative fearlessness.
              </p>

              <p className="text-white/60 text-base sm:text-lg mb-8 leading-relaxed">
                From concept to final frame, we transform imagination into visuals that captivate, inspire, and endure. 
                Your story is one of a kind—and that's exactly how we'll tell it.
              </p>

              {/* Creative promises */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                <div className="border-l-2 border-[#E9A820] pl-4">
                  <div className="text-white font-bold text-sm uppercase tracking-wider">Any Vision</div>
                  <div className="text-white/50 text-xs">Brought to life</div>
                </div>
                <div className="border-l-2 border-[#E9A820] pl-4">
                  <div className="text-white font-bold text-sm uppercase tracking-wider">Every Story</div>
                  <div className="text-white/50 text-xs">Uniquely told</div>
                </div>
                <div className="border-l-2 border-[#E9A820] pl-4">
                  <div className="text-white font-bold text-sm uppercase tracking-wider">No Limits</div>
                  <div className="text-white/50 text-xs">Just possibilities</div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-[#E9A820] text-black px-8 py-4 font-bold tracking-wider hover:bg-[#f4c430] transition-all duration-300"
              >
                BRING YOUR VISION TO LIFE
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Video Side */}
          <div className="relative flex items-center justify-center px-6 py-12 lg:py-0 order-1 lg:order-2">
            {/* Video Container - Portrait/Vertical aspect ratio */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Outer glow */}
              <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#E9A820]/15 via-[#E9A820]/10 to-[#E9A820]/15 blur-2xl"></div>
              
              {/* Video container with 9:16 aspect ratio */}
              <div className="relative overflow-hidden" style={{ paddingTop: '177.78%' }}>
                <iframe 
                  ref={iframeRef}
                  src="https://player.vimeo.com/video/1145990707?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  title="Piper Alpha North Sea"
                />
                
                {/* Scan lines overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10"></div>

                {/* Mute/Unmute Button - Floating */}
                <button
                  onClick={toggleMute}
                  className="absolute bottom-4 right-4 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-black/70 backdrop-blur-sm border border-[#E9A820]/50 flex items-center justify-center hover:bg-[#E9A820] hover:border-[#E9A820] transition-all duration-300 group"
                  aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9A820] group-hover:text-black transition-colors" />
                  ) : (
                    <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9A820] group-hover:text-black transition-colors" />
                  )}
                </button>
              </div>

              {/* Overlapping Border Frame - 8pt overlap */}
              <div className="absolute -inset-2 pointer-events-none">
                {/* Top border */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#E9A820]"></div>
                {/* Bottom border */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E9A820]"></div>
                {/* Left border */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#E9A820]"></div>
                {/* Right border */}
                <div className="absolute top-0 bottom-0 right-0 w-[2px] bg-[#E9A820]"></div>
                
                {/* Corner accents - overlapping */}
                <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#E9A820]"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#E9A820]"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#E9A820]"></div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#E9A820]"></div>
              </div>

              {/* Video label */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white/50 text-xs uppercase tracking-widest">Live Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
