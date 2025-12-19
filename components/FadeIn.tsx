import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  fullWidth?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '',
  fullWidth = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (domRef.current) observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    const currentElement = domRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  const getTransform = () => {
    switch (direction) {
      case 'up': return 'translate-y-4';
      case 'down': return '-translate-y-4';
      case 'left': return 'translate-x-4';
      case 'right': return '-translate-x-4';
      default: return '';
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-700 ease-out ${fullWidth ? 'w-full' : ''} ${className} ${
        isVisible ? 'opacity-100 transform-none' : `opacity-0 ${getTransform()}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};