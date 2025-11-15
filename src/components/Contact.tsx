import { useState } from 'react';
import { Send, CheckCircle2, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      className="relative py-20 sm:py-24 md:py-32 min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0a0f] to-black"></div>
      
      {/* Animated glowing orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#eaa509] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-[#f4c430] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-[#eaa509] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(233,168,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(233,168,32,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {!submitted ? (
          <div className="space-y-12">
            {/* Header */}
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#eaa509]/10 border border-[#eaa509]/20 rounded-full">
                <Sparkles className="w-4 h-4 text-[#eaa509]" />
                <span className="text-[#eaa509] text-sm font-semibold tracking-wider">GET IN TOUCH</span>
              </div>
              
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                LET'S<br/>
                <span className="text-[#eaa509]">CONNECT</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-400 font-light max-w-2xl mx-auto">
                Ready to create something extraordinary? Drop us a message and let's make it happen.
              </p>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit} className="relative group">
              {/* Card glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#eaa509] to-[#f4c430] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              {/* Card */}
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 sm:p-12 space-y-8">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-all duration-300"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#eaa509] to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-all duration-300"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#eaa509] to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-400 uppercase tracking-wider">
                    Your Message
                  </label>
                  <div className="relative">
                    <textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className="w-full bg-white/5 border-2 border-white/10 rounded-xl px-6 py-4 text-white text-lg placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] transition-all duration-300 resize-none"
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#eaa509] to-transparent"></div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="group relative w-full overflow-hidden rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#eaa509] to-[#f4c430]"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f4c430] to-[#eaa509] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="relative flex items-center justify-center gap-3 text-black font-bold text-lg px-8 py-5">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        SENDING...
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
          <div className="text-center space-y-8 py-20">
            <div className="relative inline-flex">
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full bg-[#eaa509] animate-ping opacity-20"></div>
              <div className="absolute inset-0 rounded-full bg-[#eaa509]/30 animate-pulse"></div>
              
              {/* Icon container */}
              <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#eaa509] to-[#f4c430] shadow-2xl shadow-[#eaa509]/50">
                <CheckCircle2 className="w-16 h-16 text-black" strokeWidth={3} />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-black text-white">
                MESSAGE<br/>
                <span className="text-[#eaa509]">SENT!</span>
              </h3>
              
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#eaa509] to-transparent mx-auto"></div>
              
              <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-lg mx-auto">
                Thanks for reaching out, <span className="text-white font-semibold">{formData.name}</span>!<br />
                We'll get back to you soon.
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        /* Blob animation for floating orbs */
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }

        .animate-blob {
          animation: blob 20s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* iOS optimization */
        @supports (-webkit-touch-callout: none) {
          input, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
