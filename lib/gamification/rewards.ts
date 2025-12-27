// lib/gamification/rewards.ts
/**
 * Система наград
 */

export interface Reward {
  id: string
  type: 'token' | 'xp' | 'badge' | 'nft'
  amount: number
  description: string
}

export function calculateReward(achievementId: string, baseReward: number): Reward {
  return {
    id: `reward_${achievementId}`,
    type: 'token',
    amount: baseReward,
    description: `Награда за достижение: ${achievementId}`,
  }
}

