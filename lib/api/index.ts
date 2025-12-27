/**
 * API Layer Index
 * Central export for all API functions
 */

// Client
export { apiClient, APIError } from './client'

// Types
export type {
  NFT,
  NFTTrait,
  NFTActivity,
  Collection,
  CollectionStats,
  PaginatedResponse,
  NFTFilters,
  CollectionFilters,
} from './types'

// NFT API
export {
  getNFTs,
  getNFTById,
  getNFTActivity,
  getNFTsByOwner,
  getSimilarNFTs,
  getTrendingNFTs,
  likeNFT,
  unlikeNFT,
} from './nfts'

// Collections API
export {
  getCollections,
  getCollectionBySlug,
  getCollectionById,
  getCollectionNFTs,
  getCollectionActivity,
  getTrendingCollections,
  getTopCollections,
  searchCollections,
} from './collections'

// Mock data (for development)
export { mockNFTs, mockCollections, generateMockNFTs, generateMockActivity } from './mock-data'
