// lib/web3/contracts.ts
/**
 * ABI и утилиты для работы со смарт-контрактами PrettyPets
 */

import { Address } from 'viem'
import { getContractAddress } from './config'

// PrettyPets NFT ABI
export const PRETTYPETS_NFT_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'string', name: 'name', type: 'string' },
      { internalType: 'string', name: 'species', type: 'string' },
      { internalType: 'uint8', name: 'rarity', type: 'uint8' },
      { internalType: 'string', name: 'tokenURI', type: 'string' }
    ],
    name: 'createPet',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'feedPet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'healPet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'shelterName', type: 'string' }],
    name: 'makeDonation',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'getPetAttributes',
    outputs: [
      {
        components: [
          { internalType: 'string', name: 'name', type: 'string' },
          { internalType: 'string', name: 'species', type: 'string' },
          { internalType: 'uint8', name: 'rarity', type: 'uint8' },
          { internalType: 'uint256', name: 'generation', type: 'uint256' },
          { internalType: 'uint256', name: 'birthTime', type: 'uint256' },
          { internalType: 'uint256', name: 'lastFed', type: 'uint256' },
          { internalType: 'uint256', name: 'happiness', type: 'uint256' },
          { internalType: 'uint256', name: 'health', type: 'uint256' },
          { internalType: 'uint256', name: 'experience', type: 'uint256' },
          { internalType: 'bool', name: 'isAlive', type: 'bool' }
        ],
        internalType: 'struct PrettyPetsNFT.PetAttributes',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
    name: 'getPetsByOwner',
    outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'donor', type: 'address' }],
    name: 'getTotalDonations',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllDonations',
    outputs: [
      {
        components: [
          { internalType: 'address', name: 'donor', type: 'address' },
          { internalType: 'uint256', name: 'amount', type: 'uint256' },
          { internalType: 'uint256', name: 'timestamp', type: 'uint256' },
          { internalType: 'string', name: 'shelterName', type: 'string' }
        ],
        internalType: 'struct PrettyPetsNFT.Donation[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'petNeedsCare',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'owner', type: 'address' },
      { indexed: false, internalType: 'string', name: 'name', type: 'string' },
      { indexed: false, internalType: 'uint8', name: 'rarity', type: 'uint8' }
    ],
    name: 'PetCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'happinessIncrease', type: 'uint256' }
    ],
    name: 'PetFed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'healthIncrease', type: 'uint256' }
    ],
    name: 'PetHealed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'donor', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
      { indexed: false, internalType: 'string', name: 'shelterName', type: 'string' }
    ],
    name: 'DonationMade',
    type: 'event',
  }
] as const

// PrettyPets Marketplace ABI
export const PRETTYPETS_MARKETPLACE_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'listNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'buyNFT',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'cancelListing',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { internalType: 'uint256', name: 'startingPrice', type: 'uint256' },
      { internalType: 'uint256', name: 'reservePrice', type: 'uint256' }
    ],
    name: 'createAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'placeBid',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'endAuction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'withdrawBalance',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'getListing',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'address', name: 'seller', type: 'address' },
          { internalType: 'address', name: 'nftContract', type: 'address' },
          { internalType: 'uint256', name: 'price', type: 'uint256' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
          { internalType: 'uint256', name: 'listedAt', type: 'uint256' }
        ],
        internalType: 'struct PrettyPetsMarketplace.Listing',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: 'nftContract', type: 'address' },
      { internalType: 'uint256', name: 'tokenId', type: 'uint256' }
    ],
    name: 'getAuction',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
          { internalType: 'address', name: 'seller', type: 'address' },
          { internalType: 'address', name: 'nftContract', type: 'address' },
          { internalType: 'uint256', name: 'startingPrice', type: 'uint256' },
          { internalType: 'uint256', name: 'currentBid', type: 'uint256' },
          { internalType: 'address', name: 'currentBidder', type: 'address' },
          { internalType: 'uint256', name: 'endTime', type: 'uint256' },
          { internalType: 'bool', name: 'isActive', type: 'bool' },
          { internalType: 'uint256', name: 'reservePrice', type: 'uint256' }
        ],
        internalType: 'struct PrettyPetsMarketplace.Auction',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'seller', type: 'address' }],
    name: 'getSellerBalance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'seller', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'NFTListed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: true, internalType: 'address', name: 'buyer', type: 'address' },
      { indexed: false, internalType: 'address', name: 'seller', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'price', type: 'uint256' }
    ],
    name: 'NFTSold',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'nftContract', type: 'address' },
      { indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' },
      { indexed: false, internalType: 'address', name: 'bidder', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'bidAmount', type: 'uint256' }
    ],
    name: 'BidPlaced',
    type: 'event',
  }
] as const

// Типы для контрактов
export interface PrettyPetsNFTContract {
  address: Address
  abi: typeof PRETTYPETS_NFT_ABI
}

export interface PrettyPetsMarketplaceContract {
  address: Address
  abi: typeof PRETTYPETS_MARKETPLACE_ABI
}

// Утилиты для получения контрактов
export const getPrettyPetsNFTContract = (chainId: number): PrettyPetsNFTContract => ({
  address: getContractAddress('PrettyPetsNFT', chainId),
  abi: PRETTYPETS_NFT_ABI,
})

export const getPrettyPetsMarketplaceContract = (chainId: number): PrettyPetsMarketplaceContract => ({
  address: getContractAddress('PrettyPetsMarketplace', chainId),
  abi: PRETTYPETS_MARKETPLACE_ABI,
})

// Legacy contract utilities for backward compatibility
export const getDonationPoolContract = (chainId: number) => ({
  address: getContractAddress('DonationPool', chainId),
  abi: [] as const, // ABI will be imported if needed
})

// Legacy export alias for backward compatibility
export const getPetNFTContract = getPrettyPetsNFTContract
export const getMarketplaceContract = getPrettyPetsMarketplaceContract

// Типы данных для контрактов
export interface PetAttributes {
  name: string
  species: string
  rarity: number
  generation: bigint
  birthTime: bigint
  lastFed: bigint
  happiness: bigint
  health: bigint
  experience: bigint
  isAlive: boolean
}

export interface Donation {
  donor: Address
  amount: bigint
  timestamp: bigint
  shelterName: string
}

export interface Listing {
  tokenId: bigint
  seller: Address
  nftContract: Address
  price: bigint
  isActive: boolean
  listedAt: bigint
}

export interface Auction {
  tokenId: bigint
  seller: Address
  nftContract: Address
  startingPrice: bigint
  currentBid: bigint
  currentBidder: Address
  endTime: bigint
  isActive: boolean
  reservePrice: bigint
}
