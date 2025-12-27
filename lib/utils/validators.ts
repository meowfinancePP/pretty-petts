// lib/utils/validators.ts
/**
 * Валидаторы для форм и данных
 */

import { Address } from 'viem'

/**
 * Валидация email адреса
 */
export function isValidEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Валидация Ethereum адреса
 */
export function isValidAddress(address: string): address is Address {
  return /^0x[a-fA-F0-9]{40}$/.test(address)
}

/**
 * Валидация URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Валидация IPFS hash
 */
export function isValidIPFSHash(hash: string): boolean {
  return /^Qm[1-9A-HJ-NP-Za-km-z]{44}$/.test(hash) || hash.startsWith('ipfs://')
}

/**
 * Валидация имени питомца
 */
export function isValidPetName(name: string): boolean {
  return name.length >= 2 && name.length <= 50 && /^[a-zA-Zа-яА-ЯёЁ0-9\s-]+$/.test(name)
}

/**
 * Валидация описания
 */
export function isValidDescription(description: string): boolean {
  return description.length >= 10 && description.length <= 1000
}

/**
 * Валидация цены NFT
 */
export function isValidPrice(price: string): boolean {
  const num = parseFloat(price)
  return !isNaN(num) && num >= 0 && num <= 1000000
}

/**
 * Валидация файла изображения
 */
export function isValidImageFile(file: File): boolean {
  const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  const maxSize = 10 * 1024 * 1024 // 10MB
  return validTypes.includes(file.type) && file.size <= maxSize
}

/**
 * Валидация формы создания NFT
 */
export interface CreateNFTFormData {
  petName: string
  description: string
  image: File | null
  price?: string
}

export function validateCreateNFTForm(data: CreateNFTFormData): {
  valid: boolean
  errors: Record<string, string>
} {
  const errors: Record<string, string> = {}

  if (!isValidPetName(data.petName)) {
    errors.petName = 'Имя питомца должно быть от 2 до 50 символов'
  }

  if (!isValidDescription(data.description)) {
    errors.description = 'Описание должно быть от 10 до 1000 символов'
  }

  if (!data.image) {
    errors.image = 'Необходимо загрузить изображение'
  } else if (!isValidImageFile(data.image)) {
    errors.image = 'Файл должен быть изображением (JPEG, PNG, WebP, GIF) размером до 10MB'
  }

  if (data.price && !isValidPrice(data.price)) {
    errors.price = 'Цена должна быть от 0 до 1,000,000'
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  }
}

