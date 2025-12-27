// lib/gamification/achievement-system.ts
// Система достижений для геймификации платформы

export type AchievementRarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  rarity: AchievementRarity
  condition: (stats: UserStats) => boolean
  progress?: (stats: UserStats) => number
  unlockedAt?: Date
  progressValue?: number
  howToUnlock?: string[]
  rewards?: string
}

export interface UserStats {
  followers: number
  following: number
  nftsOwned: number
  nftsCreated: number
  nftsSold: number
  nftsBought: number
  totalVolume: number
  completeCollections: number
  commentsMade: number
  likesGiven: number
  daysActive: number
}

export class AchievementSystem {
  private achievements: Map<string, Achievement>
  private unlockedAchievements: Set<string>
  private userId: string

  constructor(userId: string) {
    this.userId = userId
    this.achievements = new Map()
    this.unlockedAchievements = new Set()
    this.initializeAchievements()
    this.loadUnlockedAchievements()
  }

  private initializeAchievements() {
    const achievementDefinitions: Achievement[] = [
      // SOCIAL ACHIEVEMENTS
      {
        id: 'first_follower',
        title: 'Первый подписчик',
        description: 'Получите своего первого подписчика',
        icon: '👤',
        rarity: 'common',
        condition: (stats) => stats.followers >= 1,
        progress: (stats) => Math.min((stats.followers / 1) * 100, 100)
      },
      {
        id: 'social_butterfly',
        title: 'Социальная бабочка',
        description: 'Наберите 100 подписчиков',
        icon: '🦋',
        rarity: 'rare',
        condition: (stats) => stats.followers >= 100,
        progress: (stats) => Math.min((stats.followers / 100) * 100, 100)
      },
      {
        id: 'influencer',
        title: 'Инфлюенсер',
        description: 'Наберите 1000 подписчиков',
        icon: '⭐',
        rarity: 'epic',
        condition: (stats) => stats.followers >= 1000,
        progress: (stats) => Math.min((stats.followers / 1000) * 100, 100)
      },
      
      // TRADING ACHIEVEMENTS
      {
        id: 'first_sale',
        title: 'Первая продажа',
        description: 'Продайте свой первый NFT',
        icon: '💰',
        rarity: 'common',
        condition: (stats) => stats.nftsSold >= 1,
        progress: (stats) => Math.min((stats.nftsSold / 1) * 100, 100)
      },
      {
        id: 'whale_status',
        title: 'Статус Кита',
        description: 'Продайте NFT на сумму более 10 ETH',
        icon: '🐋',
        rarity: 'epic',
        condition: (stats) => stats.totalVolume >= 10,
        progress: (stats) => Math.min((stats.totalVolume / 10) * 100, 100)
      },
      {
        id: 'trading_master',
        title: 'Мастер торговли',
        description: 'Продайте 50 NFT',
        icon: '💎',
        rarity: 'legendary',
        condition: (stats) => stats.nftsSold >= 50,
        progress: (stats) => Math.min((stats.nftsSold / 50) * 100, 100)
      },
      
      // CREATION ACHIEVEMENTS
      {
        id: 'artist_beginner',
        title: 'Начинающий художник',
        description: 'Создайте свой первый NFT',
        icon: '🎨',
        rarity: 'common',
        condition: (stats) => stats.nftsCreated >= 1,
        progress: (stats) => Math.min((stats.nftsCreated / 1) * 100, 100)
      },
      {
        id: 'prolific_creator',
        title: 'Плодовитый создатель',
        description: 'Создайте 50 NFT',
        icon: '🚀',
        rarity: 'legendary',
        condition: (stats) => stats.nftsCreated >= 50,
        progress: (stats) => Math.min((stats.nftsCreated / 50) * 100, 100)
      },
      {
        id: 'creative_genius',
        title: 'Творческий гений',
        description: 'Создайте 100 NFT',
        icon: '✨',
        rarity: 'legendary',
        condition: (stats) => stats.nftsCreated >= 100,
        progress: (stats) => Math.min((stats.nftsCreated / 100) * 100, 100)
      },
      
      // COLLECTION ACHIEVEMENTS
      {
        id: 'collector_starter',
        title: 'Начинающий коллекционер',
        description: 'Купите свой первый NFT',
        icon: '🛍️',
        rarity: 'common',
        condition: (stats) => stats.nftsBought >= 1,
        progress: (stats) => Math.min((stats.nftsBought / 1) * 100, 100)
      },
      {
        id: 'treasure_hunter',
        title: 'Охотник за сокровищами',
        description: 'Соберите 5 NFT из одной коллекции',
        icon: '🏆',
        rarity: 'rare',
        condition: (stats) => stats.completeCollections >= 1,
        progress: (stats) => Math.min((stats.completeCollections / 1) * 100, 100)
      },
      {
        id: 'collector_elite',
        title: 'Элитный коллекционер',
        description: 'Владейте 100 NFT',
        icon: '👑',
        rarity: 'legendary',
        condition: (stats) => stats.nftsOwned >= 100,
        progress: (stats) => Math.min((stats.nftsOwned / 100) * 100, 100)
      },
      
      // ENGAGEMENT ACHIEVEMENTS
      {
        id: 'social_engager',
        title: 'Социальный активист',
        description: 'Оставьте 100 комментариев',
        icon: '💬',
        rarity: 'rare',
        condition: (stats) => stats.commentsMade >= 100,
        progress: (stats) => Math.min((stats.commentsMade / 100) * 100, 100)
      },
      {
        id: 'like_master',
        title: 'Мастер лайков',
        description: 'Поставьте 500 лайков',
        icon: '❤️',
        rarity: 'rare',
        condition: (stats) => stats.likesGiven >= 500,
        progress: (stats) => Math.min((stats.likesGiven / 500) * 100, 100)
      },
      
      // LOYALTY ACHIEVEMENTS
      {
        id: 'early_adopter',
        title: 'Ранний последователь',
        description: 'Активны на платформе 30 дней',
        icon: '🌱',
        rarity: 'common',
        condition: (stats) => stats.daysActive >= 30,
        progress: (stats) => Math.min((stats.daysActive / 30) * 100, 100)
      },
      {
        id: 'veteran',
        title: 'Ветеран',
        description: 'Активны на платформе 365 дней',
        icon: '🎖️',
        rarity: 'epic',
        condition: (stats) => stats.daysActive >= 365,
        progress: (stats) => Math.min((stats.daysActive / 365) * 100, 100)
      }
    ]

    achievementDefinitions.forEach(achievement => {
      this.achievements.set(achievement.id, achievement)
    })
  }

