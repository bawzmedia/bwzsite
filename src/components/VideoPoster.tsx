import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoPoster() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '1136657590';

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-gradient-to-br from-[#1b032a] via-[#2d0845] to-[#1b032a] overflow-hidden py-12 sm:py-0">
      {/* Faint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.08)_0%,transparent_60%)]"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 sm:w-64 sm:h-64 bg-[#E9A820] rounded-full blur-[100px] sm:blur-[150px] opacity-20"></div>
      <div className="absolute bottom-1/4 -right-20 w-40 h-40 sm:w-64 sm:h-64 bg-[#E9A820] rounded-full blur-[100px] sm:blur-[150px] opacity-15"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Video Frame */}
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#E9A820]/20 via-[#E9A820]/10 to-[#E9A820]/20 blur-lg sm:blur-xl"></div>
          
          {/* Outer frame */}
          <div className="relative bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] p-1.5 sm:p-3 shadow-2xl">
            {/* Corner accents */}
            <div className="absolute top-1.5 left-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse"></div>
            <div className="absolute top-1.5 right-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1.5 left-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-1.5 right-1.5 w-2 h-2 sm:w-3 sm:h-3 bg-[#E9A820] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Inner screen */}
            <div className="relative bg-black border-2 border-[#E9A820]/40 overflow-hidden aspect-video">
              {/* Thumbnail */}
              {!isPlaying && (
                <>
                  <img
                    src={`https://vumbnail.com/${videoId}_large.jpg`}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://i.vimeocdn.com/video/${videoId}_1920x1080.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 border-2 sm:border-4 border-[#E9A820] animate-ping opacity-50"></div>
                      
                      <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#E9A820] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#E9A820]/50">
                        <Play className="w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-black ml-0.5 sm:ml-1" />
                      </div>
                    </div>
                  </button>
                </>
              )}

              {/* Vimeo iframe */}
              {isPlaying && (
                <iframe
                  src="https://player.vimeo.com/video/1136657590?h=4e1f3c8c42&autoplay=1&loop=1&autopause=0&muted=0&title=0&byline=0&portrait=0&controls=1&playsinline=1"
                  className="w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture; playsinline"
                  allowFullScreen
                  title="Showreel"
                />
              )}

              {/* Scan lines overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
