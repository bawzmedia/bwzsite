import { Menu, X } from 'lucide-react';
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
    { label: 'HOME', href: '#home', number: '01' },
    { label: 'SERVICES', href: '#services', number: '02' },
    { label: 'PROJECTS', href: '#portfolio', number: '03' },
    { label: 'ABOUT', href: '#about', number: '04' },
    { label: 'CONTACT', href: '#contact', number: '05' },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-xl border-b-2 border-[#E9A820]/20' : 'bg-transparent lg:bg-transparent bg-black/70 backdrop-blur-sm'
      }`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-16">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center hover:opacity-80 transition-opacity relative z-50"
            >
              <img src="/Bawzmedia Main Logo.png" alt="Bawzmedia" className="h-6" />
            </a>

            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group relative text-white text-sm font-bold tracking-wider hover:text-[#E9A820] transition-colors"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E9A820] group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group relative px-6 py-2 overflow-hidden border-2 border-[#E9A820]"
              >
                <span className="relative z-10 font-bold text-sm tracking-wider text-white">
                  START PROJECT
                </span>
                <div className="absolute inset-0 bg-[#E9A820] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </div>

            <button
              className="lg:hidden relative z-50 w-11 h-11 flex flex-col items-center justify-center gap-1.5 group"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-7 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-7 h-0.5 bg-[#E9A820] transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-700 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}>
        <div className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(233, 168, 32, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(233, 168, 32, 0.15) 0%, transparent 50%)',
          }}></div>
        </div>

        <div className="relative h-full flex flex-col items-center justify-center px-6 overflow-y-auto py-24">
          <div className={`w-full max-w-md transition-all duration-700 delay-100 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <nav className="space-y-2 mb-12">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="group block relative overflow-hidden"
                  style={{
                    transitionDelay: isOpen ? `${100 + index * 80}ms` : '0ms'
                  }}
                >
                  <div className="flex items-center gap-4 p-4 border-l-4 border-transparent hover:border-[#E9A820] transition-all duration-300 hover:bg-white/5">
                    <span className="text-[#E9A820] text-sm font-black opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.number}
                    </span>
                    <span className="text-white text-xl sm:text-2xl font-black tracking-wider group-hover:text-[#E9A820] transition-colors duration-300">
                      {item.label}
                    </span>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-4">
                      <div className="w-8 h-0.5 bg-[#E9A820]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E9A820]/20 to-transparent"></div>
                </a>
              ))}
            </nav>

            <div className={`space-y-4 transition-all duration-700 ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}>
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="group relative w-full px-8 py-5 overflow-hidden border-2 border-[#E9A820] hover:border-[#E9A820]"
              >
                <span className="relative z-10 font-black text-lg tracking-wider text-white group-hover:text-black transition-colors duration-500">
                  START PROJECT
                </span>
                <div className="absolute inset-0 bg-[#E9A820] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </button>

              <div className="text-center pt-6 space-y-2">
                <p className="text-white/40 text-sm font-bold tracking-wider">FOLLOW US</p>
                <div className="flex justify-center gap-6">
                  {['INSTAGRAM', 'YOUTUBE', 'LINKEDIN'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-white/60 hover:text-[#E9A820] text-xs font-bold tracking-wider transition-colors duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <ProjectQuestionnaireModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
