import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { useScrollAnimation } from './useScrollAnimation';
import { ChevronDown, Sparkles } from 'lucide-react';

const logos = [
  "HubSpot", "Salesforce", "Gmail", "Slack", "Zapier", "Clay", "Apollo", "Smartlead"
];

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: 15 + Math.random() * 20,
          delay: Math.random() * 5,
          size: 2 + Math.random() * 3
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden animated-gradient">
      {/* Particle Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Background Visual Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern animate-grid-pulse"></div>

        {/* Floating Gradient Orbs with Morphing */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] animate-float animate-morphing"></div>
        <div className="absolute bottom-1/4 left-[-100px] w-[500px] h-[500px] bg-brand-secondaryAccent/5 rounded-full blur-[100px] animate-pulse-slow animate-morphing" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-primary/5 rounded-full blur-[100px] animate-float-slow animate-morphing" style={{ animationDelay: '4s' }}></div>

        {/* Radial Gradient overlay to fade edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-brand-dark"></div>
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex-grow flex flex-col justify-center">
        <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Sparkle Icon with Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative animate-bounce-slow">
              <Sparkles className="w-12 h-12 text-brand-primary animate-spin-3d" />
              <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full animate-pulse-slow"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 font-display max-w-6xl mx-auto drop-shadow-lg perspective-[1000px]">
            <span className="inline-block" style={{ animation: 'blurIn 0.8s ease-out forwards' }}>
              More demos, customers, and growth —
            </span>
            <br/>
            <span className="font-cursive font-bold text-5xl md:text-7xl lg:text-8xl text-gradient-animate leading-tight py-2 inline-block" style={{ animation: 'textReveal 1s ease-out forwards 0.3s', opacity: 0 }}>
              without building a full marketing team
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg text-text-body mb-10 leading-relaxed font-sans" style={{ animation: 'slideUp 0.8s ease-out forwards 0.6s', opacity: 0 }}>
            GrowHigh builds and runs autonomous outbound, LinkedIn, and content systems that deliver qualified opportunities to SaaS founders and automation agencies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16" style={{ animation: 'zoomIn 0.8s ease-out forwards 0.9s', opacity: 0 }}>
            <Button
              variant="primary"
              icon="arrow"
              className="w-full sm:w-auto px-8 py-4 text-base shadow-brand-primary/25 hover:shadow-brand-primary/40 transition-shadow magnetic-btn spotlight hover:animate-heartbeat"
              href="https://cal.com/aditya-kumar-erukulla-wsluof/15min"
              target="_blank"
            >
              Book Strategy Call
            </Button>
            <Button variant="secondary" icon="play" className="w-full sm:w-auto px-8 py-4 text-base magnetic-btn spotlight">
              Watch 2-min Demo
            </Button>
          </div>

          <div className="w-full pt-8 border-t border-brand-border/30" style={{ animation: 'slideUp 0.8s ease-out forwards 1.2s', opacity: 0 }}>
            <p className="text-sm text-text-muted font-medium mb-8 uppercase tracking-widest animate-pulse-slow">
              Trusted by 50+ Tech Companies
            </p>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-100">
               {logos.map((logo, i) => (
                 <div
                   key={i}
                   className="text-xl md:text-2xl font-display font-bold text-text-muted hover:text-brand-primary hover:scale-110 transition-all duration-300 cursor-default select-none spotlight"
                   style={{
                     animation: `rotateIn 0.6s ease-out forwards`,
                     animationDelay: `${1.5 + i * 0.1}s`,
                     opacity: 0
                   }}
                 >
                   {logo}
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity">
        <div className="relative">
          <ChevronDown className="w-6 h-6 text-text-muted animate-wiggle" />
          <div className="absolute inset-0 bg-brand-primary/20 blur-xl rounded-full animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};