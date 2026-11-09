import React, { useState } from 'react';
import { SectionBadge } from '../common/SectionBadge';
import { pricingPlans } from '../../data/websiteData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-20 md:py-32 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge variant="emerald">Pricing</SectionBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
            Transparent <span className="text-emerald-700">Pricing</span>
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Choose the plan that fits your needs — no hidden fees, no surprises.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-neutral-100 border border-neutral-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-neutral-950 text-white shadow'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'yearly'
                  ? 'bg-neutral-950 text-white shadow'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <span>Yearly</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                  plan.featured
                    ? 'bg-neutral-950 text-white shadow-2xl border-2 border-emerald-500/40 md:-translate-y-2'
                    : 'bg-neutral-50 text-neutral-900 border border-neutral-200/80 shadow-card hover:shadow-floating'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3.5 right-8 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-neutral-950 text-[11px] font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  <p
                    className={`mt-2 text-xs sm:text-sm leading-relaxed ${
                      plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-black tracking-tight font-mono">
                      ${price}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.featured ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      /month {billingCycle === 'yearly' && '(billed annually)'}
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-8">
                    <Link
                      to="/contact"
                      className={`w-full py-3.5 px-6 rounded-2xl text-xs font-semibold tracking-wide uppercase flex items-center justify-center gap-2 transition-all ${
                        plan.featured
                          ? 'bg-emerald-500 hover:bg-emerald-400 text-neutral-950 shadow-lg'
                          : 'bg-neutral-950 hover:bg-neutral-850 text-white shadow'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Feature Checklist */}
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
                          <span
                            className={plan.featured ? 'text-neutral-200' : 'text-neutral-700'}
                          >
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

        {/* Compare full plans link */}
        <div className="mt-12 text-center">
          <Link
            to="/pricing"
            className="text-xs font-semibold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 underline underline-offset-4"
          >
            View Full Feature Comparison Table & Enterprise Pricing
          </Link>
        </div>
      </div>
    </section>
  );
};
