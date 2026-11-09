import React, { useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { Shield, Image, Sparkles, Type, CheckCircle2 } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const LicensePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 md:pt-36">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Legal & Attribution</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Licenses & Assets
        </h1>

        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          All graphical assets, photography, typography, and icon sets utilized throughout KJ Systems are properly licensed for commercial and personal medical software use.
        </p>
      </section>

      {/* Asset Categories */}
      <section className="py-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Images */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Image className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950">Photography & Images</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              All photographic portraits, doctor avatars, and clinical imagery are sourced under commercial license from Lummi and royalty-free medical libraries.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Licensed via Lummi
            </div>
          </div>

          {/* Icons */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950">Iconography</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Medical glyphs, telemetry iconography, and user navigation icons are licensed from Hugeicons and Lucide open-source systems under MIT license.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Licensed via Hugeicons & Lucide
            </div>
          </div>

          {/* Fonts */}
          <div className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <Type className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-950">Typography</h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Inter Tight, Inter, Lora, and Fragment Mono are open-source typefaces licensed under the SIL Open Font License (OFL) hosted via Google Fonts.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> Google Fonts SIL OFL
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
