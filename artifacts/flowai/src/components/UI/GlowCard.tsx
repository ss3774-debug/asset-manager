import React from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: 'blue' | 'purple' | 'emerald';
  active?: boolean;
}

export function GlowCard({ 
  children, 
  className = '', 
  glowColor = 'blue', 
  active = false,
  ...props 
}: GlowCardProps) {
  const glowStyles = {
    blue: 'hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.5)] hover:border-blue-500/30',
    purple: 'hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.5)] hover:border-violet-500/30',
    emerald: 'hover:shadow-[0_8px_40px_-12px_rgba(16,185,129,0.5)] hover:border-emerald-500/30'
  };

  const activeStyles = {
    blue: 'shadow-[0_8px_40px_-12px_rgba(59,130,246,0.4)] border-blue-500/40 bg-blue-500/5',
    purple: 'shadow-[0_8px_40px_-12px_rgba(139,92,246,0.4)] border-violet-500/40 bg-violet-500/5',
    emerald: 'shadow-[0_8px_40px_-12px_rgba(16,185,129,0.4)] border-emerald-500/40 bg-emerald-500/5'
  };

  return (
    <div 
      className={`glass-card relative overflow-hidden group ${glowStyles[glowColor]} ${active ? activeStyles[glowColor] : ''} ${className}`}
      {...props}
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${
        glowColor === 'blue' ? 'from-blue-500/10' : 
        glowColor === 'purple' ? 'from-violet-500/10' : 
        'from-emerald-500/10'
      } to-transparent`} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
