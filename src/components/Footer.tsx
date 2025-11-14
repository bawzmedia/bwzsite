import { Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useState } from 'react';
import LegalModal from './LegalModal';

export default function Footer() {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black border-t-2 border-[#E9A820]/20">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="py-8 flex flex-col items-center gap-6">
          <img src="/Bawzmedia Main Logo.png" alt="Bawzmedia" className="h-10" />

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 border-2 border-white/10 flex items-center justify-center hover:border-[#E9A820] hover:bg-[#E9A820]/10 transition-all group"
              >
                <social.icon size={20} className="text-white/50 group-hover:text-[#E9A820] transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
