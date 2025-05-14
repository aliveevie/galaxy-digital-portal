import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, Globe, Navigation, Sparkles, CheckCircle, ShieldCheck, 
  Clock, Trophy, Wifi, Network, Server, Cloud, Lock, Users, 
  Mail, Bell, ArrowRight, ChevronRight, ChevronLeft, Smartphone, 
  Laptop, Building2, MessageCircle, X, Send, Headphones, User,
  Cookie, Info
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Index = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({ years: 0, projects: 0, team: 0, networkSpeed: 0 });
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeService, setActiveService] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showChatButton, setShowChatButton] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'agent', text: string}[]>([
    {type: 'agent', text: 'Hello! Welcome to Galaxy Digital Portal. How can I help you today?'}
  ]);
  // Cookie consent state
  const [cookieConsent, setCookieConsent] = useState<'pending' | 'accepted' | 'rejected'>('pending');
  
  // Force cookie consent to show for testing
  useEffect(() => {
    localStorage.removeItem('cookieConsent');
  }, []);
  
  // Refs for service sections
  const itConsultingRef = useRef<HTMLDivElement>(null);
  const cloudSolutionsRef = useRef<HTMLDivElement>(null);
  const softwareDevelopmentRef = useRef<HTMLDivElement>(null);
  const cybersecurityRef = useRef<HTMLDivElement>(null);
  const itInfrastructureRef = useRef<HTMLDivElement>(null);
  const networkInstallationsRef = useRef<HTMLDivElement>(null);
  
  // Partners data
  const partners = [
    {
      name: "Jigawa State Government",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Coat_of_arms_of_Jigawa_State.png/800px-Coat_of_arms_of_Jigawa_State.png",
      website: "https://jigawastate.gov.ng/"
    },
    {
      name: "NITDA",
      logo: "https://nitda.gov.ng/wp-content/uploads/2020/11/NITDA-Logo.png",
      website: "https://nitda.gov.ng/"
    },
    {
      name: "NCC",
      logo: "https://www.ncc.gov.ng/images/NCC-Logo.png",
      website: "https://www.ncc.gov.ng/"
    },
    {
      name: "Ministry of Communications and Digital Economy",
      logo: "https://www.commtech.gov.ng/wp-content/uploads/2023/06/FMoCDE-Logo.png",
      website: "https://www.commtech.gov.ng/"
    }
  ];
  
  // Hero slides data for services showcase
  const services = [
    {
      id: 'fiber-internet',
      title: 'Fiber Internet',
      headline: 'Internet Faster Than The Speed of Light',
      description: 'Experience lightning-fast connectivity with our premium fiber optic',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundOverlay: 'bg-gradient-to-r from-[#0a1128]/90 via-[#001f54]/70 to-transparent',
      icon: <Wifi className="h-6 w-6" />,
      color: 'from-blue-600 to-cyan-400',
      highlight: '10 Gbps',
      link: '#',
      position: 'left', // Text position
      particles: 'data-fiber-lines', // Particle effect class
      textAnimation: 'typing-effect' // Text animation style
    },
    {
      id: 'business-connectivity',
      title: 'Business Solutions',
      headline: 'Enterprise-Grade Connectivity',
      description: 'Tailored connectivity solutions for businesses of all sizes, with dedicated support, guaranteed SLAs, and scalable bandwidth options.',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundOverlay: 'bg-gradient-to-b from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-indigo-600 to-purple-500',
      highlight: 'Enterprise',
      link: '#',
      position: 'center', // Text position
      particles: 'data-grid', // Particle effect class
      textAnimation: 'zoom-in' // Text animation style
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      headline: 'Seamless Cloud Integration',
      description: 'Secure and reliable cloud solutions that optimize your operations, reduce costs, and accelerate your digital transformation journey.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundOverlay: 'bg-gradient-to-l from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
      icon: <Cloud className="h-6 w-6" />,
      color: 'from-sky-500 to-blue-600',
      highlight: 'Scalable',
      link: '#',
      position: 'right', // Text position
      particles: 'data-waves', // Particle effect class
      textAnimation: 'slide-in-right' // Text animation style
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      headline: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect your critical data and infrastructure from evolving cyber threats and vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundOverlay: 'bg-gradient-to-tr from-[#0a1128]/90 via-[#001f54]/70 to-transparent',
      icon: <ShieldCheck className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-600',
      highlight: 'Secured',
      link: '#',
      position: 'left', // Text position
      particles: 'data-shield', // Particle effect class
      textAnimation: 'fade-in-up' // Text animation style
    },
    {
      id: 'mobile-solutions',
      title: 'Mobile Solutions',
      headline: 'Connectivity On The Go',
      description: 'Stay connected wherever you go with our high-speed mobile data plans, international roaming, and IoT connectivity solutions.',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      backgroundOverlay: 'bg-gradient-to-tl from-[#0a1128]/80 via-[#001f54]/60 to-transparent',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-pink-500 to-rose-500',
      highlight: 'Unlimited',
      link: '#',
      position: 'center', // Text position
      particles: 'data-circles', // Particle effect class
      textAnimation: 'bounce-in' // Text animation style
    }
  ];

  // Email validation function
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle newsletter subscription
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isValidEmail(email)) {
      setSubscriptionStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Simulating API call
    setSubscriptionStatus('success');
    setEmail('');
    setTimeout(() => setSubscriptionStatus('idle'), 3000);
  };
  
  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [services.length]);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out',
      once: false,
      mirror: true,
      anchorPlacement: 'top-bottom',
    });

    window.addEventListener('load', () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener('load', () => {
        AOS.refresh();
      });
    };
  }, []);

  useEffect(() => {
    const startCounting = (entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        
        // Animate years count
        let yearsCount = 0;
        const yearsInterval = setInterval(() => {
          yearsCount++;
          setCounts(prev => ({ ...prev, years: yearsCount }));
          if (yearsCount >= 10) clearInterval(yearsInterval);
        }, 100);

        // Animate projects count
        let projectsCount = 0;
        const projectsInterval = setInterval(() => {
          projectsCount += 5;
          setCounts(prev => ({ ...prev, projects: projectsCount }));
          if (projectsCount >= 200) clearInterval(projectsInterval);
        }, 50);

        // Animate team count
        let teamCount = 0;
        const teamInterval = setInterval(() => {
          teamCount++;
          setCounts(prev => ({ ...prev, team: teamCount }));
          if (teamCount >= 50) clearInterval(teamInterval);
        }, 60);

        // Animate network speed count
        let networkSpeedCount = 0;
        const networkSpeedInterval = setInterval(() => {
          networkSpeedCount++;
          setCounts(prev => ({ ...prev, networkSpeed: networkSpeedCount }));
          if (networkSpeedCount >= 99.99) clearInterval(networkSpeedInterval);
        }, 10);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(startCounting),
      { threshold: 0.5 }
    );

    const statsSection = document.querySelector('#stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('expert-services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Show chat button on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowChatButton(true);
      } else {
        setShowChatButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle sending chat messages
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatMessage.trim()) return;
    
    // Add user message
    setChatMessages([...chatMessages, {type: 'user', text: chatMessage}]);
    
    // Simulate agent response
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev, 
        {
          type: 'agent', 
          text: "Thank you for your message. One of our support agents will respond shortly. Is there anything else I can help you with?"
        }
      ]);
    }, 1000);
    
    setChatMessage('');
  };

  useEffect(() => {
    // Add custom animation styles to head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-in-left {
        0% { transform: translateX(-100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes slide-in-right {
        0% { transform: translateX(100px); opacity: 0; }
        100% { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes zoom-in {
        0% { transform: scale(0.8); opacity: 0; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes bounce-in {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); opacity: 0.8; }
        70% { transform: scale(0.9); opacity: 0.9; }
        100% { transform: scale(1); opacity: 1; }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse-glow {
        0% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
        70% { box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
        100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
      }
      
      @keyframes text-glow {
        0% { text-shadow: 0 0 5px rgba(77, 213, 255, 0.5), 0 0 10px rgba(77, 213, 255, 0.3); }
        50% { text-shadow: 0 0 20px rgba(77, 213, 255, 0.8), 0 0 30px rgba(77, 213, 255, 0.5), 0 0 40px rgba(77, 213, 255, 0.3); }
        100% { text-shadow: 0 0 5px rgba(77, 213, 255, 0.5), 0 0 10px rgba(77, 213, 255, 0.3); }
      }
      
      @keyframes fiber-line-animation {
        0% { transform: translateX(-100%) scaleY(0.5); opacity: 0.3; }
        50% { transform: translateX(0%) scaleY(1); opacity: 0.7; }
        100% { transform: translateX(100%) scaleY(0.5); opacity: 0.3; }
      }
      
      @keyframes typing {
        from { width: 0 }
        to { width: 100% }
      }
      
      @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: rgba(255, 255, 255, 0.75) }
      }
      
      /* New animations for services section */
      @keyframes service-fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      @keyframes service-fade-out {
        0% { opacity: 1; }
        100% { opacity: 0; }
      }
      
      @keyframes image-scale {
        0% { transform: scale(1); }
        100% { transform: scale(1.05); }
      }
      
      @keyframes content-fade-in {
        0% { opacity: 0; transform: translateY(20px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      .particle {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.2);
        pointer-events: none;
      }
      
      [data-dots] {
        position: relative;
      }
      
      [data-dots]::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 20px 20px;
        opacity: 0.5;
      }
      
      [data-fiber-lines] {
        position: relative;
        overflow: hidden;
      }
      
      [data-fiber-lines]::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: 
          linear-gradient(90deg, rgba(77, 213, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(77, 213, 255, 0.05) 1px, transparent 1px);
        background-size: 20px 20px, 10px 10px;
        opacity: 0.3;
      }
      
      .fiber-line {
        position: absolute;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(77, 213, 255, 0.7), transparent);
        animation: fiber-line-animation 3s linear infinite;
      }
      
      .slide-in-left { animation: slide-in-left 0.8s ease forwards; }
      .slide-in-right { animation: slide-in-right 0.8s ease forwards; }
      .zoom-in { animation: zoom-in 0.8s ease forwards; }
      .fade-in-up { animation: fade-in-up 0.8s ease forwards; }
      .bounce-in { animation: bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
      .float { animation: float 6s ease-in-out infinite; }
      .pulse-glow { animation: pulse-glow 2s infinite; }
      .text-glow { animation: text-glow 3s infinite; }
      
      /* New service section styles */
      .service-fade-in { animation: service-fade-in 0.5s ease-in forwards; }
      .service-fade-out { animation: service-fade-out 0.5s ease-out forwards; }
      .service-content-fade-in { animation: content-fade-in 0.6s ease-out forwards; }
      
      .service-image-container {
        overflow: hidden;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        position: relative;
      }
      
      .service-image {
        width: 100%;
        height: 350px;
        object-fit: cover;
        transition: transform 0.6s ease;
      }
      
      .service-image-container:hover .service-image {
        transform: scale(1.05);
      }
      
      .service-image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
        opacity: 0.8;
        transition: opacity 0.3s ease;
      }
      
      .service-image-container:hover .service-image-overlay {
        opacity: 0.6;
      }
      
      .typing-effect {
        display: inline-block;
        overflow: hidden;
        white-space: nowrap;
        animation: 
          typing 3.5s steps(40, end) forwards,
          blink-caret .75s step-end 8;
      }
      
      .typing-container {
        display: inline-block;
        border-right: 3px solid rgba(255, 255, 255, 0.75);
      }
      
      @keyframes fade-in-up {
        0% { opacity: 0; transform: translateY(30px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes fade-in {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      
      @keyframes image-scale {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out forwards;
      }
      
      .animate-fade-in {
        animation: fade-in 1s ease-out forwards;
      }
      
      /* Add this to your existing styles */
      .transition-3000 {
        transition-duration: 3000ms;
      }
    `;
    document.head.appendChild(style);
    
    // Create particle effects
    const createParticles = () => {
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;
      
      // Clear existing particles
      const existingParticles = document.querySelectorAll('.particle');
      existingParticles.forEach(p => p.remove());
      
      // Create new particles
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position, size and opacity
        const size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        // Random animation
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        heroSection.appendChild(particle);
      }
    };
    
    // Create fiber lines animation for the fiber internet slide
    const createFiberLines = () => {
      const fiberSlide = document.querySelector('[data-fiber-lines]');
      if (!fiberSlide) return;
      
      // Clear existing lines
      const existingLines = fiberSlide.querySelectorAll('.fiber-line');
      existingLines.forEach(line => line.remove());
      
      // Create new lines
      for (let i = 0; i < 15; i++) {
        const line = document.createElement('div');
        line.classList.add('fiber-line');
        
        // Random position and width
        const top = Math.random() * 100;
        const width = Math.random() * 100 + 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 2 + 2;
        
        line.style.top = `${top}%`;
        line.style.width = `${width}px`;
        line.style.animationDelay = `${delay}s`;
        line.style.animationDuration = `${duration}s`;
        
        fiberSlide.appendChild(line);
      }
    };
    
    createParticles();
    createFiberLines();
    
    window.addEventListener('resize', createParticles);
    window.addEventListener('resize', createFiberLines);
    
    // Re-create fiber lines when slide changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'style') {
          setTimeout(createFiberLines, 100);
        }
      });
    });
    
    const slider = document.querySelector('.hero-section .flex');
    if (slider) {
      observer.observe(slider, { attributes: true });
    }
    
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('resize', createParticles);
      window.removeEventListener('resize', createFiberLines);
      observer.disconnect();
    };
  }, []);

  // Handle cookie consent
  const handleCookieConsent = (consent: 'accepted' | 'rejected') => {
    setCookieConsent(consent);
    localStorage.setItem('cookieConsent', consent);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Modal */}
      {cookieConsent === 'pending' && (
        <div className="fixed bottom-6 right-6 z-50 bg-white shadow-lg rounded-lg border border-gray-200 p-4 max-w-sm">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-2">
              <Cookie className="h-5 w-5 text-[#33C3F0] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-base font-semibold text-[#1A1F2C] mb-1">Cookie Consent</h3>
                <p className="text-gray-600 text-sm">
                  We use cookies to enhance your browsing experience and analyze our traffic.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button 
                onClick={() => handleCookieConsent('rejected')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm py-1 px-3 h-auto"
                size="sm"
              >
                Reject
              </Button>
              <Button 
                onClick={() => handleCookieConsent('accepted')}
                className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white text-sm py-1 px-3 h-auto"
                size="sm"
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <Header />
      
      {/* Full-screen Hero Section with Service Showcase */}
      <div className="relative h-screen overflow-hidden hero-section">
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
        
        {/* Service Slider - Redesigned with fade transitions */}
        <div className="relative z-10 h-full">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`absolute inset-0 h-full transition-all duration-1000 ${service.particles}`}
              style={{ 
                opacity: currentSlide === index ? 1 : 0,
                visibility: currentSlide === index ? 'visible' : 'hidden',
                zIndex: currentSlide === index ? 20 : 10
              }}
            >
              {/* Background Image with Overlay - Full Screen */}
              <div className="absolute inset-0 z-10 overflow-hidden">
                <div className={`absolute inset-0 ${service.backgroundOverlay} z-20`}></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-3000 ease-in-out"
                  style={{ 
                    transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
                    animation: currentSlide === index ? 'image-scale 15s ease-in-out alternate infinite' : 'none'
                  }}
                />
              </div>
              
              {/* Content Container */}
              <div className="container mx-auto px-4 md:px-8 relative z-30 h-full flex items-center">
                <div 
                  className={`max-w-3xl ${
                    service.position === 'left' 
                      ? 'ml-0 mr-auto text-left' 
                      : service.position === 'right' 
                        ? 'mr-0 ml-auto text-right' 
                        : 'mx-auto text-center'
                  }`}
                >
                  {/* Text Content - With staggered reveal */}
                  <div className="text-white">
                    {currentSlide === index && (
                      <>
                        <div 
                          className={`inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 ${
                            service.position === 'center' ? 'mx-auto' : ''
                          } opacity-0 animate-fade-in-up`}
                          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
                        >
                          <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2 animate-pulse`}></span>
                          <span className="text-white text-sm font-medium flex items-center gap-2">
                            {service.icon}
                            {service.title}
                          </span>
                        </div>
                        
                        <h1 
                          className={`text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight opacity-0 animate-fade-in-up`}
                          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
                        >
                          <span className="text-white">{service.headline.split(' ').slice(0, -1).join(' ')} </span>
                          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>
                            {service.headline.split(' ').slice(-1)}
                          </span>
                        </h1>
                        
                        <p 
                          className="text-xl text-white/80 mb-8 max-w-xl opacity-0 animate-fade-in-up"
                          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
                        >
                          {service.description}
                        </p>
                        
                        <div 
                          className={`flex ${
                            service.position === 'right' ? 'justify-end' : service.position === 'center' ? 'justify-center' : 'justify-start'
                          } flex-wrap gap-4 opacity-0 animate-fade-in-up`}
                          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
                        >
                          <Link to={service.link}>
                            <Button 
                              className={`bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-base sm:text-lg`}
                            >
                              Learn More
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </Link>
                          <Button 
                            onClick={scrollToServices}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-all duration-300 text-base sm:text-lg"
                          >
                            Explore Services
                          </Button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                
                {/* Visual elements specific to each slide */}
                {currentSlide === index && (
                  <div className="absolute inset-0 z-20 pointer-events-none">
                    {service.id === 'fiber-internet' && (
                      <>
                        <div className="absolute bottom-20 right-10 md:right-20 lg:right-40 w-40 h-40 md:w-64 md:h-64 opacity-0 md:block animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                          <div className="w-full h-full border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 border-2 border-white/10 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
                        </div>
                      </>
                    )}
                    
                    {service.id === 'cloud-services' && (
                      <div className="absolute top-20 left-10 md:left-20 lg:left-40 opacity-0 md:block animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <Cloud className="w-20 h-20 md:w-32 md:h-32 text-white float" />
                        <Cloud className="w-16 h-16 md:w-24 md:h-24 text-white absolute top-20 left-20 float" style={{ animationDelay: '1s' }} />
                        <Cloud className="w-12 h-12 md:w-16 md:h-16 text-white absolute top-10 left-40 float" style={{ animationDelay: '2s' }} />
                      </div>
                    )}
                    
                    {service.id === 'cybersecurity' && (
                      <div className="absolute top-1/4 right-10 md:right-20 lg:right-40 opacity-0 md:block animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
                        <ShieldCheck className="w-24 h-24 md:w-40 md:h-40 text-white float" />
                        <Lock className="w-16 h-16 md:w-24 md:h-24 text-white absolute bottom-20 right-10 float" style={{ animationDelay: '1.5s' }} />
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center">
            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === currentSlide 
                      ? 'bg-white scale-125 pulse-glow' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Left Arrow Control */}
          <div className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30">
            <button
              onClick={prevSlide}
              className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
          
          {/* Right Arrow Control */}
          <div className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30">
            <button
              onClick={nextSlide}
              className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30 animate-bounce hidden md:block">
            <div className="flex flex-col items-center cursor-pointer" onClick={scrollToServices}>
              <span className="text-white/70 text-sm mb-2">Scroll Down</span>
              <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center p-1">
                <div className="w-1 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section - Now starts after the full-screen hero */}
      {/* <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
         
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('it-consulting');
                  itConsultingRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
                  title="IT Consulting"
                  description="Strategic technology guidance to optimize your business operations and drive innovation."
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('cloud-solutions');
                  cloudSolutionsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Globe className="h-8 w-8 text-[#33C3F0]" />}
                  title="Cloud Solutions"
                  description="Secure, scalable cloud infrastructure and migration services for modern businesses."
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('software-development');
                  softwareDevelopmentRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Navigation className="h-8 w-8 text-[#33C3F0]" />}
                  title="Software Development"
                  description="Custom software solutions designed to meet your unique business requirements."
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('cybersecurity');
                  cybersecurityRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
                  title="Cybersecurity"
                  description="Comprehensive security solutions to protect your critical data and infrastructure from evolving cyber threats and vulnerabilities."
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('it-infrastructure');
                  itInfrastructureRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
                  title="IT Infrastructure"
                  description="Robust infrastructure solutions designed for reliability and performance."
                />
              </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <div 
                className="block h-full cursor-pointer" 
                onClick={() => {
                  setActiveService('network-installations');
                  networkInstallationsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <ServiceCard 
                  icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
                  title="Network Installations"
                  description="Professional wired and wireless network setup and configuration."
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Detailed Service Sections */}
      <section id="expert-services" className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">

       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#33C3F0]"
              data-aos="fade-up">
           Core Services
          </h2>
        <div className="max-w-6xl mx-auto">
          {/* IT Consulting Section */}
          <div 
            ref={itConsultingRef} 
            id="it-consulting-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'it-consulting' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Rocket className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">IT Consulting</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Strategic Technology Guidance
                </h2>
                <p className="text-gray-600 mb-6">
                  Our IT consulting services provide expert guidance to help your business leverage technology effectively. 
                  We analyze your current systems, identify opportunities for improvement, and develop strategic roadmaps 
                  tailored to your specific business goals.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Technology strategy development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Digital transformation planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">IT infrastructure assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Technology vendor selection</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="IT Consulting Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Solutions Section */}
          <div 
            ref={cloudSolutionsRef} 
            id="cloud-solutions-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'cloud-solutions' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Cloud Solutions" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Cloud className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Cloud Solutions</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Scalable Cloud Infrastructure
                </h2>
                <p className="text-gray-600 mb-6">
                  Our cloud solutions provide secure, scalable infrastructure that grows with your business. 
                  We offer comprehensive cloud migration services, helping you transition smoothly to modern 
                  cloud platforms while ensuring data security and business continuity.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Cloud migration strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Hybrid cloud solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Cloud security implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Cloud cost optimization</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Software Development Section */}
          <div 
            ref={softwareDevelopmentRef} 
            id="software-development-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'software-development' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Navigation className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Software Development</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Custom Software Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our expert development team creates custom software solutions tailored to your unique business requirements. 
                  We follow industry best practices and agile methodologies to deliver high-quality, scalable applications 
                  that drive business growth and efficiency.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Custom application development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Web and mobile applications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">API development and integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Software modernization</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Software Development" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Cybersecurity Section */}
          <div 
            ref={cybersecurityRef} 
            id="cybersecurity-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'cybersecurity' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Cybersecurity Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Lock className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Cybersecurity</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Comprehensive Security Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Our cybersecurity services provide robust protection for your valuable data and systems. 
                  We implement multi-layered security strategies to defend against evolving threats, 
                  ensuring your business remains secure in today's complex digital landscape.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Security assessments and audits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Threat detection and response</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Data protection solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Security awareness training</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* IT Infrastructure Section */}
          <div 
            ref={itInfrastructureRef} 
            id="it-infrastructure-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'it-infrastructure' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Server className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">IT Infrastructure</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Robust Infrastructure Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our IT infrastructure solutions provide the foundation for reliable, high-performance technology operations. 
                  We design, implement, and manage infrastructure that aligns with your business needs, 
                  ensuring optimal performance and scalability.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Server and storage solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Virtualization technologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Disaster recovery planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Infrastructure monitoring</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="IT Infrastructure" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Network Installations Section */}
          <div 
            ref={networkInstallationsRef} 
            id="network-installations-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'network-installations' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Network Installations" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Wifi className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Network Installations</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Professional Network Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our network installation services provide reliable connectivity solutions for your business. 
                  We design and implement both wired and wireless networks with a focus on performance, 
                  security, and scalability to support your growing business needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Wired network infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Wireless network solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Network security implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Network monitoring and maintenance</span>
                  </li>
                </ul>
                <a href="#" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 relative overflow-hidden bg-[#1A1F2C]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Our Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33C3F0] to-[#9B87F5]">Partners</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, index) => (
              <a 
                key={index} 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up" 
                data-aos-delay={100 + (index * 50)}
              >
                <div className="flex items-center justify-center h-32">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-20 max-w-full opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                <p className="text-center text-gray-300 mt-4 text-sm font-medium">{partner.name}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Animated Network Lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-1 h-1 bg-[#33C3F0] rounded-full animate-ping" style={{ top: '20%', left: '10%' }}></div>
          <div className="absolute w-1 h-1 bg-[#9B87F5] rounded-full animate-ping" style={{ top: '70%', left: '80%' }}></div>
          <div className="absolute w-1 h-1 bg-[#33C3F0] rounded-full animate-ping" style={{ top: '40%', left: '90%' }}></div>
          <div className="absolute w-1 h-1 bg-[#9B87F5] rounded-full animate-ping" style={{ top: '80%', left: '20%' }}></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]"
              data-aos="fade-up">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto"
             data-aos="fade-up" data-aos-delay="100">
            At Galaxy ITT, we're committed to delivering exceptional value through our technology services.
            Here's why clients trust us with their digital transformation needs:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div data-aos="fade-up" data-aos-delay="200">
              <WhyChooseCard 
                icon={<Trophy className="h-8 w-8 text-[#33C3F0]" />}
                title="Proven Expertise"
                description="Years of experience delivering successful IT solutions across various industries."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <WhyChooseCard 
                icon={<ShieldCheck className="h-8 w-8 text-[#33C3F0]" />}
                title="Security Focused"
                description="Comprehensive approach to protecting your valuable data and systems."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <WhyChooseCard 
                icon={<Clock className="h-8 w-8 text-[#33C3F0]" />}
                title="Timely Delivery"
                description="Committed to delivering projects on schedule and within budget."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="500">
              <WhyChooseCard 
                icon={<CheckCircle className="h-8 w-8 text-[#33C3F0]" />}
                title="Quality Assurance"
                description="Rigorous testing and quality control for all our solutions."
              />
            </div>
          </div>
          
          <div className="mt-12 text-center"
               data-aos="fade-up" data-aos-delay="600">
           
          {/* Live Network Stats */}
          <div className="bg-[#2A2D3E]/50 p-8 rounded-lg backdrop-blur-sm"
               data-aos="fade-up"
               data-aos-delay="400">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#33C3F0] mb-2">
                  <span className="tabular-nums">{counts.networkSpeed || '99.99'}%</span>
                </div>
                <div className="text-sm text-gray-300">Network Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9B87F5] mb-2">
                  <span className="tabular-nums">10</span> Gbps
                </div>
                <div className="text-sm text-gray-300">Peak Speed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#33C3F0] mb-2">
                  <span className="tabular-nums">50</span>+
                </div>
                <div className="text-sm text-gray-300">Data Centers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#9B87F5] mb-2">
                  <span className="tabular-nums">24/7</span>
                </div>
                <div className="text-sm text-gray-300">Support</div>
              </div>
            </div>
          </div>
        
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#221F26] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="md:w-1/2" 
                 data-aos="fade-right" 
                 data-aos-duration="1200">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white"
                  data-aos="fade-right"
                  data-aos-delay="100">
                About Galaxy ITT
              </h2>
              <p className="text-lg mb-4 text-gray-300"
                 data-aos="fade-right"
                 data-aos-delay="200">
                Galaxy ITT is a premier provider of innovative technology solutions, dedicated to helping businesses navigate the digital universe.
              </p>
              <p className="text-lg mb-6 text-gray-300"
                 data-aos="fade-right"
                 data-aos-delay="300">
                With decades of combined experience, our team of experts delivers customized solutions that drive efficiency, security, and growth.
              </p>
              <Link to="/about">
                <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white"
                        data-aos="fade-right"
                        data-aos-delay="400">
                  Learn More About Us
                </Button>
              </Link>
            </div>

            {/* Right Content - Image Carousel */}
            <div className="md:w-1/2" 
                 data-aos="fade-left" 
                 data-aos-duration="1200">
              <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                
                {/* Gradient Border */}
                <div className="absolute inset-0 p-1 bg-gradient-to-br from-[#33C3F0] to-[#9B87F5] rounded-lg">
                  {/* Content Container */}
                  <div className="relative w-full h-full overflow-hidden rounded-lg bg-[#221F26]">
                    {/* Image Carousel */}
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel">
                        <img 
                          src="https://images.unsplash.com/photo-1661956602868-6ae368943878?auto=format&fit=crop&q=80&w=600&h=400"
                          alt="Galaxy ITT Logo" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel" style={{ animationDelay: '5s' }}>
                        <img 
                          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=600&h=400"
                          alt="Technology Innovation"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center animate-carousel" style={{ animationDelay: '10s' }}>
                        <img 
                          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80&w=600&h=400"
                          alt="IT Solutions"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Overlay with company name */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#221F26] via-transparent">
                      <div className="absolute bottom-4 left-4">
                        <h3 className="text-white text-xl font-semibold mb-2">Galaxy ITT</h3>
                        <p className="text-gray-300 text-sm">Transforming Digital Future</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#1A1F2C] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12"
              data-aos="fade-up">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <TestimonialCard 
                quote="Galaxy ITT transformed our business with their cloud solutions. Our operations are now more efficient than ever."
                author="Jane Smith, CEO"
                company="TechCorp"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
              <TestimonialCard 
                quote="The cybersecurity team at Galaxy ITT helped us prevent what could have been a catastrophic data breach."
                author="Michael Johnson, CTO"
                company="SecureData Inc."
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <TestimonialCard 
                quote="Their software development team delivered a custom solution that perfectly met our requirements and timeline."
                author="Sarah Williams, COO"
                company="Innovation Labs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1A1F2C] to-[#33C3F0]">
        <div className="max-w-4xl mx-auto text-center text-white"
             data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6"
              data-aos="fade-up" data-aos-delay="100">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto"
             data-aos="fade-up" data-aos-delay="200">
            Contact us today to discover how our technology solutions can propel your business forward.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#33C3F0] hover:bg-gray-100 px-8 py-6 text-lg"
                    data-aos="fade-up" data-aos-delay="300">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Newsletter and Updates Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#221F26] to-[#2A2D3E]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Newsletter Subscription */}
            <div className="bg-[#2A2D3E]/50 p-8 rounded-lg backdrop-blur-sm" data-aos="fade-right">
              <div className="flex items-center mb-6">
                <Mail className="w-8 h-8 text-[#33C3F0] mr-3" />
                <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
              </div>
              <p className="text-gray-300 mb-6">Stay updated with the latest in technology and telecommunications.</p>
              
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-[#221F26] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
                  />
                  <Button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-4 py-2 rounded-md"
                  >
                    Subscribe
                  </Button>
                </div>
                {subscriptionStatus === 'success' && (
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Thank you for subscribing!</span>
                  </div>
                )}
                {subscriptionStatus === 'error' && (
                  <div className="flex items-center text-red-400">
                    <span>{errorMessage}</span>
                  </div>
                )}
              </form>
            </div>

            {/* Updates Preview */}
            <div className="space-y-6" data-aos="fade-left">
              <h3 className="text-xl font-bold text-white mb-4">Latest Updates</h3>
              
              <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <Bell className="w-6 h-6 text-[#9B87F5] mr-2" />
                  <span className="text-sm text-gray-400">Technology Update</span>
                </div>
                <h4 className="text-white font-semibold mb-2">Next-Gen Network Infrastructure</h4>
                <p className="text-gray-300 text-sm">Discover how our latest network upgrades are revolutionizing connectivity.</p>
                <Link to="/news" className="flex items-center mt-4 text-[#33C3F0] hover:text-[#1EAEDB]">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-3">
                  <Bell className="w-6 h-6 text-[#9B87F5] mr-2" />
                  <span className="text-sm text-gray-400">Industry News</span>
                </div>
                <h4 className="text-white font-semibold mb-2">5G Evolution and Beyond</h4>
                <p className="text-gray-300 text-sm">Explore the future of telecommunications with our expert insights.</p>
                <Link to="/news" className="flex items-center mt-4 text-[#33C3F0] hover:text-[#1EAEDB]">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - replaced with our new Footer component */}
      <Footer />

      {/* Support Chat Button - Appears on scroll */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          showChatButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        {!isChatOpen ? (
          <button 
            onClick={() => setIsChatOpen(true)}
            className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110"
            aria-label="Open support chat"
          >
            <MessageCircle className="h-6 w-6 text-white" />
            <span className="absolute right-full mr-3 bg-white text-[#1A1F2C] px-3 py-1 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-medium">
              Chat with support
            </span>
          </button>
        ) : (
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-80 md:w-96 flex flex-col max-h-[500px] border border-gray-200">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] p-4 flex justify-between items-center">
              <div className="flex items-center">
                <div className="bg-white p-2 rounded-full mr-3">
                  <Headphones className="h-5 w-5 text-[#33C3F0]" />
                </div>
                <div>
                  <h3 className="text-white font-bold">Support Team</h3>
                  <p className="text-white/80 text-sm">We typically reply in a few minutes</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
              {chatMessages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.type === 'agent' && (
                    <div className="w-8 h-8 rounded-full bg-[#33C3F0] flex items-center justify-center mr-2 flex-shrink-0">
                      <User className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div 
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-[#33C3F0] text-white rounded-tr-none' 
                        : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-3 flex gap-2">
              <input
                type="text"
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] p-2 rounded-full text-white"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const WhyChooseCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <div className="mx-auto bg-[#F6F6F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#33C3F0]">{company}</p>
    </CardContent>
  </Card>
);

export default Index;
