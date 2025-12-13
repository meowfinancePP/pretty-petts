'use client';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import WaitlistForm from './components/WaitlistForm';
import Link from 'next/link';
import ParticleBackground from './components/ParticleBackground';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);
  
  const controls = useAnimation();
  const isInView = useInView(heroRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);

  // Apple-style smooth scroll detection
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const scrollToSection = useCallback((ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, []);

  const features = [
    {
      icon: '🤖',
      title: 'Искусственный Интеллект',
      description: 'Наш AI создаёт уникальные 3D модели питомцев на основе ваших фотографий за 30 секунд',
      color: 'from-purple-500/20 via-purple-500/10 to-transparent',
      borderColor: 'border-purple-500/30',
      iconBg: 'bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700',
      delay: 0
    },
    {
      icon: '🔗',
      title: 'Эко-Блокчейн',
      description: 'Используем углеродно-нейтральный Polygon для минимального воздействия на окружающую среду',
      color: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
      borderColor: 'border-cyan-500/30',
      iconBg: 'bg-gradient-to-br from-cyan-600 via-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: '❤️',
      title: 'Социальная Миссия',
      description: '10% от каждой продажи NFT автоматически перечисляется в приюты для животных',
      color: 'from-pink-500/20 via-pink-500/10 to-transparent',
      borderColor: 'border-pink-500/30',
      iconBg: 'bg-gradient-to-br from-pink-600 via-rose-500 to-rose-600',
      delay: 0.2
    },
    {
      icon: '🌍',
      title: 'Глобальное Сообщество',
      description: 'Присоединяйтесь к тысячам владельцев питомцев по всему миру',
      color: 'from-emerald-500/20 via-emerald-500/10 to-transparent',
      borderColor: 'border-emerald-500/30',
      iconBg: 'bg-gradient-to-br from-emerald-600 via-teal-500 to-teal-600',
      delay: 0.3
    },
  ];

  const navItems = [
    { label: 'Технологии', ref: featuresRef },
    { label: 'Миссия', ref: missionRef },
    { label: 'Marketplace', href: '/market' },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Samsung Galaxy-style Particle Background */}
      <ParticleBackground />

      {/* Apple-style ultra smooth gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-[900px] h-[900px] bg-gradient-to-br from-purple-200/5 to-pink-200/5 rounded-full blur-[250px] opacity-30"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-200/4 to-blue-200/4 rounded-full blur-[200px] opacity-25"
        />
      </div>

      {/* Google Material You + Apple Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.8,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/5 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] py-3 border-b border-white/10' 
            : 'bg-transparent py-5'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(200%)' : 'none',
          background: isScrolled ? 'rgba(255, 255, 255, 0.03)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Apple-style Logo */}
            <Link href="/" className="relative group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="relative">
                  {/* Samsung Galaxy S23 Ultra halo effect */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"
                  />
                  <div className="relative w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
                    {/* Google Material depth effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                    <Image
                      src="/logo.png"
                      alt="PrettyPetts Logo"
                      width={36}
                      height={36}
                      className="relative z-10 object-contain"
                      priority
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    PrettyPetts
                  </span>
                  <span className="text-xs text-gray-500/70 font-medium tracking-wider">DIGITAL LEGACY</span>
                </div>
              </motion.div>
            </Link>

            {/* Apple Dock + Google Material Navigation */}
            <div className="hidden md:flex items-center space-x-1 bg-white/5 backdrop-blur-2xl rounded-2xl p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/10">
              {navItems.map((item) => (
                <motion.div
                  key={item.label}
                  className="relative"
                  onHoverStart={() => setHoveredNav(item.label)}
                  onHoverEnd={() => setHoveredNav(null)}
                  whileHover={{ 
                    scale: 1.08,
                    y: -4,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 20
                    }
                  }}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="relative px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700/90 transition-all duration-300 block group"
                    >
                      <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                      {/* Samsung Galaxy S23 hover effect */}
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredNav === item.label ? 1 : 0,
                          scale: hoveredNav === item.label ? 1 : 0.8
                        }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                      />
                      {/* Apple Spotlight effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500" />
                    </Link>
                  ) : (
                    <motion.button
                      onClick={() => scrollToSection(item.ref!)}
                      className="relative px-5 py-2.5 rounded-xl text-sm font-medium text-gray-700/90 transition-all duration-300 group"
                    >
                      <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                      <motion.div
                        initial={false}
                        animate={{
                          opacity: hoveredNav === item.label ? 1 : 0,
                          scale: hoveredNav === item.label ? 1 : 0.8
                        }}
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20"
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500" />
                    </motion.button>
                  )}
                </motion.div>
              ))}
              
              {/* Google Material CTA Button */}
              <motion.div
                className="ml-1.5"
                whileHover={{ 
                  scale: 1.08,
                  y: -4
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(waitlistRef)}
                  className="relative px-6 py-2.5 rounded-xl text-sm font-medium overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                    boxShadow: '0 10px 30px rgba(139, 92, 246, 0.3), 0 2px 10px rgba(139, 92, 246, 0.2)'
                  }}
                >
                  {/* Samsung Galaxy dynamic gradient */}
                  <motion.div
                    animate={{
                      background: [
                        'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                        'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                        'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
                      ]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 opacity-100 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <span className="relative z-10 text-white font-semibold tracking-wide flex items-center gap-2">
                    Присоединиться
                    <motion.svg
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </span>
                  {/* Apple shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </motion.div>
            </div>

            {/* Samsung Fold Mobile Menu */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden bg-white/5 backdrop-blur-xl rounded-xl p-2.5 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <svg className="w-5 h-5 text-gray-700/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Apple WWDC-style Hero Section */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  staggerChildren: 0.15
                }
              }
            }}
            className="text-center"
          >
            {/* Google Material Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
                <span className="text-xs font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-widest">
                  БУДУЩЕЕ ЦИФРОВЫХ ПИТОМЦЕВ
                </span>
              </div>
              
              {/* Apple Pro Display XDR typography */}
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-10 tracking-tighter"
                style={{
                  textShadow: '0 4px 60px rgba(139, 92, 246, 0.3)'
                }}
              >
                <span className="block text-gray-900/95">Цифровая</span>
                <motion.span
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="block bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:300%_auto]"
                >
                  вечность
                </motion.span>
                <span className="block text-gray-900/95">для ваших питомцев</span>
              </motion.h1>
            </motion.div>

            {/* Samsung Galaxy S23 description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-xl md:text-2xl text-gray-600/80 max-w-4xl mx-auto mb-12 leading-relaxed font-light tracking-wide"
            >
              Превращаем воспоминания о любимых питомцах в уникальные цифровые произведения искусства, 
              сохраняя их дух в блокчейне навсегда
            </motion.p>

            {/* Google Material + Apple CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -5,
                  boxShadow: "0 30px 60px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection(waitlistRef)}
                className="relative px-10 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                  boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3), 0 4px 20px rgba(139, 92, 246, 0.2)'
                }}
              >
                <motion.div
                  animate={{
                    background: [
                      'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)',
                      'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
                      'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)'
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute inset-0"
                />
                <span className="relative z-10 text-white font-semibold flex items-center gap-3">
                  <span>Начать путешествие</span>
                  <motion.svg
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
                {/* Samsung Galaxy shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.button>
              
              <Link href="/market">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    y: -3
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-10 py-4 rounded-full text-lg font-semibold relative overflow-hidden group border border-gray-300/50 bg-white/5 backdrop-blur-xl"
                  style={{
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                  <span className="relative text-gray-700/90 flex items-center gap-3">
                    <span>Смотреть NFT</span>
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="text-lg"
                    >
                      ✨
                    </motion.span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Apple Vision Pro-style NFT Preview */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              className="relative max-w-6xl mx-auto"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {['🐕', '🐈', '🐇', '🦜'].map((emoji, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ 
                      delay: 0.8 + i * 0.2,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      y: -20, 
                      scale: 1.08,
                      rotate: i % 2 === 0 ? 3 : -3,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 15
                      }
                    }}
                    className="relative aspect-square rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_80px_rgba(139,92,246,0.25)] transition-all duration-500 group overflow-hidden"
                  >
                    {/* Samsung Galaxy S23 glass effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-purple-500/15 group-hover:via-purple-500/10 group-hover:to-pink-500/15 transition-all duration-700" />
                    
                    {/* Apple Pro Motion animation */}
                    <motion.div
                      animate={{ y: [0, -15, 0] }}
                      transition={{ 
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity 
                      }}
                      className="relative z-10 w-full h-full flex items-center justify-center"
                    >
                      <span className="text-8xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-700">{emoji}</span>
                    </motion.div>
                    
                    {/* Google Material elevation */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"
                    />
                    
                    {/* Samsung Edge Lighting */}
                    <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-3xl" />
                  </motion.div>
                ))}
              </div>
              
              {/* Apple Vision Pro floating elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute -top-12 -left-12 w-48 h-48 border border-purple-300/5 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-12 -right-12 w-40 h-40 border border-pink-300/5 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Samsung Galaxy Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        >
          <div className="w-12 h-20 border border-white/20 rounded-full flex justify-center bg-white/5 backdrop-blur-xl">
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1.5 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mt-3"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Rest of the page remains the same but with updated glass effects */}
      {/* ... [Previous sections with updated glass effects] ... */}
      
      {/* Features Section with Apple Pro Display effects */}
      <motion.section
        ref={featuresRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="py-40 relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
                <span className="text-lg font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider">
                  ТЕХНОЛОГИЯ БУДУЩЕГО
                </span>
              </div>
            </div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900/95 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Объединяем передовые технологии с{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 animate-gradient">
                любовью к животным
              </span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: feature.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -20, 
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${feature.color} p-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_rgba(139,92,246,0.2)] transition-all duration-500 overflow-hidden bg-white/5 backdrop-blur-xl`}
              >
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    className={`w-20 h-20 ${feature.iconBg} rounded-3xl flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] relative overflow-hidden`}
                  >
                    <span className="text-3xl relative z-10">{feature.icon}</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900/95">{feature.title}</h3>
                  <p className="text-gray-600/80 leading-relaxed text-lg">{feature.description}</p>
                </div>
                
                {/* Samsung Galaxy glow effect */}
                <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-br from-white/5 to-transparent rounded-full group-hover:scale-150 transition-transform duration-700" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Waitlist Section with Apple Event style */}
      <motion.section
        ref={waitlistRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="py-40"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-10 shadow-[0_8px_32px_rgba(139,92,246,0.15)]">
              <div className="flex items-center gap-3">
                <motion.span
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
                <span className="text-lg font-medium text-gradient bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider">
                  ПРИСОЕДИНЯЙТЕСЬ К РЕВОЛЮЦИИ
                </span>
              </div>
            </div>
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-gray-900/95"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Станьте частью{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 animate-gradient">
                цифровой эволюции
              </span>
            </motion.h2>
            <p className="text-xl text-gray-600/80 max-w-3xl mx-auto font-light tracking-wide">
              Присоединяйтесь к листу ожидания и получите эксклюзивный доступ к бета-тестированию
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="relative rounded-[3rem] overflow-hidden shadow-[0_40px_80px_rgba(139,92,246,0.25)] bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <div className="relative p-12 md:p-16">
              <WaitlistForm />
            </div>
            
            {/* Samsung Galaxy dynamic glow */}
            <motion.div
              animate={{ 
                x: [0, 100, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Apple Pro Footer */}
      <footer className="bg-black/95 text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-900/10 to-pink-900/10"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-[0_20px_40px_rgba(139,92,246,0.3)]"
                >
                  <span className="text-white text-lg font-bold">P</span>
                </motion.div>
                <div>
                  <span className="text-2xl font-semibold">PrettyPetts</span>
                  <div className="text-sm text-gray-400/70 mt-1 tracking-wider">DIGITAL LEGACY</div>
                </div>
              </div>
              <p className="text-gray-400/80 leading-relaxed tracking-wide">
                Объединяем технологии и любовь к животным для создания лучшего будущего
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-8 text-gray-200 text-lg tracking-wide">Навигация</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Главная', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
                  { label: 'Технологии', action: () => scrollToSection(featuresRef) },
                  { label: 'Миссия', action: () => scrollToSection(missionRef) },
                  { label: 'Marketplace', href: '/market' },
                ].map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ x: 5 }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="text-gray-400/80 hover:text-white transition-all duration-300 flex items-center gap-2 group tracking-wide"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-purple-500 transition-all duration-300" />
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-gray-400/80 hover:text-white transition-all duration-300 flex items-center gap-2 group tracking-wide"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-purple-500 transition-all duration-300" />
                        {item.label}
                      </button>
                    )}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-8 text-gray-200 text-lg tracking-wide">Ресурсы</h4>
              <ul className="space-y-4">
                {['Документация', 'Блог', 'ЧаВо', 'Контакты'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400/80 hover:text-white transition-all duration-300 flex items-center gap-2 group tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-blue-500 transition-all duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-8 text-gray-200 text-lg tracking-wide">Сообщество</h4>
              <ul className="space-y-4">
                {['Twitter', 'Discord', 'Instagram', 'Telegram'].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ x: 5 }}
                  >
                    <a href="#" className="text-gray-400/80 hover:text-white transition-all duration-300 flex items-center gap-2 group tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-pink-500 transition-all duration-300" />
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="border-t border-gray-800 pt-10 text-center"
          >
            <p className="text-gray-400/80 text-sm tracking-wide">
              © 2024 PrettyPetts. Все права защищены. Сделано с ❤️ для животных по всему миру.
            </p>
            <div className="mt-4 flex justify-center gap-6">
              <span className="text-xs text-gray-500 tracking-wide">Политика конфиденциальности</span>
              <span className="text-xs text-gray-500 tracking-wide">Условия использования</span>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}