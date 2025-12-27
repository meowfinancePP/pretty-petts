import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'
import type { Theme, SidebarView, Notification, UIPreferences } from './types'

/**
 * UI Store State
 */
interface UIState {
  // Sidebar
  sidebarOpen: boolean
  sidebarView: SidebarView
  
  // Theme
  theme: Theme
  
  // Modals
  activeModal: string | null
  modalProps: Record<string, unknown>
  modalStack: string[]
  
  // Notifications
  notifications: Notification[]
  unreadCount: number
  
  // Preferences
  preferences: UIPreferences
  
  // Loading states
  globalLoading: boolean
  loadingMessage: string | null
}

/**
 * UI Store Actions
 */
interface UIActions {
  // Sidebar
  toggleSidebar: () => void
  setSidebarOpen: (open: boolean) => void
  setSidebarView: (view: SidebarView) => void
  
  // Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  
  // Modals
  openModal: (modal: string, props?: Record<string, unknown>) => void
  closeModal: () => void
  closeAllModals: () => void
  
  // Notifications
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void
  markAsRead: (id: string) => void
  markAllAsRead: () => void
  removeNotification: (id: string) => void
  clearNotifications: () => void
  
  // Preferences
  setPreference: <K extends keyof UIPreferences>(key: K, value: UIPreferences[K]) => void
  resetPreferences: () => void
  
  // Loading
  setGlobalLoading: (loading: boolean, message?: string) => void
  
  // Reset
  reset: () => void
}

/**
 * Default preferences
 */
const defaultPreferences: UIPreferences = {
  reducedMotion: false,
  soundEnabled: true,
  compactMode: false,
  showTips: true,
}

/**
 * Initial state
 */
const initialState: UIState = {
  sidebarOpen: false,
  sidebarView: 'navigation',
  theme: 'dark',
  activeModal: null,
  modalProps: {},
  modalStack: [],
  notifications: [],
  unreadCount: 0,
  preferences: defaultPreferences,
  globalLoading: false,
  loadingMessage: null,
}

/**
 * UI Store
 * Manages UI state: sidebar, theme, modals, notifications, preferences
 */
export const useUIStore = create<UIState & UIActions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Sidebar Actions
        toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
        
        setSidebarOpen: (open) => set({ sidebarOpen: open }),
        
        setSidebarView: (view) => set({ sidebarView: view, sidebarOpen: true }),

        // Theme Actions
        setTheme: (theme) => {
          set({ theme })
          // Apply theme to document
          if (typeof document !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme)
            if (theme === 'dark') {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          }
        },
        
        toggleTheme: () => {
          const { theme, setTheme } = get()
          setTheme(theme === 'dark' ? 'light' : 'dark')
        },

        // Modal Actions
        openModal: (modal, props = {}) => set((state) => ({
          activeModal: modal,
          modalProps: props,
          modalStack: [...state.modalStack, modal],
        })),
        
        closeModal: () => set((state) => {
          const newStack = state.modalStack.slice(0, -1)
          return {
            activeModal: newStack[newStack.length - 1] || null,
            modalProps: {},
            modalStack: newStack,
          }
        }),
        
        closeAllModals: () => set({
          activeModal: null,
          modalProps: {},
          modalStack: [],
        }),

        // Notification Actions
        addNotification: (notification) => set((state) => {
          const newNotification: Notification = {
            ...notification,
            id: `notif-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
            timestamp: Date.now(),
            read: false,
          }
          return {
            notifications: [newNotification, ...state.notifications].slice(0, 50), // Keep max 50
            unreadCount: state.unreadCount + 1,
          }
        }),
        
        markAsRead: (id) => set((state) => {
          const notifications = state.notifications.map((n) =>
            n.id === id ? { ...n, read: true } : n
          )
          const unreadCount = notifications.filter((n) => !n.read).length
          return { notifications, unreadCount }
        }),
        
        markAllAsRead: () => set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, read: true })),
          unreadCount: 0,
        })),
        
        removeNotification: (id) => set((state) => {
          const notifications = state.notifications.filter((n) => n.id !== id)
          const unreadCount = notifications.filter((n) => !n.read).length
          return { notifications, unreadCount }
        }),
        
        clearNotifications: () => set({ notifications: [], unreadCount: 0 }),

        // Preferences Actions
        setPreference: (key, value) => set((state) => ({
          preferences: { ...state.preferences, [key]: value },
        })),
        
        resetPreferences: () => set({ preferences: defaultPreferences }),

        // Loading Actions
        setGlobalLoading: (loading, message) => set({
          globalLoading: loading,
          loadingMessage: message ?? null,
        }),

        // Reset
        reset: () => set(initialState),
      }),
      {
        name: 'petopia-ui',
        partialize: (state) => ({
          theme: state.theme,
          preferences: state.preferences,
          sidebarView: state.sidebarView,
        }),
      }
    ),
    { name: 'UIStore' }
  )
)

// ============================================
// SELECTORS (for optimized re-renders)
// ============================================

export const selectTheme = (state: UIState) => state.theme
export const selectSidebarOpen = (state: UIState) => state.sidebarOpen
export const selectActiveModal = (state: UIState) => state.activeModal
export const selectUnreadCount = (state: UIState) => state.unreadCount
export const selectPreferences = (state: UIState) => state.preferences
export const selectGlobalLoading = (state: UIState) => state.globalLoading

// Computed selectors
export const selectIsDarkMode = (state: UIState) => state.theme === 'dark'
export const selectHasUnread = (state: UIState) => state.unreadCount > 0
export const selectRecentNotifications = (state: UIState) => 
  state.notifications.slice(0, 5)
