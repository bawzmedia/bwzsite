import { useState } from 'react';
import { Gift, Shield, ArrowRight, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Guarantee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1b032a]/30 via-black to-[#E9A820]/10"></div>
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#E9A820] rounded-full blur-[200px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#1b032a] rounded-full blur-[200px] opacity-30"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9A820]/10 border border-[#E9A820]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#E9A820]" />
              <span className="text-[#E9A820] text-sm font-bold tracking-wider uppercase">
                Risk-Free Guarantee
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              START WITH <span className="text-[#E9A820]">ZERO RISK</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              I'm so confident in the value I deliver, I'm putting my money where my mouth is.
            </p>
          </div>

          {/* Guarantee Cards */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            
            {/* Card 1: Signing Bonus */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#E9A820] to-[#f4c430] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#E9A820]/20 via-[#1b032a]/50 to-black border-2 border-[#E9A820] p-6 sm:p-8 h-full">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#E9A820]">
                    <Gift className="w-7 h-7 sm:w-8 sm:h-8 text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#E9A820] text-xs font-bold tracking-wider uppercase">
                      Signing Bonus
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      FREE AI COMMERCIAL
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  Sign with me and get a complimentary AI-infused hero commercial. I'll blend your content with AI visuals to elevate your brand from day one.
                </p>

                <div className="pt-4 border-t border-[#E9A820]/30">
                  <p className="text-sm text-[#E9A820] font-black tracking-wide">
                    VALUE: $3,000+ • YOURS: FREE
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Bust Guarantee */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#1b032a] to-[#3d1f5c] blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#1b032a]/50 via-black to-[#1b032a]/30 border-2 border-[#1b032a] p-6 sm:p-8 h-full">
                <div className="flex items-center gap-4 mb-4 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#1b032a] border-2 border-[#E9A820]/50">
                    <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#E9A820]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#E9A820] text-xs font-bold tracking-wider uppercase">
                      Iron-Clad Guarantee
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      FILMED COMMERCIAL
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                  If our project doesn't deliver, I personally film you an in-person commercial. Professional shoot, full production, delivered content you own forever.
                </p>

                <div className="pt-4 border-t border-[#1b032a]">
                  <p className="text-sm text-[#E9A820] font-black tracking-wide">
                    100% RISK-FREE • GUARANTEED RESULTS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-black text-white mb-6">
              Still on the fence? <span className="text-[#E9A820]">You shouldn't be.</span>
            </p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30 hover:shadow-[#E9A820]/50"
            >
              <span className="text-black font-black text-base sm:text-lg tracking-wide">
                APPLY NOW
              </span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
