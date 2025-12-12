import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMuted, setIsMuted] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMute = () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      const player = iframeRef.current.contentWindow;
      if (isMuted) {
        player.postMessage('{"method":"setVolume","value":1}', '*');
      } else {
        player.postMessage('{"method":"setVolume","value":0}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Vimeo Background Video */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1136657590?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
            className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] min-w-full min-h-full object-cover"
            style={{
              transform: 'translate(-50%, -50%)',
              width: '100vw',
              height: '56.25vw',
              minHeight: '100vh',
              minWidth: '177.77vh',
            }}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            title="Alberta Training Services"
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-32 right-8 z-[100] p-4 bg-black/70 border-2 border-[#eaa509] hover:bg-[#eaa509]/30 transition-all group rounded-lg backdrop-blur-sm"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-8 h-8 text-white group-hover:text-[#eaa509] transition-colors" />
        ) : (
          <Volume2 className="w-8 h-8 text-[#eaa509] group-hover:text-white transition-colors animate-pulse" />
        )}
      </button>

      {/* Glitch text overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          {/* Main text */}
          <h1 className="text-[12vw] md:text-[10vw] font-black leading-none text-center">
            <span className="block" style={{
              transform: `translateX(${Math.sin(scrollY * 0.01) * 5}px)`,
              animation: 'glitch 3s infinite'
            }}>
              <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">WORLD CLASS</span>
            </span>
            <span className="block mt-[-2vw]" style={{
              transform: `translateX(${Math.cos(scrollY * 0.01) * 5}px)`,
              filter: 'drop-shadow(0 0 30px #E9A820)'
            }}>
              <span className="text-[#eaa509] animate-pulse-slow">
                AI VIDEO PRODUCTION
              </span>
            </span>
          </h1>

          {/* Glitch layers */}
          <div className="absolute inset-0 text-[12vw] md:text-[10vw] font-black leading-none text-center opacity-20 mix-blend-overlay" style={{
            transform: 'translate(-2px, -2px)',
            color: '#2d1654',
            animation: 'glitch-1 2s infinite'
          }} aria-hidden="true">
            <span className="block">WORLD CLASS</span>
            <span className="block mt-[-2vw]">AI VIDEO PRODUCTION</span>
          </div>
          <div className="absolute inset-0 text-[12vw] md:text-[10vw] font-black leading-none text-center opacity-20 mix-blend-overlay" style={{
            transform: 'translate(2px, 2px)',
            color: '#E9A820',
            animation: 'glitch-2 3s infinite'
          }} aria-hidden="true">
            <span className="block">WORLD CLASS</span>
            <span className="block mt-[-2vw]">AI VIDEO PRODUCTION</span>
          </div>
        </div>
      </div>

      {/* CTA at bottom */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 pointer-events-auto">
        <button className="group relative px-16 py-6 overflow-hidden border-2 border-[#eaa509]">
          <span className="relative z-10 flex items-center gap-4 text-white font-black text-2xl tracking-wider">
            ENTER THE FUTURE
            <ArrowRight size={28} className="group-hover:translate-x-3 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-[#eaa509] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest">SCROLL</span>
          <div className="w-px h-12 bg-white/30"></div>
        </div>
      </div>
    </section>
  );
}
