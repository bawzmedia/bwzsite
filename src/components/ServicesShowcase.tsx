import { useState } from 'react';
import { Video, Bot, Rocket, ArrowRight, Zap, Target, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';
import { IMAGES } from '../content/images';

export default function ServicesShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'video',
      icon: Video,
      badge: 'Primary Wedge',
      title: 'VIDEO MARKETING',
      shortTitle: 'VIDEO',
      tagline: 'Video Marketing That Attracts Qualified Clients',
      description: 'We plan, produce, and manage revenue-focused video content designed to build trust, demonstrate authority, and attract qualified clients consistently—without requiring your involvement. This replaces sporadic posting, internal coordination, and the need to constantly decide what gets created next.',
      highlights: [
        { icon: Target, text: 'Consistent market presence without oversight' },
        { icon: Sparkles, text: 'Higher trust before the first conversation' },
        { icon: Zap, text: 'No internal content management or direction' },
      ],
      image: IMAGES.services.contentAsAService,
      color: '#E9A820',
      cta: 'Apply for Video Marketing',
    },
    {
      id: 'ai',
      icon: Bot,
      badge: 'Content + Systems',
      title: 'AI MARKETING',
      shortTitle: 'AI',
      tagline: 'AI Marketing Systems That Run Without Supervision',
      description: 'We build AI-driven content and automation systems that capture leads, handle follow-up, and nurture prospects automatically—so growth does not depend on your availability. This turns attention into revenue without adding headcount or complexity.',
      highlights: [
        { icon: Zap, text: 'Automated lead capture and follow-up' },
        { icon: Target, text: 'Faster response times and higher conversion' },
        { icon: Sparkles, text: 'Marketing that runs while you focus elsewhere' },
      ],
      image: IMAGES.services.aiAutomation,
      color: '#2d1654',
      cta: 'Apply for AI Marketing',
    },
    {
      id: 'brand',
      icon: Rocket,
      badge: 'Authority Play',
      title: 'BRAND DEVELOPMENT',
      shortTitle: 'BRAND',
      tagline: 'Brand Development for Companies Ready to Level Up',
      description: 'We clarify and elevate your brand so prospects instantly understand your value, trust your expertise, and see you as the obvious choice—before price becomes a factor. This is for businesses entering a new growth phase, market, or tier.',
      highlights: [
        { icon: Target, text: 'Clear positioning and messaging' },
        { icon: Sparkles, text: 'Stronger perceived authority' },
        { icon: Zap, text: 'Easier, shorter sales conversations' },
      ],
      image: IMAGES.services.creativeProduction,
      color: '#E9A820',
      cta: 'Apply for Brand Development',
    },
  ];

  const currentService = services[activeService];

  return (
    <>
      <section id="pricing" className="relative min-h-[100svh] bg-black overflow-hidden flex items-center py-12 sm:py-0">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 transition-all duration-1000"
            style={{
              background: activeService === 1 
                ? 'radial-gradient(ellipse at top right, rgba(27,3,42,0.4) 0%, transparent 60%)'
                : 'radial-gradient(ellipse at top right, rgba(233,168,32,0.15) 0%, transparent 60%)'
            }}
          ></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              <span className="block">HOW WE REMOVE MARKETING</span>
              <span className="block text-[#E9A820]">FROM YOUR PLATE</span>
            </h2>
            <p className="text-white/70 text-sm sm:text-base md:text-lg mt-4 max-w-2xl mx-auto">
              Three ways to create leverage, depending on where your business is right now.
            </p>
          </div>

          {/* Mobile: Tabs + Content */}
          <div className="lg:hidden">
            {/* Service Tabs */}
            <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 transition-all duration-300 ${
                    activeService === index
                      ? 'bg-[#E9A820] text-black'
                      : 'bg-white/5 text-white/60 border border-white/10'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  <span className="text-xs font-bold whitespace-nowrap">{service.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Active Service Content */}
            <div className="space-y-4">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden border border-[#E9A820]/30">
                <img
                  src={currentService.image}
                  alt={currentService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#E9A820] text-black text-[10px] font-black">
                  {currentService.badge.toUpperCase()}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-lg font-black text-white mb-1">{currentService.title}</h3>
                <p className="text-sm text-white/70 mb-4">{currentService.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {currentService.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center gap-2">
                      <highlight.icon className="w-3 h-3 text-[#E9A820] flex-shrink-0" />
                      <span className="text-xs text-white/80">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#E9A820] text-black font-black text-sm"
                >
                  {currentService.cta?.toUpperCase() || 'APPLY NOW'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Side by Side */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left - Service Selector */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-5 transition-all duration-500 border-l-4 min-h-[120px] ${
                    activeService === index
                      ? 'bg-white/[0.05] border-[#E9A820]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className={`w-12 h-12 flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                        activeService === index ? 'bg-[#E9A820]' : 'bg-white/5'
                      }`}
                    >
                      <service.icon 
                        className={`w-6 h-6 transition-colors duration-500 ${
                          activeService === index ? 'text-black' : 'text-white/40'
                        }`} 
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-bold tracking-wider uppercase mb-1 transition-colors duration-500 ${
                        activeService === index ? 'text-[#E9A820]' : 'text-white/30'
                      }`}>
                        {service.badge}
                      </p>
                      <h3 className={`text-lg font-black transition-colors duration-500 ${
                        activeService === index ? 'text-white' : 'text-white/50'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-colors duration-500 line-clamp-2 ${
                        activeService === index ? 'text-white/70' : 'text-white/30'
                      }`}>
                        {service.tagline}
                      </p>
                    </div>

                    <ArrowRight 
                      className={`w-5 h-5 flex-shrink-0 transition-all duration-500 ${
                        activeService === index 
                          ? 'text-[#E9A820] translate-x-0 opacity-100' 
                          : 'text-white/20 -translate-x-2 opacity-0'
                      }`} 
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Right - Service Details */}
            <div className="relative h-[620px]">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ${
                    activeService === index 
                      ? 'opacity-100 z-10' 
                      : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  <div 
                    className="relative aspect-video mb-5 overflow-hidden border-2 transition-colors duration-500 flex-shrink-0"
                    style={{ borderColor: service.color }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div 
                      className="absolute bottom-4 left-4 px-3 py-1.5 text-xs font-black tracking-wider"
                      style={{ backgroundColor: service.color, color: service.color === '#E9A820' ? 'black' : '#E9A820' }}
                    >
                      {service.badge.toUpperCase()}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-base text-white/70 leading-relaxed mb-5 line-clamp-4">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {service.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-2">
                          <highlight.icon className="w-4 h-4 text-[#E9A820] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/80 line-clamp-2">{highlight.text}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300"
                      >
                        <span className="text-black font-black text-base tracking-wide">
                          {service.cta?.toUpperCase() || `APPLY FOR ${service.shortTitle}`}
                        </span>
                        <ArrowRight className="w-5 h-5 text-black" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-white/40 text-xs sm:text-sm px-4">
              Not sure which path fits? <span className="text-[#E9A820]">Apply anyway.</span> We will recommend the highest-leverage option for your business.
            </p>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
