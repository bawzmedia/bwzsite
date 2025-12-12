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
      summary: 'Full post-production on multiple Yukon fishing episodes, delivering complete edits with colour, sound design, pacing, and narrative flow built for national broadcast.'
    },
    {
      title: 'DRONE EXHIBITION',
      category: 'SHOWCASE',
      image: '/DSC04659 1.jpg',
      stat: 'INDIGENOUS',
      metric: 'SKIES',
      summary: 'Showcasing an Aboriginal owned and operated business teaching drone piloting skills at Edmonton International Airport.'
    },
    {
      title: 'ICE DOME CINEMA',
      category: 'EXPERIENTIAL PRODUCTION',
      image: '/IMG_6320.jpg',
      stat: 'CANADIAN',
      metric: 'CULTURE EXPERIENCE',
      summary: 'An immersive fishing and film environment combining real underwater footage with a fully enclosed, cinematic winter setup.'
    },
  ];

  return (
    <>
      <section id="portfolio" className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-4">
              Our Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-white">FEATURED</span>
              <br />
              <span className="text-[#E9A820]">PROJECTS</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between">
                  {/* Top */}
                  <div className="flex justify-between items-start">
                    <div
                      className="px-3 py-1.5 border border-[#E9A820] transform transition-all duration-500"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(-10px)'
                      }}
                    >
                      <span className="text-white text-[10px] sm:text-xs font-bold tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/30 flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: hoveredIndex === index ? '#E9A820' : 'rgba(255,255,255,0.3)',
                        transform: hoveredIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                        backgroundColor: hoveredIndex === index ? '#E9A820' : 'transparent'
                      }}
                    >
                      <ArrowUpRight
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-500"
                        style={{
                          transform: hoveredIndex === index ? 'rotate(-45deg)' : 'rotate(0)'
                        }}
                      />
                    </div>
                  </div>

                  {/* Bottom */}
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-end gap-2">
                      <span className="text-lg sm:text-xl md:text-2xl font-black text-[#E9A820]">
                        {project.stat}
                      </span>
                      <span className="text-[10px] sm:text-xs tracking-wider text-white/50 font-bold mb-1">
                        {project.metric}
                      </span>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-black border-2 border-[#E9A820] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[#E9A820] flex items-center justify-center hover:bg-[#f4c430] transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </button>

            {/* Image */}
            <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10">
              <div className="inline-block px-4 py-2 border border-[#E9A820] mb-4 sm:mb-6">
                <span className="text-white text-xs font-bold tracking-wider">
                  {projects[selectedProject].category}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
                {projects[selectedProject].title}
              </h3>

              <div className="flex items-end gap-3 mb-6 sm:mb-8">
                <span className="text-3xl sm:text-4xl font-black text-[#E9A820]">
                  {projects[selectedProject].stat}
                </span>
                <span className="text-sm tracking-wider text-white/50 font-bold mb-1">
                  {projects[selectedProject].metric}
                </span>
              </div>

              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                {projects[selectedProject].summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
