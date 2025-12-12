export default function ProblemSection() {
  const problems = [
    {
      title: 'No Time to Create',
      description: "Between client calls, operations, and growing your business, content creation always falls to the bottom of the list. You know you need it, but there's never enough hours in the day.",
      image: 'https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=800&q=80',
    },
    {
      title: 'Inconsistent Posting',
      description: "You start strong with a content plan, but life happens. Weeks go by without a post, and rebuilding momentum feels like starting from scratch every time.",
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
    },
    {
      title: 'In-House is Expensive',
      description: "Hiring a full-time videographer means $60K+ in salary, plus equipment, software, and training. For most businesses, the math just doesn't work.",
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
      title: 'Quality Matters',
      description: "You've seen what professional content does for your competitors. Your brand deserves the same level of polish, but finding reliable creative partners is exhausting.",
      image: 'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?w=800&q=80',
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-16 bg-black overflow-hidden">
      {/* Background - Black with faint grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      
      {/* Subtle gold glow accents */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#E9A820] rounded-full blur-[200px] opacity-5"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#E9A820] rounded-full blur-[200px] opacity-5"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            The Content Struggle is Real
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            DOES THIS <span className="text-[#E9A820]">SOUND FAMILIAR?</span>
          </h2>
        </div>

        {/* Grid - Image and Text Separated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group bg-white/[0.02] border border-white/10 hover:border-[#E9A820]/40 transition-colors duration-300"
            >
              {/* Image Section */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle gradient at bottom for transition */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              {/* Text Section - Separate from image */}
              <div className="p-5 sm:p-6">
                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black text-white mb-3 group-hover:text-[#E9A820] transition-colors duration-300">
                  {problem.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#E9A820]/30 group-hover:border-[#E9A820]/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="text-base sm:text-lg md:text-xl font-bold text-white">
            There's a better way.{' '}
            <span className="text-[#E9A820]">We handle it all.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
