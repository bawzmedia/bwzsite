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
    <section className="relative min-h-[100svh] flex flex-col justify-center py-12 sm:py-0 bg-gradient-to-br from-[#1b032a] via-[#2d0845] to-[#1b032a] overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(233,168,32,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(233,168,32,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
            The Content Struggle is Real
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            DOES THIS <span className="text-[#E9A820]">SOUND FAMILIAR?</span>
          </h2>
        </div>

        {/* Quadrant Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-white/10"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img 
                  src={problem.image} 
                  alt={problem.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b032a] via-[#1b032a]/80 to-[#1b032a]/40"></div>
              </div>

              {/* Content */}
              <div className="relative p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 sm:mb-3">
                  {problem.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
                  {problem.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-3 right-3 w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#E9A820]/50"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-8 sm:mt-10">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white">
            There's a better way.{' '}
            <span className="text-[#E9A820]">We handle it all.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
