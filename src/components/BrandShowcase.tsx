import { BlurredInfiniteSlider } from './InfiniteSlider';

export default function BrandShowcase() {
  const brands = [
    { name: 'Sportsman Channel', logo: '/pngegg (1).png', height: 60 },
    { name: 'World Fishing Network', logo: '/pngegg.png', height: 100 },
    { name: 'Wolf Lake', logo: '/Wolf_Lake-Logo-Final-003.svg', height: 120 },
    { name: 'Lisa Roper Outdoors', logo: '/LisaRoperB2.png', height: 100 },
    { name: 'Al Faruq', logo: '/AlFaruqLogo.webp', height: 130 },
    { name: 'Aboriginal Training Services', logo: '/ats-logo-transparent.png', height: 80 },
    { name: 'Ledcor Group', logo: '/ledcor-group-of-companies-brand-logo-architectural-engineering-others-5a50790059d1d8c3d35c6e41806b5121.png', height: 100 },
    { name: "Cabela's", logo: "/Cabela's_Logo.svg", height: 80 },
    { name: 'Fish Logo', logo: '/IMG_8668.webp', height: 192 }
  ];

  return (
    <section className="relative py-6 sm:py-8 bg-white border-y-4 border-black overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center md:flex-row md:items-center max-w-7xl mx-auto">
          {/* Label */}
          <div className="flex-shrink-0 text-center md:text-left md:min-w-56 md:max-w-56 md:border-r-2 md:border-black/10 md:pr-8 mb-4 md:mb-0">
            <p className="text-sm sm:text-base font-black tracking-wider text-black uppercase">
              Trusted by Industry Leaders
            </p>
          </div>
          
          {/* Logo slider */}
          <div className="w-full md:flex-1 md:pl-8">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={48}
              fadeWidth={64}
            >
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center h-16 md:h-20 px-4 sm:px-6">
                  <img
                    className="max-h-full w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                    src={brand.logo}
                    alt={brand.name}
                    style={{ height: `${brand.height * 0.6}px` }}
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
