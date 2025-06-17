import React, { useState } from 'react';
import { Menu, Phone, Mail, Facebook, Instagram, Twitter, Youtube, Search, MessageSquare } from 'lucide-react';
import { NavItem } from "./NavItem"
import MobileNav from "./MobileNav";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <header className="top-0 left-0 right-0 z-50 bg-white shadow-sm">
      {/* Header content */}
      <div className="relative z-20">
        {/* Top bar with contact info and social media */}
        <div className="w-full py-1 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Social Media Links */}
            <div className="flex items-center space-x-3">
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-3.5 w-3.5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <a 
                href="#" 
                className="text-white hover:text-blue-200 transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Contact Information */}
            <div className="flex items-center space-x-6">
              <a href="tel:08039600006" className="flex items-center text-xs text-white hover:text-blue-200">
                <Phone className="mr-1.5 h-3.5 w-3.5" />
                <span>08039600006</span>
              </a>
              <a href="mailto:info@galaxyitt.com.ng" className="flex items-center text-xs text-white hover:text-blue-200">
                <Mail className="mr-1.5 h-3.5 w-3.5" />
                <span>info@galaxyitt.com.ng</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <img
                src="/galaxyitt_logo.png"
                alt="Galaxy Logo"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:block">
              <ul className="flex items-center space-x-8">
                <NavItem href="/" label="Home" className="text-navy-800 hover:text-blue-600 font-medium text-sm" />
                
                <NavItem href="/about" label="About Us" className="text-navy-800 hover:text-blue-600 font-medium text-sm" dropdown={[
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
                
                <NavItem href="/services" label="Services" className="text-navy-800 hover:text-blue-600 font-medium text-sm" dropdown={[
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
                    label: "Software Services", 
                    href: "/services#software",
                    description: "Comprehensive software solutions for business needs."
                  },
                  { 
                    label: "Internet Connectivity", 
                    href: "/services#connectivity",
                    description: "High-speed internet solutions including Wireless, VSAT, and Last Mile connectivity."
                  },
                  { 
                    label: "IT Infrastructure", 
                    href: "/services#infrastructure",
                    description: "Robust infrastructure solutions for reliable business operations."
                  }
                ]} />
                
                <NavItem href="/customer-service" label="Customer Service" className="text-navy-800 hover:text-blue-600 font-medium text-sm" dropdown={[
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
                
                <NavItem href="/resources" label="Resources" className="text-navy-800 hover:text-blue-600 font-medium text-sm" dropdown={[
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
                <Menu className="h-5 w-5 text-navy-800" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNav isOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
    </header>
  );
};

export default Header;
