
import React, { useEffect, useRef } from 'react';

const LogoAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animateLogo = async () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear any existing content
      container.innerHTML = '';

      // Logo text elements
      const logoText = "GALAXY ITT";
      const letterElements: HTMLSpanElement[] = [];

      // Create container for the letters
      const textContainer = document.createElement('div');
      textContainer.className = "flex items-center justify-center relative";
      textContainer.style.height = "100%";
      container.appendChild(textContainer);

      // Create individual letter elements with random initial positions
      for (let i = 0; i < logoText.length; i++) {
        const letter = document.createElement('span');
        const char = logoText[i];
        
        // Add space class for the space character
        if (char === " ") {
          letter.innerHTML = "&nbsp;";
          letter.className = "mx-2"; // Add spacing for the space between words
        } else {
          letter.textContent = char;
          letter.className = "text-5xl md:text-7xl font-bold text-white";
        }

        // Initial state - hide letters offscreen with random positions
        letter.style.opacity = "0";
        letter.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0.5)`;
        letter.style.textShadow = "0 0 15px rgba(30, 174, 219, 0.8), 0 0 30px rgba(139, 92, 246, 0.5)";
        letter.style.transition = "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)";
        letter.style.position = "relative";
        
        textContainer.appendChild(letter);
        letterElements.push(letter);
      }

      // Animate letters one by one
      for (let i = 0; i < letterElements.length; i++) {
        await new Promise<void>(resolve => {
          setTimeout(() => {
            const letter = letterElements[i];
            
            // Move to final position
            letter.style.opacity = "1";
            letter.style.transform = "translate(0, 0) scale(1)";
            
            // Add specific color based on position
            if (i < 6) { // GALAXY
              letter.style.color = i % 2 === 0 ? "#1EAEDB" : "#33C3F0";
            } else if (i > 6) { // ITT
              letter.style.color = i % 2 === 0 ? "#8B5CF6" : "#D946EF";
            }
            
            resolve();
          }, 150 * i); // Staggered timing
        });
      }

      // Final animation to bring letters closer together
      await new Promise<void>(resolve => {
        setTimeout(() => {
          textContainer.style.transition = "letter-spacing 1s ease";
          textContainer.style.letterSpacing = "-0.02em";
          resolve();
        }, 500);
      });

      // Add the glow effect after all letters are placed
      const glowEffect = document.createElement('div');
      glowEffect.className = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full";
      glowEffect.style.background = "radial-gradient(circle, rgba(30, 174, 219, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, transparent 70%)";
      glowEffect.style.filter = "blur(20px)";
      glowEffect.style.zIndex = "-1";
      
      container.appendChild(glowEffect);

      // Start subtle hover animation
      letterElements.forEach((letter, index) => {
        const delay = index * 0.2;
        letter.style.animation = `float 3s ease-in-out ${delay}s infinite alternate`;
      });

      // Add keyframe for floating animation
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = `
        @keyframes float {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-5px); }
        }
      `;
      document.head.appendChild(styleSheet);
    };

    // Run animation
    animateLogo();

  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-32 md:h-40 flex items-center justify-center mb-6"
      aria-label="Galaxy ITT Logo"
    ></div>
  );
};

export default LogoAnimation;
