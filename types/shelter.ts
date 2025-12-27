// types/shelter.ts
/**
 * Типы для работы с приютами
 */

export interface Shelter {
  id: string
  name: string
  address: string
  verified: boolean
  totalDonations: number
  animals: Animal[]
  description: string
  imageUrl?: string
  website?: string
  contactEmail?: string
  contactPhone?: string
}

export interface Animal {
  id: string
  name: string
  species: string
  breed?: string
  age?: number
  nftMinted: boolean
  adoptionStatus: 'available' | 'reserved' | 'adopted'
  imageUrl?: string
  description?: string
}

export type AdoptionStatus = 'available' | 'reserved' | 'adopted'

