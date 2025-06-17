import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#000000]/90 text-white relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Top Section with Logo and Description */}
        <div className="mb-16 text-center md:text-left md:flex md:items-start md:justify-between">
          <div className="mb-8 md:mb-0 md:max-w-xl">
            <img 
              src="/lovable-uploads/67b936c0-aa3a-4b93-a661-a3a44fe17e3d.png" 
              alt="Galaxy ITT Logo" 
              className="h-12 w-auto mx-auto md:mx-0 mb-6"
            />
            <p className="text-gray-300 leading-relaxed">
              Transforming businesses through cutting-edge digital innovation and expert IT consulting.
            </p>
          </div>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {/* Services Column */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-6 pb-2 flex items-center">
              Services
              <span className="ml-2 h-4 w-0.5 bg-[#33C3F0]" />
            </h4>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">IT Consulting</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Cloud Solutions</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Software Development</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Cybersecurity</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">IT Infrastructure</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Network Installations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-6 pb-2 flex items-center">
              Company
              <span className="ml-2 h-4 w-0.5 bg-[#33C3F0]" />
            </h4>
            <ul className="space-y-3">
              <li><Link to="/about#mandate" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Our Mandate</Link></li>
              <li><Link to="/about#values" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Core Values</Link></li>
              <li><Link to="/about#management" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Management</Link></li>
              <li><Link to="/about#board" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Board of Directors</Link></li>
              <li><Link to="/about#organigram" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Organigram</Link></li>
              <li><Link to="/about#careers" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Careers</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-6 pb-2 flex items-center">
              Resources
              <span className="ml-2 h-4 w-0.5 bg-[#33C3F0]" />
            </h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">FAQ</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Media</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">News</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Videos</Link></li>
            </ul>
            <h4 className="text-lg font-semibold mt-8 mb-6 pb-2 flex items-center">
              Customer Service
              <span className="ml-2 h-4 w-0.5 bg-[#33C3F0]" />
            </h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#33C3F0] transition-colors block">Support</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="relative">
            <h4 className="text-lg font-semibold mb-6 pb-2 flex items-center">
              Contact Us
              <span className="ml-2 h-4 w-0.5 bg-[#33C3F0]" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#33C3F0] mt-1" />
                <div>
                  <p className="text-gray-300">No.2 Kiyawa Road</p>
                  <p className="text-gray-300">Dutse, Jigawa State</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#33C3F0]" />
                <a href="mailto:info@galaxyitt.com.ng" className="text-gray-300 hover:text-[#33C3F0] transition-colors">
                  info@galaxyitt.com.ng
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#33C3F0]" />
                <a href="tel:+2348039600006" className="text-gray-300 hover:text-[#33C3F0] transition-colors">
                  08039600006
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.
            </p>
            <div className="flex items-center">
              <Link to="/" className="text-gray-400 hover:text-[#33C3F0] text-sm">Home</Link>
              <span className="mx-2 text-gray-600">•</span>
              <Link to="/privacy" className="text-gray-400 hover:text-[#33C3F0] text-sm">Privacy Policy</Link>
              <span className="mx-2 text-gray-600">•</span>
              <Link to="/terms" className="text-gray-400 hover:text-[#33C3F0] text-sm">Terms of Service</Link>
              <span className="mx-2 text-gray-600">•</span>
              <Link to="/faq" className="text-gray-400 hover:text-[#33C3F0] text-sm">FAQs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
