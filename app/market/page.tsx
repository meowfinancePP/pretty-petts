'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ParticleBackground from '../components/ParticleBackground';

interface NFT {
  id: number;
  name: string;
  description: string;
  price: string;
  owner: string;
  category: string;
  emoji: string;
  gradient: string;
  borderColor: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  reflections: boolean;
  glowColor: string;
}

const rarityConfig = {
  common: {
    badge: 'bg-gradient-to-r from-gray-600/20 to-gray-700/20 text-gray-700',
    glow: 'from-gray-400 to-gray-500',
    shadow: 'shadow-[0_20px_40px_rgba(156,163,175,0.15)]',
    priceColor: 'from-gray-700 to-gray-800'
  },
  rare: {
    badge: 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-700',
    glow: 'from-blue-400 to-cyan-500',
    shadow: 'shadow-[0_20px_40px_rgba(59,130,246,0.2)]',
    priceColor: 'from-blue-600 to-cyan-600'
  },
  epic: {
    badge: 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-700',
    glow: 'from-purple-500 to-pink-500',
    shadow: 'shadow-[0_20px_40px_rgba(168,85,247,0.25)]',
    priceColor: 'from-purple-600 to-pink-600',
    reflections: true
  },
  legendary: {
    badge: 'bg-gradient-to-r from-amber-600/20 via-orange-600/20 to-yellow-600/20 text-amber-700',
    glow: 'from-amber-400 via-orange-500 to-yellow-500',
    shadow: 'shadow-[0_25px_50px_rgba(245,158,11,0.3)]',
    priceColor: 'from-amber-500 to-orange-500',
    reflections: true,
    holographic: true
  }
};

