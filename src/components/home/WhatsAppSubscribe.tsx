'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { MessageCircle, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhatsAppSubscribe() {
  const { language, t } = useLanguage();
  const [subscribed, setSubscribed] = useState(false);

  const handleDirectWhatsApp = () => {
    window.open(siteConfig.socials.whatsapp, '_blank');
  };

  return (
    <section className="py-14 bg-gradient-to-br from-emerald-800 via-emerald-900 to-navy-950 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 mx-auto flex items-center justify-center text-emerald-300 shadow-xl">
            <MessageCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-gujarati">
              {t.home.whatsAppSignupTitle}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/80 max-w-xl mx-auto leading-relaxed font-gujarati">
              કલોલ શહેર અને ગ્રામ્ય વિકાસ કામો, નવી સરકારી યોજનાઓની જાહેરાત અને ધારાસભ્યશ્રીના પ્રવાસ કાર્યક્રમની સત્તાવાર માહિતી સીધી આપના ફોન પર મેળવો.
            </p>
          </div>

          {!subscribed ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
              <button
                type="button"
                onClick={handleDirectWhatsApp}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-sm shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-navy-950" />
                <span>Join Official WhatsApp Channel</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="p-4 rounded-xl bg-white/10 border border-emerald-400/40 text-emerald-200 text-sm font-semibold max-w-md mx-auto flex items-center justify-center gap-2 font-gujarati">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span>આપનું નામ સફળતાપૂર્વક યાદીમાં જોડાઈ ગયું છે! આપનો આભાર.</span>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 text-xs text-emerald-200/60 pt-2">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" /> No Spam • Verified Updates
            </span>
            <span>•</span>
            <span>100% Free Citizen Service</span>
          </div>

        </div>
      </div>
    </section>
  );
}
