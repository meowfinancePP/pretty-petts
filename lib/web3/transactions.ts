// lib/web3/transactions.ts
/**
 * Утилиты для работы с транзакциями
 */

import { Address, Hash, WaitForTransactionReceiptParameters } from 'viem'
import { waitForTransactionReceipt, writeContract, readContract } from '@wagmi/core'
import { wagmiConfig } from './config'
import type { PrettyPetsNFTContract, PrettyPetsMarketplaceContract } from './contracts'
import type { getDonationPoolContract } from './contracts'

/**
 * Ожидание подтверждения транзакции
 */
export async function waitForTransaction(
  hash: Hash,
  options?: WaitForTransactionReceiptParameters
) {
  return waitForTransactionReceipt(wagmiConfig, {
    hash,
    ...options,
  })
}

/**
 * Создание NFT питомца
 */
type RarityValue = 'common' | 'rare' | 'epic' | 'legendary'

const RARITY_MAP: Record<RarityValue, number> = {
  common: 0,
  rare: 1,
  epic: 2,
  legendary: 3,
}

function normalizeRarity(rarity: number | RarityValue | string): number {
  if (typeof rarity === 'number' && !Number.isNaN(rarity)) {
    return rarity
  }
  const key = (typeof rarity === 'string' ? rarity : String(rarity))?.toLowerCase() as RarityValue
  return RARITY_MAP[key] ?? 0
}

export async function createPetNFT(
  contract: PrettyPetsNFTContract,
  to: Address,
  name: string,
  species: string,
  rarity: number | RarityValue | string,
  tokenURI: string
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'createPet',
    args: [
      to as `0x${string}`,
      name,
      species,
      normalizeRarity(rarity),
      tokenURI
    ]
  })
  return hash
}

// Legacy export alias for backward compatibility
export const mintPetNFT = createPetNFT

/**
 * Покормить NFT питомца
 */
export async function feedPetNFT(
  contract: PrettyPetsNFTContract,
  tokenId: bigint
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'feedPet',
    args: [tokenId]
  })
  return hash
}

/**
 * Вылечить NFT питомца
 */
export async function healPetNFT(
  contract: PrettyPetsNFTContract,
  tokenId: bigint,
  amount: bigint
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'healPet',
    args: [tokenId],
    value: amount
  })
  return hash
}

/**
 * Листинг NFT на маркетплейсе
 */
export async function listNFT(
  contract: PrettyPetsMarketplaceContract,
  nftContractAddress: Address,
  tokenId: bigint,
  price: bigint
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'listNFT',
    args: [
      nftContractAddress as `0x${string}`,
      tokenId,
      price,
    ],
  })
  return hash
}

/**
 * Покупка NFT на маркетплейсе
 */
export async function buyNFT(
  contract: PrettyPetsMarketplaceContract,
  nftContractAddress: Address,
  tokenId: bigint,
  value: bigint
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'buyNFT',
    args: [
      nftContractAddress as `0x${string}`,
      tokenId,
    ],
    value,
  })
  return hash
}

/**
 * Пожертвование в приют
 */
export async function donateToShelter(
  contract: ReturnType<typeof getDonationPoolContract>,
  shelterAddress: Address,
  amount: bigint
): Promise<Hash> {
  const hash = await writeContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName: 'donate',
    args: [shelterAddress, amount],
    value: amount,
  })
  return hash
}

/**
 * Чтение данных из контракта
 */
export async function readContractData<T>(
  contract: { address: Address; abi: any },
  functionName: string,
  args?: any[]
): Promise<T> {
  return readContract(wagmiConfig, {
    address: contract.address,
    abi: contract.abi,
    functionName,
    args,
  }) as Promise<T>
}
