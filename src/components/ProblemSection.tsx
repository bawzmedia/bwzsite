export default function ProblemSection() {
  const problems = [
    {
      title: 'Time Pressure',
      subtitle: 'Marketing Keeps Falling Down the Priority List',
      description: "Between sales calls, operations, and leadership decisions, marketing gets pushed aside. Not because it is unimportant, but because higher-leverage work keeps taking precedence.",
      image: '/timepressure.png',
      number: '01',
      textSide: 'left',
    },
    {
      title: 'Consistency Gap',
      subtitle: 'Momentum Is Hard to Maintain',
      description: "You start with a plan. Then the business demands attention elsewhere. Weeks pass, visibility drops, and restarting feels like rebuilding from zero again.",
      image: '/consistancygap.png',
      number: '02',
      textSide: 'right',
    },
    {
      title: 'Internal Cost',
      subtitle: 'Doing This In-House Rarely Makes Sense',
      description: "Hiring full-time talent means salary, tools, management, and constant direction. For most companies, the cost and distraction outweigh the upside.",
      image: '/internalcost.png',
      number: '03',
      textSide: 'left',
    },
    {
      title: 'Reputation Risk',
      subtitle: 'Your Brand Is Being Judged Quietly',
      description: "Prospects compare you to competitors who look established and active. Inconsistent or low-quality content signals stagnation, even when the business is strong.",
      image: '/reputationrisk.png',
      number: '04',
      textSide: 'right',
    },
  ];

  return (
    <section className="relative min-h-[100svh] flex flex-col bg-black">
      {/* Header - centered at top */}
      <div className="relative py-12 sm:py-16 bg-gradient-to-br from-[#2d1654] via-[#3a1d6e] to-[#2d1654]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(233,168,32,0.1)_0%,transparent_60%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        
        <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            The Real Problem
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            THIS IS WHERE MARKETING STARTS <span className="text-[#E9A820]">COMPETING WITH LEADERSHIP</span>
          </h2>
        </div>
      </div>

      {/* Four thin horizontal slices */}
      <div className="flex-1 flex flex-col">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="relative flex-1 overflow-hidden group"
          >
            {/* Full background image */}
            <div className="absolute inset-0">
              <img
                src={problem.image}
                alt={problem.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content wrapper - grid split */}
            <div className="relative h-full grid grid-cols-2">
              {/* Text side with black gradient overlay */}
              <div
                className={`relative flex items-center ${
                  problem.textSide === 'right' ? 'order-2' : 'order-1'
                }`}
              >
                {/* Black gradient overlay only on text side */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-transparent"></div>
                
                <div className="relative z-10 px-6 sm:px-8 lg:px-12 max-w-xl">
                  {/* Number badge */}
                  <div className="text-3xl sm:text-4xl font-black text-[#E9A820]/40 mb-2">
                    {problem.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-1 leading-tight">
                    {problem.title.toUpperCase()}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg font-bold text-[#E9A820] mb-3">
                    {problem.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>

              {/* Image reveal side - bright, no overlay */}
              <div className={problem.textSide === 'right' ? 'order-1' : 'order-2'}></div>
            </div>

            {/* Thin separator line */}
            {index < problems.length - 1 && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-[#E9A820]/20"></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom statement */}
      <div className="relative py-8 sm:py-10 bg-gradient-to-br from-[#2d1654] via-[#3a1d6e] to-[#2d1654]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        
        <div className="relative text-center px-6 max-w-3xl mx-auto">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-white leading-tight">
            The solution is not more effort.{' '}
            <span className="text-[#E9A820]">It is better systems.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
