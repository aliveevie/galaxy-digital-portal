import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cloud, ShieldCheck, Lock, Wifi, Building2, Smartphone, Network, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
 
 // Hero slides data for services showcase
 const services = [
  {
    id: 'fiber-internet',
    title: 'Fiber Internet',
    headline: 'Internet Faster Than The Speed of Light',
    description: 'Experience lightning-fast connectivity with our premium fiber optic networks, enabling seamless operations for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-r from-[#0a1128]/90 via-[#001f54]/70 to-transparent',
    icon: <Wifi className="h-6 w-6" />,
    color: 'from-blue-600 to-cyan-400',
    highlight: '10 Gbps',
    link: '#',
    position: 'left',
    particles: 'data-fiber-lines',
    textAnimation: 'typing-effect'
  },
  {
    id: 'business-connectivity',
    title: 'Business Solutions',
    headline: 'Enterprise-Grade Connectivity',
    description: 'Tailored connectivity solutions for businesses of all sizes, with dedicated support, guaranteed SLAs, and scalable bandwidth options.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-b from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
    icon: <Building2 className="h-6 w-6" />,
    color: 'from-indigo-600 to-purple-500',
    highlight: 'Enterprise',
    link: '#',
    position: 'center',
    particles: 'data-grid',
    textAnimation: 'zoom-in'
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    headline: 'Seamless Cloud Integration',
    description: 'Secure and reliable cloud solutions that optimize your operations, reduce costs, and accelerate your digital transformation journey.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-l from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
    icon: <Cloud className="h-6 w-6" />,
    color: 'from-sky-500 to-blue-600',
    highlight: 'Scalable',
    link: '#',
    position: 'right',
    particles: 'data-waves',
    textAnimation: 'slide-in-right'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    headline: 'Advanced Threat Protection',
    description: 'Comprehensive security solutions to protect your critical data and infrastructure from evolving cyber threats and vulnerabilities.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-tr from-[#0a1128]/90 via-[#001f54]/70 to-transparent',
    icon: <ShieldCheck className="h-6 w-6" />,
    color: 'from-emerald-500 to-green-600',
    highlight: 'Secured',
    link: '#',
    position: 'left',
    particles: 'data-shield',
    textAnimation: 'fade-in-up'
  },
  {
    id: 'mobile-solutions',
    title: 'Mobile Solutions',
    headline: 'Connectivity On The Go',
    description: 'Stay connected wherever you go with our high-speed mobile data plans, international roaming, and IoT connectivity solutions.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-tl from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
    icon: <Smartphone className="h-6 w-6" />,
    color: 'from-pink-500 to-rose-500',
    highlight: 'Unlimited',
    link: '#',
    position: 'center',
    particles: 'data-circles',
    textAnimation: 'bounce-in'
  },
  // NEW SLIDE
  {
    id: 'enterprise-networking',
    title: 'Enterprise Networking',
    headline: 'Power Your Business Infrastructure',
    description: 'State-of-the-art networking solutions designed for enterprise-level performance, reliability, and security.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-br from-[#0a1128]/85 via-[#001f54]/65 to-transparent',
    icon: <Network className="h-6 w-6" />,
    color: 'from-violet-500 to-purple-600',
    highlight: 'Enterprise',
    link: '#',
    position: 'right',
    particles: 'data-grid',
    textAnimation: 'fade-in-up'
  },
  // NEW SLIDE
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    headline: 'Turn Data Into Business Insights',
    description: 'Advanced analytics platforms that help you make data-driven decisions and gain competitive advantage in your industry.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    backgroundOverlay: 'bg-gradient-to-t from-[#0a1128]/90 via-[#001f54]/70 to-transparent',
    icon: <Sparkles className="h-6 w-6" />,
    color: 'from-amber-500 to-orange-600',
    highlight: 'Intelligent',
    link: '#',
    position: 'left',
    particles: 'data-dots',
    textAnimation: 'zoom-in'
  }
];
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);
  
  // Function to scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add a style to remove any horizontal lines
  useEffect(() => {
    // Create a style element
    const styleEl = document.createElement('style');
    // Add CSS to forcefully remove horizontal lines and overflow
    styleEl.textContent = `
      body, html {
        overflow-x: hidden !important;
        width: 100% !important;
        max-width: 100% !important;
        position: relative !important;
      }
      * {
        box-sizing: border-box !important;
      }
      hr, [role="separator"] {
        display: none !important;
      }
    `;
    // Append to document head
    document.head.appendChild(styleEl);
    
    // Cleanup
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <div
      className="relative w-full"
      style={{ 
        height: '100vh',
        minHeight: '100vh',
        marginTop: '-80px',
        paddingTop: '80px',
        overflow: 'hidden'
      }}
    >
      {/* Main slider container */}
      <div className="relative h-full w-full">
        {services.map((service, index) => (
          <div 
            key={service.id} 
            className="absolute inset-0 h-full w-full transition-opacity duration-1000"
            style={{ 
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 1 : 0,
            }}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
              <div className={`absolute inset-0 ${service.backgroundOverlay} z-10`}></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
                style={{
                  animation: currentSlide === index ? 'heroImageAnimation 4s ease-out forwards' : 'none'
                }}
              />
            </div>
            
            {/* Content Container - Adjust padding top to account for header */}
            <div className="absolute inset-0 z-20 flex items-center" style={{ paddingTop: '80px' }}>
              <div className="container mx-auto px-4 lg:px-10">
                <div className="max-w-2xl">
                  {/* Service title tag */}
                  <div 
                    className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur rounded-md mb-4"
                    style={{
                      animation: currentSlide === index ? 'fadeInDown 0.5s ease-out forwards' : 'none',
                      opacity: 0,
                      animationDelay: '0.2s'
                    }}
                  >
                    {service.icon}
                    <span className="ml-2 text-white font-medium">{service.title}</span>
                  </div>
                  
                  {/* Main heading */}
                  <h1 
                    className="text-4xl lg:text-5xl font-bold text-white mb-6"
                    style={{
                      animation: currentSlide === index ? 'fadeInUp 0.7s ease-out forwards' : 'none',
                      opacity: 0,
                      animationDelay: '0.3s'
                    }}
                  >
                    {service.headline}
                  </h1>
                  
                  {/* Description */}
                  <p 
                    className="text-lg text-white/80 mb-8 max-w-xl"
                    style={{
                      animation: currentSlide === index ? 'fadeInUp 0.7s ease-out forwards' : 'none',
                      opacity: 0,
                      animationDelay: '0.4s'
                    }}
                  >
                    {service.description}
                  </p>
                  
                  {/* Call to action buttons */}
                  <div 
                    className="flex space-x-4"
                    style={{
                      animation: currentSlide === index ? 'fadeInUp 0.7s ease-out forwards' : 'none',
                      opacity: 0,
                      animationDelay: '0.5s'
                    }}
                  >
                    <Button className="bg-[#1f8734] hover:bg-[#166d27] text-white shadow-lg">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                      Explore Services
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide indicator and service info */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center">
          <div className="text-5xl font-light text-[#1f8734] mr-4">
            {String(currentSlide + 1).padStart(2, '0')}
          </div>
          <div className="text-white text-xl border-l border-white/30 pl-4">
            {services[currentSlide].title}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="absolute bottom-8 left-8 z-30 flex space-x-3">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % services.length)}
            className="h-10 w-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      </div>
      
      {/* Custom CSS animations */}
      <style>{`
        @keyframes heroImageAnimation {
          0% { transform: scale(1.1); opacity: 0.6; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        /* Fix for white space issue */
        html, body, #root {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          max-width: 100vw;
        }
        
        .hero-section {
          height: 100vh;
          max-height: 100vh;
          position: relative;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;