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
    <div className="relative w-full overflow-x-hidden max-w-[100vw]" style={{ overflowX: 'hidden', maxWidth: '100vw', boxSizing: 'border-box' }}>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#001f54] z-0">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="stars-container">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full bg-white" 
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.8 + 0.2,
                    animation: `pulse-glow ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Service Slider */}
        <div className="relative z-10 h-full w-full overflow-hidden">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="absolute inset-0 h-full w-full transition-all duration-1000 overflow-hidden"
              style={{ 
                opacity: currentSlide === index ? 1 : 0,
                visibility: currentSlide === index ? 'visible' : 'hidden',
                zIndex: currentSlide === index ? 20 : 10
              }}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-10 w-full overflow-hidden">
                <div className={`absolute inset-0 ${service.backgroundOverlay} z-20`}></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    width: '100%',
                    maxWidth: '100%',
                    transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
                    animation: currentSlide === index ? 'image-scale 15s ease-in-out alternate infinite' : 'none'
                  }}
                />
              </div>
              
              {/* Content Area */}
              <div className="absolute inset-0 z-20 flex items-center overflow-hidden">
                <div className="container mx-auto px-4 overflow-hidden">
                  <div className="max-w-4xl mx-auto md:mx-0 overflow-hidden">
                    {currentSlide === index && (
                      <>
                        <div 
                          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 md:mb-8"
                          data-aos="fade-down" 
                          data-aos-delay="300"
                        >
                          {service.icon}
                          <span className="ml-2 text-white text-sm font-medium">{service.title}</span>
                        </div>
                        
                        <h1 
                          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white"
                          data-aos="fade-up" 
                          data-aos-delay="400"
                        >
                          {service.headline.split(service.highlight).map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="text-[#33C3F0]">
                                  {service.highlight}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </h1>
                        
                        <p 
                          className="text-base md:text-xl text-white/80 mb-6 md:mb-8 max-w-full"
                          data-aos="fade-up" 
                          data-aos-delay="500"
                        >
                          {service.description}
                        </p>
                        
                        <div 
                          className="flex flex-wrap gap-3 md:gap-4"
                          data-aos="fade-up" 
                          data-aos-delay="600"
                        >
                          <Link to={service.link}>
                            <Button 
                              className={`bg-gradient-to-r ${service.color} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base`}
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </Button>
                          </Link>
                          <Button 
                            onClick={scrollToServices}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-sm sm:text-base"
                          >
                            Explore Services
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Visual elements specific to each slide */}
              {currentSlide === index && (
                <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                  {service.id === 'fiber-internet' && (
                    <div className="absolute bottom-20 right-5 md:right-20 lg:right-40 w-32 h-32 md:w-64 md:h-64 opacity-0 md:opacity-100 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <div className="w-full h-full border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                    </div>
                  )}
                  
                  {service.id === 'cloud-services' && (
                    <div className="absolute top-20 left-5 md:left-20 lg:left-40 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <Cloud className="w-16 h-16 md:w-32 md:h-32 text-white" />
                      <Cloud className="w-12 h-12 md:w-24 md:h-24 text-white absolute top-16 left-16" style={{ animationDelay: '1s' }} />
                      <Cloud className="hidden md:block w-16 h-16 text-white absolute top-10 left-32" style={{ animationDelay: '2s' }} />
                    </div>
                  )}
                  
                  {service.id === 'cybersecurity' && (
                    <div className="absolute top-1/4 right-5 md:right-20 lg:right-40 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                      <ShieldCheck className="w-20 h-20 md:w-40 md:h-40 text-white" />
                      <Lock className="w-12 h-12 md:w-24 md:h-24 text-white absolute -bottom-4 right-4" style={{ animationDelay: '1.5s' }} />
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
          
          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center">
            <div className="flex space-x-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'bg-white scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;