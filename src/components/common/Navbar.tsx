import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { navigationLinks } from '../../data/websiteData';
import { GetADemoModal } from './GetADemoModal';
import { AnimatedLogo } from './AnimatedLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPagesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPagesDropdownOpen(false);
      }
    };

    if (pagesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [pagesDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPagesDropdownOpen(false);
  }, [location.pathname]);

  const pagesGroup = navigationLinks.find((item) => item.name === 'Pages');

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm border-b border-neutral-100'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" aria-label="KJ Systems Home" className="flex items-center">
              <AnimatedLogo />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-200/60 shadow-sm">
              {/* Pages Dropdown - Click to Open, Click to Close & Responsive */}
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={() => setPagesDropdownOpen((prev) => !prev)}
                  aria-expanded={pagesDropdownOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-sm font-medium rounded-full transition-all cursor-pointer ${
                    pagesDropdownOpen
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/70'
                  }`}
                >
                  <span>Pages</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      pagesDropdownOpen ? 'rotate-180 text-emerald-400' : 'text-neutral-400'
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {pagesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2.5 w-[320px] sm:w-[420px] p-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-neutral-200/80 z-50 ring-1 ring-black/5"
                    >
                      <div className="px-2 py-1 mb-1 border-b border-neutral-100 flex items-center justify-between text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                        <span>Platform Pages</span>
                        <span className="text-emerald-600 font-normal lowercase">11 destinations</span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 max-h-[60vh] sm:max-h-[70vh] overflow-y-auto p-0.5">
                        {pagesGroup?.children?.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setPagesDropdownOpen(false)}
                            className="flex flex-col p-2.5 rounded-xl text-neutral-800 hover:bg-emerald-50/70 hover:text-emerald-900 transition-all group"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-neutral-900 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all">
                                {sub.name}
                              </span>
                              <ArrowRight className="w-3 h-3 text-neutral-300 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            {sub.description && (
                              <span className="text-[11px] text-neutral-400 group-hover:text-neutral-600 font-normal line-clamp-1 mt-0.5 transition-colors">
                                {sub.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Direct links */}
              {navigationLinks
                .filter((item) => item.name !== 'Pages')
                .map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all ${
                        isActive
                          ? 'bg-neutral-900 text-white shadow-sm'
                          : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/70'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
            </nav>

            {/* Desktop Action Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="relative group px-5 py-2.5 rounded-full bg-neutral-950 text-white text-xs font-medium tracking-wide shadow-md hover:bg-neutral-800 hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>Get a demo</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
              </button>
            </div>

            {/* Mobile menu hamburger toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-neutral-950 text-white text-xs font-medium"
              >
                Demo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-neutral-700 hover:bg-neutral-100"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-neutral-200 shadow-2xl px-6 py-6 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4 duration-200">
            <div className="space-y-4">
              <div className="font-semibold text-xs tracking-wider text-neutral-400 uppercase">
                Main Pages
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Home
                </Link>
                <Link
                  to="/features"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Features
                </Link>
                <Link
                  to="/about"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  About
                </Link>
                <Link
                  to="/pricing"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Pricing
                </Link>
                <Link
                  to="/blog"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Blog
                </Link>
                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Contact
                </Link>
                <Link
                  to="/careers"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Careers
                </Link>
                <Link
                  to="/download"
                  className="px-3 py-2 rounded-xl text-sm font-medium text-neutral-800 hover:bg-neutral-50"
                >
                  Download
                </Link>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setDemoModalOpen(true);
                  }}
                  className="w-full py-3 rounded-2xl bg-neutral-950 text-white font-medium text-sm flex items-center justify-center gap-2 shadow"
                >
                  <span>Request Live Demo</span>
                  <ArrowRight className="w-4 h-4 text-emerald-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Demo Scheduler Modal */}
      <GetADemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
};
