// lib/design-system/styles.ts
/**
 * Готовые стили для компонентов Petopia
 * Использовать для консистентности дизайна
 */

import { COLORS } from './colors'

export const STYLES = {
  glass: {
    background: COLORS.backgrounds.glass,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: `1px solid ${COLORS.borders.default}`,
    borderRadius: '16px',
  },
  glassPremium: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.04) 100%)',
    backdropFilter: 'blur(20px) saturate(200%)',
    WebkitBackdropFilter: 'blur(20px) saturate(200%)',
    border: `1px solid ${COLORS.borders.hover}`,
    borderRadius: '16px',
    boxShadow: COLORS.shadows.card,
  },
  card: {
    background: COLORS.backgrounds.card,
    border: `1px solid ${COLORS.borders.default}`,
    borderRadius: '12px',
    padding: '1.5rem',
  },
  cardPremium: {
    background: 'linear-gradient(145deg, rgba(25, 25, 25, 0.9) 0%, rgba(15, 15, 15, 0.8) 100%)',
    border: `1px solid ${COLORS.borders.default}`,
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: COLORS.shadows.card,
  },
  button: {
    primary: {
      background: COLORS.gradients.purplePink,
      color: COLORS.text.primary,
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    secondary: {
      background: COLORS.backgrounds.glass,
      color: COLORS.text.primary,
      padding: '0.75rem 2rem',
      borderRadius: '8px',
      fontWeight: 600,
      border: `1px solid ${COLORS.borders.default}`,
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  },
  input: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: `1px solid ${COLORS.borders.default}`,
    borderRadius: '12px',
    padding: '0.75rem 1rem',
    color: COLORS.text.primary,
    fontSize: '16px',
    transition: 'all 0.3s ease',
    '&:focus': {
      borderColor: COLORS.accents.purple,
      outline: 'none',
      boxShadow: `0 0 0 3px rgba(139, 92, 246, 0.1)`,
    },
  },
  gradientText: {
    background: COLORS.gradients.primary,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
} as const

// Tailwind классы для использования в компонентах
export const CLASSES = {
  glass: 'bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl',
  glassPremium: 'bg-gradient-to-br from-white/8 to-white/4 backdrop-blur-xl border border-white/15 rounded-2xl shadow-lg',
  card: 'bg-[rgba(30,30,30,0.6)] border border-white/10 rounded-xl p-6',
  cardPremium: 'bg-gradient-to-br from-[rgba(25,25,25,0.9)] to-[rgba(15,15,15,0.8)] border border-white/10 rounded-2xl p-6 shadow-lg',
  buttonPrimary: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-xl hover:scale-105 transition-all duration-300',
  buttonSecondary: 'bg-white/5 border border-white/10 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300',
  gradientText: 'bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent',
  input: 'w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-all',
} as const

