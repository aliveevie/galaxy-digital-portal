
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

const GalaxyAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Define createStars function before using it
    const createStars = () => {
      const starCount = Math.floor((canvas.width * canvas.height) / 3000);
      const stars: Star[] = [];
      
      const starColors = ['#ffffff', '#1EAEDB', '#33C3F0', '#8B5CF6', '#D946EF'];
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.2 + 0.1,
          opacity: Math.random() * 0.5 + 0.5,
          color: starColors[Math.floor(Math.random() * starColors.length)]
        });
      }
      
      starsRef.current = stars;
    };
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
      createStars();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize size
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      starsRef.current.forEach(star => {
        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.opacity;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Move star
        star.y += star.speed;
        
        // Reset star position when it goes out of canvas
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      
      // Add subtle pulse effect to some stars
      starsRef.current.forEach((star, index) => {
        if (index % 20 === 0) { // Only apply to some stars
          star.opacity = 0.3 + Math.sin(Date.now() * 0.001 + index) * 0.3;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full object-cover"
      style={{ background: 'linear-gradient(to bottom, #0C0E15, #1A1F2C)' }}
    />
  );
};

export default GalaxyAnimation;
