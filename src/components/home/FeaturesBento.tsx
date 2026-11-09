import React from 'react';
import { SectionBadge } from '../common/SectionBadge';
import { featuresData } from '../../data/websiteData';
import { Video, Stethoscope, CreditCard, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FeaturesBento: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#fcfcfc] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge variant="light">Features</SectionBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Everything You Need <br />
            <span className="text-neutral-900 font-serif italic font-normal">to Care Smarter</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            From appointments to analytics, manage it all in one unified, intelligent platform.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Card 1: Real-Time Doctor Consultation (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
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

            <div className="mt-6 relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 aspect-[16/10] group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/images/doctor_consultation_realtime.jpg"
                alt="Real-Time Doctor Consultation"
                className="w-full h-full object-cover object-[72%_center]"
              />
              {/* Telehealth status tag */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Consultation</span>
              </div>

              {/* Bottom-left Doctor Info Pill */}
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
          <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs font-semibold mb-3">
                Specialized Tools
              </span>
              <h3 className="text-2xl font-bold text-neutral-950 tracking-tight">
                Multi-Specialty Modules
              </h3>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                Access custom modules for cardiology, dental, X-ray imaging, and telemetry in one interface.
              </p>
            </div>

            <div className="mt-6 relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 aspect-[4/3] group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/images/img_82_6U4LDtEPVSAhT9LNJbCeoBvaOY.png"
                alt="Multi-Specialty Modules"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 3: Fast & Secure Payments (Span 5) */}
          <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
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

            <div className="mt-6 relative rounded-2xl overflow-hidden bg-neutral-50/80 border border-neutral-100 flex items-center justify-center p-2 sm:p-3 group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/images/fast_secure_payments.jpg"
                alt="Fast & Secure Payments"
                className="w-full h-auto object-contain rounded-xl shadow-sm"
              />
            </div>
          </div>

          {/* Card 4: Smart Analytics & Reports (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col justify-between overflow-hidden group">
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

            <div className="mt-6 relative rounded-2xl overflow-hidden bg-neutral-50/80 border border-neutral-100 flex items-center justify-center p-2 sm:p-3 group-hover:scale-[1.01] transition-transform duration-300">
              <img
                src="/images/smart_analytics_reports.jpg"
                alt="Smart Analytics & Reports"
                className="w-full h-auto object-contain rounded-xl shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* View all features link */}
        <div className="mt-12 text-center">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-emerald-700 transition-colors group"
          >
            <span>Explore all specialized clinical features</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
