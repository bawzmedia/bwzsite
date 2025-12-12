import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#E9A820] py-12 sm:py-16 md:py-20 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4 sm:mb-6">
            READY TO ELEVATE YOUR BRAND?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-black/70 max-w-2xl mx-auto mb-8 sm:mb-10">
            Stop scrambling for content. Start building a brand that commands attention.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-black hover:bg-[#1b032a] transition-all duration-300 shadow-2xl"
          >
            <span className="text-white font-black text-base sm:text-lg tracking-wide">
              START YOUR PROJECT
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9A820] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
