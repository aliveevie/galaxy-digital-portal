import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, Navigation, Server, Shield, Cloud, Trophy, 
  Code, Lock, Network, Wifi, Building2, Satellite
} from 'lucide-react';

type ServiceType = 'it-consulting' | 'cloud-solutions' | 'software-services' | 'internet-connectivity' | 'it-infrastructure';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<ServiceType>('it-consulting');
  
  // References to service sections for scroll effects
  const itConsultingRef = useRef<HTMLDivElement>(null);
  const cloudSolutionsRef = useRef<HTMLDivElement>(null);
  const softwareServicesRef = useRef<HTMLDivElement>(null);
  const internetConnectivityRef = useRef<HTMLDivElement>(null);
  const itInfrastructureRef = useRef<HTMLDivElement>(null);
  
  // Handle service tab click
  const handleServiceClick = (service: ServiceType) => {
    setActiveService(service);
    
    // Scroll to the selected service section
    const refs = {
      'it-consulting': itConsultingRef,
      'cloud-solutions': cloudSolutionsRef,
      'software-services': softwareServicesRef,
      'internet-connectivity': internetConnectivityRef,
      'it-infrastructure': itInfrastructureRef
    };
    
    if (refs[service]?.current) {
      refs[service].current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };
  
  return (
    <section id="services-section" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1F2C]" data-aos="fade-up">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        {/* Service Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => handleServiceClick('it-consulting')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'it-consulting'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            IT Consulting
          </button>
          <button
            onClick={() => handleServiceClick('cloud-solutions')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'cloud-solutions'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cloud Solutions
          </button>
          <button
            onClick={() => handleServiceClick('software-services')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'software-services'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Software Services
          </button>
          <button
            onClick={() => handleServiceClick('internet-connectivity')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'internet-connectivity'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Internet Connectivity
          </button>
          <button
            onClick={() => handleServiceClick('it-infrastructure')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'it-infrastructure'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            IT Infrastructure
          </button>
        </div>
        
        {/* Service Content Sections */}
        <div className="service-content">
          {/* IT Consulting Section */}
          <div 
            ref={itConsultingRef} 
            id="it-consulting-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'it-consulting' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Trophy className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">IT Consulting</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Strategic Technology Planning
                </h2>
                <p className="text-gray-600 mb-6">
                  Our IT consulting services help businesses align their technology strategy with their overall business goals, ensuring optimal performance, scalability, and return on investment.
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
                <Link to="/services/it-consulting" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
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
              <div className="order-1" data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Cloud Solutions" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-2" data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Cloud className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Cloud Solutions</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Scalable Cloud Infrastructure
                </h2>
                <p className="text-gray-600 mb-6">
                  Our cloud solutions help businesses leverage the power and flexibility of cloud computing to improve efficiency, scalability, and resilience while reducing costs.
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
                <Link to="/services/cloud-solutions" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Updated Software Services Section */}
          <div 
            ref={softwareServicesRef} 
            id="software-services-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'software-services' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Code className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Software Services</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Professional Software Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our comprehensive software services help businesses streamline operations, enhance productivity, and achieve digital transformation goals through tailored solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Enterprise software solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Custom application development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Software maintenance and support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">System integration services</span>
                  </li>
                </ul>
                <Link to="/services/software-services" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Software Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* New Internet Connectivity Section */}
          <div 
            ref={internetConnectivityRef} 
            id="internet-connectivity-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'internet-connectivity' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1" data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Internet Connectivity Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-2" data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Wifi className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Internet Connectivity</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  High-Speed Internet Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  We provide reliable and high-speed internet connectivity solutions tailored to your business needs through multiple technologies.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Wifi className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Wireless Connectivity Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <Satellite className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">VSAT Services</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Last Mile Connectivity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">24/7 Network Monitoring & Support</span>
                  </li>
                </ul>
                <Link to="/services/internet-connectivity" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
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
                  Our IT infrastructure services provide the foundation for your technology ecosystem, ensuring reliability, performance, and seamless operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Network design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Server virtualization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Business continuity planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Infrastructure monitoring and maintenance</span>
                  </li>
                </ul>
                <Link to="/services/it-infrastructure" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="IT Infrastructure" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 