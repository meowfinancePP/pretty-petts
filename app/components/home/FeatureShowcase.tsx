'use client'

/**
 * FEATURE SHOWCASE
 * Interactive demonstration of PrettyPetts' key features
 */

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  TrendingUp, Sparkles, BarChart3, Users, Play, ArrowRight,
  Search, Grid3x3, Zap, Upload, Shield, Star
} from 'lucide-react'
import { cn } from '@/app/lib/utils'

/* ============================================
   DEMO NFT DATA
   ============================================ */

const demoNFTs = [
  { id: 1, name: 'Golden Retriever #42', price: '0.5', emoji: '🐕' },
  { id: 2, name: 'Cosmic Cat #17', price: '0.8', emoji: '🐱' },
  { id: 3, name: 'Mystic Fox #99', price: '1.2', emoji: '🦊' },
  { id: 4, name: 'Cyber Panda #23', price: '0.6', emoji: '🐼' },
  { id: 5, name: 'Neon Wolf #88', price: '0.9', emoji: '🐺' },
  { id: 6, name: 'Galaxy Rabbit #7', price: '1.5', emoji: '🐰' },
]

/* ============================================
   MARKETPLACE DEMO
   ============================================ */

const MarketplaceDemo: React.FC = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="marketplace-demo">
      <div className="demo-controls">
        <div className="search-demo">
          <Search size={16} />
          <input 
            type="text"
            placeholder="Try searching 'Golden Retriever'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="view-toggle-demo">
          <button 
            className={cn('toggle-btn', viewMode === 'grid' && 'active')}
            onClick={() => setViewMode('grid')}
          >
            <Grid3x3 size={16} />
          </button>
          <button 
            className={cn('toggle-btn', viewMode === 'pro' && 'active')}
            onClick={() => setViewMode('pro')}
          >
            <Zap size={16} />
          </button>
        </div>
      </div>
      
      <div className="demo-nft-grid">
        {demoNFTs.map((nft, index) => (
          <motion.div 
            key={nft.id}
            className="demo-nft-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
          >
            <div className="nft-image">
              <span className="nft-emoji">{nft.emoji}</span>
            </div>
            <div className="nft-info">
              <h4>{nft.name}</h4>
              <div className="nft-price">{nft.price} ETH</div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="demo-live-stats">
        <div className="live-stat">
          <span className="stat-label">Floor Price</span>
          <span className="stat-value">0.42 ETH</span>
        </div>
        <div className="live-stat">
          <span className="stat-label">24h Volume</span>
          <span className="stat-value">312 ETH</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   CREATE DEMO
   ============================================ */

const CreateDemo: React.FC = () => {
  const [step, setStep] = useState(1)

  const steps = ['Upload', 'AI Enhance', 'Customize', 'Mint']

  return (
    <div className="create-demo">
      <div className="demo-steps">
        {steps.map((label, index) => (
          <motion.div 
            key={index}
            className={cn('demo-step', step >= index + 1 && 'active')}
            onClick={() => setStep(index + 1)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{label}</div>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={step}
          className="demo-step-content"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {step === 1 && (
            <div className="upload-demo">
              <div className="upload-zone">
                <Upload size={32} />
                <p>Drag & drop pet photo here</p>
                <button className="browse-btn">Browse Files</button>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="ai-enhance-demo">
              <div className="before-after">
                <div className="image-container before">
                  <span>Before</span>
                  <div className="placeholder">🐕</div>
                </div>
                <ArrowRight size={24} className="arrow" />
                <div className="image-container after">
                  <span>After AI</span>
                  <div className="placeholder enhanced">✨🐕✨</div>
                  <div className="ai-badge">AI Enhanced</div>
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="customize-demo">
              <div className="customization-options">
                <div className="option">
                  <label>Name</label>
                  <input type="text" placeholder="Golden Retriever #42" />
                </div>
                <div className="option">
                  <label>Rarity</label>
                  <select>
                    <option>Legendary</option>
                    <option>Epic</option>
                    <option>Rare</option>
                  </select>
                </div>
              </div>
            </div>
          )}
          
          {step === 4 && (
            <div className="mint-demo">
              <div className="mint-preview">
                <div className="preview-card">
                  <div className="card-image">🐕</div>
                  <div className="card-info">
                    <h4>Golden Retriever #42</h4>
                    <span className="rarity">Legendary</span>
                  </div>
                </div>
                <button className="mint-btn">
                  <Sparkles size={16} />
                  Mint NFT
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
      
      <div className="demo-assistant">
        <div className="cat-message">
          &ldquo;Try uploading your pet&apos;s photo! I&apos;ll make it magical! 🐱✨&rdquo;
        </div>
      </div>
    </div>
  )
}

/* ============================================
   ANALYTICS DEMO
   ============================================ */

const AnalyticsDemo: React.FC = () => {
  return (
    <div className="analytics-demo">
      <div className="chart-preview">
        <svg viewBox="0 0 300 150" className="demo-chart">
          <defs>
            <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A78BFA" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,120 Q50,100 75,80 T150,60 T225,40 T300,20"
            fill="none"
            stroke="url(#chartGrad)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>
      </div>
      <div className="analytics-stats">
        <div className="stat-box">
          <span className="stat-label">Portfolio Value</span>
          <span className="stat-value">$42,350</span>
          <span className="stat-change positive">+24.5%</span>
        </div>
        <div className="stat-box">
          <span className="stat-label">Best Performer</span>
          <span className="stat-value">Golden #42</span>
          <span className="stat-change positive">+156%</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   COMMUNITY DEMO
   ============================================ */

const CommunityDemo: React.FC = () => {
  return (
    <div className="community-demo">
      <div className="activity-feed">
        {[
          { user: '🐕 Alex', action: 'bought Golden #42 for 0.5 ETH' },
          { user: '🐱 Maya', action: 'listed Cosmic Cat #17' },
          { user: '🦊 Sam', action: 'joined Mystic Fox Club' },
        ].map((activity, i) => (
          <motion.div 
            key={i}
            className="activity-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <span className="user">{activity.user}</span>
            <span className="action">{activity.action}</span>
          </motion.div>
        ))}
      </div>
      <div className="community-stats">
        <div className="stat">
          <Users size={20} />
          <span>50K+ Members</span>
        </div>
        <div className="stat">
          <TrendingUp size={20} />
          <span>$4.2M Volume</span>
        </div>
      </div>
    </div>
  )
}

/* ============================================
   MAIN FEATURE SHOWCASE
   ============================================ */

export const FeatureShowcase: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState('marketplace')

  const features = {
    marketplace: {
      title: 'Intelligent Trading Workspace',
      description: 'Adaptive grid system with professional tools for every trader level',
      icon: <TrendingUp size={24} />,
      color: 'purple',
      demo: <MarketplaceDemo />
    },
    create: {
      title: 'AI-Powered NFT Creation',
      description: 'Transform pet photos into unique NFTs with Disney-level magic',
      icon: <Sparkles size={24} />,
      color: 'pink',
      demo: <CreateDemo />
    },
    analytics: {
      title: 'Deep Portfolio Analytics',
      description: 'Real-time insights and predictive analytics for smart trading',
      icon: <BarChart3 size={24} />,
      color: 'blue',
      demo: <AnalyticsDemo />
    },
    community: {
      title: 'Social Trading Community',
      description: 'Connect with pet lovers, share collections, and trade together',
      icon: <Users size={24} />,
      color: 'teal',
      demo: <CommunityDemo />
    }
  }

  const active = features[activeFeature as keyof typeof features]

  return (
    <section className="feature-showcase">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Why <span className="gradient-text">Petopia Stands Out</span>
          </h2>
          <p className="section-subtitle">
            Experience the future of NFT trading with our unique features
          </p>
        </div>
        
        <div className="showcase-grid">
          <div className="feature-selector">
            {Object.entries(features).map(([key, feature]) => (
              <motion.button
                key={key}
                className={cn('feature-tab', activeFeature === key && 'active')}
                onClick={() => setActiveFeature(key)}
                data-color={feature.color}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="tab-icon">{feature.icon}</div>
                <div className="tab-content">
                  <h3 className="tab-title">{feature.title}</h3>
                  <p className="tab-description">{feature.description}</p>
                </div>
                <div className="tab-indicator" />
              </motion.button>
            ))}
          </div>
          
          <div className="feature-demo">
            <div className="demo-container">
              <div className="demo-header">
                <h3 className="demo-title">{active.title}</h3>
                <div className="demo-actions">
                  <button className="demo-action">
                    <Play size={16} />
                    <span>Interactive Demo</span>
                  </button>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFeature}
                  className="demo-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {active.demo}
                </motion.div>
              </AnimatePresence>
              
              <div className="demo-stats">
                <div className="stat-item">
                  <span className="stat-icon">😊</span>
                  <div>
                    <div className="stat-value">98%</div>
                    <div className="stat-label">User Satisfaction</div>
                  </div>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">⚡</span>
                  <div>
                    <div className="stat-value">3.2x</div>
                    <div className="stat-label">Faster</div>
                  </div>
                </div>
                <div className="stat-item">
                  <span className="stat-icon">🎯</span>
                  <div>
                    <div className="stat-value">9.8/10</div>
                    <div className="stat-label">Ease of Use</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ============================================
   SOCIAL PROOF COMPONENT
   ============================================ */

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Alex Crypto',
      role: 'Professional Trader',
      avatar: '🐕',
      content: "Petopia's grid system changed how I trade. 3x more efficient than any platform.",
      rating: 5
    },
    {
      name: 'Maya Artist',
      role: 'Digital Creator',
      avatar: '🐱',
      content: "The AI minting is magical! My cat's NFT sold for 5 ETH in hours.",
      rating: 5
    },
    {
      name: 'TechReview Magazine',
      role: 'Industry Expert',
      avatar: '🏆',
      content: 'Sets new standards for NFT platforms. 15 years ahead of competition.',
      rating: 5
    }
  ]

  return (
    <section className="social-proof">
      <div className="container">
        <h2 className="section-title">
          Loved by <span className="gradient-text">Traders & Creators</span>
        </h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="testimonial-header">
                <div className="avatar">{testimonial.avatar}</div>
                <div className="user-info">
                  <h4>{testimonial.name}</h4>
                  <p className="role">{testimonial.role}</p>
                </div>
                <div className="rating">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="trust-badges">
          {[
            { icon: <Shield size={20} />, text: 'Secure & Audited' },
            { icon: <Zap size={20} />, text: 'Lightning Fast' },
            { icon: <Users size={20} />, text: '100K+ Community' },
            { icon: <TrendingUp size={20} />, text: '#1 Trending' },
          ].map((badge, i) => (
            <motion.div 
              key={i}
              className="badge"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {badge.icon}
              <span>{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureShowcase
