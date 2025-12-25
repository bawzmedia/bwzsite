export default function ProblemSection() {
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

  return (
    <>
      {/* Header Section */}
      <section className="relative min-h-[50svh] flex items-center justify-center bg-gradient-to-br from-[#2d1654] via-[#3a1d6e] to-[#2d1654] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.1)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
            The Real Problem
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            THIS IS WHERE MARKETING STARTS <span className="text-[#E9A820]">COMPETING WITH LEADERSHIP</span>
          </h2>
        </div>
      </section>

      {/* Full-Bleed Problem Sections */}
      {problems.map((problem, index) => (
        <section
          key={index}
          className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
        >
          {/* Full-bleed background image */}
          <div className="absolute inset-0">
            <img
              src={problem.image}
              alt={problem.title}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80"></div>
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
            {/* Problem Number */}
            <div className="inline-block mb-6">
              <div className="text-6xl sm:text-7xl md:text-8xl font-black text-[#E9A820]/20 leading-none">
                {problem.number}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-[0.95]">
              {problem.title.toUpperCase()}
            </h3>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E9A820] mb-8">
              {problem.subtitle}
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              {problem.description}
            </p>

            {/* Decorative line */}
            <div className="mt-10 flex items-center justify-center gap-3">
              <div className="w-12 h-px bg-[#E9A820]/30"></div>
              <div className="w-2 h-2 bg-[#E9A820]"></div>
              <div className="w-12 h-px bg-[#E9A820]/30"></div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#E9A820]/40"></div>
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#E9A820]/40"></div>
        </section>
      ))}

      {/* Closing Statement Section */}
      <section className="relative min-h-[50svh] flex items-center justify-center bg-gradient-to-br from-[#2d1654] via-[#3a1d6e] to-[#2d1654] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.1)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            The solution is not more effort.{' '}
            <span className="text-[#E9A820]">It is better systems.</span>
          </p>
        </div>
      </section>
    </>
  );
}
