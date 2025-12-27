export interface NFT {
  id: string
  name: string
  description: string
  image: string
  animationUrl?: string
  attributes: NFTAttribute[]
  collection: Collection
  owner: User
  creator: User
  price: number
  currency: 'ETH' | 'USDC' | 'USDT'
  rarity: Rarity
  likes: number
  views: number
  createdAt: Date
  updatedAt: Date
  isListed: boolean
  isAuction: boolean
  auctionEndsAt?: Date
  lastSalePrice?: number
  tokenId: string
  contractAddress: string
  chain: Blockchain
  metadata: Record<string, any>
  category: NFTCategory
  species: string
  breed?: string
  age?: number
  shelter?: Shelter
  adoptionStatus?: AdoptionStatus
  tokenRewards: number
  achievements: Achievement[]
  socialScore: number
  premiumFeatures: PremiumFeature[]
}

export type Rarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic'

export interface NFTAttribute {
  trait_type: string
  value: string | number
  display_type?: 'number' | 'boost_percentage' | 'date'
  max_value?: number
}

export interface Collection {
  id: string
  name: string
  description: string
  image: string
  bannerImage: string
  floorPrice: number
  volumeTraded: number
  owners: number
  items: number
  socialLinks: SocialLinks
  creator: User
  verified: boolean
  premium: boolean
  featured: boolean
  category: CollectionCategory
  contractAddress: string
}

export interface User {
  id: string
  username: string
  displayName: string
  avatar: string
  banner: string
  bio: string
  walletAddress: string
  email?: string
  emailVerified: boolean
  tier: UserTier
  subscription: Subscription
  stats: UserStats
  socialLinks: SocialLinks
  joinedAt: Date
  lastActive: Date
  verified: boolean
  premium: boolean
  achievements: Achievement[]
  badges: Badge[]
  settings: UserSettings
}

export type UserTier = 'basic' | 'premium' | 'diamond' | 'legacy'

export interface Subscription {
  type: SubscriptionType
  status: 'active' | 'canceled' | 'expired'
  startDate: Date
  endDate: Date
  autoRenew: boolean
  paymentMethod: PaymentMethod
}

export type SubscriptionType = 'monthly' | 'quarterly' | 'yearly' | 'lifetime'

export interface UserStats {
  nftsOwned: number
  nftsCreated: number
  nftsSold: number
  totalSpent: number
  totalEarned: number
  charityDonated: number
  followers: number
  following: number
  avgRating: number
  completedQuests: number
}

export interface SocialLinks {
  twitter?: string
  instagram?: string
  discord?: string
  website?: string
  telegram?: string
}

export interface Shelter {
  id: string
  name: string
  description: string
  logo: string
  banner: string
  location: string
  website: string
  verified: boolean
  totalDonations: number
  animalsRescued: number
  socialLinks: SocialLinks
}

export type AdoptionStatus = 'available' | 'reserved' | 'adopted' | 'fostered'

export interface Achievement {
  id: string
  name: string
  description: string
  icon: string
  rarity: Rarity
  points: number
  unlockedAt: Date
  category: AchievementCategory
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  tier: BadgeTier
  earnedAt: Date
}

export type BadgeTier = 'bronze' | 'silver' | 'gold' | 'platinum' | 'diamond'

export interface PremiumFeature {
  id: string
  name: string
  description: string
  icon: string
  includedIn: SubscriptionType[]
  priority: number
}

export interface PaymentMethod {
  type: 'crypto' | 'card' | 'bank'
  details: Record<string, any>
  verified: boolean
}

export interface UserSettings {
  notifications: NotificationSettings
  privacy: PrivacySettings
  display: DisplaySettings
  language: string
  currency: string
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  marketplace: boolean
  social: boolean
  marketing: boolean
}

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'friends'
  showWalletAddress: boolean
  showEmail: boolean
  allowMessages: 'everyone' | 'friends' | 'none'
}

export interface DisplaySettings {
  theme: 'light' | 'dark' | 'auto'
  nftView: 'grid' | 'list'
  animationQuality: 'low' | 'medium' | 'high'
  reduceMotion: boolean
}

export type Blockchain = 'ethereum' | 'polygon' | 'arbitrum' | 'optimism'

export type NFTCategory = 'dogs' | 'cats' | 'birds' | 'rodents' | 'exotics' | 'mythical'

export type CollectionCategory = 'dogs' | 'cats' | 'birds' | 'mixed' | 'charity' | 'exclusive'

export type AchievementCategory = 'collection' | 'social' | 'trading' | 'charity' | 'premium'

export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  meta?: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

export interface PaginatedResponse<T> {
  items: T[]
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export interface MarketStats {
  totalVolume: number
  totalTrades: number
  activeUsers: number
  floorPrice: number
  avgSalePrice: number
  listedNFTs: number
  charityRaised: number
  sheltersSupported: number
}

export interface SearchFilters {
  category?: NFTCategory
  rarity?: Rarity
  minPrice?: number
  maxPrice?: number
  collection?: string
  creator?: string
  owner?: string
  species?: string
  sortBy: 'price' | 'rarity' | 'date' | 'likes' | 'views'
  sortOrder: 'asc' | 'desc'
  limit: number
  page: number
}

export interface Transaction {
  id: string
  type: 'mint' | 'buy' | 'sell' | 'transfer' | 'bid'
  from: User
  to: User
  nft: NFT
  price: number
  currency: string
  timestamp: Date
  txHash: string
  status: 'pending' | 'confirmed' | 'failed'
  networkFee: number
  charityAmount: number
}

export interface Quest {
  id: string
  title: string
  description: string
  type: QuestType
  reward: QuestReward
  requirements: QuestRequirement[]
  deadline?: Date
  completed: boolean
  progress: number
  total: number
}

export type QuestType = 'daily' | 'weekly' | 'monthly' | 'achievement'

export interface QuestReward {
  tokens: number
  xp: number
  badge?: Badge
  nft?: NFT
}

export interface QuestRequirement {
  type: 'own_nft' | 'sell_nft' | 'buy_nft' | 'social_action' | 'charity_donation'
  target: number
  current: number
}

export interface ChatMessage {
  id: string
  sender: User
  receiver: User
  content: string
  timestamp: Date
  read: boolean
  attachments?: Attachment[]
}

export interface Attachment {
  type: 'image' | 'video' | 'file'
  url: string
  name: string
  size: number
}

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  data?: Record<string, any>
  read: boolean
  createdAt: Date
  actionUrl?: string
}

export type NotificationType = 
  | 'trade'
  | 'social'
  | 'system'
  | 'charity'
  | 'achievement'
  | 'subscription'
  | 'marketplace'

export interface Review {
  id: string
  reviewer: User
  reviewee: User
  rating: number
  comment: string
  createdAt: Date
  nft?: NFT
  verifiedPurchase: boolean
}