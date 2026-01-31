import React from 'react';
import { ArrowRight } from 'lucide-react';

interface LinkCardProps {
  title: string;
  backgroundImage: string;
  onClick: () => void;
  flipped?: boolean;
}

export function LinkCard({ title, backgroundImage, onClick, flipped = false }: LinkCardProps) {
  return (
    <button
      onClick={onClick}
      className="relative group h-40 md:h-48 w-full overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.02]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transform: flipped ? 'scaleX(-1)' : 'none'
      }}
    >
      {/* Overlay - Darker to hide background text */}
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8" style={{ transform: flipped ? 'scaleX(-1)' : 'none' }}>
        <h3 className="text-white text-left text-2xl md:text-3xl tracking-tight font-semibold" style={{ fontFamily: 'var(--font-brand)' }}>
          {title}
        </h3>
        
        {/* Arrow Button */}
        <div className="flex justify-end">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black" strokeWidth={2} />
          </div>
        </div>
      </div>
    </button>
  );
}