/**
 * NFTs API
 * API functions for NFT operations
 */

import { apiClient } from './client'
import type { NFT, NFTActivity, NFTFilters, PaginatedResponse } from './types'
import { mockNFTs, generateMockActivity } from './mock-data'

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Get paginated list of NFTs
 */
export async function getNFTs(
  filters: NFTFilters = {},
  page: number = 1,
  limit: number = 20
): Promise<PaginatedResponse<NFT>> {
  // In production, use apiClient
  // return apiClient.get<PaginatedResponse<NFT>>('/nfts', { params: { ...filters, page, limit } })

  // Mock implementation
  await delay(300 + Math.random() * 200)

  let filtered = [...mockNFTs]

  // Apply filters
  if (filters.search) {
    const search = filters.search.toLowerCase()
    filtered = filtered.filter(nft => 
      nft.name.toLowerCase().includes(search) ||
      nft.collection.name.toLowerCase().includes(search)
    )
  }

  if (filters.collection) {
    filtered = filtered.filter(nft => nft.collection.slug === filters.collection)
  }

  if (filters.rarity && filters.rarity.length > 0) {
    filtered = filtered.filter(nft => filters.rarity!.includes(nft.rarity))
  }

  if (filters.minPrice !== undefined) {
    filtered = filtered.filter(nft => parseFloat(nft.price) >= filters.minPrice!)
  }

  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter(nft => parseFloat(nft.price) <= filters.maxPrice!)
  }

  if (filters.listed !== undefined) {
    filtered = filtered.filter(nft => nft.listed === filters.listed)
  }

  // Apply sorting
  switch (filters.sortBy) {
    case 'price_asc':
      filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
      break
    case 'price_desc':
      filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
      break
    case 'recent':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'popular':
      filtered.sort((a, b) => b.likes - a.likes)
      break
    case 'rarity':
      const rarityOrder = { legendary: 0, epic: 1, rare: 2, common: 3 }
      filtered.sort((a, b) => rarityOrder[a.rarity] - rarityOrder[b.rarity])
      break
  }

  // Paginate
  const total = filtered.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const items = filtered.slice(start, start + limit)

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  }
}

/**
 * Get single NFT by ID
 */
export async function getNFTById(id: string): Promise<NFT | null> {
  // In production: return apiClient.get<NFT>(`/nfts/${id}`)
  
  await delay(200 + Math.random() * 100)
  
  const nft = mockNFTs.find(n => n.id === id)
  return nft || null
}

/**
 * Get NFT activity history
 */
export async function getNFTActivity(nftId: string): Promise<NFTActivity[]> {
  // In production: return apiClient.get<NFTActivity[]>(`/nfts/${nftId}/activity`)
  
  await delay(200 + Math.random() * 100)
  
  return generateMockActivity(nftId, 10)
}

/**
 * Get NFTs by owner address
 */
export async function getNFTsByOwner(
  address: string,
  page: number = 1,
  limit: number = 20
): Promise<PaginatedResponse<NFT>> {
  // In production: return apiClient.get<PaginatedResponse<NFT>>(`/users/${address}/nfts`, { params: { page, limit } })
  
  await delay(300 + Math.random() * 200)
  
  // Mock: return random subset
  const owned = mockNFTs.filter(() => Math.random() > 0.7)
  const total = owned.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const items = owned.slice(start, start + limit)

  return {
    items,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    },
  }
}

/**
 * Get similar NFTs
 */
export async function getSimilarNFTs(nftId: string, limit: number = 4): Promise<NFT[]> {
  await delay(200 + Math.random() * 100)
  
  const nft = mockNFTs.find(n => n.id === nftId)
  if (!nft) return []
  
  // Return NFTs from same collection
  return mockNFTs
    .filter(n => n.id !== nftId && n.collection.id === nft.collection.id)
    .slice(0, limit)
}

/**
 * Get trending NFTs
 */
export async function getTrendingNFTs(limit: number = 10): Promise<NFT[]> {
  await delay(200 + Math.random() * 100)
  
  return [...mockNFTs]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit)
}

/**
 * Like an NFT
 */
export async function likeNFT(nftId: string): Promise<{ likes: number }> {
  // In production: return apiClient.post<{ likes: number }>(`/nfts/${nftId}/like`)
  
  await delay(100)
  
  const nft = mockNFTs.find(n => n.id === nftId)
  if (nft) {
    nft.likes += 1
    return { likes: nft.likes }
  }
  
  return { likes: 0 }
}

/**
 * Unlike an NFT
 */
export async function unlikeNFT(nftId: string): Promise<{ likes: number }> {
  // In production: return apiClient.delete<{ likes: number }>(`/nfts/${nftId}/like`)
  
  await delay(100)
  
  const nft = mockNFTs.find(n => n.id === nftId)
  if (nft && nft.likes > 0) {
    nft.likes -= 1
    return { likes: nft.likes }
  }
  
  return { likes: 0 }
}
