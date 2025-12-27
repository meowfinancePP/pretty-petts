/**
 * NFT Hooks
 * React Query hooks for NFT data fetching
 */

import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query'
import {
  getNFTs,
  getNFTById,
  getNFTActivity,
  getNFTsByOwner,
  getSimilarNFTs,
  getTrendingNFTs,
  likeNFT,
  unlikeNFT,
} from '@/lib/api'
import type { NFTFilters } from '@/lib/api'

// Query keys factory
export const nftKeys = {
  all: ['nfts'] as const,
  lists: () => [...nftKeys.all, 'list'] as const,
  list: (filters: NFTFilters) => [...nftKeys.lists(), filters] as const,
  details: () => [...nftKeys.all, 'detail'] as const,
  detail: (id: string) => [...nftKeys.details(), id] as const,
  activity: (id: string) => [...nftKeys.detail(id), 'activity'] as const,
  similar: (id: string) => [...nftKeys.detail(id), 'similar'] as const,
  byOwner: (address: string) => [...nftKeys.all, 'owner', address] as const,
  trending: () => [...nftKeys.all, 'trending'] as const,
}

/**
 * Hook to fetch paginated NFTs with filters
 */
export function useNFTs(filters: NFTFilters = {}, page: number = 1, limit: number = 20) {
  return useQuery({
    queryKey: nftKeys.list({ ...filters, page, limit } as NFTFilters),
    queryFn: () => getNFTs(filters, page, limit),
    staleTime: 30 * 1000, // 30 seconds
  })
}

/**
 * Hook to fetch infinite scrolling NFTs
 */
export function useInfiniteNFTs(filters: NFTFilters = {}, limit: number = 20) {
  return useInfiniteQuery({
    queryKey: [...nftKeys.list(filters), 'infinite'],
    queryFn: ({ pageParam = 1 }) => getNFTs(filters, pageParam, limit),
    getNextPageParam: (lastPage) => 
      lastPage.pagination.hasMore ? lastPage.pagination.page + 1 : undefined,
    initialPageParam: 1,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch single NFT by ID
 */
export function useNFT(id: string | undefined) {
  return useQuery({
    queryKey: nftKeys.detail(id!),
    queryFn: () => getNFTById(id!),
    enabled: !!id,
    staleTime: 60 * 1000, // 1 minute
  })
}

/**
 * Hook to fetch NFT activity
 */
export function useNFTActivity(nftId: string | undefined) {
  return useQuery({
    queryKey: nftKeys.activity(nftId!),
    queryFn: () => getNFTActivity(nftId!),
    enabled: !!nftId,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch similar NFTs
 */
export function useSimilarNFTs(nftId: string | undefined, limit: number = 4) {
  return useQuery({
    queryKey: nftKeys.similar(nftId!),
    queryFn: () => getSimilarNFTs(nftId!, limit),
    enabled: !!nftId,
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to fetch NFTs by owner
 */
export function useNFTsByOwner(address: string | undefined, page: number = 1, limit: number = 20) {
  return useQuery({
    queryKey: [...nftKeys.byOwner(address!), page, limit],
    queryFn: () => getNFTsByOwner(address!, page, limit),
    enabled: !!address,
    staleTime: 30 * 1000,
  })
}

/**
 * Hook to fetch trending NFTs
 */
export function useTrendingNFTs(limit: number = 10) {
  return useQuery({
    queryKey: nftKeys.trending(),
    queryFn: () => getTrendingNFTs(limit),
    staleTime: 60 * 1000,
  })
}

/**
 * Hook to like/unlike NFT
 */
export function useLikeNFT() {
  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn: likeNFT,
    onSuccess: (data, nftId) => {
      // Update cache
      queryClient.setQueryData(nftKeys.detail(nftId), (old: any) => 
        old ? { ...old, likes: data.likes } : old
      )
      // Invalidate lists
      queryClient.invalidateQueries({ queryKey: nftKeys.lists() })
    },
  })

  const unlikeMutation = useMutation({
    mutationFn: unlikeNFT,
    onSuccess: (data, nftId) => {
      queryClient.setQueryData(nftKeys.detail(nftId), (old: any) => 
        old ? { ...old, likes: data.likes } : old
      )
      queryClient.invalidateQueries({ queryKey: nftKeys.lists() })
    },
  })

  return {
    like: likeMutation.mutate,
    unlike: unlikeMutation.mutate,
    isLiking: likeMutation.isPending,
    isUnliking: unlikeMutation.isPending,
  }
}

/**
 * Hook to prefetch NFT data
 */
export function usePrefetchNFT() {
  const queryClient = useQueryClient()

  return (id: string) => {
    queryClient.prefetchQuery({
      queryKey: nftKeys.detail(id),
      queryFn: () => getNFTById(id),
      staleTime: 60 * 1000,
    })
  }
}
