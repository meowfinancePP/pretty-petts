// lib/web3/hooks.ts
/**
 * React hooks for PrettyPets Web3 interactions
 */

import { useState, useEffect, useCallback } from 'react'
import { useAccount, useWriteContract, useReadContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import {
  getPrettyPetsNFTContract,
  getPrettyPetsMarketplaceContract,
  PetAttributes,
  Listing,
  Auction,
  Donation
} from './contracts'
import { useChainId } from 'wagmi'

// Custom hooks for PrettyPets NFT interactions
export const usePrettyPetsNFT = () => {
  const { address } = useAccount()
  const chainId = useChainId()
  const nftContract = getPrettyPetsNFTContract(chainId)

  // Create a new pet
  const createPet = useWriteContract()

  const createPetAsync = useCallback(async (
    to: string,
    name: string,
    species: string,
    rarity: number,
    tokenURI: string
  ) => {
    return createPet.writeContractAsync({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'createPet',
      args: [to as `0x${string}`, name, species, rarity, tokenURI],
    })
  }, [createPet, nftContract])

  // Feed a pet
  const feedPet = useWriteContract()

  const feedPetAsync = useCallback(async (tokenId: number) => {
    return feedPet.writeContractAsync({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'feedPet',
      args: [BigInt(tokenId)],
    })
  }, [feedPet, nftContract])

  // Heal a pet
  const healPet = useWriteContract()

  const healPetAsync = useCallback(async (tokenId: number, amount: string) => {
    return healPet.writeContractAsync({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'healPet',
      args: [BigInt(tokenId)],
      value: parseEther(amount),
    })
  }, [healPet, nftContract])

  // Make a donation
  const makeDonation = useWriteContract()

  const makeDonationAsync = useCallback(async (shelterName: string, amount: string) => {
    return makeDonation.writeContractAsync({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'makeDonation',
      args: [shelterName],
      value: parseEther(amount),
    })
  }, [makeDonation, nftContract])

  // Get pet attributes
  const usePetAttributes = (tokenId: number) => {
    return useReadContract({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'getPetAttributes',
      args: [BigInt(tokenId)],
      query: {
        enabled: !!tokenId,
      },
    })
  }

  // Get pets by owner
  const usePetsByOwner = (owner?: string) => {
    return useReadContract({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'getPetsByOwner',
      args: [(owner || address || '0x0000000000000000000000000000000000000000') as `0x${string}`],
      query: {
        enabled: !!owner || !!address,
      },
    })
  }

  // Get total donations
  const useTotalDonations = (donor?: string) => {
    return useReadContract({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'getTotalDonations',
      args: [(donor || address || '0x0000000000000000000000000000000000000000') as `0x${string}`],
      query: {
        enabled: !!donor || !!address,
      },
    })
  }

  // Get all donations
  const useAllDonations = () => {
    return useReadContract({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'getAllDonations',
      args: [],
    })
  }

  // Check if pet needs care
  const usePetNeedsCare = (tokenId: number) => {
    return useReadContract({
      address: nftContract.address as `0x${string}`,
      abi: nftContract.abi,
      functionName: 'petNeedsCare',
      args: [BigInt(tokenId)],
      query: {
        enabled: !!tokenId,
      },
    })
  }

  return {
    createPetAsync,
    feedPetAsync,
    healPetAsync,
    makeDonationAsync,
    usePetAttributes,
    usePetsByOwner,
    useTotalDonations,
    useAllDonations,
    usePetNeedsCare,
    isCreatingPet: createPet.isPending,
    isFeedingPet: feedPet.isPending,
    isHealingPet: healPet.isPending,
    isMakingDonation: makeDonation.isPending,
  }
}

// Custom hooks for PrettyPets Marketplace
export const usePrettyPetsMarketplace = () => {
  const { address } = useAccount()
  const chainId = useChainId()
  const marketplaceContract = getPrettyPetsMarketplaceContract(chainId)

  // List NFT for sale
  const listNFT = useWriteContract()

  const listNFTAsync = useCallback(async (
    nftContract: string,
    tokenId: number,
    price: string
  ) => {
    return listNFT.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'listNFT',
      args: [nftContract as `0x${string}`, BigInt(tokenId), parseEther(price)],
    })
  }, [listNFT, marketplaceContract])

  // Buy NFT
  const buyNFT = useWriteContract()

  const buyNFTAsync = useCallback(async (
    nftContract: string,
    tokenId: number,
    price: string
  ) => {
    return buyNFT.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'buyNFT',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
      value: parseEther(price),
    })
  }, [buyNFT, marketplaceContract])

  // Cancel listing
  const cancelListing = useWriteContract()

  const cancelListingAsync = useCallback(async (
    nftContract: string,
    tokenId: number
  ) => {
    return cancelListing.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'cancelListing',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
    })
  }, [cancelListing, marketplaceContract])

  // Create auction
  const createAuction = useWriteContract()

  const createAuctionAsync = useCallback(async (
    nftContract: string,
    tokenId: number,
    startingPrice: string,
    reservePrice: string
  ) => {
    return createAuction.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'createAuction',
      args: [
        nftContract as `0x${string}`,
        BigInt(tokenId),
        parseEther(startingPrice),
        parseEther(reservePrice)
      ],
    })
  }, [createAuction, marketplaceContract])

  // Place bid
  const placeBid = useWriteContract()

  const placeBidAsync = useCallback(async (
    nftContract: string,
    tokenId: number,
    bidAmount: string
  ) => {
    return placeBid.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'placeBid',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
      value: parseEther(bidAmount),
    })
  }, [placeBid, marketplaceContract])

  // End auction
  const endAuction = useWriteContract()

  const endAuctionAsync = useCallback(async (
    nftContract: string,
    tokenId: number
  ) => {
    return endAuction.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'endAuction',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
    })
  }, [endAuction, marketplaceContract])

  // Withdraw balance
  const withdrawBalance = useWriteContract()

  const withdrawBalanceAsync = useCallback(async () => {
    return withdrawBalance.writeContractAsync({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'withdrawBalance',
      args: [],
    })
  }, [withdrawBalance, marketplaceContract])

  // Get listing details
  const useListing = (nftContract: string, tokenId: number) => {
    return useReadContract({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'getListing',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
      query: {
        enabled: !!nftContract && !!tokenId,
      },
    })
  }

  // Get auction details
  const useAuction = (nftContract: string, tokenId: number) => {
    return useReadContract({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'getAuction',
      args: [nftContract as `0x${string}`, BigInt(tokenId)],
      query: {
        enabled: !!nftContract && !!tokenId,
      },
    })
  }

  // Get seller balance
  const useSellerBalance = (seller?: string) => {
    return useReadContract({
      address: marketplaceContract.address as `0x${string}`,
      abi: marketplaceContract.abi,
      functionName: 'getSellerBalance',
      args: [(seller || address || '0x0000000000000000000000000000000000000000') as `0x${string}`],
      query: {
        enabled: !!seller || !!address,
      },
    })
  }

  return {
    listNFTAsync,
    buyNFTAsync,
    cancelListingAsync,
    createAuctionAsync,
    placeBidAsync,
    endAuctionAsync,
    withdrawBalanceAsync,
    useListing,
    useAuction,
    useSellerBalance,
    isListingNFT: listNFT.isPending,
    isBuyingNFT: buyNFT.isPending,
    isCancellingListing: cancelListing.isPending,
    isCreatingAuction: createAuction.isPending,
    isPlacingBid: placeBid.isPending,
    isEndingAuction: endAuction.isPending,
    isWithdrawingBalance: withdrawBalance.isPending,
  }
}

// Wallet connection hook
export const useWallet = () => {
  const { address, isConnected } = useAccount()
  const [isConnecting, setIsConnecting] = useState(false)

  return {
    address,
    isConnected,
    isConnecting,
  }
}

// Transaction status hook
export const useTransactionStatus = (hash?: string) => {
  const { data, isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash: hash as `0x${string}`,
  })

  return {
    receipt: data,
    isLoading,
    isSuccess,
    isError,
  }
}
