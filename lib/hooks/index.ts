/**
 * Hooks Index
 * Central export for all custom hooks
 */

// NFT Hooks
export {
  nftKeys,
  useNFTs,
  useInfiniteNFTs,
  useNFT,
  useNFTActivity,
  useSimilarNFTs,
  useNFTsByOwner,
  useTrendingNFTs,
  useLikeNFT,
  usePrefetchNFT,
} from './useNFTs'

// Collection Hooks
export {
  collectionKeys,
  useCollections,
  useInfiniteCollections,
  useCollection,
  useCollectionById,
  useCollectionNFTs,
  useInfiniteCollectionNFTs,
  useCollectionActivity,
  useTrendingCollections,
  useTopCollections,
  useSearchCollections,
  usePrefetchCollection,
} from './useCollections'
