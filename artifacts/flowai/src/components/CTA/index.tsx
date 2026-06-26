import React from 'react';
import { Button } from '../UI/Button';

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="glass rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden border-white/20 shadow-2xl">
          {/* Animated background specific to the CTA card */}
          <div className="absolute inset-0 bg-aurora-gradient bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-violet-600/20 z-0" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Ready to automate everything with AI?
            </h2>
            <p className="text-lg text-blue-100/80 mb-8">
              Join thousands of operations teams who have eliminated manual work. Setup takes 5 minutes.
            </p>
            
            <Button variant="inverted" size="lg" className="w-full sm:w-auto px-10">
              Start Free Trial
            </Button>
            
            <p className="mt-4 text-xs font-medium text-white/50">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
