import React from 'react';
import { Button } from './ui/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronDown } from 'lucide-react';

const logos = [
  "HubSpot", "Salesforce", "Gmail", "Slack", "Zapier", "Clay", "Apollo", "Smartlead"
];

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-brand-dark">
      {/* Background Visual Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern animate-grid-pulse"></div>
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-1/4 left-[-100px] w-[500px] h-[500px] bg-brand-secondaryAccent/5 rounded-full blur-[100px] animate-pulse-slow"></div>

        {/* Radial Gradient overlay to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 font-display max-w-6xl mx-auto drop-shadow-lg">
            More demos, customers, and growth — <br/>
            <span className="font-cursive font-bold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-600 leading-tight py-2 inline-block">
              without building a full marketing team
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg text-text-body mb-10 leading-relaxed font-sans">
            GrowHigh builds and runs autonomous outbound, LinkedIn, and content systems that deliver qualified opportunities to SaaS founders and automation agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              variant="primary" 
              icon="arrow" 
              className="w-full sm:w-auto px-8 py-4 text-base shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-shadow"
              href="https://cal.com/aditya-kumar-erukulla-wsluof/15min"
              target="_blank"
            >
              Book Strategy Call
            </Button>
            <Button variant="secondary" icon="play" className="w-full sm:w-auto px-8 py-4 text-base">
              Watch 2-min Demo
            </Button>
          </div>

          <div className="w-full pt-8 border-t border-brand-border/30">
            <p className="text-sm text-text-muted font-medium mb-8 uppercase tracking-widest">Trusted by 50+ Tech Companies</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-100">
               {logos.map((logo, i) => (
                 <div key={i} className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-brand-primary hover:scale-105 transition-all duration-300 cursor-default select-none">
                   {logo}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50">
        <ChevronDown className="w-6 h-6 text-text-muted" />
      </div>
    </section>
  );
};