'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { constituencyVillages, VillagePoint } from '@/data/constituency';
import { 
  MapPin, 
  CheckCircle2, 
  Coins, 
  Users, 
  Droplet, 
  Compass,
  ArrowRight
} from 'lucide-react';

export default function ConstituencyMapVisual() {
  const { language, t } = useLanguage();
  const [selectedVillage, setSelectedVillage] = useState<VillagePoint>(constituencyVillages[0]);

  return (
    <section className="py-16 lg:py-20 bg-sand-50 border-b border-sand-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block font-gujarati">
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5" />
              ઇન્ટરેક્ટિવ નકશો • કલોલ વિધાનસભા (ગાંધીનગર)
            </span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            {t.home.mapTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-gujarati">
            {t.home.mapSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Interactive Map Canvas (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-xl border border-sand-200 relative">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-sand-100">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-saffron-500 animate-pulse" />
                <span className="text-xs font-bold text-navy-900 font-gujarati">
                  ગામ અથવા ઔદ્યોગિક સેન્ટર પર ક્લિક કરી વિગત જુઓ
                </span>
              </div>
              <span className="text-[11px] text-slate-500 bg-sand-100 px-2.5 py-1 rounded-md font-bold">
                Kalol Assembly (Gandhinagar)
              </span>
            </div>

            {/* SVG Visual Stylized Map Area */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-gradient-to-br from-sand-100 via-slate-50 to-sand-200/70 border border-sand-300/80 overflow-hidden shadow-inner flex items-center justify-center p-4">
              
              {/* Highway & Narmada Canal Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M 20 80 Q 150 120, 240 200 T 450 280"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="6"
                  strokeDasharray="4 2"
                />
                <path
                  d="M 60 220 L 220 180 L 380 90"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="3.5"
                />
                <path
                  d="M 220 180 L 320 320"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2.5"
                />
              </svg>

              <div className="absolute bottom-6 left-6 text-[10px] text-sky-700 font-bold bg-sky-50 px-2 py-1 rounded border border-sky-200 flex items-center gap-1 shadow-2xs">
                <Droplet className="w-3 h-3" />
                <span>Narmada Bulk Canal Feeder</span>
              </div>

              {/* Village Interactive Pins */}
              {constituencyVillages.map((village) => {
                const isSelected = selectedVillage.id === village.id;
                return (
                  <button
                    key={village.id}
                    onClick={() => setSelectedVillage(village)}
                    style={{ left: `${village.x}%`, top: `${village.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 group focus:outline-none z-10 ${
                      isSelected ? 'scale-125 z-30' : 'hover:scale-110'
                    }`}
                    aria-label={`Select village ${village.name[language]}`}
                  >
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full bg-saffron-400/40 animate-ping" />
                    )}

                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold shadow-md transition-all ${
                      isSelected
                        ? 'bg-navy-900 text-white ring-2 ring-saffron-500 shadow-saffron-glow'
                        : 'bg-white text-slate-800 border border-slate-300 hover:border-saffron-500'
                    }`}>
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-saffron-400' : 'text-saffron-600'}`} />
                      <span className="whitespace-nowrap">{village.name[language].split(' ')[0]}</span>
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Map Legend */}
            <div className="mt-4 pt-3 border-t border-sand-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-600">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-saffron-500 inline-block" /> Village / GIDC Pin
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-3 h-0.5 bg-sky-500 inline-block" /> Canal Feeder
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <span className="w-3 h-0.5 bg-saffron-600 inline-block" /> Highway 6-Lane
                </span>
              </div>
              <span className="text-slate-500 font-semibold">Kalol Assembly (72 Villages & Wards)</span>
            </div>
          </div>

          {/* Right: Selected Village Detail Spotlight Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-xl space-y-6">
              
              <div className="flex items-start justify-between gap-3 pb-4 border-b border-sand-200">
                <div>
                  <span className="text-xs font-bold text-saffron-600 uppercase tracking-wider block">
                    Taluka: {selectedVillage.taluka}
                  </span>
                  <h3 className="text-2xl font-extrabold text-navy-900 font-heading">
                    {selectedVillage.name[language]}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5 font-gujarati">
                    વસ્તી: {selectedVillage.population}
                  </p>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-saffron-gradient text-white flex items-center justify-center font-extrabold text-lg shadow-md flex-shrink-0">
                  {selectedVillage.projectsCount}
                </div>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200">
                  <span className="text-[11px] text-slate-500 block font-medium">Allocated Budget</span>
                  <span className="text-lg font-bold text-navy-900 font-heading text-saffron-700">
                    {selectedVillage.fundsSpent}
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-sand-50 border border-sand-200">
                  <span className="text-[11px] text-slate-500 block font-medium">Projects Done</span>
                  <span className="text-lg font-bold text-navy-900 font-heading">
                    {selectedVillage.projectsCount} Completed
                  </span>
                </div>
              </div>

              {/* Major Work Highlight */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  Major Development Achievement
                </span>
                <p className="text-xs sm:text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-sand-200 leading-relaxed font-medium font-gujarati">
                  {selectedVillage.majorWork[language]}
                </p>
              </div>

              {/* Basic Amenities Status Checklist */}
              <div className="space-y-2 pt-2 border-t border-sand-200 font-gujarati">
                <span className="text-xs font-semibold text-slate-500 block">મૂળભૂત સુવિધાઓની સ્થિતિ:</span>
                <div className="grid grid-cols-1 gap-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>નર્મદા બલ્ક પીવાનું શુદ્ધ પાણી ઉપલબ્ધ</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>હાઇવે સાથે ૧૦૦% પાકા ડામર રસ્તા જોડાણ</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>પ્રાથમિક શાળા સ્માર્ટ ક્લાસરૂમ & RO સુવિધા</span>
                  </div>
                </div>
              </div>

              {/* Action Button in English */}
              <div className="pt-2">
                <Link
                  href="/development"
                  className="w-full py-3 px-4 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs sm:text-sm font-bold transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>View All Projects in this Area</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
