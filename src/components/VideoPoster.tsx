import { ArrowRight, Play } from 'lucide-react';

export default function VideoPoster() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center bg-gradient-to-br from-[#1b032a] via-[#2d0845] to-[#1b032a] overflow-hidden">
      {/* Faint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.08)_0%,transparent_60%)]"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-[#E9A820] rounded-full blur-[100px] sm:blur-[150px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-[#E9A820] rounded-full blur-[100px] sm:blur-[150px] opacity-15"></div>

      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[100svh]">
          {/* Content Side */}
          <div className="flex items-center justify-center px-6 sm:px-12 lg:px-16 py-16 lg:py-0 order-2 lg:order-1">
            <div className="max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#E9A820]/10 border border-[#E9A820]/30 px-4 py-2 mb-6">
                <Play className="w-4 h-4 text-[#E9A820]" />
                <span className="text-[#E9A820] text-sm font-medium tracking-wider uppercase">Featured Work</span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
                STORIES THAT
                <span className="block text-[#E9A820]">CAPTIVATE</span>
              </h2>

              {/* Description */}
              <p className="text-white/70 text-base sm:text-lg mb-8 leading-relaxed">
                Every frame is crafted with cinematic precision. From dramatic landscapes to intimate portraits, 
                we create visual narratives that resonate with your audience and elevate your brand above the noise.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E9A820]">10+</div>
                  <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">Years Experience</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E9A820]">150+</div>
                  <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#E9A820]">4K+</div>
                  <div className="text-white/50 text-xs sm:text-sm uppercase tracking-wider">Broadcast Ready</div>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={scrollToContact}
                className="group inline-flex items-center gap-3 bg-[#E9A820] text-black px-8 py-4 font-bold tracking-wider hover:bg-[#f4c430] transition-all duration-300"
              >
                START YOUR PROJECT
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Video Side */}
          <div className="relative flex items-center justify-center px-6 py-12 lg:py-0 order-1 lg:order-2 bg-black/20">
            {/* Video Container - Portrait/Vertical aspect ratio */}
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px]">
              {/* Outer glow */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#E9A820]/20 via-[#E9A820]/10 to-[#E9A820]/20 blur-xl"></div>
              
              {/* Video Frame */}
              <div className="relative bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] p-2 sm:p-3 shadow-2xl">
                {/* Corner accents */}
                <div className="absolute top-2 left-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse"></div>
                <div className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

                {/* Inner video container with 9:16 aspect ratio */}
                <div className="relative border-2 border-[#E9A820]/40 overflow-hidden" style={{ paddingTop: '177.78%' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1145990707?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&background=1"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    title="Piper Alpha North Sea"
                  />
                  
                  {/* Scan lines overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10"></div>
                </div>
              </div>

              {/* Video label */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
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
