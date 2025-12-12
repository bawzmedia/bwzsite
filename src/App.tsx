import { useEffect } from 'react';
import HeroCarousel from './components/HeroCarousel';
import BrandShowcase from './components/BrandShowcase';
import ProblemSection from './components/ProblemSection';
import TextPoster from './components/TextPoster';
import ServicesShowcase from './components/ServicesShowcase';
import Guarantee from './components/Guarantee';
import SplitHero from './components/SplitHero';
import ProjectsGrid from './components/ProjectsGrid';
import VideoPoster from './components/VideoPoster';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FilmTimeline from './components/FilmTimeline';
import { initSmoothScrolling } from './utils/smoothScroll';

function App() {
  useEffect(() => {
    initSmoothScrolling();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      if (e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentScrollY = window.pageYOffset;
        const windowHeight = window.innerHeight;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + currentScrollY;

          if (sectionTop > currentScrollY + windowHeight * 0.3) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
      }

      if (e.key === 'PageUp') {
        e.preventDefault();
        const sections = Array.from(document.querySelectorAll('section')).reverse();
        const currentScrollY = window.pageYOffset;

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i];
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top + currentScrollY;

          if (sectionTop < currentScrollY - 100) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return;
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <FilmTimeline />
      <Navigation />
      
      {/* 1. Hero - Clear value proposition + CTA */}
      <HeroCarousel />
      
      {/* 2. Social Proof - Trust signals */}
      <BrandShowcase />
      
      {/* 3. Problem - Agitate the pain */}
      <ProblemSection />
      
      {/* 4. Statement - Bold visual break (GOLD) */}
      <TextPoster />
      
      {/* 5. Services - Marketing services showcase */}
      <ServicesShowcase />
      
      {/* 6. Guarantee - Risk reversal */}
      <Guarantee />
      
      {/* 7. Creative Statement (PURPLE) */}
      <SplitHero />
      
      {/* 8. Portfolio - Proof of quality */}
      <ProjectsGrid />
      
      {/* 9. Showreel - Video proof */}
      <VideoPoster />
      
      {/* 10. About - Personal connection */}
      <About />
      
      {/* 11. Final CTA */}
      <CTABanner />
      
      <Footer />
    </div>
  );
}

export default App;
