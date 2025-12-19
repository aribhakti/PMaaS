import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Faq: React.FC = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq" className="bg-transparent">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.faq.title}
          </h2>
        </FadeIn>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {t.faq.items.map((item, index) => (
          <FadeIn key={index} delay={index * 50}>
            <div className={`border rounded-lg bg-surface/30 backdrop-blur-sm overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-muted' : 'border-border'}`}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-surface/50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-primary' : 'text-muted'}`}>{item.q}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-muted" />
                )}
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-hidden={openIndex !== index}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-muted leading-relaxed border-t border-transparent">
                  {item.a}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};