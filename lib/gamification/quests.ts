// lib/gamification/quests.ts
/**
 * Система квестов
 */

export interface Quest {
  id: string
  title: string
  description: string
  reward: number
  xpReward: number
  progress: number
  target: number
  type: 'daily' | 'weekly' | 'special'
  completed: boolean
}

export const DAILY_QUESTS: Quest[] = [
  {
    id: 'daily_mint',
    title: 'Оцифруйте питомца',
    description: 'Создайте новый NFT сегодня',
    reward: 100,
    xpReward: 50,
    progress: 0,
    target: 1,
    type: 'daily',
    completed: false,
  },
  {
    id: 'daily_like',
    title: 'Лайкните 5 NFT',
    description: 'Поставьте лайки 5 разным NFT',
    reward: 50,
    xpReward: 25,
    progress: 0,
    target: 5,
    type: 'daily',
    completed: false,
  },
]

export const WEEKLY_QUESTS: Quest[] = [
  {
    id: 'weekly_collector',
    title: 'Коллекционер недели',
    description: 'Создайте 5 NFT за неделю',
    reward: 500,
    xpReward: 250,
    progress: 0,
    target: 5,
    type: 'weekly',
    completed: false,
  },
]

