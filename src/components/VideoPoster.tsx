import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoPoster() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '1136657590';

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-[#0a0a0a] to-black flex items-center justify-center py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Futuristic grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,168,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,168,32,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      {/* Glowing orbs */}
      <div className="absolute -top-64 -left-64 w-96 h-96 bg-[#1b032a] rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute -bottom-64 -right-64 w-96 h-96 bg-[#eaa509] rounded-full blur-[120px] opacity-20"></div>

      {/* Content - Centered Text Above TV */}
      <div className="absolute top-8 sm:top-12 md:top-20 left-0 right-0 flex justify-center pointer-events-none z-30">
        <div className="relative text-center px-4 sm:px-6 lg:px-8">
          {/* Solid soft glow behind text */}
          <div className="absolute inset-0 -inset-x-8 -inset-y-4 bg-white/10 blur-3xl rounded-full"></div>
          
          {/* Text content */}
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
            <span className="block text-white">
              WORLD CLASS
            </span>
            <span className="block text-[#eaa509] mt-2">
              AI VIDEO PRODUCTION
            </span>
          </h2>
        </div>
      </div>

      {/* Futuristic TV Frame Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* TV Stand/Base */}
        <div className="absolute -bottom-8 sm:-bottom-12 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-4 sm:h-6 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-t-lg border-t-2 border-[#E9A820]/30"></div>
        <div className="absolute -bottom-4 sm:-bottom-6 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-12 sm:h-16 bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#E9A820]/20"></div>

        {/* Outer TV Frame - Metallic bezel */}
        <div className="relative bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0a0a0a] p-3 sm:p-4 md:p-6 rounded-lg shadow-2xl">
          {/* Corner lights */}
          <div className="absolute top-2 left-2 w-2 h-2 bg-[#E9A820] rounded-full shadow-lg shadow-[#E9A820]/50 animate-pulse"></div>
          <div className="absolute top-2 right-2 w-2 h-2 bg-[#E9A820] rounded-full shadow-lg shadow-[#E9A820]/50 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-2 left-2 w-2 h-2 bg-[#1b032a] rounded-full shadow-lg shadow-[#1b032a]/50 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-2 right-2 w-2 h-2 bg-[#1b032a] rounded-full shadow-lg shadow-[#1b032a]/50 animate-pulse" style={{ animationDelay: '1.5s' }}></div>

          {/* Screen glow effect */}
          <div className="absolute inset-0 bg-[#E9A820] blur-2xl opacity-5"></div>

          {/* Inner screen bezel */}
          <div className="relative bg-black border-4 border-[#E9A820]/30 rounded overflow-hidden aspect-video">
            {/* Screen content */}
            <div className="relative w-full h-full">
              {/* Thumbnail background */}
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group pointer-events-auto"
                    aria-label="Play video"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full border-4 border-[#E9A820] animate-ping opacity-75"></div>
                      <div className="absolute inset-0 rounded-full border-4 border-[#E9A820] animate-pulse"></div>
                      
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#E9A820] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#E9A820]/50">
                        <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-black ml-1" />
                      </div>
                    </div>
                  </button>
                </>
              )}

              {/* Vimeo iframe - loads only when playing */}
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

              {/* Scan lines effect */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10"></div>
            </div>
          </div>

          {/* Bottom bezel detail */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#E9A820]/20 rounded-full"></div>
        </div>

        {/* Side accent lights */}
        <div className="absolute top-1/2 -left-2 w-1 h-32 bg-gradient-to-b from-transparent via-[#E9A820] to-transparent opacity-30"></div>
        <div className="absolute top-1/2 -right-2 w-1 h-32 bg-gradient-to-b from-transparent via-[#E9A820] to-transparent opacity-30"></div>
      </div>
    </section>
  );
}
