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

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pointer-events-none z-10">
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight drop-shadow-2xl">
            <span className="text-[#eaa509]">WORLD CLASS</span>
            <br />
            <span className="text-white">AI VIDEO PRODUCTION</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
