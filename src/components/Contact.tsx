import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      return;
    }

    setSubmitted(true);
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 will-change-auto contact-section"
    >
      {/* Optimized gradient background - no heavy blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black"></div>

      {/* Subtle accent glow - optimized */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eaa509]/5 blur-[120px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {!submitted ? (
          <div className="space-y-12 sm:space-y-16">
            {/* Header with stagger animation */}
            <div className="text-center space-y-4 sm:space-y-6 opacity-0 contact-header">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                LET'S CONNECT
              </h2>
              <div className="w-20 h-1 bg-[#eaa509] mx-auto"></div>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light">
                Ready to create something extraordinary?
              </p>
            </div>

            {/* Sleek form with staggered field animations */}
            <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-10 max-w-2xl mx-auto">
              {/* Name */}
              <div className="opacity-0 contact-field" style={{ animationDelay: '0.1s' }}>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white text-lg font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-500"
                  required
                />
                <div 
                  className="h-0.5 bg-gradient-to-r from-[#eaa509] to-transparent mt-0 transition-all duration-500 origin-left"
                  style={{ 
                    transform: focusedField === 'name' ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: focusedField === 'name' ? 1 : 0
                  }}
                ></div>
              </div>

              {/* Email */}
              <div className="opacity-0 contact-field" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white text-lg font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-500"
                  required
                />
                <div 
                  className="h-0.5 bg-gradient-to-r from-[#eaa509] to-transparent mt-0 transition-all duration-500 origin-left"
                  style={{ 
                    transform: focusedField === 'email' ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: focusedField === 'email' ? 1 : 0
                  }}
                ></div>
              </div>

              {/* Message */}
              <div className="opacity-0 contact-field" style={{ animationDelay: '0.3s' }}>
                <label className="block text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">
                  Your Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full bg-transparent border-b-2 border-white/20 px-0 py-4 text-white text-lg font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-500 resize-none"
                  required
                />
                <div 
                  className="h-0.5 bg-gradient-to-r from-[#eaa509] to-transparent mt-0 transition-all duration-500 origin-left"
                  style={{ 
                    transform: focusedField === 'message' ? 'scaleX(1)' : 'scaleX(0)',
                    opacity: focusedField === 'message' ? 1 : 0
                  }}
                ></div>
              </div>

              {/* Button */}
              <div className="opacity-0 contact-field pt-4" style={{ animationDelay: '0.4s' }}>
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group relative w-full overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed bg-[#eaa509] hover:bg-[#eaa509]/90 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-black font-bold text-base md:text-lg tracking-wider px-8 py-5">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        SENDING
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          // Success state
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#eaa509]/20">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12 text-[#eaa509]" strokeWidth={2} />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                MESSAGE SENT
              </h3>
              <div className="w-20 h-1 bg-[#eaa509] mx-auto"></div>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                Thanks, {formData.name}. We'll be in touch soon.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .contact-section {
          scroll-margin-top: 100px;
        }

        .contact-header {
          animation: slideUp 0.8s ease-out forwards;
        }

        .contact-field {
          animation: slideUp 0.6s ease-out forwards;
        }

        .contact-section.is-visible .contact-header,
        .contact-section.is-visible .contact-field {
          opacity: 1;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        /* Smooth scroll optimization */
        @media (prefers-reduced-motion: no-preference) {
          .contact-section {
            will-change: transform;
          }
        }
      `}</style>
    </section>
  );
}
