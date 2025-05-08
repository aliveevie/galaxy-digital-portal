import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Rocket, Globe, Navigation, Sparkles, CheckCircle, ShieldCheck, 
  Clock, Trophy, Wifi, Network, Server, Cloud, Lock, Users, 
  Mail, Bell, ArrowRight, ChevronRight, ChevronLeft, Smartphone, 
  Laptop, Building2, MessageCircle, X, Send, Headphones, User,
  Loader2, Phone
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { sendWhatsAppMessage, sendWhatsAppTemplate, checkMessageStatus } from '@/services/whatsappService';

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
  const [chatMessages, setChatMessages] = useState<{type: 'user' | 'agent', text: string, status?: string, messageId?: string}[]>([
    {type: 'agent', text: 'Hello! Welcome to Galaxy Digital Portal. How can I help you today?'}
  ]);
  const [isWhatsAppConnected, setIsWhatsAppConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Refs for service sections
  const itConsultingRef = useRef<HTMLDivElement>(null);
  const cloudSolutionsRef = useRef<HTMLDivElement>(null);
  const softwareDevelopmentRef = useRef<HTMLDivElement>(null);
  const cybersecurityRef = useRef<HTMLDivElement>(null);
  const itInfrastructureRef = useRef<HTMLDivElement>(null);
  const networkInstallationsRef = useRef<HTMLDivElement>(null);
  
  // Hero slides data for services showcase
  const services = [
    {
      id: 'fiber-internet',
      title: 'Fiber Internet',
      headline: 'Internet Faster Than The Speed of Light',
      description: 'Experience lightning-fast connectivity with our premium fiber optic network, offering speeds up to 10 Gbps and 99.99% uptime guarantee.',
      image: 'https://images.unsplash.com/photo-1541728472741-03e45a58cf88?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      icon: <Wifi className="h-6 w-6" />,
      color: 'from-blue-600 to-cyan-400',
      highlight: '10 Gbps',
      link: '/services/internet'
    },
    {
      id: 'business-connectivity',
      title: 'Business Solutions',
      headline: 'Enterprise-Grade Connectivity',
      description: 'Tailored connectivity solutions for businesses of all sizes, with dedicated support, guaranteed SLAs, and scalable bandwidth options.',
      image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      icon: <Building2 className="h-6 w-6" />,
      color: 'from-indigo-600 to-purple-500',
      highlight: 'Enterprise',
      link: '/services/business'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      headline: 'Seamless Cloud Integration',
      description: 'Secure and reliable cloud solutions that optimize your operations, reduce costs, and accelerate your digital transformation journey.',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      icon: <Cloud className="h-6 w-6" />,
      color: 'from-sky-500 to-blue-600',
      highlight: 'Scalable',
      link: '/services/cloud'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      headline: 'Advanced Threat Protection',
      description: 'Comprehensive security solutions to protect your critical data and infrastructure from evolving cyber threats and vulnerabilities.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      icon: <ShieldCheck className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-600',
      highlight: 'Secured',
      link: '/services/security'
    },
    {
      id: 'mobile-solutions',
      title: 'Mobile Solutions',
      headline: 'Connectivity On The Go',
      description: 'Stay connected wherever you go with our high-speed mobile data plans, international roaming, and IoT connectivity solutions.',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-pink-500 to-rose-500',
      highlight: 'Unlimited',
      link: '/services/mobile'
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
    const servicesSection = document.getElementById('services');
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

  // Scroll to bottom of chat messages when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Check message status periodically
  useEffect(() => {
    const pendingMessages = chatMessages.filter(msg => 
      msg.type === 'user' && 
      msg.messageId && 
      (msg.status === 'sending' || msg.status === 'sent')
    );
    
    if (pendingMessages.length === 0) return;
    
    const checkInterval = setInterval(async () => {
      for (const message of pendingMessages) {
        if (!message.messageId) continue;
        
        try {
          const statusResponse = await checkMessageStatus(message.messageId);
          
          if (statusResponse.status === 'delivered' || statusResponse.status === 'read') {
            setChatMessages(prev => prev.map(msg => 
              msg.messageId === message.messageId 
                ? { ...msg, status: statusResponse.status } 
                : msg
            ));
          }
        } catch (error) {
          console.error('Error checking message status:', error);
        }
      }
    }, 10000); // Check every 10 seconds
    
    return () => clearInterval(checkInterval);
  }, [chatMessages]);

  // Handle connecting to WhatsApp
  const handleConnectWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userPhoneNumber.trim()) {
      return;
    }
    
    // Validate phone number format (simple validation)
    const phoneRegex = /^\+[1-9]\d{1,14}$/;
    if (!phoneRegex.test(userPhoneNumber)) {
      setChatMessages(prev => [
        ...prev,
        {
          type: 'agent',
          text: 'Please enter a valid phone number in international format (e.g., +1234567890)'
        }
      ]);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Send a template message to initiate WhatsApp conversation
      const response = await sendWhatsAppTemplate(userPhoneNumber);
      
      if (response && response.messages && response.messages[0].id) {
        setIsWhatsAppConnected(true);
        setShowPhoneInput(false);
        
        setChatMessages(prev => [
          ...prev,
          {
            type: 'agent',
            text: 'You\'ve been connected to WhatsApp! You should receive a message shortly. Continue chatting here and all messages will be synced with WhatsApp.'
          }
        ]);
      }
    } catch (error) {
      console.error('Error connecting to WhatsApp:', error);
      setChatMessages(prev => [
        ...prev,
        {
          type: 'agent',
          text: 'Sorry, we couldn\'t connect to WhatsApp at this time. Please try again later or continue chatting here.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle sending chat messages
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!chatMessage.trim()) return;
    
    // Add user message to chat
    const userMessageObj = {
      type: 'user' as const,
      text: chatMessage,
      status: isWhatsAppConnected ? 'sending' : undefined
    };
    
    setChatMessages(prev => [...prev, userMessageObj]);
    const currentMessage = chatMessage;
    setChatMessage('');
    
    if (isWhatsAppConnected) {
      // Send message to WhatsApp
      try {
        const response = await sendWhatsAppMessage(currentMessage, userPhoneNumber);
        
        if (response && response.messages && response.messages[0].id) {
          // Update message with ID and status
          setChatMessages(prev => 
            prev.map(msg => 
              msg === userMessageObj 
                ? { 
                    ...msg, 
                    messageId: response.messages[0].id,
                    status: 'sent'
                  } 
                : msg
            )
          );
          
          // Simulate agent response after a delay
          setTimeout(() => {
            setChatMessages(prev => [
              ...prev, 
              {
                type: 'agent', 
                text: "Thank you for your message. Our support team has received it on WhatsApp and will respond shortly. Is there anything else I can help you with?"
              }
            ]);
          }, 1000);
        }
      } catch (error) {
        console.error('Error sending message to WhatsApp:', error);
        
        // Update UI to show error
        setChatMessages(prev => [
          ...prev,
          {
            type: 'agent',
            text: 'Sorry, we couldn\'t send your message to WhatsApp. Our team has been notified of the issue.'
          }
        ]);
      }
    } else {
      // Regular chat flow without WhatsApp
      setTimeout(() => {
        setChatMessages(prev => [
          ...prev, 
          {
            type: 'agent', 
            text: "Thank you for your message. One of our support agents will respond shortly. Would you like to continue this conversation on WhatsApp for faster responses?",
          }
        ]);
        setShowPhoneInput(true);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />
      
      {/* Full-screen Hero Section with Service Showcase */}
      <div className="relative h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1128] to-[#001f54] z-0"></div>
        
        {/* Service Slider */}
        <div className="relative z-10 h-full">
          <div 
            className="flex transition-transform duration-1000 ease-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={service.id} className="min-w-full h-full relative flex items-center">
                {/* Background Image with Overlay - Full Screen */}
                <div className="absolute inset-0 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a1128]/80 via-[#001f54]/60 to-transparent z-20"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                
                {/* Content Container - Centered */}
                <div className="container mx-auto px-4 md:px-8 relative z-30 h-full flex items-center">
                  <div className="max-w-3xl">
                    {/* Text Content */}
                    <div className="text-white">
                      <div 
                        className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                        data-aos="fade-up"
                        data-aos-delay="100"
                      >
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-2 animate-pulse`}></span>
                        <span className="text-white text-sm font-medium flex items-center gap-2">
                          {service.icon}
                          {service.title}
                        </span>
                      </div>
                      
                      <h1 
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <span className="text-white">{service.headline.split(' ').slice(0, -1).join(' ')} </span>
                        <span className={`bg-clip-text text-transparent bg-gradient-to-r ${service.color}`}>
                          {service.headline.split(' ').slice(-1)}
                        </span>
                      </h1>
                      
                      <p 
                        className="text-xl text-white/80 mb-8 max-w-xl"
                        data-aos="fade-up"
                        data-aos-delay="300"
                      >
                        {service.description}
                      </p>
                      
                      <div 
                        className="flex flex-wrap gap-4"
                        data-aos="fade-up"
                        data-aos-delay="400"
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Controls - Positioned at bottom */}
          <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-8">
            {/* Slide Indicators */}
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
            
            {/* Arrow Controls */}
            <div className="flex space-x-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
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
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]"
              data-aos="fade-up">
            Our Expert Services
          </h2>
          
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
      </section>

      {/* Detailed Service Sections */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-100">
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
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
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
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
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
                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
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
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
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
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80" 
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

      {/* Network Visualization Section */}
      <section className="py-16 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Powering Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33C3F0] to-[#9B87F5]">Digital Infrastructure</span>
          </h2>
          
          {/* Technology Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="100">
              <div className="flex items-center mb-4">
                <Network className="w-8 h-8 text-[#33C3F0] mr-3" />
                <h3 className="text-xl font-semibold text-white">5G Networks</h3>
              </div>
              <p className="text-gray-300">
                Ultra-fast connectivity solutions with speeds up to 10Gbps and sub-millisecond latency.
              </p>
            </div>

            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="200">
              <div className="flex items-center mb-4">
                <Cloud className="w-8 h-8 text-[#9B87F5] mr-3" />
                <h3 className="text-xl font-semibold text-white">Cloud Integration</h3>
              </div>
              <p className="text-gray-300">
                Seamless hybrid cloud solutions with 99.99% uptime guarantee and global reach.
              </p>
            </div>

            <div className="bg-[#2A2D3E] p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
                 data-aos="fade-up"
                 data-aos-delay="300">
              <div className="flex items-center mb-4">
                <Lock className="w-8 h-8 text-[#33C3F0] mr-3" />
                <h3 className="text-xl font-semibold text-white">Cyber Security</h3>
              </div>
              <p className="text-gray-300">
                Enterprise-grade security with AI-powered threat detection and real-time monitoring.
              </p>
            </div>
          </div>

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
            <Link to="/about">
              <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                Learn More About Us
              </Button>
            </Link>
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

      {/* Digital Transformation VR Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/20 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
              data-aos="fade-up">
            Experience <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33C3F0] to-[#9B87F5]">Virtual Reality</span> Solutions
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto"
             data-aos="fade-up" data-aos-delay="100">
            Immerse yourself in our cutting-edge virtual reality experiences designed to transform how you visualize and interact with digital environments.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* VR Image 1 with Animation */}
            <div className="relative w-full max-w-md" data-aos="fade-right" data-aos-duration="1000">
              <div className="absolute inset-0 bg-gradient-to-r from-[#33C3F0]/40 to-[#9B87F5]/40 rounded-lg blur-xl animate-pulse"></div>
              <div className="relative bg-[#2A2D3E]/80 p-2 rounded-lg backdrop-blur-sm border border-[#33C3F0]/20">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/animations/animations2/vr1.png" 
                    alt="VR Experience" 
                    className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(51,195,240,0.7)]"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] rounded-full blur-xl opacity-70 animate-ping" style={{ animationDuration: '3s' }}></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#33C3F0]">Immersive Training</h3>
                <p className="text-gray-300 mt-2">Virtual reality training solutions for enhanced learning experiences</p>
              </div>
            </div>
            
            {/* VR Image 2 with Animation */}
            <div className="relative w-full max-w-md mt-12 md:mt-24" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
              <div className="absolute inset-0 bg-gradient-to-r from-[#9B87F5]/40 to-[#33C3F0]/40 rounded-lg blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="relative bg-[#2A2D3E]/80 p-2 rounded-lg backdrop-blur-sm border border-[#9B87F5]/20">
                <div className="overflow-hidden rounded-lg">
                  <img 
                    src="/animations/animations2/vr2.png" 
                    alt="VR Visualization" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-3 -left-3 w-24 h-24 bg-gradient-to-r from-[#9B87F5] to-[#33C3F0] rounded-full blur-xl opacity-70 animate-ping" style={{ animationDuration: '4s' }}></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-[#9B87F5]">3D Visualization</h3>
                <p className="text-gray-300 mt-2">Transform complex data into intuitive visual experiences</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
            <Button className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] hover:from-[#1EAEDB] hover:to-[#8A76E4] text-white">
              Explore VR Solutions
            </Button>
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

      {/* AI Innovation Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#0A0F1E] via-[#1A1F2C] to-[#33C3F0]/30 relative overflow-hidden">
        {/* Background Animation Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#33C3F0] rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '2.5s' }}></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#33C3F0] rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '3.5s' }}></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#33C3F0] mr-2 animate-pulse"></span>
              <span className="text-[#33C3F0] text-sm font-medium">Next-Generation Technology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-6">
              Powering Innovation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#33C3F0] via-purple-500 to-pink-500">Artificial Intelligence</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of AI to transform your business processes, enhance decision-making, and create intelligent solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Side - AI Brain Visualization */}
            <div className="relative" data-aos="fade-right" data-aos-duration="1200">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#33C3F0]/30 to-purple-500/30 rounded-full blur-3xl opacity-70 animate-pulse"></div>
              <div className="relative bg-[#1A1F2C]/80 p-3 rounded-xl backdrop-blur-sm border border-[#33C3F0]/20">
                <div className="overflow-hidden rounded-lg h-[300px]">
                  <img 
                    src="/animations/2151137476.jpg" 
                    alt="AI Brain Visualization" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Animated Connection Lines */}
                <div className="absolute top-1/2 left-0 w-16 h-px bg-gradient-to-r from-transparent to-[#33C3F0] animate-grow-x"></div>
                <div className="absolute top-1/2 right-0 w-16 h-px bg-gradient-to-l from-transparent to-[#33C3F0] animate-grow-x"></div>
                <div className="absolute top-0 left-1/2 w-px h-16 bg-gradient-to-b from-transparent to-[#33C3F0] animate-grow-y"></div>
                <div className="absolute bottom-0 left-1/2 w-px h-16 bg-gradient-to-t from-transparent to-[#33C3F0] animate-grow-y"></div>
                
                {/* Animated Nodes */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#33C3F0] rounded-full animate-pulse"></div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#33C3F0] rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
            
            {/* Right Side - AI Features */}
            <div data-aos="fade-left" data-aos-duration="1200">
              <div className="space-y-8">
                <div className="bg-[#2A2D3E]/60 p-6 rounded-lg backdrop-blur-sm border border-[#33C3F0]/20 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center mr-3">
                      <span className="text-[#33C3F0] font-bold">01</span>
                    </div>
                    Predictive Analytics
                  </h3>
                  <p className="text-gray-300">
                    Leverage machine learning algorithms to predict trends, customer behavior, and business outcomes with remarkable accuracy.
                  </p>
                </div>
                
                <div className="bg-[#2A2D3E]/60 p-6 rounded-lg backdrop-blur-sm border border-purple-500/20 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mr-3">
                      <span className="text-purple-500 font-bold">02</span>
                    </div>
                    Intelligent Automation
                  </h3>
                  <p className="text-gray-300">
                    Automate complex business processes with AI-powered solutions that learn and improve over time, increasing efficiency.
                  </p>
                </div>
                
                <div className="bg-[#2A2D3E]/60 p-6 rounded-lg backdrop-blur-sm border border-[#33C3F0]/20 transform hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center mr-3">
                      <span className="text-[#33C3F0] font-bold">03</span>
                    </div>
                    Natural Language Processing
                  </h3>
                  <p className="text-gray-300">
                    Enhance customer interactions with advanced NLP capabilities that understand and respond to human language naturally.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 text-center md:text-left">
                <Button className="bg-gradient-to-r from-[#33C3F0] to-purple-500 hover:from-[#1EAEDB] hover:to-purple-600 text-white px-8 py-3">
                  Explore AI Solutions
                </Button>
              </div>
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
                    className="w-full px-4 py-3 bg-[#221F26] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33C3F0]"
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
            className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
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
              <div className="flex items-center">
                {isWhatsAppConnected && (
                  <div className="mr-3 bg-white/10 p-1.5 rounded-full" title="Connected to WhatsApp">
                    <Phone className="h-4 w-4 text-white" />
                  </div>
                )}
                <button 
                  onClick={() => setIsChatOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
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
                  <div className="flex flex-col">
                    <div 
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === 'user' 
                          ? 'bg-[#33C3F0] text-white rounded-tr-none' 
                          : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'
                      }`}
                    >
                      {msg.text}
                    </div>
                    {msg.status && (
                      <div className="text-xs text-gray-500 mt-1 flex items-center justify-end">
                        {msg.status === 'sending' && <Loader2 className="h-3 w-3 mr-1 animate-spin" />}
                        {msg.status === 'sent' && <CheckCircle className="h-3 w-3 mr-1" />}
                        {msg.status === 'delivered' && <CheckCircle className="h-3 w-3 mr-1 text-[#33C3F0]" />}
                        {msg.status === 'read' && <CheckCircle className="h-3 w-3 mr-1 text-green-500" />}
                        {msg.status}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {/* WhatsApp Phone Input */}
              {showPhoneInput && !isWhatsAppConnected && (
                <div className="bg-white p-3 rounded-lg border border-gray-200 mt-2">
                  <p className="text-sm text-gray-700 mb-2">
                    Enter your phone number to continue this conversation on WhatsApp:
                  </p>
                  <form onSubmit={handleConnectWhatsApp} className="flex gap-2">
                    <input
                      type="text"
                      value={userPhoneNumber}
                      onChange={(e) => setUserPhoneNumber(e.target.value)}
                      placeholder="+1234567890"
                      className="flex-1 px-3 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#33C3F0] text-sm"
                    />
                    <button 
                      type="submit"
                      disabled={isLoading}
                      className="bg-green-500 p-2 rounded-lg text-white flex items-center justify-center"
                      aria-label="Connect to WhatsApp"
                    >
                      {isLoading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <Phone className="h-5 w-5" />
                      )}
                    </button>
                  </form>
                  <p className="text-xs text-gray-500 mt-2">
                    Enter your number in international format (e.g., +1234567890)
                  </p>
                </div>
              )}
              
              {/* Reference for auto-scrolling */}
              <div ref={messagesEndRef} />
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
