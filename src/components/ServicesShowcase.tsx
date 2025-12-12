import { useState } from 'react';
import { Video, Bot, Rocket, ArrowRight, Play, Zap, Target, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function ServicesShowcase() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'caas',
      icon: Video,
      badge: 'Core Offering',
      title: 'CONTENT AS A SERVICE',
      tagline: 'Your dedicated content team, without the overhead.',
      description: 'Cinematic video, professional photography, and social content delivered monthly. We become your in-house creative department — consistent, reliable, broadcast-quality.',
      highlights: [
        { icon: Play, text: 'Cinematic reels & promo videos' },
        { icon: Target, text: 'Professional photography' },
        { icon: Zap, text: 'Monthly content calendars' },
        { icon: Sparkles, text: 'Story arcs & campaign strategy' },
      ],
      image: '/DSC04407.jpg',
      color: '#E9A820',
    },
    {
      id: 'ai',
      icon: Bot,
      badge: 'Enterprise Solution',
      title: 'AI AUTOMATION',
      tagline: 'Systems that work while you sleep.',
      description: 'Custom AI agents, automated workflows, and intelligent funnels that handle sales, support, and lead nurturing 24/7. Built with n8n, Voiceflow, and custom integrations.',
      highlights: [
        { icon: Bot, text: 'AI sales & support agents' },
        { icon: Zap, text: 'Automated lead nurturing' },
        { icon: Target, text: 'Smart funnel systems' },
        { icon: Sparkles, text: 'Custom workflow integrations' },
      ],
      image: '/n8nworkflow.png',
      color: '#1b032a',
    },
    {
      id: 'production',
      icon: Rocket,
      badge: 'Project-Based',
      title: 'CREATIVE PRODUCTION',
      tagline: 'One-off projects that make an impact.',
      description: 'Campaign films, brand videos, commercial shoots, and documentary-style content. For when you need something exceptional, not ongoing.',
      highlights: [
        { icon: Play, text: 'Campaign & brand films' },
        { icon: Target, text: 'Commercial production' },
        { icon: Zap, text: 'Documentary storytelling' },
        { icon: Sparkles, text: 'Event coverage' },
      ],
      image: '/LedcorExample_compressed.jpg',
      color: '#E9A820',
    },
  ];

  const currentService = services[activeService];

  return (
    <>
      <section id="pricing" className="relative min-h-screen bg-black overflow-hidden py-16 sm:py-20 md:py-24">
        {/* Background */}
        <div className="absolute inset-0">
          {/* Dynamic background based on active service */}
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-4">
              Marketing Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
              HOW WE CAN <span className="text-[#E9A820]">HELP YOU</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Premium creative and automation services tailored to your brand. 
              No templates. No shortcuts. Just results.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left - Service Selector */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-5 sm:p-6 transition-all duration-500 border-l-4 ${
                    activeService === index
                      ? 'bg-white/[0.05] border-[#E9A820]'
                      : 'bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div 
                      className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-500 ${
                        activeService === index 
                          ? 'bg-[#E9A820]' 
                          : 'bg-white/5'
                      }`}
                    >
                      <service.icon 
                        className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-500 ${
                          activeService === index ? 'text-black' : 'text-white/40'
                        }`} 
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className={`text-xs font-bold tracking-wider uppercase mb-1 transition-colors duration-500 ${
                        activeService === index ? 'text-[#E9A820]' : 'text-white/30'
                      }`}>
                        {service.badge}
                      </p>
                      <h3 className={`text-lg sm:text-xl font-black transition-colors duration-500 ${
                        activeService === index ? 'text-white' : 'text-white/50'
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm mt-1 transition-colors duration-500 ${
                        activeService === index ? 'text-white/70' : 'text-white/30'
                      }`}>
                        {service.tagline}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight 
                      className={`w-5 h-5 transition-all duration-500 ${
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
            <div className="relative">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`transition-all duration-700 ${
                    activeService === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  {/* Image */}
                  <div 
                    className="relative aspect-video mb-6 overflow-hidden border-2 transition-colors duration-500"
                    style={{ borderColor: service.color }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Badge overlay */}
                    <div 
                      className="absolute bottom-4 left-4 px-3 py-1.5 text-xs font-black tracking-wider"
                      style={{ backgroundColor: service.color, color: service.color === '#E9A820' ? 'black' : '#E9A820' }}
                    >
                      {service.badge.toUpperCase()}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.highlights.map((highlight, hIndex) => (
                      <div key={hIndex} className="flex items-center gap-2">
                        <highlight.icon className="w-4 h-4 text-[#E9A820] flex-shrink-0" />
                        <span className="text-sm text-white/80">{highlight.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-lg shadow-[#E9A820]/20"
                  >
                    <span className="text-black font-black text-base tracking-wide">
                      APPLY FOR {service.title.split(' ')[0]}
                    </span>
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-16 sm:mt-20">
            <p className="text-white/40 text-sm">
              Not sure which service fits your needs? <span className="text-[#E9A820]">Apply anyway</span> — we'll build a custom solution together.
            </p>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

