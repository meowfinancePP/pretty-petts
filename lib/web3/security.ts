// lib/web3/security.ts
/**
 * Менеджер безопасности для Web3 операций
 * Защита от мошенничества, rate limiting, валидация транзакций
 */

import { Address, Hash } from 'viem'

interface Transaction {
  hash: Hash
  from: Address
  to: Address
  value: bigint
  timestamp: number
}

interface RateLimitStore {
  [key: string]: {
    count: number
    resetTime: number
  }
}

class SecurityManager {
  private rateLimitStore: RateLimitStore = {}
  private transactionHistory: Map<string, Transaction[]> = new Map()
  private readonly RATE_LIMIT_WINDOW = 60 * 1000 // 1 минута
  private readonly MAX_REQUESTS_PER_WINDOW = 10
  private readonly MAX_TRANSACTIONS_PER_ADDRESS = 5

  /**
   * Проверка rate limiting для действий пользователя
   */
  async checkRateLimit(userId: string, action: string): Promise<boolean> {
    const key = `${userId}:${action}`
    const now = Date.now()
    const limit = this.rateLimitStore[key]

    if (!limit || now > limit.resetTime) {
      this.rateLimitStore[key] = {
        count: 1,
        resetTime: now + this.RATE_LIMIT_WINDOW,
      }
      return true
    }

    if (limit.count >= this.MAX_REQUESTS_PER_WINDOW) {
      return false
    }

    limit.count++
    return true
  }

  /**
   * Валидация транзакции перед отправкой
   */
  async validateTransaction(tx: Transaction): Promise<{ valid: boolean; reason?: string }> {
    // Проверка на подозрительные транзакции
    if (tx.value > BigInt('1000000000000000000')) { // > 1 ETH
      return { valid: false, reason: 'Transaction value too high' }
    }

    // Проверка истории транзакций адреса
    const addressHistory = this.transactionHistory.get(tx.from) || []
    if (addressHistory.length >= this.MAX_TRANSACTIONS_PER_ADDRESS) {
      const recentTransactions = addressHistory.filter(
        t => Date.now() - t.timestamp < this.RATE_LIMIT_WINDOW
      )
      if (recentTransactions.length >= this.MAX_TRANSACTIONS_PER_ADDRESS) {
        return { valid: false, reason: 'Too many transactions from this address' }
      }
    }

    // Добавить транзакцию в историю
    addressHistory.push(tx)
    this.transactionHistory.set(tx.from, addressHistory)

    return { valid: true }
  }

  /**
   * Защита от накрутки лайков
   */
  async protectLikeAction(userId: string, nftId: string): Promise<boolean> {
    const key = `like:${userId}:${nftId}`
    return this.checkRateLimit(userId, key)
  }

  /**
   * Проверка подписи сообщения
   */
  async validateSignature(
    message: string,
    signature: string,
    address: Address
  ): Promise<boolean> {
    // В реальном приложении здесь была бы проверка подписи через viem
    // Для демо возвращаем true
    return true
  }

  /**
   * Очистка старых записей
   */
  cleanup(): void {
    const now = Date.now()
    Object.keys(this.rateLimitStore).forEach(key => {
      if (now > this.rateLimitStore[key].resetTime) {
        delete this.rateLimitStore[key]
      }
    })

    // Очистка истории транзакций старше 1 часа
    const oneHourAgo = now - 60 * 60 * 1000
    this.transactionHistory.forEach((history, address) => {
      const filtered = history.filter(t => t.timestamp > oneHourAgo)
      if (filtered.length === 0) {
        this.transactionHistory.delete(address)
      } else {
        this.transactionHistory.set(address, filtered)
      }
    })
  }
}

// Singleton экземпляр
export const securityManager = new SecurityManager()

// Периодическая очистка (каждые 5 минут)
if (typeof window !== 'undefined') {
  setInterval(() => {
    securityManager.cleanup()
  }, 5 * 60 * 1000)
}

