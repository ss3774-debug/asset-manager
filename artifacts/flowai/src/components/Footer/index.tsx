import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">FlowAI</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-xs">
              The AI-powered workflow automation platform for elite operations teams. Built with precision, scale, and security.
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors" aria-label={social}>
                  <div className="w-4 h-4 rounded-sm bg-current opacity-80" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Changelog', 'Roadmap'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Community', 'Status'].map(link => (
                <li key={link}><a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Subscribe</h4>
            <p className="text-xs text-gray-400 mb-3">Get the latest product updates.</p>
            <form className="flex" onSubmit={e => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 rounded-l-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 w-full min-w-[120px]"
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2 rounded-r-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2025 FlowAI, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Security', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
