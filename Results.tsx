import React from 'react';
import { Card } from './Card';
import { CaseStudy } from './types';

const cases: CaseStudy[] = [
  {
    clientType: "AUTOMATION AGENCY",
    problem: "Inconsistent lead flow, struggling to close bigger deals",
    built: "Outbound + LinkedIn pipeline system",
    result: "40+ qualified meetings booked in 90 days",
    quote: "Scaled from 5 to 40+ demos/month without hiring.",
    author: "CEO, [Agency Name]"
  },
  {
    clientType: "SAAS STARTUP",
    problem: "Low demo volume despite product-market fit",
    built: "Email + nurture automation system",
    result: "3× demo bookings and 28% reply rate",
    quote: "Exactly what we needed to scale our outbound.",
    author: "Founder, [SaaS Name]"
  },
  {
    clientType: "TECH FOUNDER",
    problem: "No scalable customer acquisition",
    built: "Full outbound infrastructure",
    result: "Saved 30+ hours/week and doubled pipeline",
    quote: "The system runs itself. Best investment we made.",
    author: "Founder, [Tech Co]"
  }
];

export const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-brand-card/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-card border border-brand-border text-white text-xs font-bold uppercase tracking-wider mb-6">
               ⭐ Results
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">Real Results</h2>
            <p className="text-text-body text-lg max-w-lg">
              We don't just promise growth. We engineer it.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
             <span className="inline-block px-4 py-2 rounded-lg bg-brand-primary/10 border border-brand-primary text-brand-primary text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/40" style={{ animation: `pulseSlow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite` }}>
               AVG. ROI: 8.5x
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <Card key={index} delay={index * 150} animationType="slide-right" className="border-l-[4px] border-l-brand-primary !pl-6 bg-brand-card hover:bg-brand-card group">
              <div className="mb-6">
                <span className="text-xs font-bold tracking-widest text-text-muted uppercase font-mono">{item.clientType}</span>
              </div>
              
              <div className="space-y-5">
                <div>
                  <span className="text-xs text-text-muted uppercase font-bold tracking-wide">Problem</span>
                  <p className="text-text-body text-sm mt-1 leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase font-bold tracking-wide">Built</span>
                  <p className="text-text-body text-sm mt-1 leading-relaxed">{item.built}</p>
                </div>
                <div className="pt-4 border-t border-brand-border">
                  <span className="text-xs text-text-muted uppercase font-bold tracking-wide">Result</span>
                  <p className="text-white font-bold text-base mt-1 leading-relaxed group-hover:text-brand-primary transition-colors">{item.result}</p>
                </div>

                <div className="border-l-2 border-brand-primary/50 pl-3 py-1 my-2">
                  <p className="text-sm italic text-text-body mb-1">"{item.quote}"</p>
                  <p className="text-xs text-text-muted font-medium">— {item.author}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
