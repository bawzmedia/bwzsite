import { useState } from 'react';
import { Sparkles, Zap, Target, Award, X } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExpertise, setSelectedExpertise] = useState<string | null>(null);

  const expertiseDetails = {
    'BROADCAST': {
      title: 'BROADCAST',
      image: '/DSC03782.jpg',
      description: '3 years directing and editing for national broadcast television. Full post-production on shows for Sportsman Channel and World Fishing Network—from raw footage to polished episodes with color grading, sound design, and narrative flow built for TV.'
    },
    'MARKETING': {
      title: 'MARKETING',
      image: '/1223 copy.png',
      description: 'Precision-built brands and strategic campaigns across social media, content marketing, and paid advertising. I create refined content and acquisition architectures engineered for performance and growth.'
    },
    'AI SYSTEMS': {
      title: 'AI SYSTEMS',
      image: '/n8nworkflow.png',
      description: 'AI automation systems that replace manual work and keep your business running 24/7. Sales agents, customer-facing agents, and workflow pipelines built with n8n, Voiceflow, and custom integrations—turning operations into scalable machines.'
    },
    'BRAND DEVELOPMENT': {
      title: 'BRAND DEVELOPMENT',
      image: '/LedcorExample_compressed.jpg',
      description: 'Building complete brand identities from concept to execution. Visual systems, messaging strategy, and market positioning that make brands look credible, intentional, and built to scale. From local businesses to national campaigns.'
    }
  };

  return (
    <section id="about" className="relative min-h-screen bg-black overflow-hidden flex items-center py-12 sm:py-16 md:py-20 isolate">
      {/* Animated AI grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#1b032a]/10 animate-pulse-slow"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[#1b032a] blur-[150px] opacity-20 animate-pulse-slow"></div>
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] rounded-full bg-[#eaa509] blur-[150px] opacity-20 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center w-full">
          {/* Left - AI Profile Image */}
          <div
            className="relative z-10"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main image container */}
            <div className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] mx-auto aspect-square z-10">
              {/* Glowing border rings */}
              <div
                className="absolute inset-0 rounded-full transition-all duration-700"
                style={{
                  backgroundColor: '#eaa509',
                  padding: '3px',
                  transform: isHovered ? 'scale(1.05) rotate(180deg)' : 'scale(1) rotate(0deg)',
                }}
              >
                <div className="w-full h-full bg-black rounded-full"></div>
              </div>

              {/* Image placeholder with AI effect */}
              <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-black">
                <img
                  src="/Gemini_Generated_Image_un631jun631jun63.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{
                    filter: isHovered ? 'grayscale(0%) brightness(1.1)' : 'grayscale(20%) brightness(0.9)',
                  }}
                />
                {/* AI scan lines overlay */}
                <div
                  className="absolute inset-0 bg-[#1b032a]/20 transition-opacity duration-700"
                  style={{
                    opacity: isHovered ? 1 : 0,
                  }}
                ></div>
              </div>

              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 sm:border-t-3 sm:border-l-3 md:border-t-4 md:border-l-4 border-[#E9A820] transition-all duration-500"
                style={{
                  transform: isHovered ? 'translate(-10px, -10px)' : 'translate(0, 0)',
                }}
              ></div>
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-r-2 sm:border-t-3 sm:border-r-3 md:border-t-4 md:border-r-4 border-[#1b032a] transition-all duration-500"
                style={{
                  transform: isHovered ? 'translate(10px, -10px)' : 'translate(0, 0)',
                }}
              ></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-l-2 sm:border-b-3 sm:border-l-3 md:border-b-4 md:border-l-4 border-[#1b032a] transition-all duration-500"
                style={{
                  transform: isHovered ? 'translate(-10px, 10px)' : 'translate(0, 0)',
                }}
              ></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 sm:border-b-3 sm:border-r-3 md:border-b-4 md:border-r-4 border-[#E9A820] transition-all duration-500"
                style={{
                  transform: isHovered ? 'translate(10px, 10px)' : 'translate(0, 0)',
                }}
              ></div>

              {/* Floating badges */}
              <div className="absolute top-0 right-0 sm:-top-3 sm:-right-3 md:-top-6 md:-right-6 p-2 sm:p-3 md:p-4 bg-[#1b032a] rounded-full shadow-2xl shadow-[#1b032a]/50 animate-float z-10">
                <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 sm:-bottom-3 sm:-left-3 md:-bottom-6 md:-left-6 p-2 sm:p-3 md:p-4 bg-[#eaa509] rounded-full shadow-2xl shadow-[#eaa509]/50 animate-float z-10" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 text-black" />
              </div>
            </div>
          </div>

          {/* Right - Bio Content */}
          <div className="space-y-2 sm:space-y-3">
            {/* Header */}
            <div>
              <div className="text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] text-[#E9A820] font-bold mb-2 sm:mb-3 md:mb-4">
                FOUNDER & CREATIVE DIRECTOR
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none mb-2 sm:mb-3">
                <span className="text-white">MEET</span>
                <br />
                <span className="text-[#eaa509]">
                  THE STRATEGIST
                </span>
              </h2>
            </div>

            {/* Bio text */}
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm lg:text-base text-gray-400 font-light leading-relaxed">
              <p>
                A multidisciplinary builder with proven work across broadcast media, commercial production, design, ecommerce, paid advertising, Amazon FBA, and AI-powered business systems.
              </p>
              <p className="text-[#eaa509] font-bold">
                I create refined content, precision-built brands, and acquisition architectures engineered for performance.
              </p>
              <p>
                My work spans outdoor media, construction, architecture, interior design, ecommerce, technology, and religious organizations — delivering visuals, strategy, and automation with the standards of a modern luxury agency.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2 pt-1.5 sm:pt-2">
              {[
                { icon: Award, label: 'BROADCAST' },
                { icon: Target, label: 'MARKETING' },
                { icon: Sparkles, label: 'AI SYSTEMS' },
                { icon: Zap, label: 'BRAND DEVELOPMENT' },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExpertise(item.label)}
                  className="group relative p-2 sm:p-3 md:p-4 border border-white/10 sm:border-2 hover:border-[#E9A820] transition-all duration-300 hover:-translate-y-1 cursor-pointer flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-xs sm:text-sm md:text-base lg:text-xl font-black text-white tracking-tight">{item.label}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-1.5 sm:pt-2">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 overflow-hidden bg-[#eaa509] hover:bg-[#1b032a] hover:shadow-2xl hover:shadow-[#eaa509]/50 transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-white font-black text-xs sm:text-sm md:text-base">
                  LET'S CREATE TOGETHER
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-white/20 h-[2px] animate-float"></div>
      </div>

      {/* Expertise Popup - Simplified for iPad stability */}
      {selectedExpertise && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90"
          onClick={() => setSelectedExpertise(null)}
        >
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-sm">
            <div
              className="relative bg-black border-4 border-[#E9A820] rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button - Simple and obvious */}
              <button
                onClick={() => setSelectedExpertise(null)}
                className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#E9A820] shadow-lg"
                aria-label="Close"
              >
                <X className="w-8 h-8 text-black" strokeWidth={4} />
              </button>

              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-t-lg">
                <img
                  src={expertiseDetails[selectedExpertise as keyof typeof expertiseDetails].image}
                  alt={expertiseDetails[selectedExpertise as keyof typeof expertiseDetails].title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-black text-[#E9A820] mb-3">
                  {expertiseDetails[selectedExpertise as keyof typeof expertiseDetails].title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {expertiseDetails[selectedExpertise as keyof typeof expertiseDetails].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <LeadCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
