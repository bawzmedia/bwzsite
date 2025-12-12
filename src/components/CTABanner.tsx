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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight mb-3 sm:mb-4">
            READY TO ELEVATE YOUR BRAND?
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-black/70 max-w-xl mx-auto mb-6 sm:mb-8">
            Stop scrambling for content. Start building a brand that commands attention.
          </p>
          
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-black hover:bg-[#1a0832] transition-all duration-300 shadow-2xl"
          >
            <span className="text-white font-black text-sm sm:text-base tracking-wide">
              START YOUR PROJECT
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#E9A820] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
