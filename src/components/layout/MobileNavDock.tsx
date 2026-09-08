'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Briefcase, 
  FileCheck2, 
  AlertCircle, 
  Phone 
} from 'lucide-react';

export default function MobileNavDock() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/development', label: 'Works', icon: Briefcase },
    { href: '/grievance', label: 'Grievance', icon: AlertCircle, highlight: true },
    { href: '/schemes', label: 'Schemes', icon: FileCheck2 },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <nav 
      className="xl:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-sand-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] px-2 py-1.5"
      aria-label="Mobile Bottom Navigation"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 gap-1 items-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.highlight) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center justify-center -mt-4 group focus:outline-none"
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform active:scale-95 ${
                  isActive 
                    ? 'bg-navy-900 text-gold-400 ring-4 ring-saffron-200' 
                    : 'bg-saffron-gradient text-white ring-2 ring-white'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-saffron-700 mt-0.5 tracking-tight text-center line-clamp-1">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 rounded-lg transition-colors ${
                isActive 
                  ? 'text-saffron-600 font-bold' 
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`} />
              <span className="text-[11px] font-semibold leading-none tracking-tight">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
