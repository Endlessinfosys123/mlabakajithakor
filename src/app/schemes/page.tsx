'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { schemesData } from '@/data/schemes';
import { SchemeItem } from '@/types';
import { 
  Search, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  X
} from 'lucide-react';

export default function SchemesPage() {
  const { language, t } = useLanguage();
  const [selectedAudience, setSelectedAudience] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeScheme, setActiveScheme] = useState<SchemeItem | null>(null);

  const audienceFilters = [
    { id: 'all', label: 'All Schemes' },
    { id: 'farmers', label: 'Farmers' },
    { id: 'women', label: 'Women' },
    { id: 'students', label: 'Students' },
    { id: 'seniors', label: 'Senior Citizens' },
  ];

  const filteredSchemes = schemesData.filter((scheme) => {
    const matchesAudience = selectedAudience === 'all' || scheme.targetAudience.includes(selectedAudience as any);
    const matchesSearch = 
      scheme.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      scheme.benefit[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAudience && matchesSearch;
  });

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb in English */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Govt Schemes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            સરકારી કલ્યાણકારી યોજનાઓ • માર્ગદર્શિકા
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-gujarati">
            કેન્દ્ર અને ગુજરાત સરકારની મહત્વપૂર્ણ યોજનાઓ, કોને લાભ મળે, જરૂરી ડોક્યુમેન્ટ્સ અને ઓનલાઇન અરજી કરવાની સરળ સમજ.
          </p>
        </div>

        {/* Filter and Search Bar with English buttons */}
        <div className="glass-card p-4 sm:p-5 rounded-2xl border border-sand-200 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search scheme name or benefits (e.g. Ayushman Card, Kisan Sahay, Namo Lakshmi, Solar)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm font-medium"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {audienceFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedAudience(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedAudience === filter.id
                    ? 'bg-navy-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-sand-200 hover:bg-sand-100'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-gujarati">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="glass-card rounded-2xl p-6 border border-sand-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <span className="text-[11px] font-bold text-saffron-700 bg-saffron-50 border border-saffron-200 px-2.5 py-1 rounded-md">
                    {scheme.department[language]}
                  </span>
                  {scheme.featured && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      મુખ્ય યોજના
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-saffron-600 transition-colors mb-2 leading-snug">
                    {scheme.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {scheme.benefit[language]}
                  </p>
                </div>

                {/* Eligibility preview */}
                <div className="pt-3 border-t border-sand-100 space-y-1.5 text-xs text-slate-700">
                  <span className="font-semibold text-slate-500 block">પાત્રતા:</span>
                  {scheme.eligibility[language].slice(0, 2).map((el, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="line-clamp-1">{el}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons strictly in English */}
              <div className="pt-4 mt-4 border-t border-sand-100 flex items-center gap-2">
                <button
                  onClick={() => setActiveScheme(scheme)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 text-xs font-bold transition-colors text-center"
                >
                  Required Documents
                </button>
                <a
                  href={scheme.applicationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3.5 rounded-xl bg-saffron-gradient hover:bg-saffron-600 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1 shadow-xs"
                  title="Apply on Official Portal"
                >
                  <span>Apply Online</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Scheme Detail Modal */}
      {activeScheme && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-sand-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            <div className="p-5 bg-navy-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-saffron-400 font-bold uppercase tracking-wider block font-gujarati">
                  {activeScheme.department[language]}
                </span>
                <h3 className="text-lg font-bold font-gujarati">
                  {activeScheme.title[language]}
                </h3>
              </div>
              <button
                onClick={() => setActiveScheme(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm font-gujarati">
              <div className="p-4 rounded-xl bg-saffron-50/70 border border-saffron-200 space-y-1">
                <span className="text-xs font-bold text-saffron-800 uppercase tracking-wider block">
                  મુખ્ય મળવાપાત્ર સહાય:
                </span>
                <p className="text-slate-800 leading-relaxed font-medium">
                  {activeScheme.benefit[language]}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">
                  કોણ લાભ લઈ શકે? (પાત્રતાના ધોરણો)
                </h4>
                <ul className="space-y-1.5">
                  {activeScheme.eligibility[language].map((e, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-navy-900 text-sm uppercase tracking-wider">
                  સાથે જોડવાના જરૂરી આધાર પુરાવા (ડોક્યુમેન્ટ્સ):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeScheme.documentsRequired[language].map((doc, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-sand-100 border border-sand-200 text-xs font-medium text-slate-800 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-saffron-600 flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal action buttons in English */}
            <div className="p-4 bg-sand-50 border-t border-sand-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveScheme(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold transition-colors"
              >
                Close Window
              </button>

              <a
                href={activeScheme.applicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-saffron-gradient text-white text-xs font-bold flex items-center gap-2 shadow-xs hover:bg-saffron-600 transition-colors"
              >
                <span>Apply on Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
