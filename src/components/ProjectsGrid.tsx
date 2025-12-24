import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { IMAGES } from '../content/images';

export default function ProjectsGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'LEDCOR',
      category: 'CAMPAIGN FILM',
      image: IMAGES.projects.ledcor,
      stat: 'VALUES',
      metric: 'DRIVEN',
      summary: 'Celebrating International Women\'s Day through powerful storytelling, highlighting diversity and inclusion in construction.'
    },
    {
      title: 'YUKON',
      category: 'BROADCAST',
      image: IMAGES.projects.yukon,
      stat: 'BROADCAST',
      metric: 'CINEMA',
      summary: 'Full post-production on multiple Yukon fishing episodes for national broadcast.'
    },
    {
      title: 'DRONE',
      category: 'SHOWCASE',
      image: IMAGES.projects.drone,
      stat: 'INDIGENOUS',
      metric: 'SKIES',
      summary: 'Showcasing Aboriginal drone piloting skills at Edmonton International Airport.'
    },
    {
      title: 'ICE DOME',
      category: 'EXPERIENTIAL',
      image: IMAGES.projects.iceDome,
      stat: 'CANADIAN',
      metric: 'CULTURE',
      summary: 'Immersive fishing and film environment combining underwater footage with cinematic setup.'
    },
  ];

  return (
    <>
      <section id="portfolio" className="relative min-h-[100svh] bg-black overflow-hidden flex items-center py-12 sm:py-0">
        {/* Faint grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              Our Work
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
              <span className="text-white">FEATURED </span>
              <span className="text-[#E9A820]">PROJECTS</span>
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedProject(index)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/75 transition-all duration-300"></div>

                <div className="absolute inset-0 p-3 sm:p-4 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div
                      className="px-2 py-1 border border-[#E9A820] transition-all duration-500"
                      style={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        transform: hoveredIndex === index ? 'translateY(0)' : 'translateY(-10px)'
                      }}
                    >
                      <span className="text-white text-[8px] sm:text-[10px] font-bold tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center transition-all duration-500"
                      style={{
                        borderColor: hoveredIndex === index ? '#E9A820' : 'rgba(255,255,255,0.3)',
                        transform: hoveredIndex === index ? 'rotate(45deg)' : 'rotate(0)',
                        backgroundColor: hoveredIndex === index ? '#E9A820' : 'transparent'
                      }}
                    >
                      <ArrowUpRight
                        className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-500"
                        style={{
                          transform: hoveredIndex === index ? 'rotate(-45deg)' : 'rotate(0)'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm sm:text-base md:text-lg font-black text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-end gap-1">
                      <span className="text-base sm:text-lg md:text-xl font-black text-[#E9A820]">
                        {project.stat}
                      </span>
                      <span className="text-[8px] sm:text-[10px] tracking-wider text-white/50 font-bold mb-0.5">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-black border-2 border-[#E9A820] overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 z-10 w-10 h-10 bg-[#E9A820] flex items-center justify-center"
            >
              <X className="w-5 h-5 text-black" />
            </button>

            <div className="relative h-40 sm:h-56 overflow-hidden">
              <img
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="inline-block px-3 py-1.5 border border-[#E9A820] mb-3">
                <span className="text-white text-xs font-bold tracking-wider">
                  {projects[selectedProject].category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {projects[selectedProject].title}
              </h3>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-2xl sm:text-3xl font-black text-[#E9A820]">
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
