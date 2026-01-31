import React from 'react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-white">
      <div className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-24">
        {/* Main Footer Content - Two Column Layout on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
          {/* Left Column - Logo and Legal Links */}
          <div>
            {/* Large Logo */}
            <h2 
              className="text-5xl md:text-6xl lg:text-7xl mb-12 leading-tight"
              style={{ 
                fontFamily: 'var(--font-logo)',
                fontWeight: 400,
                letterSpacing: '0.02em'
              }}
            >
              EMADEB<br />ENERGY GROUP
            </h2>

            {/* Legal Links - Vertical Stack */}
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  HSE Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column - Main Navigation */}
          <div className="lg:flex lg:justify-end">
            <ul className="space-y-3 text-base md:text-lg text-neutral-500">
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('home')} 
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('infrastructure')} 
                  className="hover:text-white transition-colors"
                >
                  Infrastructure
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('sustainability')} 
                  className="hover:text-white transition-colors"
                >
                  Sustainability
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate?.('contact')} 
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Full Width at Bottom */}
        <div className="pt-8">
          <p className="text-xs text-neutral-600 uppercase tracking-wider">
            © 2026 EMADEB ENERGY GROUP. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}