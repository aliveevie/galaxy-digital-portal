
import React from 'react';
import Header from '@/components/Header';
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
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#2C3342]">
      <Header />
      
      <div className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Media Resources</h1>
          
          {/* Press Releases Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-white mb-6">Press Releases</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pressReleases.map((item, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/20 transition-colors">
                  <CardContent className="p-6">
                    <p className="text-[#5971D0] text-sm mb-2">{item.date}</p>
                    <h3 className="text-white text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.excerpt}</p>
                    <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-[#5971D0]">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Read Full Release
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button className="bg-transparent border border-white/20 text-white hover:bg-white/10">
                View All Press Releases
              </Button>
            </div>
          </section>
          
          {/* Media Kit Section */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-6">Media Kit</h2>
            
            <div className="bg-white/10 backdrop-blur-md rounded-lg border border-white/10 overflow-hidden">
              <div className="grid divide-y divide-white/10">
                {mediaAssets.map((asset, index) => (
                  <div key={index} className="p-4 flex justify-between items-center">
                    <div>
                      <h4 className="text-white font-medium">{asset.title}</h4>
                      <p className="text-gray-400 text-sm">{asset.type} • {asset.fileSize}</p>
                    </div>
                    <Button variant="ghost" className="text-white hover:bg-white/10 hover:text-[#5971D0]">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12 bg-[#354AA0]/20 backdrop-blur-md rounded-lg p-6 border border-[#354AA0]/30">
              <h3 className="text-xl font-semibold text-white mb-3">Media Inquiries</h3>
              <p className="text-gray-200 mb-4">For media inquiries, please contact our communications department:</p>
              <p className="text-gray-200">Email: media@galaxyitt.com.ng</p>
              <p className="text-gray-200">Phone: 08039600006</p>
            </div>
          </section>
        </div>
      </div>
      
      <footer className="bg-[#1A1F2C] text-white py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Galaxy ITT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MediaPage;
