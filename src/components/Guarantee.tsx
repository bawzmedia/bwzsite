import { useState } from 'react';
import { Gift, Shield, ArrowRight, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Guarantee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[100svh] bg-black overflow-hidden flex items-center py-12 sm:py-0">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b032a]/30 via-black to-[#E9A820]/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-[#E9A820] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#1b032a] rounded-full blur-[200px] opacity-30"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#E9A820]/10 border border-[#E9A820]/30 mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-[#E9A820]" />
              <span className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase">
                Risk-Free Guarantee
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-2 sm:mb-4">
              START WITH <span className="text-[#E9A820]">ZERO RISK</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto px-4">
              I'm so confident in the value I deliver, I'm putting my money where my mouth is.
            </p>
          </div>

          {/* Guarantee Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            
            {/* Card 1: Signing Bonus */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E9A820] to-[#f4c430] blur opacity-20"></div>
              
              <div className="relative bg-gradient-to-br from-[#E9A820]/20 via-[#1b032a]/50 to-black border-2 border-[#E9A820] p-4 sm:p-6 h-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E9A820]">
                    <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#E9A820] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                      Signing Bonus
                    </p>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      FREE AI COMMERCIAL
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4">
                  Sign with me and get a complimentary AI-infused hero commercial to elevate your brand from day one.
                </p>

                <div className="pt-3 border-t border-[#E9A820]/30">
                  <p className="text-xs sm:text-sm text-[#E9A820] font-black">
                    VALUE: $3,000+ • YOURS: FREE
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Bust Guarantee */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1b032a] to-[#3d1f5c] blur opacity-20"></div>
              
              <div className="relative bg-gradient-to-br from-[#1b032a]/50 via-black to-[#1b032a]/30 border-2 border-[#1b032a] p-4 sm:p-6 h-full">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#1b032a] border-2 border-[#E9A820]/50">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#E9A820]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#E9A820] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
                      Iron-Clad Guarantee
                    </p>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      FILMED COMMERCIAL
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-3 sm:mb-4">
                  If our project doesn't deliver, I personally film you an in-person commercial. Content you own forever.
                </p>

                <div className="pt-3 border-t border-[#1b032a]">
                  <p className="text-xs sm:text-sm text-[#E9A820] font-black">
                    100% RISK-FREE • GUARANTEED
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-base sm:text-lg md:text-xl font-black text-white mb-4 sm:mb-6">
              Still on the fence? <span className="text-[#E9A820]">You shouldn't be.</span>
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30"
            >
              <span className="text-black font-black text-sm sm:text-base tracking-wide">
                APPLY NOW
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
