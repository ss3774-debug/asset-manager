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
    <GlowCard className="p-6 h-full flex flex-col" style={{ animationDelay: `${index * 100}ms` }}>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
        "{testimonial.review}"
      </p>
      
      <div className="flex items-center gap-3 mt-auto">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${colorClass} flex items-center justify-center text-white font-bold text-sm shadow-inner`}>
          {initials}
        </div>
        <div>
          <div className="text-white font-medium text-sm">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </GlowCard>
  );
});

TestimonialCard.displayName = 'TestimonialCard';

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Decorative bg element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Loved by operations teams.
          </h2>
          <p className="text-lg text-gray-400">
            Don't just take our word for it. See how FlowAI is transforming businesses.
          </p>
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
