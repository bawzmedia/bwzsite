import { useState } from 'react';
import { Sparkles, Zap, Award, Target } from 'lucide-react';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);

  const expertise = [
    { icon: Award, label: 'Broadcast Media' },
    { icon: Target, label: 'Marketing Strategy' },
    { icon: Sparkles, label: 'AI Systems' },
    { icon: Zap, label: 'Brand Development' },
  ];

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-[#1b032a] blur-[150px] opacity-20"></div>
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-[#E9A820] blur-[150px] opacity-10"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left - Profile Image */}
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-square">
              {/* Border ring */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-700 p-1"
                style={{
                  backgroundColor: '#E9A820',
                  transform: isHovered ? 'scale(1.03) rotate(180deg)' : 'scale(1) rotate(0deg)',
                }}
              >
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>

              {/* Profile Image */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-black">
                <img
                  src="/Professional Profile Photo Instagram Post .png"
                  alt="Ahmed Bawazir - Founder & Creative Director"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
                  }}
                />
              </div>

              {/* Corner brackets */}
              <div 
                className="absolute top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-t-4 border-l-4 border-[#E9A820] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(-8px, -8px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-t-4 border-r-4 border-[#1b032a] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(8px, -8px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 w-16 h-16 sm:w-20 sm:h-20 border-b-4 border-l-4 border-[#1b032a] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(-8px, 8px)' : 'translate(0, 0)' }}
              ></div>
              <div 
                className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 border-b-4 border-r-4 border-[#E9A820] transition-all duration-500"
                style={{ transform: isHovered ? 'translate(8px, 8px)' : 'translate(0, 0)' }}
              ></div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 p-3 sm:p-4 bg-[#1b032a] shadow-2xl shadow-[#1b032a]/50 animate-float">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 p-3 sm:p-4 bg-[#E9A820] shadow-2xl shadow-[#E9A820]/50 animate-float" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </div>
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-3">
                Founder & Creative Director
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
                <span className="text-white">MEET</span>
                <br />
                <span className="text-[#E9A820]">THE STRATEGIST</span>
              </h2>
            </div>

            {/* Bio text */}
            <div className="space-y-4 text-sm sm:text-base text-white/70 leading-relaxed">
              <p>
                A multidisciplinary builder with proven work across broadcast media, commercial production, design, ecommerce, paid advertising, Amazon FBA, and AI-powered business systems.
              </p>
              <p className="text-[#E9A820] font-bold">
                I create refined content, precision-built brands, and acquisition architectures engineered for performance.
              </p>
              <p>
                My work spans outdoor media, construction, architecture, interior design, ecommerce, technology, and religious organizations — delivering visuals, strategy, and automation with the standards of a modern luxury agency.
              </p>
            </div>

            {/* Expertise grid */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {expertise.map((item, index) => (
                <div
                  key={index}
                  className="group p-4 border border-white/10 hover:border-[#E9A820]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#E9A820]" />
                    <span className="text-sm font-bold text-white tracking-wide">
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
