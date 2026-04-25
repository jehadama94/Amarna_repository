'use client'

import { motion } from 'framer-motion'

/**
 * Sophisticated header background with:
 * - Subtle animated accent lines that move gently
 * - Barely visible SVG grid overlay for architectural depth
 * - Slow fade-on-scroll effect for smooth transitions
 * - Extremely subtle dark gradient orbs with gold accents
 * Maintains refined, architectural luxury aesthetic without tech/SaaS look
 */
export function HeaderBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#080808]">
      {/* Ultra-subtle gradient orbs with gold accents - slow, dark movement */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full blur-[120px]"
        style={{
          background: 'radial-gradient(circle, rgba(214, 181, 109, 0.08) 0%, transparent 70%)',
        }}
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(214, 181, 109, 0.05) 0%, transparent 65%)',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 16,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 1,
        }}
      />

      {/* Architectural accent lines - horizontal and diagonal */}
      <div className="absolute inset-0">
        {/* Primary horizontal accent line - subtle movement */}
        <motion.div
          className="absolute top-1/3 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(214, 181, 109, 0.15) 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            y: [0, -2, 0],
          }}
          transition={{
            duration: 6,
            ease: 'easeInOut',
            repeat: Infinity,
          }}
        />

        {/* Secondary accent line - slightly offset timing */}
        <motion.div
          className="absolute top-2/3 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(214, 181, 109, 0.1) 50%, transparent 100%)',
          }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            y: [0, 2, 0],
          }}
          transition={{
            duration: 7,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 0.8,
          }}
        />

        {/* Subtle diagonal accent - very faint */}
        <motion.div
          className="absolute top-1/2 left-1/4 right-1/4 h-px origin-center"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(214, 181, 109, 0.08) 50%, transparent 100%)',
            transform: 'rotate(-15deg)',
          }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            ease: 'easeInOut',
            repeat: Infinity,
            delay: 1.5,
          }}
        />
      </div>

      {/* Architectural grid overlay - extremely subtle for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(214, 181, 109, 0.02) 25%, rgba(214, 181, 109, 0.02) 26%, transparent 27%, transparent 74%, rgba(214, 181, 109, 0.02) 75%, rgba(214, 181, 109, 0.02) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(214, 181, 109, 0.02) 25%, rgba(214, 181, 109, 0.02) 26%, transparent 27%, transparent 74%, rgba(214, 181, 109, 0.02) 75%, rgba(214, 181, 109, 0.02) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 40px',
        }}
      />

      {/* Corner accent dots - architectural framing */}
      <motion.div
        className="absolute top-20 left-20 w-1.5 h-1.5 rounded-full"
        style={{
          background: 'rgba(214, 181, 109, 0.3)',
          boxShadow: '0 0 20px rgba(214, 181, 109, 0.2)',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-1 h-1 rounded-full"
        style={{
          background: 'rgba(214, 181, 109, 0.2)',
          boxShadow: '0 0 15px rgba(214, 181, 109, 0.15)',
        }}
        animate={{
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.5,
        }}
      />

      {/* Fade overlay - creates smooth depth fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(8, 8, 8, 0.3) 100%)',
        }}
      />
    </div>
  )
}
