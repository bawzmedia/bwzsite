import { useState } from 'react';
import { Gift, Shield, ArrowRight } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Guarantee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const guarantees = [
    {
      icon: Gift,
      label: 'Signing Bonus',
      title: 'FREE AI COMMERCIAL',
      description: 'Sign with me and get a complimentary AI-infused hero commercial to elevate your brand from day one.',
      value: 'VALUE: $3,000+',
    },
    {
      icon: Shield,
      label: 'Iron-Clad Guarantee',
      title: 'FILMED COMMERCIAL',
      description: "If our project doesn't deliver, I personally film you an in-person commercial. Content you own forever.",
      value: '100% RISK-FREE',
    },
  ];

  return (
    <>
      <section className="relative min-h-[100svh] bg-black overflow-hidden flex items-center py-12 sm:py-0">
        {/* Background - simple and clean */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#E9A820]/5 to-transparent"></div>

        {/* Purple glow from bottom - smooth transition to next section */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#1b032a]/40 via-[#1b032a]/15 to-transparent"></div>
        <div className="absolute -bottom-20 left-1/4 w-[500px] h-[400px] bg-[#1b032a] rounded-full blur-[200px] opacity-50"></div>
        <div className="absolute -bottom-10 right-1/3 w-[400px] h-[300px] bg-[#2d0845] rounded-full blur-[180px] opacity-40"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Header - Clear hierarchy */}
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[#E9A820] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              Our Commitment
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
              WORK WITH <span className="text-[#E9A820]">CONFIDENCE</span>
            </h2>
            <p className="text-sm sm:text-base text-white/60 max-w-lg mx-auto">
              Every partnership is backed by tangible value and an iron-clad guarantee.
            </p>
          </div>

          {/* Guarantee Cards - Consistent styling */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {guarantees.map((item, index) => (
              <div key={index} className="relative group">
                {/* Card */}
                <div className="relative bg-white/[0.02] border border-[#E9A820]/30 p-6 sm:p-8 h-full hover:border-[#E9A820]/60 transition-colors duration-300">
                  {/* Icon */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#E9A820] mb-6">
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" strokeWidth={2} />
                  </div>

                  {/* Label */}
                  <p className="text-[#E9A820] text-xs font-bold tracking-wider uppercase mb-2">
                    {item.label}
                  </p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Value */}
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-[#E9A820] font-bold tracking-wider">
                      {item.value}
                    </p>
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#E9A820]/30"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Single CTA - Clear action */}
          <div className="text-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-all duration-300"
            >
              <span className="text-black font-bold text-sm sm:text-base tracking-wider">
                START YOUR PROJECT
              </span>
              <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
