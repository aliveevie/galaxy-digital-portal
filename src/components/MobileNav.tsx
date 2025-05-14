import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Phone, Mail } from 'lucide-react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface NavSection {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const navSections: NavSection[] = [
    { label: "Home", href: "/" },
    { 
      label: "About Us", 
      href: "/about",
      dropdown: [
        { label: "Our Mandate", href: "/about#mandate" },
        { label: "Our Vision", href: "/about#vision" },
        { label: "Our Mission", href: "/about#mission" },
        { label: "Our Core Values", href: "/about#values" },
        { label: "Management", href: "/about#management" },
        { label: "Board of Directors", href: "/about#board" },
        { label: "Careers", href: "/about#careers" },
      ]
    },
    {
      label: "Services",
      href: "/services",
      dropdown: [
        { label: "IT Consulting", href: "/services#consulting" },
        { label: "Cloud Solutions", href: "/services#cloud" },
        { label: "Software Development", href: "/services#software" },
        { label: "Cybersecurity", href: "/services#security" },
        { label: "IT Infrastructure", href: "/services#infrastructure" },
        { label: "Network Installations", href: "/services#network" },
      ]
    },
    {
      label: "Customer Service",
      href: "/customer-service",
      dropdown: [
        { label: "Service Desk", href: "/customer-service#desk" },
        { label: "Escalation Path", href: "/customer-service#escalation" },
      ]
    },
    {
      label: "Resources",
      href: "/resources",
      dropdown: [
        { label: "FAQ", href: "/faq" },
        { label: "Media", href: "/media" },
        { label: "News", href: "/news" },
        { label: "Video", href: "/video" },
      ]
    }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/25" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Mobile menu panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        {/* Header with blue background */}
        <div className="flex items-center justify-between p-4 bg-blue-600 text-white">
          <div>
            <h3 className="text-lg font-medium">Menu</h3>
          </div>
          <button
            type="button"
            className="rounded-md p-2 text-white hover:bg-blue-700"
            onClick={onClose}
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Contact information */}
        <div className="bg-blue-50 p-4 flex flex-col space-y-2">
          <a href="tel:08039600006" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
            <Phone className="mr-2 h-4 w-4 text-blue-600" />
            <span>08039600006</span>
          </a>
          <a href="mailto:info@galaxyitt.com.ng" className="flex items-center text-sm text-gray-700 hover:text-blue-600">
            <Mail className="mr-2 h-4 w-4 text-blue-600" />
            <span>info@galaxyitt.com.ng</span>
          </a>
        </div>
        
        {/* Navigation items */}
        <div className="py-6 px-5 space-y-6 overflow-y-auto max-h-[calc(100vh-180px)]">
          <div className="flex flex-col space-y-2">
            {navSections.map((section) => (
              <div key={section.label} className="border-b border-gray-200 pb-2">
                {section.dropdown ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between py-2 text-base font-medium text-gray-900"
                      onClick={() => toggleSection(section.label)}
                    >
                      {section.label}
                      {expandedSections[section.label] ? (
                        <ChevronDown className="h-5 w-5 text-blue-500" />
                      ) : (
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      )}
                    </button>
                    
                    {expandedSections[section.label] && section.dropdown && (
                      <div className="mt-2 space-y-2 pl-4">
                        {section.dropdown.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            className="block py-2 text-sm text-gray-500 hover:text-blue-600"
                            onClick={onClose}
                          >
                            {item.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={section.href}
                    className="block py-2 text-base font-medium text-gray-900 hover:text-blue-600"
                    onClick={onClose}
                  >
                    {section.label}
                  </a>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a 
              href="/contact" 
              className="w-full flex items-center justify-center px-4 py-3 rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
              onClick={onClose}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
