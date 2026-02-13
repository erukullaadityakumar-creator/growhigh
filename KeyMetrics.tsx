import React from 'react';
import { BarChart3, Clock, TrendingUp } from 'lucide-react';
import { Card } from './Card';
import { useNumberCounter } from './useNumberCounter';

export const KeyMetrics: React.FC = () => {
  const meetings = useNumberCounter({ end: 40, duration: 2500, suffix: '+' });
  const hours = useNumberCounter({ end: 30, duration: 2500, suffix: '+' });

  return (
    <section className="bg-brand-dark pt-16 pb-16 relative z-20 border-b border-brand-border/50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondaryAccent/5 rounded-full blur-[100px] animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card delay={0} animationType="scale-up" className="relative flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group spotlight overflow-hidden" hoverEffect={true}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow">
              <BarChart3 className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-spin-3d" />
            </div>
            <div ref={meetings.ref}>
              <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors counter-animate">
                {meetings.displayValue}
              </h4>
            </div>
            <p className="text-text-secondary font-semibold text-base mb-1 group-hover:scale-105 transition-transform">Qualified Meetings / Month</p>
            <p className="text-text-muted text-sm">On average within 60 days</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>

          <Card delay={100} animationType="scale-up" className="relative flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group spotlight overflow-hidden" hoverEffect={true}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow" style={{ animationDelay: '0.2s' }}>
               <Clock className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-spin" />
            </div>
            <div ref={hours.ref}>
              <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors counter-animate">
                {hours.displayValue}
              </h4>
            </div>
            <p className="text-text-secondary font-semibold text-base mb-1 group-hover:scale-105 transition-transform">Hours Saved / Week</p>
            <p className="text-text-muted text-sm">Per founder/manager</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>

          <Card delay={200} animationType="scale-up" className="relative flex flex-col items-center text-center !py-10 bg-brand-card/50 border-brand-border hover:bg-brand-card hover:shadow-lg hover:border-brand-primary/50 transition-all duration-300 group spotlight overflow-hidden" hoverEffect={true}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center mb-4 border border-brand-border group-hover:bg-brand-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-bounce-slow" style={{ animationDelay: '0.4s' }}>
              <TrendingUp className="w-6 h-6 text-brand-secondaryAccent group-hover:text-white group-hover:animate-wiggle" />
            </div>
            <h4 className="text-4xl font-bold text-white mb-2 font-display group-hover:text-brand-primary transition-colors group-hover:animate-heartbeat">
              3x
            </h4>
            <p className="text-text-secondary font-semibold text-base mb-1 group-hover:scale-105 transition-transform">Revenue Pipeline Growth</p>
            <p className="text-text-muted text-sm">Average increase in first 90 days</p>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};
