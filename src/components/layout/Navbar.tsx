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
  Sparkles,
  MapPin,
  ChevronDown
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
    { code: 'gu', label: 'ગુજરાતી', native: 'ગુજરાતી' },
    { code: 'hi', label: 'हिन्दी', native: 'हिन्दी' },
    { code: 'en', label: 'English', native: 'English' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* 🇮🇳 TOP OFFICIAL VIP STRIP */}
      <div className="bg-navy-950 text-slate-300 text-[11px] border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-semibold text-gold-400 tracking-wide uppercase text-[10px]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Government of Gujarat • Kalol Constituency (382721)
            </span>
            <span className="text-white/20">|</span>
            <span className="text-slate-400 flex items-center gap-1 text-[11px]">
              <MapPin className="w-3 h-3 text-saffron-400" />
              MLA Public Secretariat, Opposite Town Hall, Kalol
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">
              Helpline: <strong className="text-white font-mono">{siteConfig.offices[0].helpline}</strong>
            </span>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-saffron-500" />
              <span>Office: Mon - Sat 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🇮🇳 TRICOLOR ACCENT LINE */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 via-white to-emerald-600" />

      {/* MAIN VIP HEADER (Deep Navy Glass) */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-navy-900/95 backdrop-blur-xl shadow-2xl py-2.5 border-b border-gold-500/20' 
            : 'bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950/95 backdrop-blur-lg py-3 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          
          {/* VIP BRAND LOGO & MLA IDENTITY */}
          <Link href="/" className="flex items-center gap-3.5 group focus:outline-none flex-shrink-0">
            {/* VIP Golden Ringed Portrait Avatar */}
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl overflow-hidden ring-2 ring-gold-400/80 shadow-[0_0_15px_rgba(250,204,21,0.25)] group-hover:scale-105 transition-all duration-300 bg-navy-950">
              <Image
                src="/images/bakaji-thakor.jpg"
                alt="MLA Bakaji Thakor"
                fill
                priority
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>

            {/* Title & Official Subtitle */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-gold-300 transition-colors font-gujarati drop-shadow-sm">
                  {siteConfig.mlaName[language]}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-gold-400/15 text-gold-300 border border-gold-400/30 uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                  MLA • કલોલ
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <span className="font-semibold text-saffron-400 tracking-wide">
                  Gujarat Legislative Assembly
                </span>
                <span className="hidden lg:inline text-slate-500">•</span>
                <span className="hidden lg:inline text-slate-400 text-[11px]">
                  Gandhinagar
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP VIP NAVIGATION PILLS */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 relative whitespace-nowrap ${
                    link.highlight
                      ? 'bg-gradient-to-r from-saffron-500 to-saffron-600 text-white shadow-md shadow-saffron-500/20 hover:from-saffron-600 hover:to-saffron-700 flex items-center gap-1.5'
                      : isActive
                      ? 'bg-gold-400 text-navy-950 shadow-md shadow-gold-400/20 font-extrabold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.highlight && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTION CONTROLS: VIP LANGUAGE SWITCHER & CTAS */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Elegant VIP Language Selector */}
            <div className="flex items-center bg-white/[0.06] p-1 rounded-xl border border-white/15 text-xs font-bold shadow-inner">
              <Globe className="w-3.5 h-3.5 text-gold-400 ml-1.5 mr-1 hidden sm:inline-block" />
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 rounded-lg transition-all duration-200 text-xs ${
                    language === lang.code
                      ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-navy-950 font-black shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  title={lang.native}
                  aria-label={`Switch language to ${lang.native}`}
                >
                  {lang.code === 'gu' ? 'ગુજ' : lang.code === 'hi' ? 'हिन्दी' : 'ENG'}
                </button>
              ))}
            </div>

            {/* Quick Helpline CTA (Desktop) */}
            <a
              href={`tel:${siteConfig.offices[0].helpline}`}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 hover:text-white border border-white/15 text-xs font-bold transition-all"
              title="Call MLA Helpline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono">{siteConfig.offices[0].helpline}</span>
            </a>

            {/* Quick Grievance CTA (Primary) */}
            <Link
              href="/grievance"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 hover:from-saffron-600 hover:to-orange-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-saffron-500/25 hover:shadow-saffron-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <AlertCircle className="w-4 h-4 text-white" />
              <span>File Grievance</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-white bg-white/10 hover:bg-white/20 border border-white/10 focus:outline-none focus:ring-2 focus:ring-gold-400 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-gold-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-DOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-navy-950/98 backdrop-blur-2xl border-t border-white/10 shadow-2xl px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid grid-cols-1 gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between transition-all ${
                      link.highlight
                        ? 'bg-gradient-to-r from-saffron-600 to-saffron-700 text-white shadow-md'
                        : isActive
                        ? 'bg-gold-400 text-navy-950 shadow'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {link.highlight && (
                        <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                      )}
                      {link.label}
                    </span>
                    {isActive && <span className="text-xs font-black">●</span>}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Bottom Quick Contact Actions */}
            <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href={`tel:${siteConfig.offices[0].helpline}`}
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs border border-white/10 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Helpline</span>
              </a>
              <Link
                href="/grievance"
                className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-bold text-xs shadow-md"
              >
                <AlertCircle className="w-4 h-4" />
                <span>File Grievance</span>
              </Link>
            </div>
          </div>
        )}
      </div>

    </header>
  );
}
