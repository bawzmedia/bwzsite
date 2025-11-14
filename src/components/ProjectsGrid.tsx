import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'LEDCOR',
      category: 'CAMPAIGN FILM',
      subcategory: 'INTERNATIONAL WOMEN\'S DAY',
      image: '/LedcorExample_compressed.jpg',
      stat: 'VALUES',
      metric: 'DRIVEN STORYTELLING',
      summary: 'Celebrating International Women\'s Day through powerful storytelling, highlighting diversity and inclusion in construction.'
    },
    {
      title: 'YUKON FISHING',
      category: 'BROADCAST EDITING',
      image: '/DSC03782.jpg',
      stat: 'BROADCAST',
      metric: 'CINEMA',
      summary: 'Full post-production on multiple Yukon fishing episodes, delivering complete edits with colour, sound design, pacing, and narrative flow built for national broadcast. A polished, cinematic series shaped from raw footage into cohesive long-form storytelling for television.'
    },
    {
      title: 'DRONE EXHIBITION',
      category: 'SHOWCASE',
      image: '/DSC04659 1.jpg',
      stat: 'INDIGENOUS',
      metric: 'SKIES',
      summary: 'Showcasing an Aboriginal owned and operated business teaching drone piloting skills. We documented their exhibition at Edmonton International Airport for future investors and digital presence, highlighting indigenous entrepreneurship in aviation technology and education.'
    },
    {
      title: 'ICE DOME CINEMA',
      category: 'EXPERIENTIAL PRODUCTION',
      image: '/IMG_6320.jpg',
      stat: 'CANADIAN',
      metric: 'CULTURE EXPERIENCE',
      summary: 'We created and promoted the Ice Dome Cinema — an immersive fishing and film environment combining real underwater footage with a fully enclosed, cinematic winter setup. Designed and produced as a unique Canadian cultural experience, blending outdoor tradition with modern visual storytelling to captivate guests and elevate brand presence.'
    },
  ];

  return (
    <>
      <section id="portfolio" className="relative min-h-screen bg-black flex items-center overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[6vw] font-black leading-none">
              <span className="text-white">FEATURED</span>
              <br />
              <span className="text-[#eaa509]">
                PROJECTS
              </span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(index)}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/70 group-hover:bg-black/80 transition-opacity"></div>

                {/* Content */}
                <div className="absolute inset-0 p-2 sm:p-3 md:p-4 flex flex-col justify-between">
                  {/* Top - Category */}
                  <div className="flex justify-between items-start">
                    <div
                      className="px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 border transform transition-all duration-500"
                      style={{
                        borderColor: '#E9A820',
                        opacity: hoveredIndex === index ? 1 : 0,
                        translateY: hoveredIndex === index ? 0 : -20
                      }}
                    >
                      <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold tracking-wider sm:tracking-widest">
                        {project.category}
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 border-2 border-white/30 flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: hoveredIndex === index ? '#E9A820' : 'rgba(255,255,255,0.3)',
                        transform: hoveredIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                        backgroundColor: hoveredIndex === index ? '#E9A820' : 'transparent'
                      }}
                    >
                      <ArrowUpRight
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white transition-transform duration-500"
                        style={{
                          transform: hoveredIndex === index ? 'rotate(-45deg)' : 'rotate(0)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom - Title and stat */}
                  <div>
                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-black text-white mb-1 sm:mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <div className="flex items-end gap-1 sm:gap-2">
                      <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black mb-0.5 sm:mb-1"
                        style={{
                          color: '#E9A820',
                          textShadow: '0 0 30px #E9A82060'
                        }}
                      >
                        {project.stat}
                      </div>
                      <div className="text-[9px] sm:text-[10px] md:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 font-bold mb-1 sm:mb-2">
                        {project.metric}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black border-2 overflow-hidden animate-in zoom-in-95 duration-500"
            style={{
              borderColor: '#E9A820',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 border-2 border-white/30 flex items-center justify-center hover:border-[#E9A820] hover:bg-[#E9A820]/20 transition-all group"
            >
              <X size={24} className="text-white group-hover:text-[#E9A820]" />
            </button>

            {/* Image section */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>

            {/* Content section */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-12">
              {/* Category badge */}
              <div
                className="inline-block px-4 py-2 border mb-6"
                style={{
                  borderColor: '#E9A820',
                }}
              >
                <span className="text-white text-xs font-bold tracking-widest">
                  {projects[selectedProject].category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                {projects[selectedProject].title}
              </h3>

              {/* Stats */}
              <div className="flex items-end gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                <div
                  className="text-3xl sm:text-4xl md:text-5xl font-black"
                  style={{
                    color: '#E9A820',
                    textShadow: `0 0 40px #E9A82060`
                  }}
                >
                  {projects[selectedProject].stat}
                </div>
                <div className="text-sm tracking-[0.3em] text-gray-400 font-bold mb-2">
                  {projects[selectedProject].metric}
                </div>
              </div>

              {/* Summary */}
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {projects[selectedProject].summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
