import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    content: `
      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Information We Collect</h3>
      <p class="mb-4">We collect information you provide directly to us, including name, email address, and any other information you choose to provide through our contact forms or communications.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">How We Use Your Information</h3>
      <p class="mb-4">We use the information we collect to:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Respond to your inquiries and fulfill your requests</li>
        <li>Send you marketing communications that may be of interest to you</li>
        <li>Improve our services and website</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Information Sharing</h3>
      <p class="mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Data Security</h3>
      <p class="mb-4">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Your Rights</h3>
      <p class="mb-4">You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at automated.systems@bawzmedia.com.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Contact Us</h3>
      <p>If you have any questions about this Privacy Policy, please contact us at automated.systems@bawzmedia.com.</p>
    `
  },
  terms: {
    title: 'Terms of Service',
    content: `
      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Acceptance of Terms</h3>
      <p class="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Use License</h3>
      <p class="mb-4">Permission is granted to temporarily view the materials on Bawzmedia's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Disclaimer</h3>
      <p class="mb-4">The materials on Bawzmedia's website are provided on an 'as is' basis. Bawzmedia makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Limitations</h3>
      <p class="mb-4">In no event shall Bawzmedia or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Bawzmedia's website.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Intellectual Property</h3>
      <p class="mb-4">All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of or licensed to Bawzmedia and as such are protected from infringement by local and international legislation and treaties.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Modifications</h3>
      <p class="mb-4">Bawzmedia may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the current version of these terms of service.</p>
    `
  },
  cookies: {
    title: 'Cookie Policy',
    content: `
      <h3 class="text-xl font-bold text-[#E9A820] mb-4">What Are Cookies</h3>
      <p class="mb-4">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">How We Use Cookies</h3>
      <p class="mb-4">We use cookies to:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Understand how you use our website and improve your experience</li>
        <li>Remember your preferences and settings</li>
        <li>Provide personalized content and advertisements</li>
        <li>Analyze website traffic and usage patterns</li>
      </ul>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Types of Cookies We Use</h3>
      <p class="mb-4"><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly.</p>
      <p class="mb-4"><strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
      <p class="mb-4"><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</p>
      <p class="mb-4"><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Managing Cookies</h3>
      <p class="mb-4">Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience on our website.</p>

      <h3 class="text-xl font-bold text-[#E9A820] mb-4">Contact Us</h3>
      <p>If you have any questions about our use of cookies, please contact us at automated.systems@bawzmedia.com.</p>
    `
  }
};

export default function LegalModal({ isOpen, onClose, type }: LegalModalProps) {
  if (!isOpen) return null;

  const content = legalContent[type];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-3xl bg-gradient-to-b from-[#2a0e4a] to-black border-2 border-[#E9A820]/30 rounded-lg shadow-2xl overflow-hidden animate-slide-up max-h-[80vh] flex flex-col">
        <div className="sticky top-0 bg-gradient-to-b from-[#2a0e4a] to-[#2a0e4a]/95 border-b border-[#E9A820]/20 p-6 flex items-center justify-between z-10">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{content.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div
            className="text-gray-300 leading-relaxed legal-content"
            dangerouslySetInnerHTML={{ __html: content.content }}
          />
        </div>

        <div className="sticky bottom-0 bg-gradient-to-t from-black to-black/95 border-t border-[#E9A820]/20 p-6">
          <p className="text-sm text-gray-400 text-center">
            Last updated: January 2025
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out forwards;
        }

        .legal-content h3 {
          scroll-margin-top: 2rem;
        }

        .legal-content ul {
          padding-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}
