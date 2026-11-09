import React from 'react';

interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: 'light' | 'dark' | 'emerald';
  className?: string;
}

export const SectionBadge: React.FC<SectionBadgeProps> = ({
  children,
  variant = 'light',
  className = '',
}) => {
  const variantStyles = {
    light: 'bg-white/80 text-neutral-800 border-neutral-200/80 shadow-sm backdrop-blur',
    dark: 'bg-neutral-900/90 text-white border-neutral-700/60 shadow-md backdrop-blur',
    emerald: 'bg-emerald-50 text-emerald-800 border-emerald-200 shadow-sm',
  };

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wide uppercase rounded-full border ${variantStyles[variant]} ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
      <span>{children}</span>
    </div>
  );
};
