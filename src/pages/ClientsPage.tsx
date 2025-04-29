
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import GalaxyAnimation from '@/components/GalaxyAnimation';

const clients = [
  {
    id: "techcorp",
    name: "TechCorp",
    industry: "Software Development",
    description: "A leading software development company specializing in enterprise solutions.",
    testimonial: "Galaxy ITT transformed our business with their cloud solutions. Our operations are now more efficient than ever."
  },
  {
    id: "securedata",
    name: "SecureData Inc",
    industry: "Cybersecurity",
    description: "Premier provider of cybersecurity solutions for large enterprises.",
    testimonial: "The cybersecurity team at Galaxy ITT helped us prevent what could have been a catastrophic data breach."
  },
  {
    id: "innovation",
    name: "Innovation Labs",
    industry: "Research & Development",
    description: "An R&D firm focused on cutting-edge technology innovations.",
    testimonial: "Their software development team delivered a custom solution that perfectly met our requirements and timeline."
  }
];

const ClientsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342] pb-16">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <GalaxyAnimation />
      </div>
      
      <Header />
      
      <div className="relative z-10 pt-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(30,174,219,0.6)]">
              Our Clients
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're proud to partner with innovative companies across various industries
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client) => (
              <Card key={client.id} className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(30,174,219,0.3)] transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{client.name}</h3>
                  <p className="text-sm text-[#33C3F0] mb-4">{client.industry}</p>
                  <p className="text-gray-300 mb-6">{client.description}</p>
                  <blockquote className="italic text-gray-400 text-sm border-l-2 border-[#33C3F0] pl-4 mb-6">
                    "{client.testimonial}"
                  </blockquote>
                  <Button 
                    className="w-full bg-[#1EAEDB]/20 hover:bg-[#33C3F0]/40 text-white border border-[#33C3F0]/30
                    backdrop-blur-sm
                    before:content-[''] before:absolute before:inset-0 before:bg-[#1EAEDB]/10
                    before:blur-md before:opacity-70 before:-z-10 hover:before:opacity-90"
                    asChild
                  >
                    <Link to={`/clients/${client.id}`}>View Case Study</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
