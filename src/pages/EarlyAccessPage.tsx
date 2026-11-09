import React, { useState, useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Mail, Hospital, User } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const EarlyAccessPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    clinic: '',
    role: 'Physician / Doctor',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-28 md:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>KJ Systems v2.0 Beta</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Request Early Access to <br />
          <span className="text-emerald-700 font-serif italic font-normal">
            Next-Gen AI Telemetry
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Be among the first 100 clinics to deploy our real-time 3D anatomical charting engine, automated insurance claim adjudicator, and biometric sync.
        </p>

        {/* Early Access Form */}
        <div className="mt-12 max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-card text-left">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Dr. Evelyn Harper"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Clinical Work Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="evelyn@memorialhealth.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Practice / Clinic Name
                </label>
                <div className="relative">
                  <Hospital className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    placeholder="Memorial Cardiology Center"
                    value={formData.clinic}
                    onChange={(e) => setFormData({ ...formData, clinic: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                  Primary Role
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3.5 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                >
                  <option>Physician / Doctor</option>
                  <option>Clinic Owner / Director</option>
                  <option>Hospital Chief Medical Officer</option>
                  <option>Practice Administrator</option>
                  <option>Health-Tech Developer</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-4 px-6 rounded-2xl bg-neutral-950 hover:bg-neutral-850 text-white font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Join VIP Priority Queue</span>
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-950">
                You're On the VIP Priority List!
              </h3>
              <p className="text-sm text-neutral-600">
                Welcome, {formData.name}. Your clinic ({formData.clinic}) has been allocated VIP Early Access badge #42. We've sent setup credentials to <strong className="text-neutral-900">{formData.email}</strong>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
