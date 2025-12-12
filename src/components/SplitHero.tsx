import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function SplitHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Content */}
          <div className="relative flex items-center justify-center p-8 sm:p-12 md:p-16 bg-[#1b032a]">
            {/* Animated background pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="relative z-10 max-w-xl">
              <div className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] text-[#E9A820] font-bold mb-6">
                CREATIVE POWERHOUSE
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6 sm:mb-8">
                WE DON'T
                <br />
                FOLLOW
                <br />
                TRENDS
                <br />
                <span className="text-[#E9A820]">WE SET THEM</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-white/70 font-light mb-8 sm:mb-10 leading-relaxed">
                From local storefronts to national broadcasts, brands trust us to enhance their visual identity. Creating raw concepts to culture-shifting campaigns.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30"
              >
                <span className="text-black font-black text-base sm:text-lg tracking-wide">
                  START YOUR PROJECT
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative min-h-[50vh] lg:min-h-full">
            <img
              src="/A7404497.jpg"
              alt="Creative Work"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b032a]/50 to-transparent lg:from-[#1b032a]/30"></div>

            {/* Floating badge */}
            <div className="absolute top-8 right-8 sm:top-12 sm:right-12 bg-black/90 backdrop-blur-sm border-2 border-[#E9A820] p-4 sm:p-6 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#E9A820] mb-1">1 OF 1</div>
              <div className="text-[10px] sm:text-xs tracking-[0.2em] text-white font-bold">CUSTOM PROJECTS</div>
            </div>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
