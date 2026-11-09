import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/websiteData';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, CheckCircle2, Heart, ArrowRight } from 'lucide-react';
import { FinalCTA } from '../components/home/FinalCTA';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Find post by slug or fallback to the first one
  const post = blogPosts.find((p) => p.slug === slug) || blogPosts[0];
  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="w-full pt-28 md:pt-36">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Back Link */}
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-neutral-950 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-700 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Articles</span>
        </button>

        {/* Category & Metadata */}
        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
            {post.category}
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Author Card & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-100">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/50"
              />
              <div>
                <div className="text-sm font-bold text-neutral-950">{post.author.name}</div>
                <div className="text-xs text-neutral-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-emerald-600" />
                {post.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-600" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Hero Featured Image */}
        <div className="mt-8 rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 aspect-[16/9] shadow-card">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Body Content */}
        <div className="mt-12 space-y-6 text-base sm:text-lg text-neutral-700 leading-relaxed font-sans">
          <p className="text-xl font-medium text-neutral-900 leading-relaxed font-serif italic border-l-4 border-emerald-600 pl-6 py-1">
            "{post.excerpt}"
          </p>

          {post.content ? (
            post.content.map((para, i) => (
              <p key={i} className="text-neutral-700">
                {para}
              </p>
            ))
          ) : (
            <>
              <p>
                In modern clinical environments, evidence-based preventive health strategies create the highest return on patient longevity. When physicians and individuals align on circadian biological protocols, systemic inflammation drops dramatically.
              </p>
              <h2 className="text-2xl font-bold text-neutral-950 pt-4">
                Clinical Implementation Protocols
              </h2>
              <p>
                KJ Systems integrates with wearable biometric monitors to chart patient responses in real time. Rather than relying solely on quarterly laboratory checkups, continuous physiological monitoring allows care teams to catch micro-variations early.
              </p>
            </>
          )}

          {/* Clinical Key Takeaways Box */}
          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80">
            <h3 className="text-base font-bold text-neutral-950 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <span>Physician Key Takeaways</span>
            </h3>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li>&bull; Micro-adjustments in diet and circadian alignment yield compounding long-term immune resilience.</li>
              <li>&bull; Digital health dashboards like KJ Systems provide actionable feedback loops for patient compliance.</li>
              <li>&bull; Consult with your primary physician before initiating major supplemental or dietary changes.</li>
            </ul>
          </div>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-neutral-200">
          <h3 className="text-2xl font-bold text-neutral-950 mb-8">Related Medical Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group p-5 rounded-2xl bg-neutral-50 hover:bg-neutral-100 border border-neutral-200/70 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wide">
                    {rel.category}
                  </span>
                  <h4 className="mt-1 text-base font-bold text-neutral-950 group-hover:text-emerald-700 transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
                  <span>{rel.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};
