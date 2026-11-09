import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake } from 'lucide-react';
import { GetADemoModal } from '../common/GetADemoModal';

export const FinalCTA: React.FC = () => {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <>
      <section className="py-20 md:py-28 bg-[#fcfcfc] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl p-8 sm:p-14 md:p-20 bg-neutral-950 text-white overflow-hidden shadow-2xl">
            {/* Subtle background image overlay from reference */}
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
              <img
                src="/images/img_4_9XEjArInsXmx2PWZaMHEdTeNU.png"
                alt="Background pattern"
                className="w-full h-full object-cover scale-110 blur-sm"
              />
            </div>

            {/* Radial emerald glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/30 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Next-Gen Healthcare Management</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Revamp Your <br />
                <span className="text-emerald-400">Healthcare Workflow</span>
              </h2>

              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Join clinics, hospitals, and doctors who trust KJ Systems to simplify operations and deliver compassionate, top-tier medical care.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setDemoOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/pricing"
                  className="w-full sm:w-auto px-7 py-4 rounded-full bg-neutral-900/90 hover:bg-neutral-850 text-white font-semibold text-sm border border-neutral-700/80 transition-all flex items-center justify-center gap-2"
                >
                  <span>Compare Plans</span>
                </Link>
              </div>

              {/* Quick trust metrics */}
              <div className="pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-neutral-400 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> HIPAA & GDPR Compliant
                </span>
                <span className="flex items-center gap-1.5">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" /> 14-Day Free Trial
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" /> No Credit Card Required
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Scheduler Modal */}
      <GetADemoModal isOpen={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
};
