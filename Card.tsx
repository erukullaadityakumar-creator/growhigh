import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: boolean;
  animationType?: 'slide-up' | 'scale-up' | 'slide-right' | 'fade-in';
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  delay = 0, 
  hoverEffect = true,
  animationType = 'slide-up'
}) => {
  const { ref, isVisible } = useScrollAnimation();

  // Animation base styles
  const getAnimationStyles = () => {
    if (!isVisible) {
      switch (animationType) {
        case 'scale-up': return 'opacity-0 scale-95';
        case 'slide-right': return 'opacity-0 -translate-x-8';
        case 'fade-in': return 'opacity-0';
        case 'slide-up':
        default: return 'opacity-0 translate-y-8';
      }
    }
    
    switch (animationType) {
      case 'scale-up': return 'opacity-100 scale-100';
      case 'slide-right': return 'opacity-100 translate-x-0';
      case 'fade-in': return 'opacity-100';
      case 'slide-up':
      default: return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        bg-brand-card border border-brand-border rounded-xl p-8 relative overflow-hidden
        transition-all duration-300 ease-out
        ${hoverEffect ? 'card-hover-glow hover:bg-brand-hover' : ''}
        ${getAnimationStyles()}
        ${className}
      `}
    >
      {hoverEffect && (
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-secondaryAccent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};