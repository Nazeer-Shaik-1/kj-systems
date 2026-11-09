import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Video } from 'lucide-react';

export const Hero: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#f7faf8] via-[#fcfcfc] to-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-emerald-100/40 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Content */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Avatar stack + Joined 18k+ Members */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm mb-5 hover:shadow transition-shadow">
            <div className="flex -space-x-2">
              <img
                src="/images/img_96_I0kyDc6YaaE0Yzag3cZW8QOm9DQ.png"
                alt="Member"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/img_97_IcucP3ShFRm8dIhQ9pD2BOGxzE.png"
                alt="Member"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
              <img
                src="/images/img_98_3RiWh96NkyrqW8kepFGUhUWg.png"
                alt="Member"
                className="w-6 h-6 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-xs font-semibold text-neutral-800">
              Joined 18k+ Members
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
            Smarter Healthcare, <br className="hidden sm:inline" />
            <span className="relative inline-block text-neutral-900">
              One Dashboard
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            Easily keep track of patients, doctors, and medical info — all in one user-friendly platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs tracking-wide uppercase shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>

            <button
              onClick={() => setVideoModalOpen(true)}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-200/90 font-medium text-xs tracking-wide uppercase shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center text-emerald-700">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch demo</span>
            </button>
          </div>


        </div>

        {/* Side-by-Side Dual Centerpiece: Heart Beat & Clinic Dashboard */}
        <div className="mt-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Left Card: Realtime Heart Beat / Cardiac Telemetry */}
            <div className="flex flex-col bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                    Realtime Heart Telemetry
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full">
                  72 BPM • Active
                </span>
              </div>

              <div className="relative flex-1 w-full aspect-[1024/977] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-50/50">
                <img
                  src="/images/heart_overview_exact.png"
                  alt="KJ Systems Heart Overview"
                  className="w-full h-full object-contain select-none animate-heartbeat"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Continuous Cardiac Monitoring</span>
                <span className="font-semibold text-emerald-700">Live Vitals Sync</span>
              </div>
            </div>

            {/* Right Card: Clinic Patient Dashboard */}
            <div className="flex flex-col bg-white rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-100 mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-800">
                    Clinic Patient Dashboard
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200/60 px-2.5 py-0.5 rounded-full">
                  EHR Portal • Live
                </span>
              </div>

              <div className="relative flex-1 w-full aspect-[1024/974] flex items-center justify-center overflow-hidden rounded-2xl bg-neutral-50/50 shadow-inner">
                <img
                  src="/images/clinical_dashboard.png"
                  alt="Pre Clinic Patient Dashboard"
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.01]"
                />
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                <span>Patient Chart & Diagnostics</span>
                <span className="font-semibold text-neutral-900">Multi-Clinic Connected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Demo Modal */}
      {videoModalOpen && (
        <div
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-2xl"
          >
            <div className="p-4 flex items-center justify-between border-b border-neutral-800 text-white">
              <span className="text-sm font-semibold flex items-center gap-2">
                <Video className="w-4 h-4 text-emerald-400" />
                KJ Systems Platform Walkthrough
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-neutral-400 hover:text-white p-1 rounded-lg"
              >
                ✕
              </button>
            </div>
            <div className="p-6 text-center text-white space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-950 flex flex-col items-center justify-center border border-neutral-800">
                <img
                  src="/images/clinical_dashboard.png"
                  alt="Video poster"
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-600/90 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </div>
                  <span className="mt-3 text-sm font-medium">Click to Play 3-Minute Product Tour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
