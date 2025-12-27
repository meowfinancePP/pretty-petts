// lib/design-system/colors.ts
/**
 * Цветовая палитра Petopia
 * Строго соблюдать при разработке всех компонентов
 */

export const COLORS = {
  gradients: {
    primary: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 50%, #3B82F6 100%)',
    success: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    warning: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    premium: 'linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)',
    purplePink: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
    blueCyan: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
  },
  backgrounds: {
    primary: '#0A0A0A',
    secondary: 'rgba(20, 20, 20, 0.8)',
    glass: 'rgba(255, 255, 255, 0.05)',
    card: 'rgba(30, 30, 30, 0.6)',
    darker: '#050505',
  },
  text: {
    primary: '#FFFFFF',
    secondary: 'rgba(255, 255, 255, 0.8)',
    tertiary: 'rgba(255, 255, 255, 0.6)',
    gradient: 'transparent',
  },
  accents: {
    purple: '#8B5CF6',
    pink: '#EC4899',
    blue: '#3B82F6',
    green: '#10B981',
    cyan: '#06B6D4',
    yellow: '#FBBF24',
    orange: '#F59E0B',
  },
  borders: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(255, 255, 255, 0.2)',
    purple: 'rgba(139, 92, 246, 0.3)',
    pink: 'rgba(236, 72, 153, 0.3)',
  },
  shadows: {
    glowPurple: '0 0 60px rgba(139, 92, 246, 0.4)',
    glowPink: '0 0 40px rgba(236, 72, 153, 0.3)',
    glowBlue: '0 0 40px rgba(59, 130, 246, 0.3)',
    card: '0 8px 32px rgba(0, 0, 0, 0.1)',
    cardHover: '0 25px 50px rgba(0, 0, 0, 0.4)',
  },
} as const

export type ColorKey = keyof typeof COLORS
export type GradientKey = keyof typeof COLORS.gradients
export type AccentKey = keyof typeof COLORS.accents

