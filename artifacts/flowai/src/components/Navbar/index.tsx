import React, { useState } from 'react';
import { useScrolled } from '../../hooks/useScrolled';
import { Button } from '../UI/Button';

export function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/70 backdrop-blur-xl border-b border-white/10 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="FlowAI — scroll to top"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight gradient-text" aria-hidden="true">FlowAI</span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'Pricing', 'Testimonials'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <Button size="sm">Start Free Trial</Button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-nav"
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileMenuOpen}
        inert={!mobileMenuOpen}
      >
        <div className="flex flex-col p-4 gap-4">
          {['Features', 'Pricing', 'Testimonials'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-left text-base font-medium text-gray-300 hover:text-white py-2 px-4 rounded-lg hover:bg-white/5 transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="h-px w-full bg-white/10 my-2" />
          <div className="flex flex-col gap-3 px-4 pb-4">
            <button className="text-left text-base font-medium text-gray-300 hover:text-white py-2">
              Sign In
            </button>
            <Button className="w-full">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
