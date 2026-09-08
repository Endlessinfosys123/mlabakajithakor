import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import StatsCounter from '@/components/home/StatsCounter';
import LeadershipQuote from '@/components/home/LeadershipQuote';
import FeaturedWorks from '@/components/home/FeaturedWorks';
import ConstituencyMapVisual from '@/components/home/ConstituencyMapVisual';
import QuickServices from '@/components/home/QuickServices';
import NewsStrip from '@/components/home/NewsStrip';
import UpcomingEventsTeaser from '@/components/home/UpcomingEventsTeaser';
import WhatsAppSubscribe from '@/components/home/WhatsAppSubscribe';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsCounter />
      <LeadershipQuote />
      <FeaturedWorks />
      <ConstituencyMapVisual />
      <QuickServices />
      <NewsStrip />
      <UpcomingEventsTeaser />
      <WhatsAppSubscribe />
    </div>
  );
}
