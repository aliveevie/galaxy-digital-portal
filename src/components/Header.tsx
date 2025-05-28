import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Search, MessageSquare } from 'lucide-react';
import { NavItem } from "./NavItem"
import MobileNav from "./MobileNav";
import CircularMenu from './CircularMenu';

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
  
  const scrollToChat = () => {
    // Scroll to the chat support element at the bottom of the page
    const chatElement = document.getElementById('chat-support');
    if (chatElement) {
      chatElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Menu items configuration
  const menuItems = [
    {
      label: 'Internet Connectivity',
      href: '/services/internet',
      submenu: [
        {
          label: 'Fiber Service',
          href: '/services/internet/fiber',
          description: 'High-speed fiber optic connectivity'
        },
        {
          label: 'Wireless Installations',
          href: '/services/internet/wireless',
          description: 'Professional wireless network solutions'
        },
        {
          label: 'VSAT',
          href: '/services/internet/vsat',
          description: 'Satellite-based internet connectivity'
        },
        {
          label: 'Last Mile',
          href: '/services/internet/last-mile',
          description: 'End-user connection solutions'
        }
      ]
    },
    {
      label: 'Software Services',
      href: '/services/software',
      submenu: [
        {
          label: 'Custom Development',
          href: '/services/software/custom',
          description: 'Tailored software solutions'
        },
        {
          label: 'Cloud Solutions',
          href: '/services/software/cloud',
          description: 'Secure and scalable cloud infrastructure'
        },
        {
          label: 'Enterprise Applications',
          href: '/services/software/enterprise',
          description: 'Business process automation'
        }
      ]
    },
    {
      label: 'IT Consulting',
      href: '/services/consulting',
      submenu: [
        {
          label: 'IT Strategy',
          href: '/services/consulting/strategy',
          description: 'Strategic IT planning and roadmap'
        },
        {
          label: 'Digital Transformation',
          href: '/services/consulting/transformation',
          description: 'Business process digitization'
        }
      ]
    },
    {
      label: 'Cybersecurity',
      href: '/services/security',
      submenu: [
        {
          label: 'Security Audit',
          href: '/services/security/audit',
          description: 'Comprehensive security assessment'
        },
        {
          label: 'Network Security',
          href: '/services/security/network',
          description: 'Advanced network protection'
        },
        {
          label: 'Data Protection',
          href: '/services/security/data',
          description: 'Data security and compliance'
        }
      ]
    }
  ];

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
      <div className="relative z-20 container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/galaxy-logo.png"
            alt="Galaxy Logo"
            className="h-12 w-auto filter brightness-0 invert"  // Makes the logo white
          />
        </a>

        {/* Circular Menu */}
        <CircularMenu items={menuItems} />
      </div>
    </header>
  );
};

export default Header;
