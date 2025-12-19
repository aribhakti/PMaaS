import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!content) return <>{children}</>;

  return (
    <div 
      className="relative flex items-center group"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-surfaceHighlight border border-border rounded-lg shadow-xl z-50 animate-fade-in pointer-events-none">
          <p className="text-xs text-primary leading-relaxed">{content}</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-surfaceHighlight/50"></div>
        </div>
      )}
    </div>
  );
};