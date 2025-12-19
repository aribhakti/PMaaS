import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const Brands: React.FC = () => {
  const { t } = useLanguage();
  
  const brands = [
    "Artajasa", "Telkom Sigma", "Jatis", "Kartuku", "SPOTS", 
    "GOTO", "Midtrans", "Accenture", "KarmaClub", "AYANA", 
    "DJKI", "SwissBell", "Angkas"
  ];

  // Duplicate the array to create a seamless loop
  const seamlessBrands = [...brands, ...brands];

  return (
    <div className="border-y border-border bg-transparent py-10 overflow-hidden relative">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <FadeIn>
          <p className="text-center text-sm font-medium text-muted mb-8 uppercase tracking-widest">{t.brands.trustedBy}</p>
          
          <div className="relative w-full overflow-hidden mask-linear-fade">
            {/* Gradient Masks for smooth fade edges - Updated for dynamic bg */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            <div className="flex w-[200%] animate-marquee">
              {seamlessBrands.map((brand, idx) => (
                <div key={idx} className="flex-1 flex justify-center items-center min-w-[200px]">
                  <span className="text-xl md:text-2xl font-bold font-display text-muted hover:text-primary cursor-default transition-colors whitespace-nowrap">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};