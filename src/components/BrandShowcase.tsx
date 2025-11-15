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
    <section className="relative py-4 sm:py-3 md:py-2 bg-white border-t-[3px] border-b-[8px] border-black overflow-hidden w-full">
      <div className="w-full px-4 sm:px-6">
        <div className="flex flex-col items-center md:flex-row md:items-center">
          <div className="flex-shrink-0 text-center md:text-right md:min-w-64 md:max-w-64 md:border-r md:border-gray-200 md:pr-8 mb-4 md:mb-0 w-full md:w-auto">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wider sm:tracking-widest text-gray-900 uppercase leading-tight">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="w-full py-3 md:py-2 md:w-auto md:flex-1">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={60}
              fadeWidth={80}
            >
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center h-16 md:h-auto px-2 sm:px-4 md:px-8">
                  <img
                    className="max-h-full w-auto object-contain"
                    src={brand.logo}
                    alt={brand.name}
                    style={{ height: `${brand.height * 0.7}px` }}
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}
