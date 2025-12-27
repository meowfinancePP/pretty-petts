/**
 * Zustand Store for Modular Workspace State
 * Manages widget docking, positioning, and state persistence
 */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface WidgetState {
  id: string
  isDocked: boolean
  position: { x: number; y: number }
  size: { width: number; height: number }
  order: number
}

interface WorkspaceState {
  widgets: Record<string, WidgetState>
  dockWidget: (id: string) => void
  undockWidget: (id: string) => void
  updateWidgetPosition: (id: string, position: { x: number; y: number }) => void
  updateWidgetSize: (id: string, size: { width: number; height: number }) => void
  setWidgetOrder: (id: string, order: number) => void
  initializeWidget: (id: string, initialState?: Partial<WidgetState>) => void
  resetWorkspace: () => void
}

const defaultWidgetState: Omit<WidgetState, 'id'> = {
  isDocked: false,
  position: { x: 0, y: 0 },
  size: { width: 0, height: 0 },
  order: 0,
}

export const useWorkspaceStore = create<WorkspaceState>()(
  persist(
    (set, get) => ({
      widgets: {},

      dockWidget: (id: string) => {
        set((state) => ({
          widgets: {
            ...state.widgets,
            [id]: {
              ...state.widgets[id],
              isDocked: true,
            },
          },
        }))
      },

      undockWidget: (id: string) => {
        set((state) => ({
          widgets: {
            ...state.widgets,
            [id]: {
              ...state.widgets[id],
              isDocked: false,
            },
          },
        }))
      },

      updateWidgetPosition: (id: string, position: { x: number; y: number }) => {
        set((state) => ({
          widgets: {
            ...state.widgets,
            [id]: {
              ...state.widgets[id],
              position,
            },
          },
        }))
      },

      updateWidgetSize: (id: string, size: { width: number; height: number }) => {
        set((state) => ({
          widgets: {
            ...state.widgets,
            [id]: {
              ...state.widgets[id],
              size,
            },
          },
        }))
      },

      setWidgetOrder: (id: string, order: number) => {
        set((state) => ({
          widgets: {
            ...state.widgets,
            [id]: {
              ...state.widgets[id],
              order,
            },
          },
        }))
      },

      initializeWidget: (id: string, initialState?: Partial<WidgetState>) => {
        const state = get()
        if (!state.widgets[id]) {
          set((state) => ({
            widgets: {
              ...state.widgets,
              [id]: {
                ...defaultWidgetState,
                id,
                ...initialState,
              },
            },
          }))
        }
      },

      resetWorkspace: () => {
        set({ widgets: {} })
      },
    }),
    {
      name: 'workspace-storage',
      partialize: (state) => ({ widgets: state.widgets }),
    }
  )
)
