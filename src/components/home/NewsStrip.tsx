'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { newsData } from '@/data/news';
import { Newspaper, ArrowRight, Calendar } from 'lucide-react';

export default function NewsStrip() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 bg-sand-50 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block mb-2 font-gujarati">
              <span className="flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5" />
                {t.home.newsBadge}
              </span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-gujarati">
              {t.home.newsTitle}
            </h2>
          </div>

          <Link
            href="/media"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-saffron-600 hover:text-saffron-700 transition-colors group font-gujarati"
          >
            <span>{t.home.viewAllNews}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-gujarati">
          {newsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-navy-900 text-white shadow">
                    {item.source}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-base font-bold text-navy-900 group-hover:text-saffron-600 transition-colors line-clamp-2 leading-snug">
                    {item.title[language]}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {item.summary[language]}
                  </p>
                </div>

                <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs font-bold text-saffron-600 font-gujarati">
                  <span>{t.home.readFullArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
