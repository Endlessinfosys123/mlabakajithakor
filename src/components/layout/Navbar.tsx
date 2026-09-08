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
  Globe, 
  MapPin, 
  Calendar,
  Building2,
  FileText,
  Home,
  User,
  Sparkles
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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Desktop streamlined navigation links (fits cleanly on all desktop screens without clipping)
  const desktopNavLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/development', label: 'Development' },
    { href: '/schemes', label: 'Schemes' },
    { href: '/media', label: 'Media' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ];

  // Mobile menu items (full descriptive list with icons)
  const mobileNavLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About & Bio', icon: User },
    { href: '/development', label: 'Development Works', icon: Building2 },
    { href: '/schemes', label: 'Government Schemes', icon: FileText },
    { href: '/grievance', label: 'Jan Sunwai / Grievance', icon: AlertCircle, highlight: true },
    { href: '/media', label: 'News & Media', icon: Sparkles },
    { href: '/events', label: 'Events & Calendar', icon: Calendar },
    { href: '/contact', label: 'Contact & Office', icon: MapPin },
  ];

  const languages: { code: Language; label: string; short: string }[] = [
    { code: 'gu', label: 'ગુજરાતી', short: 'ગુજ' },
    { code: 'hi', label: 'हिन्दी', short: 'हिन्दी' },
    { code: 'en', label: 'English', short: 'ENG' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* 🇮🇳 TOP OFFICIAL VIP STRIP */}
      <div className="bg-navy-950 text-slate-300 text-[11px] border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-3 lg:gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-gold-400 tracking-wide uppercase text-[10px] sm:text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Government of Gujarat • 38-Kalol Constituency
            </span>
            <span className="text-white/20 hidden lg:inline">|</span>
            <span className="text-slate-400 hidden lg:flex items-center gap-1 text-[11px]">
              <MapPin className="w-3 h-3 text-saffron-400" />
              MLA Public Secretariat, Opposite Town Hall, Kalol
            </span>
          </div>

          <div className="flex items-center gap-3 lg:gap-4 text-[11px]">
            <span className="text-slate-400">
              Helpline: <strong className="text-white font-mono">{siteConfig.offices[0].helpline}</strong>
            </span>
            <span className="text-white/20 hidden sm:inline">|</span>
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
              <span>Mon - Sat 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🇮🇳 TRICOLOR ACCENT LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-white to-emerald-600" />

      {/* MAIN VIP HEADER */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-950/98 backdrop-blur-xl shadow-2xl py-2 border-b border-gold-500/20' 
            : 'bg-navy-950/95 backdrop-blur-lg py-2.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
          
          {/* BRAND LOGO & MLA IDENTITY */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none flex-shrink-0">
            {/* VIP Golden Ringed Portrait Avatar */}
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden ring-2 ring-gold-400/80 shadow-[0_0_12px_rgba(250,204,21,0.25)] group-hover:scale-105 transition-all duration-300 bg-navy-900 flex-shrink-0">
              <Image
                src="/images/bakaji-thakor.jpg"
                alt="MLA Bakaji Thakor"
                fill
                priority
                className="object-cover object-top"
                sizes="44px"
              />
            </div>

            {/* Title & Official Subtitle */}
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg lg:text-xl font-black tracking-tight text-white group-hover:text-gold-300 transition-colors font-gujarati whitespace-nowrap">
                  {siteConfig.mlaName[language]}
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-extrabold bg-gold-400/15 text-gold-300 border border-gold-400/30 uppercase tracking-wider">
                  MLA
                </span>
              </div>
              <span className="text-[10px] text-slate-300 font-medium whitespace-nowrap hidden sm:inline-block">
                Gujarat Legislative Assembly • Gandhinagar
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/10">
            {desktopNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 whitespace-nowrap ${
                    isActive
                      ? 'text-gold-300 bg-gold-400/15 border border-gold-400/30 shadow-xs font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION CONTROLS: LANGUAGE SWITCHER & JAN SUNWAI CTA */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
            
            {/* Elegant Language Selector */}
            <div className="flex items-center bg-white/[0.07] p-0.5 rounded-lg border border-white/15 text-xs font-bold shadow-inner">
              <Globe className="w-3.5 h-3.5 text-gold-400 ml-1.5 mr-1 hidden sm:inline-block" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2 sm:px-2.5 py-1 rounded-md transition-all duration-150 text-[11px] font-extrabold ${
                    language === lang.code
                      ? 'bg-gold-400 text-navy-950 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={lang.label}
                  aria-label={`Switch language to ${lang.label}`}
                >
                  {lang.short}
                </button>
              ))}
            </div>

            {/* Quick Jan Sunwai CTA Button */}
            <Link
              href="/grievance"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 hover:from-saffron-600 hover:to-saffron-700 text-white text-xs font-extrabold shadow-md shadow-saffron-500/20 transition-all hover:scale-[1.02] active:scale-95 whitespace-nowrap"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Jan Sunwai</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gold-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER (Expanded for small screens) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950/98 backdrop-blur-2xl border-t border-white/10 shadow-2xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-1 gap-1">
              {mobileNavLinks.map((link) => {
                const isActive = pathname === link.href;
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-between transition-all ${
                      link.highlight
                        ? 'bg-saffron-600 text-white shadow-xs'
                        : isActive
                        ? 'bg-gold-400/20 text-gold-300 border border-gold-400/30'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <IconComponent className={`w-4 h-4 ${link.highlight ? 'text-white' : 'text-gold-400'}`} />
                      {link.label}
                    </span>
                    {link.highlight ? (
                      <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-bold uppercase">
                        Active
                      </span>
                    ) : isActive ? (
                      <span className="w-2 h-2 rounded-full bg-gold-400" />
                    ) : null}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Bottom Quick Contact Actions */}
            <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={`tel:${siteConfig.offices[0].helpline}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/10 text-white font-bold text-xs border border-white/10 hover:bg-white/20 transition-all"
              >
                <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                <span>Call Helpline</span>
              </a>
              <Link
                href="/grievance"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-bold text-xs shadow-md"
              >
                <AlertCircle className="w-3.5 h-3.5" />
                <span>File Grievance</span>
              </Link>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
