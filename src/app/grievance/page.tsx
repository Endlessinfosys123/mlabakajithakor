'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { constituencyVillages } from '@/data/constituency';
import { GrievanceTicket } from '@/types';
import { 
  CheckCircle2, 
  Clock, 
  Send, 
  Search, 
  UploadCloud, 
  PhoneCall, 
  MapPin,
  ArrowRight
} from 'lucide-react';

export default function GrievancePage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'new' | 'track'>('new');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: '',
    category: 'water',
    description: '',
  });
  const [submittedTicket, setSubmittedTicket] = useState<GrievanceTicket | null>(null);

  // Tracking State
  const [trackTokenInput, setTrackTokenInput] = useState('');
  const [trackedTicket, setTrackedTicket] = useState<GrievanceTicket | null>(null);
  const [trackError, setTrackError] = useState('');

  // Default sample ticket for immediate demonstration in Kalol
  const sampleTicket: GrievanceTicket = {
    ticketId: 'BT-2026-4891',
    name: 'પટેલ મહેશભાઈ ઈશ્વરલાલ',
    mobile: '98250 12345',
    village: 'કલોલ શહેર (Kalol City - Ward 4)',
    category: 'રોડ, ગટર & વરસાદી પાણી નિકાલ (Road & Drainage)',
    description: 'સ્ટેશન રોડ નજીક આવેલ સોસાયટી પાસે વરસાદી પાણીના નિકાલ માટે ભૂગર્ભ ગટર લાઈનની સફાઈ અને નવા ઢાંકણા લગાવવા બાબત.',
    submittedAt: '૨ માર્ચ ૨૦૨૫, ૧૦:૩૦ AM',
    status: 'officer_assigned',
    remarks: 'ધારાસભ્ય સચિવાલય દ્વારા ચીફ ઓફિસર (કલોલ નગરપાલિકા) ને સ્થળ તપાસ કરી તાકીદે કાર્યવાહી કરવા લેખિત આદેશ આપવામાં આવ્યો છે.',
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || formData.mobile.length < 10) {
      alert('Please enter a valid applicant name and 10-digit mobile number.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicketId = `BT-2026-${randomNum}`;

    const newTicket: GrievanceTicket = {
      ticketId: newTicketId,
      name: formData.name,
      mobile: formData.mobile,
      village: formData.village || 'કલોલ',
      category: formData.category,
      description: formData.description,
      submittedAt: 'Today, Just now',
      status: 'received',
      remarks: 'Application logged at MLA Secretariat (Kalol). Dispatched to designated administrative wing for verification.',
    };

    setSubmittedTicket(newTicket);
    setTrackedTicket(newTicket);
    setTrackTokenInput(newTicketId);

    if (typeof window !== 'undefined') {
      localStorage.setItem(newTicketId, JSON.stringify(newTicket));
    }
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrackError('');
    
    const cleanToken = trackTokenInput.trim().toUpperCase();
    if (!cleanToken) {
      setTrackError('Please enter a valid tracking token number.');
      return;
    }

    if (cleanToken === 'BT-2026-4891') {
      setTrackedTicket(sampleTicket);
      return;
    }

    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(cleanToken);
      if (saved) {
        setTrackedTicket(JSON.parse(saved));
        return;
      }
    }

    if (cleanToken.startsWith('BT-')) {
      setTrackedTicket({
        ticketId: cleanToken,
        name: 'નાગરિક અરજદાર',
        mobile: '૯૪૨૮૦ XXXXX',
        village: 'કલોલ વિધાનસભા વિસ્તાર',
        category: 'સ્થાનિક રજૂઆત',
        description: 'વિસ્તારના જાહેર માર્ગ અને પીવાના પાણી બાબત રજૂઆત.',
        submittedAt: '૪ માર્ચ ૨૦૨૫',
        status: 'under_review',
        remarks: 'અરજી તાલુકા વિકાસ અધિકારી (TDO કલોલ) ને આગળની કાર્યવાહી અર્થે અગ્રતાથી મોકલેલ છે.',
      });
    } else {
      setTrackError('Token not found. Please try BT-2026-4891 or enter your registered token.');
    }
  };

  return (
    <div className="bg-sand-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-bold text-saffron-600">
            <Link href="/" className="hover:underline">
              {language === 'gu' ? 'મુખ્ય પૃષ્ઠ' : language === 'hi' ? 'मुख्य पृष्ठ' : 'Home'}
            </Link>
            <span>/</span>
            <span className="text-slate-500">
              {language === 'gu' ? 'જન સુનાવણી / ફરિયાદ' : language === 'hi' ? 'जन सुनवाई / शिकायत' : 'Jan Sunwai / Grievance'}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-gujarati">
            {language === 'gu'
              ? 'જન સુનાવણી • સીધી ફરિયાદ & રજૂઆત (કલોલ)'
              : language === 'hi'
              ? 'जन सुनवाई • प्रत्यक्ष शिकायत व निवारण (कलोल)'
              : 'Public Grievance Redressal Portal • Kalol'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed font-gujarati">
            {language === 'gu'
              ? 'કલોલ મતવિસ્તારના કોઈપણ નાગરિક પોતાની સમસ્યા, ગામ કે વોર્ડની રજૂઆત સીધી ધારાસભ્ય કાર્યાલય સુધી પહોંચાડી શકે છે. પ્રત્યેક અરજી પર સીધી દેખરેખ રાખવામાં આવે છે.'
              : language === 'hi'
              ? 'कलोल विधानसभा क्षेत्र के नागरिक अपनी समस्या, गांव या वार्ड की शिकायत सीधे विधायक कार्यालय तक पहुंचा सकते हैं। प्रत्येक अर्जी की सक्रिय निगरानी की जाती है।'
              : 'Every citizen of Kalol constituency can submit grievances directly to MLA Secretariat. All petitions are actively tracked with assigned nodal officers.'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center border-b border-sand-300">
          <button
            onClick={() => { setActiveTab('new'); setSubmittedTicket(null); }}
            className={`pb-3 px-6 text-sm sm:text-base font-bold transition-all relative ${
              activeTab === 'new'
                ? 'text-saffron-600 border-b-2 border-saffron-600'
                : 'text-slate-600 hover:text-navy-900'
            }`}
          >
            {t.grievance.tabNew}
          </button>
          <button
            onClick={() => setActiveTab('track')}
            className={`pb-3 px-6 text-sm sm:text-base font-bold transition-all relative ${
              activeTab === 'track'
                ? 'text-saffron-600 border-b-2 border-saffron-600'
                : 'text-slate-600 hover:text-navy-900'
            }`}
          >
            {t.grievance.tabTrack}
          </button>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Action Area (8 cols) */}
          <div className="lg:col-span-8">
            
            {activeTab === 'new' ? (
              !submittedTicket ? (
                <form
                  onSubmit={handleFormSubmit}
                  className="glass-card p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-6"
                >
                  <div className="space-y-1 pb-4 border-b border-sand-200">
                    <h3 className="text-xl font-bold text-navy-900">
                      {t.grievance.formTitle}
                    </h3>
                    <p className="text-xs text-slate-500 font-gujarati">
                      {t.grievance.formSubtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {t.grievance.formName}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.grievance.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {t.grievance.formMobile}
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder={t.grievance.mobilePlaceholder}
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      />
                    </div>

                    {/* Village / Area in Kalol */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {t.grievance.formVillage}
                      </label>
                      <select
                        value={formData.village}
                        onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      >
                        <option value="">{t.grievance.selectArea}</option>
                        {constituencyVillages.map((v) => (
                          <option key={v.id} value={v.name[language]}>
                            {v.name[language]} ({v.taluka})
                          </option>
                        ))}
                        <option value="Kalol City Other Ward">{t.grievance.otherWard}</option>
                        <option value="Kalol Rural Area">{t.grievance.otherRural}</option>
                      </select>
                    </div>

                    {/* Category */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        {t.grievance.formCategory}
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm"
                      >
                        <option value="Drinking Water & Canal Pipeline">{t.grievance.catWater}</option>
                        <option value="Roads, Pavement & Overbridge">{t.grievance.catRoads}</option>
                        <option value="Electricity & Agricultural Power Feeder">{t.grievance.catPower}</option>
                        <option value="Health & Government Hospital">{t.grievance.catHealth}</option>
                        <option value="School, Education & Anganwadi">{t.grievance.catEdu}</option>
                        <option value="Govt Scheme Benefits & Pension">{t.grievance.catPension}</option>
                        <option value="Drainage & Sanitation">{t.grievance.catDrainage}</option>
                        <option value="Other Civic Grievance">{t.grievance.catOther}</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {t.grievance.formDescription}
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.grievance.descPlaceholder}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm leading-relaxed"
                    />
                  </div>

                  {/* File Mock */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      {t.grievance.formPhoto}
                    </label>
                    <div className="p-4 rounded-xl border-2 border-dashed border-sand-300 bg-sand-50 text-center space-y-2 hover:border-saffron-400 transition-colors cursor-pointer">
                      <UploadCloud className="w-8 h-8 text-slate-400 mx-auto" />
                      <div className="text-xs text-slate-600">
                        <span className="font-bold text-saffron-600">{t.grievance.clickUpload}</span> {t.grievance.dragDrop}
                      </div>
                      <p className="text-[11px] text-slate-400">
                        {t.grievance.fileFormats}
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-saffron-gradient hover:bg-saffron-600 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-saffron-glow transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.grievance.submitBtn}</span>
                  </button>
                </form>
              ) : (
                /* SUCCESS CONFIRMATION SCREEN */
                <div className="glass-card p-8 sm:p-10 rounded-3xl border border-emerald-200 shadow-xl space-y-6 text-center animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-navy-900">
                      {t.grievance.successTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-gujarati">
                      {t.grievance.successDesc}
                    </p>
                  </div>

                  {/* Generated Token Pill */}
                  <div className="p-4 rounded-2xl bg-saffron-50 border border-saffron-300 max-w-sm mx-auto space-y-1">
                    <span className="text-xs font-bold text-saffron-800 uppercase tracking-wider block">
                      {t.grievance.yourToken}
                    </span>
                    <span className="text-3xl font-black text-navy-900 font-heading tracking-wider">
                      {submittedTicket.ticketId}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={() => setActiveTab('track')}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-navy-900 text-white text-xs sm:text-sm font-bold shadow hover:bg-navy-800 transition-colors"
                    >
                      {t.grievance.trackNow}
                    </button>
                    <button
                      onClick={() => { setSubmittedTicket(null); setFormData({ name: '', mobile: '', village: '', category: 'water', description: '' }); }}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sand-100 text-navy-900 text-xs sm:text-sm font-bold hover:bg-sand-200 transition-colors"
                    >
                      {t.grievance.submitAnother}
                    </button>
                  </div>
                </div>
              )
            ) : (
              /* TAB 2: TRACK STATUS */
              <div className="space-y-6">
                <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-5">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-navy-900">
                      {t.grievance.trackBoxTitle}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {t.grievance.sampleHint} (
                      <span className="text-saffron-600 cursor-pointer underline font-bold" onClick={() => setTrackTokenInput('BT-2026-4891')}>
                        BT-2026-4891
                      </span>)
                    </p>
                  </div>

                  <form onSubmit={handleTrackSubmit} className="flex gap-2">
                    <div className="relative flex-grow">
                      <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t.grievance.enterToken}
                        value={trackTokenInput}
                        onChange={(e) => setTrackTokenInput(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-sand-300 focus:outline-none focus:ring-2 focus:ring-saffron-500 text-sm font-semibold uppercase tracking-wider"
                      />
                    </div>
                    {/* Track Button */}
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-bold text-sm shadow transition-colors flex-shrink-0"
                    >
                      {t.grievance.trackBtn}
                    </button>
                  </form>

                  {trackError && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {trackError}
                    </div>
                  )}
                </div>

                {/* Tracked Ticket Stepper */}
                {trackedTicket && (
                  <div className="glass-card p-6 sm:p-8 rounded-3xl border border-sand-200 shadow-xl space-y-6 animate-in fade-in duration-300">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-sand-200 gap-2">
                      <div>
                        <span className="text-xs text-saffron-600 font-bold block">
                          {t.grievance.tokenLabel}: {trackedTicket.ticketId}
                        </span>
                        <h4 className="text-lg font-bold text-navy-900 font-gujarati">
                          {trackedTicket.name} ({trackedTicket.village})
                        </h4>
                      </div>
                      <span className="text-xs text-slate-500">
                        {t.grievance.loggedLabel}: {trackedTicket.submittedAt}
                      </span>
                    </div>

                    <div className="space-y-4 pt-2">
                      <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        {t.grievance.stepperTitle}
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1">
                          <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>1. {t.grievance.step1}</span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            {t.grievance.step1Sub}
                          </p>
                        </div>

                        <div className={`p-3 rounded-xl border space-y-1 ${
                          trackedTicket.status !== 'received'
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-sand-100 border-sand-200 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>2. {t.grievance.step2}</span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            {t.grievance.step2Sub}
                          </p>
                        </div>

                        <div className={`p-3 rounded-xl border space-y-1 ${
                          trackedTicket.status === 'officer_assigned' || trackedTicket.status === 'resolved'
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-sand-100 border-sand-200 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>3. {t.grievance.step3}</span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            {t.grievance.step3Sub}
                          </p>
                        </div>

                        <div className={`p-3 rounded-xl border space-y-1 ${
                          trackedTicket.status === 'resolved'
                            ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                            : 'bg-sand-100 border-sand-200 text-slate-500'
                        }`}>
                          <div className="flex items-center gap-1.5 font-bold">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>4. {t.grievance.step4}</span>
                          </div>
                          <p className="text-[11px] text-slate-600">
                            {t.grievance.step4Sub}
                          </p>
                        </div>
                      </div>
                    </div>

                    {trackedTicket.remarks && (
                      <div className="p-4 rounded-2xl bg-white border border-sand-200 space-y-1 font-gujarati">
                        <span className="text-xs font-bold text-navy-900 block">
                          {t.grievance.officeRemark}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          {trackedTicket.remarks}
                        </p>
                      </div>
                    )}

                  </div>
                )}
              </div>
            )}

          </div>

          {/* Right Sidebar: Helpline in Kalol (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="glass-card p-6 rounded-3xl border border-sand-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-saffron-100 text-saffron-700 flex items-center justify-center">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-navy-900">
                  {t.grievance.telephoneHelp}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed font-gujarati">
                  {t.grievance.telephoneHelpDesc}
                </p>
              </div>

              {/* Helpline button */}
              <a
                href={`tel:${siteConfig.offices[0].helpline}`}
                className="w-full py-3 px-4 rounded-xl bg-saffron-gradient text-white text-sm font-bold flex items-center justify-center gap-2 shadow-sm hover:bg-saffron-600 transition-colors"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{t.grievance.callHelplineBtn}</span>
              </a>
            </div>

            {/* In-person Kalol Office */}
            <div className="glass-card p-6 rounded-3xl border border-sand-200 shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-100 text-navy-900 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="space-y-2 text-xs text-slate-700">
                <h4 className="text-base font-bold text-navy-900">
                  {t.grievance.officeCardTitle}
                </h4>
                <p className="font-semibold text-saffron-800">
                  {siteConfig.offices[0].name[language]}
                </p>
                <p className="text-slate-600 font-gujarati">
                  {siteConfig.offices[0].address[language]}
                </p>
                <div className="pt-2 flex items-center gap-2 text-slate-500 font-medium">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span>{t.grievance.officeHoursTiming}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
