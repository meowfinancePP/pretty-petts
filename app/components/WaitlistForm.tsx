// app/components/WaitlistForm.tsx
'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [petName, setPetName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(1247);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
      setSubmitted(true);
      
      // Анимация счетчика
      const interval = setInterval(() => {
        setWaitlistCount(prev => prev + 1);
      }, 100);
      
      setTimeout(() => {
        clearInterval(interval);
        
        // Сброс через 5 секунд
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          setPetName('');
        }, 5000);
      }, 3000);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 text-center">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center animate-pulse">
          <span className="text-4xl">✨</span>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Добро пожаловать в будущее!
        </h3>
        <div className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          #{waitlistCount}
        </div>
        <p className="text-gray-600 mb-2">Вы стали частью революции</p>
        <p className="text-sm text-gray-500">
          Подтверждение отправлено на {email}
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
            Ранний доступ
          </div>
          <div className="px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium">
            Скидка 50%
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
      {/* Заголовок формы */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          Забронируйте место в истории
        </h3>
        <p className="text-gray-600">
          Ограниченное количество мест для первых участников
        </p>
      </div>

      {/* Прогресс бар */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <div className="text-sm font-medium text-gray-700">Список ожидания</div>
          <div className="text-sm font-bold text-purple-600">
            {waitlistCount.toLocaleString()}+ участников
          </div>
        </div>
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-1000"
            style={{ width: `${Math.min((waitlistCount / 2000) * 100, 100)}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-500 mt-2 text-center">
          Осталось {Math.max(0, 2000 - waitlistCount)} мест из 2000
        </div>
      </div>

      {/* Форма */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ваш email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 placeholder-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Имя питомца (опционально)
          </label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            placeholder="Как зовут вашего любимца?"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 placeholder-gray-400"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-lg rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          🚀 Забронировать место
        </button>

        {/* Преимущества */}
        <div className="text-center pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-600 mb-4">
            Присоединяясь, вы получаете:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-gray-700">Ранний доступ к платформе</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <span className="text-gray-700">Бесплатный NFT аирдроп</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
              <span className="text-gray-700">Эксклюзивные бонусы</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}