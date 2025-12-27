// lib/performance/hooks.ts
/**
 * Performance optimization hooks for React components
 */

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type DependencyList,
} from 'react'
import { useIntersectionObserver } from './intersection'

// Debounce hook for delaying function calls
export const useDebounce = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>()

  const debouncedCallback = useCallback(
    (...args: T) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      timeoutRef.current = setTimeout(() => callback(...args), delay)
    },
    [callback, delay]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return debouncedCallback
}

// Throttle hook for limiting function call frequency
export const useThrottle = <T extends any[]>(callback: (...args: T) => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>()
  const lastExecRef = useRef<number>(0)

  const throttledCallback = useCallback(
    (...args: T) => {
      const now = Date.now()
      if (now - lastExecRef.current >= delay) {
        callback(...args)
        lastExecRef.current = now
      } else {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(() => {
          callback(...args)
          lastExecRef.current = Date.now()
        }, delay - (now - lastExecRef.current))
      }
    },
    [callback, delay]
  )

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return throttledCallback
}

// Memoization hook for expensive computations
export const useMemoizedValue = <T>(
  factory: () => T,
  deps: DependencyList,
  options?: { maxAge?: number }
): T => {
  const cacheRef = useRef<{ value: T; timestamp: number; signature: string } | null>(null)
  const depsSignature = JSON.stringify(deps, (_key, value) =>
    typeof value === 'function' ? value.toString() : value
  )

  return useMemo(() => {
    const now = Date.now()
    const cache = cacheRef.current
    const isExpired = options?.maxAge ? !cache || now - cache.timestamp > options.maxAge : !cache
    const signatureChanged = cache?.signature !== depsSignature

    if (isExpired || signatureChanged || !cache) {
      const newValue = factory()
      cacheRef.current = { value: newValue, timestamp: now, signature: depsSignature }
      return newValue
    }
    return cache.value
  }, [depsSignature, factory, options?.maxAge])
}

// Lazy loading hook for components
export const useLazyComponent = <T extends ComponentType<any>>(importFn: () => Promise<{ default: T }>) => {
  const [Component, setComponent] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const loadComponent = useCallback(async () => {
    if (Component || loading) return

    setLoading(true)
    setError(null)

    try {
      const importedModule = await importFn()
      setComponent(() => importedModule.default)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [Component, importFn, loading])

  return { Component, loading, error, loadComponent }
}

// Intersection observer hook for lazy loading and performance optimization
export { useIntersectionObserver } from './intersection'

// Virtual scrolling hook for large lists
export const useVirtualScroll = <T>(
  items: T[],
  itemHeight: number,
  containerHeight: number,
  overscan = 5
) => {
  const [scrollTop, setScrollTop] = useState(0)

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan)
  const endIndex = Math.min(
    items.length - 1,
    Math.ceil((scrollTop + containerHeight) / itemHeight) + overscan
  )

  const visibleItems = items.slice(startIndex, endIndex + 1)
  const totalHeight = items.length * itemHeight
  const offsetY = startIndex * itemHeight

  return {
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    onScroll: (event: React.UIEvent<HTMLDivElement>) => {
      setScrollTop(event.currentTarget.scrollTop)
    },
  }
}

// Image preloading hook
export const useImagePreloader = (src: string) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!src) return

    const img = new Image()
    img.onload = () => setLoaded(true)
    img.onerror = () => setError(true)
    img.src = src

    return () => {
      img.onload = null
      img.onerror = null
    }
  }, [src])

  return { loaded, error }
}

// Resource prefetching hook
export const useResourcePrefetch = (resources: string[], priority: 'low' | 'high' = 'low') => {
  const resourcesSignature = useMemo(() => JSON.stringify(resources), [resources])

  useEffect(() => {
    const links: HTMLLinkElement[] = []
    const resourceList: string[] = JSON.parse(resourcesSignature || '[]')

    resourceList.forEach(resource => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.href = resource

      if (resource.endsWith('.js')) {
        link.as = 'script'
      } else if (resource.endsWith('.css')) {
        link.as = 'style'
      } else if (resource.match(/\.(png|jpg|jpeg|gif|webp|svg)$/)) {
        link.as = 'image'
      } else {
        return
      }

      if (priority === 'high') {
        link.setAttribute('importance', 'high')
      }

      document.head.appendChild(link)
      links.push(link)
    })

    return () => {
      links.forEach(link => document.head.removeChild(link))
    }
  }, [priority, resourcesSignature])
}

// Window resize hook with debouncing
export const useWindowSize = (debounceDelay = 100) => {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const handleResize = useDebounce(() => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, debounceDelay)

  useEffect(() => {
    // Set initial size
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return size
}

// Memory usage monitoring hook
export const useMemoryMonitor = () => {
  const [memoryInfo, setMemoryInfo] = useState<{
    usedJSHeapSize: number
    totalJSHeapSize: number
    jsHeapSizeLimit: number
  } | null>(null)

  useEffect(() => {
    const updateMemoryInfo = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory
        setMemoryInfo({
          usedJSHeapSize: memory.usedJSHeapSize,
          totalJSHeapSize: memory.totalJSHeapSize,
          jsHeapSizeLimit: memory.jsHeapSizeLimit,
        })
      }
    }

    updateMemoryInfo()
    const interval = setInterval(updateMemoryInfo, 5000)

    return () => clearInterval(interval)
  }, [])

  return memoryInfo
}

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  const renderCount = useRef(0)
  const lastRenderTime = useRef(Date.now())

  useEffect(() => {
    renderCount.current += 1
    const now = Date.now()
    const timeSinceLastRender = now - lastRenderTime.current
    lastRenderTime.current = now

    if (process.env.NODE_ENV === 'development') {
      console.log(`${componentName} rendered ${renderCount.current} times, ${timeSinceLastRender}ms since last render`)
    }
  })

  return { renderCount: renderCount.current }
}
