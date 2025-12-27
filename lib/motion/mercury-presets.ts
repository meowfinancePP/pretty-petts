/**
 * Mercury Button Effect Presets for Framer Motion
 * Liquid Glass & Tahoe Design System
 */

import { Variants, Transition } from 'framer-motion'

// Mercury expansion transition
export const mercuryTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
}

// Smooth mercury flow
export const mercuryFlow: Transition = {
  duration: 0.6,
  ease: [0.34, 1.56, 0.64, 1], // Custom cubic-bezier for mercury effect
}

// Button hover variants
export const mercuryButtonVariants: Variants = {
  initial: {
    scale: 1,
    boxShadow: '0 0 0 rgba(168, 230, 207, 0)',
  },
  hover: {
    scale: 1.02,
    boxShadow: '0 0 20px rgba(168, 230, 207, 0.2), 0 0 40px rgba(168, 230, 207, 0.1)',
    transition: mercuryTransition,
  },
  tap: {
    scale: 0.98,
    boxShadow: '0 0 10px rgba(168, 230, 207, 0.3)',
    transition: { duration: 0.1 },
  },
}

// Inner glow expansion
export const mercuryGlowVariants: Variants = {
  initial: {
    width: 0,
    height: 0,
    opacity: 0,
  },
  hover: {
    width: 300,
    height: 300,
    opacity: 1,
    transition: mercuryFlow,
  },
}

// Card lift effect
export const tahoeCardVariants: Variants = {
  initial: {
    y: 0,
    boxShadow: '0 8px 32px rgba(13, 13, 15, 0.4)',
  },
  hover: {
    y: -4,
    boxShadow: '0 16px 48px rgba(13, 13, 15, 0.55), 0 0 24px rgba(168, 230, 207, 0.1)',
    transition: mercuryTransition,
  },
}

// Ripple effect
export const mercuryRippleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0.6,
  },
  animate: {
    scale: 2,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
}

// Glow border animation
export const tahoeGlowVariants: Variants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.23, 1, 0.32, 1],
    },
  },
}

// Popup/Modal entrance
export const tahoePopupVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 20,
    filter: 'blur(4px)',
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 35,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 10,
    filter: 'blur(2px)',
    transition: {
      duration: 0.2,
    },
  },
}

// Drawer slide
export const tahoeDrawerVariants: Variants = {
  hidden: {
    x: -280,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: mercuryTransition,
  },
  exit: {
    x: -280,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
}

// Fade with backdrop blur
export const tahoeFadeBlurVariants: Variants = {
  hidden: {
    opacity: 0,
    backdropFilter: 'blur(0px)',
  },
  visible: {
    opacity: 1,
    backdropFilter: 'blur(20px)',
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

// Stagger children animation
export const mercuryStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export const mercuryStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: mercuryTransition,
  },
}

// Floating animation
export const mercuryFloatVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Pulse glow
export const mercuryPulseGlowVariants: Variants = {
  initial: {
    boxShadow: '0 0 20px rgba(168, 230, 207, 0.2), 0 0 40px rgba(168, 230, 207, 0.1)',
  },
  animate: {
    boxShadow: [
      '0 0 20px rgba(168, 230, 207, 0.2), 0 0 40px rgba(168, 230, 207, 0.1)',
      '0 0 30px rgba(168, 230, 207, 0.4), 0 0 60px rgba(168, 230, 207, 0.2)',
      '0 0 20px rgba(168, 230, 207, 0.2), 0 0 40px rgba(168, 230, 207, 0.1)',
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Export all presets as a collection
export const mercuryPresets = {
  button: mercuryButtonVariants,
  glow: mercuryGlowVariants,
  card: tahoeCardVariants,
  ripple: mercuryRippleVariants,
  border: tahoeGlowVariants,
  popup: tahoePopupVariants,
  drawer: tahoeDrawerVariants,
  fadeBlur: tahoeFadeBlurVariants,
  stagger: {
    container: mercuryStaggerContainer,
    item: mercuryStaggerItem,
  },
  float: mercuryFloatVariants,
  pulseGlow: mercuryPulseGlowVariants,
}

export const mercuryTransitions = {
  default: mercuryTransition,
  flow: mercuryFlow,
}
