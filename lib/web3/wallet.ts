// lib/web3/wallet.ts
/**
 * Утилиты для работы с кошельком
 */

import { Address, formatUnits, parseUnits } from 'viem'
import { getAccount, getBalance } from '@wagmi/core'
import { wagmiConfig } from './config'

/**
 * Получить информацию о подключенном аккаунте
 */
export async function getWalletAccount() {
  const account = getAccount(wagmiConfig)
  return account
}

/**
 * Получить баланс кошелька в ETH
 */
export async function getWalletBalance(address: Address): Promise<string> {
  try {
    const balance = await getBalance(wagmiConfig, {
      address,
    })
    return formatUnits(balance.value, balance.decimals)
  } catch (error) {
    console.error('Error getting wallet balance:', error)
    return '0'
  }
}

/**
 * Форматировать адрес для отображения
 */
export function formatAddress(address: Address, chars = 4): string {
  if (!address) return ''
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
}

/**
 * Проверить валидность адреса
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Конвертировать ETH в Wei
 */
export function ethToWei(amount: string): bigint {
  return parseUnits(amount, 18)
}

/**
 * Конвертировать Wei в ETH
 */
export function weiToEth(amount: bigint): string {
  return formatUnits(amount, 18)
}

