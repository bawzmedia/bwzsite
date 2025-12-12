import { Clock, TrendingDown, DollarSign, Frown } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: Clock,
      title: 'No Time to Create',
      description: "You're running a business, not a content studio. Every hour on content is an hour away from growth.",
      color: '#E9A820',
    },
    {
      icon: TrendingDown,
      title: 'Inconsistent Posting',
      description: "One week you're on fire, the next you disappear. The algorithm punishes inconsistency.",
      color: '#1b032a',
    },
    {
      icon: DollarSign,
      title: 'In-House is Expensive',
      description: "A full-time videographer costs $60K+/year. Equipment, software, training—it adds up fast.",
      color: '#E9A820',
    },
    {
      icon: Frown,
      title: 'Amateur Visuals Hurt',
      description: "Your competitors look polished. Your phone videos make you look like a hobby, not a business.",
      color: '#1b032a',
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-[#E9A820] rounded-full blur-[150px] opacity-10"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-[#1b032a] rounded-full blur-[150px] opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#E9A820] text-sm font-bold tracking-wider uppercase mb-4">
            The Content Struggle is Real
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            DOES THIS <span className="text-[#E9A820]">SOUND FAMILIAR?</span>
          </h2>
        </div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-white/[0.02] border border-white/10 hover:border-opacity-50 transition-all duration-300"
              style={{ 
                borderColor: `${problem.color}30`,
              }}
            >
              {/* Hover glow */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at center, ${problem.color}10 0%, transparent 70%)`
                }}
              ></div>

              {/* Icon */}
              <div 
                className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-4 sm:mb-6 transition-colors"
                style={{ 
                  backgroundColor: `${problem.color}20`,
                  border: `1px solid ${problem.color}40`
                }}
              >
                <problem.icon 
                  className="w-6 h-6 sm:w-7 sm:h-7" 
                  style={{ color: problem.color }}
                />
              </div>

              {/* Content */}
              <h3 className="relative text-lg sm:text-xl font-black text-white mb-2 sm:mb-3">
                {problem.title}
              </h3>
              <p className="relative text-sm sm:text-base text-white/60 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-xl sm:text-2xl md:text-3xl font-black text-white">
            There's a better way.{' '}
            <span className="text-[#E9A820]">We handle it all.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
