
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Globe, Navigation, Sparkles, CheckCircle, ShieldCheck, Clock, Trophy } from 'lucide-react';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      {/* Added Header */}
      <Header />
      
      {/* Enhanced Header section with gradient background matching logo colors */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4 mt-[-50px]">
          <div className="flex justify-center mb-6">
            <img 
              src="/lovable-uploads/67b936c0-aa3a-4b93-a661-a3a44fe17e3d.png"
              alt="Galaxy ITT Logo" 
              className="h-32 md:h-40 w-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Innovative Technology Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Transforming businesses through cutting-edge digital innovation and expert IT consulting
          </p>
          <div className="flex justify-center">
            <Button 
              className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-12 py-7 text-xl
                bg-opacity-70 backdrop-blur-sm rounded-xl
                before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                after:content-[''] after:absolute after:inset-0 
                after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                border border-[#33C3F0]/30"
            >
              Our Services
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
              icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
              title="IT Consulting"
              description="Strategic technology guidance to optimize your business operations and drive innovation."
            />
            <ServiceCard 
              icon={<Globe className="h-8 w-8 text-[#33C3F0]" />}
              title="Cloud Solutions"
              description="Secure, scalable cloud infrastructure and migration services for modern businesses."
            />
            <ServiceCard 
              icon={<Navigation className="h-8 w-8 text-[#33C3F0]" />}
              title="Software Development"
              description="Custom software solutions designed to meet your unique business requirements."
            />
            <ServiceCard 
              icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
              title="Cybersecurity"
              description="Comprehensive security services to protect your valuable data and systems."
            />
            <ServiceCard 
              icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
              title="IT Infrastructure"
              description="Robust infrastructure solutions designed for reliability and performance."
            />
            <ServiceCard 
              icon={<Sparkles className="h-8 w-8 text-[#33C3F0]" />}
              title="Network Installations"
              description="Professional wired and wireless network setup and configuration."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - NEW */}
      <section className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At Galaxy ITT, we're committed to delivering exceptional value through our technology services.
            Here's why clients trust us with their digital transformation needs:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <WhyChooseCard 
              icon={<Trophy className="h-8 w-8 text-[#33C3F0]" />}
              title="Proven Expertise"
              description="Years of experience delivering successful IT solutions across various industries."
            />
            <WhyChooseCard 
              icon={<ShieldCheck className="h-8 w-8 text-[#33C3F0]" />}
              title="Security Focused"
              description="Comprehensive approach to protecting your valuable data and systems."
            />
            <WhyChooseCard 
              icon={<Clock className="h-8 w-8 text-[#33C3F0]" />}
              title="Timely Delivery"
              description="Committed to delivering projects on schedule and within budget."
            />
            <WhyChooseCard 
              icon={<CheckCircle className="h-8 w-8 text-[#33C3F0]" />}
              title="Quality Assurance"
              description="Rigorous testing and quality control for all our solutions."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/about">
              <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#221F26] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Galaxy ITT</h2>
              <p className="text-lg mb-4 text-gray-300">
                Galaxy ITT is a premier provider of innovative technology solutions, dedicated to helping businesses navigate the digital universe.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                With decades of combined experience, our team of experts delivers customized solutions that drive efficiency, security, and growth.
              </p>
              <Link to="/about">
                <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 bg-gradient-to-br from-[#33C3F0] to-[#9B87F5] rounded-lg p-1">
              <div className="bg-[#221F26] rounded-lg w-full h-full p-6">
                <div className="aspect-video bg-[#2C3342] rounded-lg flex items-center justify-center">
                  <p className="text-gray-300">Company Video</p>
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
      <section className="py-16 px-4 bg-gradient-to-r from-[#1A1F2C] to-[#33C3F0]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discover how our technology solutions can propel your business forward.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-[#33C3F0] hover:bg-gray-100 px-8 py-6 text-lg">
              Contact Us Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
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
              <li><Link to="/" className="text-gray-300 hover:text-white">IT Consulting</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Cloud Solutions</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Software Development</Link></li>
              <li><Link to="/" className="text-gray-300 hover:text-white">Cybersecurity</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/about#management" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link to="/about#careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
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

const WhyChooseCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <div className="mx-auto bg-[#F6F6F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TestimonialCard = ({ quote, author, company }) => (
  <Card className="bg-[#2C3342] border-none">
    <CardContent className="pt-6">
      <p className="text-gray-200 mb-4">"{quote}"</p>
      <p className="font-semibold text-white">{author}</p>
      <p className="text-[#33C3F0]">{company}</p>
    </CardContent>
  </Card>
);

export default Index;
