// lib/gamification/achievements.ts
/**
 * Система достижений
 */

import { Achievement } from '@/config/achievements'
import { ACHIEVEMENTS } from '@/config/achievements'

export function getAchievementById(id: string): Achievement | undefined {
  return ACHIEVEMENTS.find(a => a.id === id)
}

export function getAchievementsByRarity(rarity: Achievement['rarity']): Achievement[] {
  return ACHIEVEMENTS.filter(a => a.rarity === rarity)
}

export function getAllAchievements(): Achievement[] {
  return ACHIEVEMENTS
}

