import { Video, Camera, Megaphone, Bot, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: '01',
      icon: Video,
      title: 'VIDEO PRODUCTION',
      description: "I turn raw footage into polished, broadcast-ready content. Long-form, short-form, colour, sound, and cinematic edits that make your brand look intentional, credible, and high-value across every platform.",
      image: '/IMG_2112.jpg',
      color: '#E9A820'
    },
    {
      number: '02',
      icon: Camera,
      title: 'PHOTOGRAPHY',
      description: "Clean, controlled visuals that elevate your brand's presence instantly. Interiors, exteriors, products, lifestyle, and documentation — shot with clarity and delivered as ready-to-use asset libraries for web and social.",
      image: '/DSC03559.jpg',
      color: '#E9A820'
    },
    {
      number: '03',
      icon: Megaphone,
      title: 'SOCIAL MEDIA CONTENT',
      description: "Daily, platform-ready content engineered to grow. Reels, shorts, cutdowns, repurposed long-form, and structured content systems built for consistency, speed, and visibility — without relying on trends or guesswork.",
      image: '/1223 copy.png',
      color: '#E9A820'
    },
    {
      number: '04',
      icon: Bot,
      title: 'AI AUTOMATION',
      description: "AI systems that replace manual work and keep your business running 24/7. Sales agents, customer-facing agents, outreach workflows, Smart Funnels, and automation pipelines built with n8n, Voiceflow, and custom integrations — turning your operations into a scalable machine.",
      image: '/n8nworkflow.png',
      color: '#E9A820'
    },
    {
      number: '05',
      icon: Sparkles,
      title: 'AI CONTENT PRODUCTION',
      description: "Anyone can generate a picture, but telling stories is our expertise. We use advanced prompting techniques with JSON-based workflows and context profile prompts to craft narratives that resonate. It's not about the tool — it's about the story.",
      image: '/bawzmedia_A_hyperreal_three-quarter_portrait_of_a_male_explorer_45f528e3-ec53-4492-a56a-b759bc78166d.jpg',
      color: '#E9A820'
    },
  ];

  return (
    <section id="services" className="relative min-h-screen overflow-hidden bg-black pb-12 sm:pb-16 md:pb-20">
      {/* Background images with transitions */}
      {services.map((service, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-[1200ms] ease-in-out"
          style={{
            opacity: activeService === index ? 1 : 0,
          }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
        </div>
      ))}

      <div className="relative min-h-screen flex items-center py-6 sm:py-8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center mb-8 sm:mb-12 lg:mb-16">
            WAYS <span className="text-[#E9A820]">WE CAN HELP</span> YOU
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 items-center">

            {/* Mobile - Image display at top */}
            <div className="lg:hidden w-full mb-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="transition-opacity duration-[900ms] ease-in-out"
                  style={{
                    display: activeService === index ? 'block' : 'none',
                  }}
                >
                  {/* Media window */}
                  <div
                    className="relative w-full aspect-video mb-4 overflow-hidden rounded-lg border-2"
                    style={{
                      borderColor: service.color,
                      boxShadow: `0 0 40px ${service.color}40`,
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Icon overlay */}
                    <div
                      className="absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: service.color,
                        boxShadow: `0 0 40px ${service.color}80`,
                      }}
                    >
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-black text-white mb-3 leading-none whitespace-nowrap">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-white/80 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Service list */}
            <div className="space-y-0.5 sm:space-y-1 flex flex-col justify-center w-full">
              {services.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className="group w-full text-left"
                >
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-2.5 border-l-2 sm:border-l-4 transition-colors duration-700 ease-in-out"
                    style={{
                      borderColor: activeService === index ? service.color : 'transparent',
                      backgroundColor: activeService === index ? 'rgba(255,255,255,0.05)' : 'transparent',
                    }}
                  >
                    {/* Number */}
                    <div
                      className="text-xl sm:text-2xl md:text-3xl font-black transition-colors duration-700 ease-in-out"
                      style={{
                        color: activeService === index ? service.color : 'rgba(255,255,255,0.2)',
                        textShadow: activeService === index ? `0 0 40px ${service.color}60` : 'none',
                      }}
                    >
                      {service.number}
                    </div>

                    {/* Icon */}
                    <div
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-colors duration-700 ease-in-out"
                      style={{
                        backgroundColor: activeService === index
                          ? service.color
                          : 'rgba(255,255,255,0.05)',
                        boxShadow: activeService === index ? `0 0 40px ${service.color}60` : 'none',
                      }}
                    >
                      <service.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-5.5 md:h-5.5 transition-colors duration-700 ease-in-out"
                        style={{
                          color: activeService === index ? '#fff' : 'rgba(255,255,255,0.3)',
                        }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <h3
                        className="text-sm sm:text-base md:text-lg lg:text-xl font-black transition-colors duration-700 ease-in-out"
                        style={{
                          color: activeService === index ? '#fff' : 'rgba(255,255,255,0.4)',
                        }}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Desktop - Large display on right */}
            <div className="hidden lg:flex lg:items-center lg:h-full relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
                  style={{
                    opacity: activeService === index ? 1 : 0,
                    pointerEvents: activeService === index ? 'auto' : 'none',
                  }}
                >
                  {/* Media window */}
                  <div
                    className="relative w-full aspect-video mb-3 overflow-hidden rounded-lg border-2"
                    style={{
                      borderColor: service.color,
                      boxShadow: `0 0 40px ${service.color}40`,
                    }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    {/* Icon overlay */}
                    <div
                      className="absolute bottom-3 right-3 w-11 h-11 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: service.color,
                        boxShadow: `0 0 40px ${service.color}80`,
                      }}
                    >
                      <service.icon size={22} className="text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-5xl font-black text-white mb-3 leading-none whitespace-nowrap">
                    {service.title}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-white/80 font-light leading-relaxed max-w-xl">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
        <div
          className="h-full transition-all duration-700 ease-in-out"
          style={{
            width: `${((activeService + 1) / services.length) * 100}%`,
            background: `#eaa509`,
          }}
        />
      </div>
    </section>
  );
}
