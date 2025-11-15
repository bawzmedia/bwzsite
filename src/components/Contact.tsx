import { useState } from 'react';
import { Send, CheckCircle2, ArrowRight, ArrowLeft, MessageSquare } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  industry: string;
  budget: string;
  service: string;
  notes: string;
}

export default function Contact() {
  const [isQuestionsOpen, setIsQuestionsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    industry: '',
    budget: '',
    service: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');

  const questions = [
    {
      id: 'name',
      question: "What's your name?",
      placeholder: 'John Doe',
      type: 'text' as const,
    },
    {
      id: 'email',
      question: "What's your email?",
      placeholder: 'john@company.com',
      type: 'email' as const,
    },
    {
      id: 'industry',
      question: "What's your industry?",
      type: 'select' as const,
      options: [
        'Select an industry',
        'Outdoor & Adventure',
        'Construction & Architecture',
        'Real Estate',
        'Technology & Software',
        'E-commerce & Retail',
        'Food & Beverage',
        'Healthcare',
        'Education',
        'Entertainment & Media',
        'Other'
      ]
    },
    {
      id: 'budget',
      question: "What's your budget range?",
      type: 'select' as const,
      options: [
        'Select a budget range',
        'Under $5,000',
        '$5,000 - $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000+',
        'Not sure yet'
      ]
    },
    {
      id: 'service',
      question: 'What service interests you most?',
      type: 'select' as const,
      options: [
        'Select a service',
        'Video Production',
        'Photography',
        'Social Media Content',
        'AI Automation',
        'AI Content Production',
        'Full Brand Package'
      ]
    },
    {
      id: 'notes',
      question: 'Any additional notes? (Optional)',
      placeholder: 'Tell us more about your project...',
      type: 'textarea' as const,
    }
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const canProceed = (): boolean => {
    const currentQuestion = questions[currentStep];
    const value = formData[currentQuestion.id as keyof FormData];

    if (currentQuestion.id === 'notes') return true; // Optional field
    if (currentQuestion.id === 'email') {
      return value.trim() !== '' && validateEmail(value);
    }
    if (currentQuestion.type === 'select') {
      return value !== '' && value !== questions[currentStep].options?.[0];
    }
    return value.trim() !== '';
  };

  const handleNext = () => {
    if (!canProceed()) return;
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      setEmailError('');
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert([
      {
        name: formData.name,
        email: formData.email,
        message: `Industry: ${formData.industry}\nBudget: ${formData.budget}\nService: ${formData.service}\nNotes: ${formData.notes || 'None'}`
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
      setIsQuestionsOpen(false);
      setCurrentStep(0);
      setFormData({
        name: '',
        email: '',
        industry: '',
        budget: '',
        service: '',
        notes: ''
      });
    }, 5000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (canProceed()) {
        handleNext();
      }
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  const currentQuestion = questions[currentStep];

  return (
    <section
      id="contact"
      className="relative py-20 sm:py-24 md:py-32 contact-section min-h-screen flex items-center justify-center"
    >
      {/* Optimized gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-black to-black"></div>

      {/* Subtle accent glow - hidden on touch devices for performance */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#eaa509]/5 blur-[120px] pointer-events-none hidden md:block"></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {!isQuestionsOpen && !submitted ? (
          // Initial state - Send Message button
          <div className="text-center space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              LET'S CONNECT
            </h2>
            <div className="w-20 h-1 bg-[#eaa509] mx-auto"></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
              Ready to create something extraordinary? Let's start with a few quick questions.
            </p>
            <button
              onClick={() => setIsQuestionsOpen(true)}
              className="group relative inline-flex items-center gap-3 bg-[#eaa509] hover:bg-[#eaa509]/90 transition-all duration-300 px-10 py-6 mt-8"
            >
              <MessageSquare className="w-6 h-6 text-black" />
              <span className="text-black font-bold text-lg tracking-wider">
                START CONVERSATION
              </span>
              <ArrowRight className="w-6 h-6 text-black group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ) : !submitted ? (
          // Interactive questionnaire
          <div className="max-w-3xl mx-auto">
            {/* Progress bar */}
            <div className="mb-12">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500 font-medium">
                  Question {currentStep + 1} of {questions.length}
                </span>
                <span className="text-sm text-gray-500 font-medium">
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#eaa509] to-[#f4c430] transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="space-y-8">
                {/* Question */}
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {currentQuestion.question}
                </h3>

                {/* Answer input */}
                <div className="space-y-3">
                  {currentQuestion.type === 'text' && (
                    <input
                      type="text"
                      placeholder={currentQuestion.placeholder}
                      value={formData[currentQuestion.id as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                      onKeyPress={handleKeyPress}
                      className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-6 text-white text-xl sm:text-2xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-300"
                      autoComplete="off"
                    />
                  )}

                  {currentQuestion.type === 'email' && (
                    <>
                      <input
                        type="email"
                        placeholder={currentQuestion.placeholder}
                        value={formData[currentQuestion.id as keyof FormData]}
                        onChange={(e) => {
                          setFormData({ ...formData, [currentQuestion.id]: e.target.value });
                          if (emailError) validateEmail(e.target.value);
                        }}
                        onBlur={(e) => validateEmail(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-6 text-white text-xl sm:text-2xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-300"
                        autoComplete="email"
                      />
                      {emailError && (
                        <p className="text-red-400 text-sm mt-2">{emailError}</p>
                      )}
                    </>
                  )}

                  {currentQuestion.type === 'select' && (
                    <select
                      value={formData[currentQuestion.id as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                      className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-6 text-white text-xl sm:text-2xl font-light focus:outline-none focus:border-[#eaa509] transition-all duration-300 cursor-pointer"
                    >
                      {currentQuestion.options?.map((option) => (
                        <option key={option} value={option} className="bg-black text-white">
                          {option}
                        </option>
                      ))}
                    </select>
                  )}

                  {currentQuestion.type === 'textarea' && (
                    <textarea
                      placeholder={currentQuestion.placeholder}
                      value={formData[currentQuestion.id as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                      rows={5}
                      className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-6 text-white text-lg font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] transition-all duration-300 resize-none"
                      autoComplete="off"
                    />
                  )}
                </div>

                {/* Navigation */}
                <div className="flex gap-4 pt-8">
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-4 border-2 border-white/20 text-white hover:border-[#eaa509] hover:text-[#eaa509] transition-all duration-300 font-medium"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back
                    </button>
                  )}
                  
                  <button
                    onClick={handleNext}
                    disabled={!canProceed() || isSubmitting}
                    className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#eaa509] hover:bg-[#eaa509]/90 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : currentStep === questions.length - 1 ? (
                      <>
                        Submit
                        <Send className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Next
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Helper text */}
                <p className="text-sm text-gray-600 text-center">
                  Press <kbd className="px-2 py-1 bg-white/10 rounded text-white">Enter</kbd> to continue
                </p>
            </div>
          </div>
        ) : (
          // Success state
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#eaa509]/20">
              <CheckCircle2 className="w-12 h-12 text-[#eaa509]" strokeWidth={2} />
            </div>
            <div className="space-y-4">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
                THANK YOU!
              </h3>
              <div className="w-20 h-1 bg-[#eaa509] mx-auto"></div>
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                Thanks for reaching out, {formData.name}.<br />We'll be in touch soon!
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .contact-section {
          scroll-margin-top: 100px;
        }

        /* Custom select arrow */
        select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23eaa509' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.5rem center;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }

        /* Mobile/iPad optimization */
        @supports (-webkit-touch-callout: none) {
          .contact-section {
            min-height: -webkit-fill-available;
          }
          
          input, textarea, select {
            font-size: 16px !important;
          }
        }

        /* Success animation */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
