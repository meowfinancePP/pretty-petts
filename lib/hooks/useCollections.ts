/**
 * Collection Hooks
 * React Query hooks for collection data fetching
 */

import { useQuery, useInfiniteQuery, useQueryClient } from '@tanstack/react-query'
import {
  getCollections,
  getCollectionBySlug,
  getCollectionById,
  getCollectionNFTs,
  getCollectionActivity,
  getTrendingCollections,
  getTopCollections,
  searchCollections,
} from '@/lib/api'
import type { CollectionFilters } from '@/lib/api'

// Query keys factory
export const collectionKeys = {
  all: ['collections'] as const,
  lists: () => [...collectionKeys.all, 'list'] as const,
  list: (filters: CollectionFilters) => [...collectionKeys.lists(), filters] as const,
  details: () => [...collectionKeys.all, 'detail'] as const,
  detail: (slug: string) => [...collectionKeys.details(), slug] as const,
  nfts: (slug: string) => [...collectionKeys.detail(slug), 'nfts'] as const,
  activity: (slug: string) => [...collectionKeys.detail(slug), 'activity'] as const,
  trending: () => [...collectionKeys.all, 'trending'] as const,
  top: (timeframe: string) => [...collectionKeys.all, 'top', timeframe] as const,
  search: (query: string) => [...collectionKeys.all, 'search', query] as const,
}

/**
 * Hook to fetch paginated collections
 */
export function useCollections(filters: CollectionFilters = {}, page: number = 1, limit: number = 20) {
  return useQuery({
    queryKey: collectionKeys.list({ ...filters, page, limit } as CollectionFilters),
    queryFn: () => getCollections(filters, page, limit),
    staleTime: 60 * 1000, // 1 minute
  })
}

/**
 * Hook to fetch infinite scrolling collections
 */
export function useInfiniteCollections(filters: CollectionFilters = {}, limit: number = 20) {
  return useInfiniteQuery({
    queryKey: [...collectionKeys.list(filters), 'infinite'],
    queryFn: ({ pageParam = 1 }) => getCollections(filters, pageParam, limit),
    getNextPageParam: (lastPage) => 
      lastPage.pagination.hasMore ? lastPage.pagination.page + 1 : undefined,
    initialPageParam: 1,
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to fetch single collection by slug
 */
export function useCollection(slug: string | undefined) {
  return useQuery({
    queryKey: collectionKeys.detail(slug!),
    queryFn: () => getCollectionBySlug(slug!),
    enabled: !!slug,
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to fetch collection by ID
 */
export function useCollectionById(id: string | undefined) {
  return useQuery({
    queryKey: [...collectionKeys.all, 'id', id],
    queryFn: () => getCollectionById(id!),
    enabled: !!id,
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to fetch NFTs in a collection
 */
export function useCollectionNFTs(slug: string | undefined, page: number = 1, limit: number = 20) {
  return useQuery({
    queryKey: [...collectionKeys.nfts(slug!), page, limit],
    queryFn: () => getCollectionNFTs(slug!, page, limit),
    enabled: !!slug,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch infinite collection NFTs
 */
export function useInfiniteCollectionNFTs(slug: string | undefined, limit: number = 20) {
  return useInfiniteQuery({
    queryKey: [...collectionKeys.nfts(slug!), 'infinite'],
    queryFn: ({ pageParam = 1 }) => getCollectionNFTs(slug!, pageParam, limit),
    getNextPageParam: (lastPage) => 
      lastPage.pagination.hasMore ? lastPage.pagination.page + 1 : undefined,
    initialPageParam: 1,
    enabled: !!slug,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch collection activity
 */
export function useCollectionActivity(slug: string | undefined, limit: number = 20) {
  return useQuery({
    queryKey: collectionKeys.activity(slug!),
    queryFn: () => getCollectionActivity(slug!, limit),
    enabled: !!slug,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch trending collections
 */
export function useTrendingCollections(limit: number = 5) {
  return useQuery({
    queryKey: collectionKeys.trending(),
    queryFn: () => getTrendingCollections(limit),
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to fetch top collections by volume
 */
export function useTopCollections(timeframe: '24h' | '7d' | '30d' = '24h', limit: number = 10) {
  return useQuery({
    queryKey: collectionKeys.top(timeframe),
    queryFn: () => getTopCollections(timeframe, limit),
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to search collections
 */
export function useSearchCollections(query: string, limit: number = 5) {
  return useQuery({
    queryKey: collectionKeys.search(query),
    queryFn: () => searchCollections(query, limit),
    enabled: query.length >= 2,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to prefetch collection data
 */
export function usePrefetchCollection() {
  const queryClient = useQueryClient()

  return (slug: string) => {
    queryClient.prefetchQuery({
      queryKey: collectionKeys.detail(slug),
      queryFn: () => getCollectionBySlug(slug),
      staleTime: 60 * 1000,
    })
  }
}
