import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  background?: 'white' | 'grey';
  className?: string;
}

export function Section({ children, background = 'white', className = '' }: SectionProps) {
  const bgClass = background === 'grey' ? 'bg-neutral-50' : 'bg-white';
  
  return (
    <section className={`py-24 md:py-40 lg:py-48 ${bgClass} ${className}`}>
      <div className="w-full px-6 md:px-12 lg:px-16 xl:px-20">
        {children}
      </div>
    </section>
  );
}
