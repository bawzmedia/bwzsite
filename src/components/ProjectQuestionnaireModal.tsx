import { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ProjectQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string | null;
}

interface FormData {
  name: string;
  businessName: string;
  contactInfo: string;
  industry: string;
  tier: string;
  marketingProblem: string;
}

export default function ProjectQuestionnaireModal({ isOpen, onClose, selectedTier }: ProjectQuestionnaireModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    contactInfo: '',
    industry: '',
    tier: '',
    marketingProblem: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Pre-fill service if passed from services section
  useEffect(() => {
    if (selectedTier) {
      const serviceMap: { [key: string]: string } = {
        'caas': 'Content as a Service',
        'ai': 'AI Automation',
        'production': 'Creative Production (One-off)',
      };
      setFormData(prev => ({ ...prev, tier: serviceMap[selectedTier] || '' }));
    }
  }, [selectedTier]);

  const industries = [
    'Select an industry',
    'Outdoor & Adventure',
    'Construction & Architecture',
    'Real Estate',
    'Technology & Software',
    'E-commerce & Retail',
    'Food & Beverage',
    'Healthcare',
    'Education & Schools',
    'Religious Organizations',
    'Entertainment & Media',
    'Professional Services',
    'Tourism & Hospitality',
    'Other'
  ];

  const serviceOptions = [
    'Select a service',
    'Content as a Service',
    'AI Automation',
    'Creative Production (One-off)',
    'Multiple Services',
    'Not sure yet - let\'s talk'
  ];

  const questions = [
    {
      id: 'name',
      question: "What's your name?",
      placeholder: 'John Doe',
      type: 'text' as const,
    },
    {
      id: 'businessName',
      question: "What's your business name?",
      placeholder: 'Acme Company',
      type: 'text' as const,
    },
    {
      id: 'contactInfo',
      question: "Best way to reach you?",
      placeholder: 'Email or phone number',
      type: 'text' as const,
    },
    {
      id: 'industry',
      question: "What industry are you in?",
      type: 'select' as const,
      options: industries
    },
    {
      id: 'tier',
      question: "Which service interests you?",
      type: 'select' as const,
      options: serviceOptions
    },
    {
      id: 'marketingProblem',
      question: "What's your biggest content challenge?",
      placeholder: 'Tell us what keeps you up at night...',
      type: 'textarea' as const,
    },
  ];

  const currentQuestion = questions[currentStep];

  const isValidContact = (contact: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /[\d]{10,}/;
    return emailRegex.test(contact) || phoneRegex.test(contact.replace(/\D/g, ''));
  };

  const canProceed = (): boolean => {
    const value = formData[currentQuestion.id as keyof FormData];
    
    if (currentQuestion.id === 'contactInfo') {
      return String(value).trim() !== '' && isValidContact(String(value));
    }
    
    if (currentQuestion.type === 'select') {
      const defaultOption = currentQuestion.options?.[0];
      return value !== '' && value !== defaultOption;
    }
    
    return String(value).trim() !== '';
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
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (canProceed()) {
        handleNext();
      }
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting form...', formData);
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.from('project_leads').insert([
        {
          name: formData.name,
          business_name: formData.businessName,
          contact_info: formData.contactInfo,
          industry: formData.industry,
          tier: formData.tier,
          marketing_problem: formData.marketingProblem,
        },
      ]);

      if (error) {
        console.error('Supabase error:', error);
        alert('Submission failed. Please try again or contact us directly.');
        setIsSubmitting(false);
        return;
      }

      console.log('Submission successful!', data);
      setSubmitted(true);
      setIsSubmitting(false);

      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(0);
        setFormData({
          name: '',
          businessName: '',
          contactInfo: '',
          industry: '',
          tier: '',
          marketingProblem: '',
        });
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Unexpected error:', err);
      alert('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      setCurrentStep(0);
      setFormData({
        name: '',
        businessName: '',
        contactInfo: '',
        industry: '',
        tier: '',
        marketingProblem: '',
      });
      setSubmitted(false);
      onClose();
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95">
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full max-w-4xl md:h-[80vh] bg-gradient-to-b from-[#1b032a] to-black border-2 border-[#E9A820] flex flex-col">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#E9A820] hover:bg-[#E9A820]/80 transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" strokeWidth={3} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 md:px-12 max-w-3xl w-full mx-auto">
          {!submitted ? (
            <>
              {/* Progress bar */}
              <div className="w-full mb-8 sm:mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">
                    {currentStep + 1}/{questions.length}
                  </span>
                  <span className="text-xs text-[#E9A820] font-medium">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-[#E9A820] transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="w-full mb-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 text-center leading-tight">
                  {currentQuestion.question}
                </h3>
                {currentQuestion.type !== 'select' && (
                  <p className="text-center text-xs text-gray-600 mb-4 hidden md:block">
                    Press <kbd className="px-2 py-1 bg-white/10 text-white text-xs">Enter</kbd> to continue
                  </p>
                )}

                {/* Input fields */}
                {currentQuestion.type === 'text' && (
                  <div className="text-center">
                    <input
                      type="text"
                      placeholder={currentQuestion.placeholder}
                      value={formData[currentQuestion.id as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                      onKeyPress={handleKeyPress}
                      className="w-full text-center bg-transparent border-b-4 border-[#E9A820]/30 px-0 py-4 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#E9A820]"
                      autoComplete="off"
                      autoFocus
                    />
                    {currentQuestion.id === 'contactInfo' && (
                      <p className="text-sm text-gray-500 mt-4">
                        {formData.contactInfo && !isValidContact(formData.contactInfo) 
                          ? '⚠️ Please enter a valid email or phone number'
                          : 'Email or phone number'}
                      </p>
                    )}
                  </div>
                )}

                {currentQuestion.type === 'select' && (
                  <select
                    value={formData[currentQuestion.id as keyof FormData]}
                    onChange={(e) => {
                      setFormData({ ...formData, [currentQuestion.id]: e.target.value });
                      setTimeout(() => {
                        if (e.target.value && e.target.value !== currentQuestion.options?.[0]) {
                          handleNext();
                        }
                      }, 300);
                    }}
                    onKeyPress={handleKeyPress}
                    className="w-full text-center bg-transparent border-b-4 border-[#E9A820]/30 px-0 py-4 text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light focus:outline-none focus:border-[#E9A820] cursor-pointer"
                  >
                    {currentQuestion.options?.map((option) => (
                      <option key={option} value={option} className="bg-black text-base">
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
                    rows={3}
                    className="w-full text-center bg-transparent border-b-4 border-[#E9A820]/30 px-0 py-4 text-white text-base sm:text-lg md:text-xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#E9A820] resize-none"
                    autoComplete="off"
                  />
                )}
              </div>

              {/* Navigation */}
              <div className="w-full mt-8 flex gap-3">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-4 sm:px-5 py-4 border-2 border-white/20 text-white hover:border-[#E9A820] hover:text-[#E9A820] transition-all font-bold text-sm sm:text-base"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    <span className="hidden sm:inline">Back</span>
                  </button>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#E9A820] hover:bg-[#E9A820]/90 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black text-sm sm:text-base md:text-lg transition-all"
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
            </>
          ) : (
            // Success state
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 bg-[#E9A820]/20 mb-6 sm:mb-8">
                <CheckCircle2 className="w-12 h-12 sm:w-16 sm:h-16 text-[#E9A820]" strokeWidth={3} />
              </div>
              
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 leading-none">
                LET'S DO THIS!
              </h3>
              
              <p className="text-xl sm:text-2xl text-gray-400 font-light">
                Thanks, {formData.name}!<br />We'll be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
