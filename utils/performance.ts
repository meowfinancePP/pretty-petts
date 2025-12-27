export const lazyLoadImages = () => {
  if (typeof window === 'undefined' || typeof document === 'undefined') return
  if (!('IntersectionObserver' in window)) return

  const lazyImages = document.querySelectorAll<HTMLImageElement>('img[data-src]')
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        if (img.dataset.src) {
          img.src = img.dataset.src
          img.removeAttribute('data-src')
        }
        observer.unobserve(img)
      }
    })
  })

  lazyImages.forEach(img => observer.observe(img))
}

export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return

  const resources: Array<{ href: string; as: string; type?: string }> = [
    { href: '/css/main.css', as: 'style' },
    { href: '/js/vendor.js', as: 'script' },
    { href: '/fonts/primary.woff2', as: 'font', type: 'font/woff2' },
  ]

  resources.forEach(resource => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = resource.href
    link.as = resource.as
    if (resource.type) link.type = resource.type
    document.head.appendChild(link)
  })
}

export const optimizeAnimations = () => {
  if (typeof document === 'undefined') return
  const animatedElements = document.querySelectorAll<HTMLElement>('[data-animate]')
  animatedElements.forEach(el => {
    el.style.willChange = 'transform, opacity'
  })
}
