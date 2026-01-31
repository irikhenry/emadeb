import React from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  suffix?: string;
}

export function MetricCard({ value, label, suffix }: MetricCardProps) {
  return (
    <div className="text-center py-8">
      <div className="mb-2">
        <span
          className="text-5xl md:text-6xl tracking-tight"
          style={{ fontFamily: 'FH_Lecturis, var(--font-brand)' }}
        >
          {value}
        </span>
        {suffix && (
          <span
            className="text-3xl md:text-4xl text-muted-foreground ml-1"
            style={{ fontFamily: 'FH_Lecturis, var(--font-brand)' }}
          >
            {suffix}
          </span>
        )}
      </div>
      <div className="text-sm md:text-base text-muted-foreground tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
