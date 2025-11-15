import { Instagram, Linkedin, Facebook, Youtube } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/bawzmedia/', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ahmed-bawazir-73696598', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100092572812959', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@bawzmedia', label: 'YouTube' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    updateCanvasSize();

    let offset1 = 0;
    let offset2 = 0;

    const drawFilmStrip = (y: number, offset: number, opacity: number, color: string) => {
      const stripHeight = 40;
      const frameWidth = 60;
      const perfSize = 6;
      const perfSpacing = 10;

      ctx.save();
      ctx.globalAlpha = opacity;

      const totalFrames = Math.ceil(canvas.width / frameWidth) + 2;

      for (let i = -1; i < totalFrames; i++) {
        const x = (i * frameWidth + offset) % (canvas.width + frameWidth * 2) - frameWidth;

        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(x, y, frameWidth, stripHeight);

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;
        ctx.strokeRect(x + 2, y + 2, frameWidth - 4, stripHeight - 4);

        ctx.fillStyle = '#0a0a0a';
        const perfsTop = Math.floor((frameWidth - perfSpacing) / perfSpacing);
        for (let p = 0; p < perfsTop; p++) {
          ctx.fillRect(x + 4 + p * perfSpacing, y - 3, perfSize, 6);
          ctx.fillRect(x + 4 + p * perfSpacing, y + stripHeight - 3, perfSize, 6);
        }

        ctx.fillStyle = color;
        ctx.font = '7px monospace';
        ctx.fillText(`${String(i + Math.floor(offset / frameWidth)).padStart(4, '0')}`, x + 6, y + stripHeight / 2 + 2);
      }

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drawFilmStrip(canvas.height * 0.3, offset1, 0.3, '#E9A820');
      drawFilmStrip(canvas.height * 0.6, offset2, 0.25, '#E9A820');

      offset1 -= 1;
      offset2 -= 0.6;

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <footer className="relative border-t-2 border-[#E9A820]/20">
      {/* Layer 1 (bottom): Black background */}
      <div className="absolute inset-0 bg-black"></div>
      
      {/* Layer 2 (middle): Film timeline effect - ONLY in footer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{ opacity: 0.5 }}
      />
      
      {/* Layer 3 (top): Footer content */}
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 z-10">
        <div className="py-8 flex flex-col items-center gap-6">
          <img src="/Bawzmedia Main Logo.png" alt="Bawzmedia" className="h-10 relative z-20" />

          <div className="flex gap-4 relative z-20">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 border-2 border-white/10 flex items-center justify-center hover:border-[#E9A820] hover:bg-[#E9A820]/10 transition-all group"
              >
                <social.icon size={20} className="text-white/50 group-hover:text-[#E9A820] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 relative z-20">
            <p className="text-gray-400 text-sm">
              © 2025 BAWZMEDIA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => setLegalModalType('privacy')}
                className="text-gray-400 hover:text-[#E9A820] text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="text-gray-400 hover:text-[#E9A820] text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setLegalModalType('cookies')}
                className="text-gray-400 hover:text-[#E9A820] text-sm transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>

      {legalModalType && (
        <LegalModal
          isOpen={true}
          onClose={() => setLegalModalType(null)}
          type={legalModalType}
        />
      )}
    </footer>
  );
}
