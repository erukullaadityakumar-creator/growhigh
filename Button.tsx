import React, { useState, useRef, MouseEvent } from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  onClick?: () => void;
  className?: string;
  icon?: 'arrow' | 'play';
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon,
  href,
  target
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const createRipple = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    createRipple(e);
    if (onClick) onClick();
  };

  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform text-sm md:text-base tracking-wide cursor-pointer active:scale-95 overflow-hidden group";

  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primaryDark shadow-[0_12px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_48px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:translate-y-0 hover:shadow-glow-pulse",
    secondary: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_12px_32px_rgba(59,130,246,0.25)] hover:-translate-y-1 active:translate-y-0",
    ghost: "bg-transparent text-brand-primary underline hover:text-brand-primaryDark hover:-translate-y-0.5"
  };

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'play' ? Play : null;
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {/* Ripple Container */}
      <span className="absolute inset-0 overflow-hidden rounded-lg">
        {ripples.map((ripple) => (
          <span
            key={ripple.id}
            className="absolute bg-white/30 rounded-full animate-ripple"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </span>

      {/* Shimmer Effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer"></span>

      {/* Content */}
      <span className="relative z-10 flex items-center">
        {children}
        {IconComponent && (
          <IconComponent className={`ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 ${icon === 'play' ? 'fill-current' : ''}`} />
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={combinedClassName}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      className={combinedClassName}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
