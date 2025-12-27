/**
 * ANIMATION FRAMEWORK
 * Framer Motion animation variants with spring physics
 */

import { Variants, Transition } from 'framer-motion'

/* ==========================================
   SPRING PHYSICS PRESETS
   ========================================== */

export const spring = {
  // Snappy - Quick, responsive
  snappy: {
    type: 'spring' as const,
    stiffness: 500,
    damping: 30,
  },
  
  // Default - Balanced
  default: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 25,
  },
  
  // Smooth - Gentle, flowing
  smooth: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 30,
  },
  
  // Bouncy - Playful
  bouncy: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 15,
  },
  
  // Slow - Dramatic
  slow: {
    type: 'spring' as const,
    stiffness: 200,
    damping: 30,
  },
} as const

/* ==========================================
   FADE ANIMATIONS
   ========================================== */

export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    transition: spring.snappy,
  },
}

export const fadeOut: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 1,
    transition: spring.snappy,
  },
}

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: spring.snappy,
  },
}

export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: spring.snappy,
  },
}

/* ==========================================
   SLIDE ANIMATIONS
   ========================================== */

export const slideUp: Variants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

export const slideDown: Variants = {
  initial: {
    y: '-100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    y: '-100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

export const slideLeft: Variants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

export const slideRight: Variants = {
  initial: {
    x: '-100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

/* ==========================================
   SCALE ANIMATIONS
   ========================================== */

export const scaleIn: Variants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: spring.default,
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: spring.snappy,
  },
}

export const scaleOut: Variants = {
  initial: {
    scale: 1,
    opacity: 1,
  },
  animate: {
    scale: 0.8,
    opacity: 0,
    transition: spring.default,
  },
  exit: {
    scale: 1,
    opacity: 1,
    transition: spring.snappy,
  },
}

export const scaleInCenter: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: spring.bouncy,
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: spring.snappy,
  },
}

export const pop: Variants = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: spring.bouncy,
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: spring.snappy,
  },
}

/* ==========================================
   STAGGER PATTERNS
   ========================================== */

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
}

export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
}

// Children variant for use with stagger containers
export const staggerChild: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: spring.snappy,
  },
}

/* ==========================================
   PAGE TRANSITIONS
   ========================================== */

export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ...spring.smooth,
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      ...spring.snappy,
      duration: 0.2,
    },
  },
}

export const pageSlide: Variants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: spring.smooth,
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

export const pageFade: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
}

export const pageScale: Variants = {
  initial: {
    scale: 0.95,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: spring.smooth,
  },
  exit: {
    scale: 1.05,
    opacity: 0,
    transition: spring.snappy,
  },
}

/* ==========================================
   MICRO-INTERACTIONS
   ========================================== */

export const hover = {
  scale: 1.05,
  transition: spring.snappy,
}

export const tap = {
  scale: 0.95,
  transition: spring.snappy,
}

export const hoverGlow = {
  scale: 1.02,
  boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
  transition: spring.default,
}

export const hoverLift = {
  y: -4,
  transition: spring.default,
}

export const hoverRotate = {
  rotate: 5,
  transition: spring.bouncy,
}

export const shimmer: Variants = {
  initial: {
    backgroundPosition: '-200% 0',
  },
  animate: {
    backgroundPosition: '200% 0',
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export const float: Variants = {
  animate: {
    y: [-4, 4, -4],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
}

export const bounce: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const wiggle: Variants = {
  animate: {
    rotate: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

/* ==========================================
   CARD ANIMATIONS
   ========================================== */

export const cardHover: Variants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -8,
    transition: spring.default,
  },
}

export const cardTap: Variants = {
  tap: {
    scale: 0.98,
    transition: spring.snappy,
  },
}

export const cardReveal: Variants = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring.default,
  },
}

/* ==========================================
   MODAL ANIMATIONS
   ========================================== */

export const modalBackdrop: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

export const modalContent: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: spring.snappy,
  },
}

export const modalSlideUp: Variants = {
  initial: {
    y: '100%',
  },
  animate: {
    y: 0,
    transition: spring.smooth,
  },
  exit: {
    y: '100%',
    transition: spring.snappy,
  },
}

/* ==========================================
   NOTIFICATION ANIMATIONS
   ========================================== */

export const notificationSlideIn: Variants = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: spring.bouncy,
  },
  exit: {
    x: '100%',
    opacity: 0,
    transition: spring.snappy,
  },
}

export const notificationPop: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: spring.bouncy,
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: spring.snappy,
  },
}

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */

/**
 * Create custom stagger with specific timing
 */
export function createStagger(staggerChildren: number, delayChildren = 0): Transition {
  return {
    staggerChildren,
    delayChildren,
  }
}

/**
 * Create custom spring animation
 */
export function createSpring(stiffness: number, damping: number): Transition {
  return {
    type: 'spring',
    stiffness,
    damping,
  }
}

/**
 * Delay animation
 */
export function withDelay(delay: number, transition: Transition = spring.default): Transition {
  return {
    ...transition,
    delay,
  }
}

/**
 * Repeat animation
 */
export function withRepeat(
  transition: Transition = spring.default,
  times: number = Infinity
): Transition {
  return {
    ...transition,
    repeat: times,
  }
}

/* ==========================================
   COMBINED ANIMATIONS
   ========================================== */

/**
 * Fade + Scale combination
 */
export const fadeScale: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: spring.snappy,
  },
}

/**
 * Fade + Slide + Scale combination
 */
export const fadeSlideScale: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: spring.snappy,
  },
}

/* ==========================================
   EXPORTS
   ========================================== */

export const animations = {
  // Spring presets
  spring,
  
  // Fade
  fadeIn,
  fadeOut,
  fadeInUp,
  fadeInDown,
  
  // Slide
  slideUp,
  slideDown,
  slideLeft,
  slideRight,
  
  // Scale
  scaleIn,
  scaleOut,
  scaleInCenter,
  pop,
  
  // Stagger
  staggerContainer,
  staggerFast,
  staggerSlow,
  staggerChild,
  
  // Page transitions
  pageTransition,
  pageSlide,
  pageFade,
  pageScale,
  
  // Micro-interactions
  hover,
  tap,
  hoverGlow,
  hoverLift,
  hoverRotate,
  shimmer,
  float,
  pulse,
  spin,
  bounce,
  wiggle,
  
  // Cards
  cardHover,
  cardTap,
  cardReveal,
  
  // Modals
  modalBackdrop,
  modalContent,
  modalSlideUp,
  
  // Notifications
  notificationSlideIn,
  notificationPop,
  
  // Combined
  fadeScale,
  fadeSlideScale,
  
  // Utilities
  createStagger,
  createSpring,
  withDelay,
  withRepeat,
}

export default animations
