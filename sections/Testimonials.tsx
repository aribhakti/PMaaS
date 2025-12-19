import React from 'react';
import { Section } from '../components/Section';
import { Quote } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className="bg-transparent">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.testimonials.title} <span className="text-blue-500">{t.testimonials.subtitle}</span>
          </h2>
        </FadeIn>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {t.testimonials.items.map((item, index) => (
          <FadeIn key={index} delay={index * 150} className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]">
            <div className="h-full p-8 rounded-2xl bg-surface/30 backdrop-blur-md border border-border hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative group">
              <Quote className="absolute top-6 left-6 w-10 h-10 text-muted/20 group-hover:text-blue-500/20 transition-colors" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-lg text-primary/90 italic mb-8 leading-relaxed">"{item.quote}"</p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm min-w-[2.5rem]">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-primary text-sm sm:text-base">{item.author}</div>
                    <div className="text-xs text-muted">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};