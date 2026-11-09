import React, { useState } from 'react';
import { SectionBadge } from '../common/SectionBadge';
import { onboardingSteps } from '../../data/websiteData';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { InteractiveStepPreview } from './InteractiveStepPreview';

export const GettingStartedSteps: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = onboardingSteps[activeStepIndex];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <SectionBadge variant="light">Simple steps</SectionBadge>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Get Started <span className="font-serif italic font-normal">in Minutes</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
            From setup to insights—manage your clinic with just three easy steps.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-10">
          {onboardingSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`group flex items-center gap-2 sm:gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-[13px] font-medium transition-all duration-200 border ${
                activeStepIndex === idx
                  ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                  : 'bg-white text-neutral-600 hover:text-neutral-950 border-neutral-200/90 hover:border-neutral-300 hover:bg-neutral-50/80'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-colors ${
                  activeStepIndex === idx
                    ? 'bg-emerald-500 text-white'
                    : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200 group-hover:text-neutral-800'
                }`}
              >
                {idx + 1}
              </span>
              <span className="tracking-tight">{step.title}</span>
            </button>
          ))}
        </div>

        {/* Step Content Card */}
        <div className="bg-white rounded-2xl p-5 sm:p-7 lg:p-8 border border-neutral-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Column: Details */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-5">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-mono text-[11px] font-semibold">
                {activeStep.step}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight leading-snug">
                {activeStep.tagline}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {activeStep.description}
              </p>

              <div className="space-y-2 pt-1">
                {activeStep.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-[13px] text-neutral-700 font-medium leading-tight">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 sm:pt-3">
                <Link
                  to="/early-access"
                  className="inline-flex items-center gap-2 px-4.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs tracking-wide uppercase transition-all shadow-sm group"
                >
                  <span>Experience Step {activeStepIndex + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-200 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Preview (Interactive Blackbox) */}
            <div className="lg:col-span-7">
              <InteractiveStepPreview
                stepIndex={activeStepIndex}
                step={activeStep}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
