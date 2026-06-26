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

  const navLinks = ['Features', 'Pricing', 'Testimonials', 'Contact'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#050818]/80 backdrop-blur-2xl border-b border-white/[0.06] py-3 shadow-lg' 
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
            <span className="text-xl font-bold tracking-tight text-white" aria-hidden="true">
              Flow<span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>AI</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
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
            className="md:hidden text-gray-300 hover:text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded z-50 relative"
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

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-nav"
        className={`md:hidden fixed inset-0 z-40 bg-[#050818]/95 backdrop-blur-2xl transition-all duration-300 flex flex-col justify-center items-center ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
        {...(!mobileMenuOpen ? { inert: true } : {})}
      >
        <div className="flex flex-col items-center gap-8 w-full px-6">
          {navLinks.map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-3xl font-bold text-gray-300 hover:text-white transition-colors"
            >
              {item}
            </button>
          ))}
          <div className="w-full h-px bg-white/[0.08] my-4" />
          <button className="text-xl font-medium text-gray-300 hover:text-white mb-4">
            Sign In
          </button>
          <Button className="w-full max-w-xs" size="lg">Start Free Trial</Button>
        </div>
      </div>
    </header>
  );
}
