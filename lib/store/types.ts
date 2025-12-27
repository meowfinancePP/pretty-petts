/**
 * Zustand Store Types
 * Shared types for all stores
 */

// UI Store Types
export type Theme = 'dark' | 'light' | 'system'
export type SidebarView = 'navigation' | 'tools' | 'settings' | 'notifications'

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  title: string
  message?: string
  timestamp: number
  read: boolean
  action?: {
    label: string
    href?: string
    onClick?: () => void
  }
}

export interface UIPreferences {
  reducedMotion: boolean
  soundEnabled: boolean
  compactMode: boolean
  showTips: boolean
}

// Marketplace Store Types
export type SortBy = 'price_asc' | 'price_desc' | 'recent' | 'popular' | 'rarity'
export type ViewMode = 'grid' | 'list' | 'compact'
export type RarityFilter = 'all' | 'common' | 'rare' | 'epic' | 'legendary'

export interface MarketFilters {
  search: string
  collection: string | null
  rarity: RarityFilter[]
  priceRange: [number, number]
  traits: Record<string, string[]>
  onlyVerified: boolean
  onlyBuyNow: boolean
}

export interface WorkspaceWidget {
  id: string
  type: 'orderbook' | 'chart' | 'whale' | 'activity' | 'portfolio'
  title: string
  minimized: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
}

export interface WatchlistItem {
  id: string
  nftId: string
  name: string
  image?: string
  addedAt: number
  priceAlert?: number
}

// User Store Types
export interface WalletInfo {
  address: string | null
  chainId: number | null
  balance: string
  isConnected: boolean
  isConnecting: boolean
  connector?: string
}

export interface UserProfile {
  address: string
  displayName?: string
  bio?: string
  avatar?: string
  banner?: string
  email?: string
  twitter?: string
  discord?: string
  verified: boolean
  createdAt: number
}

export interface UserStats {
  nftCount: number
  totalValue: string
  totalSales: number
  totalPurchases: number
  followers: number
  following: number
}

export interface UserPreferences {
  currency: 'ETH' | 'USD' | 'EUR'
  language: string
  notifications: {
    sales: boolean
    bids: boolean
    transfers: boolean
    newsletter: boolean
  }
  privacy: {
    showActivity: boolean
    showCollection: boolean
  }
}
