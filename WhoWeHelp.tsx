import React from 'react';
import { Card } from './Card';
import { Rocket, Zap, Smartphone, Package, ArrowRight } from 'lucide-react';
import { Persona } from './types';

const personas: Persona[] = [
  {
    title: "B2B SaaS Founders",
    problem: "Struggling to generate consistent demos while focusing on product.",
    solution: "We build outbound systems that generate qualified pipeline.",
    outcome: "3× demo increase",
    icon: Rocket
  },
  {
    title: "Automation Agencies",
    problem: "Want bigger clients but lack predictable lead flow.",
    solution: "We build scalable systems that bring high-value prospects.",
    outcome: "5× client value",
    icon: Zap
  },
  {
    title: "Tech Startups",
    problem: "Need traction and revenue proof for scaling and funding.",
    solution: "We build pipeline engines that convert interest into customers.",
    outcome: "2× funding attraction",
    icon: Smartphone
  },
  {
    title: "Digital Product Creators",
    problem: "Need predictable customer acquisition at scale.",
    solution: "We build systems that drive consistent demo conversations.",
    outcome: "40% engagement lift",
    icon: Package
  }
];

export const WhoWeHelp: React.FC = () => {
  return (
    <section id="personas" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-card border border-brand-border text-white text-xs font-bold uppercase tracking-wider mb-6 animate-glow-border">
            ⭐ Who We Help
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display animate-blur-in">Built for <span className="text-brand-primary">technical founders</span> and agencies</h2>
          <p className="text-text-body max-w-2xl mx-auto text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
            We partner with ambitious builders who need revenue systems, not just leads.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((persona, index) => (
            <Card key={index} delay={index * 100} animationType={index % 2 === 0 ? 'slide-right' : 'slide-up'} className="group relative flex flex-col items-start p-8 bg-brand-card/80 hover:bg-brand-card transition-all duration-300 hover:animate-pulse-subtle">
              <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mb-6 border border-brand-border group-hover:border-brand-primary/50 group-hover:bg-brand-primary/10 transition-colors group-hover:animate-rotate-slow">
                {React.createElement(persona.icon as any, { className: "w-6 h-6 text-brand-primary group-hover:animate-pulse-subtle" })}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 font-display animate-blur-in">{persona.title}</h3>
              
              <div className="space-y-3 mb-6 flex-grow">
                <p className="text-text-body text-base">
                  <span className="text-text-muted font-medium block text-sm mb-1">Problem:</span> 
                  {persona.problem}
                </p>
                <p className="text-text-body text-base">
                   <span className="text-brand-primary font-medium block text-sm mb-1">Solution:</span> 
                   {persona.solution}
                </p>
              </div>
              
              <div className="flex items-center text-sm font-semibold text-text-muted group-hover:text-brand-primary transition-colors cursor-pointer mt-2 pt-4 border-t border-brand-border/30 w-full">
                <span className="text-brand-secondaryAccent mr-2">{persona.outcome}</span>
                <span className="mx-2 text-brand-border">•</span>
                <span className="flex items-center group-hover:underline">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
