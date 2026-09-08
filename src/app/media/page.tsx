'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { newsData } from '@/data/news';
import { 
  Newspaper, 
  Video, 
  Image as ImageIcon, 
  Calendar, 
  ExternalLink, 
  Play, 
  X
} from 'lucide-react';

export default function MediaPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'press' | 'videos' | 'photos'>('press');
  const [selectedPhoto, setSelectedPhoto] = useState<{ src: string; caption: string } | null>(null);

  const photoGallery = [
    {
      src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=80',
      caption: 'કલોલ તાલુકા પંચાયત સભાગૃહમાં જન સુનાવણી અને લોકદરબાર કાર્યક્રમ',
    },
    {
      src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
      caption: 'કલોલ ગ્રામ્ય નર્મદા પાઇપલાઇન અને તળાવોના પુનર્જીવન પ્રકલ્પનું જાત નિરીક્ષણ',
    },
    {
      src: '/images/bakaji-thakor.jpg',
      caption: 'કલોલ ધારાસભ્ય બકાજી ઠાકોર - ગાંધીનગર વિધાનસભા સત્ર દરમિયાન',
    },
    {
      src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1000&q=80',
      caption: 'બોરીસણા & સાઇજ મોડેલ સરકારી હાઇસ્કૂલમાં સ્માર્ટ ક્લાસરૂમનું લોકાર્પણ',
    },
    {
      src: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=80',
      caption: 'કલોલ સબ-ડિસ્ટ્રિક્ટ હોસ્પિટલ ૧૦૦ પથારી અને ડાયાલિસિસ યુનિટ મુલાકાત',
    },
    {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
      caption: 'તેજસ્વી વિદ્યાર્થી સન્માન સમારોહ - કલોલના પ્રતિભાશાળી વિદ્યાર્થીઓનું સન્માન',
    },
  ];

  const videos = [
    {
      id: 'vid-1',
      title: 'ગુજરાત વિધાનસભામાં કલોલ શહેર અને ગ્રામ્ય ખેડૂતોના પ્રશ્નોની રજૂઆત',
      date: '૨૪ ફેબ્રુઆરી ૨૦૨૫',
      duration: '૦૮:૪૨ મિનિટ',
      thumb: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      youtubeUrl: 'https://www.youtube.com',
    },
    {
      id: 'vid-2',
      title: 'રૂ. ૬૪ કરોડના ખર્ચે કલોલ-છત્રાલ ૬-લેન માર્ગ અને ઓવરબ્રિજ લોકાર્પણ સંબોધન',
      date: '૧૨ જાન્યુઆરી ૨૦૨૫',
      duration: '૧૪:૧૫ મિનિટ',
      thumb: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
      youtubeUrl: 'https://www.youtube.com',
    },
  ];

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb in English */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">News & Media</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            પ્રેસ કવરેજ, ભાષણો અને ફોટો ગેલેરી (કલોલ)
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-gujarati">
            કલોલ મતવિસ્તારની સેવાકીય પ્રવૃત્તિઓ, અખબારી અહેવાલો, વિધાનસભા ભાષણો અને જાહેર કાર્યક્રમોની તસવીરો.
          </p>
        </div>

        {/* Tab Switcher strictly in English */}
        <div className="flex items-center gap-2 border-b border-sand-300 pb-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('press')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'press'
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-sand-100 border border-sand-200'
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Press Coverage</span>
          </button>
          
          <button
            onClick={() => setActiveTab('videos')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'videos'
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-sand-100 border border-sand-200'
            }`}
          >
            <Video className="w-4 h-4" />
            <span>Speeches & Videos</span>
          </button>

          <button
            onClick={() => setActiveTab('photos')}
            className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'photos'
                ? 'bg-navy-900 text-white shadow-xs'
                : 'bg-white text-slate-700 hover:bg-sand-100 border border-sand-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Photo Gallery</span>
          </button>
        </div>

        {/* TAB 1: PRESS */}
        {activeTab === 'press' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300 font-gujarati">
            {newsData.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row group"
              >
                <div className="relative h-48 sm:h-auto sm:w-2/5 overflow-hidden bg-slate-200 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title[language]}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-navy-900 text-white">
                      {item.source}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex flex-col justify-between flex-grow space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-saffron-600" />
                      <span>{item.date}</span>
                    </div>

                    <h3 className="text-base font-bold text-navy-900 group-hover:text-saffron-600 transition-colors leading-snug">
                      {item.title[language]}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.summary[language]}
                    </p>
                  </div>

                  {/* Button in English */}
                  <div className="pt-2 border-t border-sand-100 flex items-center justify-between text-xs font-bold text-saffron-600">
                    <span>Read Full Press Release</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: VIDEOS */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in duration-300">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="glass-card rounded-2xl overflow-hidden border border-sand-200 shadow-md group"
              >
                <div className="relative h-60 w-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src={vid.thumb}
                    alt={vid.title}
                    fill
                    className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                  <a
                    href={vid.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 w-16 h-16 rounded-full bg-saffron-gradient text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform"
                    aria-label="Play video"
                  >
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </a>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white text-[11px] font-bold px-2 py-0.5 rounded">
                    {vid.duration}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-xs text-slate-500 font-medium">{vid.date}</span>
                  <h3 className="text-base font-bold text-navy-900 group-hover:text-saffron-600 transition-colors font-gujarati">
                    {vid.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PHOTOS */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {photoGallery.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer bg-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-xs text-white font-medium line-clamp-2 font-gujarati">
                    {photo.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal with English Close Button */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl aspect-[16/10] max-h-[75vh] rounded-2xl overflow-hidden">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.caption}
              fill
              className="object-contain"
            />
          </div>

          <p className="text-white text-sm sm:text-base mt-4 text-center max-w-2xl px-4 font-gujarati">
            {selectedPhoto.caption}
          </p>

          <button
            onClick={() => setSelectedPhoto(null)}
            className="mt-4 px-6 py-2 rounded-xl bg-white text-navy-900 font-bold text-xs hover:bg-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      )}

    </div>
  );
}
