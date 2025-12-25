import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProblemSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const problems = [
    {
      title: 'Time Pressure',
      subtitle: 'Marketing Keeps Falling Down the Priority List',
      description: "Between sales calls, operations, and leadership decisions, marketing gets pushed aside. Not because it is unimportant, but because higher-leverage work keeps taking precedence.",
      image: '/timepressure.png',
      number: '01',
    },
    {
      title: 'Consistency Gap',
      subtitle: 'Momentum Is Hard to Maintain',
      description: "You start with a plan. Then the business demands attention elsewhere. Weeks pass, visibility drops, and restarting feels like rebuilding from zero again.",
      image: '/consistancygap.png',
      number: '02',
    },
    {
      title: 'Internal Cost',
      subtitle: 'Doing This In-House Rarely Makes Sense',
      description: "Hiring full-time talent means salary, tools, management, and constant direction. For most companies, the cost and distraction outweigh the upside.",
      image: '/internalcost.png',
      number: '03',
    },
    {
      title: 'Reputation Risk',
      subtitle: 'Your Brand Is Being Judged Quietly',
      description: "Prospects compare you to competitors who look established and active. Inconsistent or low-quality content signals stagnation, even when the business is strong.",
      image: '/reputationrisk.png',
      number: '04',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % problems.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, problems.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % problems.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + problems.length) % problems.length);
  };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background Slides */}
      {problems.map((problem, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-1000"
          style={{
            opacity: currentSlide === index ? 1 : 0,
            transform: `scale(${currentSlide === index ? 1 : 1.05})`,
          }}
        >
          <img
            src={problem.image}
            alt={problem.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-black/75"></div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Section badge */}
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            The Real Problem
          </p>

          {/* Main headline (static) */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-12 sm:mb-16">
            THIS IS WHERE MARKETING STARTS <span className="text-[#E9A820]">COMPETING WITH LEADERSHIP</span>
          </h2>

          {/* Carousel content */}
          <div className="relative">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="transition-all duration-700"
                style={{
                  opacity: currentSlide === index ? 1 : 0,
                  transform: currentSlide === index ? 'translateY(0)' : 'translateY(20px)',
                  position: currentSlide === index ? 'relative' : 'absolute',
                  inset: currentSlide === index ? 'auto' : '0',
                  pointerEvents: currentSlide === index ? 'auto' : 'none',
                }}
              >
                {/* Number */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-black text-[#E9A820]/30 mb-4">
                  {problem.number}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
                  {problem.title.toUpperCase()}
                </h3>

                {/* Subtitle */}
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#E9A820] mb-6">
                  {problem.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom statement */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E9A820]/20">
            <p className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight">
              The solution is not more effort.{' '}
              <span className="text-[#E9A820]">It is better systems.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-sm border border-[#E9A820]/30 hover:border-[#E9A820] hover:bg-[#E9A820]/20 transition-all group"
        aria-label="Previous problem"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#E9A820] transition-colors mx-auto" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 bg-black/50 backdrop-blur-sm border border-[#E9A820]/30 hover:border-[#E9A820] hover:bg-[#E9A820]/20 transition-all group"
        aria-label="Next problem"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:text-[#E9A820] transition-colors mx-auto" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {problems.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentSlide(index);
            }}
            className="transition-all duration-300"
            style={{
              width: currentSlide === index ? '40px' : '12px',
              height: '3px',
              background: currentSlide === index
                ? '#E9A820'
                : 'rgba(255,255,255,0.3)',
            }}
            aria-label={`Go to problem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
