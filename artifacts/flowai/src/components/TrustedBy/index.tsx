import React from 'react';
import { COMPANIES } from '../../data/companies';

export function TrustedBy() {
  return (
    <section className="py-16 md:py-20 border-t border-white/[0.04] bg-[#050818] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="relative flex flex-col gap-6 overflow-hidden">
        {/* Fading edges */}
        <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-[#050818] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-[#050818] to-transparent z-10 pointer-events-none" />

        {/* Track 1: Left */}
        <div className="animate-marquee flex items-center gap-16 py-2 px-8">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].map((company, i) => (
            <div 
              key={`t1-${i}`} 
              className="text-2xl font-black tracking-tight text-white/[0.18] hover:text-white/40 transition-colors whitespace-nowrap select-none"
            >
              {company}
            </div>
          ))}
        </div>
        
        {/* Track 2: Right */}
        <div className="animate-marquee-reverse flex items-center gap-16 py-2 px-8">
          {[...COMPANIES, ...COMPANIES, ...COMPANIES].reverse().map((company, i) => (
            <div 
              key={`t2-${i}`} 
              className="text-2xl font-black tracking-tight text-white/[0.14] hover:text-white/35 transition-colors whitespace-nowrap select-none"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
