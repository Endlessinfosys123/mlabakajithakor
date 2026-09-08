# MLA Bakaji Thakor — Official Citizen Portal & Website

A state-of-the-art, mobile-first, and dignified official leadership website for **MLA Bakaji Thakor** (Gujarat Legislative Assembly).

Built with **Next.js 14+ (App Router)**, **TypeScript**, **Tailwind CSS**, and optimized for fast performance on rural mobile devices across Gujarat.

---

## Key Features

1. **Tri-lingual Engine (ગુજરાતી | हिन्दी | English)**
   - Native **Gujarati** by default with smooth instant toggling to **Hindi** and **English** via `LanguageContext`.
   - All navigation, headlines, buttons, and form labels dynamically adapt.

2. **Asymmetric Hero Section**
   - Dignified leader portrait card with active session badge, live citizen counter, and direct grievance call-to-actions.

3. **Jan Sunwai / Grievance Redressal Portal (`/grievance`)**
   - Full citizen complaint registration form with village selector and photo attachment simulation.
   - Generates unique tracking tokens (e.g. `BT-2026-4891`).
   - Step-by-step progress tracking stepper (Received ➔ Under Review ➔ Official Assigned ➔ Resolved).

4. **Interactive Constituency Development Map (`/development`)**
   - Village locator showing development figures, funds spent, and status for Chanasma, Dhinoj, Ranasan, Pimpal, Selavi, Mitha, etc.
   - Filterable projects directory with before-after comparisons and modal detail sheets.

5. **Government Schemes Directory (`/schemes`)**
   - Comprehensive guidelines for PM-KISAN, Mukhyamantri Kisan Sahay, Ayushman Bharat (MA Amrutam), Namo Lakshmi, PM Surya Ghar (Solar Rooftop), and PMAY housing.
   - Includes eligibility checklists and required document breakdowns.

6. **Media, Calendar & Office Contact**
   - Press coverage, Vidhan Sabha speeches, and interactive photo gallery with lightbox modal.
   - Public programs calendar and Jan Darbar timetable.
   - Office addresses (Chanasma & Gandhinagar), helpline numbers, Google Maps integration, and an appointment booking form.

7. **Mobile-First & Rural Accessible**
   - Dedicated thumb-accessible bottom navigation dock on smartphones.
   - Floating WhatsApp click-to-chat with preset Gujarati conversation prompts.

---

## How to Customize

### 1. Update Personal & Constituency Details
Edit `src/data/config.ts`:
```typescript
export const siteConfig = {
  mlaName: {
    gu: 'બકાજી ઠાકોર',
    hi: 'बकाजी ठाकोर',
    en: 'Bakaji Thakor',
  },
  constituency: {
    gu: 'ચાણસ્મા - પાટણ જિલ્લો',
    hi: 'चाणस्मा - पाटण जिला',
    en: 'Chanasma - Patan District',
  },
  offices: [ ... ], // Add or update phone numbers & addresses
  socials: { ... }, // Add Twitter, Facebook, YouTube, WhatsApp links
};
```

### 2. Update Color Palette & Branding
Edit `tailwind.config.ts`:
- Change `saffron.accent` (`#E25822`) to your party/campaign shade.
- Change `navy.deep` (`#0B132B`) for background tone.
- Change `gold.accent` (`#D4AF37`) for metallic badges.

### 3. Add or Modify Development Projects & Schemes
- Development projects: Edit `src/data/projects.ts`
- Government schemes: Edit `src/data/schemes.ts`
- News & Press: Edit `src/data/news.ts`
- Events & Meetings: Edit `src/data/events.ts`

---

## Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Production Build
```bash
npm run build
npm start
```
