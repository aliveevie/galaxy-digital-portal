
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  description: string;
  showLogo?: boolean;
  showButton?: boolean;
  buttonText?: string;
  buttonLink?: string;
}

const HeroSection = ({
  title,
  description,
  showLogo = true,
  showButton = false,
  buttonText = "Our Services",
  buttonLink = "/#services"
}: HeroSectionProps) => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
      <div className="relative z-10 text-center px-4">
        {showLogo && (
          <div className="flex justify-center mb-6 mt-24">
            <img 
              src="/lovable-uploads/67b936c0-aa3a-4b93-a661-a3a44fe17e3d.png"
              alt="Galaxy ITT Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
          {title}
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          {description}
        </p>
        {showButton && (
          <div className="flex justify-center">
            <Button 
              asChild
              className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-12 py-7 text-xl
                bg-opacity-70 backdrop-blur-sm rounded-xl
                before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                after:content-[''] after:absolute after:inset-0 
                after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                border border-[#33C3F0]/30"
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
