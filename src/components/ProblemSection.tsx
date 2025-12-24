export default function ProblemSection() {
  const problems = [
    {
      title: 'Time Pressure',
      subtitle: 'Marketing Keeps Falling Down the Priority List',
      description: "Between sales calls, operations, and leadership decisions, marketing gets pushed aside. Not because it is unimportant, but because higher-leverage work keeps taking precedence.",
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    },
    {
      title: 'Consistency Gap',
      subtitle: 'Momentum Is Hard to Maintain',
      description: "You start with a plan. Then the business demands attention elsewhere. Weeks pass, visibility drops, and restarting feels like rebuilding from zero again.",
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    },
    {
      title: 'Internal Cost',
      subtitle: 'Doing This In-House Rarely Makes Sense',
      description: "Hiring full-time talent means salary, tools, management, and constant direction. For most companies, the cost and distraction outweigh the upside.",
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
      title: 'Reputation Risk',
      subtitle: 'Your Brand Is Being Judged Quietly',
      description: "Prospects compare you to competitors who look established and active. Inconsistent or low-quality content signals stagnation, even when the business is strong.",
      image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80',
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 bg-gradient-to-br from-[#2d1654] via-[#3a1d6e] to-[#2d1654] overflow-hidden">
      {/* Background effects - Purple with grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,168,32,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(233,168,32,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            The Real Problem
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            THIS IS WHERE MARKETING STARTS <span className="text-[#E9A820]">COMPETING WITH LEADERSHIP</span>
          </h2>
        </div>

        {/* Grid - Image and Text Separated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-white/10 hover:border-[#E9A820]/40 transition-colors duration-300"
            >
              {/* Image Section */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient at bottom for transition to black tile */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              {/* Text Section - Black background with faint grid lines */}
              <div className="relative bg-black p-5 sm:p-6">
                {/* Faint grid pattern inside the tile */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-white mb-1 group-hover:text-[#E9A820] transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-[#E9A820]/80 mb-3">
                    {problem.subtitle}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#E9A820]/30 group-hover:border-[#E9A820]/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-base sm:text-lg md:text-xl font-bold text-white">
            The solution is not more effort.{' '}
            <span className="text-[#E9A820]">It is better systems.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
