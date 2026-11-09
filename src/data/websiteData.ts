import { BlogPost, CareerPosition, FAQItem, PricingPlan, TeamMember, Testimonial } from '../types';

export const siteConfig = {
  name: 'KJ Systems',
  companyName: 'KJ Systems India Private Limited',
  tagline: 'Smarter Healthcare, One Dashboard',
  description: 'Easily manage patients, doctors, appointments, and medical information through one intelligent healthcare platform.',
  contactEmail: 'hr@kjsystems.in',
  address: '41-1/19-1, GF-3, SGK Towers, Balaji Nagar, Krishna Lanka, Vijayawada, Andhra Pradesh, India – 520013',
  phone: '+91 9059387805',
};

export const navigationLinks = [
  {
    name: 'Pages',
    href: '#',
    children: [
      { name: 'Home', href: '/', description: 'Main healthcare dashboard & product overview' },
      { name: 'About', href: '/about', description: 'Our mission, team, and global healthcare reach' },
      { name: 'Features', href: '/features', description: 'Comprehensive clinical & hospital toolset' },
      { name: 'Pricing', href: '/pricing', description: 'Transparent plans for practices of all sizes' },
      { name: 'Blog', href: '/blog', description: 'Medical research, clinical insights & tips' },
      { name: 'Careers', href: '/careers', description: 'Join our team transforming healthcare tech' },
      { name: 'Download', href: '/download', description: 'Desktop app for macOS and Windows' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with our solutions specialists' },
      { name: 'Changelog', href: '/changelog', description: 'Latest product updates & releases' },
      { name: 'License', href: '/license', description: 'Asset and intellectual property licensing' },
      { name: 'Early Access', href: '/early-access', description: 'Request early access to v2.0 features' },
    ],
  },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
];

export const heroStats = {
  joinedCount: '18k+',
  joinedLabel: 'Joined 18k+ Members',
  activeUsers: '14.2M+',
  satisfactionRate: '99.4%',
  clinicsCount: '1,200+',
};

export const featuresData = [
  {
    id: 'consultation',
    badge: 'Real-Time Care',
    title: 'Real-Time Doctor Consultation',
    description: 'Chat or video call with doctors anytime, anywhere with encrypted HD telemedicine.',
    image: '/images/doctor_consultation_realtime.jpg',
    tags: ['HD Video', 'Live Chat', 'Instant E-Rx'],
  },
  {
    id: 'specialties',
    badge: 'Multi-Specialty',
    title: 'Multi-Specialty Modules',
    description: 'Access tools for cardiology, dental, X-ray, ophthalmology, and more in one unified suite.',
    image: '/images/img_82_6U4LDtEPVSAhT9LNJbCeoBvaOY.png',
    tags: ['Cardiology', 'Radiology', 'Dental'],
  },
  {
    id: 'payments',
    badge: 'Financial Flow',
    title: 'Fast & Secure Payments',
    description: 'Instant, safe, and easy payments anytime, anywhere with insurance integration and auto-claims.',
    image: '/images/fast_secure_payments.jpg',
    tags: ['Insurance Claims', '1-Click Invoicing', 'HIPAA Compliant'],
  },
  {
    id: 'analytics',
    badge: 'Intelligent Insights',
    title: 'Smart Analytics & Reports',
    description: 'Gain insights with clear, data-driven visualizations to streamline clinic operations and patient outcomes.',
    image: '/images/smart_analytics_reports.jpg',
    tags: ['Live Bed Occupancy', 'Revenue Tracking', 'Predictive Wait Times'],
  },
];


export const featurePerksData = [
  {
    id: 'anytime-booking',
    title: 'Anytime Booking',
    description: 'You can now schedule appointments anytime, day or night, without the hassle of making phone calls.',
    image: '/images/img_71_LCisNLZi3xjFQIzfzeNbOmngpHA.png',
    badge: '24/7 Scheduling'
  },
  {
    id: 'transparent-records',
    title: 'Transparent Records',
    description: "Access your test results, doctor's notes, and medical history all in one place.",
    image: '/images/img_72_eGxSx0dIjSpQauN7liepz9Js.png',
    badge: 'Patient Portal'
  },
  {
    id: 'instant-reporting',
    title: 'Instant Reporting',
    description: 'Quickly generate precise reports that enhance your decision-making process in just a matter of seconds.',
    image: '/images/img_73_gJRqe66lG0jCXRa5JmnmdXJFaOQ.png',
    badge: 'Real-Time Insights'
  },
  {
    id: 'seamless-data',
    title: 'Seamless Data',
    description: 'Effortlessly manage all aspects of patient, doctor, and clinic data with our intuitive system.',
    image: '/images/img_78_7cuAcYQ6MDs6YMrSvzlecGzYo.png',
    badge: 'Unified Records'
  },
  {
    id: 'multi-device-access',
    title: 'Multi-Device Access',
    description: 'Access KJ Systems services seamlessly from your desktop, tablet, or mobile device, wherever you are.',
    image: '/images/img_76_wp7Nh80GBdRG5o38Kivo8UeZ8E.png',
    badge: 'Cross-Platform'
  },
  {
    id: 'secure-encrypted',
    title: 'Secure & Encrypted',
    description: 'Rest assured, your data is safeguarded with the highest level of security and encryption available.',
    image: '/images/img_77_zzQykb8SLuOwmUsmIW4qlQpE.png',
    badge: 'AES-256 Protected'
  },
];

export const onboardingSteps = [
  {
    step: 'Step 1',
    title: 'Quick Registration',
    tagline: 'Quickly create and personalize your account in minutes.',
    description: 'Set up your clinic profile, invite staff with granular permissions, and import existing patient databases securely.',
    image: '/images/img_88_T2zpKcJ9cuyNz18jgseihtjyLU4.png',
    points: [
      'Simple 3-minute clinic onboarding wizard',
      'HIPAA and GDPR automated compliance verification',
      'Direct EHR/EMR data import from legacy systems'
    ]
  },
  {
    step: 'Step 2',
    title: 'Data Management',
    tagline: 'Simplified Data Handling for Every Workflow',
    description: 'Centralize electronic health records, diagnostic scans, prescriptions, and lab results into unified patient cards.',
    image: '/images/img_89_hh27U8Wj5eWIheLluLCXmS8b1lU.png',
    points: [
      'Universal timeline of every patient visit & diagnosis',
      'AI-assisted clinical note transcription & ICD-10 tagging',
      'Integrated laboratory orders & instant radiology viewer'
    ]
  },
  {
    step: 'Step 3',
    title: 'Appointment Booking',
    tagline: 'Seamless Calendar Synchronization & Telehealth',
    description: 'Empower patients to book online 24/7 with automated SMS reminders, reducing no-show rates by up to 68%.',
    image: '/images/img_90_nWP30bcYJyj6Ep4kVkaI4EPjquI.png',
    points: [
      'Smart conflict-free calendar engine across multiple doctors',
      'Automated patient reminder sequences via SMS and WhatsApp',
      'One-click launch for virtual telemedicine video calls'
    ]
  },
];

export const benefitsData = [
  {
    badge: 'For Doctors',
    title: 'Patient records in order',
    description: 'Access full history and organized schedules anytime to improve care and save consultation time.',
    badgeTag: 'Clinical Efficiency',
    image: '/images/img_91_uPsJup6Yk70g1Y2qKdPbhme2aM.png',
    points: [
      {
        title: 'Stay on top of your schedule',
        description: 'Manage appointments without overlaps and get reminders for upcoming sessions.'
      },
      {
        title: 'Access complete history instantly',
        description: 'View patient records, vitals trends, and past visits in seconds to improve clinical decision-making.'
      }
    ]
  },
  {
    badge: 'For Clinics & Hospitals',
    title: 'Efficiency for every department',
    description: 'Manage operations and generate reports instantly to streamline workflows and reduce administrative load.',
    badgeTag: 'Operational Scale',
    image: '/images/img_93_nrKP51tB6EZ7mF0ruQXlN1nU.png',
    points: [
      {
        title: 'Optimize daily operations',
        description: 'Reduce paperwork, synchronize reception desk queues, and streamline admin processes for the whole team.'
      },
      {
        title: 'Generate reports instantly',
        description: 'Produce accurate financial summaries, staff utilization metrics, and occupancy analytics in seconds.'
      }
    ]
  },
  {
    badge: 'For Patients',
    title: 'Appointments made simple',
    description: 'Book visits with ease and get clear, transparent medical results right at your fingertips on any device.',
    badgeTag: 'Patient Centric',
    image: '/images/img_95_78frwromQPJx9hKpbKeInEM2t0.png',
    points: [
      {
        title: 'Book appointments anytime',
        description: 'Schedule in-person or telemedicine visits in just a few taps, no phone calls needed.'
      },
      {
        title: 'Get transparent results',
        description: 'Access your medical test outcomes, doctor prescriptions, and health records clearly in one secure portal.'
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "This platform has completely revolutionized how we manage our clinical schedule. The automated workflows and EHR integration save our team hours each day.",
    author: "Dr. Isabella Chen",
    role: "Medical Director",
    company: "Metro Health Network",
    avatar: "/images/img_96_I0kyDc6YaaE0Yzag3cZW8QOm9DQ.png",
    rating: 5
  },
  {
    quote: "It's rare to find a tool that is both powerful for medical administrators and wonderfully intuitive for doctors and patients alike. KJ Systems is that tool.",
    author: "Ben Carter",
    role: "Head of Operations",
    company: "St. Jude Outpatient Clinic",
    avatar: "/images/img_97_IcucP3ShFRm8dIhQ9pD2BOGxzE.png",
    rating: 5
  },
  {
    quote: "Patient no-show rates dropped from 22% to less than 4% within 60 days of deploying KJ Systems automated appointment reminders.",
    author: "Dr. Marcus Vance",
    role: "Chief of Cardiology",
    company: "Vance Heart Institute",
    avatar: "/images/img_98_3RiWh96NkyrqW8kepFGUhUWg.png",
    rating: 5
  },
  {
    quote: "The multi-specialty clinical modules allow our orthopedics and neurology departments to share diagnostics seamlessly without friction.",
    author: "Elena Rostova",
    role: "Hospital Administrator",
    company: "Alpine Medical Center",
    avatar: "/images/img_100_TK5orraKu2Mx8FKKG81OsDjWnZg.png",
    rating: 5
  },
  {
    quote: "Our patients frequently comment on how clear and easy their lab test summaries look in the KJ Systems patient portal.",
    author: "Dr. Nathan Patel",
    role: "Lead General Physician",
    company: "Apex Wellness Group",
    avatar: "/images/img_102_7NwGmyc2eFTm4rNZqeQsvf8NHGw.png",
    rating: 5
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic plan',
    tagline: 'Perfect for small clinics or individual practitioners getting started.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    featured: false,
    ctaText: 'Start with Basic',
    includesText: 'Includes:',
    features: [
      'Up to 3 staff accounts',
      'Appointment scheduling & reminders',
      'Basic electronic patient records (EHR)',
      'Standard clinical reports & summaries',
      'Telemedicine chat & audio calls',
      'Standard email support'
    ]
  },
  {
    id: 'professional',
    name: 'Professional Plan',
    tagline: 'Designed for busy clinics and hospitals needing advanced tools and scalability.',
    monthlyPrice: 59,
    yearlyPrice: 48,
    featured: true,
    ctaText: 'Go Professional',
    includesText: 'Includes:',
    features: [
      'Unlimited staff & doctor accounts',
      'Full patient history access & diagnostics',
      'Multi-specialty clinical modules (Cardiology, Dental, X-Ray)',
      'Automated billing & insurance claims processing',
      'Predictive analytics & real-time revenue reports',
      '24/7 dedicated priority support & training'
    ]
  }
];

export const faqItems: FAQItem[] = [
  {
    question: 'What is KJ Systems?',
    answer: 'KJ Systems is a cloud-based medical SaaS platform designed to streamline healthcare operations. It helps clinics, hospitals, and individual practitioners manage patient records, appointments, billing, multi-specialty clinical workflows, and telemedicine—all in one secure, compliant platform.'
  },
  {
    question: 'Who can use KJ Systems?',
    answer: 'KJ Systems is built for private practices, multi-specialty clinics, diagnostic centers, hospital departments, telehealth providers, and independent doctors seeking modern, stress-free clinical administration.'
  },
  {
    question: 'Is patient data secure with KJ Systems?',
    answer: 'Yes, absolutely. KJ Systems employs bank-grade AES-256 encryption at rest and in transit. Our infrastructure is fully compliant with HIPAA, GDPR, ISO 27001, and local healthcare data residency regulations with daily automated backups.'
  },
  {
    question: 'Do I need to install any software?',
    answer: 'KJ Systems operates as a cloud-native web application accessible from any modern browser on desktop, tablet, and mobile. We also offer native desktop applications for macOS and Windows for high-speed offline caching and local scanner integrations.'
  },
  {
    question: 'Can KJ Systems integrate with other systems?',
    answer: 'Yes, KJ Systems includes bi-directional HL7, FHIR, and RESTful APIs to integrate smoothly with diagnostic laboratory systems, PACS imaging servers, hospital management systems (HIS), and accounting software like QuickBooks and Xero.'
  },
  {
    question: 'How does billing and invoicing work?',
    answer: 'You can generate itemized invoices with one click, accept credit cards, debit cards, and bank transfers, calculate insurance co-pays automatically, and submit claims electronically to major health insurance providers.'
  },
  {
    question: 'Can I use KJ Systems for telemedicine?',
    answer: 'Yes, KJ Systems includes an integrated, HIPAA-compliant HD video and encrypted chat system. Doctors can consult with patients remotely, review diagnostic scans collaboratively on screen, and issue digital prescriptions during the call.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: '5-ways-to-boost-your-immune-system-during-rainy-season',
    title: '5 Ways to Boost Your Immune System During Rainy Season',
    date: 'Mar 1, 2025',
    readTime: '5 min read',
    category: 'Preventative Health',
    image: '/images/img_56_VEPM7RJE2xatQiUBuinQlqBAk.png',
    excerpt: 'Simple nutritional and lifestyle adjustments you can make right now to protect your immune defenses during seasonal temperature drops.',
    author: {
      name: 'Dr. Sarah Lee',
      role: 'Chief Medical Officer',
      avatar: '/images/img_96_I0kyDc6YaaE0Yzag3cZW8QOm9DQ.png'
    },
    content: [
      'Seasonal changes often bring humidity shifts and temperature fluctuations that challenge our body’s primary immune responses. By supporting your lymphatic system and cellular defenses, you can maintain peak vitality year-round.',
      '1. Prioritize Micronutrient Density: Ensure adequate intake of Vitamin C, Vitamin D3, and Zinc. Citrus fruits, fermented foods, and leafy greens supply bioactive compounds that strengthen epithelial barriers against pathogens.',
      '2. Hydration and Mucosal Immunity: Cold weather frequently suppresses the thirst reflex, yet mucosal membranes require optimal hydration to filter airborne viruses effectively.',
      '3. Restorative Sleep Architecture: During deep slow-wave sleep, cytokine production peaks, orchestrating immunological memory and fighting latent inflammation.',
      '4. Light Aerobic Movement: 30 minutes of moderate cardiovascular activity enhances circulation of natural killer cells and white blood cells throughout your vascular network.',
      '5. Stress Modulation: Chronic cortisol secretion suppresses leukocyte activity. Dedicate 10 minutes daily to diaphragmatic breathing or meditation.'
    ]
  },
  {
    slug: 'chill-tips-for-eating-healthy-when-you-have-diabetes',
    title: 'Chill Tips for Eating Healthy When You Have Diabetes',
    date: 'Mar 2, 2025',
    readTime: '6 min read',
    category: 'Metabolic Care',
    image: '/images/img_57_F76Ekc2pD94GmX6lkajJ1mZss.png',
    excerpt: 'Practical dietary recommendations and stress-free carbohydrate strategies to keep blood glucose levels in a healthy target range.',
    author: {
      name: 'Dr. Amelia Tan',
      role: 'Endocrinology Specialist & Clinical Lead',
      avatar: '/images/img_23_70XAVLSqqDP3JKIXZKifRJ8QPA.png'
    },
    content: [
      'Living with diabetes or insulin resistance does not mean eliminating culinary enjoyment. Modern metabolic care focuses on glycemic index management and food pairing rather than restrictive deprivation.',
      'Understanding the Glucose Curve: Carbohydrates consumed with soluble fiber and healthy fats are absorbed substantially slower, preventing reactive postprandial glucose spikes.',
      'The Plate Method in Practice: Fill half your plate with non-starchy vegetables (spinach, broccoli, peppers), one quarter with lean protein, and one quarter with complex high-fiber carbohydrates.',
      'Continuous Glucose Monitoring Insights: Wearable biosensors show how individual microbiomes react uniquely to ingredients. KJ Systems connects directly with leading CGM sensors for real-time doctor review.'
    ]
  },
  {
    slug: 'simple-steps-to-improve-your-mental-health-naturally',
    title: 'Simple Steps to Improve Your Mental Health Naturally',
    date: 'Mar 3, 2025',
    readTime: '4 min read',
    category: 'Mental Wellness',
    image: '/images/img_58_N3KkFcFX2EuEBanDG8oqwP6DHyE.png',
    excerpt: 'Evidence-based behavioral protocols that regulate circadian biology, dopamine receptors, and everyday emotional resilience.',
    author: {
      name: 'Michael Wong',
      role: 'Behavioral Health Director',
      avatar: '/images/img_97_IcucP3ShFRm8dIhQ9pD2BOGxzE.png'
    },
    content: [
      'Mental well-being is biologically inseparable from physiological homeostasis. When neurological pathways receive adequate restorative cues, emotional equilibrium naturally improves.',
      'Circadian Morning Sunlight: Exposing your eyes to 10-15 minutes of early morning photon density triggers cortisol awakening spikes that anchor nocturnal melatonin production.',
      'Cold Water Therapy & Vagal Tone: Brief cold exposure stimulates the vagus nerve, slowing resting heart rate and training the parasympathetic autonomic response to stress.',
      'Digital Sunset Protocols: Blue spectrum light emitted by displays suppresses natural sleep chemistry. Turning down high-intensity screens two hours prior to bed restores cognitive restoration.'
    ]
  },
  {
    slug: 'daily-practices-that-support-a-strong-immune-system',
    title: 'Daily Practices That Support a Strong Immune System',
    date: 'Feb 26, 2025',
    readTime: '5 min read',
    category: 'Preventative Health',
    image: '/images/img_80_2MPyx4UC72NYRBS3BFVOroUbxps.png',
    excerpt: 'How consistency in daily routines cultivates long-term immunological resilience and cellular protection.',
    author: {
      name: 'Dr. Sarah Lee',
      role: 'Chief Medical Officer',
      avatar: '/images/img_96_I0kyDc6YaaE0Yzag3cZW8QOm9DQ.png'
    },
    content: [
      'Immunity is not an acute toggle; it is an active continuous biological surveillance process maintained through daily metabolic balance.',
      'Gut Microbiome Diversity: Over 70% of human immune cells reside within the gut-associated lymphoid tissue (GALT). Consuming 30 distinct plant varieties weekly creates protective microbial short-chain fatty acids.',
      'Physical Movement as Lymphatic Pump: Unlike blood pumped by the heart, lymphatic fluid depends exclusively on muscular contraction and deep breathing for flow.',
      'Intermittent Fasting & Autophagy: Allowing 12 to 14 hours between dinner and breakfast permits cellular housekeeping mechanisms to clear senescent cells.'
    ]
  },
  {
    slug: 'best-immune-boosting-foods-to-add-to-your-grocery-list',
    title: 'Best Immune-Boosting Foods to Add to Your Grocery List',
    date: 'Feb 20, 2025',
    readTime: '7 min read',
    category: 'Nutrition',
    image: '/images/img_82_6U4LDtEPVSAhT9LNJbCeoBvaOY.png',
    excerpt: 'A physician-curated breakdown of polyphenol-dense whole foods that power your cellular defense system.',
    author: {
      name: 'Layla Zoke',
      role: 'Clinical Dietitian',
      avatar: '/images/img_100_TK5orraKu2Mx8FKKG81OsDjWnZg.png'
    },
    content: [
      'Food is biochemical information. What you feed your microbiome determines the inflammatory or anti-inflammatory signaling cascades inside your vascular walls.',
      'Top Tier Superfoods: Wild blueberries (anthocyanins), fermented kefir (beneficial probiotics), shiitake mushrooms (beta-glucans), garlic (allicin), and green tea (EGCG).',
      'The Role of Healthy Fats: Omega-3 fatty acids from wild-caught salmon and chia seeds counteract oxidative stress and resolve systemic inflammation.'
    ]
  },
  {
    slug: 'small-lifestyle-changes-that-make-a-big-difference',
    title: 'Small Lifestyle Changes That Make a Big Difference',
    date: 'Feb 15, 2025',
    readTime: '4 min read',
    category: 'Lifestyle',
    image: '/images/img_88_T2zpKcJ9cuyNz18jgseihtjyLU4.png',
    excerpt: 'Micro-habits in sleep, hydration, and movement that yield compounding improvements in health and longevity.',
    author: {
      name: 'Jonathan Reyes',
      role: 'Wellness Coordinator',
      avatar: '/images/img_98_3RiWh96NkyrqW8kepFGUhUWg.png'
    },
    content: [
      'Sustainable healthcare is built on continuous micro-improvements rather than drastic short-term overhauls.',
      'Starting with Morning Hydration: 500ml of mineral-rich water immediately upon rising rehydrates vital organs and aids metabolic clearance.',
      'Walking After Meals: A brief 10-minute walk post-lunch suppresses glucose excursions by 30% through non-insulin-mediated glucose uptake in skeletal muscle.'
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    name: 'DR. KUMARA PRATHIPATI, M.D.',
    role: 'Co-Founder & Chief Executive Officer',
    image: '/images/team_person_3_clean.png',
    bio: 'Visionary physician executive leading the overall mission, international health tech expansion, and clinical software innovation.',
    stagger: 'high',
    arrowType: 'center',
  },
  {
    name: 'DR. JOSEPH REDDY, M.D.',
    role: 'Co-Founder',
    image: '/images/team_person_1_clean.png',
    bio: 'Pioneering healthcare leader co-founding KJ Systems to modernize clinical record management and patient engagement.',
    stagger: 'low',
    arrowType: 'left',
  },
  {
    name: 'DR. LAKSHMI PRATHIPATI, M.D.',
    role: 'Chief Financial Officer',
    image: '/images/team_person_4_clean.png',
    bio: 'Physician and financial strategist directing fiscal health, international capital allocation, and sustainable growth.',
    stagger: 'high',
    arrowType: 'right',
  },
  {
    name: 'APARNA REDDY',
    role: 'Chief Operating Officer',
    image: '/images/team_person_2_clean.png',
    bio: 'Operational powerhouse orchestrating global workforce development, client success, and healthcare delivery pipelines.',
    stagger: 'low',
    arrowType: 'left',
  },
  {
    name: 'JAY LANCY',
    role: 'Director of Strategy & Sales',
    image: '/images/team_person_5_clean.png',
    bio: 'Strategic commercial leader driving worldwide EHR enterprise partnerships, hospital network integrations, and market expansion.',
    stagger: 'high',
    arrowType: 'right',
  },
  {
    name: 'MOHAN RAO VARDHINENI',
    role: 'Chief Technical Officer',
    image: '/images/team_person_6_clean.png',
    bio: 'Chief technology architect scaling mission-critical cloud health infrastructures, HIPAA compliance, and real-time medical data systems.',
    stagger: 'low',
    arrowType: 'left',
  },
];

export const globalReachCountries = [
  { name: 'California (HQ)', users: '3,800+ Active Clinicians', count: 3800, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Texas', users: '2,900+ Active Clinicians', count: 2900, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'New York', users: '2,600+ Active Clinicians', count: 2600, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Florida', users: '2,400+ Active Clinicians', count: 2400, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Illinois', users: '1,900+ Active Clinicians', count: 1900, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Pennsylvania', users: '1,800+ Active Clinicians', count: 1800, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Ohio & Midwest', users: '1,500+ Active Clinicians', count: 1500, userLabel: 'Active Clinicians', flag: '🇺🇸' },
  { name: 'Nationwide Network', users: '18,000+ Total Providers', count: 18000, userLabel: 'Total Providers', flag: '🇺🇸' },
];

export const partnerInvestors = [
  { name: 'Liam Carter', role: 'Founding Partner', company: 'KJ Systems Capital Partners' },
  { name: 'Sophia Nguyen', role: 'Founding Partner', company: 'KJ Systems Capital Partners' },
  { name: 'Daniel Foster', role: 'Partner', company: 'KJ Systems Capital Partners' },
  { name: 'Olivia Hart', role: 'CEO', company: 'HealthSync' },
  { name: 'Noah Kim', role: 'CTO', company: 'CloudVitals' },
  { name: 'Isabella Reyes', role: 'COO', company: 'CareLink' },
  { name: 'Mason Clarke', role: 'President', company: 'VitaTech' },
  { name: 'Chloe Bennett', role: 'CEO', company: 'PulseWorks' },
];

export const hrContact = {
  company: 'KJ Systems',
  phone: '+91 9059387805',
  displayPhone: '+91 9059387805',
  email: 'hr@kjsystems.in',
  mailtoLink: 'mailto:hr@kjsystems.in?subject=Job%20Application&body=Dear%20HR%20Sir,',
};

export const careerPositions: CareerPosition[] = [
  {
    id: 'frontend-angular',
    title: 'Front-End Developer (Javascript / AngularJs)',
    department: 'Engineering',
    location: 'Work From Home (Post 2-3 Months Offline Training)',
    type: 'Full-Time',
    salary: '5 Lakhs per annum (5 LPA)',
    qualification: 'Any degree or higher',
    mode: '2-3 Months offline training and after that work from home',
    description: 'Build robust, responsive healthcare and enterprise web applications using modern JavaScript and Angular. Work on live production modules with seamless API integrations.',
    responsibilities: [
      '2-3 Months offline intensive hands-on training followed by permanent Work From Home (WFH)',
      'Develop dynamic, user-friendly frontend interfaces using JavaScript and AngularJS frameworks',
      'Analyze project requirements and translate business logic into clean, maintainable code',
      'Collaborate with backend engineers, database architects, and QA analysts',
      'Work in shifts when required to ensure continuous global project delivery',
      'Maintain strong keyboard typing velocity and precision for daily development tasks'
    ],
    requirements: [
      'Should have good knowledge of JavaScript and modern web standards',
      'Should have good self-learning skills and proactive problem-solving mindset',
      'Decent verbal and written English communication skills',
      'Strong analytical skills to understand, break down, and execute requirements',
      'Ready to work in flexible shifts as per project delivery timelines',
      'Good keyboard typing skills'
    ],
    desiredProfile: [
      'Eager to learn modern enterprise technologies and stay flexible',
      'Basic conceptual understanding of computers, operating systems, and web architecture',
      'Willing to sign a service bond for 3.5 years'
    ],
    perks: [
      'Work From Home (WFH) flexibility after training',
      'Competitive starting salary of ₹5 Lakhs per annum (5 LPA)',
      'Performance-based yearly salary hikes and promotions',
      'Guaranteed on-time monthly salary disbursement',
      '3 Months structured offline training program',
      'Training stipend: 1st month - training, 2nd month - ₹10,000 stipend, 3rd month onwards - full ₹5 LPA salary',
      'Provident Fund (PF) benefits provided'
    ],
    trainingDetails: '2-3 Months offline training program with progressive stipend, leading to permanent work-from-home employment.',
    bond: '3.5 Years service commitment'
  },
  {
    id: 'backend-dotnet',
    title: 'Back-End Developer (.NET / C#)',
    department: 'Engineering',
    location: 'Work From Home (Post 2-3 Months Offline Training)',
    type: 'Full-Time',
    salary: '5 Lakhs per annum (5 LPA)',
    qualification: 'Any degree or higher',
    mode: '2-3 Months offline training and after that work from home',
    description: 'Design and implement high-performance server-side architectures, RESTful APIs, and business microservices using C# and Microsoft .NET ecosystems.',
    responsibilities: [
      '2-3 Months offline technical training followed by full Work From Home (WFH)',
      'Build scalable backend services, web APIs, and database connectivity using .NET and C#',
      'Analyze complex technical requirements and deliver modular, efficient software components',
      'Debug, optimize, and write secure backend code adhering to industry best practices',
      'Collaborate with frontend developers and SQL architects to ensure seamless data flow',
      'Operate in shifts when required to support 24/7 high-availability infrastructure'
    ],
    requirements: [
      'Should have good foundational knowledge of C# and object-oriented programming',
      'Strong self-learning capability to quickly master advanced .NET libraries',
      'Decent verbal and written communication skills',
      'Sharp analytical capabilities to understand and analyze software specifications',
      'Ready to work in any shift as required by project teams',
      'Good keyboard typing skills'
    ],
    desiredProfile: [
      'Passionate and eager to master enterprise .NET architecture',
      'Solid basic understanding of computer systems, networks, and databases',
      'Willing to sign a service bond for 3.5 years'
    ],
    perks: [
      'Work From Home (WFH) arrangement post training',
      'Annual CTC of ₹5 Lakhs per annum (5 LPA)',
      'Regular yearly performance appraisals and salary increments',
      'Strict on-time salary guarantee on the 1st of every month',
      '3 Months comprehensive offline corporate training',
      'Stipend progression: 1st month - training, 2nd month - ₹10,000 stipend, 3rd month onwards - full ₹5 LPA salary',
      'Provident Fund (PF) benefits included'
    ],
    trainingDetails: '2-3 Months offline training with full mentorship, transitioning to permanent remote work.',
    bond: '3.5 Years service commitment'
  },
  {
    id: 'database-sql',
    title: 'DataBase Developer (SQL)',
    department: 'Data & Database',
    location: 'Work From Home (Post 2-3 Months Offline Training)',
    type: 'Full-Time',
    salary: '4 Lakhs per annum (4 LPA)',
    qualification: 'Any degree or higher',
    mode: '2-3 Months offline training and after that work from home',
    description: 'Work on live real-time production databases. Engineer high-throughput SQL scripts, stored procedures, triggers, views, sequences, and indexing architectures.',
    responsibilities: [
      'Work on live real-time production enterprise projects utilizing Microsoft SQL Server and relational databases',
      '2-3 Months offline training followed by Work From Home (WFH)',
      'Develop and fine-tune complex stored procedures, T-SQL scripts, queries, views, and sequences',
      'Optimize query execution plans, index strategies, and data retrieval latency',
      'Coordinate with software development and QA teams to support schema migrations',
      'Work in rotating shifts when necessary for scheduled database maintenance'
    ],
    requirements: [
      'Knowledge of core relational database concepts, SQL queries, joins, and normal forms',
      'Strong self-learning discipline to master advanced database tuning',
      'Decent communication skills to document and explain data models',
      'Good analytical skills to dissect complex data requirements',
      'Flexibility to work in any assigned project shift',
      'Strong keyboard skills'
    ],
    desiredProfile: [
      'Analytical thinker passionate about data integrity, speed, and optimization',
      'Fundamental understanding of computing, storage, and databases',
      'Willing to sign a service bond for 3.5 years'
    ],
    perks: [
      'Permanent Work From Home (WFH) following training',
      'Starting compensation of ₹4 Lakhs per annum (4 LPA)',
      'Performance-linked yearly increments and career growth',
      'On-time salary credit every month',
      '3 Months intensive real-world project training',
      'Stipend structure: 1st month - training, 2nd month - ₹10,000 stipend, 3rd month onwards - full ₹4 LPA salary',
      'Provident Fund (PF) contribution included'
    ],
    trainingDetails: '2-3 Months offline real-project SQL training with ₹10k stipend in month 2, moving to full salary and remote setup in month 3.',
    bond: '3.5 Years service commitment'
  },
  {
    id: 'ba-qa-analyst',
    title: 'Business Analyst / Quality Analyst',
    department: 'Analysis & QA',
    location: 'Work From Home (Post 2 Months Offline Training)',
    type: 'Full-Time',
    salary: '3 to 4 Lakhs per annum (3-4 LPA)',
    qualification: 'Any degree or higher',
    mode: '2 Months offline training and after that work from home',
    description: 'Bridge business objectives with technical execution. Gather and analyze user requirements, author specifications, and perform rigorous quality assurance validation.',
    responsibilities: [
      'Analyze client business requirements and translate them into clear functional specification documents',
      'Conduct manual and automated quality assurance testing across web applications',
      'Effectively communicate complex procedures and workflows to colleagues, stakeholders, and clients',
      'Identify bugs, document test cases, track defect resolution, and verify releases',
      '2 Months offline training followed by Work From Home (WFH)',
      'Work in designated shifts to support international project clients'
    ],
    requirements: [
      'Decent written and verbal communication skills for stakeholder discussions',
      'Good analytical skills to understand, analyze, and document multi-step requirements',
      'Strong ability to quickly learn workflows, software tools, and perform with precision',
      'Ability to communicate complex technical procedures clearly to non-technical teams',
      'Ready to work in flexible project shifts',
      'Career-oriented mindset with ambition to excel in business analysis and QA'
    ],
    desiredProfile: [
      'Eager to learn, detail-oriented, adaptable, and flexible',
      'Basic practical understanding of computer applications and web browsers',
      'Willing to sign a service bond for 3 years'
    ],
    perks: [
      'Work From Home (WFH) setup following training',
      'Annual salary ranging from ₹3 to ₹4 Lakhs per annum (3-4 LPA)',
      'Yearly performance appraisals and salary hikes',
      'Guaranteed on-time monthly salary',
      '2 Months structured offline training program',
      'Stipend plan: 1st month - training, 2nd month - ₹10,000 stipend, 3rd month onwards - full salary (3-4 LPA)',
      'Provident Fund (PF) benefits provided'
    ],
    trainingDetails: '2 Months offline intensive QA/BA training with ₹10k stipend in month 2, transitioning to full salary and remote work in month 3.',
    bond: '3 Years service commitment'
  }
];

export const changelogVersions = [
  {
    version: 'Version 2.4.0',
    date: 'February 28, 2025',
    tag: 'Latest Release',
    notes: [
      'Introduced interactive 3D anatomical heart viewer with real-time biometric telemetry overlays',
      'Added automated insurance pre-authorization check via clearinghouse API integration',
      'Upgraded calendar engine to support multi-room and multi-device resource booking',
      'Improved mobile responsiveness and offline caching for rural clinical outposts'
    ]
  },
  {
    version: 'Version 2.0.0',
    date: 'January 15, 2025',
    tag: 'Major Update',
    notes: [
      'Complete redesign of the physician dashboard with customizable widget layouts',
      'Integrated WebRTC HD telemedicine with encrypted in-call medical document sharing',
      'Launched native desktop apps for macOS and Windows with auto-updates',
      'Added multi-specialty clinical templates for Dentistry, Ophthalmology, and Cardiology'
    ]
  },
  {
    version: 'Version 1.0.0',
    date: 'December 1, 2024',
    tag: 'Initial Release',
    notes: [
      'Initial public release of KJ Systems Medical SaaS platform',
      'Core patient records management (EHR), basic appointment scheduling, and patient directory',
      'Standard billing and receipt generation'
    ]
  }
];
