import React, { useEffect } from 'react';
import { SectionBadge } from '../components/common/SectionBadge';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import { teamMembers, globalReachCountries, partnerInvestors } from '../data/websiteData';
import { FinalCTA } from '../components/home/FinalCTA';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Globe, Heart, Shield, Sparkles, Users } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full pt-28 md:pt-36">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>About KJ Systems</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-neutral-950 tracking-tight leading-tight">
          Changing How <br />
          <span className="text-emerald-700 font-serif italic font-normal">
            Healthcare Works
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          We’re reimagining healthcare with fully customizable EHR architectures and clinician-first workflows. Engineered by physicians to empower behavioral health and medical practices to operate efficiently and scale with confidence.
        </p>

        {/* Big Impact Statistics with Realtime Animated Counters */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-black text-neutral-950 font-mono">
              <AnimatedCounter value={18000} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-neutral-500 font-medium">Healthcare Providers</div>
          </div>
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-black text-emerald-700 font-mono">
              <AnimatedCounter value={99.2} decimals={1} suffix="%" />
            </div>
            <div className="mt-1 text-xs text-neutral-500 font-medium">Customer Satisfaction</div>
          </div>
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-black text-neutral-950 font-mono">
              <AnimatedCounter value={50} />
            </div>
            <div className="mt-1 text-xs text-neutral-500 font-medium">States Nationwide</div>
          </div>
          <div className="p-6 rounded-3xl bg-neutral-50 border border-neutral-200/80 text-center">
            <div className="text-3xl sm:text-4xl font-black text-neutral-950 font-mono">
              <AnimatedCounter value={16} suffix="+" />
            </div>
            <div className="mt-1 text-xs text-neutral-500 font-medium">Years Clinical Innovation</div>
          </div>
        </div>
      </section>

      {/* Our Mission Section - Recreated from Reference Image */}
      <section className="py-16 md:py-24 bg-white border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 tracking-tight">
              Our Mission
            </h2>
            <p className="text-sm sm:text-base text-neutral-500 max-w-md leading-relaxed md:text-right">
              To build the best EHR technology so we can help those who are helping others—empowering healthcare organizations to operate efficiently and scale with confidence.
            </p>
          </div>

          {/* Bento Grid Layout with Expanded Sizing for the 4 Right-Side Boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Card 1 (Left Tall Card): Connecting Care Globally */}
            <div className="lg:col-span-4 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 lg:p-9 pb-0 sm:pb-0 lg:pb-0 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-card transition-all duration-300 group">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-neutral-950 tracking-tight">
                  Connecting Care Globally
                </h3>
              </div>
              <div className="mt-8 flex justify-center items-end">
                <img
                  src="/images/img_17_6rRQSLhZBhqw7clBwRNjbR2ZseA.png"
                  alt="Connecting Care Globally"
                  className="w-full max-w-[340px] h-auto object-contain object-bottom group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>

            {/* Right Side: 4 Enlarged Bento Boxes (Expanded Height, Padding & Typographic Scale) */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-6 lg:gap-8">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8 flex-1">
                {/* Box 1: Quote Card */}
                <div className="sm:col-span-7 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 lg:p-7.5 flex flex-col justify-between shadow-sm hover:shadow-card transition-all duration-300 min-h-[215px] sm:min-h-[230px] lg:min-h-[245px]">
                  <div>
                    {/* Emerald Quote Icon */}
                    <svg className="w-7 h-5 mb-5" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 13.507 0 L 14.72 1.307 C 13.855 1.963 13.17 2.648 12.665 3.361 C 12.16 4.062 11.823 4.815 11.655 5.618 C 12.564 6.127 13.154 6.535 13.423 6.84 C 13.693 7.135 13.827 7.48 13.827 7.876 C 13.827 8.226 13.715 8.56 13.49 8.877 C 13.266 9.183 12.907 9.511 12.413 9.862 L 10.998 10.88 C 9.875 10.133 9.117 9.494 8.724 8.962 C 8.331 8.419 8.135 7.802 8.135 7.112 C 8.135 6.082 8.606 4.939 9.55 3.683 C 10.493 2.427 11.812 1.199 13.507 0 Z M 5.373 0 L 6.585 1.307 C 5.676 2.02 4.974 2.721 4.48 3.412 C 3.986 4.102 3.666 4.837 3.52 5.618 C 4.362 6.071 4.935 6.461 5.238 6.789 C 5.541 7.118 5.693 7.491 5.693 7.91 C 5.693 8.249 5.58 8.572 5.356 8.877 C 5.142 9.171 4.783 9.5 4.278 9.862 L 2.863 10.88 C 1.729 10.133 0.966 9.494 0.573 8.962 C 0.191 8.419 0 7.802 0 7.112 C 0 6.093 0.472 4.951 1.415 3.683 C 2.369 2.416 3.688 1.188 5.373 0 Z"
                        fill="#2B7F5C"
                      />
                    </svg>
                    <p className="text-sm sm:text-base lg:text-[17px] font-medium text-neutral-900 leading-relaxed">
                      “KJ Systems is transforming healthcare by giving providers fully customizable EHR workflows—eliminating charting burnout so clinicians can focus on delivering life-changing care.”
                    </p>
                  </div>

                  <div className="flex items-center gap-3.5 mt-5 pt-3 border-t border-neutral-100/70">
                    <img
                      src="/images/img_18_kaYDDioYRVnLTD5nvwHcLPLhgHU.png"
                      alt="DR. KUMARA PRATHIPATI"
                      className="w-10 h-10 rounded-full object-cover border border-neutral-200"
                    />
                    <div>
                      <p className="text-sm font-bold text-neutral-950">DR. KUMARA PRATHIPATI,</p>
                      <p className="text-xs text-neutral-500 font-medium">CEO KJ Systems</p>
                    </div>
                  </div>
                </div>

                {/* Box 2: Industry Recognition (Deep Emerald Card) */}
                <div className="sm:col-span-5 bg-[#2B7F5C] rounded-3xl p-6 sm:p-7 lg:p-7.5 flex flex-col justify-end relative overflow-hidden shadow-sm text-white group min-h-[215px] sm:min-h-[230px] lg:min-h-[245px]">
                  {/* Subtle Flower / Medical Cross SVG Watermark */}
                  <svg
                    className="absolute -top-10 -right-10 w-44 h-44 opacity-35 pointer-events-none group-hover:scale-105 transition-transform duration-500"
                    viewBox="0 0 237 221"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M206.067 52.4033L214.852 66.8497C219.701 74.8235 216.819 85.0327 208.421 89.6368L171.208 110.039L208.421 130.44C216.819 135.044 219.701 145.254 214.852 153.227L206.067 167.674C201.218 175.648 190.465 178.383 182.067 173.779L144.854 153.378V194.181C144.854 203.389 136.983 210.863 127.284 210.863H109.715C100.016 210.863 92.1448 203.389 92.1448 194.181V153.378L54.9322 173.779C46.5339 178.383 35.7812 175.648 30.932 167.674L22.1471 153.227C17.2979 145.254 20.1793 135.044 28.5776 130.44L65.7903 110.039L28.5776 89.6368C20.1617 85.0327 17.2979 74.8235 22.1471 66.8497L30.932 52.4033C35.7812 44.4295 46.5339 41.6937 54.9322 46.2978L92.1448 66.6995V25.8962C92.1448 16.6879 100.016 9.21448 109.715 9.21448H127.284C136.983 9.21448 144.854 16.6879 144.854 25.8962V66.6995L182.067 46.2978C190.482 41.6937 201.218 44.4295 206.067 52.4033Z"
                      fill="#328864"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M150.087 96.6986H132.857V80.6987C132.857 76.6511 129.319 73.3661 124.96 73.3661H112.041C107.682 73.3661 104.144 76.6511 104.144 80.6987V96.6986H86.9138C82.5548 96.6986 79.0171 99.9836 79.0171 104.031V116.027C79.0171 120.075 82.5548 123.36 86.9138 123.36H104.144V139.36C104.144 143.408 107.682 146.693 112.041 146.693H124.96C129.319 146.693 132.857 143.408 132.857 139.36V123.36H150.087C154.446 123.36 157.984 120.075 157.984 116.027V104.031C157.984 99.9836 154.446 96.6986 150.087 96.6986Z"
                      fill="#2B7F5C"
                    />
                  </svg>

                  <div className="relative z-10">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-mono">
                      <AnimatedCounter value={25} suffix="+" />
                    </div>
                    <div className="mt-2 text-sm sm:text-base text-emerald-100 font-medium">
                      Industry Recognition
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 lg:gap-8 flex-1">
                {/* Box 3: 92% Customer Satisfaction & Brand Logos */}
                <div className="sm:col-span-5 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 lg:p-7.5 flex flex-col justify-between shadow-sm hover:shadow-card transition-all duration-300 min-h-[215px] sm:min-h-[230px] lg:min-h-[245px]">
                  <div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight font-mono">
                      <AnimatedCounter value={98} suffix="%" />
                    </div>
                    <div className="mt-2 text-sm sm:text-base text-neutral-500 font-medium">
                      Client Retention Rate
                    </div>
                  </div>

                  {/* Brand Logos */}
                  <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between gap-3 overflow-hidden opacity-50 hover:opacity-85 transition-opacity">
                    <img src="/images/img_19_tOrb9EPDMmQ8YTSuB0fYTT4HCqc.svg" alt="Partner" className="h-5 sm:h-6 w-auto grayscale" />
                    <img src="/images/img_20_askYMYhtLOUUhYXBgtk7KLrg4.svg" alt="Partner" className="h-5 sm:h-6 w-auto grayscale" />
                    <img src="/images/img_21_Ui89YGr8sGLw3T0jgfGrARUjs.svg" alt="Partner" className="h-5 sm:h-6 w-auto grayscale" />
                    <img src="/images/img_22_c7w24vF2tlbx4TqYZnTUia5Lv8.svg" alt="Partner" className="h-5 sm:h-6 w-auto grayscale" />
                  </div>
                </div>

                {/* Box 4: 3 Years Card */}
                <div className="sm:col-span-7 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 lg:p-7.5 flex flex-col justify-between shadow-sm hover:shadow-card transition-all duration-300 min-h-[215px] sm:min-h-[230px] lg:min-h-[245px]">
                  <div>
                    <div className="text-sm sm:text-base font-bold text-neutral-950 font-mono">
                      <AnimatedCounter value={16} suffix="+ Years" />
                    </div>
                    <p className="mt-4 text-xs sm:text-sm lg:text-[15px] text-neutral-800 leading-relaxed font-normal">
                      KJ Systems empowers 18,000+ mental health clinicians and healthcare organizations nationwide with deeply customized EHR workflows.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-neutral-100 text-xs sm:text-sm lg:text-base text-neutral-400 font-medium font-mono">
                    100% ONC & SOC 2 Type II Certified.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section: Recreated from Reference Image (Seated on Wooden Stools with Curved Dashed Arrows) */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-white via-neutral-50/60 to-white overflow-hidden border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <SectionBadge variant="emerald">KJ Systems Leadership</SectionBadge>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight">
              The People Behind the <span className="text-emerald-700 font-serif italic font-normal">Vision</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
              Meet the executive leadership guiding KJ Systems in engineering intuitive, compliant, and scalable healthcare architectures.
            </p>
          </div>

          {/* Leaders Panoramic Row matching Reference Design */}
          <div className="relative overflow-x-auto pb-10 pt-4 scrollbar-thin scrollbar-thumb-neutral-200">
            <div className="min-w-[960px] lg:min-w-0 grid grid-cols-6 gap-2 sm:gap-4 lg:gap-5 items-end">
              {teamMembers.map((member, idx) => {
                // Staggered heights for text labels matching the reference image
                const isHigh = idx % 2 === 0;

                return (
                  <div
                    key={member.name}
                    className="flex flex-col items-center text-center group cursor-default"
                  >
                    {/* Top Text & Curved Dashed Arrow */}
                    <div
                      className={`w-full flex flex-col items-center justify-end transition-transform duration-300 ${
                        isHigh ? 'min-h-[145px] pb-2' : 'min-h-[145px] pt-8 pb-2'
                      }`}
                    >
                      {/* Name in Emerald Palette matching website */}
                      <h3 className="text-xs sm:text-[13px] md:text-sm font-extrabold text-emerald-800 tracking-tight leading-snug group-hover:text-emerald-600 transition-colors uppercase">
                        {member.name}
                      </h3>

                      {/* Role / Designation */}
                      <p className="text-[11px] sm:text-xs text-neutral-500 font-medium leading-tight mt-1 max-w-[155px]">
                        {member.role}
                      </p>

                      {/* Curved Dashed Arrow with Arrowhead pointing down to shoulder */}
                      <div className="mt-2 text-neutral-400 group-hover:text-emerald-600 transition-colors">
                        {idx === 0 && (
                          <svg className="w-10 h-12" viewBox="0 0 40 48" fill="none">
                            <path
                              d="M 12 2 C 16 16, 32 26, 28 42"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 23 37 L 28 44 L 34 38"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {idx === 1 && (
                          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                            <path
                              d="M 28 2 C 24 14, 10 22, 14 34"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 19 29 L 14 36 L 8 30"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {idx === 2 && (
                          <svg className="w-10 h-12" viewBox="0 0 40 48" fill="none">
                            <path
                              d="M 18 2 C 12 14, 28 26, 20 42"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 15 36 L 20 44 L 26 37"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {idx === 3 && (
                          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                            <path
                              d="M 14 2 C 18 12, 30 20, 26 34"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 21 29 L 26 36 L 32 30"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {idx === 4 && (
                          <svg className="w-10 h-12" viewBox="0 0 40 48" fill="none">
                            <path
                              d="M 28 2 C 24 16, 12 26, 16 42"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 21 37 L 16 44 L 10 38"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {idx === 5 && (
                          <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                            <path
                              d="M 16 2 C 14 12, 26 22, 20 34"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeDasharray="4 3"
                            />
                            <path
                              d="M 15 29 L 20 36 L 26 30"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Leader Cutout on Wooden Stool */}
                    <div className="relative w-full flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-300">
                      <div className="relative h-[280px] sm:h-[320px] md:h-[350px] w-full flex items-end justify-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          key={`${member.image}-${idx}-v4`}
                          className="h-full w-auto object-contain object-bottom drop-shadow-sm group-hover:drop-shadow-lg transition-all"
                        />
                      </div>

                      {/* Floor Contact Shadow */}
                      <div className="w-24 sm:w-28 h-3 rounded-full bg-neutral-900/10 blur-sm -mt-1.5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-neutral-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
              Nationwide Reach
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
              Empowering Clinicians Across All 50 States
            </h2>
            <p className="mt-4 text-sm sm:text-base text-neutral-400">
              KJ Systems powers outpatient practices, CCBHCs, and multi-site enterprise behavioral health facilities across all 50 U.S. states.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {globalReachCountries.map((c: any) => (
              <div
                key={c.name}
                className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{c.flag}</div>
                <div className="font-bold text-base text-white">{c.name}</div>
                <div className="text-xs text-emerald-400 mt-1 font-mono">
                  {c.count ? (
                    <>
                      <AnimatedCounter value={c.count} suffix="+" /> {c.userLabel}
                    </>
                  ) : (
                    c.users
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Letter Section (Pixel-Perfect from Reference Image) */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-neutral-900 flex items-center justify-center">
        {/* Full-bleed Clinic Consultation Background Photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/founder_note_bg.jpg"
            alt="Clinical consultation backdrop"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-950/30 backdrop-blur-[1px]" />
        </div>

        {/* Floating White Note Card */}
        <div className="max-w-2xl w-full mx-auto px-4 sm:px-6 relative z-10">
          <div className="bg-white rounded-[28px] sm:rounded-3xl p-7 sm:p-10 md:p-12 shadow-2xl border border-neutral-100/90 text-left">
            {/* Header */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                A Note from Our Founder
              </h2>
              <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
                KJ Systems
              </div>
            </div>

            {/* Note Body */}
            <div className="mt-6 space-y-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
              <p>At KJ Systems, we believe healthcare should feel human.</p>

              <p>Our mission is simple:</p>

              <div className="space-y-1.5 text-neutral-700 font-normal">
                <p>Put patients, doctors, and clinics on the same page</p>
                <p>Deliver care that’s faster, clearer, and more personal</p>
                <p>Turn healthcare from a process into a partnership</p>
              </div>

              <div className="space-y-1 pt-1">
                <p>We’re not just building a platform. We’re building a healthier future.</p>
                <p>And we’d love for you to be a part of it.</p>
              </div>
            </div>

            {/* Signature & Author Profile */}
            <div className="mt-6 pt-2">
              {/* Handwritten Script Signature */}
              <div className="mb-3">
                <img
                  src="/images/founder_signature_clean.png"
                  alt="Prahasta"
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </div>

              {/* Author Avatar + Name & Role */}
              <div className="flex items-center gap-3">
                <img
                  src="/images/kumara_prathipati_avatar.png"
                  alt="DR. KUMARA PRATHIPATI"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover shadow-sm ring-2 ring-neutral-100"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-neutral-950 leading-tight">
                    DR. KUMARA PRATHIPATI, M.D.
                  </h4>
                  <p className="text-[11px] sm:text-xs text-neutral-500 font-medium">
                    Co-Founder & Chief Executive Officer, KJ Systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
