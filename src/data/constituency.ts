export interface VillagePoint {
  id: string;
  name: {
    gu: string;
    hi: string;
    en: string;
  };
  taluka: string;
  x: number; // percentage in map 0-100
  y: number; // percentage in map 0-100
  projectsCount: number;
  fundsSpent: string;
  majorWork: {
    gu: string;
    hi: string;
    en: string;
  };
  population: string;
  waterFacility: boolean;
  schoolUpgrade: boolean;
  roadConnected: boolean;
}

export const constituencyVillages: VillagePoint[] = [
  {
    id: 'kalol-city',
    name: { gu: 'કલોલ શહેર (Kalol HQ)', hi: 'कलोल नगर', en: 'Kalol City (HQ)' },
    taluka: 'કલોલ (ગાંધીનગર)',
    x: 48,
    y: 45,
    projectsCount: 46,
    fundsSpent: '₹84.5 Cr',
    majorWork: {
      gu: 'સબ-ડિસ્ટ્રિક્ટ હોસ્પિટલ અપગ્રેડ, અંડરપાસ / ફ્લાયઓવર રોડ, સ્માર્ટ લાયબ્રેરી અને ગટર લાઇન નવીનીકરણ',
      hi: 'सब-डिवीजनल अस्पताल अपग्रेडेशन, अंडरपास, आधुनिक पुस्तकालय व सीवरेज लाइन',
      en: 'Sub-District Hospital Upgrade, Railway Underpass, Smart Digital Library & Drainage Modernization',
    },
    population: '૧,૪૫,૦૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'chhatral',
    name: { gu: 'છત્રાલ (Chhatral GIDC)', hi: 'छत्राल जीआईडीसी', en: 'Chhatral' },
    taluka: 'કલોલ',
    x: 68,
    y: 32,
    projectsCount: 28,
    fundsSpent: '₹48.2 Cr',
    majorWork: {
      gu: 'ઔદ્યોગિક વિસ્તાર કનેક્ટિવિટી રોડ, ફાયર સ્ટેશન આધુનિકીકરણ અને ગ્રામ્ય તળાવ બ્યુટીફિકેશન',
      hi: 'औद्योगिक संपर्क मार्ग, आधुनिक फायर स्टेशन व ग्रामीण सरोवर सुदृढ़ीकरण',
      en: 'Industrial 4-Lane Access Road, Modern Fire Station & Village Lake Rejuvenation',
    },
    population: '૨૪,૫૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'saij',
    name: { gu: 'સાઇજ (Saij)', hi: 'साइज़', en: 'Saij' },
    taluka: 'કલોલ',
    x: 52,
    y: 65,
    projectsCount: 22,
    fundsSpent: '₹32.6 Cr',
    majorWork: {
      gu: 'નર્મદા પીવાના પાણીની પાઇપલાઇન, પ્રાથમિક આરોગ્ય કેન્દ્ર (PHC) અને સીસી રોડ',
      hi: 'नर्मदा पेयजल पाइपलाइन, नया प्राथमिक स्वास्थ्य केंद्र और सीसी रोड',
      en: 'Narmada Drinking Water Supply Pipeline, Primary Health Centre & CC Roads',
    },
    population: '૧૮,૦૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'borisana',
    name: { gu: 'બોરીસણા (Borisana)', hi: 'बोरीसणा', en: 'Borisana' },
    taluka: 'કલોલ',
    x: 32,
    y: 40,
    projectsCount: 18,
    fundsSpent: '₹26.4 Cr',
    majorWork: {
      gu: 'મોડેલ સરકારી શાળા ભવન, વરસાદી પાણી નિકાલ ગટર અને પેવર બ્લોક સુવિધા',
      hi: 'मॉडल सरकारी शाला भवन, जल निकासी एवं पेवर ब्लॉक सड़क',
      en: 'Model Government High School Building, Stormwater Drain & Street Illumination',
    },
    population: '૧૫,૨૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'khatraj',
    name: { gu: 'ખાત્રજ ચોકડી (Khatraj)', hi: 'खात्रज चौराहा', en: 'Khatraj' },
    taluka: 'કલોલ',
    x: 28,
    y: 68,
    projectsCount: 19,
    fundsSpent: '₹29.8 Cr',
    majorWork: {
      gu: 'ખાત્રજ-કલોલ ફોરલેન હાઇવે જંકશન સુધારો, ટ્રાફિક સર્કલ અને કિસાન સહાય કેન્દ્ર',
      hi: 'खात्रज फोरलेन हाईवे जंक्शन सुधार, ट्रैफिक सर्कल एवं किसान सहायता केंद्र',
      en: 'Khatraj 4-Lane Highway Junction Revamp, High-Mast Solar Lighting & Agri Clinic',
    },
    population: '૧૧,૦૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'veda',
    name: { gu: 'વેડા (Veda)', hi: 'वेड़ा', en: 'Veda' },
    taluka: 'કલોલ',
    x: 75,
    y: 58,
    projectsCount: 14,
    fundsSpent: '₹19.5 Cr',
    majorWork: {
      gu: 'સિંચાઈ નહેર લાઇનિંગ, ગ્રામ પંચાયત આધુનિક ભવન અને પશુ દવાખાનું',
      hi: 'सिंचाई नहर लाइनिंग, नया पंचायत भवन एवं पशु चिकित्सालय',
      en: 'Canal Irrigation Sluice Gate, Modern Panchayat Bhavan & Veterinary Dispensary',
    },
    population: '૮,૪૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'seritha',
    name: { gu: 'સેરીથા (Seritha)', hi: 'सेरीथा', en: 'Seritha' },
    taluka: 'કલોલ',
    x: 62,
    y: 80,
    projectsCount: 12,
    fundsSpent: '₹16.8 Cr',
    majorWork: {
      gu: 'ઓવરહેડ પાણીની ટાંકી, હાઇસ્કૂલ સ્માર્ટ ક્લાસ અને સ્મશાનભૂમિ નવીનીકરણ',
      hi: 'ओवरहेड पानी टंकी, हाईस्कूल स्मार्ट क्लास एवं सामुदायिक शेड',
      en: 'High-Capacity Overhead Water Tank, Smart Classrooms & Community Hall',
    },
    population: '૭,૫૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
  {
    id: 'dingucha',
    name: { gu: 'ડિંગુચા (Dingucha)', hi: 'डिंगुचा', en: 'Dingucha' },
    taluka: 'કલોલ',
    x: 35,
    y: 20,
    projectsCount: 15,
    fundsSpent: '₹21.2 Cr',
    majorWork: {
      gu: 'કૃષિ દિવસે વીજળી સબ-સ્ટેશન, તળાવ રીચાર્જ અને પાકો ડામર રસ્તો',
      hi: 'कृषि दिन में बिजली सब-स्टेशन, तालाब रिचार्ज एवं डामर सड़क',
      en: 'Daytime Agricultural Power Feeder, Lake Recharging & Asphalt Link Road',
    },
    population: '૯,૧૦૦+',
    waterFacility: true,
    schoolUpgrade: true,
    roadConnected: true,
  },
];
