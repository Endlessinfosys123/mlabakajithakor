import { SchemeItem } from '../types';

export const schemesData: SchemeItem[] = [
  {
    id: 'scheme-1',
    title: {
      gu: 'મુખ્યમંત્રી કિસાન સહાય યોજના (ગુજરાત સરકાર)',
      hi: 'मुख्यमंत्री किसान सहाय योजना (गुजरात सरकार)',
      en: 'Mukhyamantri Kisan Sahay Yojana (Govt of Gujarat)',
    },
    department: {
      gu: 'કૃષિ, ખેડૂત કલ્યાણ અને સહકાર વિભાગ',
      hi: 'कृषि एवं किसान कल्याण विभाग',
      en: 'Department of Agriculture & Farmers Welfare',
    },
    targetAudience: ['farmers'],
    benefit: {
      gu: 'કુદરતી આપત્તિ, અનાવૃષ્ટિ કે વધુ વરસાદ સમયે ખેડૂતોને કોઈપણ પ્રીમિયમ વગર સીધી આર્થિક સહાય (હેક્ટર દીઠ રૂ. ૨૦,૦૦૦ થી ૨૫,૦૦૦).',
      hi: 'प्राकृतिक आपदा, बेमौसम बारिश या सूखे के समय किसानों को बिना किसी प्रीमियम के सीधे बैंक खाते में वित्तीय सहायता।',
      en: 'Zero-premium crop risk assistance of up to ₹25,000 per hectare directly deposited via DBT in case of natural calamities.',
    },
    eligibility: {
      gu: ['જમીન ધારક તમામ ખેડૂતો (૮-અ અને ૭/૧૨ ધરાવતા)', 'વન અધિકાર પત્ર ધારક ખેડૂતો પણ પાત્ર'],
      hi: ['जमीन धारक सभी किसान (७/१२ एवं ८-अ धारक)', 'वन अधिकार पट्टा धारक भी पात्र'],
      en: ['All registered landholder farmers holding 7/12 & 8-A', 'Forest rights patta holders also eligible'],
    },
    documentsRequired: {
      gu: ['૭/૧૨ અને ૮-અ ની નકલ', 'આધાર કાર્ડ', 'બેંક પાસબુક નકલ / કેન્સલ ચેક', 'મોબાઇલ નંબર'],
      hi: ['७/१२ एवं ८-अ की नकल', 'आधार कार्ड', 'बैंक पासबुक / कैंसल चेक', 'मोबाइल नंबर'],
      en: ['7/12 and 8-A Land records', 'Aadhaar Card', 'Bank passbook copy / cancelled cheque', 'Registered mobile number'],
    },
    applicationLink: 'https://ikhedut.gujarat.gov.in',
    featured: true,
  },
  {
    id: 'scheme-2',
    title: {
      gu: 'આયુષ્માન ભારત - પીએમ જેએવાય (મા અમૃતમ) યોજના',
      hi: 'आयुष्मान भारत - पीएम जेएवाई (मा अमृतम) कार्ड',
      en: 'Ayushman Bharat - PM-JAY (MA Amrutam) Healthcare Card',
    },
    department: {
      gu: 'આરોગ્ય અને પરિવાર કલ્યાણ વિભાગ',
      hi: 'स्वास्थ्य एवं परिवार कल्याण विभाग',
      en: 'Health and Family Welfare Department',
    },
    targetAudience: ['all', 'seniors', 'women'],
    benefit: {
      gu: 'પરિવાર દીઠ વાર્ષિક રૂ. ૧૦ લાખ સુધીની વિનામૂલ્યે ગંભીર બીમારીઓ માટે કેશલેસ હોસ્પિટલ સારવાર અને ઓપરેશન.',
      hi: 'प्रति परिवार वार्षिक रु. १० लाख तक गंभीर बीमारियों का निःशुल्क कैशलेस अस्पताल उपचार एवं ऑपरेशन।',
      en: 'Annual cashless and paperless hospitalization treatment coverage of up to ₹10,00,000 per family across empanelled hospitals.',
    },
    eligibility: {
      gu: ['ગુજરાત રાજ્યના નિયત આવક મર્યાદા અથવા NFSA રેશનકાર્ડ ધરાવતા પરિવારો', '૭૦ વર્ષથી વધુ ઉંમરના તમામ વડીલો માટે વિશેષ આયુષ્માન કવર'],
      hi: ['राशन कार्ड एवं पात्रता सूची में शामिल परिवार', '७० वर्ष से अधिक आयु के सभी वरिष्ठ नागरिकों हेतु विशेष आयुष्मान सुरक्षा'],
      en: ['Families registered under NFSA / SECC criteria', 'All senior citizens aged 70+ irrespective of family income'],
    },
    documentsRequired: {
      gu: ['આધાર કાર્ડ (બધા સભ્યોના)', 'રેશન કાર્ડ', 'મોબાઇલ નંબર (આધાર લિંક)', 'આવકનો દાખલો (જો લાગુ પડતો હોય)'],
      hi: ['आधार कार्ड (परिवार के सभी सदस्यों का)', 'राशन कार्ड', 'आधार लिंक्ड मोबाइल नंबर', 'आय प्रमाण पत्र (यदि लागू हो)'],
      en: ['Aadhaar Cards of all family members', 'Ration Card', 'Aadhaar linked active mobile', 'Income certificate (if applicable)'],
    },
    applicationLink: 'https://beneficiary.nha.gov.in',
    featured: true,
  },
  {
    id: 'scheme-3',
    title: {
      gu: 'નમો લક્ષ્મી યોજના (કન્યા શિક્ષણ પ્રોત્સાહન)',
      hi: 'नमो लक्ष्मी योजना (कन्या शिक्षा प्रोत्साहन)',
      en: 'Namo Lakshmi Scheme (Girls Education Support)',
    },
    department: {
      gu: 'શિક્ષણ વિભાગ, ગુજરાત સરકાર',
      hi: 'शिक्षा विभाग, गुजरात सरकार',
      en: 'Department of Education, Govt of Gujarat',
    },
    targetAudience: ['students', 'women', 'youth'],
    benefit: {
      gu: 'ધોરણ ૯ થી ૧૨ માં અભ્યાસ કરતી દીકરીઓને ૪ વર્ષમાં કુલ રૂ. ૫૦,૦૦૦ ની સીધી સહાય તેમના બેંક ખાતામાં (ડ્રોપઆઉટ અટકાવવા).',
      hi: 'कक्षा ९ से १२ में पढ़ने वाली बेटियों को ४ वर्षों में कुल रु. ५०,००० की प्रत्यक्ष छात्रवृत्ति सहायता।',
      en: 'Financial assistance of ₹50,000 over 4 years (Class 9 to 12) directly deposited to retain girls in secondary & higher secondary schools.',
    },
    eligibility: {
      gu: ['સરકારી, અનુદાનિત અથવા ખાનગી શાળામાં ધોરણ ૯ થી ૧૨ માં અભ્યાસ કરતી વિદ્યાર્થીનીઓ', 'કુટુંબની વાર્ષિક આવક રૂ. ૬ લાખથી ઓછી હોવી જોઈએ'],
      hi: ['सरकारी या अनुदानित शाला में कक्षा ९ से १२ की छात्राएं', 'पारिवारिक वार्षिक आय रु. ६ लाख से कम'],
      en: ['Girls enrolled in Class 9-12 in recognized schools of Gujarat', 'Annual family income less than ₹6,00,000'],
    },
    documentsRequired: {
      gu: ['વિદ્યાર્થીનીનું આધાર કાર્ડ', 'શાળાનું બોનાફાઇડ સર્ટીફિકેટ', 'માતા/પિતાનું બેંક ખાતું', 'આવકનો દાખલો'],
      hi: ['छात्रा का आधार कार्ड', 'शाला का बोनाफाइड प्रमाणपत्र', 'माता/पिता का बैंक खाता', 'आय प्रमाणपत्र'],
      en: ['Student Aadhaar Card', 'School Bonafide Certificate', 'Bank Passbook linked to Aadhaar', 'Family Income Certificate'],
    },
    applicationLink: 'https://digitalgujarat.gov.in',
    featured: true,
  },
  {
    id: 'scheme-4',
    title: {
      gu: 'પીએમ સૂર્ય ઘર - મફત વીજળી યોજના (રૂફટોપ સોલાર)',
      hi: 'पीएम सूर्य घर - मुफ्त बिजली योजना (रूफटॉप सोलर)',
      en: 'PM Surya Ghar - Muft Bijli Yojana (Rooftop Solar Subsidy)',
    },
    department: {
      gu: 'ઊર્જા અને પેટ્રોકેમિકલ્સ વિભાગ',
      hi: 'ऊर्जा विभाग',
      en: 'Ministry of New and Renewable Energy',
    },
    targetAudience: ['all', 'farmers'],
    benefit: {
      gu: 'ધાબા પર સોલાર પેનલ લગાવવા માટે રૂ. ૭૮,૦૦૦ સુધીની સીધી સરકારી સબસિડી અને દર મહિને ૩૦૦ યુનિટ સુધી મફત વીજળી.',
      hi: 'छत पर सोलर पैनल लगाने हेतु रु. ७८,००૦ तक की सीधी सब्सिडी और प्रतिमाह ३०० यूनिट तक मुफ्त बिजली।',
      en: 'Direct central subsidy of up to ₹78,000 for residential solar installations and up to 300 free electricity units per month.',
    },
    eligibility: {
      gu: ['પોતાનું મકાન અને છત ધરાવતા રહેણાંક વીજ ગ્રાહકો', 'વીજ કંપની (UGVCL) નું નિયમિત મીટર કનેક્શન'],
      hi: ['स्वयं का मकान एवं छत धारक उपभोक्ता', 'बिजली वितरण कंपनी का नियमित मीटर'],
      en: ['Residential consumers with own roof/terrace', 'Valid domestic power connection with discom (UGVCL)'],
    },
    documentsRequired: {
      gu: ['વીજળી બિલ (તાજેતરનું)', 'આધાર કાર્ડ', 'બેંક પાસબુક', 'છતનો ફોટો'],
      hi: ['बिजली बिल', 'आधार कार्ड', 'बैंक खाता विवरण', 'छत की फोटो'],
      en: ['Latest electricity bill', 'Aadhaar Card', 'Bank account details', 'Terrace/Roof photo'],
    },
    applicationLink: 'https://pmsuryaghar.gov.in',
  },
  {
    id: 'scheme-5',
    title: {
      gu: 'પ્રધાનમંત્રી આવાસ યોજના (ગ્રામીણ) - પાકું મકાન સહાય',
      hi: 'प्रधानमंत्री आवास योजना (ग्रामीण) - पक्का मकान सहायता',
      en: 'Pradhan Mantri Awas Yojana (PMAY Gramin Housing)',
    },
    department: {
      gu: 'ગ્રામ વિકાસ વિભાગ, ગુજરાત',
      hi: 'ग्रामीण विकास विभाग',
      en: 'Rural Development Department',
    },
    targetAudience: ['all', 'seniors'],
    benefit: {
      gu: 'કાચું મકાન ધરાવતા પરિવારોને પોતાનું પાકું મકાન બનાવવા માટે રૂ. ૧,૨૦,૦૦૦ ની સીધી સહાય ઉપરાંત મનરેગા મજૂરી અને શૌચાલય સહાય.',
      hi: 'कच्चे मकान धारकों को पक्का घर बनाने हेतु रु. १,२०,००० की सहायता एवं मनरेगा मजदूरी।',
      en: 'Direct assistance of ₹1,20,000 for pucca home construction plus 90 days MGNREGA wages and Swachh Bharat toilet incentives.',
    },
    eligibility: {
      gu: ['SECC-૨૦૧૧ અથવા આવાસ પ્લસ યાદીમાં સમાવિષ્ટ ઘરવિહોણા કે કાચા છાપરા ધરાવતા પરિવારો'],
      hi: ['आवास प्लस सूची में शामिल बेघर अथवा कच्चे मकान वाले परिवार'],
      en: ['Families listed in Awas+ socio-economic rural census with kachha dwellings'],
    },
    documentsRequired: {
      gu: ['આધાર કાર્ડ', 'રેશન કાર્ડ', 'જોબ કાર્ડ', 'જમીન આધારિત પુરાવા / પંચાયત પ્રમાણપત્ર'],
      hi: ['आधार कार्ड', 'राशन कार्ड', 'जॉब कार्ड', 'जमीन का स्वामित्व प्रमाण'],
      en: ['Aadhaar Card', 'Ration Card', 'MGNREGA Job Card', 'Land ownership / Gram Panchayat allotment document'],
    },
    applicationLink: 'https://pmayg.nic.in',
  },
  {
    id: 'scheme-6',
    title: {
      gu: 'ગંગા સ્વરૂપા આર્થિક સહાય યોજના (વિધવા બહેનો માટે સહાય)',
      hi: 'गंगा स्वरूपा आर्थिक सहायता योजना (विधवा पेंशन)',
      en: 'Ganga Swarupa Financial Assistance (Widow Pension Scheme)',
    },
    department: {
      gu: 'મહિલા અને બાળ વિકાસ વિભાગ',
      hi: 'महिला एवं बाल विकास विभाग',
      en: 'Department of Women & Child Development',
    },
    targetAudience: ['women'],
    benefit: {
      gu: 'નિરાધાર બહેનોને સન્માનપૂર્વક જીવન જીવવા માટે દર મહિને રૂ. ૧,૨૫૦ સીધા બેંક ખાતામાં ડીબીટી દ્વારા.',
      hi: 'निराश्रित माताओं-बहनों को सम्मानपूर्वक जीवन हेतु प्रतिमाह रु. १,२५० सीधे बैंक खाते में।',
      en: 'Monthly pension of ₹1,250 deposited directly into beneficiaries bank accounts via DBT.',
    },
    eligibility: {
      gu: ['૧૮ વર્ષથી વધુ ઉંમરની વિધવા બહેનો', 'ગ્રામ્ય વિસ્તારમાં વાર્ષિક આવક રૂ. ૧,૨૦,૦૦૦ સુધી'],
      hi: ['१८ वर्ष से अधिक आयु की विधवा बहनें', 'ग्रामीण क्षेत्र में वार्षिक आय रु. १,२०,००० तक'],
      en: ['Widowed women aged 18+', 'Annual income up to ₹1,20,000 in rural areas'],
    },
    documentsRequired: {
      gu: ['પતિનું મરણ પ્રમાણપત્ર', 'આધાર કાર્ડ', 'આવકનો દાખલો', 'પુનઃલગ્ન ન કર્યાનું સોગંદનામું', 'બેંક પાસબુક'],
      hi: ['पति का मृत्यु प्रमाण पत्र', 'आधार कार्ड', 'आय प्रमाण पत्र', 'पुनर्विवाह न करने का शपथ पत्र', 'बैंक पासबुक'],
      en: ['Spouses Death Certificate', 'Aadhaar Card', 'Income Certificate', 'Affidavit of non-remarriage', 'Bank Passbook'],
    },
    applicationLink: 'https://digitalgujarat.gov.in',
  },
];
