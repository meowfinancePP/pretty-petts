import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { 
  MarketFilters, 
  SortBy, 
  ViewMode, 
  WorkspaceWidget, 
  WatchlistItem,
  RarityFilter 
} from './types'

/**
 * Marketplace Store State
 */
interface MarketplaceState {
  // Filters
  filters: MarketFilters
  sortBy: SortBy
  
  // View
  viewMode: ViewMode
  gridColumns: 3 | 4 | 5
  
  // Selection
  selectedNFTs: string[]
  compareMode: boolean
  
  // Workspace widgets
  widgets: WorkspaceWidget[]
  activeWidget: string | null
  
  // Watchlist
  watchlist: WatchlistItem[]
  
  // Search history
  searchHistory: string[]
  
  // Recently viewed
  recentlyViewed: string[]
}

/**
 * Marketplace Store Actions
 */
interface MarketplaceActions {
  // Filters
  setFilter: <K extends keyof MarketFilters>(key: K, value: MarketFilters[K]) => void
  setFilters: (filters: Partial<MarketFilters>) => void
  clearFilters: () => void
  toggleRarityFilter: (rarity: RarityFilter) => void
  setPriceRange: (min: number, max: number) => void
  
  // Sort
  setSortBy: (sort: SortBy) => void
  
  // View
  setViewMode: (mode: ViewMode) => void
  setGridColumns: (columns: 3 | 4 | 5) => void
  
  // Selection
  toggleSelect: (nftId: string) => void
  selectAll: (nftIds: string[]) => void
  clearSelection: () => void
  setCompareMode: (enabled: boolean) => void
  
  // Workspace
  addWidget: (widget: Omit<WorkspaceWidget, 'id'>) => void
  removeWidget: (id: string) => void
  toggleWidgetMinimize: (id: string) => void
  setActiveWidget: (id: string | null) => void
  updateWidgetPosition: (id: string, position: { x: number; y: number }) => void
  updateWidgetSize: (id: string, size: { width: number; height: number }) => void
  restoreAllWidgets: () => void
  
  // Watchlist
  addToWatchlist: (item: Omit<WatchlistItem, 'id' | 'addedAt'>) => void
  removeFromWatchlist: (nftId: string) => void
  setPriceAlert: (nftId: string, price: number | undefined) => void
  isInWatchlist: (nftId: string) => boolean
  
  // Search history
  addToSearchHistory: (query: string) => void
  clearSearchHistory: () => void
  
  // Recently viewed
  addToRecentlyViewed: (nftId: string) => void
  clearRecentlyViewed: () => void
  
  // Reset
  reset: () => void
}

/**
 * Default filters
 */
const defaultFilters: MarketFilters = {
  search: '',
  collection: null,
  rarity: [],
  priceRange: [0, 100],
  traits: {},
  onlyVerified: false,
  onlyBuyNow: false,
}

/**
 * Default widgets
 */
const defaultWidgets: WorkspaceWidget[] = [
  {
    id: 'orderbook',
    type: 'orderbook',
    title: 'Order Book',
    minimized: true,
    position: { x: 0, y: 0 },
    size: { width: 300, height: 400 },
  },
  {
    id: 'chart',
    type: 'chart',
    title: 'Price Chart',
    minimized: true,
    position: { x: 320, y: 0 },
    size: { width: 400, height: 300 },
  },
  {
    id: 'whale',
    type: 'whale',
    title: 'Whale Tracker',
    minimized: true,
    position: { x: 0, y: 420 },
    size: { width: 300, height: 300 },
  },
]

/**
 * Initial state
 */
const initialState: MarketplaceState = {
  filters: defaultFilters,
  sortBy: 'recent',
  viewMode: 'grid',
  gridColumns: 4,
  selectedNFTs: [],
  compareMode: false,
  widgets: defaultWidgets,
  activeWidget: null,
  watchlist: [],
  searchHistory: [],
  recentlyViewed: [],
}

/**
 * Marketplace Store
 * Manages marketplace state: filters, workspace, watchlist
 */
