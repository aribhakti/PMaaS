import React from 'react';
import { Button } from '../components/Button';
import { CheckCircle2, PlayCircle, Sparkles } from 'lucide-react';
import { Section } from '../components/Section';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const titleLine1Words = t.hero.titleLine1.split(' ');
  const titleLine2Words = t.hero.titleLine2.split(' ');

  return (
    <Section className="pt-32 md:pt-48 pb-16 md:pb-24 overflow-visible">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none -z-10 mix-blend-screen opacity-50"></div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl relative z-10">
          <FadeIn delay={0}>
            <div className="inline-flex items-center space-x-2 bg-surface/80 border border-border rounded-full px-3 py-1 mb-6 backdrop-blur-sm shadow-sm group hover:border-blue-500/30 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-muted">{t.hero.badge}</span>
              <Sparkles className="w-3 h-3 text-yellow-400 animate-shimmer-pulse ml-1" />
            </div>
          </FadeIn>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary tracking-tight leading-[1.1] mb-6 flex flex-wrap gap-x-3 gap-y-1">
            <span className="flex flex-wrap gap-x-3">
              {titleLine1Words.map((word, i) => (
                <span 
                  key={`l1-${i}`} 
                  className="inline-block opacity-0 animate-pop-in" 
                  style={{ animationDelay: `${100 + i * 100}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="flex flex-wrap gap-x-3">
              {titleLine2Words.map((word, i) => (
                <span 
                  key={`l2-${i}`} 
                  className="inline-block opacity-0 animate-pop-in text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400"
                  style={{ animationDelay: `${100 + (titleLine1Words.length * 100) + (i * 100)}ms` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
          
          <FadeIn delay={800}>
            <p className="text-lg md:text-xl text-muted mb-8 leading-relaxed max-w-lg">
              {t.hero.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={900}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
              <Button size="lg" withArrow href="#pricing">
                {t.hero.viewPlans}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                href="#how-it-works"
                className="group border-border hover:border-blue-500/50 hover:bg-blue-500/5"
              >
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-blue-400 transition-colors" />
                {t.hero.howItWorks}
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={1000}>
            <div className="flex items-center space-x-6 text-sm text-muted">
              <div className="flex items-center group cursor-default">
                <CheckCircle2 className="w-4 h-4 mr-2 text-muted group-hover:text-green-400 transition-colors" />
                <span className="group-hover:text-primary transition-colors">{t.hero.noHiring}</span>
              </div>
              <div className="flex items-center group cursor-default">
                <CheckCircle2 className="w-4 h-4 mr-2 text-muted group-hover:text-green-400 transition-colors" />
                <span className="group-hover:text-primary transition-colors">{t.hero.start48h}</span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Visual Element */}
        <div className="relative hidden lg:block">
           <FadeIn delay={1100} direction="left">
             {/* Abstract grid representation of a product roadmap */}
             <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl rounded-full animate-pulse-slow" />
             <div className="relative bg-surface/40 backdrop-blur-xl border border-primary/10 rounded-2xl p-6 shadow-2xl transition-transform hover:scale-[1.02] duration-500 animate-float">
                <div className="flex items-center justify-between mb-8 border-b border-primary/5 pb-4">
                   <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                   </div>
                   <div className="text-xs font-mono text-blue-600 dark:text-blue-400/80">{t.hero.roadmap}</div>
                </div>
                
                <div className="space-y-4">
                   {[1, 2, 3].map((i) => {
                     // Dynamic animation configs
                     const width = i === 1 ? '75%' : (i === 2 ? '45%' : '20%');
                     const delay = `${i * 300 + 1000}ms`;
                     
                     return (
                      <div key={i} className="flex items-center space-x-4">
                         <div className="w-8 h-8 rounded bg-primary/5 border border-primary/5 flex items-center justify-center text-xs text-muted">P{i}</div>
                         <div className="flex-1 space-y-2">
                            <div className="h-2 bg-surfaceHighlight/50 rounded-full w-full overflow-hidden">
                               <div 
                                 className={`h-full rounded-full animate-progress-fill ${i === 1 ? 'bg-blue-500/80' : 'bg-surfaceHighlight'}`} 
                                 style={{ 
                                   '--target-width': width, 
                                   animationDelay: delay 
                                 } as React.CSSProperties}
                               ></div>
                            </div>
                            <div className="h-2 bg-surfaceHighlight/30 rounded w-1/3"></div>
                         </div>
                         <div className="w-16 h-6 rounded-full bg-primary/5 border border-primary/5"></div>
                      </div>
                     );
                   })}
                   
                   <div className="mt-8 p-4 bg-background/40 rounded-lg border border-green-500/20 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:bg-background/60 transition-colors opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                      <div className="absolute inset-0 bg-green-500/5 group-hover:bg-green-500/10 transition-colors"></div>
                      <div className="flex items-center space-x-3 relative z-10">
                         <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4 text-green-400" />
                         </div>
                         <div>
                            <div className="text-sm font-medium text-primary">{t.hero.sprintComplete}</div>
                            <div className="text-xs text-muted">{t.hero.velocity}</div>
                         </div>
                      </div>
                      <span className="text-xs font-mono text-green-400 relative z-10">+124 pts</span>
                   </div>
                </div>
             </div>
           </FadeIn>
        </div>
      </div>
    </Section>
  );
};