  private loadUnlockedAchievements() {
    if (typeof window === 'undefined') return
    
    const stored = localStorage.getItem(`achievements_${this.userId}`)
    if (stored) {
      try {
        const unlocked = JSON.parse(stored) as string[]
        unlocked.forEach(id => this.unlockedAchievements.add(id))
      } catch (e) {
        console.error('Failed to load achievements:', e)
      }
    }
  }

  private saveUnlockedAchievements() {
    if (typeof window === 'undefined') return
    
    const unlocked = Array.from(this.unlockedAchievements)
    localStorage.setItem(`achievements_${this.userId}`, JSON.stringify(unlocked))
  }

  checkForNewAchievements(stats: UserStats): Achievement[] {
    const newlyUnlocked: Achievement[] = []

    this.achievements.forEach((achievement, id) => {
      if (!this.unlockedAchievements.has(id) && achievement.condition(stats)) {
        this.unlockedAchievements.add(id)
        newlyUnlocked.push({
          ...achievement,
          unlockedAt: new Date(),
          progressValue: 100
        })
      }
    })

    if (newlyUnlocked.length > 0) {
      this.saveUnlockedAchievements()
    }

    return newlyUnlocked
  }

  getAllAchievements(): Achievement[] {
    return Array.from(this.achievements.values()).map(achievement => ({
      ...achievement,
      unlockedAt: this.unlockedAchievements.has(achievement.id) ? new Date() : undefined,
      progressValue: achievement.progress ? achievement.progress(this.getUserStats()) : undefined
    }))
  }

  getUnlockedAchievements(): Achievement[] {
    return Array.from(this.achievements.values())
      .filter(achievement => this.unlockedAchievements.has(achievement.id))
      .map(achievement => ({
        ...achievement,
        unlockedAt: new Date(),
        progressValue: 100
      }))
  }

  getAchievementProgress(stats: UserStats): Map<string, number> {
    const progress = new Map<string, number>()
    
    this.achievements.forEach((achievement, id) => {
      if (achievement.progress) {
        progress.set(id, achievement.progress(stats))
      }
    })
    
    return progress
  }

  // Метод для получения статистики пользователя (должен быть реализован в компоненте)
  private getUserStats(): UserStats {
    // Это заглушка - реальная статистика должна загружаться из API
    return {
      followers: 0,
      following: 0,
      nftsOwned: 0,
      nftsCreated: 0,
      nftsSold: 0,
      nftsBought: 0,
      totalVolume: 0,
      completeCollections: 0,
      commentsMade: 0,
      likesGiven: 0,
      daysActive: 0
    }
  }

  getRarityColor(rarity: AchievementRarity): string {
    switch (rarity) {
      case 'common':
        return 'from-gray-500 to-gray-600'
      case 'rare':
        return 'from-blue-500 to-cyan-500'
      case 'epic':
        return 'from-purple-500 to-pink-500'
      case 'legendary':
        return 'from-yellow-500 via-orange-500 to-red-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  getRarityLabel(rarity: AchievementRarity): string {
    switch (rarity) {
      case 'common':
        return 'Обычное'
      case 'rare':
        return 'Редкое'
      case 'epic':
        return 'Эпическое'
      case 'legendary':
        return 'Легендарное'
      default:
        return 'Обычное'
    }
  }
}
