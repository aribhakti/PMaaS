import React from 'react';
import { Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export const Switcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'id' : 'en');
  };

  return (
    <div className="flex items-center space-x-2 bg-surfaceHighlight/50 rounded-full p-1 border border-border">
      <button
        onClick={toggleTheme}
        className="p-1.5 rounded-full hover:bg-surface transition-colors text-muted hover:text-primary"
        aria-label="Toggle Theme"
      >
        {theme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
      </button>
      <div className="w-px h-4 bg-border"></div>
      <button
        onClick={toggleLanguage}
        className="flex items-center space-x-1 px-2 py-1 rounded-full hover:bg-surface transition-colors text-xs font-medium text-muted hover:text-primary"
        aria-label="Toggle Language"
      >
        <Languages className="w-3 h-3 mr-1" />
        <span>{language.toUpperCase()}</span>
      </button>
    </div>
  );
};