import { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ProjectQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  businessName: string;
  contactInfo: string;
  industry: string;
  marketingProblem: string;
  budget: number;
}

export default function ProjectQuestionnaireModal({ isOpen, onClose }: ProjectQuestionnaireModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    businessName: '',
    contactInfo: '',
    industry: '',
    marketingProblem: '',
    budget: 2500
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const industries = [
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
    'Professional Services',
    'Other'
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
      id: 'marketingProblem',
      question: "What's your biggest marketing challenge right now?",
      placeholder: 'Tell us what keeps you up at night...',
      type: 'textarea' as const,
    },
    {
      id: 'budget',
      question: "What's your project budget?",
      type: 'slider' as const,
    }
  ];

  const currentQuestion = questions[currentStep];

  const isValidContact = (contact: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /[\d]{10,}/; // At least 10 digits
    return emailRegex.test(contact) || phoneRegex.test(contact.replace(/\D/g, ''));
  };

  const canProceed = (): boolean => {
    const value = formData[currentQuestion.id as keyof FormData];
    
    // Contact info needs email or phone validation
    if (currentQuestion.id === 'contactInfo') {
      return String(value).trim() !== '' && isValidContact(String(value));
    }
    
    if (currentQuestion.type === 'select') {
      return value !== '' && value !== industries[0];
    }
    if (currentQuestion.type === 'slider') {
      return true; // Budget always has a value
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
    if (e.key === 'Enter' && currentQuestion.type !== 'textarea') {
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
          marketing_problem: formData.marketingProblem,
          budget: formData.budget
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
          marketingProblem: '',
          budget: 2500
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
        marketingProblem: '',
        budget: 2500
      });
      setSubmitted(false);
      onClose();
    }
  };

  const progressPercentage = ((currentStep + 1) / questions.length) * 100;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95">
      {/* Close backdrop */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full h-screen max-w-5xl flex flex-col">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-8 right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#E9A820] hover:bg-[#E9A820]/80 transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-black" strokeWidth={3} />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 max-w-3xl w-full mx-auto">
          {!submitted ? (
            <>
              {/* Progress bar - compact */}
              <div className="w-full mb-12">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-500 font-medium">
                    {currentStep + 1}/{questions.length}
                  </span>
                  <span className="text-xs text-[#eaa509] font-medium">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#eaa509] transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Question - Large and centered */}
              <div className="w-full mb-8">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 text-center leading-none">
                  {currentQuestion.question}
                </h3>
                {currentQuestion.type !== 'slider' && (
                  <p className="text-center text-sm text-gray-600 mb-4">
                    Press <kbd className="px-2 py-1 bg-white/10 rounded text-white text-xs">Enter</kbd> to continue
                  </p>
                )}

                {/* Input field - Large and centered */}
                {currentQuestion.type === 'text' && (
                  <div className="text-center">
                    <input
                      type="text"
                      placeholder={currentQuestion.placeholder}
                      value={formData[currentQuestion.id as keyof FormData]}
                      onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                      onKeyPress={handleKeyPress}
                      className="w-full text-center bg-transparent border-b-4 border-[#eaa509]/30 px-0 py-6 text-white text-3xl sm:text-4xl md:text-5xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509]"
                      autoComplete="off"
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
                      // Auto-advance on select
                      setTimeout(() => {
                        if (canProceed()) {
                          handleNext();
                        }
                      }, 300);
                    }}
                    onKeyPress={handleKeyPress}
                    className="w-full text-center bg-transparent border-b-4 border-[#eaa509]/30 px-0 py-6 text-white text-2xl sm:text-3xl md:text-4xl font-light focus:outline-none focus:border-[#eaa509] cursor-pointer"
                  >
                    {currentQuestion.options?.map((option) => (
                      <option key={option} value={option} className="bg-black text-lg">
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
                    className="w-full text-center bg-transparent border-b-4 border-[#eaa509]/30 px-0 py-6 text-white text-xl sm:text-2xl font-light placeholder:text-gray-700 focus:outline-none focus:border-[#eaa509] resize-none"
                    autoComplete="off"
                  />
                )}

                {currentQuestion.type === 'slider' && (
                  <div className="space-y-8">
                    <div className="text-center">
                      <span className="text-7xl sm:text-8xl md:text-9xl font-black text-[#eaa509]">
                        ${formData.budget.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      step="500"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
                      className="w-full h-4 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-base text-gray-500 font-medium">
                      <span>$0</span>
                      <span>$5,000</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation - Fixed at bottom */}
              <div className="absolute bottom-8 left-8 right-8 flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-8 py-5 border-2 border-white/20 text-white hover:border-[#eaa509] hover:text-[#eaa509] transition-all font-bold text-lg"
                  >
                    <ArrowLeft className="w-6 h-6" />
                    Back
                  </button>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-3 px-10 py-5 bg-[#eaa509] hover:bg-[#eaa509]/90 disabled:opacity-40 disabled:cursor-not-allowed text-black font-black text-lg transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : currentStep === questions.length - 1 ? (
                    <>
                      Submit
                      <Send className="w-6 h-6" />
                    </>
                  ) : (
                    <>
                      Next
                      <ArrowRight className="w-6 h-6" />
                    </>
                  )}
                </button>
              </div>
            </>
          ) : (
            // Success state
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-[#eaa509]/20 mb-8">
                <CheckCircle2 className="w-16 h-16 text-[#eaa509]" strokeWidth={3} />
              </div>
              
              <h3 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-6 leading-none">
                LET'S DO THIS!
              </h3>
              
              <p className="text-2xl sm:text-3xl text-gray-400 font-light">
                Thanks, {formData.name}!<br />We'll be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #eaa509;
          cursor: pointer;
          box-shadow: 0 0 30px rgba(234, 168, 32, 0.8);
          border: 4px solid #000;
        }

        .slider::-moz-range-thumb {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #eaa509;
          cursor: pointer;
          border: 4px solid #000;
          box-shadow: 0 0 30px rgba(234, 168, 32, 0.8);
        }

        .slider::-webkit-slider-runnable-track {
          height: 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
        }

        .slider::-moz-range-track {
          height: 16px;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
        }
      `}</style>
    </div>
  );
}