export default function MarketPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  const nfts: NFT[] = [
    {
      id: 1,
      name: 'Пушистый Аристократ',
      description: 'Элегантный мейн-кун с изумрудными глазами и королевской осанкой',
      price: '0.5 ETH',
      owner: '@catlover42',
      category: 'Кошки',
      emoji: '🐈',
      gradient: 'from-amber-100/90 via-orange-100/80 to-amber-50/90',
      borderColor: 'border-amber-400/40',
      rarity: 'rare',
      reflections: true,
      glowColor: 'rgba(245, 158, 11, 0.08)'
    },
    {
      id: 2,
      name: 'Верный Компаньон',
      description: 'Золотистый ретривер с добрым сердцем и безграничной преданностью',
      price: '0.8 ETH',
      owner: '@dogparadise',
      category: 'Собаки',
      emoji: '🐕',
      gradient: 'from-yellow-100/90 via-amber-100/80 to-yellow-50/90',
      borderColor: 'border-yellow-400/40',
      rarity: 'epic',
      reflections: true,
      glowColor: 'rgba(251, 191, 36, 0.1)'
    },
    {
      id: 3,
      name: 'Небесный Певун',
      description: 'Канарейка с голосом ангела и перьями цвета восходящего солнца',
      price: '0.3 ETH',
      owner: '@birdwatcher',
      category: 'Птицы',
      emoji: '🐦',
      gradient: 'from-blue-100/90 via-cyan-100/80 to-blue-50/90',
      borderColor: 'border-blue-400/40',
      rarity: 'common',
      reflections: false,
      glowColor: 'rgba(59, 130, 246, 0.08)'
    },
    {
      id: 4,
      name: 'Морской Исследователь',
      description: 'Любопытный аквариумный сом с сияющей чешуёй глубоких океанов',
      price: '0.4 ETH',
      owner: '@aquaworld',
      category: 'Рыбы',
      emoji: '🐠',
      gradient: 'from-cyan-100/90 via-teal-100/80 to-cyan-50/90',
      borderColor: 'border-cyan-400/40',
      rarity: 'rare',
      reflections: true,
      glowColor: 'rgba(6, 182, 212, 0.08)'
    },
    {
      id: 5,
      name: 'Золотой Феникс',
      description: 'Мифическая птица возрождения с перьями из расплавленного золота',
      price: '2.5 ETH',
      owner: '@mythical',
      category: 'Птицы',
      emoji: '🔥',
      gradient: 'from-amber-200/90 via-orange-200/80 to-yellow-100/90',
      borderColor: 'border-amber-500/40',
      rarity: 'legendary',
      reflections: true,
      glowColor: 'rgba(245, 158, 11, 0.15)'
    },
    {
      id: 6,
      name: 'Кристальный Дракон',
      description: 'Древний страж с чешуёй из чистейшего горного хрусталя',
      price: '3.8 ETH',
      owner: '@fantasyking',
      category: 'Рептилии',
      emoji: '🐉',
      gradient: 'from-purple-200/90 via-pink-200/80 to-purple-100/90',
      borderColor: 'border-purple-500/40',
      rarity: 'legendary',
      reflections: true,
      glowColor: 'rgba(168, 85, 247, 0.15)'
    },
    {
      id: 7,
      name: 'Лунный Волк',
      description: 'Ночной охотник с шерстью, отражающей свет полной луны',
      price: '1.9 ETH',
      owner: '@nightwalker',
      category: 'Собаки',
      emoji: '🐺',
      gradient: 'from-slate-200/90 via-gray-200/80 to-slate-100/90',
      borderColor: 'border-gray-500/40',
      rarity: 'epic',
      reflections: true,
      glowColor: 'rgba(156, 163, 175, 0.1)'
    },
    {
      id: 8,
      name: 'Изумрудная Королева',
      description: 'Кошачья королева с глазами из чистейшего изумруда',
      price: '1.2 ETH',
      owner: '@royalty',
      category: 'Кошки',
      emoji: '👑',
      gradient: 'from-emerald-100/90 via-green-100/80 to-emerald-50/90',
      borderColor: 'border-emerald-500/40',
      rarity: 'epic',
      reflections: true,
      glowColor: 'rgba(16, 185, 129, 0.1)'
    },
  ];

  const filteredNFTs = activeFilter === 'all' 
    ? nfts 
    : nfts.filter(nft => nft.category === activeFilter);

  const categories = [
    { id: 'all', name: 'Все', emoji: '✨', count: nfts.length },
    { id: 'Кошки', name: 'Кошки', emoji: '🐈', count: nfts.filter(n => n.category === 'Кошки').length },
    { id: 'Собаки', name: 'Собаки', emoji: '🐕', count: nfts.filter(n => n.category === 'Собаки').length },
    { id: 'Птицы', name: 'Птицы', emoji: '🐦', count: nfts.filter(n => n.category === 'Птицы').length },
    { id: 'Рептилии', name: 'Рептилии', emoji: '🐍', count: nfts.filter(n => n.category === 'Рептилии').length },
  ];

  const navItems = [
    { label: 'Технологии', href: '/#features' },
    { label: 'Миссия', href: '/#mission' },
    { label: 'Marketplace', href: '/market' },
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <ParticleBackground />

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/3 to-blue-500/2 rounded-full blur-[300px] opacity-30"
        />
      </div>

      {/* Навигация */}
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
            ? 'bg-white/3 backdrop-blur-3xl shadow-[0_4px_32px_rgba(0,0,0,0.08)] py-3 border-b border-white/5' 
            : 'bg-transparent py-5'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(32px) saturate(300%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(32px) saturate(300%)' : 'none',
          background: isScrolled ? 'rgba(255, 255, 255, 0.02)' : 'transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Логотип с прямым путем */}
            <Link href="/" className="relative group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <div className="relative">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -inset-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
                  />
                  <div className="relative w-12 h-12 rounded-2xl bg-white/3 backdrop-blur-2xl flex items-center justify-center overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(6,182,212,0.2)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    <Image
                      src="/logo.png" // Прямой путь к public/logo.png
                      alt="PrettyPetts Logo"
                      width={28}
                      height={28}
                      className="relative z-10 object-contain"
                      priority
                      unoptimized
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                    PrettyPetts
                  </span>
                  <span className="text-xs text-gray-500/70 font-medium tracking-widest">MARKETPLACE</span>
                </div>
              </motion.div>
            </Link>

            <div className="hidden md:flex items-center space-x-1 bg-white/3 backdrop-blur-3xl rounded-2xl p-1 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/10">
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
                  <Link
                    href={item.href}
                    className="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-700/90 transition-all duration-300 block group"
                  >
                    <span className="relative z-10 font-medium tracking-wide">{item.label}</span>
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: hoveredNav === item.label ? 1 : 0,
                        scale: hoveredNav === item.label ? 1 : 0.8
                      }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden bg-white/3 backdrop-blur-2xl rounded-xl p-2 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]"
            >
              <svg className="w-5 h-5 text-gray-700/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/3 backdrop-blur-3xl border border-white/10 mb-10 shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                />
                <span className="text-sm font-medium text-gradient bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-widest">
                  NFT MARKETPLACE
                </span>
              </div>
            </div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-gray-900/95 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Цифровые{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 animate-gradient">
                сокровища
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-gray-600/70 font-light mt-4 block">
                для истинных коллекционеров
              </span>
            </motion.h1>
            
            <p className="text-lg text-gray-600/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
              Эксклюзивная коллекция NFT, где каждая карта — это произведение искусства с уникальной историей
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
              {[
                { value: '1.2K', label: 'Коллекционеров', color: 'from-cyan-600 to-blue-600' },
                { value: '48', label: 'Авторов', color: 'from-purple-600 to-pink-600' },
                { value: '124', label: 'NFT Продано', color: 'from-emerald-600 to-teal-600' },
                { value: '6', label: 'Приютов', color: 'from-amber-600 to-orange-600' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="text-center"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500/70 tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Фильтры */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-white/5 backdrop-blur-xl border border-white/10 text-gray-900 shadow-[0_8px_32px_rgba(6,182,212,0.2)]'
                    : 'bg-white/3 backdrop-blur-xl border border-white/5 text-gray-700/80 hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{category.emoji}</span>
                <span>{category.name}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Сетка NFT */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNFTs.map((nft) => (
              <NFTCardPremium 
                key={nft.id} 
                nft={nft} 
                isHovered={hoveredCard === nft.id}
                onHover={() => setHoveredCard(nft.id)}
                onLeave={() => setHoveredCard(null)}
              />
            ))}
          </div>

          {/* Информационный баннер */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mt-32 p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/1 backdrop-blur-xl border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
          >
            <div className="max-w-4xl mx-auto text-center">
              <motion.h3 
                className="text-3xl font-bold text-gray-900/95 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Инвестируйте в цифровое искусство, 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
                  {' '}меняя жизни животных
                </span>
              </motion.h3>
              <p className="text-gray-600/80 text-base mb-10 leading-relaxed font-light tracking-wide">
                Каждая покупка NFT поддерживает приюты для животных. Вы получаете эксклюзивное цифровое искусство, 
                а животные — шанс на лучшую жизнь. Прозрачная система пожертвований на блокчейне.
              </p>
            </div>
          </motion.div>

          {/* Кнопка Начать создание - ведет на главную к форме подписки */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900/95 mb-10">
              Создайте свой первый NFT
            </h3>
            <p className="text-gray-600/80 text-lg mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к листу ожидания и получите эксклюзивный доступ к созданию NFT вашего питомца
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#waitlist">
                <motion.button
                  whileHover={{ 
                    scale: 1.08, // Больше увеличение
                    y: -3
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative px-12 py-4 rounded-full text-lg font-semibold overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
                    boxShadow: '0 20px 40px rgba(6, 182, 212, 0.3)'
                  }}
                >
                  <span className="relative z-10 text-white flex items-center gap-3">
                    <span>Начать создание</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Футер */}
      <footer className="mt-32 bg-black/95 text-white pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-cyan-900/10 to-blue-900/10"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center shadow-[0_20px_40px_rgba(6,182,212,0.3)]"
                >
                  <span className="text-white text-lg font-bold">P</span>
                </motion.div>
                <div>
                  <span className="text-2xl font-semibold">PrettyPetts</span>
                  <div className="text-sm text-gray-400/70 mt-1 tracking-wider">MARKETPLACE</div>
                </div>
              </div>
              <p className="text-gray-400/80 leading-relaxed tracking-wide">
                Эксклюзивный маркетплейс цифровых питомцев. Искусство, технологии и благотворительность.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-8 text-gray-200 text-lg tracking-wide">Навигация</h4>
              <ul className="space-y-4">
                {[
                  { label: 'Главная', href: '/' },
                  { label: 'Технологии', href: '/#features' },
                  { label: 'Миссия', href: '/#mission' },
                  { label: 'Marketplace', href: '/market' },
                ].map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      href={item.href}
                      className="text-gray-400/80 hover:text-white transition-all duration-300 flex items-center gap-2 group tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-cyan-500 transition-all duration-300" />
                      {item.label}
                    </Link>
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
              © 2024 PrettyPetts Marketplace. Все права защищены. Революция в мире NFT.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

function NFTCardPremium({ nft, isHovered, onHover, onLeave }: { 
  nft: NFT, 
  isHovered: boolean, 
  onHover: () => void, 
  onLeave: () => void 
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const config = rarityConfig[nft.rarity];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={() => {
        onLeave();
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Уменьшенное свечение для легендарных */}
      {nft.rarity === 'legendary' && (
        <motion.div
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.05 : 1 // Уменьшено с 1.1
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -inset-3 bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-yellow-500/5 rounded-3xl blur-lg" // Уменьшено свечение
        />
      )}

      {/* Карточка с увеличенным наведением */}
      <motion.div
        animate={{
          rotateY: isHovered ? mousePosition.x : 0,
          rotateX: isHovered ? mousePosition.y : 0,
          y: isHovered ? -25 : 0, // Увеличено с -20
          scale: isHovered ? 1.08 : 1, // Увеличено с 1.05
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative bg-gradient-to-br ${nft.gradient} border ${nft.borderColor} rounded-3xl p-6 ${config.shadow} hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)] transition-all duration-500 overflow-hidden cursor-pointer bg-white/10 backdrop-blur-xl`}
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center',
          borderWidth: '1.5px'
        }}
      >
        {/* Edge Lighting */}
        <div className="absolute inset-0 border border-white/0 group-hover:border-white/30 transition-all duration-500 rounded-3xl" />

        {/* Elevation */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/5 to-white/0" />

        {/* Rarity Badge */}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-xl border border-white/10 ${config.badge}`}
          >
            {nft.rarity.toUpperCase()}
          </motion.div>
        </div>

        {/* Legendary Crown */}
        {nft.rarity === 'legendary' && (
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-4 left-4 text-2xl"
          >
            👑
          </motion.div>
        )}

        {/* Emoji Display */}
        <div className="relative z-10 mb-6">
          <motion.div
            animate={isHovered ? { 
              scale: [1, 1.08, 1], // Уменьшено с 1.1
              rotate: nft.rarity === 'legendary' ? [0, 5, -5, 0] : [0, 0, 0]
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 mx-auto bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-white/20" // Уменьшена тень
          >
            <motion.span 
              className="text-6xl"
              animate={isHovered ? { y: [0, -6, 0] } : {}} // Уменьшено с -8
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {nft.emoji}
            </motion.span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900/95 mb-2 tracking-tight">{nft.name}</h3>
            <p className="text-gray-600/80 text-sm leading-relaxed font-light tracking-wide">
              {nft.description}
            </p>
          </div>
          
          {/* Price Display */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div>
              <div className="text-xs text-gray-500/70 mb-1 tracking-wider">ЦЕНА</div>
              <div className={`text-lg font-bold bg-gradient-to-r ${config.priceColor} bg-clip-text text-transparent`}>
                {nft.price}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500/70 mb-1 tracking-wider">ВЛАДЕЛЕЦ</div>
              <div className="text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent tracking-wide">
                {nft.owner}
              </div>
            </div>
          </div>

          {/* Buy Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-sm font-medium rounded-2xl hover:shadow-xl transition-shadow relative overflow-hidden group"
            style={{
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide">
              Купить сейчас
              <motion.svg
                animate={isHovered ? { x: [0, 4, 0] } : {}}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </motion.svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </div>

        {/* Reflections - уменьшены */}
        {nft.reflections && (
          <div className="absolute inset-0 overflow-hidden rounded-3xl">
            <motion.div
              animate={{ 
                x: isHovered ? ['0%', '100%'] : '0%',
                opacity: isHovered ? [0.2, 0] : 0 // Уменьшено с 0.3
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/15 to-transparent" // Уменьшено свечение
            />
          </div>
        )}

        {/* Particle Effect - уменьшены */}
        {isHovered && nft.rarity === 'legendary' && (
          <>
            {[...Array(3)].map((_, i) => ( // Уменьшено количество частиц
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                animate={{ 
                  scale: [0, 0.8, 0], // Уменьшено
                  opacity: [0, 0.4, 0], // Уменьшено
                  x: Math.random() * 80 - 40, // Уменьшен радиус
                  y: Math.random() * 80 - 40
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity 
                }}
                className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${config.glow}`} // Уменьшены частицы
                style={{
                  left: `${50 + (i * 10)}%`,
                  top: `${30 + (i * 20)}%`
                }}
              />
            ))}
          </>
        )}
      </motion.div>

      {/* Reflection Shadow - уменьшена */}
      <motion.div
        animate={{
          scale: isHovered ? 0.97 : 1, // Уменьшено
          opacity: isHovered ? 0.4 : 0, // Уменьшено
          y: isHovered ? 25 : 0 // Увеличено
        }}
        className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent blur-xl rounded-3xl -z-10" // Уменьшен blur
      />
    </motion.div>
  );
}