import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from 'lucide-react';

const MediaPage = () => {
  const pressReleases = [
    {
      title: "Galaxy ITT Announces Strategic Partnership with Global Tech Provider",
      date: "April 15, 2025",
      excerpt: "The partnership aims to enhance digital infrastructure across sub-Saharan Africa..."
    },
    {
      title: "New Cybersecurity Services Launched for Government Agencies",
      date: "March 22, 2025",
      excerpt: "Galaxy ITT introduces advanced cybersecurity services tailored for MDAs..."
    },
    {
      title: "Galaxy ITT Completes Major Network Installation for State Government",
      date: "February 10, 2025",
      excerpt: "The project provides high-speed connectivity for over 20 government departments..."
    },
  ];

  const mediaAssets = [
    {
      title: "Galaxy ITT Company Overview",
      type: "PDF Brochure",
      fileSize: "3.2 MB",
    },
    {
      title: "Official Logo Pack",
      type: "ZIP Archive",
      fileSize: "8.5 MB",
    },
    {
      title: "Corporate Photography",
      type: "ZIP Archive",
      fileSize: "12.7 MB",
    },
    {
      title: "Executive Biographies",
      type: "PDF Document",
      fileSize: "1.8 MB",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#403E43] to-[#221F26]">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1F2C] to-[#33C3F0]/40"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#33C3F0] to-[#ffffff] drop-shadow-[0_0_15px_rgba(51,195,240,0.6)]">
            Media Resources
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
            Access our press releases, media kit, and other resources
          </p>
        </div>
      </div>

      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Press Releases Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Press Releases</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((item, index) => (
                <Card key={index} className="bg-black/30 backdrop-blur-md border border-white/10 overflow-hidden hover:shadow-[0_0_25px_rgba(51,195,240,0.3)] transition-all duration-300">
                  <CardContent className="p-6">
                    <p className="text-[#33C3F0] text-sm mb-2">{item.date}</p>
                    <h3 className="text-white text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.excerpt}</p>
                    <Button 
                      variant="outline" 
                      className="bg-transparent border-[#33C3F0]/30 text-white hover:bg-[#33C3F0]/10 hover:text-[#33C3F0] transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Full Release
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                className="relative bg-[#33C3F0] hover:bg-[#1EAEDB] text-white px-8 py-6
                  bg-opacity-70 backdrop-blur-sm rounded-xl
                  before:content-[''] before:absolute before:inset-0 before:bg-[#33C3F0] 
                  before:blur-xl before:opacity-70 before:-z-10 hover:before:opacity-90
                  transition-all duration-500 overflow-hidden shadow-[0_0_25px_rgba(51,195,240,0.6)]
                  after:content-[''] after:absolute after:inset-0 
                  after:bg-gradient-to-r after:from-transparent after:via-white/30 after:to-transparent 
                  after:translate-x-[-200%] hover:after:translate-x-[200%] after:transition-transform after:duration-1000
                  border border-[#33C3F0]/30"
              >
                View All Press Releases
              </Button>
            </div>
          </section>
          
          {/* Media Kit Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Media Kit</h2>
            
            <div className="bg-black/30 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
              <div className="grid divide-y divide-white/10">
                {mediaAssets.map((asset, index) => (
                  <div key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{asset.title}</h4>
                      <p className="text-gray-400 text-sm">{asset.type} • {asset.fileSize}</p>
                    </div>
                    <Button 
                      variant="ghost" 
                      className="text-white hover:bg-[#33C3F0]/10 hover:text-[#33C3F0] transition-all duration-300"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MediaPage;
