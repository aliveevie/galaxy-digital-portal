import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Globe, Navigation, Sparkles } from 'lucide-react';
import GalaxyAnimation from '@/components/GalaxyAnimation';
import LogoAnimation from '@/components/LogoAnimation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
      {/* Header section with galaxy animation */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <GalaxyAnimation />
        <div className="relative z-10 text-center px-4">
          <LogoAnimation />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Innovative Technology Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Transforming businesses through cutting-edge digital innovation and expert IT consulting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white px-8 py-6 text-lg">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">
            Our Expert Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Rocket className="h-8 w-8 text-[#1EAEDB]" />}
              title="IT Consulting"
              description="Strategic technology guidance to optimize your business operations and drive innovation."
            />
            <ServiceCard 
              icon={<Globe className="h-8 w-8 text-[#1EAEDB]" />}
              title="Cloud Solutions"
              description="Secure, scalable cloud infrastructure and migration services for modern businesses."
            />
            <ServiceCard 
              icon={<Navigation className="h-8 w-8 text-[#1EAEDB]" />}
              title="Software Development"
              description="Custom software solutions designed to meet your unique business requirements."
            />
            <ServiceCard 
              icon={<Sparkles className="h-8 w-8 text-[#1EAEDB]" />}
              title="Cybersecurity"
              description="Comprehensive security services to protect your valuable data and systems."
            />
            <ServiceCard 
              icon={<Rocket className="h-8 w-8 text-[#1EAEDB]" />}
              title="IT Infrastructure"
              description="Robust infrastructure solutions designed for reliability and performance."
            />
            <ServiceCard 
              icon={<Sparkles className="h-8 w-8 text-[#1EAEDB]" />}
              title="Digital Transformation"
              description="End-to-end transformation strategies to modernize your business."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#F5F7FA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1A1F2C]">About Galaxy ITT</h2>
              <p className="text-lg mb-4 text-gray-700">
                Galaxy ITT is a premier provider of innovative technology solutions, dedicated to helping businesses navigate the digital universe.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                With decades of combined experience, our team of experts delivers customized solutions that drive efficiency, security, and growth.
              </p>
              <Button className="bg-[#1EAEDB] hover:bg-[#33C3F0] text-white">
                Learn More About Us
              </Button>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#1EAEDB] to-[#D946EF] rounded-lg p-1">
              <div className="bg-white rounded-lg w-full h-full p-6">
                <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">Company Video</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-[#1A1F2C] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Galaxy ITT transformed our business with their cloud solutions. Our operations are now more efficient than ever."
              author="Jane Smith, CEO"
              company="TechCorp"
            />
            <TestimonialCard 
              quote="The cybersecurity team at Galaxy ITT helped us prevent what could have been a catastrophic data breach."
              author="Michael Johnson, CTO"
              company="SecureData Inc."
            />
            <TestimonialCard 
              quote="Their software development team delivered a custom solution that perfectly met our requirements and timeline."
              author="Sarah Williams, COO"
              company="Innovation Labs"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1EAEDB] to-[#8B5CF6]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discover how our technology solutions can propel your business forward.
          </p>
          <Button className="bg-white text-[#1EAEDB] hover:bg-gray-100 px-8 py-6 text-lg">
            Contact Us Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="h-16 mb-4">
              <LogoAnimation />
            </div>
            <p className="text-gray-300">
              Innovative technology solutions for forward-thinking businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">IT Consulting</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Software Development</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="not-italic text-gray-300">
              <p>123 Tech Avenue</p>
              <p>Innovation City, IC 12345</p>
              <p className="mt-2">contact@galaxyitt.com</p>
              <p>(555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="pt-6">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#1EAEDB]">{company}</p>
    </CardContent>
  </Card>
);

export default Index;
