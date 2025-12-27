/**
 * Mock Data
 * Realistic mock data for development
 */

import type { NFT, Collection, NFTActivity } from './types'

// Helper to generate random address
const randomAddress = () => `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`

// Helper to generate random price
const randomPrice = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(2)

// Pet names
const petNames = [
  'Luna', 'Max', 'Bella', 'Charlie', 'Milo', 'Coco', 'Buddy', 'Daisy',
  'Rocky', 'Sadie', 'Duke', 'Zoe', 'Tucker', 'Molly', 'Bear', 'Sophie',
  'Jack', 'Maggie', 'Oliver', 'Chloe', 'Cooper', 'Penny', 'Riley', 'Gracie'
]

// Adjectives
const adjectives = [
  'Stellar', 'Cosmic', 'Quantum', 'Mystic', 'Crystal', 'Golden', 'Shadow',
  'Neon', 'Cyber', 'Astral', 'Ethereal', 'Radiant', 'Prism', 'Aurora'
]

// Collections
export const mockCollections: Collection[] = [
  {
    id: 'stellar-pets',
    name: 'Stellar Pets',
    slug: 'stellar-pets',
    description: 'A collection of unique digital pets from the cosmos. Each Stellar Pet is a one-of-a-kind companion with special traits and abilities.',
    image: '/collections/stellar-pets.png',
    banner: '/collections/stellar-pets-banner.png',
    verified: true,
    creator: {
      address: '0x1234...5678',
      name: 'Petopia Labs',
      avatar: '/avatars/petopia.png',
    },
    stats: {
      items: 10000,
      owners: 4523,
      floorPrice: '0.45',
      volume24h: '234.5',
      volumeTotal: '12450.8',
      listed: 1234,
      sales24h: 89,
    },
    socials: {
      website: 'https://petopia.io',
      twitter: 'https://twitter.com/petopia',
      discord: 'https://discord.gg/petopia',
    },
    createdAt: '2024-01-15T00:00:00Z',
  },
  {
    id: 'cyber-cats',
    name: 'Cyber Cats',
    slug: 'cyber-cats',
    description: 'Futuristic feline companions with cybernetic enhancements. Each cat has unique abilities and rare traits.',
    image: '/collections/cyber-cats.png',
    banner: '/collections/cyber-cats-banner.png',
    verified: true,
    creator: {
      address: '0xabcd...efgh',
      name: 'CyberPets Studio',
    },
    stats: {
      items: 5000,
      owners: 2341,
      floorPrice: '0.89',
      volume24h: '156.2',
      volumeTotal: '8920.4',
      listed: 567,
      sales24h: 45,
    },
    createdAt: '2024-02-20T00:00:00Z',
  },
  {
    id: 'mystic-dogs',
    name: 'Mystic Dogs',
    slug: 'mystic-dogs',
    description: 'Magical canine companions with mystical powers. Discover rare breeds with unique abilities.',
    image: '/collections/mystic-dogs.png',
    verified: true,
    creator: {
      address: '0x9876...5432',
      name: 'MysticPets',
    },
    stats: {
      items: 7500,
      owners: 3210,
      floorPrice: '0.32',
      volume24h: '98.7',
      volumeTotal: '5670.2',
      listed: 890,
      sales24h: 67,
    },
    createdAt: '2024-03-10T00:00:00Z',
  },
  {
    id: 'quantum-bunnies',
    name: 'Quantum Bunnies',
    slug: 'quantum-bunnies',
    description: 'Adorable bunnies that exist in multiple dimensions. Each bunny has quantum-entangled traits.',
    image: '/collections/quantum-bunnies.png',
    verified: false,
    creator: {
      address: '0x5555...6666',
    },
    stats: {
      items: 3000,
      owners: 1456,
      floorPrice: '0.15',
      volume24h: '45.3',
      volumeTotal: '2340.1',
      listed: 345,
      sales24h: 23,
    },
    createdAt: '2024-04-05T00:00:00Z',
  },
]

// Generate mock NFTs
export function generateMockNFTs(count: number = 20): NFT[] {
  const rarities: NFT['rarity'][] = ['common', 'rare', 'epic', 'legendary']
  const rarityWeights = [0.5, 0.3, 0.15, 0.05]
  
  const getRandomRarity = (): NFT['rarity'] => {
    const rand = Math.random()
    let cumulative = 0
    for (let i = 0; i < rarities.length; i++) {
      cumulative += rarityWeights[i]
      if (rand < cumulative) return rarities[i]
    }
    return 'common'
  }

  const traits = [
    { type: 'Background', values: ['Cosmic Purple', 'Nebula Blue', 'Solar Gold', 'Void Black', 'Aurora Green'] },
    { type: 'Fur', values: ['Golden', 'Silver', 'Diamond', 'Obsidian', 'Rainbow'] },
    { type: 'Eyes', values: ['Ruby', 'Sapphire', 'Emerald', 'Diamond', 'Amethyst'] },
    { type: 'Accessory', values: ['Crown', 'Halo', 'Wings', 'Collar', 'Bow Tie'] },
  ]

  return Array.from({ length: count }, (_, i) => {
    const collection = mockCollections[Math.floor(Math.random() * mockCollections.length)]
    const rarity = getRandomRarity()
    const priceMultiplier = rarity === 'legendary' ? 5 : rarity === 'epic' ? 2.5 : rarity === 'rare' ? 1.5 : 1
    
    return {
      id: `nft-${i + 1}`,
      name: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${petNames[Math.floor(Math.random() * petNames.length)]} #${1000 + i}`,
      description: `A ${rarity} digital pet from the ${collection.name} collection. This unique NFT represents a one-of-a-kind companion with special traits and abilities.`,
      image: `/nfts/pet-${(i % 12) + 1}.png`,
      price: randomPrice(0.1 * priceMultiplier, 2 * priceMultiplier),
      currency: 'ETH',
      rarity,
      collection: {
        id: collection.id,
        name: collection.name,
        slug: collection.slug,
        verified: collection.verified,
      },
      creator: {
        address: collection.creator.address,
        name: collection.creator.name,
        verified: collection.verified,
      },
      owner: {
        address: randomAddress(),
        name: Math.random() > 0.7 ? petNames[Math.floor(Math.random() * petNames.length)] + 'Collector' : undefined,
      },
      traits: traits.map(t => ({
        type: t.type,
        value: t.values[Math.floor(Math.random() * t.values.length)],
        rarity: Math.floor(Math.random() * 100),
      })),
      likes: Math.floor(Math.random() * 500),
      views: Math.floor(Math.random() * 5000),
      listed: Math.random() > 0.3,
      listingExpiry: Math.random() > 0.5 ? new Date(Date.now() + Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString() : undefined,
      createdAt: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString(),
      updatedAt: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
    }
  })
}

// Generate mock activity
export function generateMockActivity(nftId: string, count: number = 5): NFTActivity[] {
  const types: NFTActivity['type'][] = ['sale', 'transfer', 'listing', 'bid', 'mint']
  
  return Array.from({ length: count }, (_, i) => ({
    id: `activity-${nftId}-${i}`,
    type: types[Math.floor(Math.random() * types.length)],
    nftId,
    from: randomAddress(),
    to: Math.random() > 0.3 ? randomAddress() : undefined,
    price: Math.random() > 0.4 ? randomPrice(0.1, 2) : undefined,
    timestamp: new Date(Date.now() - i * Math.random() * 24 * 60 * 60 * 1000).toISOString(),
    txHash: `0x${Math.random().toString(16).slice(2)}`,
  }))
}

// Pre-generated NFTs for consistent data
export const mockNFTs = generateMockNFTs(50)
