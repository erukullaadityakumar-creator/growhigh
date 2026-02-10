import React from 'react';
import { Card } from './ui/Card';
import { Layers, Zap } from 'lucide-react';

const capabilities = [
  "Autonomous outbound systems",
  "Inbound lead automation",
  "CRM workflow automation",
  "Smart follow-up sequences",
  "Real-time pipeline analytics",
  "Lead scoring & qualification",
  "Content distribution automation"
];

const integrations = [
  "HubSpot", "Salesforce", "Gmail", "Outlook",
  "Slack", "Notion", "Zapier", "Smartlead"
];

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Capabilities */}
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-card border border-brand-border text-brand-secondaryAccent text-xs font-bold tracking-wide mb-8">
              <Layers className="w-3 h-3" />
              <span>FULL STACK GROWTH</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
              Complete Revenue Engines
            </h2>
            <p className="text-text-body mb-8 text-lg leading-relaxed">
              We don't just send emails. We build complete revenue infrastructure that integrates deeply with your existing stack.
            </p>
            
            <ul className="space-y-4">
              {capabilities.map((cap, i) => (
                <li key={i} className="flex items-center space-x-4 text-text-body group">
                  <div className="w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    <Zap className="w-3 h-3 text-brand-primary group-hover:text-white" />
                  </div>
                  <span className="font-medium text-sm group-hover:text-white transition-colors">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Integrations Grid */}
          <div className="relative">
             {/* Decorative glow */}
            <div className="absolute inset-0 bg-brand-primary/5 blur-[80px] rounded-full"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 relative z-10">
              {integrations.map((tool, i) => (
                <Card 
                  key={i} 
                  className="!p-0 flex items-center justify-center h-24 bg-brand-card border-brand-border group" 
                  hoverEffect={true} 
                  delay={i * 50}
                  animationType="scale-up"
                >
                   <span className="font-bold text-text-muted group-hover:text-brand-primary transition-colors font-display text-sm transform group-hover:scale-110 duration-200 block">{tool}</span>
                </Card>
              ))}
            </div>
            <div className="text-center mt-6">
                <p className="text-xs text-text-muted uppercase tracking-widest font-mono">And 50+ other tools via Zapier</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};