// lib/performance/utils.ts
/**
 * Performance optimization utilities
 */

import { memo, useCallback, useMemo, useRef } from 'react'

// Memoization utilities
export const memoize = <T extends (...args: any[]) => any>(
  fn: T,
  getKey?: (...args: Parameters<T>) => string
): T => {
  const cache = new Map<string, ReturnType<T>>()

  return ((...args: Parameters<T>) => {
    const key = getKey ? getKey(...args) : JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)

    // Limit cache size to prevent memory leaks
    if (cache.size > 1000) {
      const firstKey = cache.keys().next().value
      if (firstKey !== undefined) {
        cache.delete(firstKey)
      }
    }

    return result
  }) as T
}

// Deep comparison for objects
export const deepEqual = (a: any, b: any): boolean => {
  if (a === b) return true

  if (a == null || b == null) return false

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false
    }
    return true
  }

  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a)
    const keysB = Object.keys(b)

    if (keysA.length !== keysB.length) return false

    for (const key of keysA) {
      if (!keysB.includes(key)) return false
      if (!deepEqual(a[key], b[key])) return false
    }

    return true
  }

  return false
}

// Stable callback reference
export const useStableCallback = <T extends (...args: any[]) => any>(
  callback: T
): T => {
  const callbackRef = useRef<T>(callback)
  callbackRef.current = callback

  return useCallback((...args: Parameters<T>) => {
    return callbackRef.current(...args)
  }, []) as T
}

// Stable value reference
export const useStableValue = <T>(value: T): T => {
  const valueRef = useRef<T>(value)
  valueRef.current = value
  return valueRef.current
}

// Component memoization with deep comparison
export const memoDeep = <P extends object>(
  Component: React.ComponentType<P>,
  compare?: (prevProps: P, nextProps: P) => boolean
) => {
  return memo(Component, (prevProps, nextProps) => {
    if (compare) {
      return compare(prevProps, nextProps)
    }

    // Default deep comparison
    return deepEqual(prevProps, nextProps)
  })
}

// Bundle splitting utilities
export const lazyLoad = <T>(
  importFn: () => Promise<T>,
  fallback?: React.ComponentType
) => {
  return new Promise<T>((resolve) => {
    importFn().then(resolve)
  })
}

// Image optimization utilities
export const getOptimizedImageUrl = (
  src: string,
  width: number,
  height?: number,
  quality = 75
): string => {
  // For Next.js Image component optimization
  const params = new URLSearchParams({
    url: encodeURIComponent(src),
    w: width.toString(),
    q: quality.toString(),
  })

  if (height) {
    params.set('h', height.toString())
  }

  return `/_next/image?url=${params.toString()}`
}

// Web vitals utilities
export const reportWebVitals = (metric: any) => {
  // Send to analytics service
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      event_label: metric.id,
      value: Math.round(metric.value),
      non_interaction: true,
    })
  }
}

// Resource hints for performance
export const addResourceHint = (
  href: string,
  rel: 'preload' | 'prefetch' | 'preconnect' | 'dns-prefetch',
  as?: 'script' | 'style' | 'image' | 'font' | 'document'
) => {
  if (typeof document === 'undefined') return

  const link = document.createElement('link')
  link.rel = rel
  link.href = href

  if (as) {
    link.as = as
  }

  document.head.appendChild(link)
}

// Critical CSS inlining utility
export const inlineCriticalCSS = (css: string) => {
  if (typeof document === 'undefined') return

  const style = document.createElement('style')
  style.textContent = css
  document.head.appendChild(style)
}

// Service worker utilities
export const registerServiceWorker = async (scriptURL: string) => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register(scriptURL)
      console.log('Service Worker registered:', registration)
      return registration
    } catch (error) {
      console.error('Service Worker registration failed:', error)
    }
  }
}

// Memory usage monitoring
export const getMemoryUsage = () => {
  if (typeof performance === 'undefined' || !(performance as any).memory) {
    return null
  }

  const memory = (performance as any).memory
  return {
    used: Math.round(memory.usedJSHeapSize / 1024 / 1024), // MB
    total: Math.round(memory.totalJSHeapSize / 1024 / 1024), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024), // MB
    usagePercent: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100),
  }
}

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now()
  fn()
  const end = performance.now()
  console.log(`${name} took ${end - start} milliseconds`)
}

// Debounce utility for performance
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  immediate = false
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null

  return (...args: Parameters<T>) => {
    const later = () => {
      timeout = null
      if (!immediate) func(...args)
    }

    const callNow = immediate && !timeout

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)

    if (callNow) {
      func(...args)
    }
  }
}

// Throttle utility for performance
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}
