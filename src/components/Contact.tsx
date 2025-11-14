import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
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
    }, 4000);
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-20"
    >
      {/* Sophisticated gradient continuation from About */}
      <div className="absolute inset-0">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b032a] via-[#0f0118] to-black"></div>

        {/* Subtle animated orbs */}
        <div className="absolute -top-1/3 left-1/4 w-[900px] h-[900px] rounded-full bg-[#1b032a] opacity-30 blur-[200px] animate-float-slow"></div>
        <div className="absolute top-1/2 -right-1/4 w-[700px] h-[700px] rounded-full bg-[#eaa509] opacity-25 blur-[180px] animate-float-slow" style={{ animationDelay: '3s' }}></div>

        {/* Premium vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,black_90%)]"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 z-10">
        {!submitted ? (
          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* Clean, bold header */}
            <div className="text-center space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                LET'S CONNECT
              </h2>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#eaa509] to-[#1b032a] mx-auto"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light tracking-wide px-4">
                Ready to create something extraordinary?
              </p>
            </div>

            {/* Minimal, elegant form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6 max-w-2xl mx-auto">
              {/* Name */}
              <div className="group">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border-b border-white/10 sm:border-b-2 px-0 py-3 sm:py-4 text-white text-base sm:text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-colors duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* Email */}
              <div className="group">
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border-b border-white/10 sm:border-b-2 px-0 py-3 sm:py-4 text-white text-base sm:text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-colors duration-300 backdrop-blur-sm"
                  required
                />
              </div>

              {/* Message */}
              <div className="group">
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white/5 border-b border-white/10 sm:border-b-2 px-0 py-3 sm:py-4 text-white text-base sm:text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-colors duration-300 resize-none backdrop-blur-sm"
                  required
                />
              </div>

              {/* Sophisticated button */}
              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="group relative w-full sm:w-auto sm:min-w-[280px] lg:min-w-[300px] mx-auto block overflow-hidden disabled:opacity-40 disabled:cursor-not-allowed border border-[#eaa509] sm:border-2"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 text-white font-bold text-sm sm:text-base md:text-lg tracking-wider px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5">
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      SENDING
                    </>
                  ) : (
                    <>
                      SEND MESSAGE
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-[#eaa509] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </form>
          </div>
        ) : (
          // Elegant success state
          <div className="text-center space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-[#eaa509]/20 backdrop-blur-sm">
              <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#eaa509]" strokeWidth={2} />
            </div>

            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white">
                MESSAGE SENT
              </h3>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#eaa509] mx-auto"></div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 font-light px-4">
                Thanks, {formData.name}. We'll be in touch soon.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        .animate-float-slow {
          animation: float-slow 40s ease-in-out infinite;
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
