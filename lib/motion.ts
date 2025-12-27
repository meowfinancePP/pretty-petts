// 60fps Animation Presets for Pretty Pets
// Optimized for smooth performance across all components

import { useReducedMotion } from 'framer-motion'

// Spring presets for buttons, cards, and micro-interactions
export const springFast = { type: 'spring' as const, stiffness: 420, damping: 28, mass: 0.8 }
export const springPanel = { type: 'spring' as const, stiffness: 320, damping: 30, mass: 0.9 }
export const springGentle = { type: 'spring' as const, stiffness: 380, damping: 34, mass: 0.9 }

// Fade presets for overlays and entrances
export const fadeFast = { duration: 0.18, ease: [0.22, 1, 0.36, 1] }
export const fadeMedium = { duration: 0.22, ease: [0.22, 1, 0.36, 1] }
export const fadeSlow = { duration: 0.28, ease: [0.22, 1, 0.36, 1] }

// Linear loop for tickers and continuous animations
export const loopLinear60 = { duration: 60, repeat: Infinity, ease: 'linear' as const }
export const loopLinear45 = { duration: 45, repeat: Infinity, ease: 'linear' as const }
export const loopLinear75 = { duration: 75, repeat: Infinity, ease: 'linear' as const }

// Stagger presets for grids and lists
export const staggerFast = { staggerChildren: 0.03, delayChildren: 0.02 }
export const staggerMedium = { staggerChildren: 0.05, delayChildren: 0.03 }
export const staggerSlow = { staggerChildren: 0.08, delayChildren: 0.05 }

// Animation variants
export const variants = {
  // Page transitions
  page: {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
  },

  // Grid containers
  gridContainer: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: staggerMedium,
    },
  },

  // Grid items
  gridItem: {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: springFast },
  },

  // Modal animations
  backdrop: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
  },

  modalPanel: {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 10, scale: 0.98 },
  },

  // Drawer animations
  drawer: {
    hidden: { x: 420 },
    show: { x: 0 },
    exit: { x: 420 },
  },

  // Card hover
  cardHover: {
    rest: { y: 0 },
    hover: { y: -2 },
  },

  // Button interactions
  buttonPress: {
    rest: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  },

  // Skeleton shimmer
  shimmer: {
    animate: { x: ['-100%', '100%'] },
    transition: { duration: 1.2, repeat: Infinity, ease: 'linear' },
  },

  // Gradient orbs
  orbFloat: {
    animate: { y: [0, 40, 0], scale: [1, 1.04, 1] },
    transition: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
  },
}

// Hook for reduced motion support
export function useMotionConfig() {
  const shouldReduceMotion = useReducedMotion()
  
  return {
    spring: shouldReduceMotion ? { duration: 0 } : springFast,
    fade: shouldReduceMotion ? { duration: 0 } : fadeFast,
    stagger: shouldReduceMotion ? { staggerChildren: 0, delayChildren: 0 } : staggerMedium,
    shouldReduceMotion,
  }
}

// Utility for conditional animations
export function getMotionConfig(reduced: boolean) {
  return reduced ? { duration: 0 } : springFast
}
