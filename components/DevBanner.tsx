'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Code, Zap, Bug, GitBranch } from 'lucide-react'

/**
 * DevBanner - Development mode indicator
 * Shows environment info and quick actions in development
 */
export default function DevBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    // Only show in development
    setIsVisible(process.env.NODE_ENV === 'development')
  }, [])

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        className="fixed top-0 left-0 right-0 z-[100]"
      >
        {/* Collapsed Banner */}
        <div
          className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-amber-500/90 to-orange-500/90 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white">DEV MODE</span>
            </div>
            
            <div className="hidden sm:flex items-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1">
                <GitBranch className="w-3 h-3" />
                {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || 'local'}
              </span>
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Next.js 14
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-3 py-1 text-xs font-medium text-white/90 hover:text-white bg-white/10 rounded-full transition-colors"
            >
              {isExpanded ? 'Less' : 'More'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsVisible(false)}
              className="p-1 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Expanded Panel */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden bg-[#1a1a1d]/95 backdrop-blur-md border-b border-white/10"
            >
              <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Quick Actions */}
                <DevAction
                  icon={<Bug className="w-4 h-4" />}
                  label="React DevTools"
                  onClick={() => window.open('https://react.dev/learn/react-developer-tools')}
                />
                <DevAction
                  icon={<Zap className="w-4 h-4" />}
                  label="Clear Storage"
                  onClick={() => {
                    localStorage.clear()
                    sessionStorage.clear()
                    window.location.reload()
                  }}
                />
                <DevAction
                  icon={<Code className="w-4 h-4" />}
                  label="View Source"
                  onClick={() => window.open('https://github.com/meowfinancePP/pretty-petts')}
                />
                <DevAction
                  icon={<GitBranch className="w-4 h-4" />}
                  label="API Docs"
                  onClick={() => window.open('/api-docs')}
                />
              </div>

              {/* Environment Info */}
              <div className="px-4 pb-4">
                <div className="p-3 rounded-lg bg-white/5 text-xs font-mono text-slate-400">
                  <div className="grid grid-cols-2 gap-2">
                    <span>NODE_ENV: {process.env.NODE_ENV}</span>
                    <span>Build: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  )
}

function DevAction({ 
  icon, 
  label, 
  onClick 
}: { 
  icon: React.ReactNode
  label: string
  onClick: () => void 
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-2 p-3 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors text-sm"
    >
      {icon}
      {label}
    </motion.button>
  )
}
