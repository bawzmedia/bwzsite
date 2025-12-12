import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoPoster() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '1136657590';

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,168,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,168,32,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Glowing orbs */}
      <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#1b032a] rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#E9A820] rounded-full blur-[100px] opacity-20"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-4">
            See It In Action
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            SHOWREEL
          </h2>
        </div>

        {/* Video Frame */}
        <div className="relative">
          {/* Outer frame */}
          <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#0a0a0a] to-black p-2 sm:p-3 md:p-4 shadow-2xl">
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-[#E9A820] animate-pulse"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#E9A820] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#1b032a] animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#1b032a] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            {/* Inner screen */}
            <div className="relative bg-black border-2 border-[#E9A820]/30 overflow-hidden aspect-video">
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
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Play button */}
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 border-4 border-[#E9A820] animate-ping opacity-50"></div>
                      
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-[#E9A820] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#E9A820]/50">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-black ml-1" />
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
