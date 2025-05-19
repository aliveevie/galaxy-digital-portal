import React from 'react';
import { Shield, Clock, Trophy, Rocket } from 'lucide-react';

interface WhyChooseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhyChooseUsSection = () => {
  return (
    <section className="py-16 px-4 bg-[#F6F6F7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1A1F2C]" data-aos="fade-up">
            Why Choose Galaxy
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            We pride ourselves on delivering exceptional service with cutting-edge technology solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div data-aos="fade-up" data-aos-delay="100">
            <WhyChooseCard 
              icon={<Shield className="h-8 w-8 text-[#33C3F0]" />}
              title="Reliable Security"
              description="Advanced protection for your systems, data, and digital assets."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <WhyChooseCard 
              icon={<Clock className="h-8 w-8 text-[#33C3F0]" />}
              title="24/7 Support"
              description="Round-the-clock technical support and rapid response times."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <WhyChooseCard 
              icon={<Trophy className="h-8 w-8 text-[#33C3F0]" />}
              title="Award-Winning"
              description="Recognized for excellence in IT and telecommunications services."
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <WhyChooseCard 
              icon={<Rocket className="h-8 w-8 text-[#33C3F0]" />}
              title="Innovation Focus"
              description="Constantly evolving to bring you the latest technology solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyChooseCard = ({ icon, title, description }: WhyChooseCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
    <div className="mx-auto bg-[#F6F6F7] rounded-full w-16 h-16 flex items-center justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-[#1A1F2C]">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default WhyChooseUsSection; 