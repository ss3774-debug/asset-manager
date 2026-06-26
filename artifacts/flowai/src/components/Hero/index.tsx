import React from 'react';
import { Button } from '../UI/Button';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] pt-32 pb-20 overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-aurora pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[150px] mix-blend-screen animate-aurora pointer-events-none" style={{ animationDelay: '-5s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-aurora pointer-events-none" style={{ animationDelay: '-10s' }} />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col items-start gap-6 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse-glow" />
              <span className="text-sm font-medium text-blue-200">✦ AI-Powered Workflow Automation</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Automate Every Workflow. <br className="hidden lg:block" />
              <span className="gradient-text">Powered by AI.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
              Eliminate manual work entirely. Process documents, connect hundreds of tools, and generate insights in real time with the automation platform built for elite operations teams.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto text-base">
                Start Free Trial
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base gap-2 group">
                Watch Demo
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div className="relative w-full aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3] mt-10 lg:mt-0 perspective-1000">
            <div className="absolute inset-0 animate-float" style={{ transformOrigin: 'center' }}>
              <div className="w-full h-full glass rounded-[24px] shadow-2xl shadow-blue-500/10 border border-white/10 overflow-hidden flex flex-col bg-background/40 backdrop-blur-2xl">
                
                {/* Header */}
                <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-white/5">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-medium text-gray-400">FlowAI Dashboard</div>
                  <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/10 text-gray-300">v2.4</div>
                </div>

                <div className="flex-1 p-5 flex flex-col gap-5 overflow-hidden">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { l: 'Workflows Active', v: '247' },
                      { l: 'Docs Processed', v: '12,847' },
                      { l: 'Time Saved', v: '340hrs' }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/5">
                        <div className="text-[10px] text-gray-400 mb-1">{stat.l}</div>
                        <div className="text-lg font-semibold text-white">{stat.v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Workflow Builder Area */}
                  <div className="flex-1 relative rounded-xl border border-white/5 bg-black/20 p-4 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                    
                    <div className="relative z-10 flex items-center gap-6">
                      <div className="w-24 h-12 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-xs text-blue-200 font-medium shadow-[0_0_15px_rgba(59,130,246,0.2)]">Trigger</div>
                      <div className="w-8 h-[2px] bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-white/20 rotate-45" />
                      </div>
                      <div className="w-24 h-12 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-xs text-violet-200 font-medium shadow-[0_0_15px_rgba(139,92,246,0.2)]">AI Process</div>
                      <div className="w-8 h-[2px] bg-white/20 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-white/20 rotate-45" />
                      </div>
                      <div className="w-24 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs text-emerald-200 font-medium shadow-[0_0_15px_rgba(16,185,129,0.2)]">Analyze</div>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="h-28 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col gap-2 overflow-hidden relative">
                    <div className="text-xs font-medium text-gray-400 mb-1">Recent Activity</div>
                    {[
                      { t: 'Invoice parsed successfully', time: 'Just now' },
                      { t: 'CRM record updated', time: '2m ago' },
                      { t: 'Slack notification sent', time: '5m ago' }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                          <span className="text-gray-300">{item.t}</span>
                        </div>
                        <span className="text-gray-500">{item.time}</span>
                      </div>
                    ))}
                    <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#0a0a0f] to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Status Bar */}
                <div className="h-8 border-t border-white/5 bg-white/5 flex items-center px-4 gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                  <span className="text-[10px] font-medium text-emerald-400">All systems operational</span>
                </div>

              </div>
            </div>
            
            {/* Soft glow behind the dashboard */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 opacity-80 hover:opacity-100 transition-opacity animate-bounce">
        <span className="text-xs font-medium">Scroll to explore</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
