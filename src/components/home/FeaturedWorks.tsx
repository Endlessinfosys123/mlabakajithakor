'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { 
  ArrowRight, 
  MapPin, 
  Coins, 
  CheckCircle2, 
  Users
} from 'lucide-react';

export default function FeaturedWorks() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'water', label: t.categories.water },
    { id: 'roads', label: t.categories.roads },
    { id: 'health', label: t.categories.health },
    { id: 'education', label: t.categories.education },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData.slice(0, 4)
    : projectsData.filter(p => p.category === selectedCategory).slice(0, 4);

  return (
    <section className="py-16 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block mb-2 font-gujarati">
              {t.home.featuredWorksBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-gujarati">
              {t.home.featuredWorksTitle}
            </h2>
          </div>

          {/* Action button */}
          <Link
            href="/development"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-saffron-600 hover:text-saffron-700 transition-colors group font-gujarati"
          >
            <span>{t.home.viewAllWorks}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Category Pills in English */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-white shadow-xs'
                  : 'bg-sand-100 text-slate-700 hover:bg-sand-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-gujarati">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col group"
            >
              {/* Image & Status Overlay */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title[language]}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
                
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md font-gujarati ${
                    project.status === 'completed'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-500 text-white'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {project.status === 'completed' ? t.common.status.completed : t.common.status.ongoing}
                  </span>
                </div>

                {/* Budget Pill */}
                <div className="absolute bottom-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-navy-950/85 text-gold-300 backdrop-blur-md shadow-md border border-white/10">
                    <Coins className="w-3.5 h-3.5 text-gold-400" />
                    {project.budget}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-saffron-600 flex-shrink-0" />
                    <span>{project.location.village}</span>
                    <span>•</span>
                    <span className="text-slate-400">{project.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-saffron-600 transition-colors line-clamp-2 leading-snug">
                    {project.title[language]}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {project.description[language]}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="pt-3 border-t border-sand-200/90 space-y-1.5">
                  {project.highlights[language].slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 flex-shrink-0" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Card Footer with Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Users className="w-3.5 h-3.5 text-emerald-600" />
                    {project.beneficiariesCount}
                  </span>

                  <Link
                    href="/development"
                    className="text-saffron-600 hover:text-saffron-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform font-bold font-gujarati"
                  >
                    <span>{t.home.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
