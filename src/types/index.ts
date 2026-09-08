export type Language = 'gu' | 'hi' | 'en';

export interface TranslationStrings {
  [key: string]: string | Record<string, string>;
}

export interface ProjectItem {
  id: string;
  title: {
    gu: string;
    hi: string;
    en: string;
  };
  category: 'water' | 'roads' | 'health' | 'education' | 'energy' | 'community';
  location: {
    village: string;
    taluka: string;
  };
  budget: string;
  year: string;
  status: 'completed' | 'ongoing' | 'sanctioned';
  description: {
    gu: string;
    hi: string;
    en: string;
  };
  beneficiariesCount: string;
  image: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  highlights: {
    gu: string[];
    hi: string[];
    en: string[];
  };
}

export interface SchemeItem {
  id: string;
  title: {
    gu: string;
    hi: string;
    en: string;
  };
  department: {
    gu: string;
    hi: string;
    en: string;
  };
  targetAudience: ('farmers' | 'women' | 'students' | 'seniors' | 'youth' | 'all')[];
  benefit: {
    gu: string;
    hi: string;
    en: string;
  };
  eligibility: {
    gu: string[];
    hi: string[];
    en: string[];
  };
  documentsRequired: {
    gu: string[];
    hi: string[];
    en: string[];
  };
  applicationLink: string;
  pdfDownloadUrl?: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  title: {
    gu: string;
    hi: string;
    en: string;
  };
  date: string;
  source: string;
  summary: {
    gu: string;
    hi: string;
    en: string;
  };
  content?: {
    gu: string;
    hi: string;
    en: string;
  };
  category: 'press' | 'speech' | 'assembly' | 'development';
  image: string;
  link?: string;
}

export interface EventItem {
  id: string;
  title: {
    gu: string;
    hi: string;
    en: string;
  };
  date: string;
  time: string;
  location: {
    gu: string;
    hi: string;
    en: string;
  };
  type: 'jandarbar' | 'inauguration' | 'assembly' | 'campaign' | 'office';
  description: {
    gu: string;
    hi: string;
    en: string;
  };
  status: 'upcoming' | 'completed';
}

export interface GrievanceTicket {
  ticketId: string;
  name: string;
  mobile: string;
  village: string;
  category: string;
  description: string;
  submittedAt: string;
  status: 'received' | 'under_review' | 'officer_assigned' | 'resolved';
  remarks?: string;
}
