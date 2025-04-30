
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const AboutPage = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Handle hash navigation to scroll to the right section
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 px-4 bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Galaxy ITT</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Your trusted partner for innovative technology solutions in sub-Saharan Africa
          </p>
        </div>
      </div>
      
      {/* Mandate Section */}
      <section id="mandate" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Mandate</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#33C3F0]">
              <h3 className="text-2xl font-semibold text-[#1A1F2C] mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a leading provider of broadband connectivity, software solutions and drive digital transformation in sub-Saharan Africa.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-[#33C3F0]">
              <h3 className="text-2xl font-semibold text-[#1A1F2C] mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide reliable internet services, telecommunications, & software solutions to Ministries, Departments, and Agencies (MDAs) and individuals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Management Section */}
      <section id="management" className="py-16 px-4 bg-[#221F26] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Management Team</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#2C3342]/60 p-6 rounded-lg text-center">
                <div className="w-24 h-24 rounded-full bg-[#33C3F0]/20 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-[#33C3F0]" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Executive {i}</h3>
                <p className="text-sm text-gray-300 mb-3">Chief Position</p>
                <p className="text-sm text-gray-400">
                  Experienced leader with expertise in technology solutions and business development.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Board of Directors */}
      <section id="board" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Board of Directors</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">Executive Director Technical</h3>
              <h4 className="text-lg font-semibold text-[#33C3F0] mb-4">Engr Nura</h4>
              <p className="text-gray-700 leading-relaxed">
                Leads the technical strategy and operations, bringing extensive experience in telecommunications and IT infrastructure development.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">Executive Director Business Development</h3>
              <h4 className="text-lg font-semibold text-[#33C3F0] mb-4">Umar Gumel</h4>
              <p className="text-gray-700 leading-relaxed">
                Responsible for business growth strategies and client relationship management with a strong background in business development.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Organigram Section */}
      <section id="organigram" className="py-16 px-4 bg-[#2C3342] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Company Structure</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
            <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
              Our organizational structure is designed to deliver maximum value to our clients through specialized departments working in harmony.
            </p>
          </div>
          
          <div className="bg-[#1A1F2C]/60 p-8 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="w-48 py-3 bg-[#33C3F0] text-center rounded-lg text-white font-medium mb-8">
                Board of Directors
              </div>
              
              <div className="w-40 py-3 bg-[#33C3F0]/80 text-center rounded-lg text-white font-medium mb-8">
                CEO
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
                <div className="w-full py-3 bg-[#33C3F0]/60 text-center rounded-lg text-white font-medium">
                  Technical Department
                </div>
                <div className="w-full py-3 bg-[#33C3F0]/60 text-center rounded-lg text-white font-medium">
                  Business Development
                </div>
                <div className="w-full py-3 bg-[#33C3F0]/60 text-center rounded-lg text-white font-medium">
                  Administration
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Careers Section */}
      <section id="careers" className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Careers at Galaxy ITT</h2>
            <div className="w-24 h-1 bg-[#33C3F0] mx-auto"></div>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
              Join our team of passionate professionals dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h3 className="text-xl font-bold text-[#1A1F2C] mb-6">Why Work With Us?</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">1</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Professional Growth</h4>
                  <p className="text-gray-600">Continuous learning and development opportunities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">2</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Innovation Culture</h4>
                  <p className="text-gray-600">Work on cutting-edge technologies and solutions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">3</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Impactful Work</h4>
                  <p className="text-gray-600">Make a difference in digital transformation</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 rounded-full bg-[#33C3F0]/20 flex items-center justify-center">
                    <span className="text-[#33C3F0] font-bold">4</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-[#1A1F2C] mb-2">Collaborative Team</h4>
                  <p className="text-gray-600">Work with talented professionals in a supportive environment</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-[#33C3F0] hover:bg-[#1EAEDB] text-white">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
