import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadCaptureModal({ isOpen, onClose }: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      onClose();
    }, 3000);
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
      onClose();
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      <div 
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#2a0e4a] to-black border-2 border-[#E9A820]/30 rounded-lg shadow-2xl overflow-hidden animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          disabled={isSubmitting}
          className="absolute top-4 right-4 z-50 w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E9A820]/20 active:bg-[#E9A820]/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          aria-label="Close modal"
        >
          <X className="w-6 h-6 sm:w-5 sm:h-5 text-white" />
        </button>

        <div className="p-6 sm:p-8 md:p-12">
          {!submitted ? (
            <div className="space-y-6 sm:space-y-8">
              <div className="text-center space-y-3">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-none">
                  LET'S <span className="text-[#E9A820]">START</span> YOUR PROJECT
                </h2>
                <div className="w-20 h-1 bg-[#E9A820] mx-auto"></div>
                <p className="text-base sm:text-lg text-gray-400 font-light">
                  Tell us about your vision
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="group">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 text-white text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#E9A820] transition-colors duration-300"
                    required
                  />
                </div>

                <div className="group">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 text-white text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#E9A820] transition-colors duration-300"
                    required
                  />
                </div>

                <div className="group">
                  <textarea
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-white/5 border-b-2 border-white/10 px-0 py-3 text-white text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#E9A820] transition-colors duration-300 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group relative w-full overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed border-2 border-[#E9A820]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3 text-white font-bold text-base tracking-wider px-8 py-4">
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
                  <div className="absolute inset-0 bg-[#E9A820] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center space-y-6 py-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#E9A820]/20">
                <CheckCircle2 className="w-10 h-10 text-[#E9A820]" strokeWidth={2} />
              </div>

              <div className="space-y-3">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  MESSAGE SENT
                </h3>
                <div className="w-20 h-1 bg-[#E9A820] mx-auto"></div>
                <p className="text-lg text-gray-400 font-light">
                  Thanks, {formData.name}. We'll be in touch soon.
                </p>
              </div>
            </div>
          )}
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
      `}</style>
    </div>
  );
}
