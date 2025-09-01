import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { 
  FileText, Video, Newspaper, HelpCircle, 
  ArrowRight, ExternalLink
} from 'lucide-react';

const ResourcesPage = () => {
  const resources = [
    {
      title: "FAQ",
      description: "Answers to commonly asked questions about our services.",
      icon: HelpCircle,
      href: "/faq",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Media",
      description: "Press releases and media resources about our company.",
      icon: Newspaper,
      href: "/media",
      color: "from-green-500 to-green-600"
    },
    {
      title: "News",
      description: "Latest updates and announcements from our team.",
      icon: FileText,
      href: "/news",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Video",
      description: "Instructional and informational videos about our solutions.",
      icon: Video,
      href: "/videos",
      color: "from-orange-500 to-orange-600"
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
            Resources
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Access helpful resources, documentation, and information about our services and company.
          </p>
        </div>
      </div>

      {/* Resources Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Available Resources</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of resources designed to help you get the most out of our services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Link 
                key={index}
                to={resource.href}
                className="group block"
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-105">
                  <div className={`h-32 bg-gradient-to-r ${resource.color} rounded-t-xl flex items-center justify-center`}>
                    <resource.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1F2C] mb-3 group-hover:text-[#33C3F0] transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center text-[#33C3F0] font-medium group-hover:text-[#1EAEDB] transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600">
              Find more helpful information and support options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Customer Support</h3>
              <p className="text-gray-600 mb-6">
                Need help with our services? Our customer support team is here to assist you.
              </p>
              <Link to="/customer-service">
                <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                  Get Support
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-6">
                Have questions or need to get in touch? We'd love to hear from you.
              </p>
              <Link to="/contact">
                <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResourcesPage;
