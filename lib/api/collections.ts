/**
 * Collections API
 * API functions for collection operations
 */

import { apiClient } from './client'
import type { Collection, NFT, CollectionFilters, PaginatedResponse } from './types'
import { mockCollections, mockNFTs } from './mock-data'

// Simulate network delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Get paginated list of collections
 */
export async function getCollections(
  filters: CollectionFilters = {},
  page: number = 1,
  limit: number = 20
): Promise<PaginatedResponse<Collection>> {
  // In production: return apiClient.get<PaginatedResponse<Collection>>('/collections', { params: { ...filters, page, limit } })
  
  await delay(300 + Math.random() * 200)

  let filtered = [...mockCollections]

  // Apply filters
  if (filters.search) {
    const search = filters.search.toLowerCase()
    filtered = filtered.filter(c => 
      c.name.toLowerCase().includes(search) ||
      c.description.toLowerCase().includes(search)
    )
  }

  if (filters.verified !== undefined) {
    filtered = filtered.filter(c => c.verified === filters.verified)
  }

  // Apply sorting
  switch (filters.sortBy) {
    case 'volume':
      filtered.sort((a, b) => parseFloat(b.stats.volumeTotal) - parseFloat(a.stats.volumeTotal))
      break
    case 'floor':
      filtered.sort((a, b) => parseFloat(b.stats.floorPrice) - parseFloat(a.stats.floorPrice))
      break
    case 'recent':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'popular':
      filtered.sort((a, b) => b.stats.owners - a.stats.owners)
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
 * Get single collection by slug
 */
export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  // In production: return apiClient.get<Collection>(`/collections/${slug}`)
  
  await delay(200 + Math.random() * 100)
  
  const collection = mockCollections.find(c => c.slug === slug)
  return collection || null
}

/**
 * Get collection by ID
 */
export async function getCollectionById(id: string): Promise<Collection | null> {
  // In production: return apiClient.get<Collection>(`/collections/${id}`)
  
  await delay(200 + Math.random() * 100)
  
  const collection = mockCollections.find(c => c.id === id)
  return collection || null
}

/**
 * Get NFTs in a collection
 */
export async function getCollectionNFTs(
  slug: string,
  page: number = 1,
  limit: number = 20
): Promise<PaginatedResponse<NFT>> {
  // In production: return apiClient.get<PaginatedResponse<NFT>>(`/collections/${slug}/nfts`, { params: { page, limit } })
  
  await delay(300 + Math.random() * 200)
  
  const collectionNFTs = mockNFTs.filter(nft => nft.collection.slug === slug)
  const total = collectionNFTs.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const items = collectionNFTs.slice(start, start + limit)

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
 * Get collection activity
 */
export async function getCollectionActivity(slug: string, limit: number = 20) {
  // In production: return apiClient.get(`/collections/${slug}/activity`, { params: { limit } })
  
  await delay(200 + Math.random() * 100)
  
  // Mock activity
  return Array.from({ length: limit }, (_, i) => ({
    id: `activity-${slug}-${i}`,
    type: ['sale', 'listing', 'bid'][Math.floor(Math.random() * 3)],
    nft: mockNFTs.find(n => n.collection.slug === slug) || mockNFTs[0],
    price: (Math.random() * 2).toFixed(2),
    from: `0x${Math.random().toString(16).slice(2, 10)}...`,
    to: `0x${Math.random().toString(16).slice(2, 10)}...`,
    timestamp: new Date(Date.now() - i * Math.random() * 60 * 60 * 1000).toISOString(),
  }))
}

/**
 * Get trending collections
 */
export async function getTrendingCollections(limit: number = 5): Promise<Collection[]> {
  await delay(200 + Math.random() * 100)
  
  return [...mockCollections]
    .sort((a, b) => parseFloat(b.stats.volume24h) - parseFloat(a.stats.volume24h))
    .slice(0, limit)
}

/**
 * Get top collections by volume
 */
export async function getTopCollections(
  timeframe: '24h' | '7d' | '30d' = '24h',
  limit: number = 10
): Promise<Collection[]> {
  await delay(200 + Math.random() * 100)
  
  return [...mockCollections]
    .sort((a, b) => parseFloat(b.stats.volumeTotal) - parseFloat(a.stats.volumeTotal))
    .slice(0, limit)
}

/**
 * Search collections
 */
export async function searchCollections(query: string, limit: number = 5): Promise<Collection[]> {
  await delay(150 + Math.random() * 100)
  
  const search = query.toLowerCase()
  return mockCollections
    .filter(c => 
      c.name.toLowerCase().includes(search) ||
      c.description.toLowerCase().includes(search)
    )
    .slice(0, limit)
}
