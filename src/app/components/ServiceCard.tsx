import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  backgroundImage?: string;
}

export function ServiceCard({ icon: Icon, title, description, href, backgroundImage }: ServiceCardProps) {
  const content = (
    <>
      <div className="mb-6">
        <Icon className="w-12 h-12 text-[#E63946]" strokeWidth={1.5} />
      </div>
      <h3 className="text-3xl md:text-4xl font-normal leading-tight w-full lg:w-1/2 mb-3 tracking-tight">{title}</h3>
      <p className="absolute bottom-0 left-0 p-6 md:p-8 text-foreground/70 text-lg md:text-xl leading-relaxed w-full lg:w-1/2">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block bg-white border border-border p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col justify-between hover:border-[#E63946] transition-all duration-300 group relative overflow-hidden"
      >
        <div className="z-10">{content}</div>
        {backgroundImage && (
          <div className="absolute right-0 top-0 bottom-0 w-2/5 md:w-1/2 opacity-15">
            <img 
              src={backgroundImage}
              alt=""
              className="w-full h-full object-contain object-right"
            />
          </div>
        )}
        <div className="mt-auto text-sm tracking-wide text-muted-foreground group-hover:text-[#E63946] transition-colors z-10">
          Learn more →
        </div>
      </a>
    );
  }

  return (
    <div className="bg-white border border-border p-10 md:p-12 rounded-2xl min-h-[500px] flex flex-col md:flex-row justify-between relative overflow-hidden">
      <div className="flex-1 z-10">
        {content}
      </div>
      {backgroundImage && (
        <div className="absolute right-0 top-0 bottom-0 w-2/5 md:w-1/2 opacity-15">
          <img 
            src={backgroundImage}
            alt=""
            className="w-full h-full object-contain object-right"
          />
        </div>
      )}
    </div>
  );
}