import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Mail, MapPin, Sparkles, Send, Phone } from 'lucide-react';
import { siteConfig } from '../../data/websiteData';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-white border-t border-neutral-100 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-neutral-950 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-emerald-600/15 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="max-w-md">
              <span className="text-xs font-semibold tracking-wider uppercase text-emerald-400">
                Newsletter
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Stay updated with our latest news
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                Get healthcare tech updates, clinical research summaries, and platform features straight to your inbox.
              </p>
            </div>

            <div className="w-full md:w-auto">
              {!subscribed ? (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-[420px]"
                >
                  <div className="relative w-full">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 text-sm bg-neutral-900 border border-neutral-800 rounded-2xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-xs tracking-wide uppercase transition-all whitespace-nowrap shadow flex items-center justify-center gap-2"
                  >
                    <span>Join Now</span>
                    <Send className="w-3.5 h-3.5 text-emerald-700" />
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-800/60 text-emerald-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>You are subscribed! Welcome to KJ Systems.</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Links Grid & Right-Side Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-neutral-100">
          {/* Brand Info & Quick Links (7 columns on large screens) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Brand Info */}
            <div className="sm:col-span-1 space-y-3">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl overflow-hidden shadow-sm">
                  <img
                    src="/images/kj_systems_logo.svg"
                    alt="KJ Systems"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl tracking-tight text-neutral-900">
                  KJ Systems
                </span>
              </Link>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Intelligent healthcare SaaS platform developed by KJ Systems India Private Limited.
              </p>

              <div className="space-y-2 text-xs text-neutral-600 pt-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <a href="mailto:hr@kjsystems.in" className="hover:text-emerald-700 transition-colors font-medium">
                    hr@kjsystems.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <a href="tel:+919059387805" className="hover:text-emerald-700 transition-colors font-medium">
                    +91 9059387805
                  </a>
                </div>
              </div>
            </div>

            {/* Main Pages */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3.5">
                Main pages
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link to="/" className="hover:text-emerald-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-emerald-700 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="hover:text-emerald-700 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="hover:text-emerald-700 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-emerald-700 transition-colors font-semibold text-emerald-700">
                    Careers (4 Openings)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources & Inner Pages */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3.5">
                Resources
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                <li>
                  <Link to="/blog" className="hover:text-emerald-700 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-700 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/download" className="hover:text-emerald-700 transition-colors">
                    Download App
                  </Link>
                </li>
                <li>
                  <Link to="/changelog" className="hover:text-emerald-700 transition-colors">
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link to="/early-access" className="hover:text-emerald-700 transition-colors">
                    Early Access
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side: Google Map with KJ Systems Address (5 columns on large screens) */}
          <div className="lg:col-span-5 bg-neutral-50/90 rounded-3xl p-4 sm:p-5 border border-neutral-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950">
                    KJ Systems Corporate Office
                  </h4>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                  Headquarters
                </span>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed mb-3">
                41-1/19-1, GF-3, SGK Towers, Balaji Nagar, Krishna Lanka, Vijayawada, Andhra Pradesh, India – 520013
              </p>
            </div>

            {/* Embedded Live Google Map with Pin */}
            <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden border border-neutral-200 shadow-inner bg-neutral-100">
              <iframe
                title="KJ Systems Location Map"
                src="https://maps.google.com/maps?q=SGK+Towers+Krishna+Lanka+Vijayawada+Andhra+Pradesh+520013&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <a
                href="https://www.google.com/maps/search/?api=1&query=SGK+Towers+Krishna+Lanka+Vijayawada+Andhra+Pradesh+520013"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[11px] text-neutral-500 font-mono">
                Vijayawada, AP 520013
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Left Half Social/Contact Capsule + Right Half Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Side: Only Half Section - Exact Recreation of the Reference Pill Bar */}
          <div className="w-full md:w-auto md:max-w-xl rounded-2xl sm:rounded-full bg-neutral-100/90 border border-neutral-200/80 px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-4 sm:gap-6 shadow-sm hover:shadow transition-shadow">
            {/* Left Side: Paper Plane / Send Icon + Email */}
            <a
              href="mailto:hr@kjsystems.in"
              className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 hover:text-neutral-950 transition-colors group shrink-0"
            >
              <Send className="w-4 h-4 text-neutral-800 -rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>hr@kjsystems.in</span>
            </a>

            {/* Right Side: Social Media Icons (Twitter, Instagram, Dribbble, Threads, LinkedIn) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              {/* 1. X (Twitter) */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-8 h-8 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* 2. Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 hover:brightness-110 text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* 3. Dribbble */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Dribbble"
                className="w-8 h-8 rounded-xl bg-[#ea4c89] hover:bg-[#d93b79] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.312c-.27-.052-2.372-.457-4.74-.213-.092-.224-.19-.448-.292-.668a21.464 21.464 0 0 0-2.383-4.137c2.378-.47 4.298-.444 5.485-.294zm-7.05-1.922c.792 1.25 1.517 2.65 2.158 4.168-2.61.758-5.733 1.055-8.895 1.055a8.455 8.455 0 0 1 6.737-5.223zm-7.55 7.15c2.97 0 5.89-.283 8.36-.986.115.247.224.498.326.75-2.09 3.018-4.7 6.495-9.356 6.002a8.498 8.498 0 0 1-.67-5.766zm2.34 7.227c3.96.42 6.354-2.63 8.243-5.385.57.172 1.16.32 1.767.442-.87 2.37-2.63 4.31-4.88 5.253a8.528 8.528 0 0 1-5.13-.31zm10.77-1.442a8.513 8.513 0 0 0 2.215-4.148c-1.455-.09-3.238.03-4.87-.245.714 1.57 1.34 3.06 1.83 4.393h.825z"
                  />
                </svg>
              </a>

              {/* 4. Threads */}
              <a
                href="https://threads.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Threads"
                className="w-8 h-8 rounded-xl bg-[#111111] hover:bg-neutral-800 text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.186 24C5.46 24 0 18.54 0 11.814 0 5.088 5.46 0 12.186 0c6.643 0 11.96 5.166 12.174 11.814h-2.73c-.208-5.147-4.407-9.084-9.444-9.084-5.23 0-9.456 4.226-9.456 9.456 0 5.23 4.226 9.456 9.456 9.456 4.39 0 7.962-2.88 9.07-7.067H12.186v-2.73h11.23c.312 1.09.475 2.24.475 3.427C23.891 18.73 18.73 24 12.186 24z" />
                </svg>
              </a>

              {/* 5. LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-xl bg-[#0a66c2] hover:bg-[#084e96] text-white flex items-center justify-center shadow-sm hover:scale-105 transition-all"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-xs text-neutral-500 flex flex-col sm:flex-row items-center md:items-end justify-center md:justify-end gap-3 text-center md:text-right">
            <p>
              &copy; {new Date().getFullYear()} KJ Systems India Pvt Ltd. All rights reserved.
            </p>
            <span className="hidden sm:inline text-neutral-300">|</span>
            <div className="flex items-center gap-1.5 text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">All Systems Operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
