import React, { useEffect, useState } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { ArrowDownToLine, Apple, Monitor, ShieldCheck, CheckCircle2, Zap, WifiOff, HardDrive, Sparkles } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const DownloadPage: React.FC = () => {
  const [downloadStarted, setDownloadStarted] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const triggerDownload = (os: string) => {
    setDownloadStarted(os);
    setTimeout(() => setDownloadStarted(null), 4000);
  };

  return (
    <div className="w-full pt-28 md:pt-36">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Native Desktop Client</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          KJ Systems Desktop App
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          A secure and intuitive desktop platform to manage patient records, schedule appointments, and access real-time health insights all in one place.
        </p>

        {/* Download Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => triggerDownload('macOS')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-neutral-950 hover:bg-neutral-850 text-white font-medium text-sm flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all group"
          >
            <Apple className="w-5 h-5 text-neutral-200" />
            <div className="text-left">
              <div className="text-xs text-neutral-400 leading-none">Download for</div>
              <div className="font-bold text-sm">Mac (Universal)</div>
            </div>
            <ArrowDownToLine className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform ml-2" />
          </button>

          <button
            onClick={() => triggerDownload('Windows')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-200/90 font-medium text-sm flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all group"
          >
            <Monitor className="w-5 h-5 text-emerald-700" />
            <div className="text-left">
              <div className="text-xs text-neutral-500 leading-none">Download for</div>
              <div className="font-bold text-sm">Windows (x64)</div>
            </div>
            <ArrowDownToLine className="w-4 h-4 text-neutral-500 group-hover:translate-y-0.5 transition-transform ml-2" />
          </button>
        </div>

        {downloadStarted && (
          <div className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>KJ Systems {downloadStarted} installer is preparing download (v2.4.0)...</span>
          </div>
        )}
      </section>

      {/* Desktop App Features Grid */}
      <section className="py-16 bg-[#fcfcfc] border-y border-neutral-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Offline Local Caching</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Continue charting patient notes and reviewing scanned labs even when clinic internet connectivity drops. Automatically synchronizes when reconnected.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Hardware Scanner Drivers</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Direct USB/TWAIN scanner drivers for immediate document digitizing, ultrasound stream captures, and multi-monitor clinical radiology displays.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-neutral-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-neutral-950">Biometric Touch ID / Windows Hello</h3>
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Unlock patient charts instantly with hardware fingerprint or facial recognition without typing passwords in front of patients.
              </p>
            </div>
          </div>

          {/* Desktop Preview Visual */}
          <div className="mt-16 rounded-3xl p-4 sm:p-8 bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden">
            <img
              src="/images/img_4_9XEjArInsXmx2PWZaMHEdTeNU.png"
              alt="KJ Systems Desktop App"
              className="w-full h-auto object-cover rounded-2xl border border-neutral-800"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
