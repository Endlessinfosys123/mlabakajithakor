'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  PhoneCall
} from 'lucide-react';

export default function ContactPage() {
  const { language, t } = useLanguage();
  const [appointmentForm, setAppointmentForm] = useState({
    name: '',
    mobile: '',
    purpose: '',
    date: '',
    preferredOffice: 'kalol',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb in English */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span className="text-slate-500">Contact & Office</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            જનસંપર્ક કાર્યાલય અને મુલાકાત (કલોલ)
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl font-gujarati">
            કલોલ શહેર અને ગાંધીનગર સ્થિત કાર્યાલયના સરનામા, હેલ્પલાઇન નંબરો અને રૂબરૂ મુલાકાત માટે સમય નોંધણી.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {siteConfig.offices.map((office, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-lg space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-saffron-gradient text-white flex items-center justify-center shadow-md">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-saffron-600 uppercase tracking-wider block">
                      Official Secretariat {idx + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-navy-900 font-gujarati">
                      {office.name[language]}
                    </h3>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-saffron-600 flex-shrink-0 mt-0.5" />
                    <span className="font-gujarati">{office.address[language]}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <span>{office.timing[language]}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="hover:text-saffron-600 transition-colors font-bold">
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-saffron-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons in English */}
              <div className="pt-4 border-t border-sand-200 flex items-center justify-between">
                <a
                  href={`tel:${office.helpline}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-saffron-600 hover:text-saffron-700"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call Helpline</span>
                </a>

                <a
                  href="https://maps.google.com/?q=Town+Hall+Kalol+Gandhinagar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-navy-900 hover:text-saffron-600 transition-colors"
                >
                  View on Google Maps ›
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Form & Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Appointment Request Form in English */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-navy-900">
                  Schedule an Appointment with MLA
                </h3>
                <p className="text-xs text-slate-500 font-gujarati">
                  આપ આપની વિગતો નોંધાવો. કાર્યાલય દ્વારા સમયની પુષ્ટિ માટે આપનો સંપર્ક કરવામાં આવશે.
                </p>
              </div>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Applicant Name"
                        value={appointmentForm.name}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={appointmentForm.mobile}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Preferred Meeting Office *</label>
                      <select
                        value={appointmentForm.preferredOffice}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, preferredOffice: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      >
                        <option value="kalol">Kalol Public Secretariat (Town Hall)</option>
                        <option value="gandhinagar">Gandhinagar MLA Quarters (Sector-21)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={appointmentForm.date}
                        onChange={(e) => setAppointmentForm({ ...appointmentForm, date: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Purpose / Subject of Meeting *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe the purpose of meeting (e.g. village issue, civic work, personal representation)..."
                      value={appointmentForm.purpose}
                      onChange={(e) => setAppointmentForm({ ...appointmentForm, purpose: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Submit Appointment Request</span>
                  </button>
                </form>
              ) : (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">
                    Appointment Request Successfully Registered!
                  </h4>
                  <p className="text-xs text-slate-700">
                    The MLA Secretariat (Kalol) will reach out via mobile within 24 hours to confirm your scheduled slot.
                  </p>
                </div>
              )}

            </div>
          </div>

          {/* Kalol Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-3xl border border-sand-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-base font-bold text-navy-900">
                  Location Map (Google Maps)
                </h4>
                <span className="text-[11px] text-saffron-600 font-bold">Kalol Secretariat</span>
              </div>

              {/* Map Iframe for Kalol Gandhinagar */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-sand-300 bg-slate-200">
                <iframe
                  title="Kalol Office Location"
                  src="https://maps.google.com/maps?q=Kalol+Gandhinagar+Gujarat&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="text-xs text-slate-600 leading-relaxed font-gujarati">
                📍 <strong>સ્થળ માર્ગદર્શન:</strong> કલોલ ટાઉન હોલની સામે, સ્ટેશન રોડ પર મુખ્ય જનસંપર્ક કાર્યાલય આવેલું છે.
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
