// lib/web3/config.ts
/**
 * Конфигурация Web3 для Petopia
 * Использует wagmi + viem для работы с блокчейном
 */

import { createConfig, http } from 'wagmi'
import { mainnet, polygon, arbitrum, optimism, sepolia } from 'wagmi/chains'
import { injected, metaMask } from 'wagmi/connectors'

// Поддерживаемые сети
export const SUPPORTED_CHAINS = [mainnet, polygon, arbitrum, optimism, sepolia] as const

// Конфигурация RPC провайдеров
const getRpcUrl = (chainId: number) => {
  const rpcUrls: Record<number, string> = {
    1: process.env.NEXT_PUBLIC_ETHEREUM_RPC_URL || `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`,
    137: process.env.NEXT_PUBLIC_POLYGON_RPC_URL || `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`,
    42161: process.env.NEXT_PUBLIC_ARBITRUM_RPC_URL || `https://arb-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`,
    10: process.env.NEXT_PUBLIC_OPTIMISM_RPC_URL || `https://opt-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`,
    11155111: process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL || `https://eth-sepolia.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`,
  }
  return rpcUrls[chainId] || `https://eth-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_KEY || ''}`
}

// Создание wagmi конфигурации
export const wagmiConfig = createConfig({
  chains: SUPPORTED_CHAINS,
  connectors: [
    injected(),
    metaMask(),
  ],
  transports: {
    [mainnet.id]: http(getRpcUrl(mainnet.id)),
    [polygon.id]: http(getRpcUrl(polygon.id)),
    [arbitrum.id]: http(getRpcUrl(arbitrum.id)),
    [optimism.id]: http(getRpcUrl(optimism.id)),
    [sepolia.id]: http(getRpcUrl(sepolia.id)),
  },
  ssr: true,
})

// Адреса смарт-контрактов
export const CONTRACT_ADDRESSES = {
  PrettyPetsNFT: {
    [mainnet.id]: process.env.NEXT_PUBLIC_PRETTYPETS_NFT_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_PRETTYPETS_NFT_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_PRETTYPETS_NFT_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_PRETTYPETS_NFT_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_PRETTYPETS_NFT_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
  PrettyPetsMarketplace: {
    [mainnet.id]: process.env.NEXT_PUBLIC_PRETTYPETS_MARKETPLACE_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_PRETTYPETS_MARKETPLACE_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_PRETTYPETS_MARKETPLACE_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_PRETTYPETS_MARKETPLACE_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_PRETTYPETS_MARKETPLACE_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
  PetNFT: {
    [mainnet.id]: process.env.NEXT_PUBLIC_PET_NFT_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_PET_NFT_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_PET_NFT_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_PET_NFT_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_PET_NFT_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
  PPToken: {
    [mainnet.id]: process.env.NEXT_PUBLIC_PP_TOKEN_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_PP_TOKEN_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_PP_TOKEN_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_PP_TOKEN_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_PP_TOKEN_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
  Marketplace: {
    [mainnet.id]: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
  DonationPool: {
    [mainnet.id]: process.env.NEXT_PUBLIC_DONATION_POOL_CONTRACT_MAINNET || '0x0000000000000000000000000000000000000000',
    [polygon.id]: process.env.NEXT_PUBLIC_DONATION_POOL_CONTRACT_POLYGON || '0x0000000000000000000000000000000000000000',
    [arbitrum.id]: process.env.NEXT_PUBLIC_DONATION_POOL_CONTRACT_ARBITRUM || '0x0000000000000000000000000000000000000000',
    [optimism.id]: process.env.NEXT_PUBLIC_DONATION_POOL_CONTRACT_OPTIMISM || '0x0000000000000000000000000000000000000000',
    [sepolia.id]: process.env.NEXT_PUBLIC_DONATION_POOL_CONTRACT_SEPOLIA || '0x0000000000000000000000000000000000000000',
  },
} as const

// Получить адрес контракта для текущей сети
export const getContractAddress = (contractName: keyof typeof CONTRACT_ADDRESSES, chainId: number): `0x${string}` => {
  const address = CONTRACT_ADDRESSES[contractName][chainId as keyof typeof CONTRACT_ADDRESSES[typeof contractName]]
  if (!address || address === '0x0000000000000000000000000000000000000000') {
    throw new Error(`Contract ${contractName} not deployed on chain ${chainId}`)
  }
  return address as `0x${string}`
}

// Contract utility functions
export const getPrettyPetsNFTContract = (chainId: number) => ({
  address: getContractAddress('PrettyPetsNFT', chainId),
  abi: [] as const, // ABI will be imported from contracts.ts
})

export const getPrettyPetsMarketplaceContract = (chainId: number) => ({
  address: getContractAddress('PrettyPetsMarketplace', chainId),
  abi: [] as const, // ABI will be imported from contracts.ts
})
