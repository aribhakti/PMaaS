import React from 'react';
import { Section } from '../components/Section';
import { RefreshCw } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="how-it-works" className="border-t border-border">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              {t.howItWorks.title}<br/> <span className="text-blue-600 dark:text-blue-500">{t.howItWorks.subtitle}</span>
            </h2>
            <p className="text-lg text-muted mb-10">
              {t.howItWorks.desc}
            </p>
          </FadeIn>
          
          <div className="space-y-10">
            <FadeIn delay={100} direction="left">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-blue-600/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:border-blue-600/50 transition-colors text-primary">1</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t.howItWorks.steps.one.title}</h3>
                  <p className="text-muted">{t.howItWorks.steps.one.desc}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={200} direction="left">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-purple-600/20 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:border-purple-600/50 transition-colors text-primary">2</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t.howItWorks.steps.two.title}</h3>
                  <p className="text-muted">{t.howItWorks.steps.two.desc}</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={300} direction="left">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-xl font-bold font-display group-hover:bg-green-600/20 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:border-green-600/50 transition-colors text-primary">3</div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{t.howItWorks.steps.three.title}</h3>
                  <p className="text-muted">{t.howItWorks.steps.three.desc}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="relative">
          <FadeIn direction="right" delay={200}>
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />
            <div className="relative bg-background border border-border rounded-xl p-8 shadow-2xl space-y-6 hover:scale-[1.02] transition-transform duration-500">
               {/* Mock Chat/Request Interface */}
               <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-surfaceHighlight flex-shrink-0" />
                  <div className="bg-surface rounded-lg rounded-tl-none p-4 text-sm text-muted w-full shadow-lg border border-border">
                     <p className="mb-2 font-medium text-primary">{t.howItWorks.mock.reqTitle}</p>
                     <p>{t.howItWorks.mock.reqBody}</p>
                  </div>
               </div>
               
               <div className="flex items-start gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-xs font-bold text-white">PM</div>
                  <div className="bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-600/20 rounded-lg rounded-tr-none p-4 text-sm text-muted w-full shadow-lg">
                     <p className="mb-2 font-medium text-blue-600 dark:text-blue-400">{t.howItWorks.mock.status}</p>
                     <p>{t.howItWorks.mock.resBody}</p>
                  </div>
               </div>

               <div className="flex items-center justify-center pt-4">
                  <div className="flex items-center space-x-2 text-xs text-muted uppercase tracking-widest font-medium">
                     <RefreshCw className="w-3 h-3 animate-spin" />
                     <span>{t.howItWorks.mock.sync}</span>
                  </div>
               </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
};