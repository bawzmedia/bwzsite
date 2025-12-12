import { useState } from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function PricingTiers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const tiers = [
    {
      id: 'essentials',
      name: 'ESSENTIALS',
      subtitle: 'For growing brands',
      tagline: 'Consistent content without the chaos',
      features: [
        '3 cinematic reels per month',
        '10 edited photos',
        'Simple content plan',
        'Captions & sound design',
        'Social-ready formats',
      ],
      highlight: false,
    },
    {
      id: 'cinematic',
      name: 'CINEMATIC',
      subtitle: 'Most Popular',
      tagline: 'Full content system with storytelling',
      features: [
        '6 cinematic reels per month',
        '1 hero promo video (30-45s)',
        '20-25 edited photos',
        'Full monthly content calendar',
        'Story arc & campaign themes',
        'Subtitles & sound design',
      ],
      highlight: true,
    },
    {
      id: 'broadcast',
      name: 'BROADCAST',
      subtitle: 'For industry leaders',
      tagline: 'Enterprise-level production',
      features: [
        '10 cinematic reels per month',
        '2 hero promo videos',
        '30-40 edited photos',
        'Campaign-level story architecture',
        'YouTube support (2-4 episodes)',
        'Monthly strategy session',
        'Multi-location coverage',
      ],
      highlight: false,
    },
  ];

  const handleSelectTier = (tierId: string) => {
    setSelectedTier(tierId);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="pricing" className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#2a0e4a] to-black overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(233,168,32,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,rgba(27,3,42,0.5)_0%,transparent_50%)]"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(233,168,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(233,168,32,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E9A820]/10 border border-[#E9A820]/30 mb-6">
              <Sparkles className="w-4 h-4 text-[#E9A820]" />
              <span className="text-[#E9A820] text-sm font-bold tracking-wider uppercase">
                Content as a Service
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6">
              CHOOSE YOUR <span className="text-[#E9A820]">CONTENT PLAN</span>
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
              Cinematic content delivered monthly. No contracts. Cancel anytime. 
              <span className="text-white font-medium"> Apply below to see if we're a fit.</span>
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col p-6 sm:p-8 transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-[#E9A820]/20 to-[#E9A820]/5 border-2 border-[#E9A820] scale-[1.02] lg:scale-105'
                    : 'bg-white/[0.03] border border-white/10 hover:border-[#E9A820]/30'
                }`}
              >
                {/* Popular badge */}
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-[#E9A820] flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-black" />
                    <span className="text-black text-xs font-black tracking-wider">
                      RECOMMENDED
                    </span>
                  </div>
                )}

                {/* Tier header */}
                <div className="mb-6 sm:mb-8">
                  <p className={`text-xs font-bold tracking-wider uppercase mb-2 ${
                    tier.highlight ? 'text-[#E9A820]' : 'text-white/40'
                  }`}>
                    {tier.subtitle}
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-white/70">
                    {tier.tagline}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 mb-8 flex-grow">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.highlight ? 'bg-[#E9A820]' : 'bg-white/10'
                      }`}>
                        <Check className={`w-3 h-3 ${tier.highlight ? 'text-black' : 'text-[#E9A820]'}`} />
                      </div>
                      <span className="text-sm text-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectTier(tier.id)}
                  className={`group w-full flex items-center justify-center gap-2 px-6 py-4 font-black text-base tracking-wide transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-[#E9A820] hover:bg-[#f4c430] text-black'
                      : 'bg-white/5 border border-white/20 hover:border-[#E9A820] hover:bg-[#E9A820]/10 text-white'
                  }`}
                >
                  APPLY NOW
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                    tier.highlight ? 'text-black' : 'text-[#E9A820]'
                  }`} />
                </button>
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="text-white/50 text-sm">
              Not sure which plan is right? <span className="text-[#E9A820]">Apply anyway</span> — we'll help you find the perfect fit.
            </p>
          </div>
        </div>
      </section>

      <ProjectQuestionnaireModal 
        isOpen={isModalOpen} 
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTier(null);
        }}
        selectedTier={selectedTier}
      />
    </>
  );
}