export const useMarketplaceStore = create<MarketplaceState & MarketplaceActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Filter Actions
        setFilter: (key, value) => set((state) => ({
          filters: { ...state.filters, [key]: value },
        })),
        
        setFilters: (filters) => set((state) => ({
          filters: { ...state.filters, ...filters },
        })),
        
        clearFilters: () => set({ filters: defaultFilters }),
        
        toggleRarityFilter: (rarity) => set((state) => {
          const current = state.filters.rarity
          const newRarity = current.includes(rarity)
            ? current.filter((r) => r !== rarity)
            : [...current, rarity]
          return { filters: { ...state.filters, rarity: newRarity } }
        }),
        
        setPriceRange: (min, max) => set((state) => ({
          filters: { ...state.filters, priceRange: [min, max] },
        })),

        // Sort Actions
        setSortBy: (sort) => set({ sortBy: sort }),

        // View Actions
        setViewMode: (mode) => set({ viewMode: mode }),
        setGridColumns: (columns) => set({ gridColumns: columns }),

        // Selection Actions
        toggleSelect: (nftId) => set((state) => {
          const isSelected = state.selectedNFTs.includes(nftId)
          return {
            selectedNFTs: isSelected
              ? state.selectedNFTs.filter((id) => id !== nftId)
              : [...state.selectedNFTs, nftId],
          }
        }),
        
        selectAll: (nftIds) => set({ selectedNFTs: nftIds }),
        
        clearSelection: () => set({ selectedNFTs: [], compareMode: false }),
        
        setCompareMode: (enabled) => set({ compareMode: enabled }),

        // Workspace Actions
        addWidget: (widget) => set((state) => ({
          widgets: [
            ...state.widgets,
            {
              ...widget,
              id: `widget-${Date.now()}`,
            },
          ],
        })),
        
        removeWidget: (id) => set((state) => ({
          widgets: state.widgets.filter((w) => w.id !== id),
          activeWidget: state.activeWidget === id ? null : state.activeWidget,
        })),
        
        toggleWidgetMinimize: (id) => set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, minimized: !w.minimized } : w
          ),
        })),
        
        setActiveWidget: (id) => set({ activeWidget: id }),
        
        updateWidgetPosition: (id, position) => set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, position } : w
          ),
        })),
        
        updateWidgetSize: (id, size) => set((state) => ({
          widgets: state.widgets.map((w) =>
            w.id === id ? { ...w, size } : w
          ),
        })),
        
        restoreAllWidgets: () => set((state) => ({
          widgets: state.widgets.map((w) => ({ ...w, minimized: false })),
        })),

        // Watchlist Actions
        addToWatchlist: (item) => set((state) => {
          if (state.watchlist.some((w) => w.nftId === item.nftId)) {
            return state // Already in watchlist
          }
          return {
            watchlist: [
              ...state.watchlist,
              {
                ...item,
                id: `watch-${Date.now()}`,
                addedAt: Date.now(),
              },
            ],
          }
        }),
        
        removeFromWatchlist: (nftId) => set((state) => ({
          watchlist: state.watchlist.filter((w) => w.nftId !== nftId),
        })),
        
        setPriceAlert: (nftId, price) => set((state) => ({
          watchlist: state.watchlist.map((w) =>
            w.nftId === nftId ? { ...w, priceAlert: price } : w
          ),
        })),
        
        isInWatchlist: (nftId) => get().watchlist.some((w) => w.nftId === nftId),

        // Search History Actions
        addToSearchHistory: (query) => set((state) => {
          if (!query.trim()) return state
          const history = [query, ...state.searchHistory.filter((q) => q !== query)]
          return { searchHistory: history.slice(0, 10) } // Keep max 10
        }),
        
        clearSearchHistory: () => set({ searchHistory: [] }),

        // Recently Viewed Actions
        addToRecentlyViewed: (nftId) => set((state) => {
          const recent = [nftId, ...state.recentlyViewed.filter((id) => id !== nftId)]
          return { recentlyViewed: recent.slice(0, 20) } // Keep max 20
        }),
        
        clearRecentlyViewed: () => set({ recentlyViewed: [] }),

        // Reset
        reset: () => set(initialState),
      }),
      {
        name: 'petopia-marketplace',
        partialize: (state) => ({
          viewMode: state.viewMode,
          gridColumns: state.gridColumns,
          sortBy: state.sortBy,
          watchlist: state.watchlist,
          searchHistory: state.searchHistory,
          recentlyViewed: state.recentlyViewed,
          widgets: state.widgets,
        }),
      }
    ),
    { name: 'MarketplaceStore' }
  )
)

// ============================================
// SELECTORS
// ============================================

export const selectFilters = (state: MarketplaceState) => state.filters
export const selectSortBy = (state: MarketplaceState) => state.sortBy
export const selectViewMode = (state: MarketplaceState) => state.viewMode
export const selectSelectedNFTs = (state: MarketplaceState) => state.selectedNFTs
export const selectWatchlist = (state: MarketplaceState) => state.watchlist
export const selectWidgets = (state: MarketplaceState) => state.widgets
export const selectSearchHistory = (state: MarketplaceState) => state.searchHistory

// Computed selectors
export const selectHasActiveFilters = (state: MarketplaceState) => {
  const { filters } = state
  return (
    filters.search !== '' ||
    filters.collection !== null ||
    filters.rarity.length > 0 ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 100 ||
    Object.keys(filters.traits).length > 0 ||
    filters.onlyVerified ||
    filters.onlyBuyNow
  )
}

export const selectActiveFilterCount = (state: MarketplaceState) => {
  const { filters } = state
  let count = 0
  if (filters.search) count++
  if (filters.collection) count++
  if (filters.rarity.length > 0) count++
  if (filters.priceRange[0] !== 0 || filters.priceRange[1] !== 100) count++
  if (Object.keys(filters.traits).length > 0) count++
  if (filters.onlyVerified) count++
  if (filters.onlyBuyNow) count++
  return count
}

export const selectSelectionCount = (state: MarketplaceState) => state.selectedNFTs.length

export const selectWatchlistCount = (state: MarketplaceState) => state.watchlist.length

export const selectMinimizedWidgets = (state: MarketplaceState) => 
  state.widgets.filter((w) => w.minimized)

export const selectActiveWidgets = (state: MarketplaceState) => 
  state.widgets.filter((w) => !w.minimized)
