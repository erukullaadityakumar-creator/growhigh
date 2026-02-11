import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Who We Help', href: '#personas' },
    { name: 'Solutions', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'How It Works', href: '#process' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 h-16 ${scrolled ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border' : 'bg-brand-dark/80 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center cursor-pointer">
            <span className="text-xl font-bold text-white tracking-tight font-display">GrowHigh</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-text-body hover:text-brand-primary hover:scale-105 transition-all duration-300"
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              className="!py-2 !px-5 text-sm" 
              href="https://cal.com/aditya-kumar-erukulla-wsluof/15min" 
              target="_blank"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text-body hover:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-brand-dark border-b border-brand-border p-6 flex flex-col space-y-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-text-body hover:text-white hover:translate-x-2 py-2 block font-medium text-lg transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="primary" 
            className="w-full justify-center py-4 mt-4" 
            href="https://cal.com/aditya-kumar-erukulla-wsluof/15min" 
            target="_blank"
          >
            Book Strategy Call
          </Button>
        </div>
      )}
    </nav>
  );
};
