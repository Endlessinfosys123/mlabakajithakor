'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { projectsData } from '@/data/projects';
import { ProjectItem } from '@/types';
import ConstituencyMapVisual from '@/components/home/ConstituencyMapVisual';
import { 
  Search, 
  MapPin, 
  Coins, 
  CheckCircle2, 
  ArrowRight, 
  X, 
  Layers,
  Compass
} from 'lucide-react';

export default function DevelopmentPage() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  const categories = [
    { id: 'all', label: t.categories.all },
    { id: 'water', label: t.categories.water },
    { id: 'roads', label: t.categories.roads },
    { id: 'health', label: t.categories.health },
    { id: 'education', label: t.categories.education },
    { id: 'energy', label: t.categories.energy },
    { id: 'community', label: t.categories.community },
  ];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.village.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
              <Link href="/" className="hover:underline font-gujarati">Home</Link>
              <span>/</span>
              <span className="text-slate-500 font-gujarati">Development Works</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
              {t.home.featuredWorksTitle}
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-gujarati">
              {t.hero.subtitle}
            </p>
          </div>

          {/* Grid vs Map view switch */}
          <div className="flex items-center bg-sand-200/80 p-1 rounded-xl border border-sand-300 self-start md:self-auto font-gujarati">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'grid' ? 'bg-navy-900 text-white shadow-xs' : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t.common.gridView}</span>
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                viewMode === 'map' ? 'bg-navy-900 text-white shadow-xs' : 'text-slate-700 hover:text-navy-900'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{t.common.interactiveMap}</span>
            </button>
          </div>
        </div>

        {/* View mode 1: Map */}
        {viewMode === 'map' ? (
          <div className="animate-in fade-in duration-300">
            <ConstituencyMapVisual />
          </div>
        ) : (
          /* View mode 2: Filterable Grid */
          <div className="space-y-8 animate-in fade-in duration-300">
            
            {/* Search & Category Filter Bar */}
            <div className="glass-card p-4 sm:p-5 rounded-2xl border border-sand-200 space-y-4">
              <div className="relative">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder={t.common.searchProjectsPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm font-medium font-gujarati"
                />
              </div>

              {/* Category buttons */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none font-gujarati">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      selectedCategory === cat.id
                        ? 'bg-navy-900 text-white shadow-xs'
                        : 'bg-white text-slate-700 border border-sand-200 hover:bg-sand-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Total count ticker */}
            <div className="flex items-center justify-between text-xs text-slate-600 font-bold px-1 font-gujarati">
              <span>{t.common.showing} {filteredProjects.length} {t.common.projectsCountLabel}</span>
              <span className="text-saffron-700">{t.common.constituencyBudgetLabel}</span>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-gujarati">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-sand-200 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {/* Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                      <Image
                        src={project.image}
                        alt={project.title[language]}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow font-gujarati">
                          {project.status === 'completed' ? t.common.status.completed : t.common.status.ongoing}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-navy-950/85 text-gold-300 backdrop-blur-md border border-white/10">
                          {project.budget}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 pt-0 space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-saffron-600 flex-shrink-0" />
                        <span className="line-clamp-1">{project.location.village}</span>
                      </div>

                      <h3 className="text-base font-bold text-navy-900 group-hover:text-saffron-600 transition-colors line-clamp-2 leading-snug">
                        {project.title[language]}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {project.description[language]}
                      </p>

                      <div className="pt-2 border-t border-sand-100 space-y-1">
                        {project.highlights[language].slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="line-clamp-1">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="w-full py-2.5 px-3 rounded-xl bg-sand-100 hover:bg-sand-200 text-navy-900 text-xs font-bold transition-colors flex items-center justify-center gap-2 font-gujarati"
                    >
                      <span>{t.common.viewDetailsPhotos}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-sand-200 max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-navy-900 text-white flex items-center justify-between">
              <div>
                <span className="text-xs text-saffron-400 font-bold uppercase tracking-wider block font-gujarati">
                  {t.common.projectDetailsModal}
                </span>
                <h3 className="text-lg font-bold font-gujarati">
                  {activeModalProject.location.village}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-full hover:bg-white/20 text-white"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div className="relative h-56 w-full rounded-2xl overflow-hidden bg-slate-100">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title[language]}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold text-navy-900 mb-2 font-gujarati">
                  {activeModalProject.title[language]}
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed font-gujarati">
                  {activeModalProject.description[language]}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-sand-50 border border-sand-200 text-xs font-gujarati">
                <div>
                  <span className="text-slate-500 block">{t.common.budgetSpent}:</span>
                  <span className="font-bold text-navy-900 text-sm">{activeModalProject.budget}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{t.common.completionYear}</span>
                  <span className="font-bold text-navy-900 text-sm">{activeModalProject.year}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{t.common.beneficiaries}:</span>
                  <span className="font-bold text-emerald-700 text-sm font-gujarati">{activeModalProject.beneficiariesCount}</span>
                </div>
              </div>

              {activeModalProject.beforeAfter && (
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2 text-xs font-gujarati">
                  <span className="font-bold text-emerald-900 block uppercase tracking-wider">
                    {t.common.beforeAfter}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-slate-700">
                    <div>
                      <span className="font-semibold text-rose-700 block">{t.common.before}</span>
                      {activeModalProject.beforeAfter.before}
                    </div>
                    <div>
                      <span className="font-semibold text-emerald-800 block">{t.common.after}</span>
                      {activeModalProject.beforeAfter.after}
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-2 font-gujarati">
                <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block">
                  {t.common.keyHighlights}
                </span>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {activeModalProject.highlights[language].map((hl, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-saffron-600 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-sand-50 border-t border-sand-200 flex justify-end font-gujarati">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors"
              >
                {t.common.close}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
