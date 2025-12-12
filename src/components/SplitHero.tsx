import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function SplitHero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden bg-black">
        <div className="grid lg:grid-cols-2 min-h-[100svh]">
          {/* Left side - Content */}
          <div className="relative flex items-center justify-center p-6 sm:p-10 md:p-14 bg-[#2d1654] order-2 lg:order-1">
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.1)_0%,transparent_70%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
            </div>

            <div className="relative z-10 max-w-lg">
              <div className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] text-[#E9A820] font-bold mb-4 sm:mb-6">
                CREATIVE POWERHOUSE
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] mb-4 sm:mb-6">
                WE DON'T
                <br />
                FOLLOW
                <br />
                TRENDS
                <br />
                <span className="text-[#E9A820]">WE SET THEM</span>
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-white/70 font-light mb-6 sm:mb-8 leading-relaxed">
                From local storefronts to national broadcasts, brands trust us to enhance their visual identity.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30"
              >
                <span className="text-black font-black text-sm sm:text-base tracking-wide">
                  START YOUR PROJECT
                </span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right side - Image - Full height, NO overlay to show full colors */}
          <div className="relative min-h-[50svh] lg:min-h-[100svh] order-1 lg:order-2">
            <img
              src="/A7404497.jpg"
              alt="Creative Work"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Floating badge */}
            <div className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-black/90 backdrop-blur-sm border-2 border-[#E9A820] p-3 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#E9A820] mb-0.5">1 OF 1</div>
              <div className="text-[8px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-white font-bold">CUSTOM PROJECTS</div>
            </div>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
