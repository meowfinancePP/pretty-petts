// config/achievements.ts
/**
 * Конфигурация достижений для Petopia
 */

export interface Achievement {
  id: string
  title: string
  description: string
  reward: number
  icon: string
  requirement: {
    type: 'nft_count' | 'likes' | 'donations' | 'level' | 'custom'
    value: number
  }
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_pet',
    title: 'Первый хвост на блокчейне',
    description: 'Оцифруйте своего первого питомца',
    reward: 1000,
    icon: '🌟',
    requirement: {
      type: 'nft_count',
      value: 1,
    },
    rarity: 'common',
  },
  {
    id: 'shelter_hero',
    title: 'Герой приюта',
    description: 'Купите NFT из приюта',
    reward: 5000,
    icon: '🏆',
    requirement: {
      type: 'donations',
      value: 1,
    },
    rarity: 'epic',
  },
  {
    id: 'social_butterfly',
    title: 'Социальная бабочка',
    description: 'Получите 100 лайков',
    reward: 2000,
    icon: '💖',
    requirement: {
      type: 'likes',
      value: 100,
    },
    rarity: 'rare',
  },
  {
    id: 'collector',
    title: 'Коллекционер',
    description: 'Соберите 10 NFT',
    reward: 5000,
    icon: '📦',
    requirement: {
      type: 'nft_count',
      value: 10,
    },
    rarity: 'epic',
  },
  {
    id: 'legend',
    title: 'Легенда Petopia',
    description: 'Достигните 10 уровня',
    reward: 10000,
    icon: '👑',
    requirement: {
      type: 'level',
      value: 10,
    },
    rarity: 'legendary',
  },
]

