import React, { useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { featuresData, featurePerksData } from '../data/websiteData';
import { MedicalDataSphere } from '../components/3d/MedicalDataSphere';
import { FinalCTA } from '../components/home/FinalCTA';
import { FAQAccordion } from '../components/home/FAQAccordion';
import {
  Activity,
  Heart,
  ShieldCheck,
  Video,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  Clock,
  Smartphone,
  Database,
  Shield,
  Laptop
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const clinicalSpecialties = [
    {
      title: 'Cardiology Telemetry',
      icon: <Heart className="w-5 h-5 text-rose-500" />,
      description: 'Continuous ECG recording, arrhythmia detection, and blood pressure trend analytics directly linked to patient EHR files.',
    },
    {
      title: 'Radiology & PACS Viewer',
      icon: <Layers className="w-5 h-5 text-blue-500" />,
      description: 'DICOM imaging engine supporting zero-footprint web view for high-res MRI, CT, and X-ray diagnostics on any device.',
    },
    {
      title: 'Dental Charting Matrix',
      icon: <Sparkles className="w-5 h-5 text-emerald-500" />,
      description: 'Interactive adult & pediatric odontogram with treatment plan cost estimates and periodontal pocket depth tracking.',
    },
    {
      title: 'Digital E-Prescriptions',
      icon: <FileText className="w-5 h-5 text-amber-500" />,
      description: 'Direct routing to partner pharmacies with automated drug-drug interaction alerts and dosage safety guidelines.',
    },
    {
      title: 'Telemedicine Suite',
      icon: <Video className="w-5 h-5 text-purple-500" />,
      description: 'Encrypted HD peer-to-peer clinical consultations with in-call digital whiteboarding and screen diagnostic sharing.',
    },
    {
      title: 'Automated Billing & RCM',
      icon: <CreditCard className="w-5 h-5 text-teal-500" />,
      description: 'Auto-claim submission to national insurance clearinghouses with real-time eligibility checks and co-pay calculator.',
    },
  ];

  return (
    <div className="w-full pt-28 md:pt-36 bg-[#fcfcfc]">
      {/* 1. Hero Section (Aligned with Reference Site) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>New &bull; Simpler Healthcare for All</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          All-in-One <br className="hidden sm:inline" />
          <span className="text-emerald-700 font-serif italic font-normal">
            Healthcare Platform
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Discover powerful new features that bring patients, doctors, and clinics together for faster care and better outcomes.
        </p>

        {/* Hero Dashboard Showcase Visual */}
        <div className="mt-12 max-w-5xl mx-auto relative rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-neutral-900 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
          <img
            src="/images/img_70_lO4rgL3p3j5T5VBN9CEOuUGMBA8.png"
            alt="KJ Systems Clinic Dashboard Overview"
            className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
          />
          {/* Floating Live Telemetry Badge */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-lg flex items-center justify-between sm:justify-start gap-4 text-xs">
            <span className="font-semibold text-neutral-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              Real-Time Clinical Sync
            </span>
            <span className="text-emerald-700 font-mono text-[11px] font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
              99.99% Uptime
            </span>
          </div>
        </div>
      </section>

      {/* 2. Core Features Bento Section ("Everything You Need to Care Smarter") */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge variant="emerald">Core Architecture</SectionBadge>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Everything You Need to <span className="font-serif italic font-normal text-emerald-700">Care Smarter</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              From appointments to analytics, manage your entire clinical workflow in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Card 1: Real-Time Doctor Consultation (Span 7) */}
            <div className="md:col-span-7 bg-neutral-50/60 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                  Real-Time Care
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  Real-Time Doctor Consultation
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-md">
                  Chat or video call with doctors anytime, anywhere with low-latency encryption and instant digital prescriptions.
                </p>
              </div>

              <div className="mt-6 relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 aspect-[16/10] group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                <img
                  src="/images/doctor_consultation_realtime.jpg"
                  alt="Real-Time Doctor Consultation"
                  className="w-full h-full object-cover object-[72%_center]"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Live Consultation</span>
                </div>
                <div className="absolute bottom-3 left-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-neutral-100/90 flex items-center gap-3 text-xs shadow-md">
                  <span className="font-semibold text-neutral-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Dr. Elena Rostova
                  </span>
                  <span className="text-emerald-700 font-mono text-[11px] font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                    Connected HD
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Multi-Specialty Modules (Span 5) */}
            <div className="md:col-span-5 bg-neutral-50/60 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-3">
                  Specialized Tools
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  Multi-Specialty Modules
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Access tools for cardiology, dental, X-ray, ophthalmology, and more in one unified suite.
                </p>
              </div>

              <div className="mt-6 relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                <img
                  src="/images/img_82_6U4LDtEPVSAhT9LNJbCeoBvaOY.png"
                  alt="Multi-Specialty Modules"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 3: Secure Health Records & Smart Booking (Span 12) */}
            <div className="md:col-span-12 bg-neutral-950 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 group">
              <div className="space-y-4 max-w-xl">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  Comprehensive EHR
                </span>
                <h3 className="text-3xl font-extrabold tracking-tight">
                  Secure Health Records & Instant Booking
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  Keep patient records, clinical charts, and history organized with bank-grade encryption while automating front-desk bookings.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Real-time booking system</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Automated reminders & follow-ups</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Doctor availability overview</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>One-click rescheduling</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:max-w-md rounded-2xl overflow-hidden border border-neutral-800 shadow-lg bg-neutral-900 group-hover:scale-[1.01] transition-transform duration-300">
                <img
                  src="/images/img_74_Pe2IZXo8O9eyhhK7o8HNzBzajI.png"
                  alt="Secure Health Records"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Card 4: Fast & Secure Payments (Span 5) */}
            <div className="md:col-span-5 bg-neutral-50/60 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-3">
                  Billing & Claims
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  Fast & Secure Payments
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  Instant, safe, and easy payments anytime, anywhere. Automated insurance co-pays and one-click receipts.
                </p>
              </div>

              <div className="mt-6 relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 flex items-center justify-center p-2 sm:p-3 group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                <img
                  src="/images/fast_secure_payments.jpg"
                  alt="Fast & Secure Payments"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Card 5: Smart Analytics & Reports (Span 7) */}
            <div className="md:col-span-7 bg-neutral-50/60 rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold mb-3">
                  Clinical Intelligence
                </span>
                <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                  Smart Analytics & Reports
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-md">
                  Gain insights with clear, data-driven visualizations. Track patient recovery rates, bed occupancy, and revenue streams.
                </p>
              </div>

              <div className="mt-6 relative rounded-2xl overflow-hidden bg-white border border-neutral-200/80 flex items-center justify-center p-2 sm:p-3 group-hover:scale-[1.01] transition-transform duration-300 shadow-sm">
                <img
                  src="/images/smart_analytics_reports.jpg"
                  alt="Smart Analytics & Reports"
                  className="w-full h-auto object-contain rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Benefits & Perks You'll Love Section (From Reference Site) */}
      <section className="py-20 md:py-28 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge variant="emerald">Benefits & Perks</SectionBadge>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Benefits & Perks <span className="font-serif italic font-normal text-emerald-700">You’ll Love</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Maximize your healthcare experience with KJ Systems’s powerful features.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {featurePerksData.map((b) => {
              const isSeamless = b.id === 'seamless-data';
              const isSecure = b.id === 'secure-encrypted';
              const isMultiDevice = b.id === 'multi-device-access';

              return (
                <div
                  key={b.id}
                  className={`bg-white rounded-3xl p-6 sm:p-7 border border-neutral-200/80 shadow-sm hover:shadow-card hover:border-emerald-300 transition-all duration-300 flex flex-col group ${
                    isSeamless || isSecure ? 'h-fit' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                        {b.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>

                  <div
                    className={`mt-6 rounded-2xl overflow-hidden bg-neutral-50/80 border border-neutral-100 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 ${
                      isSeamless || isSecure
                        ? 'p-1 sm:p-1.5'
                        : isMultiDevice
                        ? 'p-2 max-h-[220px]'
                        : 'p-2'
                    }`}
                  >
                    <img
                      src={b.image}
                      alt={b.title}
                      className={`w-full object-contain rounded-xl ${
                        isMultiDevice ? 'max-h-[200px] h-auto' : 'h-auto'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Connected Clinical Data Mesh & 3D Interactive Telemetry */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                Connected Clinical Data Mesh
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Unified Medical Telemetry & Hospital Synchronization
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                KJ Systems connects patient vitals, diagnostic laboratory feeds, and electronic records into a high-speed encrypted data mesh. Physicians access verified records with millisecond response times.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second bi-directional HL7/FHIR query synchronization</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>End-to-end zero knowledge AES-256 patient data encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Automatic offline resilience for clinical field emergencies</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MedicalDataSphere className="w-full h-[480px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Integrations Section: "Bring All Systems Under One Roof" (From Reference) */}
      <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge variant="emerald">Ecosystem Integrations</SectionBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Bring All Systems <span className="font-serif italic font-normal text-emerald-700">Under One Roof</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
            KJ Systems integrates effortlessly with your favorite apps like Slack, Google Calendar, WhatsApp, Zoom, QuickBooks, and national EHR networks.
          </p>

          <div className="mt-12 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card bg-neutral-50 p-4 sm:p-8 group hover:shadow-floating transition-all">
            <img
              src="/images/img_79_weyfi04992o3sQxboEHBp2RFmvM.png"
              alt="KJ Systems Integrations Ecosystem"
              className="w-full h-auto object-contain mx-auto rounded-2xl group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* 6. Modular Specialty Care Grid */}
      <section className="py-20 md:py-28 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <SectionBadge variant="light">Specialty Care</SectionBadge>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
              Modular Architecture for <span className="text-emerald-700 font-serif italic font-normal">Every Practice</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Select only the specialized clinical tools your department needs, without paying for unused software bloat.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clinicalSpecialties.map((item) => (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-white border border-neutral-200/80 shadow-sm hover:shadow-card hover:border-emerald-300 transition-all space-y-3"
              >
                <div className="w-11 h-11 rounded-2xl bg-neutral-50 border border-neutral-200/60 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-950">{item.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <FAQAccordion />

      {/* 8. Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default FeaturesPage;
