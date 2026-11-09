import React from 'react';
import { Link } from 'react-router-dom';
import { SectionBadge } from '../common/SectionBadge';
import { blogPosts } from '../../data/websiteData';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

export const BlogPreview: React.FC = () => {
  const previewPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 md:py-32 bg-white border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <SectionBadge variant="emerald">Blogs</SectionBadge>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
              Inspiration & Insights <br />
              <span className="font-serif italic font-normal text-emerald-800">from our Blog</span>
            </h2>
            <p className="mt-4 text-base text-neutral-600">
              Latest medical breakthroughs, clinical workflow tips, and wellness research to keep you informed.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold text-xs tracking-wide uppercase transition-colors shrink-0 group self-start md:self-auto"
          >
            <span>Browse to All</span>
            <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-neutral-50 rounded-3xl overflow-hidden border border-neutral-200/80 shadow-card hover:shadow-floating transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-semibold text-neutral-900 shadow">
                  {post.category}
                </span>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span>&bull;</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors leading-snug">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-neutral-200"
                    />
                    <span className="text-xs font-medium text-neutral-700">
                      {post.author.name}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-bold text-emerald-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
