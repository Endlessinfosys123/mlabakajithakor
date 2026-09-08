'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { Quote, ArrowRight, CheckCircle2, Award } from 'lucide-react';

export default function LeadershipQuote() {
  const { language, t } = useLanguage();

  const priorities = [
    {
      title: {
        gu: 'સિંચાઈના પાણીની સુરક્ષા',
        hi: 'सिंचाई जल की सुरक्षा',
        en: 'Canal Water Security',
      },
      desc: {
        gu: 'નર્મદા યોજનાના નીર છેવાડાના દરેક ખેતર સુધી પહોંચાડવા માટે કેનાલ લાઈનિંગ અને તળાવ ઊંડાણ.',
        hi: 'नर्मदा जल को अंतिम छोर के खेतों तक पहुंचाने हेतु नहर लाइनिंग व तालाब गहरीकरण।',
        en: 'Deepening village lakes and lining canals to reach tail-end agricultural fields.',
      },
    },
    {
      title: {
        gu: 'ગુણવત્તાસભર ગ્રામ્ય આરોગ્ય',
        hi: 'गुणवत्तापूर्ण ग्रामीण स्वास्थ्य',
        en: 'Quality Rural Healthcare',
      },
      desc: {
        gu: 'કલોલ સબ-ડિસ્ટ્રિક્ટ હોસ્પિટલ અને તમામ પ્રાથમિક આરોગ્ય કેન્દ્રોમાં આધુનિક લેબ, ડાયાલિસિસ અને ૨૪ કલાક ડોક્ટર સેવા.',
        hi: 'कलोल अस्पताल और पीएचसी में आधुनिक लैब, डायलिसिस व २४ घंटे डॉक्टर उपलब्धता।',
        en: 'Upgraded Kalol hospital with dialysis, modern pathology lab, and round-the-clock emergency medical officers.',
      },
    },
    {
      title: {
        gu: 'યુવા રોજગાર & શિક્ષણ',
        hi: 'युवा रोजगार एवं शिक्षा',
        en: 'Youth Employment & Education',
      },
      desc: {
        gu: 'વિદ્યાર્થીઓ માટે સ્માર્ટ ક્લાસરૂમ, સ્પર્ધાત્મક પરીક્ષા લાયબ્રેરી અને સ્થાનિક કૌશલ્ય તાલીમ કેન્દ્રો.',
        hi: 'स्मार्ट क्लासरूम, प्रतियोगी परीक्षा पुस्तकालय एवं स्थानीय कौशल प्रशिक्षण केंद्र।',
        en: 'Smart classrooms, 24/7 competitive exam study halls, and skill incubation for youth.',
      },
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-sand-50 relative overflow-hidden font-gujarati border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dignified Banner */}
        <div className="glass-card-navy rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle decorative background accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-saffron-500/10 rounded-full blur-3xl pointer-events-none" />
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-24 h-24 text-white/5 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left message (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-gold-300 text-xs font-semibold border border-white/15">
                <Award className="w-3.5 h-3.5" />
                <span>{t.home.leadershipTitle}</span>
              </div>

              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold leading-relaxed tracking-tight text-white/95 font-gujarati">
                &ldquo;કલોલની પવિત્ર ભૂમિના પ્રત્યેક નાગરિકનું હિત અને ખુશાલી એ જ મારી રાજકીય યાત્રાનો એકમાત્ર ધ્યેય છે. ખેડૂત, શ્રમિક, યુવા અને માતા-બહેનોના ઉત્થાન માટે હું હંમેશા આપની પડખે ઊભો છું.&rdquo;
              </blockquote>

              <div className="pt-2 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-saffron-400 shadow-md flex-shrink-0 bg-navy-800">
                  <Image
                    src="/images/bakaji-thakor.jpg"
                    alt="MLA Bakaji Thakor"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white leading-tight font-gujarati">
                    {siteConfig.mlaName[language]}
                  </h4>
                  <p className="text-xs text-saffron-300">
                    MLA - Kalol (Gandhinagar)
                  </p>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gold-400 hover:text-gold-300 transition-colors group"
                >
                  <span>Read Full Biography & Vision</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: Core Commitments Pillars (5 cols) */}
            <div className="lg:col-span-5 space-y-3.5">
              {priorities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <h5 className="text-sm font-bold text-white">
                      {item.title[language]}
                    </h5>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6">
                    {item.desc[language]}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
