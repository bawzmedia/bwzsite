import { Play } from 'lucide-react';
import { useState } from 'react';

export default function VideoPoster() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = '1136657590';

  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-black">
      {/* Thumbnail background */}
      {!isPlaying && (
        <>
          <div className="absolute inset-0">
            <img
              src={`https://vumbnail.com/${videoId}_large.jpg`}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to Vimeo's own thumbnail API if vumbnail fails
                e.currentTarget.src = `https://i.vimeocdn.com/video/${videoId}_1920x1080.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Play button */}
          <button
            onClick={() => setIsPlaying(true)}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group pointer-events-auto"
            aria-label="Play video"
          >
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-[#E9A820] animate-ping opacity-75"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#E9A820] animate-pulse"></div>
              
              {/* Play button circle */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-[#E9A820] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-[#E9A820]/50">
                <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-black fill-black ml-1" />
              </div>
            </div>
          </button>
        </>
      )}

      {/* Vimeo iframe - loads only when playing */}
      {isPlaying && (
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://player.vimeo.com/video/1136657590?h=4e1f3c8c42&autoplay=1&loop=1&autopause=0&muted=0&title=0&byline=0&portrait=0&controls=1&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[177.77vh] md:min-w-full md:h-[56.25vw] md:min-h-full"
            style={{ border: 'none' }}
            allow="autoplay; fullscreen; picture-in-picture; playsinline"
            allowFullScreen
            title="Showreel"
          />
        </div>
      )}

      {/* Content - Centered Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight">
            <span className="block text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              WORLD CLASS
            </span>
            <span className="block text-[#eaa509] drop-shadow-[0_0_60px_rgba(234,168,32,0.6)] mt-2">
              AI VIDEO PRODUCTION
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}
