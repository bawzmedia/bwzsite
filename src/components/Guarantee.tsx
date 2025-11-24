import { useState } from 'react';
import { Gift, Shield, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Guarantee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <section className="relative h-screen bg-black overflow-hidden flex items-center">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1b032a]/20 to-black"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#eaa509] rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1b032a] rounded-full blur-[150px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-4">
        {/* Header - Compact */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#eaa509]/10 border border-[#eaa509]/30 rounded-full mb-2">
            <Sparkles className="w-3 h-3 text-[#eaa509]" />
            <span className="text-[#eaa509] text-[10px] sm:text-xs font-bold tracking-wider">RISK-FREE GUARANTEE</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-none mb-2">
            START WITH <span className="text-[#eaa509]">ZERO RISK</span>
          </h2>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light max-w-2xl mx-auto">
            I'm so confident in the value I deliver, I'm putting my money where my mouth is.
          </p>
        </div>

        {/* Guarantee Cards - Compact */}
        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
          
          {/* Card 1: Signing Bonus */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#eaa509] to-[#f4c430] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#1b032a] to-black border-2 border-[#eaa509] rounded-xl p-4 sm:p-5 md:p-6 h-full">
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#eaa509] mb-2 shadow-xl shadow-[#eaa509]/50">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              <div className="inline-block px-2 py-0.5 bg-[#eaa509] rounded-full mb-1.5">
                <span className="text-black text-[9px] sm:text-[10px] font-black tracking-wider">SIGNING BONUS</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1.5 leading-tight">
                FREE AI-INFUSED COMMERCIAL
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 leading-relaxed mb-2">
                Sign with me and get a complimentary AI-infused hero commercial. I'll blend your content with AI visuals to elevate your brand from day one.
              </p>

              {/* Value callout */}
              <div className="pt-1.5 border-t border-[#eaa509]/20">
                <p className="text-[10px] sm:text-xs text-[#eaa509] font-bold">
                  VALUE: $3,000+ • YOURS: FREE
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Bust Guarantee */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#1b032a] to-[#3d1f5c] rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-black to-[#0a0a0a] border-2 border-[#1b032a] rounded-xl p-4 sm:p-5 md:p-6 h-full">
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1b032a] mb-2 shadow-xl shadow-[#1b032a]/50">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#eaa509]" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              <div className="inline-block px-2 py-0.5 bg-[#1b032a] border border-[#eaa509]/30 rounded-full mb-1.5">
                <span className="text-[#eaa509] text-[9px] sm:text-[10px] font-black tracking-wider">IRON-CLAD GUARANTEE</span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-xl font-black text-white mb-1.5 leading-tight">
                FILMED COMMERCIAL GUARANTEE
              </h3>

              {/* Description */}
              <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 leading-relaxed mb-2">
                If our project doesn't deliver, I personally film you an in-person commercial. Professional shoot, full production, delivered content you own forever. You literally can't lose.
              </p>

              {/* Value callout */}
              <div className="pt-1.5 border-t border-[#1b032a]">
                <p className="text-[10px] sm:text-xs text-[#eaa509] font-bold">
                  100% RISK-FREE • GUARANTEED RESULTS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA - Compact */}
        <div className="text-center">
          <p className="text-base sm:text-xl md:text-2xl font-black text-white mb-3">
            Still on the fence?{' '}
            <span className="text-[#eaa509]">You shouldn't be.</span>
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#eaa509] to-[#f4c430] hover:from-[#f4c430] hover:to-[#eaa509] transition-all duration-300 group shadow-2xl shadow-[#eaa509]/30"
          >
            <span className="text-black font-black text-sm sm:text-base md:text-lg tracking-wider">
              LET'S START YOUR PROJECT
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:rotate-180 transition-transform duration-500" />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>

    <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

