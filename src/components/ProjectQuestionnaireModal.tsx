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

  const canProceed = (): boolean => {
    const value = formData[currentQuestion.id as keyof FormData];
    
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90">
      {/* Close backdrop */}
      <div className="absolute inset-0" onClick={handleClose}></div>

      <div className="relative w-full max-w-2xl bg-gradient-to-b from-[#1b032a] to-black border-2 border-[#E9A820] rounded-xl shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-[#E9A820]/20 active:bg-[#E9A820]/30 transition-colors disabled:opacity-50"
          aria-label="Close"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="p-8 sm:p-12">
          {!submitted ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400 font-medium">
                    Step {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-[#eaa509] font-medium">
                    {Math.round(progressPercentage)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#eaa509] to-[#f4c430] transition-all duration-300"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
                  {currentQuestion.question}
                </h3>

                {/* Input field */}
                {currentQuestion.type === 'text' && (
                  <input
                    type="text"
                    placeholder={currentQuestion.placeholder}
                    value={formData[currentQuestion.id as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white text-xl font-light placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509]"
                    autoComplete="off"
                  />
                )}

                {currentQuestion.type === 'select' && (
                  <select
                    value={formData[currentQuestion.id as keyof FormData]}
                    onChange={(e) => setFormData({ ...formData, [currentQuestion.id]: e.target.value })}
                    className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white text-xl font-light focus:outline-none focus:border-[#eaa509] cursor-pointer"
                  >
                    {currentQuestion.options?.map((option) => (
                      <option key={option} value={option} className="bg-black">
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
                    rows={4}
                    className="w-full bg-white/5 border-b-2 border-white/20 px-0 py-4 text-white text-lg font-light placeholder:text-gray-600 focus:outline-none focus:border-[#eaa509] resize-none"
                    autoComplete="off"
                  />
                )}

                {currentQuestion.type === 'slider' && (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-5xl font-black text-[#eaa509]">
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
                      className="w-full h-3 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>$0</span>
                      <span>$5,000</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 px-6 py-4 border-2 border-white/20 text-white hover:border-[#eaa509] hover:text-[#eaa509] transition-all font-medium"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Back
                  </button>
                )}
                
                <button
                  onClick={handleNext}
                  disabled={!canProceed() || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-[#eaa509] hover:bg-[#eaa509]/90 disabled:opacity-40 disabled:cursor-not-allowed text-black font-bold transition-all"
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
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#eaa509]/20 mb-6">
                <CheckCircle2 className="w-12 h-12 text-[#eaa509]" strokeWidth={2} />
              </div>
              
              <h3 className="text-4xl sm:text-5xl font-black text-white mb-4">
                LET'S DO THIS!
              </h3>
              
              <p className="text-xl text-gray-400 font-light">
                Thanks, {formData.name}! We'll be in touch within 24 hours.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eaa509;
          cursor: pointer;
          box-shadow: 0 0 20px rgba(234, 168, 32, 0.5);
        }

        .slider::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: #eaa509;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 20px rgba(234, 168, 32, 0.5);
        }

        .slider::-webkit-slider-runnable-track {
          background: linear-gradient(to right, #eaa509 0%, #eaa509 var(--progress), rgba(255,255,255,0.1) var(--progress), rgba(255,255,255,0.1) 100%);
          height: 12px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}

