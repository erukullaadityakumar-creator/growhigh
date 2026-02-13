import React, { useState } from 'react';
import { Card } from './Card';
import { Send, FileText, Settings, Check, ChevronDown, ChevronUp, Clock } from 'lucide-react';

const services = [
  {
    title: "Autonomous Outbound Systems",
    description: "Done-for-you email and LinkedIn outreach engines.",
    points: [
      "3× outbound volume without hiring",
      "Consistent qualified demo bookings",
      "Full personalization infrastructure"
    ],
    deployment: "10–14 days",
    icon: Send
  },
  {
    title: "Content-Driven Lead Engines",
    description: "Inbound systems that convert attention into pipeline.",
    points: [
      "Authority-building content strategy",
      "Automated nurture flows",
      "Higher close rates through warm prospects"
    ],
    deployment: "14–21 days",
    icon: FileText
  },
  {
    title: "Growth Automation Infrastructure",
    description: "Internal and customer pipeline automations.",
    points: [
      "CRM automation and lead routing",
      "Smart follow-up sequences",
      "Real-time pipeline tracking"
    ],
    deployment: "7–14 days",
    icon: Settings
  }
];

const whatsIncluded = [
  "Domain & inbox setup (3–5 hours)",
  "List building & data sourcing (6–8 hours)",
  "Copy & messaging strategy (custom per case)",
  "CRM integration & automation",
  "Initial 4 weeks of optimization calls",
  "Real-time dashboard access",
  "Weekly performance reports"
];

export const Services: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-brand-card/20 border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-card border border-brand-border text-white text-xs font-bold uppercase tracking-wider mb-6 animate-glow-border">
             ✓ Core Systems
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display animate-blur-in">Scalable infrastructure</h2>
          <p className="text-text-body max-w-2xl mx-auto text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Choose the system that fits your growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} delay={index * 120} animationType={index === 0 ? 'flip-in' : index === 1 ? 'scale-up' : 'blur-in'} className="flex flex-col h-full bg-brand-card group hover:animate-pulse-subtle">
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mb-6 border border-brand-border group-hover:scale-110 group-hover:border-brand-primary/50 transition-all duration-300 group-hover:animate-rotate-slow">
                <service.icon className="w-6 h-6 text-brand-secondaryAccent group-hover:text-brand-primary group-hover:animate-pulse-subtle transition-colors" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 font-display">{service.title}</h3>
              <p className="text-text-body mb-8 min-h-[48px] text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {service.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-text-body text-sm">
                    <Check className="w-5 h-5 text-brand-primary mr-3 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-brand-border/50">
                <div className="flex items-center justify-between text-sm text-text-muted mb-6 font-mono">
                  <span>Deployment</span>
                  <div className="flex items-center text-text-secondary">
                    <Clock className="w-4 h-4 mr-2" />
                    {service.deployment}
                  </div>
                </div>

                <div className="border border-brand-border rounded-lg overflow-hidden bg-brand-dark mb-4 group-hover:border-brand-border/80 transition-colors">
                  <button 
                    onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    className="w-full flex items-center justify-between p-3 text-xs font-bold uppercase tracking-wider text-text-muted hover:text-white hover:bg-brand-hover transition-colors"
                  >
                    What's Included
                    {openAccordion === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openAccordion === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-4 pt-0 border-t border-brand-border/50">
                      <ul className="space-y-2 mt-3">
                        {whatsIncluded.map((item, i) => (
                          <li key={i} className="text-xs text-text-muted flex items-center">
                            <div className="w-1 h-1 rounded-full bg-brand-primary mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <button className="text-sm font-bold text-brand-primary hover:text-brand-primaryDark transition-colors">
                  Learn more →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
