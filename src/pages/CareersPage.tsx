import React, { useState, useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { careerPositions, hrContact } from '../data/websiteData';
import { CareerPosition } from '../types';
import {
  ArrowRight,
  MapPin,
  Briefcase,
  CheckCircle2,
  Sparkles,
  X,
  Heart,
  Shield,
  Phone,
  Mail,
  ChevronDown,
  GraduationCap,
  Clock,
  Award,
  Send,
  Building2,
  Laptop
} from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';
import { motion, AnimatePresence } from 'framer-motion';

export const CareersPage: React.FC = () => {
  // Accordion state: open the first job by default
  const [openJobId, setOpenJobId] = useState<string | null>(careerPositions[0]?.id || null);
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // When modal opens/closes, prevent background Lenis scroll conflicts
  useEffect(() => {
    if (selectedJob) {
      (window as any).__lenis?.stop();
    } else {
      (window as any).__lenis?.start();
      (window as any).__lenis?.resize();
    }
  }, [selectedJob]);

  const toggleJob = (jobId: string) => {
    const nextState = openJobId === jobId ? null : jobId;
    setOpenJobId(nextState);

    // Prompt Lenis to recalculate scroll bounds smoothly
    setTimeout(() => {
      (window as any).__lenis?.resize();
    }, 50);
    setTimeout(() => {
      (window as any).__lenis?.resize();
    }, 350);
  };

  return (
    <div className="w-full pt-28 md:pt-36 bg-[#fcfcfc]">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>We Are Hiring &bull; KJ Systems</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Join the Movement <br />
          <span className="text-emerald-700 font-serif italic font-normal">
            to Transform Care
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Help us engineer high-performance healthcare software. We offer structured training, competitive compensation, permanent work-from-home options, and comprehensive benefits.
        </p>

        {/* Perks Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700 mb-3">
              <Laptop className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-neutral-900 text-sm">Work From Home (WFH)</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Permanent remote flexibility following our structured hands-on offline training program.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700 mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-neutral-900 text-sm">₹4 LPA to ₹5 LPA Packages</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Competitive annual compensation packages with guaranteed on-time monthly salary and PF benefits.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 hover:shadow-card transition-all">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700 mb-3">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-neutral-900 text-sm">Real-Project Mentorship</h4>
            <p className="text-xs text-neutral-500 mt-1">
              Hands-on live architecture training on real-time healthcare databases, APIs, and frontends.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions Accordion Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-neutral-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-md mx-auto mb-12">
            <SectionBadge variant="emerald">Open Positions</SectionBadge>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
              Current Career Opportunities
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-neutral-500">
              Click any position below to expand full details, qualifications, perks, and apply directly.
            </p>
          </div>

          {/* Interactive Job Accordion List */}
          <div className="space-y-4">
            {careerPositions.map((job) => {
              const isOpen = openJobId === job.id;

              return (
                <div
                  key={job.id}
                  className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-emerald-300 shadow-card ring-1 ring-emerald-500/10'
                      : 'border-neutral-200/80 shadow-sm hover:border-neutral-300 hover:shadow-soft'
                  }`}
                >
                  {/* Accordion Clickable Header */}
                  <button
                    type="button"
                    onClick={() => toggleJob(job.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 cursor-pointer select-none focus:outline-none group"
                  >
                    <div className="space-y-2 flex-1 pr-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold">
                          {job.department}
                        </span>
                        {job.salary && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-[11px] font-bold">
                            {job.salary}
                          </span>
                        )}
                        <span className="text-xs text-neutral-400">&bull;</span>
                        <span className="text-xs text-neutral-500 font-medium flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                          {job.location}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                        {job.title}
                      </h3>

                      {!isOpen && (
                        <p className="text-xs sm:text-sm text-neutral-500 line-clamp-1">
                          {job.description}
                        </p>
                      )}
                    </div>

                    {/* Expand/Collapse Indicator */}
                    <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                      <span className="hidden sm:inline-block text-xs font-semibold text-neutral-500 group-hover:text-emerald-700 transition-colors">
                        {isOpen ? 'Close details' : 'View role details'}
                      </span>
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-emerald-600 text-white rotate-180 shadow-sm'
                            : 'bg-neutral-100 text-neutral-700 group-hover:bg-emerald-50 group-hover:text-emerald-700'
                        }`}
                      >
                        <ChevronDown className="w-5 h-5 transition-transform" />
                      </div>
                    </div>
                  </button>

                  {/* Accordion Expandable Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.04, 0.62, 0.23, 0.98] }}
                        onAnimationComplete={() => {
                          (window as any).__lenis?.resize();
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 sm:px-8 pt-2 border-t border-neutral-100/90 space-y-6">
                          {/* Qualification & Mode Highlights */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                            {job.qualification && (
                              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex items-start gap-3 text-xs text-neutral-700">
                                <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-neutral-900 block">
                                    Qualification:
                                  </span>
                                  <span>{job.qualification}</span>
                                </div>
                              </div>
                            )}

                            {job.mode && (
                              <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200/70 flex items-start gap-3 text-xs text-neutral-700">
                                <Clock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <div>
                                  <span className="font-bold text-neutral-900 block">
                                    Work Arrangement:
                                  </span>
                                  <span>{job.mode}</span>
                                </div>
                              </div>
                            )}
                          </div>

                          {/* Full Job Description */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">
                              Role Overview
                            </h4>
                            <p className="text-sm text-neutral-700 leading-relaxed">
                              {job.description}
                            </p>
                          </div>

                          {/* Responsibilities & Requirements Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1">
                            {job.responsibilities && job.responsibilities.length > 0 && (
                              <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-100">
                                <h4 className="text-sm font-bold text-neutral-950 mb-3 flex items-center gap-2">
                                  <Briefcase className="w-4 h-4 text-emerald-600" />
                                  <span>Key Responsibilities</span>
                                </h4>
                                <ul className="space-y-2 text-xs text-neutral-600">
                                  {job.responsibilities.map((r, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{r}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {job.requirements && job.requirements.length > 0 && (
                              <div className="p-5 rounded-2xl bg-neutral-50/70 border border-neutral-100">
                                <h4 className="text-sm font-bold text-neutral-950 mb-3 flex items-center gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Requirements & Skills</span>
                                </h4>
                                <ul className="space-y-2 text-xs text-neutral-600">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>

                          {/* Desired Candidate Profile */}
                          {job.desiredProfile && job.desiredProfile.length > 0 && (
                            <div className="p-4 rounded-2xl bg-neutral-50/50 border border-neutral-200/60">
                              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                                Desired Candidate Profile
                              </h4>
                              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600">
                                {job.desiredProfile.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Perks & Benefits Breakdown */}
                          {job.perks && job.perks.length > 0 && (
                            <div>
                              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                                Perks & Compensation
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {job.perks.map((p, i) => (
                                  <div
                                    key={i}
                                    className="p-3 rounded-xl bg-emerald-50/40 border border-emerald-100/60 flex items-start gap-2 text-xs text-neutral-700"
                                  >
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{p}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Service Commitment / Bond */}
                          {job.bond && (
                            <div className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-center justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-amber-700 shrink-0" />
                                <span>
                                  <strong>Service Commitment: </strong>
                                  {job.bond}
                                </span>
                              </div>
                              <span className="text-[11px] text-amber-800 font-semibold uppercase tracking-wider">
                                KJ Systems Policy
                              </span>
                            </div>
                          )}

                          {/* Bottom Action Bar */}
                          <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-2 text-xs text-neutral-500">
                              <Building2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>KJ Systems &bull; Hyderabad, India</span>
                            </div>

                            <div className="flex flex-wrap items-center gap-2.5">
                              {/* Apply by Email */}
                              <a
                                href={`mailto:${hrContact?.email || 'hr@kjsystems.in'}?subject=Application%20for%20${encodeURIComponent(job.title)}&body=Dear%20HR%20Sir%2C%0A%0AI%20am%20interested%20in%20applying%20for%20the%20${encodeURIComponent(job.title)}%20position%20at%20KJ%20Systems.%0A%0AName%3A%20%0APhone%3A%20%0AQualification%3A%20%0AAttached%20Resume%3A%20%0A%0AThank%20you.`}
                                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm"
                              >
                                <Mail className="w-3.5 h-3.5" />
                                <span>Apply by Email</span>
                              </a>

                              {/* Apply Online Modal */}
                              <button
                                type="button"
                                onClick={() => {
                                  setSelectedJob(job);
                                  setApplied(false);
                                }}
                                className="px-5 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs tracking-wider uppercase transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                              >
                                <span>Apply Online</span>
                                <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Direct HR Contact Card */}
      {hrContact && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="p-6 sm:p-8 rounded-3xl bg-neutral-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Direct HR Recruitment Desk
              </span>
              <h3 className="text-xl font-bold">Have questions regarding an opening?</h3>
              <p className="text-xs text-neutral-400">
                Contact our talent acquisition desk directly via phone or email for immediate assistance.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`tel:${hrContact.phone}`}
                className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{hrContact.displayPhone}</span>
              </a>
              <a
                href={hrContact.mailtoLink}
                className="px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white border border-neutral-700 font-semibold text-xs transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>{hrContact.email}</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Quick Application Modal */}
      {selectedJob && (
        <div
          onClick={() => setSelectedJob(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-neutral-100 max-h-[90vh] overflow-y-auto p-6 sm:p-8"
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {!applied ? (
              <div className="space-y-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                      {selectedJob.department} &bull; {selectedJob.type}
                    </span>
                    {selectedJob.salary && (
                      <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200/80 text-xs font-bold">
                        {selectedJob.salary}
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-extrabold text-neutral-950">
                    Apply: {selectedJob.title}
                  </h2>
                  <p className="mt-1 text-xs text-neutral-500 font-medium">
                    {selectedJob.location}
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setApplied(true);
                  }}
                  className="space-y-4 pt-2"
                >
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Highest Qualification *
                    </label>
                    <input
                      type="text"
                      required
                      defaultValue={selectedJob.qualification || 'B.Tech / B.E / Degree'}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Cover Note / LinkedIn / Portfolio Link (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Brief note about your background or portfolio link..."
                      className="w-full px-4 py-2 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-900">
                    <span className="font-semibold">Note: </span>
                    You may also email your resume directly to{' '}
                    <a
                      href={hrContact?.mailtoLink}
                      className="font-bold underline text-emerald-800"
                    >
                      {hrContact?.email || 'hr@kjsystems.in'}
                    </a>.
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedJob(null)}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-neutral-600 hover:bg-neutral-100 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-xs uppercase tracking-wider shadow cursor-pointer flex items-center gap-2"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="py-10 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-950">Application Submitted!</h3>
                <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                  Thank you for applying for the <strong>{selectedJob.title}</strong> role at KJ Systems. Our HR desk will review your submission and contact you within 2 business days.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-3 px-6 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold cursor-pointer"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default CareersPage;
