/**
 * Zustand Store Exports
 * 
 * Central export for all stores and selectors
 */

// Stores
export { useUIStore } from './ui'
export { useMarketplaceStore } from './marketplace'
export { useUserStore } from './user'

// Types
export type {
  Theme,
  SidebarView,
  Notification,
  UIPreferences,
  MarketFilters,
  SortBy,
  ViewMode,
  RarityFilter,
  WorkspaceWidget,
  WatchlistItem,
  WalletInfo,
  UserProfile,
  UserStats,
  UserPreferences,
} from './types'

// UI Selectors
export {
  selectTheme,
  selectSidebarOpen,
  selectActiveModal,
  selectUnreadCount,
  selectPreferences as selectUIPreferences,
  selectGlobalLoading,
  selectIsDarkMode,
  selectHasUnread,
  selectRecentNotifications,
} from './ui'

// Marketplace Selectors
export {
  selectFilters,
  selectSortBy,
  selectViewMode,
  selectSelectedNFTs,
  selectWatchlist,
  selectWidgets,
  selectSearchHistory,
  selectHasActiveFilters,
  selectActiveFilterCount,
  selectSelectionCount,
  selectWatchlistCount,
  selectMinimizedWidgets,
  selectActiveWidgets,
} from './marketplace'

// User Selectors
export {
  selectWallet,
  selectProfile,
  selectStats,
  selectPreferences as selectUserPreferences,
  selectIsAuthenticated,
  selectIsConnected,
  selectIsConnecting,
  selectAddress,
  selectChainId,
  selectBalance,
  selectShortAddress,
  selectDisplayName,
  selectIsVerified,
  selectCurrency,
  selectLanguage,
  selectNotificationSettings,
  selectPrivacySettings,
  selectHasProfile,
  selectIsCorrectChain,
} from './user'

// ============================================
// COMBINED HOOKS (for convenience)
// ============================================

import { useUIStore } from './ui'
import { useMarketplaceStore } from './marketplace'
import { useUserStore } from './user'

/**
 * Hook to get all stores at once
 * Use sparingly - prefer individual stores for better performance
 */
export function useStores() {
  const ui = useUIStore()
  const marketplace = useMarketplaceStore()
  const user = useUserStore()
  
  return { ui, marketplace, user }
}

/**
 * Hook to reset all stores
 */
export function useResetAllStores() {
  const resetUI = useUIStore((state) => state.reset)
  const resetMarketplace = useMarketplaceStore((state) => state.reset)
  const resetUser = useUserStore((state) => state.reset)
  
  return () => {
    resetUI()
    resetMarketplace()
    resetUser()
  }
}

/**
 * Hook for common app state
 */
export function useAppState() {
  const theme = useUIStore((state) => state.theme)
  const isConnected = useUserStore((state) => state.wallet.isConnected)
  const address = useUserStore((state) => state.wallet.address)
  const globalLoading = useUIStore((state) => state.globalLoading)
  
  return {
    theme,
    isConnected,
    address,
    globalLoading,
  }
}

/**
 * Hook for marketplace filters with computed values
 */
export function useMarketFilters() {
  const filters = useMarketplaceStore((state) => state.filters)
  const sortBy = useMarketplaceStore((state) => state.sortBy)
  const setFilter = useMarketplaceStore((state) => state.setFilter)
  const clearFilters = useMarketplaceStore((state) => state.clearFilters)
  const setSortBy = useMarketplaceStore((state) => state.setSortBy)
  
  const hasActiveFilters = useMarketplaceStore((state) => {
    const { filters } = state
    return (
      filters.search !== '' ||
      filters.collection !== null ||
      filters.rarity.length > 0 ||
      filters.priceRange[0] !== 0 ||
      filters.priceRange[1] !== 100 ||
      filters.onlyVerified ||
      filters.onlyBuyNow
    )
  })
  
  return {
    filters,
    sortBy,
    hasActiveFilters,
    setFilter,
    clearFilters,
    setSortBy,
  }
}

/**
 * Hook for wallet connection state
 */
export function useWalletConnection() {
  const wallet = useUserStore((state) => state.wallet)
  const connect = useUserStore((state) => state.connect)
  const disconnect = useUserStore((state) => state.disconnect)
  const setConnecting = useUserStore((state) => state.setConnecting)
  
  const shortAddress = wallet.address
    ? `${wallet.address.slice(0, 6)}...${wallet.address.slice(-4)}`
    : null
  
  return {
    ...wallet,
    shortAddress,
    connect,
    disconnect,
    setConnecting,
  }
}
