import { Video, Camera, Megaphone, Palette, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Services() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const includedServices = [
    {
      icon: Video,
      title: 'Cinematic Video',
      description: 'Broadcast-quality video production with professional color grading, sound design, and cinematic editing.',
      color: '#E9A820',
    },
    {
      icon: Camera,
      title: 'Professional Photography',
      description: 'High-resolution photos for brand assets, social media, and marketing materials.',
      color: '#1a0832',
    },
    {
      icon: Megaphone,
      title: 'Social Content',
      description: 'Platform-optimized reels, shorts, and content engineered for engagement and growth.',
      color: '#E9A820',
    },
    {
      icon: Palette,
      title: 'Creative Strategy',
      description: 'Content calendars, story arcs, and campaign themes that connect with your audience.',
      color: '#1a0832',
    },
  ];

  const aiAddOn = {
    icon: Bot,
    title: 'AI Automation',
    subtitle: 'Enterprise Add-On',
    description: 'AI systems that run your business 24/7. Sales agents, customer support, outreach workflows, and automation pipelines built with n8n, Voiceflow, and custom integrations.',
    features: [
      'AI Sales & Support Agents',
      'Automated Lead Nurturing',
      'Smart Funnel Systems',
      'Custom Workflow Integrations',
    ],
  };

  return (
    <>
      <section id="services" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-[#0a0510] to-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(233,168,32,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(233,168,32,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E9A820] rounded-full blur-[200px] opacity-[0.07]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1a0832] rounded-full blur-[200px] opacity-20"></div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-4">
              Full-Service Production
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              WHAT'S <span className="text-[#E9A820]">INCLUDED</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Every plan includes our core production services. No nickel-and-diming.
            </p>
          </div>

          {/* Included Services Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20">
            {includedServices.map((service, index) => (
              <div
                key={index}
                className="group flex gap-4 sm:gap-6 p-6 sm:p-8 bg-white/[0.02] border border-white/10 hover:border-opacity-50 transition-all duration-300"
                style={{ borderColor: `${service.color}30` }}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 flex items-center justify-center transition-all duration-300"
                  style={{ 
                    backgroundColor: `${service.color}20`,
                    border: `1px solid ${service.color}40`
                  }}
                >
                  <service.icon 
                    className="w-6 h-6 sm:w-7 sm:h-7" 
                    style={{ color: service.color === '#1a0832' ? '#E9A820' : service.color }}
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* AI Add-On Section */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#1a0832] via-[#3d1f5c] to-[#1a0832] blur-xl opacity-40"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a0832] via-[#1a0832]/80 to-[#0a0510] border-2 border-[#1a0832] p-6 sm:p-8 md:p-10">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#E9A820]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E9A820]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#E9A820]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#E9A820]"></div>

              <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
                {/* Left content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[#E9A820]">
                      <aiAddOn.icon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
                    </div>
                    <div>
                      <p className="text-[#E9A820] text-xs font-bold tracking-wider uppercase">
                        {aiAddOn.subtitle}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {aiAddOn.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                    {aiAddOn.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {aiAddOn.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#E9A820] flex-shrink-0" />
                        <span className="text-sm text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right CTA */}
                <div className="lg:w-64 flex-shrink-0">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300"
                  >
                    <span className="text-black font-black text-sm tracking-wide">
                      INQUIRE ABOUT AI
                    </span>
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-white/40 text-xs mt-3">
                    Custom solutions for your business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
