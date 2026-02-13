import React from 'react';
import { BarChart3, Clock, TrendingUp } from 'lucide-react';
import { Card } from './Card';

export const KeyMetrics: React.FC = () => {
  return (
    <section className="bg-brand-dark pt-16 pb-16 relative z-20 border-b border-brand-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card delay={0} animationType="flip-in" className="flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group hover:animate-pulse-subtle" hoverEffect={true}>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:animate-rotate-slow">
              <BarChart3 className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-pulse-subtle" />
            </div>
            <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors animate-blur-in">40+</h4>
            <p className="text-text-secondary font-semibold text-base mb-1">Qualified Meetings / Month</p>
            <p className="text-text-muted text-sm">On average within 60 days</p>
          </Card>

          <Card delay={100} animationType="scale-up" className="flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group hover:animate-pulse-subtle" hoverEffect={true}>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:animate-rotate-slow">
               <Clock className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-pulse-subtle" />
            </div>
            <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors animate-blur-in">30+</h4>
            <p className="text-text-secondary font-semibold text-base mb-1">Hours Saved / Week</p>
            <p className="text-text-muted text-sm">Per founder/manager</p>
          </Card>

          <Card delay={200} animationType="blur-in" className="flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group hover:animate-pulse-subtle" hoverEffect={true}>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 transition-all duration-300 group-hover:animate-rotate-slow">
              <TrendingUp className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-pulse-subtle" />
            </div>
            <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors animate-blur-in">3x</h4>
            <p className="text-text-secondary font-semibold text-base mb-1">Revenue Pipeline Growth</p>
            <p className="text-text-muted text-sm">Average increase in first 90 days</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
