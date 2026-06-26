import React from 'react';
import { COMPANIES } from '../../data/companies';

export function TrustedBy() {
  return (
    <section className="py-16 border-y border-white/5 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
        <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest">
          Trusted by innovative teams worldwide
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        {/* Fading edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Track 1 */}
        <div className="animate-marquee flex items-center gap-16 py-4 px-8">
          {[...COMPANIES, ...COMPANIES].map((company, i) => (
            <div 
              key={i} 
              className="text-xl font-bold tracking-tight text-gray-500/60 whitespace-nowrap select-none mix-blend-screen"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
