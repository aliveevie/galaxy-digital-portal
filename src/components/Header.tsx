import React, { useState } from 'react';
import { Menu, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Search, MessageSquare } from 'lucide-react';
import { NavItem } from "./NavItem"
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };
  
  const scrollToChat = () => {
    // Scroll to the chat support element at the bottom of the page
    const chatElement = document.getElementById('chat-support');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Top bar with contact info - changed to light blue */}
      <div className="bg-blue-100 py-2 text-gray-700">
        <div className="container mx-auto flex justify-between px-4">
          {/* Left side */}
          <div className="flex items-center">
            <a href="mailto:info@galaxyitt.com.ng" className="flex items-center text-sm hover:text-blue-600">
              <Mail className="mr-2 h-4 w-4" />
              <span>info@galaxyitt.com.ng</span>
            </a>
          </div>
          
          {/* Right side */}
          <div className="flex items-center space-x-6">
            <a href="tel:08039600006" className="flex items-center text-sm hover:text-blue-600">
              <Phone className="mr-2 h-4 w-4" />
              <span>call on: 08039600006</span>
            </a>
            <button 
              onClick={scrollToChat} 
              className="flex items-center text-sm hover:text-blue-600"
              aria-label="Chat support"
            >
              <MessageSquare className="h-4 w-4" />
              <span className="ml-1">Chat with us</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Main navigation - white background */}
      <div className="bg-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/galaxy-logo.png" alt="Galaxy Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Search icon for mobile */}
          <div className="flex items-center lg:hidden ml-auto mr-4">
            <button className="text-gray-600">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:block flex-1">
            <ul className="flex items-center justify-center space-x-8">
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

          {/* Social media icons - desktop only */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <Youtube className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              className="flex flex-col items-center justify-center space-y-1.5 focus:outline-none"
              onClick={toggleMobileNav}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${mobileNavOpen ? 'translate-y-2 rotate-45' : ''}`}></span>
              <span className={`hamburger-line ${mobileNavOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line ${mobileNavOpen ? '-translate-y-2 -rotate-45' : ''}`}></span>
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
