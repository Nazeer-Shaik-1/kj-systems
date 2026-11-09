import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Sparkles } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>Error 404</span>
        </div>

        <h1 className="text-7xl sm:text-8xl font-black text-neutral-950 font-mono tracking-tight">
          404
        </h1>

        <h2 className="text-2xl font-bold text-neutral-900">
          Page Not Found
        </h2>

        <p className="text-sm text-neutral-600 leading-relaxed">
          The healthcare resource, clinic page, or medical documentation link you were looking for could not be found or has moved.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-850 text-white font-medium text-xs tracking-wider uppercase transition-all shadow flex items-center gap-2"
          >
            <Home className="w-4 h-4 text-emerald-400" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
