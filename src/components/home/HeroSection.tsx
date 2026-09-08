'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { 
  AlertCircle, 
  ArrowRight, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck, 
  Award,
  Users
} from 'lucide-react';

export default function HeroSection() {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-sand-50 pt-8 pb-16 lg:py-20 border-b border-sand-200/80">
      {/* Decorative ambient gradients */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-saffron-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-navy-900/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetric Headline & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-saffron-200/80 shadow-xs text-xs font-semibold text-slate-800">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-saffron-500" />
              </span>
              <span className="text-saffron-700 font-bold">
                સક્રિય લોક પ્રતિનિધિ • કલોલ વિધાનસભા (ગાંધીનગર)
              </span>
            </div>

            {/* Main MLA Name & Designation */}
            <div className="space-y-2">
              <h2 className="text-base sm:text-lg font-bold text-slate-600 tracking-wide uppercase">
                {siteConfig.designation[language]}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-900 tracking-tight leading-[1.15] font-gujarati">
                {siteConfig.mlaName[language]}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-saffron-600 pt-1 font-gujarati">
                {siteConfig.tagline[language]}
              </p>
            </div>

            {/* Subtitle / Commitment in Gujarati & English */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-gujarati">
              {t.hero.subtitle}
            </p>

            {/* Quick Action Buttons strictly in English */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/grievance"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-saffron-gradient text-white font-bold text-sm sm:text-base shadow-md hover:shadow-saffron-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <AlertCircle className="w-5 h-5" />
                <span>File Grievance</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/development"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sand-100 text-navy-900 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs transition-all duration-200"
              >
                <span>Explore Works Done</span>
              </Link>

              <a
                href={`tel:${siteConfig.offices[0].helpline}`}
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-slate-700 hover:text-navy-900 text-xs sm:text-sm font-bold hover:bg-white/80 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-emerald-600" />
                <span>Call Helpline: {siteConfig.offices[0].helpline}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="pt-4 border-t border-sand-200/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-gujarati">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">૨૪x૭ જન સંપર્ક કાર્યાલય</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">૧૦૦% પારદર્શક ફરિયાદ નિવારણ</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-medium">કલોલ સર્વાંગી વિકાસ સંકલ્પ</span>
              </div>
            </div>

          </div>

          {/* Right Column: Leader Portrait with Dignified Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 p-2 sm:p-2.5 shadow-2xl border border-navy-800">
                <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-navy-800">
                  <Image
                    src="/images/bakaji-thakor.jpg"
                    alt="MLA Bakaji Thakor - Kalol Gujarat Assembly"
                    fill
                    priority
                    className="object-cover object-center filter brightness-105 contrast-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />

                  {/* Leader Info Strip over photo */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-card-navy text-white">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[11px] text-saffron-400 font-bold uppercase tracking-wider block">
                          ધારાસભ્યશ્રી
                        </span>
                        <h3 className="text-xl font-bold font-gujarati">
                          {siteConfig.mlaName[language]}
                        </h3>
                        <p className="text-xs text-slate-300">
                          કલોલ વિધાનસભા મતવિસ્તાર (ગાંધીનગર)
                        </p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-saffron-500/20 border border-saffron-400/40 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-gold-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 glass-card py-2.5 px-4 rounded-2xl shadow-xl border border-saffron-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-saffron-100 flex items-center justify-center text-saffron-700">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-navy-900 block leading-tight font-heading">
                    25+ Years
                  </span>
                  <span className="text-[11px] text-slate-600 font-semibold font-gujarati">
                    નિષ્ઠાવાન જનસેવા
                  </span>
                </div>
              </div>

              {/* Floating Stat Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 glass-card py-2.5 px-4 rounded-2xl shadow-xl border border-sand-300 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-lg font-extrabold text-navy-900 block leading-tight font-heading">
                    16,500+
                  </span>
                  <span className="text-[11px] text-slate-600 font-semibold font-gujarati">
                    ફરિયાદ સફળ નિવારણ
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
