import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBadge } from '../common/SectionBadge';
import { AnimatedCounter } from '../common/AnimatedCounter';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Activity } from 'lucide-react';

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Mission */}
          <div className="lg:col-span-5 space-y-6">
            <SectionBadge variant="emerald">Who We Are</SectionBadge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Innovating for a <br />
              <span className="text-emerald-700">Smarter Future</span>
            </h2>
            <p className="text-base text-neutral-600 leading-relaxed">
              Global health-tech company creating smarter, simpler solutions for doctors, clinics, and hospitals worldwide.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Empower decisions with real-time dashboards
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Track, analyze, and act instantly with intuitive dashboards designed for accuracy and speed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">
                    Active dashboards monitored daily
                  </h4>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Over <span className="font-semibold text-neutral-900 font-mono"><AnimatedCounter value={14.2} decimals={1} suffix="M" /></span> active patient interactions and consultations synchronized across 50 states.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs tracking-wide uppercase transition-all shadow-md group"
              >
                <span>About us</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Dashboard Mockup & Live Stats */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl p-4 sm:p-6 bg-neutral-50 border border-neutral-200/80 shadow-card">
              <div className="rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/80 relative shadow-card group">
                <img
                  src="/images/clinical_dashboard_efficiency.jpg"
                  alt="KJ Systems Clinic Administration Dashboard"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.01]"
                />

                {/* Live Stat Callout - Senior UX Glassmorphic HUD */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-neutral-200/80 max-w-[210px] ring-1 ring-black/5 hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-bold text-neutral-900 tracking-tight">Daily Efficiency</span>
                    </div>
                    <div className="w-5 h-5 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-100/60">
                      <TrendingUp className="w-3 h-3" />
                    </div>
                  </div>
                  <div className="mt-1.5 text-2xl sm:text-3xl font-black text-neutral-950 font-mono tracking-tight">
                    <AnimatedCounter value={68} prefix="+" suffix="%" />
                  </div>
                  <p className="text-[10px] text-neutral-500 leading-tight mt-0.5">Admin time reduced across clinics</p>
                </div>
              </div>

              {/* Bottom Quick Metric Cards - Engineered with Animated Counters */}
              <div className="mt-4 grid grid-cols-3 gap-3">
                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all text-center group/metric">
                  <div className="text-xl sm:text-2xl font-black text-neutral-950 font-mono tracking-tight">
                    <AnimatedCounter value={1200} suffix="+" />
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium mt-1">Active Clinics</div>
                </div>
                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all text-center group/metric">
                  <div className="text-xl sm:text-2xl font-black text-emerald-700 font-mono tracking-tight">
                    <AnimatedCounter value={99.4} decimals={1} suffix="%" />
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium mt-1">Patient Satisfaction</div>
                </div>
                <div className="p-3.5 sm:p-4 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-card hover:-translate-y-0.5 transition-all text-center group/metric">
                  <div className="text-xl sm:text-2xl font-black text-neutral-950 font-mono tracking-tight">
                    <AnimatedCounter value={14.2} decimals={1} suffix="M+" />
                  </div>
                  <div className="text-[11px] text-neutral-500 font-medium mt-1">Records Secured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
