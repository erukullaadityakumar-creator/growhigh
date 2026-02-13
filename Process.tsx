import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';
import { Compass, Hammer, BarChart } from 'lucide-react';

const steps = [
  {
    title: "Strategy Mapping",
    description: "15-minute call to understand your growth gaps, goals, and current systems.",
    timeline: "Week 1",
    icon: Compass
  },
  {
    title: "Build + Launch",
    description: "GrowHigh builds and integrates outbound and content systems customized to your company.",
    timeline: "Weeks 2–3",
    icon: Hammer
  },
  {
    title: "Optimize + Scale",
    description: "Continuous optimization improves reply rates, conversions, and pipeline quality.",
    timeline: "Ongoing",
    icon: BarChart
  }
];

export const Process: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="process" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Grid for visual consistency */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display animate-blur-in">From strategy to scale</h2>
          <p className="text-text-body text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>Our proven process ensures rapid deployment.</p>
        </div>

        <div ref={ref} className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-brand-border z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative z-10 transition-all duration-700 ease-out group ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8 transition-transform duration-300 group-hover:-translate-y-2 group-hover:animate-wave">
                    <div className="w-20 h-20 rounded-full bg-brand-card border border-brand-border flex items-center justify-center z-10 mx-auto shadow-lg group-hover:border-brand-primary/50 group-hover:shadow-brand-primary/20 transition-all group-hover:animate-glow-border">
                      <step.icon className="w-8 h-8 text-brand-secondaryAccent group-hover:scale-110 group-hover:animate-rotate-slow transition-transform" />
                    </div>
                    <div className="absolute top-0 right-0 w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs font-bold border-2 border-brand-dark">
                      {index + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 font-display">{step.title}</h3>
                  <p className="text-text-body text-sm leading-relaxed mb-4 max-w-xs mx-auto">{step.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-border/30 text-text-muted text-xs font-mono font-bold uppercase tracking-wider group-hover:bg-brand-primary/20 group-hover:text-brand-primary transition-colors">
                    {step.timeline}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
