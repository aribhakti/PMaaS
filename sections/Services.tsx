import React from 'react';
import { Section } from '../components/Section';
import { Target, Users, BarChart3, Layers, Zap, Compass } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    { ...t.services.items.strategy, icon: Compass, tags: ["Vision", "Roadmap", "OKRs"] },
    { ...t.services.items.execution, icon: Zap, tags: ["Agile", "Scrum", "Jira/Linear"] },
    { ...t.services.items.research, icon: Users, tags: ["Interviews", "Testing", "Data"] },
    { ...t.services.items.growth, icon: BarChart3, tags: ["Amplitude", "Mixpanel", "KPIs"] },
    { ...t.services.items.design, icon: Layers, tags: ["Wireframing", "Prototyping", "UX"] },
    { ...t.services.items.market, icon: Target, tags: ["Competitive Audit", "Positioning"] }
  ];

  return (
    <Section id="services" className="bg-surfaceHighlight/30">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            {t.services.title} <br/>
            <span className="text-muted">{t.services.subtitle}</span>
          </h2>
          <p className="text-lg text-muted">
            {t.services.desc}
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <FadeIn key={index} delay={index * 100} className="h-full">
            <div className="group h-full p-8 rounded-2xl bg-surface border border-border hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10">
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:text-white transition-all duration-300 text-muted group-hover:scale-110">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors">{service.title}</h3>
              <p className="text-muted mb-6 leading-relaxed group-hover:text-primary transition-colors">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-background text-muted border border-border group-hover:border-blue-500/20 group-hover:text-blue-500/80 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};