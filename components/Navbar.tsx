import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { Button } from './Button';
import { NavLink } from '../types';
import { Switcher } from './Switcher';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const links: NavLink[] = [
    { label: t.nav.about, href: '#what-is-pmaas' },
    { label: t.nav.useCases, href: '#use-cases' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 backdrop-blur-md border-border'
          : 'bg-transparent'
      }`}
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group" aria-label="PMaaS Home">
            <div className="w-8 h-8 rounded bg-primary text-background flex items-center justify-center transition-transform group-hover:rotate-3">
              <Rocket className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </div>
            <span className="text-xl font-display font-bold tracking-tight text-primary">
              PMaaS
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-sm font-medium text-muted hover:text-primary transition-colors py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <Switcher />
            <Button size="sm" variant="primary" href="#pricing">
              {t.nav.getStarted}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Switcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted hover:text-primary p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full animate-fade-in shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-muted hover:text-primary hover:bg-surface transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <Button fullWidth href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>
                {t.nav.getStarted}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};