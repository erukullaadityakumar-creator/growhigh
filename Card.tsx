import React, { useState, MouseEvent } from 'react';
import { useScrollAnimation } from './useScrollAnimation';

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
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!hoverEffect) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible ? `${animationType === 'scale-up' ? 'scaleUp' : animationType === 'slide-right' ? 'slideRight' : animationType === 'fade-in' ? 'fadeIn' : 'slideUp'} 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards` : 'none',
        transform: hoverEffect ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1)` : undefined,
        transition: 'transform 0.3s ease-out'
      }}
      className={`
        bg-brand-card border border-brand-border rounded-xl p-8 relative overflow-hidden
        transition-all duration-500 ease-out
        ${hoverEffect ? 'card-hover-glow hover:bg-brand-hover hover:shadow-2xl' : ''}
        ${getAnimationStyles()}
        ${className}
      `}
    >
      {hoverEffect && (
        <>
          {/* Top gradient glow */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-brand-secondaryAccent/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          {/* Animated border */}
          <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-primary/20 via-brand-secondaryAccent/20 to-brand-primary/20 animate-gradient-shift" style={{ padding: '1px' }}></div>
          </div>

          {/* Spotlight effect */}
          <div
            className="absolute w-40 h-40 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
            style={{
              left: `${((tilt.y + 10) / 20) * 100}%`,
              top: `${((tilt.x + 10) / 20) * 100}%`,
              opacity: tilt.x !== 0 || tilt.y !== 0 ? 1 : 0
            }}
          />
        </>
      )}
      <div className="relative z-10" style={{ transform: `translateZ(50px)`, transformStyle: 'preserve-3d' }}>
        {children}
      </div>
    </div>
  );
};
