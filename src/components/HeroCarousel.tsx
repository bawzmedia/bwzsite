import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../content/images';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: IMAGES.heroSlides.slide1,
      overlay: true,
    },
    {
      image: IMAGES.heroSlides.slide2,
      overlay: true,
    },
    {
      image: IMAGES.heroSlides.slide3,
      overlay: false,
    },
    {
      image: IMAGES.heroSlides.slide4,
      overlay: true,
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
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background Slides - z-10 to be above FilmTimeline */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1000 z-[1]"
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
          {slide.overlay && (
            <div className="absolute inset-0 bg-black/50"></div>
          )}
        </div>
      ))}

      {/* Content - z-10 to be above slides */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1] mb-4 sm:mb-6">
            <span className="block text-white drop-shadow-lg">CINEMATIC CONTENT.</span>
            <span className="block text-[#E9A820] mt-1 sm:mt-2 drop-shadow-lg">DELIVERED MONTHLY.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
            Broadcast-quality video, photography, and social content on subscription. 
            <span className="text-white font-medium"> No more scrambling for posts.</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToPricing}
            className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-3 sm:py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300 shadow-2xl shadow-[#E9A820]/30"
          >
            <span className="text-black font-black text-sm sm:text-base md:text-lg tracking-wide">
              EXPLORE SERVICES
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Trust indicator */}
          <p className="mt-4 sm:mt-6 text-white/60 text-xs sm:text-sm px-4">
            Trusted by broadcast networks, construction firms & outdoor brands
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? '32px' : '16px',
              height: '3px',
              background: currentSlide === index
                ? '#E9A820'
                : 'rgba(255,255,255,0.3)',
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
