import React from 'react';
import { Section } from '../components/Section';
import { Lightbulb, Rocket, Layout, BarChart } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const WhatIsPmaas: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Section id="what-is-pmaas" className="bg-surface/30 border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              {t.whatIs.title} <span className="text-blue-500">PMaaS?</span>
            </h2>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                <strong className="text-primary">Product Management as a Service (PMaaS)</strong> {t.whatIs.desc1.replace('Product Management as a Service (PMaaS)', '')}
              </p>
              <p>
                {t.whatIs.desc2}
              </p>
              <p className="text-sm pt-4 text-muted border-t border-border">
                {t.whatIs.idealFor}
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <FadeIn delay={100} className="h-full">
            <div className="group h-full p-6 bg-background border border-border rounded-xl hover:border-yellow-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(234,179,8,0.1)] hover:-translate-y-1 hover:scale-[1.02]">
              <Lightbulb className="w-8 h-8 text-yellow-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] transition-all" />
              <h3 className="text-primary font-bold mb-2 group-hover:text-yellow-600 dark:group-hover:text-yellow-100">{t.whatIs.cards.strategy.title}</h3>
              <p className="text-sm text-muted">{t.whatIs.cards.strategy.desc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={200} className="h-full">
            <div className="group h-full p-6 bg-background border border-border rounded-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.1)] hover:-translate-y-1 hover:scale-[1.02]">
              <Layout className="w-8 h-8 text-purple-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] transition-all" />
              <h3 className="text-primary font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-100">{t.whatIs.cards.development.title}</h3>
              <p className="text-sm text-muted">{t.whatIs.cards.development.desc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={300} className="h-full">
            <div className="group h-full p-6 bg-background border border-border rounded-xl hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(239,68,68,0.1)] hover:-translate-y-1 hover:scale-[1.02]">
              <Rocket className="w-8 h-8 text-red-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.5)] transition-all" />
              <h3 className="text-primary font-bold mb-2 group-hover:text-red-600 dark:group-hover:text-red-100">{t.whatIs.cards.launch.title}</h3>
              <p className="text-sm text-muted">{t.whatIs.cards.launch.desc}</p>
            </div>
          </FadeIn>
          <FadeIn delay={400} className="h-full">
            <div className="group h-full p-6 bg-background border border-border rounded-xl hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_-10px_rgba(34,197,94,0.1)] hover:-translate-y-1 hover:scale-[1.02]">
              <BarChart className="w-8 h-8 text-green-500 mb-4 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] transition-all" />
              <h3 className="text-primary font-bold mb-2 group-hover:text-green-600 dark:group-hover:text-green-100">{t.whatIs.cards.lifecycle.title}</h3>
              <p className="text-sm text-muted">{t.whatIs.cards.lifecycle.desc}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};