import React, { useState, useEffect } from 'react';
import { SectionBadge } from '../common/SectionBadge';
import { testimonials } from '../../data/websiteData';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-[#fcfcfc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionBadge variant="light">Who We Are</SectionBadge>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            Trusted by Doctors <br />
            <span className="text-emerald-700 font-serif italic font-normal">
              Loved by Patients
            </span>
          </h2>
          <p className="mt-4 text-base text-neutral-600">
            Real stories from medical professionals and patients who’ve experienced the difference.
          </p>
        </div>

        {/* Testimonial Active Display Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-neutral-200/80 shadow-floating text-center">
            {/* Ambient quote icon */}
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-medium text-neutral-900 leading-relaxed tracking-tight min-h-[120px] flex items-center justify-center">
              "{current.quote}"
            </blockquote>

            {/* Author info */}
            <div className="mt-8 flex flex-col items-center justify-center">
              <img
                src={current.avatar}
                alt={current.author}
                className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 shadow-md"
              />
              <div className="mt-3 font-bold text-base text-neutral-950">
                {current.author}
              </div>
              <div className="text-xs text-neutral-500">
                {current.role} &bull; <span className="text-emerald-700 font-medium">{current.company}</span>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prev}
                aria-label="Previous Testimonial"
                className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-emerald-600' : 'w-2 bg-neutral-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next Testimonial"
                className="p-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
