import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-card/20 border-y border-brand-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">The difference between a vendor and a partner</h2>
          <p className="text-text-body text-lg">See how we stack up against generic AI agencies.</p>
        </div>

        <div className="overflow-hidden rounded-xl border border-brand-border bg-brand-card">
          <div className="grid grid-cols-12 bg-brand-border/30 text-xs font-bold uppercase tracking-wider text-text-muted py-5 px-6 border-b border-brand-border">
            <div className="col-span-4 md:col-span-5">Feature</div>
            <div className="col-span-4 md:col-span-3 text-center">Generic AI Agencies</div>
            <div className="col-span-4 text-center text-brand-primary">GrowHigh</div>
          </div>

          {[
            { feature: "System Architecture", bad: "Templates from library", good: "Custom-built systems" },
            { feature: "Deployment Speed", bad: "30–60 days", good: "10–14 days" },
            { feature: "Support Level", bad: "Junior account manager", good: "Founder-level collaboration" },
            { feature: "Ongoing Optimization", bad: "Setup and ghost", good: "Weekly optimization calls" },
            { feature: "Reporting & Transparency", bad: "Black box metrics", good: "Real dashboard + ROI" },
          ].map((row, i) => (
            <div key={i} className={`grid grid-cols-12 items-center py-5 px-6 ${i !== 4 ? 'border-b border-brand-border/50' : ''} hover:bg-brand-hover hover:border-brand-primary/30 transition-all duration-300 group`} style={{ animation: `slideRight 0.6s ease-out forwards`, animationDelay: `${i * 60}ms` }}>
              <div className="col-span-4 md:col-span-5 text-sm font-bold text-white pr-4">{row.feature}</div>
              
              <div className="col-span-4 md:col-span-3 flex flex-col items-center justify-center text-center">
                <X className="w-5 h-5 text-red-500/50 mb-1" />
                <span className="text-xs text-text-muted hidden md:block">{row.bad}</span>
              </div>
              
              <div className="col-span-4 flex flex-col items-center justify-center text-center">
                <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center mb-1">
                   <Check className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="text-xs text-white font-medium hidden md:block">{row.good}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
