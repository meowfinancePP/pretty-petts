/**
 * API Types
 * Shared types for API responses
 */

// NFT Types
export interface NFT {
  id: string
  name: string
  description: string
  image: string
  price: string
  currency: 'ETH' | 'WETH'
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
  collection: {
    id: string
    name: string
    slug: string
    verified: boolean
  }
  creator: {
    address: string
    name?: string
    avatar?: string
    verified: boolean
  }
  owner: {
    address: string
    name?: string
    avatar?: string
  }
  traits: NFTTrait[]
  likes: number
  views: number
  listed: boolean
  listingExpiry?: string
  createdAt: string
  updatedAt: string
}

export interface NFTTrait {
  type: string
  value: string
  rarity?: number
}

export interface NFTActivity {
  id: string
  type: 'sale' | 'transfer' | 'listing' | 'bid' | 'mint'
  nftId: string
  from: string
  to?: string
  price?: string
  timestamp: string
  txHash?: string
}

// Collection Types
export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  image: string
  banner?: string
  verified: boolean
  creator: {
    address: string
    name?: string
    avatar?: string
  }
  stats: CollectionStats
  socials?: {
    website?: string
    twitter?: string
    discord?: string
  }
  createdAt: string
}

export interface CollectionStats {
  items: number
  owners: number
  floorPrice: string
  volume24h: string
  volumeTotal: string
  listed: number
  sales24h: number
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasMore: boolean
  }
}

// Filters
export interface NFTFilters {
  search?: string
  collection?: string
  rarity?: string[]
  minPrice?: number
  maxPrice?: number
  traits?: Record<string, string[]>
  listed?: boolean
  sortBy?: 'price_asc' | 'price_desc' | 'recent' | 'popular' | 'rarity'
}

export interface CollectionFilters {
  search?: string
  verified?: boolean
  sortBy?: 'volume' | 'floor' | 'recent' | 'popular'
}
