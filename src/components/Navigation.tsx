import { useState, useEffect } from 'react';
import { smoothScrollTo } from '../utils/smoothScroll';
import ProjectQuestionnaireModal from './ProjectQuestionnaireModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#pricing' },
    { label: 'WORK', href: '#portfolio' },
    { label: 'ABOUT', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      smoothScrollTo(target as HTMLElement, {
        duration: 1000,
        easing: 'easeInOutQuint'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md border-b border-[#E9A820]/20' : 'bg-transparent lg:bg-transparent bg-black/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center hover:opacity-80 transition-opacity relative z-50"
            >
              <img src="/Bawzmedia Main Logo.png" alt="Bawzmedia" className="h-6 sm:h-7" />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-white/80 text-sm font-bold tracking-wider hover:text-[#E9A820] transition-colors"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#E9A820] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              {/* Primary CTA - Solid button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-2.5 bg-[#E9A820] hover:bg-[#f4c430] transition-colors"
              >
                <span className="font-black text-sm tracking-wider text-black">
                  GET STARTED
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(233, 168, 32, 0.15) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 py-24">
          <nav className="space-y-4 w-full max-w-sm">
            {navItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block p-4 border-l-4 border-transparent hover:border-[#E9A820] hover:bg-white/5 transition-all duration-300 ${
                  isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}
                style={{
                  transitionDelay: isOpen ? `${100 + index * 50}ms` : '0ms'
                }}
              >
                <span className="text-white text-xl font-black tracking-wider hover:text-[#E9A820] transition-colors">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className={`mt-8 w-full max-w-sm transition-all duration-500 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isOpen ? '400ms' : '0ms' }}>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full px-8 py-4 bg-[#E9A820] hover:bg-[#f4c430] transition-colors"
            >
              <span className="font-black text-lg tracking-wider text-black">
                GET STARTED
              </span>
            </button>

            <div className="text-center mt-8">
              <p className="text-white/40 text-sm font-bold tracking-wider mb-4">FOLLOW US</p>
              <div className="flex justify-center gap-6">
                {['INSTAGRAM', 'YOUTUBE', 'LINKEDIN'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-white/60 hover:text-[#E9A820] text-xs font-bold tracking-wider transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
