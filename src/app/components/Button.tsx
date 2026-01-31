import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center transition-all duration-200 tracking-wide uppercase text-sm font-medium';
  
  const variants = {
    primary: 'bg-white text-black hover:bg-white/90',
    secondary: 'bg-transparent border border-white text-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-foreground hover:bg-secondary',
  };
  
  const sizes = {
    sm: 'px-6 py-2.5',
    md: 'px-8 py-3',
    lg: 'px-10 py-4',
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}