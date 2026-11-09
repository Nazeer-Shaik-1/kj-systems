import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2.2,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState<string>(
    decimals > 0 ? (0).toFixed(decimals) : '0'
  );
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-20px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    // Smooth ease-out cubic for realistic organic acceleration and gentle deceleration
    const easeOutCubic = (t: number): number => {
      return 1 - Math.pow(1 - t, 3);
    };

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = easeOutCubic(progress);
      const currentVal = easedProgress * value;

      if (decimals > 0) {
        setDisplayValue(currentVal.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(currentVal).toLocaleString('en-US'));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        if (decimals > 0) {
          setDisplayValue(value.toFixed(decimals));
        } else {
          setDisplayValue(value.toLocaleString('en-US'));
        }
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
};
