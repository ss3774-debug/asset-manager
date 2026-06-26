import React, { useState } from 'react';
import { FEATURES } from '../../data/features';
import { GlowCard } from '../UI/GlowCard';

export function Features() {
  const [activeFeatureId, setActiveFeatureId] = useState(FEATURES[0].id);

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need to <span className="gradient-text">scale operations</span>.
          </h2>
          <p className="text-lg text-gray-400">
            FlowAI provides a complete toolset to build, monitor, and optimize your business workflows without writing a single line of code.
          </p>
        </div>

        {/* Desktop Grid (md+) */}
        <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[280px]">
          {FEATURES.map((feature, i) => {
            // Assign sizes based on index
            let spanClass = 'col-span-1';
            let glowColor: 'blue' | 'purple' | 'emerald' = 'blue';
            
            if (i === 0) {
              spanClass = 'col-span-2 row-span-1';
              glowColor = 'blue';
            } else if (i === 3) {
              spanClass = 'col-span-2 row-span-1';
              glowColor = 'purple';
            } else if (i === 1 || i === 2) {
              spanClass = 'col-span-1 row-span-1';
              glowColor = i % 2 === 0 ? 'purple' : 'emerald';
            } else {
              glowColor = i % 3 === 0 ? 'blue' : i % 3 === 1 ? 'purple' : 'emerald';
            }

            return (
              <GlowCard 
                key={feature.id} 
                className={`${spanClass} p-8 flex flex-col cursor-pointer`}
                glowColor={glowColor}
                active={activeFeatureId === feature.id}
                onMouseEnter={() => setActiveFeatureId(feature.id)}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 shadow-inner`}>
                  {feature.icon}
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
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 border ${
                activeFeatureId === feature.id ? 'border-blue-500/40 bg-blue-500/5' : 'border-white/5'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left"
                onClick={() => setActiveFeatureId(activeFeatureId === feature.id ? '' : feature.id)}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl">
                    {feature.icon}
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
                <div className="p-5 pt-0 text-sm text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
