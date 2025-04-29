
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
  twinkleSpeed: number;
}

interface Lightning {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  width: number;
  opacity: number;
  duration: number;
  startTime: number;
  branches: Array<{x1: number, y1: number, x2: number, y2: number, width: number}>;
}

const GalaxyAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const lightningRef = useRef<Lightning[]>([]);
  const animationFrameRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Define functions before using them
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 1000); // Increased star density
      const stars: Star[] = [];
      
      const starColors = [
        '#ffffff',
        '#1EAEDB',
        '#33C3F0',
        '#8B5CF6',
        '#D946EF',
        '#FCD34D',
        '#F9FAFB',
        '#60A5FA'
      ];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 0.5,
          speed: Math.random() * 0.3 + 0.05,
          opacity: Math.random() * 0.7 + 0.3,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          twinkleSpeed: Math.random() * 0.03 + 0.005
        });
      }
      
      starsRef.current = stars;
    };
    
    const createLightning = () => {
      const startX = Math.random() * canvas.width;
      const startY = Math.random() * (canvas.height * 0.3);
      const endX = startX + (Math.random() * 200 - 100);
      const endY = startY + (Math.random() * canvas.height * 0.3);
      
      const branchCount = Math.floor(Math.random() * 8) + 5; // More branches
      const branches = [];
      
      for (let i = 0; i < branchCount; i++) {
        const midX = startX + (endX - startX) * Math.random();
        const midY = startY + (endY - startY) * Math.random();
        
        const branchEndX = midX + (Math.random() * 120 - 60);
        const branchEndY = midY + (Math.random() * 120);
        
        branches.push({
          x1: midX, 
          y1: midY,
          x2: branchEndX,
          y2: branchEndY,
          width: Math.random() * 2 + 0.5
        });
      }
      
      lightningRef.current.push({
        startX,
        startY,
        endX,
        endY,
        width: Math.random() * 3 + 1,
        opacity: 0.9, // Increased opacity
        duration: Math.random() * 200 + 100,
        startTime: Date.now(),
        branches
      });
    };
    
    const updateLightning = () => {
      const currentTime = Date.now();
      
      lightningRef.current = lightningRef.current.filter(bolt => {
        const lifespan = currentTime - bolt.startTime;
        return lifespan < bolt.duration;
      });
      
      lightningRef.current.forEach(bolt => {
        const lifespan = currentTime - bolt.startTime;
        const lifeFraction = lifespan / bolt.duration;
        
        let opacity = 0;
        if (lifeFraction < 0.1) {
          opacity = bolt.opacity * (lifeFraction / 0.1);
        } else if (lifeFraction > 0.8) {
          opacity = bolt.opacity * (1 - (lifeFraction - 0.8) / 0.2);
        } else {
          opacity = bolt.opacity;
        }
        
        ctx.beginPath();
        ctx.strokeStyle = `rgba(220, 235, 255, ${opacity})`;
        ctx.lineWidth = bolt.width;
        ctx.moveTo(bolt.startX, bolt.startY);
        ctx.lineTo(bolt.endX, bolt.endY);
        ctx.stroke();
        
        bolt.branches.forEach(branch => {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(200, 230, 255, ${opacity * 0.8})`;
          ctx.lineWidth = branch.width;
          ctx.moveTo(branch.x1, branch.y1);
          ctx.lineTo(branch.x2, branch.y2);
          ctx.stroke();
        });
        
        ctx.beginPath();
        ctx.arc(bolt.endX, bolt.endY, 15, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(bolt.endX, bolt.endY, 0, bolt.endX, bolt.endY, 15);
        gradient.addColorStop(0, `rgba(200, 230, 255, ${opacity * 0.7})`);
        gradient.addColorStop(1, 'rgba(200, 230, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.fill();
      });
      
      // Increased lightning frequency
      if (Math.random() < 0.015) {
        createLightning();
      }
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.7; // Increased header height
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(26, 31, 44, 0.8)');
      gradient.addColorStop(1, 'rgba(44, 51, 66, 0.6)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Enhanced nebula effect
      for (let i = 0; i < 5; i++) { // Increased number of nebulae
        const centerX = canvas.width * (0.1 + i * 0.2);
        const centerY = canvas.height * (0.2 + (i % 2) * 0.4);
        const radius = canvas.width * 0.18;
        
        const nebulaGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, radius
        );
        
        if (i % 3 === 0) {
          nebulaGradient.addColorStop(0, 'rgba(139, 92, 246, 0.07)');
          nebulaGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        } else if (i % 3 === 1) {
          nebulaGradient.addColorStop(0, 'rgba(30, 174, 219, 0.05)');
          nebulaGradient.addColorStop(1, 'rgba(30, 174, 219, 0)');
        } else {
          nebulaGradient.addColorStop(0, 'rgba(217, 70, 239, 0.06)');
          nebulaGradient.addColorStop(1, 'rgba(217, 70, 239, 0)');
        }
        
        ctx.fillStyle = nebulaGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      starsRef.current.forEach(star => {
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed) * 0.4 + 0.6;
        
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity * twinkle;
        
        if (star.size > 1.8) {
          const size = star.size * 1.2;
          ctx.beginPath();
          ctx.moveTo(star.x - size, star.y);
          ctx.lineTo(star.x + size, star.y);
          ctx.moveTo(star.x, star.y - size);
          ctx.lineTo(star.x, star.y + size);
          ctx.lineWidth = star.size * 0.6;
          ctx.strokeStyle = star.color;
          ctx.stroke();
          
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          
          const glow = ctx.createRadialGradient(
            star.x, star.y, 0, 
            star.x, star.y, star.size * 3
          );
          glow.addColorStop(0, `rgba(255, 255, 255, ${star.opacity * twinkle * 0.2})`);
          glow.addColorStop(1, 'rgba(255, 255, 255, 0)');
          ctx.fillStyle = glow;
          ctx.fill();
        } else {
          ctx.arc(star.x, star.y, star.size * twinkle, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.globalAlpha = 1;
        
        star.y += star.speed;
        
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      updateLightning();
      
      // Enhanced shooting star effect with increased frequency
      if (Math.random() < 0.04) {
        const shootingStar = {
          x: Math.random() * canvas.width,
          y: 0,
          length: Math.random() * 60 + 40,
          speed: Math.random() * 15 + 10,
          angle: Math.PI / 4 + (Math.random() * Math.PI / 6)
        };
        
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.lineWidth = 2.5;
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(
          shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length
        );
        ctx.stroke();
        
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          shootingStar.x + Math.cos(shootingStar.angle) * shootingStar.length,
          shootingStar.y + Math.sin(shootingStar.angle) * shootingStar.length
        );
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 5;
        ctx.stroke();
      }
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      style={{ 
        background: 'linear-gradient(to bottom, #0C0E15, #1A1F2C)',
        cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32' fill='none' stroke='white'><path d='M16 2 C 14 4, 10 8, 16 16 C 22 8, 18 4, 16 2 Z M16 16 C 8 22, 4 18, 2 16 C 4 14, 8 10, 16 16 Z M16 16 C 24 10, 28 14, 30 16 C 28 18, 24 22, 16 16 Z M16 16 C 8 10, 12 6, 16 4 C 18 6, 22 10, 16 16 Z' stroke-width='1.5'/></svg>") 16 16, auto`
      }}
    />
  );
};

export default GalaxyAnimation;
