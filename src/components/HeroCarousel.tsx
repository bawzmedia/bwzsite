import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: '/Supersharp tutorial before.jpeg',
    },
    {
      image: '/FR00_SPINE1_01_01_23_13.jpg',
    },
    {
      image: '/DSC04407.jpg',
    },
    {
      image: '/DSC04706.jpg',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('#pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: `scale(${currentSlide === index ? 1 : 1.1})`,
          }}
        >
          <img
            src={slide.image}
            alt="Cinematic content"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9A820]/10 border border-[#E9A820]/30 rounded-full mb-6 sm:mb-8">
            <div className="w-2 h-2 bg-[#E9A820] rounded-full animate-pulse"></div>
            <span className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase">
              Content as a Service
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.95] mb-6 sm:mb-8">
            <span className="block text-white">CINEMATIC CONTENT.</span>
            <span className="block text-[#E9A820] mt-2">DELIVERED MONTHLY.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed">
            Broadcast-quality video, photography, and social content on subscription. 
            <span className="text-white font-medium"> No more scrambling for posts.</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToPricing}
            className="group inline-flex items-center gap-3 px-8 sm:px-12 py-4 sm:py-5 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30 hover:shadow-[#E9A820]/50"
          >
            <span className="text-black font-black text-base sm:text-lg md:text-xl tracking-wide">
              EXPLORE SERVICES
            </span>
            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust indicator */}
          <p className="mt-6 sm:mt-8 text-white/50 text-sm">
            Trusted by broadcast networks, construction firms & outdoor brands
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? '48px' : '24px',
              height: '4px',
              background: currentSlide === index
                ? '#E9A820'
                : 'rgba(255,255,255,0.3)',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white/30 hidden lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest rotate-90 origin-center translate-y-6">SCROLL</span>
        </div>
      </div>
    </section>
  );
}
