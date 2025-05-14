import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Wifi, Cloud, ShieldCheck, PhoneForwarded, Network, Code } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services-section" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1F2C]" data-aos="fade-up">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Comprehensive telecommunications and IT solutions tailored to meet the unique needs of your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow" data-aos="fade-up" data-aos-delay="100">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full p-3 mr-4">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2C]">Fiber Internet</h3>
            </div>
            <p className="text-gray-600 mb-4">High-speed fiber optic internet with unmatched reliability and performance for businesses of all sizes.</p>
            <Link to="#">
              <Button variant="ghost" className="group">
                <span className="text-[#33C3F0] group-hover:underline">Learn More</span>
                <ChevronRight className="h-5 w-5 text-[#33C3F0] ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Additional service cards would be here */}
          {/* You can create a ServiceCard component for better reusability */}
        </div>
        
        <div className="flex justify-center mt-12">
          <Link to="/services">
            <Button className="bg-gradient-to-r from-[#33C3F0] to-[#9B87F5] hover:opacity-90 text-white px-6 py-2">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 