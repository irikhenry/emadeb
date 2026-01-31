import React from 'react';
import { LucideIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { Section } from '@/app/components/Section';

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  whatWeProvide: string[];
  whoItsFor: { segment: string; description: string }[];
  whyEmadeb: { point: string; description: string }[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  icon: Icon,
  whatWeProvide,
  whoItsFor,
  whyEmadeb,
  process,
  faqs,
}: ServicePageTemplateProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section background="grey">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-16 h-16 text-[#E63946]" strokeWidth={1.5} />
          </div>
          <h1 className="text-5xl md:text-6xl tracking-tight mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>
      </Section>

      {/* What We Provide */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-8">What we provide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {whatWeProvide.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#E63946] shrink-0 mt-1" strokeWidth={2} />
              <p className="text-lg leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Who It's For */}
      <Section background="grey">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Who it's for</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whoItsFor.map((item, index) => (
            <div key={index} className="bg-white p-8 border border-border">
              <h3 className="mb-3">{item.segment}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Emadeb */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Why Emadeb</h2>
        <div className="space-y-8 max-w-4xl">
          {whyEmadeb.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="shrink-0 w-12 h-12 bg-[#E63946] text-white flex items-center justify-center text-xl">
                {index + 1}
              </div>
              <div>
                <h3 className="mb-2">{item.point}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section background="grey">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Our process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <div key={index}>
              <div className="text-5xl tracking-tight text-[#E63946] mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="mb-3">{item.step}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQs */}
      <Section background="white">
        <h2 className="text-3xl md:text-4xl tracking-tight mb-12">Frequently asked questions</h2>
        <div className="max-w-3xl space-y-8">
          {faqs.map((item, index) => (
            <div key={index} className="border-b border-border pb-6 last:border-0">
              <h3 className="mb-3">{item.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="grey">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl tracking-tight mb-6">
            Ready to get started?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Contact our commercial team to discuss your energy infrastructure needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Request a Quote
            </Button>
            <Button variant="secondary" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
