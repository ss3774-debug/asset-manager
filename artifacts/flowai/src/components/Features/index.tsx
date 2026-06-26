import React, { useState } from 'react';
import { FEATURES } from '../../data/features';
import { GlowCard } from '../UI/GlowCard';

const colorMap = { 
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', icon: 'text-blue-400', glow: 'blue' as const }, 
  violet: { bg: 'bg-violet-500/10', border: 'border-violet-500/30', icon: 'text-violet-400', glow: 'purple' as const }, 
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/30', icon: 'text-emerald-400', glow: 'emerald' as const } 
};

export function Features() {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);

  return (
    <section id="features" className="py-20 md:py-28 relative bg-[#050818] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Features</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need to <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>scale operations</span>.
          </h2>
          <p className="text-lg text-gray-400">
            FlowAI provides a complete toolset to build, monitor, and optimize your business workflows without writing a single line of code.
          </p>
        </div>

        {/* Desktop Grid (md+) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {FEATURES.map((feature, i) => {
            let spanClass = 'col-span-1';
            if (i === 0) spanClass = 'col-span-2 row-span-1';
            else if (i === 3) spanClass = 'col-span-2 row-span-1';
            
            const styles = colorMap[feature.color];

            return (
              <GlowCard 
                key={feature.id} 
                className={`${spanClass} p-8 flex flex-col cursor-pointer border-white/[0.08] bg-[#0a0f25]/40`}
                glowColor={styles.glow}
                active={activeFeatureId === feature.id}
                onMouseEnter={() => setActiveFeatureId(feature.id)}
              >
                <div className={`w-12 h-12 rounded-xl ${styles.bg} border ${styles.border} flex items-center justify-center mb-6 shadow-inner`}>
                  <svg className={`w-6 h-6 ${styles.icon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={feature.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[90%]">
                  {feature.description}
                </p>
              </GlowCard>
            );
          })}
        </div>

        {/* Mobile Accordion (< md) */}
        <div className="md:hidden flex flex-col gap-4">
          {FEATURES.map((feature) => {
            const styles = colorMap[feature.color];
            
            const activeMobileStyles = {
              blue: 'border-blue-500/40 bg-blue-500/5',
              violet: 'border-violet-500/40 bg-violet-500/5',
              emerald: 'border-emerald-500/40 bg-emerald-500/5'
            };

            return (
              <div 
                key={feature.id}
                className={`rounded-2xl overflow-hidden transition-all duration-300 border bg-[#0a0f25]/40 backdrop-blur-md ${
                  activeFeatureId === feature.id ? activeMobileStyles[feature.color] : 'border-white/[0.08]'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setActiveFeatureId(activeFeatureId === feature.id ? '' : feature.id)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-lg ${styles.bg} border ${styles.border} flex items-center justify-center`}>
                      <svg className={`w-5 h-5 ${styles.icon}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d={feature.iconPath} />
                      </svg>
                    </div>
                    <span className="font-semibold text-white">{feature.title}</span>
                  </div>
                  <svg 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFeatureId === feature.id ? 'rotate-180' : ''}`} 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    activeFeatureId === feature.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/[0.04] mt-2">
                    {feature.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
