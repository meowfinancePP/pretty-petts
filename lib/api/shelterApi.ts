// lib/api/shelterApi.ts
/**
 * API клиент для работы с приютами
 */

import { Shelter, Animal } from '@/types/shelter'

// Моковые данные для демо
const MOCK_SHELTERS: Shelter[] = [
  {
    id: '1',
    name: 'Приют "Доброе сердце"',
    address: 'Москва, ул. Добрая, 1',
    verified: true,
    totalDonations: 50000,
    animals: [
      {
        id: '1',
        name: 'Барсик',
        species: 'Кот',
        breed: 'Британский',
        age: 2,
        nftMinted: false,
        adoptionStatus: 'available',
      },
    ],
    description: 'Приют для бездомных животных',
  },
]

export async function getShelters(): Promise<Shelter[]> {
  // В реальном приложении здесь был бы запрос к API
  return Promise.resolve(MOCK_SHELTERS)
}

export async function getShelterById(id: string): Promise<Shelter | null> {
  const shelter = MOCK_SHELTERS.find(s => s.id === id)
  return Promise.resolve(shelter || null)
}

export async function getAnimalsByShelter(shelterId: string): Promise<Animal[]> {
  const shelter = MOCK_SHELTERS.find(s => s.id === shelterId)
  return Promise.resolve(shelter?.animals || [])
}

