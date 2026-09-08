'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { eventsData } from '@/data/events';
import { siteConfig } from '@/data/config';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  MapPin, 
  CalendarCheck
} from 'lucide-react';

export default function EventsPage() {
  const { language, t } = useLanguage();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = filterType === 'all' 
    ? eventsData 
    : eventsData.filter(e => e.type === filterType);

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline">
              {language === 'gu' ? 'મુખ્ય પૃષ્ઠ' : language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-slate-500">
              {language === 'gu' ? 'કાર્યક્રમો અને કેલેન્ડર' : language === 'hi' ? 'कार्यक्रम एवं कैलेंडर' : 'Programs & Calendar'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            {t.eventsPage.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-gujarati">
            {t.eventsPage.subtitle}
          </p>
        </div>

        {/* Regular Office Routine Schedule Alert */}
        <div className="glass-card-navy p-6 sm:p-8 rounded-3xl text-white shadow-xl space-y-4 font-gujarati">
          <div className="flex items-center gap-2 text-gold-400 text-xs font-bold uppercase tracking-wider font-sans">
            <CalendarCheck className="w-4 h-4" />
            <span>{t.eventsPage.scheduleTitle}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-saffron-400 font-bold block">
                {t.eventsPage.scheduleItem1Title}
              </span>
              <p className="text-slate-300">{t.eventsPage.scheduleItem1Desc}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-saffron-400 font-bold block">
                {t.eventsPage.scheduleItem2Title}
              </span>
              <p className="text-slate-300">{t.eventsPage.scheduleItem2Desc}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-saffron-400 font-bold block">
                {t.eventsPage.scheduleItem3Title}
              </span>
              <p className="text-slate-300">{t.eventsPage.scheduleItem3Desc}</p>
            </div>
          </div>
        </div>

        {/* Upcoming Public Programs List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-navy-900 font-gujarati">
            {t.eventsPage.upcomingTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-gujarati">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="glass-card rounded-2xl p-6 border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-saffron-100 text-saffron-800 border border-saffron-200 flex items-center gap-1.5 font-sans">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 font-sans">
                      <Clock className="w-3.5 h-3.5" />
                      {event.time}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-saffron-600 transition-colors leading-snug">
                    {event.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.description[language]}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-sand-100 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-slate-700">
                    <MapPin className="w-4 h-4 text-saffron-600 flex-shrink-0" />
                    <span>{event.location[language]}</span>
                  </div>

                  {/* Button */}
                  <a
                    href={`tel:${siteConfig.offices[0].helpline}`}
                    className="w-full py-2.5 px-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 text-xs font-bold transition-colors text-center block"
                  >
                    {t.eventsPage.getEventDetails}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
