// lib/gamification/engine.ts
/**
 * Движок геймификации Petopia
 */

import { ACHIEVEMENTS, Achievement } from '@/config/achievements'
import { CONSTANTS } from '@/lib/utils/constants'

export interface UserStats {
  nftCount: number
  likes: number
  donations: number
  level: number
  xp: number
  achievements: string[]
}

export class GamificationEngine {
  /**
   * Вычисление уровня пользователя на основе XP
   */
  calculateLevel(xp: number): number {
    if (xp < CONSTANTS.XP_FOR_LEVEL_2) return 1
    if (xp < CONSTANTS.XP_FOR_LEVEL_3) return 2
    if (xp < CONSTANTS.XP_FOR_LEVEL_4) return 3
    if (xp < CONSTANTS.XP_FOR_LEVEL_5) return 4
    
    // После уровня 5, каждый уровень требует на 2000 XP больше
    const baseXP = CONSTANTS.XP_FOR_LEVEL_5
    const levelXP = 2000
    return 5 + Math.floor((xp - baseXP) / levelXP)
  }

  /**
   * Вычисление XP для следующего уровня
   */
  getXPForNextLevel(currentLevel: number): number {
    if (currentLevel === 1) return CONSTANTS.XP_FOR_LEVEL_2
    if (currentLevel === 2) return CONSTANTS.XP_FOR_LEVEL_3
    if (currentLevel === 3) return CONSTANTS.XP_FOR_LEVEL_4
    if (currentLevel === 4) return CONSTANTS.XP_FOR_LEVEL_5
    
    const baseXP = CONSTANTS.XP_FOR_LEVEL_5
    const levelXP = 2000
    return baseXP + (currentLevel - 4) * levelXP
  }

  /**
   * Проверка достижений пользователя
   */
  checkAchievements(stats: UserStats): Achievement[] {
    const unlockedAchievements: Achievement[] = []

    for (const achievement of ACHIEVEMENTS) {
      // Пропускаем уже полученные достижения
      if (stats.achievements.includes(achievement.id)) continue

      let isUnlocked = false

      switch (achievement.requirement.type) {
        case 'nft_count':
          isUnlocked = stats.nftCount >= achievement.requirement.value
          break
        case 'likes':
          isUnlocked = stats.likes >= achievement.requirement.value
          break
        case 'donations':
          isUnlocked = stats.donations >= achievement.requirement.value
          break
        case 'level':
          isUnlocked = stats.level >= achievement.requirement.value
          break
      }

      if (isUnlocked) {
        unlockedAchievements.push(achievement)
      }
    }

    return unlockedAchievements
  }

  /**
   * Добавление XP за действие
   */
  addXPForAction(action: 'mint' | 'like' | 'comment' | 'share' | 'donation'): number {
    const xpMap = {
      mint: CONSTANTS.XP_PER_NFT_MINT,
      like: CONSTANTS.XP_PER_LIKE,
      comment: CONSTANTS.XP_PER_COMMENT,
      share: CONSTANTS.XP_PER_SHARE,
      donation: CONSTANTS.XP_PER_DONATION,
    }

    return xpMap[action]
  }

  /**
   * Вычисление прогресса до следующего уровня
   */
  getLevelProgress(currentXP: number, currentLevel: number): {
    current: number
    next: number
    progress: number
  } {
    const currentLevelXP = currentLevel === 1 
      ? 0 
      : this.getXPForNextLevel(currentLevel - 1)
    const nextLevelXP = this.getXPForNextLevel(currentLevel)
    const progress = ((currentXP - currentLevelXP) / (nextLevelXP - currentLevelXP)) * 100

    return {
      current: currentXP - currentLevelXP,
      next: nextLevelXP - currentLevelXP,
      progress: Math.min(100, Math.max(0, progress)),
    }
  }
}

export const gamificationEngine = new GamificationEngine()

