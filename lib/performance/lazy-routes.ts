/**
 * Lazy Route Loading Strategy
 * Dynamic imports for code splitting optimization
 * 
 * This file documents the lazy loading strategy.
 * Actual dynamic imports should be used directly in component files.
 */

/**
 * Components marked for lazy loading:
 * 
 * 1. Pet3DGenerator - Three.js components (~500kb)
 *    - Use: dynamic(() => import('@/app/components/ai/Pet3DGenerator'), { ssr: false })
 * 
 * 2. Preview3D - Three.js preview (~300kb)
 *    - Use: dynamic(() => import('@/app/components/ai/Preview3D'), { ssr: false })
 * 
 * 3. Web3Provider - Wallet connectors (~200kb)
 *    - Use: dynamic(() => import('@/app/components/shared/Web3Provider').then(m => ({ default: m.Web3Provider })), { ssr: false })
 * 
 * 4. PriceChart - Charting libraries (~150kb)
 *    - Use: dynamic(() => import('@/app/components/workspace/PriceChart'))
 * 
 * 5. Admin components - Only for admin routes
 *    - TransactionMonitor, AuditLog
 * 
 * 6. EvolutionDashboard - Complex calculations
 *    - Use: dynamic(() => import('@/app/components/evolution/EvolutionDashboard'))
 */

/**
 * Preload critical routes on idle
 */
export function preloadCriticalRoutes() {
  if (typeof window === 'undefined') return

  // Preload on requestIdleCallback
  const preload = () => {
    // Preload marketplace components (high traffic)
    import('@/app/market/page')
    
    // Preload profile page
    import('@/app/profile/page')
    
    // Preload create page
    import('@/app/create/page')
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => preload())
  } else {
    setTimeout(preload, 1)
  }
}

/**
 * Route-based code splitting manifest
 */
export const ROUTE_CHUNKS = {
  // Critical routes (loaded immediately)
  critical: [
    '/',
    '/market',
  ],
  
  // High priority (preload on idle)
  high: [
    '/profile',
    '/create',
    '/settings',
  ],
  
  // Medium priority (load on navigation intent)
  medium: [
    '/admin',
    '/dashboard',
    '/evolution',
  ],
  
  // Low priority (load on demand)
  low: [
    '/games',
    '/impact',
    '/shelter',
  ],
} as const

/**
 * Get chunk priority for a route
 */
export function getRoutePriority(path: string): keyof typeof ROUTE_CHUNKS {
  if (ROUTE_CHUNKS.critical.includes(path as typeof ROUTE_CHUNKS.critical[number])) {
    return 'critical'
  }
  if (ROUTE_CHUNKS.high.includes(path as typeof ROUTE_CHUNKS.high[number])) {
    return 'high'
  }
  if (ROUTE_CHUNKS.medium.includes(path as typeof ROUTE_CHUNKS.medium[number])) {
    return 'medium'
  }
  return 'low'
}
