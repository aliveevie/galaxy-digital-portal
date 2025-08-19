import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle, Navigation, Server, Shield, Cloud, Trophy, 
  Code, Lock, Network, Wifi, Building2, Satellite
} from 'lucide-react';

type ServiceType = 'broadband-internet' | 'data-center-colocation' | 'cloud-infrastructure' | 'government-messaging' | 'government-digitalization' | 'digital-infrastructure';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<ServiceType>('broadband-internet');
  
  // References to service sections for scroll effects
  const broadbandInternetRef = useRef<HTMLDivElement>(null);
  const dataCenterColocationRef = useRef<HTMLDivElement>(null);
  const cloudInfrastructureRef = useRef<HTMLDivElement>(null);
  const governmentMessagingRef = useRef<HTMLDivElement>(null);
  const governmentDigitalizationRef = useRef<HTMLDivElement>(null);
  const digitalInfrastructureRef = useRef<HTMLDivElement>(null);
  
  // Handle service tab click
  const handleServiceClick = (service: ServiceType) => {
    setActiveService(service);
    
    // Scroll to the selected service section
    const refs = {
      'broadband-internet': broadbandInternetRef,
      'data-center-colocation': dataCenterColocationRef,
      'cloud-infrastructure': cloudInfrastructureRef,
      'government-messaging': governmentMessagingRef,
      'government-digitalization': governmentDigitalizationRef,
      'digital-infrastructure': digitalInfrastructureRef
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
            Our Products & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We provide comprehensive technology solutions to empower government, businesses, and communities with innovative and sustainable digital transformation services.
          </p>
        </div>
        
        {/* Service Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          <button
            onClick={() => handleServiceClick('broadband-internet')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'broadband-internet'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Broadband Internet
          </button>
          <button
            onClick={() => handleServiceClick('data-center-colocation')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'data-center-colocation'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Data Center Colocation
          </button>
          <button
            onClick={() => handleServiceClick('cloud-infrastructure')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'cloud-infrastructure'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Cloud Infrastructure
          </button>
          <button
            onClick={() => handleServiceClick('government-messaging')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'government-messaging'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Government Messaging
          </button>
          <button
            onClick={() => handleServiceClick('government-digitalization')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'government-digitalization'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Government Digitalization
          </button>
          <button
            onClick={() => handleServiceClick('digital-infrastructure')}
            className={`px-4 py-2 rounded-full transition-all ${
              activeService === 'digital-infrastructure'
                ? 'bg-[#33C3F0] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Digital Infrastructure
          </button>
        </div>
        
        {/* Service Content Sections */}
        <div className="service-content">
          {/* Broadband Internet Section */}
          <div 
            ref={broadbandInternetRef} 
            id="broadband-internet-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'broadband-internet' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Trophy className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Broadband Internet</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  High-Speed Internet Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our broadband internet services deliver reliable, high-speed internet connectivity to businesses of all sizes, ensuring fast and stable connections for optimal performance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Wireless and wired broadband options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Scalable bandwidth solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure and encrypted connections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">24/7 technical support</span>
                  </li>
                </ul>
                <Link to="/services/broadband-internet" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Broadband Internet Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Center Colocation Section */}
          <div 
            ref={dataCenterColocationRef} 
            id="data-center-colocation-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'data-center-colocation' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1" data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Data Center Colocation" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-2" data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Cloud className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Data Center Colocation</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Reliable Data Center Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Our data center colocation services provide secure, scalable, and cost-effective hosting solutions for your critical applications and data.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure and climate-controlled environments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">High-speed connectivity and redundant power</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Dedicated support and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Flexible colocation options</span>
                  </li>
                </ul>
                <Link to="/services/data-center-colocation" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Cloud Infrastructure Section */}
          <div 
            ref={cloudInfrastructureRef} 
            id="cloud-infrastructure-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'cloud-infrastructure' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Code className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Cloud Infrastructure</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Scalable Cloud Solutions
                </h2>
                <p className="text-gray-600 mb-6">
                  Our cloud infrastructure services offer flexible, secure, and cost-effective cloud solutions for businesses of all sizes, enabling rapid deployment and scaling.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Public, private, and hybrid cloud options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Enterprise-grade security and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Managed and unmanaged cloud services</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">24/7 technical support</span>
                  </li>
                </ul>
                <Link to="/services/cloud-infrastructure" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Cloud Infrastructure" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Government Messaging Section */}
          <div 
            ref={governmentMessagingRef} 
            id="government-messaging-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'government-messaging' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1" data-aos="fade-right">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Government Messaging Services" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
              <div className="order-2" data-aos="fade-left">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Shield className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Government Messaging</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Secure Government Communication
                </h2>
                <p className="text-gray-600 mb-6">
                  Our government messaging services ensure secure, reliable, and efficient communication channels for government agencies, including secure email, messaging, and collaboration platforms.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure email and messaging</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Collaboration and document sharing</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure file transfer</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Compliance and security certifications</span>
                  </li>
                </ul>
                <Link to="/services/government-messaging" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Government Digitalization Section */}
          <div 
            ref={governmentDigitalizationRef} 
            id="government-digitalization-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'government-digitalization' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Building2 className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Government Digitalization</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Digital Transformation for Government
                </h2>
                <p className="text-gray-600 mb-6">
                  We help government agencies modernize their operations, improve service delivery, and enhance citizen engagement through digital solutions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Digital governance and policy management</span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Citizen-centric digital services</span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Secure and scalable IT infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <Building2 className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Data analytics and insights</span>
                  </li>
                </ul>
                <Link to="/services/government-digitalization" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Government Digitalization" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Digital Infrastructure Section */}
          <div 
            ref={digitalInfrastructureRef} 
            id="digital-infrastructure-section" 
            className={`py-16 transition-opacity duration-500 ${activeService === 'digital-infrastructure' ? 'opacity-100' : 'opacity-100'}`}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1" data-aos="fade-right">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 mb-4">
                  <Network className="w-4 h-4 text-[#33C3F0] mr-2" />
                  <span className="text-[#33C3F0] text-sm font-medium">Digital Infrastructure</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-[#1A1F2C]">
                  Robust Digital Infrastructure
                </h2>
                <p className="text-gray-600 mb-6">
                  Our digital infrastructure services provide the foundation for your technology ecosystem, ensuring reliability, performance, and seamless operations for all your digital needs.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Network design and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Server virtualization and hosting</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Business continuity planning</span>
                  </li>
                  <li className="flex items-start">
                    <Network className="h-5 w-5 text-[#33C3F0] mr-2 mt-0.5" />
                    <span className="text-gray-700">Infrastructure monitoring and maintenance</span>
                  </li>
                </ul>
                <Link to="/services/digital-infrastructure" className="inline-block">
                  <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="order-1 md:order-2" data-aos="fade-left">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Digital Infrastructure" 
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