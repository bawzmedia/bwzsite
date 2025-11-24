import { useEffect } from 'react';
import HeroCarousel from './components/HeroCarousel';
import Guarantee from './components/Guarantee';
import SplitHero from './components/SplitHero';
import Services from './components/Services';
import VideoPoster from './components/VideoPoster';
import ProjectsGrid from './components/ProjectsGrid';
import TextPoster from './components/TextPoster';
import BrandShowcase from './components/BrandShowcase';
import About from './components/About';
import CTABanner from './components/CTABanner';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FilmTimeline from './components/FilmTimeline';
import { initSmoothScrolling } from './utils/smoothScroll';

function App() {
  // Initialize smooth scrolling when app mounts
  useEffect(() => {
    // Initialize smooth scroll handler for anchor links
    initSmoothScrolling();

    // Optional: Add keyboard navigation for sections
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if not typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Space or Page Down - scroll to next section
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

      // Page Up - scroll to previous section
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
      <HeroCarousel />
      <Guarantee />
      <TextPoster />
      <BrandShowcase />
      <SplitHero />
      <Services />
      <ProjectsGrid />
      <VideoPoster />
      <About />
      <CTABanner />
      <Footer />
    </div>
  );
}

export default App;
