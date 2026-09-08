'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { 
  AlertCircle, 
  FileText, 
  Sprout, 
  GraduationCap, 
  Calendar, 
  HeartHandshake,
  ArrowRight
} from 'lucide-react';

export default function QuickServices() {
  const { language, t } = useLanguage();

  const services = [
    {
      title: {
        gu: 'ઓનલાઇન જન સુનાવણી',
        hi: 'ऑनलाइन जन सुनवाई',
        en: 'Online Jan Sunwai',
      },
      desc: {
        gu: 'પાણી, રસ્તા કે લાઈટની ફરિયાદ નોંધાવો અને ટોકન નંબરથી સ્ટેટસ ટ્રૅક કરો.',
        hi: 'पानी, सड़क या बिजली की शिकायत दर्ज कर टोकन से स्थिति ट्रैक करें।',
        en: 'Register public grievances and track resolution status in real-time.',
      },
      href: '/grievance',
      icon: AlertCircle,
      badge: '24/7 Active',
    },
    {
      title: {
        gu: 'સરકારી યોજનાઓ & ફોર્મ્સ',
        hi: 'सरकारी योजनाएं एवं फॉर्म',
        en: 'Govt Schemes & Forms',
      },
      desc: {
        gu: 'આયુષ્માન કાર્ડ, નમો લક્ષ્મી, પીએમ કિસાન યોજનાની પાત્રતા અને ફોર્મ ડાઉનલોડ.',
        hi: 'आयुष्मान कार्ड, नमो लक्ष्मी, किसान सम्मान निधि फॉर्म डाउनलोड।',
        en: 'Check scheme eligibility criteria and download application forms.',
      },
      href: '/schemes',
      icon: FileText,
      badge: 'Assistance',
    },
    {
      title: {
        gu: 'ખેડૂત મિત્ર સહાયતા ડેસ્ક',
        hi: 'किसान मित्र सहायता डेस्क',
        en: 'Farmers Assistance Desk',
      },
      desc: {
        gu: 'નર્મદા સિંચાઈ પાણી, પાક નુકસાની સહાય અને સોલાર પંપ સબસિડીનું માર્ગદર્શન.',
        hi: 'नर्मदा सिंचाई जल, फसल नुकसान सहायता व सोलर पंप सब्सिडी मार्गदर्शन।',
        en: 'Guidance on Narmada water schedules, crop compensation, and solar subsidies.',
      },
      href: '/contact',
      icon: Sprout,
      badge: 'Agri Help',
    },
    {
      title: {
        gu: 'યુવા કેળવણી & લાયબ્રેરી',
        hi: 'युवा शिक्षा एवं पुस्तकालय',
        en: 'Youth Education & Library',
      },
      desc: {
        gu: 'GPSC, ગૌણ સેવા અને પોલીસ ભરતી માટે કલોલ સેન્ટ્રલ લાયબ્રેરીમાં મફત પુસ્તકો.',
        hi: 'प्रतियोगी परीक्षाओं हेतु कलोल लाइब्रेरी में निःशुल्क अध्ययन कक्ष।',
        en: 'Free study halls and reference material for competitive government exams in Kalol.',
      },
      href: '/development',
      icon: GraduationCap,
      badge: 'Youth Desk',
    },
    {
      title: {
        gu: 'ધારાસભ્યશ્રી સાથે મુલાકાત',
        hi: 'विधायक जी से भेंट',
        en: 'Request Appointment',
      },
      desc: {
        gu: 'કલોલ કાર્યાલય અથવા ગાંધીનગર ખાતે રૂબરૂ મળવા માટે અગાઉથી સમય નોંધાવો.',
        hi: 'कलोल कार्यालय या गांधीनगर में व्यक्तिगत मुलाकात हेतु अग्रिम समय प्राप्त करें।',
        en: 'Schedule a personal meeting at the Kalol or Gandhinagar office.',
      },
      href: '/contact',
      icon: Calendar,
      badge: 'Meeting',
    },
    {
      title: {
        gu: 'માતા-બહેનો & વડીલ પેન્શન',
        hi: 'महिला एवं वरिष्ठ जन पेंशन',
        en: 'Senior & Widow Pension',
      },
      desc: {
        gu: 'ગંગા સ્વરૂપા વિધવા સહાય, વૃદ્ધ પેન્શન અને દિવ્યાંગ સાધન સહાયતા.',
        hi: 'गंगा स्वरूपा सहायता, वृद्धावस्था पेंशन एवं दिव्यांग सहायता।',
        en: 'Support for monthly pensions and disability welfare assistance.',
      },
      href: '/schemes',
      icon: HeartHandshake,
      badge: 'Social Care',
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-saffron-600 bg-saffron-50 px-3 py-1 rounded-full border border-saffron-200 inline-block font-gujarati">
            નાગરિક સુવિધા કેન્દ્ર • કલોલ વિધાનસભા
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            {t.home.quickServicesTitle}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-gujarati">
            કલોલ શહેર અને ગ્રામ્ય નાગરિકોની રોજિંદી જરૂરિયાતો અને સરકારી કામકાજ માટે એક જ સ્થળે તમામ સહાય
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                href={item.href}
                className="glass-card p-6 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-sand-200 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-saffron-50 text-saffron-600 group-hover:bg-saffron-gradient group-hover:text-white transition-all duration-300 flex items-center justify-center shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-sand-100 px-2.5 py-1 rounded-full border border-sand-200">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-navy-900 group-hover:text-saffron-600 transition-colors mb-1.5 font-gujarati">
                      {item.title[language]}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-gujarati">
                      {item.desc[language]}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-sand-100 flex items-center justify-between text-xs font-bold text-saffron-600 group-hover:text-saffron-700">
                  <span>Access Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
