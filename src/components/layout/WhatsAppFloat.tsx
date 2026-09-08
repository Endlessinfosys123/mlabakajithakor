'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const presets = [
    {
      label: {
        gu: 'કલોલ વિકાસ કામની રજૂઆત',
        hi: 'कलोल विकास कार्य की मांग',
        en: 'Kalol Constituency Work Request',
      },
      msg: 'નમસ્તે ધારાસભ્યશ્રી બકાજી ઠાકોર કાર્યાલય (કલોલ), મારે અમારા વિસ્તારના વિકાસ કામ / રસ્તા / ગટર અંગે રજૂઆત કરવી છે.',
    },
    {
      label: {
        gu: 'સરકારી યોજના સહાય માહિતી',
        hi: 'सरकारी योजना सहायता जानकारी',
        en: 'Govt Scheme Application Info',
      },
      msg: 'નમસ્તે, મારે સરકારી સહાય યોજના અને ફોર્મ ભરવા અંગે માહિતી મેળવવી છે.',
    },
    {
      label: {
        gu: 'રૂબરૂ મુલાકાત માટે સમય',
        hi: 'व्यक्तिगत भेंट हेतु समय',
        en: 'Request Personal Appointment',
      },
      msg: 'માનનીય ધારાસભ્યશ્રી સાથે રૂબરૂ મુલાકાત (અપોઇન્ટમેન્ટ) માટે સમય લેવો છે.',
    },
  ];

  const handleOpenWhatsApp = (customText?: string) => {
    const textToSend = customText || 'નમસ્તે ધારાસભ્યશ્રી બકાજી ઠાકોર કાર્યાલય, હું કલોલ મતવિસ્તારનો નાગરિક છું.';
    const encoded = encodeURIComponent(textToSend);
    window.open(`https://wa.me/919428012345?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      {/* WhatsApp Dialog Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">MLA Office Helpdesk (Kalol)</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 font-medium font-gujarati">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {language === 'gu' ? '૧૫ મિનિટમાં પ્રતિસાદ' : language === 'hi' ? '१५ मिनट में उत्तर' : 'Typically replies within 15 mins'}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-full hover:bg-emerald-700/50"
              aria-label="Close WhatsApp dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Simulation */}
          <div className="p-4 bg-emerald-50/50 space-y-3 font-gujarati">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-emerald-100/60 text-xs text-slate-800 leading-relaxed">
              <p className="font-medium text-emerald-950 mb-1">
                {language === 'gu' ? 'જય માતાજી / નમસ્તે! 🙏' : language === 'hi' ? 'जय माताजी / नमस्ते! 🙏' : 'Namaste / Greetings! 🙏'}
              </p>
              {language === 'gu'
                ? 'ધારાસભ્ય બકાજી ઠાકોર કાર્યાલય (કલોલ) માં આપનું સ્વાગત છે. આપ નીચેનામાંથી વિષય પસંદ કરી વોટ્સએપ પર સીધો મેસેજ કરી શકો છો:'
                : language === 'hi'
                ? 'विधायक बकाजी ठाकोर कार्यालय (कलोल) में आपका स्वागत है। आप विषय चुनकर सीधे व्हाट्सएप पर संदेश भेज सकते हैं:'
                : 'Welcome to MLA Bakaji Thakor Office (Kalol). Choose an inquiry subject below to begin a direct WhatsApp conversation:'}
            </div>

            {/* Quick Prompt Options */}
            <div className="space-y-1.5 pt-1">
              {presets.map((preset, index) => (
                <button
                  key={index}
                  onClick={() => handleOpenWhatsApp(preset.msg)}
                  className="w-full text-left p-2.5 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-xs font-medium text-slate-800 transition-all flex items-center justify-between group shadow-2xs font-gujarati"
                >
                  <span className="line-clamp-1">{preset.label[language]}</span>
                  <Send className="w-3.5 h-3.5 text-emerald-600 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                </button>
              ))}
            </div>

            {/* Action Button */}
            <button
              onClick={() => handleOpenWhatsApp()}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-sm font-gujarati"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {language === 'gu' ? 'વોટ્સએપ ચેટ શરૂ કરો' : language === 'hi' ? 'व्हाट्सएप चैट शुरू करें' : 'Start WhatsApp Chat'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 px-3.5 py-3 sm:py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Contact MLA Office on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-emerald-600" />
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline-block font-bold text-xs tracking-wide font-gujarati">
          {language === 'gu' ? 'વોટ્સએપ હેલ્પલાઇન' : language === 'hi' ? 'व्हाट्सएप हेल्पलाइन' : 'WhatsApp Helpline'}
        </span>
      </button>
    </div>
  );
}
