import React from 'react';
import { Button } from '../UI/Button';

export function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#050818] border-t border-white/[0.04]">
      {/* Top and Bottom Glow Bleed */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-blue-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-32 bg-violet-500/20 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="glass rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden border-white/[0.08] shadow-2xl">
          {/* Animated aurora gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 via-indigo-900/60 to-violet-900/60 animate-aurora mix-blend-overlay z-0" />
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
          
          {/* Decorative SVG Orbit Ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20 pointer-events-none animate-spin-slow" style={{ animationDuration: '40s' }}>
            <svg viewBox="0 0 100 100" className="w-full h-full text-white/50">
              <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="39" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 6" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to automate everything with AI?
            </h2>
            <p className="text-lg text-blue-100/80 mb-10">
              Join thousands of operations teams who have eliminated manual work. Setup takes 5 minutes.
            </p>
            
            <Button variant="inverted" size="lg" className="w-full sm:w-auto px-10 mb-4">
              Start Free Trial
            </Button>
            
            <a href="#" className="text-sm font-medium text-blue-300 hover:text-white transition-colors mb-10">
              or schedule a demo →
            </a>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-white/60">
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>No credit card</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Setup in 5 min</div>
              <div className="flex items-center gap-2"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>Cancel anytime</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
