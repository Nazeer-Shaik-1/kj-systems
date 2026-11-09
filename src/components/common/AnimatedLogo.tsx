import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimatedLogoProps {
  className?: string;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

interface CharData {
  char: string;
  isBrand: boolean; // 'K' or 'J'
  delay: number;
}

const CHARACTERS: CharData[] = [
  { char: 'K', isBrand: true, delay: 0.0 },
  { char: 'J', isBrand: true, delay: 0.12 },
  { char: '\u00A0', isBrand: false, delay: 0.22 },
  { char: 'S', isBrand: false, delay: 0.32 },
  { char: 'y', isBrand: false, delay: 0.40 },
  { char: 's', isBrand: false, delay: 0.48 },
  { char: 't', isBrand: false, delay: 0.56 },
  { char: 'e', isBrand: false, delay: 0.64 },
  { char: 'm', isBrand: false, delay: 0.72 },
  { char: 's', isBrand: false, delay: 0.80 },
];

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = '',
  showIcon = true,
  size = 'md',
}) => {
  const [animationCycle, setAnimationCycle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-replay the sequence every 8 seconds for a continuous lively presence
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCycle((prev) => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Trigger sequence on hover
    setAnimationCycle((prev) => prev + 1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl sm:text-3xl',
  }[size];

  const iconSizeClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-9 h-9 rounded-xl',
    lg: 'w-11 h-11 rounded-2xl',
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Brand Icon */}
      {showIcon && (
        <div className="relative flex items-center justify-center">
          {/* Subtle breathing ambient emerald glow */}
          <div className="absolute inset-0 bg-emerald-500/20 rounded-xl blur-md group-hover:bg-emerald-500/35 transition-all duration-300" />

          <motion.div
            className={`${iconSizeClasses} relative overflow-hidden flex items-center justify-center shadow-sm transition-transform duration-300`}
            animate={
              isHovered
                ? { scale: [1, 1.08, 1.04], rotate: [0, -3, 3, 0] }
                : { scale: 1, rotate: 0 }
            }
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <img
              src="/images/kj_systems_logo.svg"
              alt="KJ Systems Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </div>
      )}

      {/* Sequential Character Appearance */}
      <div className={`flex items-baseline font-bold tracking-tight ${textSizeClasses}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={animationCycle}
            className="flex items-baseline"
            initial="hidden"
            animate="visible"
          >
            {CHARACTERS.map((item, index) => (
              <motion.span
                key={`${item.char}-${index}`}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 6,
                    scale: 0.8,
                    filter: 'blur(3px)',
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                    transition: {
                      delay: item.delay,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1], // easeOutCubic
                    },
                  },
                }}
                className={`inline-block transition-colors duration-200 ${
                  item.isBrand
                    ? 'font-extrabold bg-gradient-to-r from-[#2b7f5c] via-emerald-600 to-teal-500 bg-clip-text text-transparent group-hover:from-emerald-700 group-hover:to-teal-600'
                    : 'text-neutral-900 group-hover:text-neutral-950'
                }`}
              >
                {item.char}
              </motion.span>
            ))}

            {/* Glowing Emerald Pulse Dot at the end matching website health tech theme */}
            <motion.span
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 0.95,
                    type: 'spring',
                    stiffness: 400,
                    damping: 15,
                  },
                },
              }}
              className="ml-1 flex items-center self-center"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
            </motion.span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedLogo;
