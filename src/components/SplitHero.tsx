import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function SplitHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left side - Content */}
        <div className="relative flex items-center justify-center p-6 sm:p-8 md:p-12 bg-[#1b032a]">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-white/5 animate-pulse"></div>
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] text-white/60 font-bold mb-4 sm:mb-6">
              CREATIVE POWERHOUSE
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-6 sm:mb-8">
              WE DON'T
              <br />
              FOLLOW
              <br />
              TRENDS
              <br />
              <span className="text-[#E9A820]">
                WE SET THEM
              </span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/80 font-light mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              From local storefronts to national broadcasts, brands trust us to enhance their visual identity. Creating raw concepts to culture-shifting campaigns.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative px-6 sm:px-8 md:px-12 py-4 sm:py-5 md:py-6 overflow-hidden border-2 border-[#E9A820]"
            >
              <span className="relative z-10 flex items-center gap-2 sm:gap-3 md:gap-4 text-white font-black text-sm sm:text-base md:text-lg lg:text-xl">
                START YOUR PROJECT
                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#E9A820] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative">
          <img
            src="/A7404497.jpg"
            alt="Creative Work"
            className="w-full h-full object-cover"
          />

          {/* Floating badge */}
          <div className="absolute top-6 sm:top-8 md:top-12 right-6 sm:right-8 md:right-12 bg-black/80 backdrop-blur-sm border-2 border-[#E9A820] p-4 sm:p-6 md:p-8 text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E9A820] mb-1 sm:mb-2">1 OF 1</div>
            <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white font-bold">CUSTOM PROJECTS</div>
          </div>
        </div>
      </div>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
