
import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface Orbit {
  centerX: number;
  centerY: number;
  radius: number;
  particles: {
    angle: number;
    speed: number;
    size: number;
    color: string;
    opacity: number;
  }[];
}

const EnhancedGalaxyAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const orbitsRef = useRef<Orbit[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Define functions before using them
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
    
    const createOrbits = () => {
      const orbitCount = 3;
      const orbits: Orbit[] = [];
      const orbitColors = ['#1EAEDB', '#8B5CF6', '#D946EF'];
      
      // Create orbits
      for (let i = 0; i < orbitCount; i++) {
        const centerX = canvas.width / 2 + (Math.random() * 200 - 100);
        const centerY = canvas.height / 2 + (Math.random() * 100 - 50);
        const radius = 70 + i * 40 + Math.random() * 20;
        
        const particles = [];
        const particleCount = 30 + Math.floor(radius / 2);
        
        for (let j = 0; j < particleCount; j++) {
          particles.push({
            angle: (Math.PI * 2 / particleCount) * j,
            speed: 0.002 + Math.random() * 0.002,
            size: Math.random() * 2 + 1,
            color: orbitColors[i % orbitColors.length],
            opacity: 0.5 + Math.random() * 0.5
          });
        }
        
        orbits.push({
          centerX,
          centerY,
          radius,
          particles
        });
      }
      
      orbitsRef.current = orbits;
    };
    
    const initializeAnimation = () => {
      createStars();
      createOrbits();
    };
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 0.6;
      initializeAnimation();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize size
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background stars
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
      
      // Draw orbital particles
      orbitsRef.current.forEach(orbit => {
        // Optional: Draw orbit path (subtle)
        ctx.beginPath();
        ctx.strokeStyle = '#ffffff';
        ctx.globalAlpha = 0.05;
        ctx.arc(orbit.centerX, orbit.centerY, orbit.radius, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw particles on the orbit
        orbit.particles.forEach(particle => {
          ctx.beginPath();
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity;
          
          // Calculate position based on angle and radius
          const x = orbit.centerX + Math.cos(particle.angle) * orbit.radius;
          const y = orbit.centerY + Math.sin(particle.angle) * orbit.radius;
          
          // Draw the particle
          ctx.arc(x, y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          
          // Update particle angle for next frame
          particle.angle += particle.speed;
          
          // Add slight variation to opacity for twinkling effect
          particle.opacity = 0.5 + Math.sin(Date.now() * 0.001 + particle.angle * 5) * 0.3;
        });
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

export default EnhancedGalaxyAnimation;
