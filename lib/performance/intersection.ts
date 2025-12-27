// lib/performance/intersection.ts
/**
 * Intersection Observer utilities for lazy loading and performance optimization
 */

import { useEffect, useRef, useState } from 'react'

// Custom hook for intersection observer
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
): {
  ref: React.RefObject<Element>
  isIntersecting: boolean
  entry: IntersectionObserverEntry | null
} => {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    )

    const currentRef = ref.current
    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return { ref: ref as React.RefObject<Element>, isIntersecting, entry }
}

// Lazy loading component wrapper
export function withLazyLoading<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ComponentType<any>
) {
  const LazyComponent = (props: P) => {
    const { ref, isIntersecting } = useIntersectionObserver({
      threshold: 0.1,
      rootMargin: '50px',
    })

    return {
      Component: isIntersecting ? Component : null,
      ref,
      isIntersecting,
      props,
      fallback
    }
  }

  LazyComponent.displayName = `withLazyLoading(${Component.displayName || Component.name})`

  return LazyComponent
}

// Image lazy loading hook
export const useLazyImage = (src: string, placeholder?: string) => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState(placeholder || '')

  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  })

  useEffect(() => {
    if (isIntersecting && !loaded) {
      const img = new Image()
      img.onload = () => {
        setLoaded(true)
        setCurrentSrc(src)
      }
      img.onerror = () => {
        setError(true)
      }
      img.src = src
    }
  }, [isIntersecting, src, loaded])

  return { ref, loaded, error, src: currentSrc }
}

// Infinite scroll hook
export const useInfiniteScroll = (
  callback: () => void,
  hasNextPage: boolean,
  loading: boolean
) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px',
  })

  useEffect(() => {
    if (isIntersecting && hasNextPage && !loading) {
      callback()
    }
  }, [isIntersecting, hasNextPage, loading, callback])

  return ref
}
