export default function VideoPoster() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden bg-black">
      {/* Background fallback for when video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Vimeo iframe background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <iframe
          src="https://player.vimeo.com/video/1136657590?h=4e1f3c8c42&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0&background=1&playsinline=1"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[177.77vh] md:min-w-full md:h-[56.25vw] md:min-h-full object-cover"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; picture-in-picture; playsinline"
          allowFullScreen
          title="Showreel"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 flex justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pointer-events-none">
        <div className="text-center px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black leading-tight">
            <span className="text-[#eaa509]">WORLD CLASS</span>
            <br />
            <span className="text-white">AI VIDEO PRODUCTION</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
