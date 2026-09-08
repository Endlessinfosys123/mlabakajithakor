'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { 
  Award, 
  CheckCircle, 
  MapPin, 
  Coins, 
  HeartHandshake 
} from 'lucide-react';

export default function StatsCounter() {
  const { language, t } = useLanguage();

  const icons = [
    Award,
    CheckCircle,
    MapPin,
    Coins,
    HeartHandshake,
  ];

  return (
    <section className="py-12 bg-white relative z-20 border-b border-sand-200 font-gujarati">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block font-gujarati">
            {t.home.statsBadge}
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight">
            {t.home.statsTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {t.home.statsSubtitle}
          </p>
        </div>

        {/* 5 Stats Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {siteConfig.stats.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={item.id}
                className="glass-card p-4 sm:p-5 rounded-2xl hover:shadow-glass-hover hover:-translate-y-1 transition-all duration-300 border border-sand-200/90 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-saffron-50 text-saffron-600 group-hover:bg-saffron-gradient group-hover:text-white transition-all duration-300 flex items-center justify-center mb-3 shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="text-2xl sm:text-3xl font-black text-navy-900 font-heading tracking-tight mb-1 group-hover:text-saffron-600 transition-colors">
                  {item.value}
                </span>
                
                <span className="text-xs font-medium text-slate-600 line-clamp-2 leading-tight">
                  {item.label[language]}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
