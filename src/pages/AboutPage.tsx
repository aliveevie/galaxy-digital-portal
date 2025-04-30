import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users } from 'lucide-react';
import HeroSection from '@/components/HeroSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      <HeroSection 
        title="About Galaxy ITT"
        description="Learn more about our company, our team, and our mission"
        showLogo={false}
        showButton={false}
      />
      
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#1A1F2C]">
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Users className="h-16 w-16 text-[#33C3F0] mb-4" />
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Users className="h-16 w-16 text-[#33C3F0] mb-4" />
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <Users className="h-16 w-16 text-[#33C3F0] mb-4" />
              <h3 className="text-xl font-bold mb-2">Emily Johnson</h3>
              <p className="text-gray-600">CFO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#F6F6F7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#1A1F2C]">
            Our Mission
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            At Galaxy ITT, we strive to provide innovative technology solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
