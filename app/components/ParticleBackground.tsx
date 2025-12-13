// app/components/ParticleBackground.tsx
'use client';

import { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Размеры
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    // Мягкие частицы
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: [number, number, number];
      alpha: number;
    }> = [];

    // Создание мягких частиц
    const createParticles = (count: number) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 180 + 70, // Более крупные, но мягкие
          speedX: (Math.random() - 0.5) * 0.15, // Медленнее
          speedY: (Math.random() - 0.5) * 0.15,
          color: [
            Math.floor(Math.random() * 60 + 195), // Более светлые цвета
            Math.floor(Math.random() * 60 + 195),
            Math.floor(Math.random() * 60 + 195)
          ],
          alpha: Math.random() * 0.08 + 0.02 // Очень прозрачные
        });
      }
    };

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'blur(120px)'; // Увеличенное размытие

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Плавное движение с отскоком
        if (particle.x < -particle.size || particle.x > canvas.width + particle.size) {
          particle.speedX *= -1;
        }
        if (particle.y < -particle.size || particle.y > canvas.height + particle.size) {
          particle.speedY *= -1;
        }

        // Рисуем мягкую частицу
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size
        );
        
        gradient.addColorStop(0, `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${particle.alpha})`);
        gradient.addColorStop(0.3, `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, ${particle.alpha * 0.5})`);
        gradient.addColorStop(1, `rgba(${particle.color[0]}, ${particle.color[1]}, ${particle.color[2]}, 0)`);

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    createParticles(8); // Меньше частиц для большей мягкости
    animate();

    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        zIndex: 0,
        opacity: 0.6 // Уменьшенная общая прозрачность
      }}
    />
  );
};

export default ParticleBackground;