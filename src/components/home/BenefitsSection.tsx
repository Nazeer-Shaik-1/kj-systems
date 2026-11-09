import React from 'react';
import { SectionBadge } from '../common/SectionBadge';
import { benefitsData } from '../../data/websiteData';
import { CheckCircle2 } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FAFAFA] border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
          <SectionBadge variant="emerald">Clinical Workflows</SectionBadge>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Empowering <span className="text-emerald-700">Every User</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
            Tailored features that simplify work for doctors, patients, and healthcare providers.
          </p>
        </div>

        {/* Individual Adjacent Boxes for each Role */}
        <div className="space-y-10 md:space-y-12">
          {benefitsData.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={item.badge}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch"
              >
                {/* Box 1: Matter / Content Card (Increased Length & Span: 7 cols) */}
                <div
                  className={`lg:col-span-7 bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-7 sm:p-9 lg:p-10 flex flex-col justify-between h-full min-h-[340px] sm:min-h-[380px] transition-all duration-300 hover:shadow-card hover:border-neutral-300 ${
                    isReversed ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div>
                    {/* Role Header Badge & Metadata */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200/60 font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                        {item.badge}
                      </span>
                      <span className="font-mono text-[11px] text-neutral-400 font-medium">
                        0{index + 1} // MODULE
                      </span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight leading-snug">
                      {item.title}
                    </h3>

                    {/* Lead Description */}
                    <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Feature Specifications List */}
                  <div className="mt-8 pt-6 border-t border-neutral-100 space-y-4">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3.5 group/point">
                        <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200/60 mt-0.5 group-hover/point:bg-emerald-600 group-hover/point:text-white transition-colors">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm sm:text-[15px] font-semibold text-neutral-900 leading-snug">
                            {pt.title}
                          </h4>
                          <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed mt-0.5">
                            {pt.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Box 2: Photo / Visual Interface Preview Card (5 cols) */}
                <div
                  className={`lg:col-span-5 bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col h-full group transition-all duration-300 hover:shadow-card hover:border-neutral-300 ${
                    isReversed ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Developer-style Window Header Bar */}
                  <div className="px-4 py-2.5 border-b border-neutral-100 bg-neutral-50/80 flex items-center justify-between text-xs text-neutral-400 font-mono select-none">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 group-hover:bg-rose-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 group-hover:bg-amber-400 transition-colors" />
                      <span className="w-2.5 h-2.5 rounded-full bg-neutral-300/80 group-hover:bg-emerald-400 transition-colors" />
                    </div>
                    <span className="text-[11px] text-neutral-500 font-mono tracking-tight lowercase">
                      {item.badge.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.view
                    </span>
                    <span className="text-[10px] text-emerald-800 font-mono font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                      CONNECTED
                    </span>
                  </div>

                  {/* Framed Graphic Canvas */}
                  <div className="flex-1 p-6 sm:p-8 flex items-center justify-center relative bg-gradient-to-b from-neutral-50/50 to-neutral-100/30 overflow-hidden min-h-[260px] sm:min-h-[300px]">
                    {/* Subtle engineering grid backdrop */}
                    <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] [background-size:18px_18px] opacity-40 pointer-events-none" />

                    <img
                      src={item.image}
                      alt={item.title}
                      className="relative z-10 w-full max-w-[340px] h-auto max-h-[290px] object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
