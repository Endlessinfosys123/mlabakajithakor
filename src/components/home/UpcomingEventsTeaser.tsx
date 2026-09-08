'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { eventsData } from '@/data/events';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function UpcomingEventsTeaser() {
  const { language, t } = useLanguage();

  return (
    <section className="py-16 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block mb-2 font-gujarati">
              જાહેર કેલેન્ડર • કલોલ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-gujarati">
              {t.home.eventsTitle}
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-saffron-600 hover:text-saffron-700 transition-colors group"
          >
            <span>View All Events & Calendar</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-gujarati">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="glass-card rounded-2xl p-5 sm:p-6 border border-sand-200 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-saffron-100 text-saffron-800 border border-saffron-200">
                    <Calendar className="w-3.5 h-3.5" />
                    {event.date}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {event.time}
                  </span>
                </div>

                <h3 className="text-base font-bold text-navy-900 group-hover:text-saffron-600 transition-colors line-clamp-2">
                  {event.title[language]}
                </h3>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {event.description[language]}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-sand-100 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-saffron-600 flex-shrink-0" />
                  <span className="line-clamp-1">{event.location[language]}</span>
                </div>

                <Link
                  href="/events"
                  className="w-full py-2.5 px-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 text-xs font-bold text-center block transition-colors"
                >
                  View Program Details
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
