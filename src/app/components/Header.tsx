import React, { useState, useEffect } from 'react';
import { X, Linkedin, Instagram, ArrowRight } from 'lucide-react';

interface NavItem {
  label: string;
  action: string | (() => void);
}

interface HeaderProps {
  onNavigate?: (page: string) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  const navItems: NavItem[] = [
    { label: 'Home', action: () => onNavigate?.('home') },
    { label: 'What We Do', action: '#services' },
    { label: 'Infrastructure', action: () => onNavigate?.('infrastructure') },
    { label: 'Sustainability', action: () => onNavigate?.('sustainability') },
    { label: 'About Us', action: '#company' },
    { label: 'Contact Us', action: () => onNavigate?.('contact') },
  ];

  const handleNavClick = (item: NavItem) => {
    if (typeof item.action === 'function') {
      item.action();
    } else {
      const element = document.querySelector(item.action);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    handleClose();
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 backdrop-blur-md z-50">
        <nav className="w-full px-4 md:px-6 lg:px-8 py-3 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo - Uses Teletactile font */}
            <button
              onClick={() => onNavigate?.('home')}
              className="text-2xl tracking-tight hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-logo)' }}
            >
              Emadeb
            </button>

            {/* Menu Button - Far Right - Matches Close Button */}
            <button
              className="flex items-center gap-2 text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hidden md:inline text-gray-600" style={{ fontFamily: 'var(--font-brand)' }}>Menu</span>
              <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                {/* Two dots menu icon */}
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Side Drawer Navigation - Foodiq Style - Rendered outside header for proper z-index */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div 
            className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] ${isClosing ? 'animate-fadeOut' : ''}`}
            onClick={handleClose}
          />
          
          {/* Drawer - Always slides from right */}
          <div className={`fixed top-0 right-0 bottom-0 w-full sm:w-[500px] md:w-[500px] lg:w-[45vw] xl:w-[50vw] max-w-full bg-white z-[9999] flex flex-col shadow-2xl overflow-hidden p-4 ${isClosing ? 'animate-slideOutRight' : 'animate-slideInRight'}`}>
            {/* Close Button - Top right */}
            <div className="absolute top-3 right-3 md:top-[22px] md:right-[calc(0.5rem+6px)] lg:right-[calc(2rem+6px)] z-10">
              <button
                onClick={() => handleClose()}
                className="flex items-center gap-2 text-xs tracking-wider uppercase hover:opacity-70 transition-opacity"
              >
                <span className="hidden md:inline text-gray-600" style={{ fontFamily: 'var(--font-brand)' }}>Close</span>
                <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center hover:bg-[#FF6B35] transition-colors">
                  <X className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
              </button>
            </div>
            
            {/* Navigation Links */}
            <div className="flex-1 px-5 md:px-8 pt-16 md:pt-20 pb-4 md:pb-6 overflow-y-auto">
              <nav className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-2xl md:text-3xl lg:text-4xl tracking-tight py-2.5 md:py-3 hover:text-[#E63946] transition-colors active:text-[#FF6B35]"
                    style={{ fontFamily: 'var(--font-brand)' }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Icons - Positioned above contact card with spacing */}
            <div className="px-5 md:px-8 pb-3 md:pb-4 flex justify-end gap-2.5">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors"
              >
                <Linkedin className="w-4.5 h-4.5 md:w-5 md:h-5 text-black" strokeWidth={1.5} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 active:bg-gray-300 transition-colors"
              >
                <Instagram className="w-4.5 h-4.5 md:w-5 md:h-5 text-black" strokeWidth={1.5} />
              </a>
            </div>

            {/* Contact Card - Button-like container with image background, padded from drawer edges */}
            <div className="px-5 md:px-8 pb-4 md:pb-6 lg:pb-8">
              <button 
                onClick={() => {
                  onNavigate?.('contact');
                  setMobileMenuOpen(false);
                }}
                className="relative w-full h-44 md:h-80 lg:h-[28rem] rounded-xl md:rounded-2xl overflow-hidden group hover:scale-[1.02] active:scale-[0.99] transition-transform shadow-lg"
              >
                {/* Background Image */}
                <img 
                  src="https://images.unsplash.com/photo-1605804097539-f7b052b4960d?crop=entropy&cs=tinysrgb&fit=max&fm=webp&q=80&w=1080"
                  alt="Contact"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Text Overlay */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                  <h3 className="text-white text-sm md:text-base tracking-tight" style={{ fontFamily: 'var(--font-brand)' }}>Contact us</h3>
                </div>
                
                {/* Arrow button */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-black" strokeWidth={2} />
                </div>
              </button>
            </div>
            
            {/* Bottom Indicator Line - Mobile only */}
            <div className="md:hidden pb-3 flex justify-center">
              <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </>
      )}
    </>
  );
}