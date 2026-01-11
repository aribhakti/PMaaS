import React from 'react';
import { Section } from '../components/Section';
import { Wallet, Zap, ShieldCheck, Users, TrendingUp, Sliders } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Benefits: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    { ...t.benefits.items.cost, icon: Wallet },
    { ...t.benefits.items.expert, icon: ShieldCheck },
    { ...t.benefits.items.speed, icon: Zap },
    { ...t.benefits.items.flex, icon: Sliders },
    { ...t.benefits.items.focus, icon: Users },
    { ...t.benefits.items.data, icon: TrendingUp }
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <Section className="bg-background/50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.benefits.title} <span className="text-muted">{t.benefits.subtitle}</span>
          </h2>
          <p className="text-lg text-muted">
            {t.benefits.desc}
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <FadeIn key={index} delay={index * 100}>
            <div 
              onMouseMove={handleMouseMove}
              className="group relative h-full flex flex-col items-start p-6 rounded-lg border border-border/50 hover:border-border bg-surface/20 hover:bg-surface/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg overflow-hidden"
            >
              {/* Spotlight Effect */}
              <div 
                className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(var(--primary), 0.05), transparent 40%)`
                }}
              />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded bg-surfaceHighlight group-hover:bg-blue-600/20 group-hover:text-blue-400 transition-colors flex items-center justify-center mb-4 text-muted group-hover:scale-110 duration-300">
                  <benefit.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors">{benefit.title}</h3>
                <p className="text-muted leading-relaxed text-sm group-hover:text-primary transition-colors">
                  {benefit.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};