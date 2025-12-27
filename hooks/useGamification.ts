// hooks/useGamification.ts
'use client'

import { useState, useEffect } from 'react'
import { gamificationEngine, UserStats } from '@/lib/gamification/engine'
import { Achievement } from '@/config/achievements'

export function useGamification(initialStats?: Partial<UserStats>) {
  const [stats, setStats] = useState<UserStats>({
    nftCount: 0,
    likes: 0,
    donations: 0,
    level: 1,
    xp: 0,
    achievements: [],
    ...initialStats,
  })

  const [unlockedAchievements, setUnlockedAchievements] = useState<Achievement[]>([])

  useEffect(() => {
    const newAchievements = gamificationEngine.checkAchievements(stats)
    if (newAchievements.length > 0) {
      setUnlockedAchievements(newAchievements)
      setStats(prev => ({
        ...prev,
        achievements: [...prev.achievements, ...newAchievements.map(a => a.id)],
        xp: prev.xp + newAchievements.reduce((sum, a) => sum + a.reward, 0),
      }))
    }
  }, [stats.nftCount, stats.likes, stats.donations, stats.level])

  const level = gamificationEngine.calculateLevel(stats.xp)
  const levelProgress = gamificationEngine.getLevelProgress(stats.xp, level)

  const addXP = (amount: number) => {
    setStats(prev => {
      const newXP = prev.xp + amount
      return {
        ...prev,
        xp: newXP,
        level: gamificationEngine.calculateLevel(newXP),
      }
    })
  }

  const addAction = (action: 'mint' | 'like' | 'comment' | 'share' | 'donation') => {
    const xp = gamificationEngine.addXPForAction(action)
    addXP(xp)

    switch (action) {
      case 'mint':
        setStats(prev => ({ ...prev, nftCount: prev.nftCount + 1 }))
        break
      case 'like':
        setStats(prev => ({ ...prev, likes: prev.likes + 1 }))
        break
      case 'donation':
        setStats(prev => ({ ...prev, donations: prev.donations + 1 }))
        break
    }
  }

  return {
    stats: { ...stats, level },
    levelProgress,
    unlockedAchievements,
    addXP,
    addAction,
  }
}

