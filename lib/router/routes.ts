/**
 * Route Configuration for Petopia
 * 
 * This file defines all application routes for:
 * - Navigation components
 * - Prefetching
 * - Breadcrumbs
 * - Access control
 */

export interface RouteConfig {
  path: string
  name: string
  icon?: string
  requiresAuth?: boolean
  children?: RouteConfig[]
}

/**
 * Main Application Routes
 */
export const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    icon: 'Home',
  },
  {
    path: '/market',
    name: 'Marketplace',
    icon: 'ShoppingBag',
    children: [
      {
        path: '/market/[id]',
        name: 'NFT Detail',
      },
      {
        path: '/market/collection/[slug]',
        name: 'Collection',
      },
    ],
  },
  {
    path: '/create',
    name: 'Create',
    icon: 'Plus',
    requiresAuth: true,
  },
  {
    path: '/profile',
    name: 'Profile',
    icon: 'User',
    requiresAuth: true,
  },
  {
    path: '/safes',
    name: 'Safes',
    icon: 'Shield',
    requiresAuth: true,
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'Settings',
    requiresAuth: true,
  },
  {
    path: '/shelter',
    name: 'Shelter',
    icon: 'Heart',
  },
]

/**
 * Routes to prefetch on app load
 */
export const prefetchRoutes = [
  '/market',
  '/profile',
  '/create',
  '/shelter',
]

/**
 * Get route config by path
 */
export function getRouteByPath(path: string): RouteConfig | undefined {
  const findRoute = (routes: RouteConfig[], targetPath: string): RouteConfig | undefined => {
    for (const route of routes) {
      if (route.path === targetPath) return route
      if (route.children) {
        const found = findRoute(route.children, targetPath)
        if (found) return found
      }
    }
    return undefined
  }
  return findRoute(routes, path)
}

/**
 * Get breadcrumb trail for a path
 */
export function getBreadcrumbs(path: string): { name: string; path: string }[] {
  const segments = path.split('/').filter(Boolean)
  const breadcrumbs: { name: string; path: string }[] = [
    { name: 'Home', path: '/' },
  ]

  let currentPath = ''
  for (const segment of segments) {
    currentPath += `/${segment}`
    const route = getRouteByPath(currentPath)
    if (route) {
      breadcrumbs.push({ name: route.name, path: currentPath })
    } else {
      // Handle dynamic segments
      breadcrumbs.push({ 
        name: segment.charAt(0).toUpperCase() + segment.slice(1), 
        path: currentPath 
      })
    }
  }

  return breadcrumbs
}

/**
 * Check if route requires authentication
 */
export function routeRequiresAuth(path: string): boolean {
  const route = getRouteByPath(path)
  return route?.requiresAuth ?? false
}
