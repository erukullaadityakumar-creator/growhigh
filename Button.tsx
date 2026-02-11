import React from 'react';
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
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform text-sm md:text-base tracking-wide cursor-pointer active:scale-95";
  
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-primaryDark shadow-[0_12px_32px_rgba(59,130,246,0.3)] hover:shadow-[0_20px_48px_rgba(59,130,246,0.5)] hover:-translate-y-1 active:translate-y-0",
    secondary: "bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white hover:shadow-[0_12px_32px_rgba(59,130,246,0.25)] hover:-translate-y-1 active:translate-y-0",
    ghost: "bg-transparent text-brand-primary underline hover:text-brand-primaryDark hover:-translate-y-0.5"
  };

  const IconComponent = icon === 'arrow' ? ArrowRight : icon === 'play' ? Play : null;
  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {IconComponent && (
        <IconComponent className={`ml-2 w-4 h-4 ${icon === 'play' ? 'fill-current' : ''}`} />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noopener noreferrer' : undefined} 
        className={combinedClassName} 
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={combinedClassName}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
