import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Search, MessageSquare } from 'lucide-react';
import { NavItem } from "./NavItem"
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);
  
  // Background images from the hero section
  const backgrounds = [
    {
      image: 'https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overlay:  'bg-gradient-to-r from-[#0a1128]/90 via-[#001f54]/70 to-transparent'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
      overlay: 'bg-gradient-to-b from-[#0a1128]/80 via-[#001f54]/60 to-transparent'
    }
  ];

  // Auto-rotate backgrounds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Background with animation */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentBg === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 ${bg.overlay} z-10`}></div>
            <img
              src={bg.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Header content */}
      <div className="relative z-20 container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="py-2 bg-gradient-to-r from-blue-400 to-blue-600">
          <div className="container mx-auto flex justify-end space-x-6">
            <a href="tel:08039600006" className="flex items-center text-sm text-white hover:text-blue-100">
              <Phone className="mr-2 h-4 w-4" />
              <span>08039600006</span>
            </a>
            <a href="mailto:info@galaxyitt.com.ng" className="flex items-center text-sm text-white hover:text-blue-100">
              <Mail className="mr-2 h-4 w-4" />
              <span>info@galaxyitt.com.ng</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/galaxy-logo.png"
              alt="Galaxy Logo"
              className="h-12 w-auto filter brightness-0 invert"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8 text-white">
              <NavItem href="/" label="Home" />
              
              <NavItem href="/about" label="About Us" dropdown={[
                { label: "Our Mandate", href: "/about#mandate" },
                { 
                  label: "Our Vision", 
                  href: "/about#vision",
                  description: "To become a leading provider of broadband connectivity, software solutions and drive digital transformation in sub-Saharan Africa."
                },
                { 
                  label: "Our Mission", 
                  href: "/about#mission",
                  description: "To provide reliable internet services, telecommunications, & software solutions to Ministries, Departments, and Agencies (MDAs) and individuals."
                },
                { 
                  label: "Our Core Values", 
                  href: "/about#values",
                  description: "Reliability, Integrity, Confidence, and Innovation drive everything we do."
                },
                { label: "Management", href: "/about#management" },
                { label: "Board of Directors", href: "/about#board" },
                { label: "Careers", href: "/about#careers" },
              ]} />
              
              <NavItem href="/services" label="Services" dropdown={[
                { 
                  label: "IT Consulting", 
                  href: "/services#consulting",
                  description: "Expert guidance to optimize your IT strategy and operations."
                },
                { 
                  label: "Cloud Solutions", 
                  href: "/services#cloud",
                  description: "Secure, scalable cloud infrastructure and migration services."
                },
                { 
                  label: "Software Development", 
                  href: "/services#software",
                  description: "Custom software solutions tailored to your business needs."
                },
                { 
                  label: "Cybersecurity", 
                  href: "/services#security",
                  description: "Comprehensive security solutions to protect your digital assets."
                },
                { 
                  label: "IT Infrastructure", 
                  href: "/services#infrastructure",
                  description: "Robust infrastructure solutions for reliable business operations."
                },
                { 
                  label: "Network Installations", 
                  href: "/services#network",
                  description: "Professional network design and implementation services."
                },
              ]} />
              
              <NavItem href="/customer-service" label="Customer Service" dropdown={[
                { 
                  label: "Service Desk", 
                  href: "/customer-service#desk",
                  description: "24/7 support for all your technical needs."
                },
                { 
                  label: "Escalation Path", 
                  href: "/customer-service#escalation",
                  description: "Clear process for resolving complex issues efficiently."
                },
              ]} />
              
              <NavItem href="/resources" label="Resources" dropdown={[
                { 
                  label: "FAQ", 
                  href: "/faq",
                  description: "Answers to commonly asked questions about our services."
                },
                { 
                  label: "Media", 
                  href: "/media",
                  description: "Press releases and media resources about our company."
                },
                { 
                  label: "News", 
                  href: "/news",
                  description: "Latest updates and announcements from our team."
                },
                { 
                  label: "Video", 
                  href: "/video",
                  description: "Instructional and informational videos about our solutions."
                },
              ]} rightAligned />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="flex items-center justify-center focus:outline-none"
              onClick={toggleMobileNav}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
