import React, { useState, useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { pricingPlans } from '../data/websiteData';
import { Check, X, ArrowRight, Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';

export const PricingPage: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const comparisonFeatures = [
    { name: 'Staff & Doctor Accounts', basic: 'Up to 3 accounts', pro: 'Unlimited accounts' },
    { name: 'Patient Appointment Scheduling', basic: 'Yes (SMS reminders)', pro: 'Yes (Multi-calendar + Auto-sync)' },
    { name: 'Electronic Health Records (EHR)', basic: 'Basic clinical notes', pro: 'Full lifetime history & vitals graph' },
    { name: 'Telemedicine Video & Chat', basic: 'Standard HD calls', pro: 'Encrypted HD with in-call scan sharing' },
    { name: 'Specialty Clinical Modules', basic: 'General Practice only', pro: 'Cardiology, Dental, Radiology, Eye' },
    { name: 'Billing & Insurance Claims', basic: 'Standard invoices', pro: 'Automated claim submission & co-pay' },
    { name: 'Predictive Occupancy Analytics', basic: 'No', pro: 'Yes (Real-time charts & export)' },
    { name: 'HIPAA & GDPR Compliance', basic: 'Included (AES-256)', pro: 'Included (Dedicated BAA available)' },
    { name: 'Support SLA', basic: 'Standard business hours', pro: '24/7 Dedicated Priority Support' },
  ];

  return (
    <div className="w-full pt-28 md:pt-36">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Simple, Predictable Plans</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Transparent <br />
          <span className="text-emerald-700 font-serif italic font-normal">Pricing</span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Choose the plan that fits your clinical scale — no hidden fees, no per-patient surcharges, and no surprise lock-in contracts.
        </p>

        {/* Toggle */}
        <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-neutral-100 border border-neutral-200">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              billingCycle === 'monthly'
                ? 'bg-neutral-950 text-white shadow'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            Monthly Billing
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold transition-all ${
              billingCycle === 'yearly'
                ? 'bg-neutral-950 text-white shadow'
                : 'text-neutral-600 hover:text-neutral-950'
            }`}
          >
            <span>Yearly Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
              Save 20%
            </span>
          </button>
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-12 flex flex-col justify-between transition-all ${
                  plan.featured
                    ? 'bg-neutral-950 text-white shadow-2xl border-2 border-emerald-500/50 md:-translate-y-2'
                    : 'bg-neutral-50 text-neutral-900 border border-neutral-200/80 shadow-card'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-emerald-500 text-neutral-950 text-[11px] font-black uppercase tracking-wider shadow flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Recommended for Clinics</span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p
                    className={`mt-2 text-xs sm:text-sm ${
                      plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-black font-mono">${price}</span>
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      /month {billingCycle === 'yearly' && '(billed annually)'}
                    </span>
                  </div>

                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className={`w-full py-4 px-6 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        plan.featured
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg'
                          : 'bg-neutral-950 hover:bg-neutral-850 text-white shadow'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-neutral-200/40">
                    <div
                      className={`text-xs font-bold uppercase tracking-wider mb-4 ${
                        plan.featured ? 'text-neutral-300' : 'text-neutral-900'
                      }`}
                    >
                      {plan.includesText}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-xs sm:text-sm">
                          <div
                            className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                              plan.featured
                                ? 'bg-emerald-500/20 text-emerald-400'
                                : 'bg-emerald-100 text-emerald-700'
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span className={plan.featured ? 'text-neutral-200' : 'text-neutral-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Feature Comparison Matrix Table */}
      <section className="py-20 bg-[#fcfcfc] border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <SectionBadge variant="light">Compare Plans</SectionBadge>
            <h2 className="mt-3 text-3xl font-bold text-neutral-950">
              Detailed Feature Breakdown
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Side-by-side comparison of capabilities across tiers.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-neutral-200/80 shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50/80">
                    <th className="py-4 px-6 text-xs font-bold text-neutral-900 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-neutral-900 uppercase tracking-wider">
                      Basic Plan ($29/mo)
                    </th>
                    <th className="py-4 px-6 text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50/50">
                      Professional Plan ($59/mo)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-sm">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-neutral-50/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-neutral-900">
                        {row.name}
                      </td>
                      <td className="py-4 px-6 text-neutral-600">
                        {row.basic}
                      </td>
                      <td className="py-4 px-6 text-emerald-900 font-medium bg-emerald-50/30">
                        {row.pro}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Contact Banner */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Enterprise & Hospital Networks
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Need a custom multi-hospital deployment?
            </h3>
            <p className="text-sm text-neutral-400 max-w-lg">
              We provide dedicated on-premise cloud instances, custom EHR integrations, localized data residency, and SLA guarantees for enterprise healthcare systems.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full bg-white text-neutral-950 font-bold text-xs uppercase tracking-wider hover:bg-neutral-100 transition-all shrink-0"
          >
            Contact Enterprise Sales
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
