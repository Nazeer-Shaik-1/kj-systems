import React, { useState, useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { siteConfig } from '../data/websiteData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { FAQAccordion } from '../components/home/FAQAccordion';
import { FinalCTA } from '../components/home/FinalCTA';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Question',
    message: '',
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
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Robert Intro & Support Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Contact with Us</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Hey there! 👋 <br />
              <span className="text-emerald-700">I'm Robert</span>
            </h1>

            <p className="text-base text-neutral-600 leading-relaxed">
              Whether you need quick answers about clinic onboarding or deep strategy talks for enterprise hospital integration, I'm here to make your journey smooth.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-3 pt-4">
              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">Direct Email</div>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-sm font-bold text-neutral-900 hover:text-emerald-700"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">Toll-Free Support</div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm font-bold text-neutral-900 hover:text-emerald-700"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-emerald-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-medium">Headquarters</div>
                  <span className="text-sm font-semibold text-neutral-900">
                    {siteConfig.address}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200/80 shadow-card">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-2xl font-bold text-neutral-950">
                    Send us a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    We typically reply within 2 business hours during clinical operating days.
                  </p>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Robert Miller"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="robert@healthpractice.org"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all"
                    >
                      <option>Product Inquiry & Demo</option>
                      <option>Clinic EHR Migration</option>
                      <option>Enterprise & Hospital Licensing</option>
                      <option>Technical API Support</option>
                      <option>Billing & Subscription</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your practice or specific requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-neutral-950 hover:bg-neutral-850 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4 text-emerald-400" />
                    <span>Submit Message</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">
                    Message Dispatched to Robert!
                  </h3>
                  <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                    Thank you, {formData.fullName}. Your inquiry has been routed to our clinical onboarding director. Expect an email back at <strong className="text-neutral-900">{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', subject: 'General Question', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-neutral-950 text-white text-xs font-semibold hover:bg-neutral-850 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
