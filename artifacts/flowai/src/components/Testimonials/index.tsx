import React from 'react';
import { TESTIMONIALS } from '../../data/testimonials';
import { GlowCard } from '../UI/GlowCard';

const TestimonialCard = React.memo(({ testimonial, index }: { testimonial: typeof TESTIMONIALS[0]; index: number }) => {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-violet-500 to-purple-500',
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-amber-500',
    'from-pink-500 to-rose-500',
    'from-indigo-500 to-blue-500'
  ];
  
  const colorClass = colors[index % colors.length];
  
  return (
    <div style={{ animationDelay: index * 0.1 + 's' }} className="animate-slide-in-up opacity-0">
      <GlowCard className="p-8 h-full flex flex-col relative bg-[#0a0f25]/40 border-white/[0.08]">
        <div className="absolute top-2 right-4 text-8xl font-serif text-white/5 pointer-events-none select-none leading-none">"</div>
        <div className="flex gap-1 mb-6 relative z-10">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-200 text-[15px] leading-relaxed mb-8 flex-1 relative z-10">
          "{testimonial.review}"
        </p>
        
        <div className="flex items-center gap-3 mt-auto relative z-10">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
            {initials}
          </div>
          <div>
            <div className="text-white font-medium text-sm">{testimonial.name}</div>
            <div className="text-gray-400 text-xs">{testimonial.role}, {testimonial.company}</div>
          </div>
        </div>
      </GlowCard>
    </div>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative overflow-hidden bg-[#050818] border-t border-white/[0.04]">
      {/* Decorative bg element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/15 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold text-blue-400 uppercase tracking-widest mb-4">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Loved by operations teams.
          </h2>
          <p className="text-lg text-gray-400">
            Don't just take our word for it. See how FlowAI is transforming businesses.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-medium text-white">4.9/5 rating across 1,200+ reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
