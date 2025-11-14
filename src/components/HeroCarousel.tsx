import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      title: 'WE DON\'T MAKE CONTENT',
      subtitle: 'WE MAKE CULTURE',
      image: '/Supersharp tutorial before.jpeg',
      color: '#E9A820'
    },
    {
      title: 'AL-FARUQ ISLAMIC CENTRE',
      subtitle: 'PRESERVING KNOWLEDGE. HONORING LEGACY.',
      image: '/FR00_SPINE1_01_01_23_13.jpg',
      color: '#E9A820'
    },
    {
      title: 'LISA ROPER OUTDOORS',
      subtitle: 'NATIONAL BROADCAST TELEVISION',
      image: '/DSC04407.jpg',
      color: '#E9A820'
    },
    {
      title: 'ATS DRONE TRAINING',
      subtitle: 'EDMONTON INTERNATIONAL AIRPORT',
      image: '/DSC04706.jpg',
      color: '#E9A820'
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: `scale(${currentSlide === index ? 1 : 1.1})`,
          }}
        >
          {/* Background image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1
                className="text-[8vw] sm:text-[7vw] md:text-[10vw] font-black leading-none mb-4 md:mb-6"
                style={{
                  color: slide.color,
                  textShadow: `0 0 80px ${slide.color}80, 0 0 40px ${slide.color}40`,
                  animation: currentSlide === index ? 'glitch 5s infinite' : 'none'
                }}
              >
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-black text-white tracking-wider">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-white/30 flex items-center justify-center hover:border-[#E9A820] hover:bg-[#E9A820]/20 transition-all group z-10"
      >
        <ChevronLeft size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:text-[#E9A820]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-white/30 flex items-center justify-center hover:border-[#E9A820] hover:bg-[#E9A820]/20 transition-all group z-10"
      >
        <ChevronRight size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white group-hover:text-[#E9A820]" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 md:gap-4 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? '64px' : '32px',
              height: '4px',
              background: currentSlide === index
                ? `#eaa509`
                : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>
    </section>
  );
}
