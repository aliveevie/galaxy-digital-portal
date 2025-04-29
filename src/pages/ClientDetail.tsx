
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import GalaxyAnimation from '@/components/GalaxyAnimation';

// Dummy client data - in a real app, this would come from an API
const clientsData = {
  "techcorp": {
    name: "TechCorp",
    industry: "Software Development",
    description: "A leading software development company specializing in enterprise solutions.",
    testimonial: "Galaxy ITT transformed our business with their cloud solutions. Our operations are now more efficient than ever.",
    logo: "TC",
    challenge: "TechCorp was struggling with outdated infrastructure that was hindering their ability to scale and meet increased customer demand.",
    solution: "Galaxy ITT implemented a comprehensive cloud migration strategy, modernizing their infrastructure and improving their deployment processes.",
    results: "50% reduction in deployment time, 40% decrease in infrastructure costs, and significantly improved system reliability.",
    contact: "Jane Smith, CTO"
  },
  "securedata": {
    name: "SecureData Inc",
    industry: "Cybersecurity",
    description: "Premier provider of cybersecurity solutions for large enterprises.",
    testimonial: "The cybersecurity team at Galaxy ITT helped us prevent what could have been a catastrophic data breach.",
    logo: "SD",
    challenge: "SecureData was concerned about emerging security threats and needed to enhance their security posture.",
    solution: "Galaxy ITT performed comprehensive security audits and implemented advanced threat detection systems.",
    results: "Identified and resolved 15 critical security vulnerabilities, enhanced overall security posture, and provided ongoing monitoring.",
    contact: "Michael Johnson, CISO"
  },
  "innovation": {
    name: "Innovation Labs",
    industry: "Research & Development",
    description: "An R&D firm focused on cutting-edge technology innovations.",
    testimonial: "Their software development team delivered a custom solution that perfectly met our requirements and timeline.",
    logo: "IL",
    challenge: "Innovation Labs needed a custom software solution to manage their complex research workflows.",
    solution: "Galaxy ITT developed a tailored research management platform with AI-assisted data analysis capabilities.",
    results: "Research efficiency improved by 35%, data analysis time reduced by 60%, and better collaboration across research teams.",
    contact: "Sarah Williams, Research Director"
  }
};

const ClientDetail = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const client = clientId ? clientsData[clientId as keyof typeof clientsData] : null;
  
  if (!client) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
        <Header />
        <div className="pt-32 text-center text-white">
          <h1 className="text-4xl font-bold">Client Not Found</h1>
          <Button className="mt-8 bg-[#1EAEDB]" asChild>
            <Link to="/clients">Return to Clients</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342] pb-16">
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <GalaxyAnimation />
      </div>
      
      <Header />
      
      <div className="relative z-10 pt-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1EAEDB] to-[#8B5CF6] flex items-center justify-center text-white text-2xl font-bold">
              {client.logo}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(30,174,219,0.6)]">
                {client.name}
              </h1>
              <p className="text-[#33C3F0]">{client.industry}</p>
            </div>
          </div>
          
          <div className="mb-10 bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-lg">
            <blockquote className="text-xl text-gray-200 italic">
              "{client.testimonial}"
            </blockquote>
            <p className="text-right text-[#33C3F0] mt-4">— {client.contact}</p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Challenge</h2>
              <p className="text-gray-300">{client.challenge}</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Solution</h2>
              <p className="text-gray-300">{client.solution}</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md border border-white/10 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Results</h2>
              <p className="text-gray-300">{client.results}</p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button 
              className="bg-[#1EAEDB]/20 hover:bg-[#33C3F0]/40 text-white border border-[#33C3F0]/30
              backdrop-blur-sm px-8
              before:content-[''] before:absolute before:inset-0 before:bg-[#1EAEDB]/10
              before:blur-md before:opacity-70 before:-z-10 hover:before:opacity-90"
              asChild
            >
              <Link to="/clients">Back to All Clients</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
