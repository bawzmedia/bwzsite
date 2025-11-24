import { Gift, Shield, Sparkles } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 bg-black overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1b032a]/20 to-black"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#eaa509] rounded-full blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#1b032a] rounded-full blur-[150px] opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eaa509]/10 border border-[#eaa509]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#eaa509]" />
            <span className="text-[#eaa509] text-sm font-bold tracking-wider">RISK-FREE GUARANTEE</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-6">
            START WITH
            <br />
            <span className="text-[#eaa509]">ZERO RISK</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 font-light max-w-3xl mx-auto">
            I'm so confident in the value I deliver, I'm putting my money where my mouth is.
          </p>
        </div>

        {/* Guarantee Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Card 1: Signing Bonus */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#eaa509] to-[#f4c430] rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#1b032a] to-black border-2 border-[#eaa509] rounded-2xl p-8 sm:p-10 h-full">
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eaa509] mb-6 shadow-2xl shadow-[#eaa509]/50">
                <Gift className="w-8 h-8 sm:w-10 sm:h-10 text-black" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              <div className="inline-block px-4 py-1 bg-[#eaa509] rounded-full mb-4">
                <span className="text-black text-xs font-black tracking-wider">SIGNING BONUS</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                FREE AI-INFUSED<br />COMMERCIAL
              </h3>

              {/* Description */}
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                Sign with me and get a complimentary AI-infused hero commercial. I'll blend your existing content with cutting-edge AI-generated visuals to create a jaw-dropping commercial that elevates your brand from day one.
              </p>

              {/* Value callout */}
              <div className="pt-4 border-t border-[#eaa509]/20">
                <p className="text-sm text-[#eaa509] font-bold">
                  VALUE: $3,000+ • YOURS: FREE
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Bust Guarantee */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1b032a] to-[#3d1f5c] rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-black to-[#0a0a0a] border-2 border-[#1b032a] rounded-2xl p-8 sm:p-10 h-full">
              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#1b032a] mb-6 shadow-2xl shadow-[#1b032a]/50">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-[#eaa509]" strokeWidth={2.5} />
              </div>

              {/* Badge */}
              <div className="inline-block px-4 py-1 bg-[#1b032a] border border-[#eaa509]/30 rounded-full mb-4">
                <span className="text-[#eaa509] text-xs font-black tracking-wider">IRON-CLAD GUARANTEE</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight">
                FILMED COMMERCIAL<br />GUARANTEE
              </h3>

              {/* Description */}
              <p className="text-base text-gray-300 leading-relaxed mb-6">
                If our project doesn't deliver, I personally film you an in-person commercial. Professional shoot, full production, delivered content you own forever. You literally can't lose.
              </p>

              {/* Value callout */}
              <div className="pt-4 border-t border-[#1b032a]">
                <p className="text-sm text-[#eaa509] font-bold">
                  100% RISK-FREE • GUARANTEED RESULTS
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-8">
            Still on the fence?{' '}
            <span className="text-[#eaa509]">You shouldn't be.</span>
          </p>
          
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 px-10 py-6 bg-gradient-to-r from-[#eaa509] to-[#f4c430] hover:from-[#f4c430] hover:to-[#eaa509] transition-all duration-300 group shadow-2xl shadow-[#eaa509]/30"
          >
            <span className="text-black font-black text-lg tracking-wider">
              LET'S START YOUR PROJECT
            </span>
            <Sparkles className="w-6 h-6 text-black group-hover:rotate-180 transition-transform duration-500" />
          </a>
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
  );
}

