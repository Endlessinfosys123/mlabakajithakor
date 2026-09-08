'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig } from '@/data/config';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  Building2 
} from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800 relative overflow-hidden">
      {/* Decorative top saffron bar */}
      <div className="h-1.5 w-full bg-saffron-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Col 1: Bio & Branding */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-2 ring-saffron-500 shadow-md flex-shrink-0 bg-navy-900">
                <Image
                  src="/images/bakaji-thakor.jpg"
                  alt="MLA Bakaji Thakor"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight font-gujarati">
                  {siteConfig.mlaName[language]}
                </h3>
                <p className="text-xs text-saffron-400 font-medium">
                  MLA - Kalol Assembly (Gandhinagar)
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-gujarati">
              {siteConfig.shortBio[language]}
            </p>

            <div className="pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider block mb-2 font-bold">
                Follow On Social Media
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 hover:border-saffron-500 hover:text-saffron-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 hover:border-saffron-500 hover:text-saffron-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 hover:border-saffron-500 hover:text-saffron-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-navy-900 border border-navy-800 hover:border-saffron-500 hover:text-saffron-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links in English */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-saffron-500" />
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-medium">
              <li>
                <Link href="/" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> About & Bio
                </Link>
              </li>
              <li>
                <Link href="/development" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Development Works
                </Link>
              </li>
              <li>
                <Link href="/schemes" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Govt Schemes
                </Link>
              </li>
              <li>
                <Link href="/grievance" className="text-saffron-400 font-bold hover:text-saffron-300 transition-colors flex items-center gap-1.5">
                  <span className="text-saffron-500">›</span> Jan Sunwai / Grievance
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> News & Media
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Programs & Calendar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-saffron-400 transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Contact & Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Constituency Secretariat in Kalol */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-saffron-500" />
              Kalol Public Secretariat
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-saffron-400 flex-shrink-0 mt-0.5" />
                <span>Opposite Town Hall, Station Road, Kalol, Gandhinagar - 382721</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <span>Monday - Saturday: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${siteConfig.offices[0].phone}`} className="hover:text-white transition-colors">
                  {siteConfig.offices[0].phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.offices[0].email}`} className="hover:text-white transition-colors">
                  {siteConfig.offices[0].email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Assembly Office & Helpline */}
          <div className="space-y-3">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              Assembly Support
            </h4>
            <div className="p-3.5 rounded-xl bg-navy-900 border border-navy-800/80 space-y-2">
              <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold block">
                Constituency Helpline
              </span>
              <a
                href={`tel:${siteConfig.offices[0].helpline}`}
                className="text-lg font-bold text-saffron-400 hover:text-saffron-300 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.offices[0].helpline}
              </a>
              <p className="text-[11px] text-slate-400">
                24x7 Citizen assistance for civic and government issues
              </p>
            </div>

            <div className="text-xs text-slate-400 space-y-1">
              <span className="font-semibold text-slate-300 block">Gandhinagar Secretariat:</span>
              <p className="line-clamp-2">Block No. 5/3, MLA Quarters, Sector-21, Gandhinagar - 382021</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-12 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>All Rights Reserved © 2026 Office of MLA Bakaji Thakor (Kalol, Gandhinagar)</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Kalol Assembly Constituency • Gandhinagar</span>
            <span>•</span>
            <span className="text-slate-400">Digital Citizen Governance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
