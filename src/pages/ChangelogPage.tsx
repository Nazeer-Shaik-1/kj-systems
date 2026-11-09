import React, { useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { changelogVersions } from '../data/websiteData';
import { Tag, Calendar, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';
import { Link } from 'react-router-dom';

export const ChangelogPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 md:pt-36">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Release Notes</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Product Changelog
        </h1>

        <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
          Stay informed about new clinical modules, system optimizations, and software updates shipped to the KJ Systems platform.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-12 pb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative border-l-2 border-neutral-200 ml-4 sm:ml-8 space-y-12">
          {changelogVersions.map((item, idx) => (
            <div key={item.version} className="relative pl-8 sm:pl-10">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 shadow-sm" />

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-200/80 shadow-sm hover:shadow-card transition-all">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-neutral-950 font-mono">
                      {item.version}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                      {item.tag}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {item.notes.map((note, nIdx) => (
                    <li key={nIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
