// lib/evolution/core/performance-analyzer.ts
/**
 * Анализатор производительности в реальном времени
 * Собирает метрики через Performance API и Web Vitals
 */

export interface PerformanceData {
  navigation: PerformanceNavigationTiming | null
  paint: PaintMetrics
  resources: ResourceTiming[]
  webVitals: WebVitals
  memory: MemoryInfo | null
  fps: number
}

export interface PaintMetrics {
  firstPaint: number
  firstContentfulPaint: number
}

export interface WebVitals {
  lcp: number // Largest Contentful Paint
  fid: number // First Input Delay
  cls: number // Cumulative Layout Shift
  ttfb: number // Time to First Byte
  fcp: number // First Contentful Paint
}

export interface MemoryInfo {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

interface ResourceTiming extends PerformanceEntry {
  initiatorType: string
  nextHopProtocol: string
  workerStart: number
  redirectStart: number
  redirectEnd: number
  fetchStart: number
  domainLookupStart: number
  domainLookupEnd: number
  connectStart: number
  connectEnd: number
  secureConnectionStart: number
  requestStart: number
  responseStart: number
  responseEnd: number
  transferSize: number
  encodedBodySize: number
  decodedBodySize: number
  serverTiming?: PerformanceServerTiming[]
}

export class PerformanceAnalyzer {
  private observers: PerformanceObserver[] = []
  private fpsCounter: number = 0
  private lastFrameTime: number = 0
  private frameCount: number = 0

  /**
   * Инициализирует сбор метрик производительности
   */
  initialize(): void {
    if (typeof window === 'undefined') return

    // Сбор Web Vitals
    this.observeWebVitals()
    
    // Сбор FPS
    this.startFPSCounter()
    
    // Сбор метрик памяти (если доступно)
    this.observeMemory()
  }

  /**
   * Собирает все доступные метрики производительности
   */
  collectMetrics(): PerformanceData {
    const navigation = this.getNavigationTiming()
    const paint = this.getPaintMetrics()
    const resources = this.getResourceTimings()
    const webVitals = this.getWebVitals()
    const memory = this.getMemoryInfo()

    return {
      navigation,
      paint,
      resources,
      webVitals,
      memory,
      fps: this.fpsCounter,
    }
  }

  private getNavigationTiming(): PerformanceNavigationTiming | null {
    if (typeof window === 'undefined' || !window.performance) return null
    
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    return navigation || null
  }

  private getPaintMetrics(): PaintMetrics {
    if (typeof window === 'undefined' || !window.performance) {
      return { firstPaint: 0, firstContentfulPaint: 0 }
    }

    const paintEntries = performance.getEntriesByType('paint')
    const firstPaint = paintEntries.find(e => e.name === 'first-paint')?.startTime || 0
    const firstContentfulPaint = paintEntries.find(e => e.name === 'first-contentful-paint')?.startTime || 0

    return {
      firstPaint,
      firstContentfulPaint,
    }
  }

  private getResourceTimings(): ResourceTiming[] {
    if (typeof window === 'undefined' || !window.performance) return []
    
    return performance.getEntriesByType('resource') as ResourceTiming[]
  }

  private getWebVitals(): WebVitals {
    // В реальной реализации здесь будет использование библиотеки web-vitals
    // Пока возвращаем значения из Performance API
    const navigation = this.getNavigationTiming()
    const paint = this.getPaintMetrics()

    return {
      lcp: 0, // Будет заполнено через observer
      fid: 0, // Будет заполнено через observer
      cls: 0, // Будет заполнено через observer
      ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
      fcp: paint.firstContentfulPaint,
    }
  }

  private getMemoryInfo(): MemoryInfo | null {
    if (typeof window === 'undefined' || !(performance as any).memory) return null

    const memory = (performance as any).memory
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
    }
  }

  private observeWebVitals(): void {
    if (typeof window === 'undefined' || !window.PerformanceObserver) return

    // Observer для LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1] as any
        // Сохраняем LCP в localStorage для последующего анализа
        if (lastEntry?.renderTime) {
          localStorage.setItem('web-vital-lcp', lastEntry.renderTime.toString())
        }
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
      this.observers.push(lcpObserver)
    } catch (e) {
      console.warn('LCP observer not supported', e)
    }

    // Observer для CLS
    try {
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        localStorage.setItem('web-vital-cls', clsValue.toString())
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
      this.observers.push(clsObserver)
    } catch (e) {
      console.warn('CLS observer not supported', e)
    }

    // Observer для FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fid = (entry as PerformanceEventTiming).processingStart - entry.startTime
          localStorage.setItem('web-vital-fid', fid.toString())
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })
      this.observers.push(fidObserver)
    } catch (e) {
      console.warn('FID observer not supported', e)
    }
  }

  private startFPSCounter(): void {
    if (typeof window === 'undefined') return

    let lastTime = performance.now()
    let frameCount = 0
    let fps = 60

    const countFPS = () => {
      frameCount++
      const currentTime = performance.now()
      
      if (currentTime >= lastTime + 1000) {
        fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        this.fpsCounter = fps
        frameCount = 0
        lastTime = currentTime
      }

      requestAnimationFrame(countFPS)
    }

    requestAnimationFrame(countFPS)
  }

  private observeMemory(): void {
    if (typeof window === 'undefined') return

    // Периодически сохраняем информацию о памяти
    setInterval(() => {
      const memory = this.getMemoryInfo()
      if (memory) {
        localStorage.setItem('memory-usage', JSON.stringify(memory))
      }
    }, 5000)
  }

  /**
   * Очищает всех observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect())
    this.observers = []
  }

  /**
   * Получить размер bundle (приблизительно)
   */
  getBundleSize(): number {
    if (typeof window === 'undefined') return 0

    const resources = this.getResourceTimings()
    const jsResources = resources.filter(r => 
      r.name.includes('.js') && r.initiatorType === 'script'
    )

    const totalSize = jsResources.reduce((sum, r) => {
      return sum + (r.transferSize || 0)
    }, 0)

    // Конвертируем в KB
    return Math.round(totalSize / 1024)
  }
}
