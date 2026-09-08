'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { Language } from '@/types';
import { 
  Menu, 
  X, 
  PhoneCall, 
  AlertCircle, 
  Globe
} from 'lucide-react';

export default function Navbar() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Navbar in English as requested
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About & Bio' },
    { href: '/development', label: 'Development Works' },
    { href: '/schemes', label: 'Govt Schemes' },
    { href: '/grievance', label: 'Jan Sunwai / Grievance', highlight: true },
    { href: '/media', label: 'News & Media' },
    { href: '/events', label: 'Programs & Calendar' },
    { href: '/contact', label: 'Contact & Office' },
  ];

  const languages: { code: Language; label: string; native: string }[] = [
    { code: 'gu', label: 'GU', native: 'ગુજરાતી' },
    { code: 'hi', label: 'HI', native: 'हिन्दी' },
    { code: 'en', label: 'EN', native: 'English' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav shadow-dignified py-2.5' 
          : 'bg-white/95 backdrop-blur-md border-b border-sand-200 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Brand Logo & MLA Title */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none">
          {/* MLA Portrait Avatar */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-saffron-500 shadow-md flex-shrink-0 group-hover:scale-105 transition-transform duration-200 bg-navy-900">
            <Image
              src="/images/bakaji-thakor.jpg"
              alt="MLA Bakaji Thakor"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy-900 group-hover:text-saffron-600 transition-colors font-gujarati">
                {siteConfig.mlaName[language]}
              </span>
              <span className="hidden lg:inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-saffron-100 text-saffron-800 border border-saffron-200">
                Kalol (Gandhinagar)
              </span>
            </div>
            <span className="text-[11px] sm:text-xs text-slate-600 font-medium">
              MLA - Kalol Assembly Constituency
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links in English */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-xs lg:text-[13px] font-semibold transition-all duration-150 ${
                  link.highlight
                    ? 'bg-saffron-50 text-saffron-700 border border-saffron-200 hover:bg-saffron-100 font-bold flex items-center gap-1.5 shadow-xs'
                    : isActive
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'text-slate-700 hover:text-saffron-600 hover:bg-sand-100'
                }`}
              >
                {link.highlight && (
                  <span className="w-2 h-2 rounded-full bg-saffron-500 animate-pulse" />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Language Switcher & English Action Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Multi-language Selector Pill */}
          <div className="flex items-center bg-sand-100 p-1 rounded-lg border border-sand-200 text-xs font-semibold">
            <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1 hidden xs:inline-block" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-2 py-1 rounded-md transition-all duration-150 font-bold ${
                  language === lang.code
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-sand-200/60'
                }`}
                title={lang.native}
                aria-label={`Switch to ${lang.native}`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Grievance Quick CTA Button in English */}
          <Link
            href="/grievance"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-saffron-gradient text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-saffron-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <AlertCircle className="w-4 h-4" />
            <span>File Grievance</span>
          </Link>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-navy-900 hover:bg-sand-100 focus:outline-none focus:ring-2 focus:ring-saffron-500"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer with English Nav and Buttons */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 backdrop-blur-xl border-b border-sand-200 shadow-xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-lg text-sm font-semibold flex items-center justify-between ${
                    link.highlight
                      ? 'bg-saffron-50 text-saffron-700 font-bold border border-saffron-200'
                      : isActive
                      ? 'bg-navy-900 text-white'
                      : 'text-slate-800 hover:bg-sand-100'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {link.highlight && (
                      <span className="w-2 h-2 rounded-full bg-saffron-500 animate-ping" />
                    )}
                    {link.label}
                  </span>
                  {isActive && <span className="text-xs text-saffron-300">●</span>}
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-sand-200 grid grid-cols-2 gap-2">
            <a
              href={`tel:${siteConfig.offices[0].helpline}`}
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-sand-100 text-navy-900 font-bold text-xs border border-sand-200"
            >
              <PhoneCall className="w-4 h-4 text-saffron-600" />
              <span>Call Helpline</span>
            </a>
            <Link
              href="/grievance"
              className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-saffron-gradient text-white font-bold text-xs shadow"
            >
              <AlertCircle className="w-4 h-4" />
              <span>File Grievance</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
