import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-black border-y-2 border-[#E9A820]/20">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#eaa509]/5 to-transparent"></div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group w-full flex items-center justify-center gap-4 px-8 py-5 sm:py-6 bg-gradient-to-r from-[#eaa509] to-[#f4c430] hover:from-[#f4c430] hover:to-[#eaa509] transition-all duration-300 shadow-2xl shadow-[#eaa509]/30 hover:shadow-[#eaa509]/50"
          >
            <span className="text-black font-black text-xl sm:text-2xl md:text-3xl tracking-wider">
              LET'S START YOUR PROJECT
            </span>
            <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-black group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

