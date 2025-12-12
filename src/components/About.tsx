import { useState } from 'react';
import { Sparkles, Zap, Award, Target } from 'lucide-react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const expertise = [
    { icon: Award, label: 'Broadcast TV' },
    { icon: Target, label: 'Outdoor & Hunting' },
    { icon: Sparkles, label: 'AI Automation' },
    { icon: Zap, label: 'Documentary' },
  ];

  return (
    <section id="about" className="relative min-h-[100svh] bg-black overflow-hidden flex items-center py-12 sm:py-0">
      {/* Faint grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#2a0e4a] blur-[100px] sm:blur-[150px] opacity-20"></div>
      <div className="absolute top-1/2 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-[#E9A820] blur-[100px] sm:blur-[150px] opacity-10"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left - Profile Image */}
          <div
            className="relative order-1"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto">
              {/* Border ring */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 p-0.5 sm:p-1"
                style={{
                  backgroundColor: '#E9A820',
                  transform: isHovered ? 'scale(1.03) rotate(180deg)' : 'scale(1) rotate(0deg)',
                }}
              >
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>

              {/* Profile Image */}
              <div className="absolute inset-2 sm:inset-3 rounded-full overflow-hidden border-2 sm:border-4 border-black">
                <img
                  src="/Professional Profile Photo Instagram Post .png"
                  alt="Ahmed Bawazir - Founder & Creative Director"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Corner brackets */}
              <div 
                className="absolute top-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-t-2 sm:border-t-4 border-l-2 sm:border-l-4 border-[#E9A820] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(-4px, -4px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute top-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-t-2 sm:border-t-4 border-r-2 sm:border-r-4 border-[#2a0e4a] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(4px, -4px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 w-10 h-10 sm:w-16 sm:h-16 border-b-2 sm:border-b-4 border-l-2 sm:border-l-4 border-[#2a0e4a] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(-4px, 4px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute bottom-0 right-0 w-10 h-10 sm:w-16 sm:h-16 border-b-2 sm:border-b-4 border-r-2 sm:border-r-4 border-[#E9A820] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(4px, 4px)' : 'translate(0, 0)' }}
              ></div>

              {/* Floating badges */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-2 sm:p-3 bg-[#2a0e4a] shadow-2xl shadow-[#2a0e4a]/50 animate-float">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 p-2 sm:p-3 bg-[#E9A820] shadow-2xl shadow-[#E9A820]/50 animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
              </div>
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className="space-y-4 sm:space-y-5 order-2 text-center md:text-left">
            {/* Header */}
            <div>
              <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
                Founder & Creative Director
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                <span className="text-white">MEET </span>
                <span className="text-[#E9A820]">THE STRATEGIST</span>
              </h2>
            </div>

            {/* Bio text */}
            <div className="space-y-3 text-xs sm:text-sm text-white/70 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Ahmed Bawazir</span> – a multidisciplinary creative with broadcast-level credentials and a track record spanning national television networks, construction giants, outdoor brands, and faith-based institutions.
              </p>
              <p>
                From filming <span className="text-white">Lisa Roper Outdoors</span> for <span className="text-white">Sportsman Channel</span> and <span className="text-white">World Fishing Network</span> to crafting visual identities for industry leaders like <span className="text-white">Cabela's</span> and <span className="text-white">Ledcor</span>, every project is approached with cinematic precision and strategic intent.
              </p>
              <p className="text-[#E9A820] font-bold">
                Edmonton-based. Globally minded. I build content systems and brand architectures that command attention and drive results.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-2">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="p-3 border border-white/10 hover:border-[#E9A820]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <item.icon className="w-4 h-4 text-[#E9A820]" />
                    <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
