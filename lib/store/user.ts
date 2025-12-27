import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { WalletInfo, UserProfile, UserStats, UserPreferences } from './types'

/**
 * User Store State
 */
interface UserState {
  // Wallet
  wallet: WalletInfo
  
  // Profile
  profile: UserProfile | null
  isLoadingProfile: boolean
  
  // Stats
  stats: UserStats | null
  
  // Preferences
  preferences: UserPreferences
  
  // Auth
  isAuthenticated: boolean
  authToken: string | null
  
  // Activity
  lastActivity: number | null
}

/**
 * User Store Actions
 */
interface UserActions {
  // Wallet
  setWallet: (wallet: Partial<WalletInfo>) => void
  connect: (address: string, chainId: number, connector?: string) => void
  disconnect: () => void
  setBalance: (balance: string) => void
  setChainId: (chainId: number) => void
  setConnecting: (connecting: boolean) => void
  
  // Profile
  setProfile: (profile: UserProfile | null) => void
  updateProfile: (updates: Partial<UserProfile>) => void
  setLoadingProfile: (loading: boolean) => void
  
  // Stats
  setStats: (stats: UserStats | null) => void
  updateStats: (updates: Partial<UserStats>) => void
  
  // Preferences
  setPreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void
  setNotificationPreference: (key: keyof UserPreferences['notifications'], value: boolean) => void
  setPrivacyPreference: (key: keyof UserPreferences['privacy'], value: boolean) => void
  resetPreferences: () => void
  
  // Auth
  setAuthToken: (token: string | null) => void
  logout: () => void
  
  // Activity
  updateLastActivity: () => void
  
  // Reset
  reset: () => void
}

/**
 * Default wallet state
 */
const defaultWallet: WalletInfo = {
  address: null,
  chainId: null,
  balance: '0',
  isConnected: false,
  isConnecting: false,
  connector: undefined,
}

/**
 * Default preferences
 */
const defaultPreferences: UserPreferences = {
  currency: 'ETH',
  language: 'en',
  notifications: {
    sales: true,
    bids: true,
    transfers: true,
    newsletter: false,
  },
  privacy: {
    showActivity: true,
    showCollection: true,
  },
}

/**
 * Initial state
 */
const initialState: UserState = {
  wallet: defaultWallet,
  profile: null,
  isLoadingProfile: false,
  stats: null,
  preferences: defaultPreferences,
  isAuthenticated: false,
  authToken: null,
  lastActivity: null,
}

/**
 * User Store
 * Manages user state: wallet, profile, preferences
 */
export const useUserStore = create<UserState & UserActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Wallet Actions
        setWallet: (wallet) => set((state) => ({
          wallet: { ...state.wallet, ...wallet },
        })),
        
        connect: (address, chainId, connector) => set({
          wallet: {
            address,
            chainId,
            balance: '0',
            isConnected: true,
            isConnecting: false,
            connector,
          },
          isAuthenticated: true,
          lastActivity: Date.now(),
        }),
        
        disconnect: () => set({
          wallet: defaultWallet,
          profile: null,
          stats: null,
          isAuthenticated: false,
          authToken: null,
        }),
        
        setBalance: (balance) => set((state) => ({
          wallet: { ...state.wallet, balance },
        })),
        
        setChainId: (chainId) => set((state) => ({
          wallet: { ...state.wallet, chainId },
        })),
        
        setConnecting: (connecting) => set((state) => ({
          wallet: { ...state.wallet, isConnecting: connecting },
        })),

        // Profile Actions
        setProfile: (profile) => set({ profile, isLoadingProfile: false }),
        
        updateProfile: (updates) => set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates } : null,
        })),
        
        setLoadingProfile: (loading) => set({ isLoadingProfile: loading }),

        // Stats Actions
        setStats: (stats) => set({ stats }),
        
        updateStats: (updates) => set((state) => ({
          stats: state.stats ? { ...state.stats, ...updates } : null,
        })),

        // Preferences Actions
        setPreference: (key, value) => set((state) => ({
          preferences: { ...state.preferences, [key]: value },
        })),
        
        setNotificationPreference: (key, value) => set((state) => ({
          preferences: {
            ...state.preferences,
            notifications: { ...state.preferences.notifications, [key]: value },
          },
        })),
        
        setPrivacyPreference: (key, value) => set((state) => ({
          preferences: {
            ...state.preferences,
            privacy: { ...state.preferences.privacy, [key]: value },
          },
        })),
        
        resetPreferences: () => set({ preferences: defaultPreferences }),

        // Auth Actions
        setAuthToken: (token) => set({ authToken: token }),
        
        logout: () => {
          get().disconnect()
        },

        // Activity Actions
        updateLastActivity: () => set({ lastActivity: Date.now() }),

        // Reset
        reset: () => set(initialState),
      }),
      {
        name: 'petopia-user',
        partialize: (state) => ({
          preferences: state.preferences,
          // Don't persist sensitive wallet data
        }),
      }
    ),
    { name: 'UserStore' }
  )
)

// ============================================
// SELECTORS
// ============================================

export const selectWallet = (state: UserState) => state.wallet
export const selectProfile = (state: UserState) => state.profile
export const selectStats = (state: UserState) => state.stats
export const selectPreferences = (state: UserState) => state.preferences
export const selectIsAuthenticated = (state: UserState) => state.isAuthenticated

// Computed selectors
export const selectIsConnected = (state: UserState) => state.wallet.isConnected
export const selectIsConnecting = (state: UserState) => state.wallet.isConnecting
export const selectAddress = (state: UserState) => state.wallet.address
export const selectChainId = (state: UserState) => state.wallet.chainId
export const selectBalance = (state: UserState) => state.wallet.balance

export const selectShortAddress = (state: UserState) => {
  const { address } = state.wallet
  if (!address) return null
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

export const selectDisplayName = (state: UserState) => {
  if (state.profile?.displayName) return state.profile.displayName
  return selectShortAddress(state)
}

export const selectIsVerified = (state: UserState) => state.profile?.verified ?? false

export const selectCurrency = (state: UserState) => state.preferences.currency

export const selectLanguage = (state: UserState) => state.preferences.language

export const selectNotificationSettings = (state: UserState) => state.preferences.notifications

export const selectPrivacySettings = (state: UserState) => state.preferences.privacy

// Check if user has completed profile
export const selectHasProfile = (state: UserState) => {
  const { profile } = state
  return profile !== null && (profile.displayName || profile.bio || profile.avatar)
}

// Check if user is on correct chain (mainnet = 1)
export const selectIsCorrectChain = (state: UserState) => {
  const { chainId } = state.wallet
  return chainId === 1 || chainId === 11155111 // Mainnet or Sepolia
}
