import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  Phone, Mail, MessageSquare, Clock, Users, Shield, 
  ArrowRight, CheckCircle, AlertCircle, Headphones,
  FileText, Zap, UserCheck, Settings
} from 'lucide-react';

type ServiceType = 'service-desk' | 'escalation-path';

const CustomerServicePage = () => {
  const [activeService, setActiveService] = useState<ServiceType>('service-desk');
  const location = useLocation();
  
  useEffect(() => {
    if (location.hash) {
      const serviceId = location.hash.substring(1);
      if (serviceId === 'desk') {
        setActiveService('service-desk');
      } else if (serviceId === 'escalation') {
        setActiveService('escalation-path');
      }
    }
  }, [location]);

  const handleServiceClick = (service: ServiceType) => {
    setActiveService(service);
    const hash = service === 'service-desk' ? '#desk' : '#escalation';
    window.history.replaceState(null, '', `/customer-service${hash}`);
  };

  const serviceDeskFeatures = [
    '24/7 Technical Support',
    'Multi-channel Support (Phone, Email, Chat)',
    'Real-time Issue Tracking',
    'Knowledge Base Access',
    'Remote Desktop Assistance',
    'Service Level Agreements (SLAs)',
    'Automated Ticket Routing',
    'Customer Portal Access'
  ];

  const escalationLevels = [
    {
      level: 'Level 1',
      title: 'First Response',
      description: 'Initial contact and basic troubleshooting',
      responseTime: '2-4 hours',
      team: 'Support Specialists',
      icon: Headphones
    },
    {
      level: 'Level 2',
      title: 'Technical Escalation',
      description: 'Advanced technical support and problem resolution',
      responseTime: '4-8 hours',
      team: 'Senior Technicians',
      icon: Settings
    },
    {
      level: 'Level 3',
      title: 'Expert Resolution',
      description: 'Complex issues requiring specialized expertise',
      responseTime: '8-24 hours',
      team: 'Technical Experts',
      icon: Zap
    },
    {
      level: 'Level 4',
      title: 'Management Escalation',
      description: 'Critical issues requiring management attention',
      responseTime: '24-48 hours',
      team: 'Management Team',
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Customer Service
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Dedicated support services to ensure your success with our technology solutions.
          </p>
        </div>
      </div>

      {/* Service Navigation */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Support Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the support service that best meets your needs.
            </p>
          </div>

          {/* Service Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => handleServiceClick('service-desk')}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeService === 'service-desk'
                  ? 'bg-[#33C3F0] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <Headphones className="w-4 h-4" />
              <span className="font-medium">Service Desk</span>
            </button>
            <button
              onClick={() => handleServiceClick('escalation-path')}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                activeService === 'escalation-path'
                  ? 'bg-[#33C3F0] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="font-medium">Escalation Path</span>
            </button>
          </div>

          {/* Service Content */}
          {activeService === 'service-desk' && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Service Image */}
                <div className="relative h-96 lg:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                    alt="Service Desk" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#33C3F0]/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm">
                      <Headphones className="w-5 h-5 text-[#33C3F0] mr-2" />
                      <span className="text-[#1A1F2C] font-semibold text-sm">
                        Service Desk
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#1A1F2C] mb-4">
                    24/7 Service Desk
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    Our comprehensive service desk provides round-the-clock technical support to ensure your systems run smoothly and efficiently.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-[#1A1F2C] mb-4">Key Features</h4>
                    <div className="grid gap-3">
                      {serviceDeskFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#33C3F0] mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3">
                      Contact Support
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" className="border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0] hover:text-white px-8 py-3">
                      Knowledge Base
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeService === 'escalation-path' && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="p-8 lg:p-12">
                <h3 className="text-3xl font-bold text-[#1A1F2C] mb-6 text-center">
                  Escalation Path
                </h3>
                <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                  Our structured escalation process ensures that issues are resolved efficiently with the appropriate level of expertise and management attention.
                </p>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {escalationLevels.map((level, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-[#33C3F0]/10 flex items-center justify-center mr-4">
                          <level.icon className="w-6 h-6 text-[#33C3F0]" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#33C3F0]">{level.level}</div>
                          <div className="text-lg font-bold text-[#1A1F2C]">{level.title}</div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4 text-sm">{level.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex items-center text-sm">
                          <Clock className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-700">Response: {level.responseTime}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <Users className="w-4 h-4 text-gray-500 mr-2" />
                          <span className="text-gray-700">{level.team}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
                    <h4 className="text-xl font-semibold text-[#1A1F2C] mb-3">Need Immediate Assistance?</h4>
                    <p className="text-gray-600 mb-4">
                      For critical issues requiring immediate attention, contact our emergency support line.
                    </p>
                    <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3">
                      Emergency Support
                      <Phone className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-[#1A1F2C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Support?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our customer service team is here to help you succeed with our technology solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-3 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              Call Support
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-3 text-lg">
              <Mail className="mr-2 w-5 h-5" />
              Email Support
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

export default CustomerServicePage;
