import React from 'react';

interface HeartOverviewCardProps {
  className?: string;
}

export const HeartOverviewCard: React.FC<HeartOverviewCardProps> = ({
  className = '',
}) => {
  return (
    <div className={`relative max-w-lg sm:max-w-xl mx-auto ${className}`}>
      {/* Clean card container without duplicate headers or overlaid values */}
      <div className="relative bg-white rounded-3xl p-3 sm:p-5 border border-neutral-200/90 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="relative w-full aspect-[1024/977] flex items-center justify-center overflow-hidden rounded-2xl">
          <img
            src="/images/heart_overview_exact.png"
            alt="KJ Systems Heart Overview"
            className="w-full h-full object-contain select-none animate-heartbeat"
          />
        </div>
      </div>
    </div>
  );
};
