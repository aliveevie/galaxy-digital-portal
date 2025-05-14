import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    src: '/hero-images/network-infrastructure.jpg',
    alt: 'Network Infrastructure',
    caption: 'Advanced Network Solutions'
  },
  {
    src: '/hero-images/cloud-computing.jpg',
    alt: 'Cloud Computing',
    caption: 'Secure Cloud Services'
  },
  {
    src: '/hero-images/cybersecurity.jpg',
    alt: 'Cybersecurity',
    caption: 'Comprehensive Security'
  },
  {
    src: '/hero-images/software-development.jpg',
    alt: 'Software Development',
    caption: 'Custom Software Solutions'
  },
  {
    src: '/hero-images/digital-transformation.jpg',
    alt: 'Digital Transformation',
    caption: 'Digital Transformation'
  }
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Auto-rotate images when not hovered
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered]);
  
  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 800 800">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 0 L40 0 L40 40 L0 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content */}
          <div className="w-full lg:w-1/2 text-white mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital Solutions for a Connected World
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100 max-w-xl">
              Galaxy Digital Portal provides reliable internet services, telecommunications, and innovative software solutions to drive digital transformation across sub-Saharan Africa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/services" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors font-medium"
              >
                Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors border border-blue-400 font-medium"
              >
                Contact Us
              </a>
            </div>
            
            {/* Feature highlights */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
              {['Reliable Connectivity', 'IT Consulting', 'Cloud Solutions', 'Cybersecurity', 'Software Development', 'Network Installation'].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-blue-300 mr-2"></div>
                  <span className="text-sm md:text-base text-blue-100">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image showcase */}
          <div 
            className="w-full lg:w-1/2 relative h-80 md:h-96 lg:h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl">
              {/* Images */}
              {images.map((image, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    currentImageIndex === index && !isHovered 
                      ? 'opacity-100' 
                      : 'opacity-0'
                  }`}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-4">
                    <p className="text-white font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
              
              {/* Hover state - show all images in a grid */}
              {isHovered && (
                <div className="absolute inset-0 bg-blue-900/90 p-4 grid grid-cols-2 gap-2 overflow-y-auto">
                  {images.map((image, index) => (
                    <div key={index} className="relative rounded overflow-hidden group">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-blue-800/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <p className="text-white text-center font-medium px-2">{image.caption}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-300 rounded-full opacity-30"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 bg-white rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
