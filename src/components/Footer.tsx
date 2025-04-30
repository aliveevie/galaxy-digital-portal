import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1A1F2C] to-[#221F26] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Top Section with Logo and Description */}
        <div className="mb-12 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/67b936c0-aa3a-4b93-a661-a3a44fe17e3d.png" 
              alt="Galaxy ITT Logo" 
              className="h-12 w-auto mx-auto md:mx-0"
            />
          </div>
          <p className="text-gray-300 max-w-md mx-auto md:mx-0 md:text-right">
            Transforming businesses through cutting-edge digital innovation and expert IT consulting.
          </p>
        </div>

        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10 mb-12">
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#33C3F0]/20">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">IT Consulting</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Cloud Solutions</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Software Development</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Cybersecurity</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">IT Infrastructure</Link></li>
              <li><Link to="/#services" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Network Installations</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#33C3F0]/20">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about#mandate" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Our Mandate</Link></li>
              <li><Link to="/about#values" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Core Values</Link></li>
              <li><Link to="/about#management" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Management</Link></li>
              <li><Link to="/about#board" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Board of Directors</Link></li>
              <li><Link to="/about#organigram" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Organigram</Link></li>
              <li><Link to="/about#careers" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Careers</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#33C3F0]/20">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">FAQ</Link></li>
              <li><Link to="/media" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Media</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">News</Link></li>
              <li><Link to="/videos" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Videos</Link></li>
            </ul>
            <h4 className="text-lg font-semibold mt-8 mb-6 pb-2 border-b border-[#33C3F0]/20">Customer Service</h4>
            <ul className="space-y-3">
              <li><Link to="/faq" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-[#33C3F0] transition-colors flex items-center">Support</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 pb-2 border-b border-[#33C3F0]/20">Contact Us</h4>
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
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
