
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img 
            src="/lovable-uploads/67b936c0-aa3a-4b93-a661-a3a44fe17e3d.png" 
            alt="Galaxy ITT Logo" 
            className="h-10 w-auto mb-4"
          />
          <p className="text-gray-300">
            Innovative technology solutions for forward-thinking businesses.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-[#33C3F0] transition-colors">IT Consulting</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Software Development</Link></li>
            <li><Link to="/" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Cybersecurity</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-gray-300 hover:text-[#33C3F0] transition-colors">About Us</Link></li>
            <li><Link to="/about#management" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Our Team</Link></li>
            <li><Link to="/about#careers" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-[#33C3F0] transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="not-italic text-gray-300">
            <p>No.2 Kiyawa Road</p>
            <p>Dutse, Jigawa State</p>
            <p className="mt-2">info@galaxyitt.com.ng</p>
            <p>08039600006</p>
          </address>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
