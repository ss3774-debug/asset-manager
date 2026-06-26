import React from 'react';
import { Button } from '../UI/Button';

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-[#050818] border-b border-white/[0.04]">
      {/* Background Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563eb]/20 rounded-full blur-[120px] mix-blend-screen animate-aurora pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#7c3aed]/15 rounded-full blur-[150px] mix-blend-screen animate-aurora pointer-events-none" style={{ animationDelay: '-5s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Copy */}
          <div className="flex flex-col items-start gap-8 max-w-2xl">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-violet-400" />
              <span className="text-sm font-medium text-blue-200 ml-2">✦ New — v2.4 released with Predictive AI</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Automate Every Workflow.<br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Powered by AI.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 leading-relaxed max-w-xl">
              Eliminate manual work entirely. Process documents, connect hundreds of tools, and generate insights in real time with the automation platform built for elite operations teams.
            </p>
            
            <div className="flex flex-col w-full sm:w-auto gap-6 mt-2">
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Button size="lg" className="w-full sm:w-auto text-base px-8">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base px-8 gap-2 group">
                  Watch Demo
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-gray-400">
                <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>SOC 2 Certified</div>
                <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>99.99% Uptime</div>
                <div className="flex items-center gap-1.5"><svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/></svg>200+ Integrations</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/[0.08] w-full flex items-center justify-between text-sm">
              <div className="text-white font-semibold">10,000+ <span className="text-gray-500 font-normal">Teams</span></div>
              <div className="text-gray-600">·</div>
              <div className="text-white font-semibold">50M+ <span className="text-gray-500 font-normal">Automations/day</span></div>
              <div className="text-gray-600">·</div>
              <div className="text-white font-semibold">340hrs <span className="text-gray-500 font-normal">Saved/mo</span></div>
            </div>
          </div>

          {/* Right Column: Dashboard Mockup */}
          <div style={{ perspective: '1200px' }} className="relative w-full mt-10 lg:mt-0">
            <div style={{ transform: 'rotateY(-8deg) rotateX(4deg)', transformStyle: 'preserve-3d' }} className="w-full relative z-10">
              <div className="w-full animate-float">
                <div className="bg-[#0d1117]/90 backdrop-blur-2xl border border-white/[0.08] rounded-[20px] shadow-2xl overflow-hidden flex flex-col">
                  
                  {/* Header */}
                  <div className="h-12 border-b border-white/[0.08] flex items-center px-4 justify-between bg-black/20">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                      <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                      FlowAI Dashboard
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" />
                    </div>
                    <div className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/10 text-gray-300">v2.4</div>
                  </div>

                  <div className="p-5 flex flex-col gap-5">
                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { l: 'Workflows Active', v: '247', trend: '+12%↑' },
                        { l: 'Docs Processed', v: '12,847', trend: '+8%↑' },
                        { l: 'Time Saved', v: '340hrs' }
                      ].map((stat, i) => (
                        <div key={i} className="bg-white/[0.03] rounded-xl p-3 border border-white/[0.05]">
                          <div className="text-[10px] text-gray-400 mb-1">{stat.l}</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-lg font-semibold text-white">{stat.v}</span>
                            {stat.trend && <span className="text-[10px] font-medium text-emerald-400">{stat.trend}</span>}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Workflow Area */}
                    <div className="relative rounded-xl border border-white/[0.05] bg-black/40 p-6 flex flex-col gap-4 overflow-hidden">
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                      
                      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 py-4">
                        <div className="w-24 h-10 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-xs text-blue-200 font-medium">Trigger</div>
                        <svg className="w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        <div className="w-24 h-10 rounded-lg bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-xs text-violet-200 font-medium">AI Process</div>
                        <svg className="w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        <div className="w-24 h-10 rounded-lg bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-xs text-teal-200 font-medium">Analyze</div>
                        <svg className="w-6 h-6 text-white/20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
                        <div className="w-24 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xs text-emerald-200 font-medium">Send</div>
                      </div>

                      {/* Mini Bar Chart */}
                      <div className="relative z-10 w-full mt-2">
                        <svg viewBox="0 0 200 80" className="w-full h-16">
                          {[40,55,35,70,50,85,60].map((h, i) => (
                            <rect key={i} x={i * 28 + 4} y={80 - h} width="20" height={h} rx="3" fill={i===5 ? 'url(#barGrad)' : 'rgba(99,102,241,0.3)'} style={i===5 ? { filter: 'drop-shadow(0px 0px 4px rgba(96,165,250,0.5))' } : undefined} />
                          ))}
                          <defs>
                            <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#60a5fa"/>
                              <stop offset="100%" stopColor="#a78bfa"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="bg-white/[0.03] rounded-xl border border-white/[0.05] p-4 flex flex-col gap-3 relative">
                      <div className="text-xs font-medium text-gray-400 mb-1">Recent Activity</div>
                      {[
                        { t: 'Invoice parsed successfully', time: 'Just now' },
                        { t: 'CRM record updated', time: '2m ago' },
                        { t: 'Slack notification sent', time: '5m ago' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px]">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse-glow" style={{ animationDelay: `${i * 0.5}s` }} />
                            <span className="text-gray-300">{item.t}</span>
                          </div>
                          <span className="text-gray-500">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Status Bar */}
                  <div className="h-8 border-t border-white/[0.08] bg-black/20 flex items-center justify-between px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-medium text-gray-400">All systems operational</span>
                    </div>
                    <span className="text-[10px] text-gray-500">247 active · 12k runs today</span>
                  </div>

                </div>
              </div>
            </div>
            {/* Soft glow behind the dashboard */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}
