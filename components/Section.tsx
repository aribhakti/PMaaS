import React from 'react';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export const Section: React.FC<SectionProps> = ({ id, children, className = '', containerClassName = '' }) => {
  return (
    <section id={id} className={`py-24 md:py-32 relative overflow-hidden ${className}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};