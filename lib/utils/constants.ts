// lib/utils/constants.ts
/**
 * Константы для приложения Petopia
 */

export const CONSTANTS = {
  // NFT
  NFT_MINT_COST: '0.05', // ETH
  NFT_UPDATE_COST: '0.01', // ETH
  
  // Пожертвования
  DONATION_PERCENTAGE: 10, // 10% от транзакции
  
  // Геймификация
  XP_PER_NFT_MINT: 100,
  XP_PER_LIKE: 5,
  XP_PER_COMMENT: 10,
  XP_PER_SHARE: 15,
  XP_PER_DONATION: 50,
  
  // Уровни
  XP_FOR_LEVEL_2: 1000,
  XP_FOR_LEVEL_3: 3000,
  XP_FOR_LEVEL_4: 6000,
  XP_FOR_LEVEL_5: 10000,
  
  // Лимиты
  MAX_PET_NAME_LENGTH: 50,
  MAX_DESCRIPTION_LENGTH: 1000,
  MAX_IMAGE_SIZE: 10 * 1024 * 1024, // 10MB
  
  // API
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || '/api',
  IPFS_GATEWAY: 'https://ipfs.io/ipfs/',
  
  // Социальные сети
  SOCIAL_LINKS: {
    twitter: 'https://twitter.com/petopia',
    discord: 'https://discord.gg/petopia',
    telegram: 'https://t.me/petopia',
  },
} as const

