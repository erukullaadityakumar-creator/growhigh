import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from './types';

const faqData: FaqItem[] = [
  {
    question: "What exactly do you build?",
    answer: "We build end-to-end client acquisition systems. This includes technical setup (domains, inboxes), data sourcing logic, copy/messaging scripts, and automation workflows that connect your outreach tools to your CRM."
  },
  {
    question: "How long does deployment take?",
    answer: "Most systems are live within 14 days. Our 'Growth Automation Infrastructure' can be ready in as little as 7 days."
  },
  {
    question: "What results can we expect?",
    answer: "While results vary by industry, our clients typically see a 3x increase in qualified demo bookings within the first 60 days of launch."
  },
  {
    question: "How much does it cost?",
    answer: "We offer flat-fee implementation packages and monthly optimization retainers. Book a strategy call for a custom quote based on your specific needs."
  },
  {
    question: "What do you need from our team?",
    answer: "We need about 1 hour of your time per week for the first 2 weeks to approve strategy and copy. After that, we handle the heavy lifting."
  },
  {
    question: "How do you handle data security?",
    answer: "We use enterprise-grade tools and best practices. We never sell your data, and all prospect lists are exclusive to your campaign."
  },
  {
    question: "Do you work internationally?",
    answer: "Yes, we have experience running campaigns in North America, Europe, and APAC regions."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6 font-display animate-blur-in">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`bg-brand-card rounded-2xl overflow-hidden transition-all duration-500 ${openIndex === index ? 'border border-brand-primary/50 shadow-lg shadow-brand-primary/10 scale-[1.02] animate-pulse-subtle' : 'border border-brand-border hover:border-brand-border/80 hover:shadow-md hover:animate-glow-border'}`}
              style={{ animation: `slideUp 0.6s ease-out forwards`, animationDelay: `${index * 50}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none hover:bg-brand-hover/50 transition-colors duration-300 group"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg transition-all duration-300 ${openIndex === index ? 'text-white' : 'text-text-body group-hover:text-white'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-primary shrink-0 ml-6 animate-rotate-slow" />
                ) : (
                  <Plus className="w-5 h-5 text-text-muted shrink-0 ml-6 group-hover:text-brand-primary transition-colors duration-300" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] overflow-hidden ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8 pt-0 text-text-body text-base leading-relaxed border-t border-brand-border/30 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
