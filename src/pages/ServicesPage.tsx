import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  CheckCircle, Server, Shield, Cloud, Code, 
  Network, Wifi, Satellite, Building2, Globe,
  ArrowRight, Phone, Mail, MessageSquare
} from 'lucide-react';

import highspeed from '/high-speed-internet.jpg';
import govt from '/govt-communications.jpg';
import datacenter from '/data-centers.jpg';

type ServiceType = 'broadband-internet' | 'data-center-colocation' | 'cloud-infrastructure' | 'government-messaging' | 'government-digitalization' | 'digital-infrastructure';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<ServiceType>('broadband-internet');
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.substring(1);
      if (serviceId && isValidServiceType(serviceId)) {
        setActiveService(serviceId as ServiceType);
      }
    }
  }, [location]);

  const isValidServiceType = (id: string): boolean => {
    return ['broadband-internet', 'data-center-colocation', 'cloud-infrastructure', 'government-messaging', 'government-digitalization', 'digital-infrastructure'].includes(id);
  };

  const handleServiceClick = (service: ServiceType) => {
    setActiveService(service);
    // Update URL hash without page reload
    window.history.replaceState(null, '', `#${service}`);
  };

  const services = [
    {
      id: 'broadband-internet',
      title: 'Broadband Internet Services',
      icon: Wifi,
      description: 'High-speed internet solutions including Fiber optics, Radio, and VSAT services.',
      features: [
        'Fiber optic connectivity',
        'Wireless broadband solutions',
        'VSAT satellite services',
        'Scalable bandwidth options',
        '24/7 technical support',
        'Secure and encrypted connections'
      ],
      image: highspeed,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'data-center-colocation',
      title: 'Data Center Colocation Services',
      icon: Server,
      description: 'Secure, scalable, and cost-effective hosting solutions for critical applications.',
      features: [
        'Climate-controlled environments',
        'Redundant power systems',
        'High-speed connectivity',
        '24/7 security monitoring',
        'Dedicated support team',
        'Flexible colocation options'
      ],
      image: datacenter,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud Infrastructure (IaaS, PaaS, SaaS)',
      icon: Cloud,
      description: 'Flexible, secure, and cost-effective cloud solutions for businesses of all sizes.',
      features: [
        'Infrastructure as a Service (IaaS)',
        'Platform as a Service (PaaS)',
        'Software as a Service (SaaS)',
        'Public, private, and hybrid cloud',
        'Enterprise-grade security',
        'Managed cloud services'
      ],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'government-messaging',
      title: 'Government-Wide Messaging and Collaboration',
      icon: Shield,
      description: 'Secure government-wide messaging and collaboration platforms.',
      features: [
        'Secure email systems',
        'Collaboration platforms',
        'Document sharing solutions',
        'Secure file transfer',
        'Compliance certifications',
        'Government-grade security'
      ],
      image: govt,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'government-digitalization',
      title: 'Government Digitalization and Automation',
      icon: Building2,
      description: 'Digital transformation and automation services for government agencies.',
      features: [
        'Digital governance solutions',
        'Policy management systems',
        'Citizen-centric services',
        'Process automation',
        'Data analytics and insights',
        'Digital transformation consulting'
      ],
      image: 'https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'digital-infrastructure',
      title: 'Digital Infrastructure for Government and Underserved Communities',
      icon: Network,
      description: 'Robust digital infrastructure solutions for government and underserved communities.',
      features: [
        'Network design and implementation',
        'Server virtualization',
        'Business continuity planning',
        'Infrastructure monitoring',
        'Community connectivity solutions',
        'Digital inclusion programs'
      ],
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const currentService = services.find(service => service.id === activeService);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Our Products & Services
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Comprehensive technology solutions to empower government, businesses, and communities with innovative and sustainable digital transformation services.
          </p>
        </div>
      </div>

      {/* Services Navigation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Choose Your Product & Service</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of technology solutions designed to meet your specific needs.
            </p>
          </div>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceClick(service.id as ServiceType)}
                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeService === service.id
                    ? 'bg-[#33C3F0] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                }`}
              >
                <service.icon className="w-4 h-4" />
                <span className="font-medium">{service.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Service Content */}
          {currentService && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Service Image */}
                <div className="relative h-96 lg:h-full">
                  <img 
                    src={currentService.image} 
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                      <currentService.icon className="w-5 h-5 text-[#33C3F0] mr-2" />
                      <span className="text-[#1A1F2C] font-semibold text-sm">
                        {currentService.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#1A1F2C] mb-4">
                    {currentService.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {currentService.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-[#1A1F2C] mb-4">Key Features</h4>
                    <div className="grid gap-3">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white px-8 py-3">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Services Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">All Our Products & Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our complete portfolio of technology solutions designed for the modern digital landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => handleServiceClick(service.id as ServiceType)}
              >
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#33C3F0]" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-3 group-hover:text-[#33C3F0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#33C3F0] font-medium group-hover:text-[#1EAEDB] transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-[#1A1F2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can transform your business and drive digital success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-3 text-lg">
              <Mail className="mr-2 w-5 h-5" />
              Send Email
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-3 text-lg">
              <MessageSquare className="mr-2 w-5 h-5" />
              Live Chat
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
