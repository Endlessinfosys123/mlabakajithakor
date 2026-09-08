'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { 
  Award, 
  Calendar, 
  CheckCircle2, 
  Heart, 
  Landmark, 
  MapPin, 
  ShieldCheck, 
  Users,
  ArrowRight
} from 'lucide-react';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const timeline = [
    {
      year: '૧૯૯૫ - ૨૦૦૨',
      title: {
        gu: 'વિદ્યાર્થી કાળ અને ગ્રામ્ય યુવા ઉત્થાન',
        hi: 'छात्र जीवन एवं ग्रामीण युवा नेतृत्व',
        en: 'Youth Leadership & Grassroots Community Work',
      },
      desc: {
        gu: 'વિદ્યાર્થીઓના હિતો માટે લડત, શિક્ષણ પ્રસાર અને ગ્રામ્ય રમતગમત પ્રવૃત્તિઓનું આયોજન કરીને સામાજિક સેવાની શરૂઆત.',
        hi: 'छात्र हितों की रक्षा, शिक्षा के प्रसार और ग्रामीण खेल गतिविधियों के माध्यम से समाज सेवा का संकल्प।',
        en: 'Grassroots activism advocating for student welfare, rural education access in North Gujarat, and community service.',
      },
    },
    {
      year: '૨૦૦૨ - ૨૦૧૨',
      title: {
        gu: 'તાલુકા અને જિલ્લા પંચાયતમાં લોકપ્રતિનિધિત્વ',
        hi: 'तालुका एवं जिला पंचायत में जनसेवा',
        en: 'Taluka & District Panchayat Governance',
      },
      desc: {
        gu: 'પંચાયતી રાજ વ્યવસ્થામાં રહીને છેવાડાના ગામડાઓમાં પીવાના પાણીની ટાંકીઓ, પ્રાથમિક શાળાઓના ઓરડા અને પાકા રસ્તાના પ્રકલ્પો મંજૂર કરાવ્યા.',
        hi: 'पंचायती राज व्यवस्था के अंतर्गत गांवों में पेयजल, प्राथमिक शालाओं के भवन और पक्की सड़कों के निर्माण में अग्रणी भूमिका।',
        en: 'Spearheaded rural water tank installations, primary school classroom construction, and local connectivity roads.',
      },
    },
    {
      year: '૨૦૧૨ - ૨૦૨૨',
      title: {
        gu: 'કિસાન હિત રક્ષા & ઔદ્યોગિક વિકાસ સંકલન',
        hi: 'किसान कल्याण एवं औद्योगिक विकास',
        en: 'Agrarian Advocacy & Industrial Coordination',
      },
      desc: {
        gu: 'ખેડૂતોને બંને પાક માટે પૂરતું નર્મદાનું પાણી મળી રહે તે માટે તાલુકા અને રાજ્ય સ્તરે સક્રિય રજૂઆતો. સ્થાનિક યુવાનોને રોજગારી મળે તે માટે ઉદ્યોગો સાથે સંકલન.',
        hi: 'किसानों को सिंचाई जल की सुनिश्चितता और स्थानीय युवाओं को रोजगार हेतु सतत प्रयास।',
        en: 'Advocated for reliable irrigation water and coordinated with industrial hubs to expand job opportunities for local youth.',
      },
    },
    {
      year: '૨૦૨૨ - વર્તમાન',
      title: {
        gu: 'ગુજરાત વિધાનસભામાં ધારાસભ્ય (કલોલ)',
        hi: 'गुजरात विधानसभा में विधायक (कलोल)',
        en: 'Elected Member of Legislative Assembly (Kalol)',
      },
      desc: {
        gu: 'કલોલ મતવિસ્તારના મતદારોના પ્રચંડ વિશ્વાસ સાથે વિધાનસભામાં ચૂંટાઈ આવી કરોડો રૂપિયાના વિકાસ કામો, હોસ્પિટલ અપગ્રેડ, રેલવે ઓવરબ્રિજ અને નર્મદા પાઇપલાઇન મંજૂર કરાવી.',
        hi: 'विधानसभा में कलोल के विकास हेतु करोड़ों के विकास कार्य, अस्पताल, रेलवे ओवरब्रिज और नर्मदा पाइपलाइन की मंजूरी।',
        en: 'Serving as MLA for Kalol (Gandhinagar), sanctioning ₹420+ Crores of infrastructure projects, 100-bed hospital wing, and 6-lane highway flyovers.',
      },
    },
  ];

  const values = [
    {
      title: { gu: 'પારદર્શિતા અને પ્રમાણિકતા', hi: 'पारदर्शिता और ईमानदारी', en: 'Transparency & Honesty' },
      desc: { gu: 'જનતાના નાણાંનો એક-એક રૂપિયો માત્ર અને માત્ર જાહેર હિત અને વાસ્તવિક વિકાસ કામો પાછળ વપરાય તેવો દ્રઢ સંકલ્પ.', hi: 'जनता के धन का एक-एक पैसा केवल वास्तविक जनहित व विकास में व्यय।', en: 'Ensuring every single rupee of public funds is utilized strictly for verified community impact.' },
      icon: ShieldCheck,
    },
    {
      title: { gu: 'ખેડૂત અને શ્રમિક પ્રથમ', hi: 'किसान एवं श्रमिक कल्याण', en: 'Farmers & Workers First' },
      desc: { gu: 'ખેતરમાં પાણી, ખેતપેદાશના યોગ્ય ભાવ અને ઔદ્યોગિક કામદારોના અધિકારોનું રક્ષણ એ સર્વોચ્ચ પ્રાથમિકતા.', hi: 'खेती में जल और श्रमिकों के अधिकारों की रक्षा सर्वोच्च प्राथमिकता।', en: 'Guaranteeing irrigation water, fair crop returns, and social security for industrial workers.' },
      icon: Landmark,
    },
    {
      title: { gu: 'જન-જન સાથે સીધો સંવાદ', hi: 'सीधा संवाद और सहज उपलब्धता', en: 'Direct Public Accessibility' },
      desc: { gu: 'સામાન્ય નાગરિક કોઈપણ વચેટિયા વગર સીધો કલોલ કાર્યાલયે આવી શકે તેવી સુલભ વ્યવસ્થા.', hi: 'बिना किसी बिचौलिए के सीधे विधायक से मिलने व समस्या निवारण की सुविधा।', en: 'An open-door policy allowing any citizen to meet their MLA at Kalol secretariat without intermediaries.' },
      icon: Users,
    },
  ];

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline font-gujarati">Home</Link>
            <span>/</span>
            <span className="text-slate-500 font-gujarati">{t.aboutPage.breadcrumb}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            {t.aboutPage.title}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl font-gujarati">
            {t.aboutPage.subtitle}
          </p>
        </div>

        {/* Bio Portrait & Key Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative h-[440px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy-900">
              <Image
                src="/images/bakaji-thakor.jpg"
                alt="MLA Bakaji Thakor Biography"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs text-saffron-400 font-bold block mb-1 uppercase tracking-wider font-gujarati">
                  {t.aboutPage.badgePhoto}
                </span>
                <h3 className="text-2xl font-bold font-gujarati">
                  {siteConfig.mlaName[language]}
                </h3>
                <p className="text-xs text-slate-300 font-gujarati">
                  {t.hero.photoOverlaySub}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-md space-y-4">
              <h2 className="text-2xl font-bold text-navy-900 font-gujarati">
                {t.aboutPage.storyTitle}
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-gujarati">
                {t.aboutPage.storyP1}
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-gujarati">
                {t.aboutPage.storyP2}
              </p>

              {/* Personal Factsheet */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-sand-200 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 font-medium block font-gujarati">{t.aboutPage.factConstituency}</span>
                  <span className="font-bold text-navy-900 font-gujarati">{t.aboutPage.factConstituencyVal}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block font-gujarati">{t.aboutPage.factFocus}</span>
                  <span className="font-bold text-navy-900 font-gujarati">{t.aboutPage.factFocusValue}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block font-gujarati">{t.aboutPage.factDesignation}</span>
                  <span className="font-bold text-navy-900 font-gujarati">{t.aboutPage.factDesignationVal}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-medium block font-gujarati">{t.aboutPage.factMotto}</span>
                  <span className="font-bold text-saffron-700 font-gujarati">{t.aboutPage.factMottoVal}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold transition-colors font-gujarati"
                >
                  <span>{t.aboutPage.connectBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Timeline of Political Journey */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block font-gujarati">
              {t.aboutPage.timelineBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-gujarati">
              {t.aboutPage.timelineTitle}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l-2 border-saffron-300 space-y-10">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-8 h-8 rounded-full bg-white border-4 border-saffron-500 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-navy-900" />
                </div>

                <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-sm hover:shadow-md transition-all space-y-2">
                  <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-navy-900 text-white">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-navy-900 font-gujarati">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-gujarati">
                    {item.desc[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block font-gujarati">
              {t.aboutPage.valuesBadge}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-gujarati">
              {t.aboutPage.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-card p-6 rounded-2xl border border-sand-200 shadow-xs space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-saffron-100 text-saffron-700 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-navy-900 font-gujarati">
                    {v.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-gujarati">
                    {v.desc[language]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
